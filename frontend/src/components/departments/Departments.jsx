import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchDepartments } from "../../Features/departments/departmentsAPI.js";
import "./Departments.css";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadDepartments = async () => {
      const data = await fetchDepartments();
      setDepartments(data);
      setLoading(false);
    };
    loadDepartments();
  }, []);

  const filteredDepts = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="dept-loading-container">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="dept-loader"
        />
        <p>Loading Ministries...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="dept-page">
      <section className="dept-hero">
        <div className="dept-hero-content">
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            src="data:image/jpeg;base64,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" 
            alt="SDA Logo" 
            className="sda-logo"
          />
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="dept-title"
          >
            MMUSDA CHURCH DEPARTMENTS
          </motion.h1>
          
          <div className="dept-search-wrapper">
            <input
              type="text"
              placeholder="Search for a ministry..."
              className="dept-glass-search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </section>

      <main className="dept-main">
        <div className="dept-intro-section">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="dept-verse-card"
          >
            <p>“For as the body is one and has many members, but all the members of that one body, being many, are one body, so also is Christ.”</p>
            <span>— 1 Corinthians 12:12</span>
          </motion.div>
        </div>

        <motion.div
          className="dept-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredDepts.map((dept) => (
              <motion.div
                key={dept.id}
                className="dept-card"
                variants={cardVariants}
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,43,91,0.15)" }}
              >
                <div className="dept-card-accent"></div>
                <div className="dept-info">
                  <h2 className="dept-name-text">{dept.name}</h2>
                  <p className="dept-description-text">
                    {dept.description || "Dedicated to serving the community and growing in faith together."}
                  </p>
                  
                  <div className="dept-leader-box">
                    <div className="leader-avatar">
                      {dept.adminLeader?.charAt(0) || "L"}
                    </div>
                    <div className="leader-details">
                      <span className="leader-label">Department Head</span>
                      <p className="leader-name">{dept.adminLeader || "Vacant"}</p>
                    </div>
                  </div>

                  <div className="dept-contact-pill">
                    <span className="contact-icon">📧</span>
                    <span className="contact-text">{dept.adminContact || "Contact Church Office"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDepts.length === 0 && (
          <div className="dept-empty">
            <p>No departments found matching your search.</p>
          </div>
        )}
      </main>

      <footer className="dept-footer">
        <p className="footer-psalm">“Serve the Lord with gladness; come before His presence with singing.”</p>
        <span className="psalm-ref">— Psalm 100:2</span>
      </footer>
    </div>
  );
};

export default Departments;