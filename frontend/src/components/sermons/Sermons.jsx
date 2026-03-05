import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";
import { getInitialSermons, getAllSermons } from "../../Features/sermons/sermonsAPI";
import "./Sermons.css";

const getEmbedUrl = (url) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSermons = async () => {
      setLoading(true);
      const data = showAll ? await getAllSermons() : await getInitialSermons();
      setSermons(data);
      setLoading(false);
    };

    fetchSermons();
  }, [showAll]);

  if (loading) {
    return <p className="loading">Loading sermons...</p>;
  }

  return (
    <section className="sermons-section">
      <div className="sermons-wrapper">

        {/* HEADER */}
        <div className="sermons-header">
          <div>
            <h2>Latest Sermons</h2>
            <p>
              Listen to powerful messages from our pulpit that inspire faith,
              build hope, and strengthen our walk with Christ.
            </p>
          </div>

          <button
            className="toggle-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Sermons"}
          </button>
        </div>

        {/* SERMON GRID */}
        <div className="sermons-grid">

          {sermons.length === 0 && <p>No sermons available.</p>}

          {sermons.map((sermon, index) => {

            const embedUrl = getEmbedUrl(sermon.videoUrl);

            return (
              <motion.div
                key={sermon.sermonId}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="sermon-card"
              >

                {/* VIDEO */}
                <div className="video-wrapper">

                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={sermon.title}
                      allowFullScreen
                    />
                  ) : (
                    <div className="video-placeholder">
                      Video unavailable
                    </div>
                  )}

                  <div className="video-overlay">
                    <PlayCircle className="play-icon" />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="sermon-content">

                  <h3>{sermon.title}</h3>

                  <div className="sermon-meta">
                    <Clock size={16} />
                    <span>
                      {new Date(sermon.sermonDate).toLocaleDateString()}
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Sermons;