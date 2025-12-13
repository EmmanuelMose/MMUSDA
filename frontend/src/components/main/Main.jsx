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
      <div className="main-header-section fade-in">
        <div className="header-left">
          <h1>Welcome to MMUSDA Church</h1>
          <p className="header-line">Empowering Faith</p>
          <p className="header-line">Inspiring Hope</p>
          <p className="header-line">Serving Community</p>
          <p className="header-line">Growing Together in Spirit</p>
          <p className="header-line">
            Join us in worship, fellowship, and community service every Sabbath.
          </p>
          <a href="/learn-more">
            <button className="welcome-btn">Learn More</button>
          </a>
        </div>
        <div className="header-right">
          <div className="member-container">
            <img src={OpenedBible} alt="Member" className="member-icon" />
            <a href="/become-member">
              <button className="member-btn">Become a Member</button>
            </a>
          </div>
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
        <p>
          Our mission is to inspire hearts, strengthen families, and bring hope
          to everyone who walks through our doors. We offer programs for all ages,
          including youth mentorship, adult study groups, and community outreach
          initiatives.
        </p>
        <p>
          Come and be part of a welcoming family where your spiritual journey is
          supported, and your gifts are celebrated.
        </p>

        <div className="info-grid">
          <div className="info-card card-animate">
            <h3>Worship</h3>
            <p>
              Experience uplifting sermons, inspiring messages, and heartfelt praise every Sabbath.
            </p>
          </div>

          <div className="info-card card-animate">
            <h3>Youth Ministry</h3>
            <p>
              Empowering the next generation through mentorship, activities, and spiritual guidance.
            </p>
          </div>

          <div className="info-card card-animate">
            <h3>Community</h3>
            <p>
              Serving the MMUST community and beyond with compassion, support programs, and outreach events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
