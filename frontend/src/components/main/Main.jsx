import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      {/* ---- HEADER ---- */}
      <div className="home-header">
        <h1>Welcome to MMUSDA Church</h1>
        <p className="tagline">Empowering Faith • Inspiring Hope • Serving Community</p>
        <button className="welcome-btn">Learn More</button>
      </div>

      {/* ---- EXTRA CONTENT ---- */}
      <div className="home-info">
        <h2>About Our Church</h2>
        <p>
          We are committed to nurturing spiritual growth, fostering connections,
          and serving our community with love and purpose. Join us every Sabbath
          for worship, music, fellowship, and spiritual enrichment.
        </p>

        <div className="info-grid">
          <div className="info-card">
            <h3>Worship</h3>
            <p>Experience uplifting sermons and inspiring messages every Sabbath.</p>
          </div>

          <div className="info-card">
            <h3>Youth Ministry</h3>
            <p>Empowering the next generation through mentorship and activities.</p>
          </div>

          <div className="info-card">
            <h3>Community</h3>
            <p>Serving the MMUST community and beyond with compassion.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
