import { useEffect, useState } from "react";
import { getInitialSermons, getAllSermons } from "../../Features/sermons/sermonsAPI";
import "./Sermons.css";

// Convert YouTube link to embed link
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
    <div className="sermons-container">
      <h2 className="sermons-heading">Sermons</h2>

      <div className="sermons-list">
        {sermons.length === 0 && <p>No sermons available.</p>}

        {sermons.map((sermon) => {
          const embedUrl = getEmbedUrl(sermon.videoUrl);

          return (
            <div key={sermon.sermonId} className="sermon-card">
              {/* VIDEO */}
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p>Video not available</p>
              )}

              {/* TITLE */}
              <h3 className="sermon-title">{sermon.title}</h3>

              {/* HYPHEN */}
              <hr className="sermon-divider" />

              {/* DATE */}
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
    </div>
  );
};

export default Sermons;
