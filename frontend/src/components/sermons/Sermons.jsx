import { useEffect, useState } from "react";
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

  if (loading) return <p className="loading">Loading sermons...</p>;

  return (
    <section className="sermons-container">
      {/* TOP DESCRIPTION */}
      <div className="sermons-intro">
        <h2>Sermons</h2>
        <p>Spirit-filled messages grounded in God’s Word.</p>
        <p>Strengthening faith, inspiring hope, and transforming lives.</p>
        <p>Join us as we grow together through biblical teaching.</p>
      </div>

      {/* SERMON LIST */}
      <div className="sermons-list">
        {sermons.length === 0 && <p>No sermons available.</p>}

        {sermons.map((sermon) => {
          const embedUrl = getEmbedUrl(sermon.videoUrl);

          return (
            <div key={sermon.sermonId} className="sermon-card">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={sermon.title}
                  allowFullScreen
                />
              ) : (
                <p>Video not available</p>
              )}

              <h3>{sermon.title}</h3>
              <hr />
              <p className="sermon-date">
                {new Date(sermon.sermonDate).toLocaleDateString()}
              </p>
            </div>
          );
        })}
      </div>

      <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show All Sermons"}
      </button>
    </section>
  );
};

export default Sermons;
