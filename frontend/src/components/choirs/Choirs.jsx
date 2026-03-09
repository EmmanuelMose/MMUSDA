import React, { useEffect, useState } from "react";
import { fetchChoirs } from "../../Features/choirs/choirsAPI.js";
import { Music, Users, User, Quote, Mic2, Music4 } from "lucide-react";
import { motion } from "framer-motion";
import "./Choirs.css";

const Choirs = () => {
  const [choirs, setChoirs] = useState([]);
  const [loading, setLoading] = useState(true);

  const musicVerses = [
    "Psalm 95:1 - Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation!",
    "Colossians 3:16 - Sing psalms and hymns and spiritual songs with thankfulness in your hearts to God.",
    "Psalm 147:1 - Praise the Lord! For it is good to sing praises to our God; for it is pleasant.",
    "Psalm 104:33 - I will sing to the Lord as long as I live; I will sing praise to my God while I have being."
  ];

  useEffect(() => {
    const getChoirs = async () => {
      try {
        const data = await fetchChoirs();
        setChoirs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getChoirs();
  }, []);

  if (loading) {
    return (
      <div className="choirs-loading-container">
        <div className="music-loader">
          <Music4 size={50} className="pulse-icon" />
          <p>Harmonizing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="choirs-page">
      <header className="choirs-hero">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <Mic2 className="hero-icon" size={40} />
          <h1 className="choirs-main-title">MMUSDA <span className="highlight">CHOIRS</span></h1>
          <div className="hero-verse">
            <Quote size={14} className="q-icon" />
            <p>"Sing to Him a new song; play skillfully with a shout of joy." — Psalm 33:3</p>
          </div>
        </motion.div>
      </header>

      <div className="choirs-main-wrapper">
        <div className="choirs-grid">
          {choirs.length > 0 ? (
            choirs.map((choir, index) => (
              <motion.div 
                key={choir.choirId} 
                className="choir-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="card-accent-line"></div>
                <div className="choir-body">
                  <h3 className="choir-name">{choir.name}</h3>
                  
                  <div className="choir-meta">
                    <div className="meta-item">
                      <User size={15} />
                      <span><strong>Leader:</strong> {choir.leader || "TBA"}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={15} />
                      <span><strong>Members:</strong> {choir.members || "N/A"}</span>
                    </div>
                  </div>

                  {choir.description && (
                    <p className="choir-desc">{choir.description}</p>
                  )}

                  <div className="bible-footer">
                    <Music size={12} />
                    <span>{musicVerses[index % musicVerses.length]}</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="choirs-empty-msg">No active choirs found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Choirs;