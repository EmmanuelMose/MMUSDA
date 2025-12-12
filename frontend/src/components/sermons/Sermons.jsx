import { useEffect, useState } from "react";
import { getInitialSermons, getAllSermons } from "./sermonsAPI";
import "./Sermons.css";

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
      <h2>Sermons</h2>
      <div className="sermons-list">
        {sermons.length === 0 && <p>No sermons available.</p>}
        {sermons.map((sermon) => (
          <div key={sermon.sermonId} className="sermon-card">
            <h3>{sermon.title}</h3>
            <p>{new Date(sermon.sermonDate).toLocaleDateString()}</p>
            <p>{sermon.description}</p>
            <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)} className="toggle-btn">
        {showAll ? "Show Less" : "Show All Sermons"}
      </button>
    </div>
  );
};

export default Sermons;
