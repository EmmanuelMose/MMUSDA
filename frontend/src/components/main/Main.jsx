import React from "react";
import "./Main.css";
import OpenedBible from "../../assets/images/OpenedBible.jpeg";

const Main = () => {
  return (
    <div
      className="main-wrapper"
      style={{
        backgroundImage: `url(${OpenedBible})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ---- HEADER ---- */}
      <div className="main-header-frame fade-in">
        <div className="main-header">
          <h1>Welcome to MMUSDA Church</h1>
          <p className="tagline-line">Empowering Faith</p>
          <p className="tagline-line">Inspiring Hope</p>
          <p className="tagline-line">Serving Community</p>
          <button className="welcome-btn">Learn More</button>
        </div>
      </div>

      {/* ---- EXTRA CONTENT ---- */}
      <div className="main-info fade-in-up">
        <h2>About Our Church</h2>
        <p>
          We are committed to nurturing spiritual growth, fostering connections,
          and serving our community with love and purpose. Join us every Sabbath
          for worship, music, fellowship, and spiritual enrichment.
        </p>

        <div className="info-grid">
          <div className="info-card card-animate">
            <h3>Worship</h3>
            <p>Experience uplifting sermons and inspiring messages every Sabbath.</p>
          </div>

          <div className="info-card card-animate">
            <h3>Youth Ministry</h3>
            <p>Empowering the next generation through mentorship and activities.</p>
          </div>

          <div className="info-card card-animate">
            <h3>Community</h3>
            <p>Serving the MMUST community and beyond with compassion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
