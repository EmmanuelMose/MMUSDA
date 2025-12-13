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
          <p className="tagline-line">Growing Together in Spirit</p>
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
        <p>
          Our mission is to inspire hearts, strengthen families, and bring
          hope to everyone who walks through our doors. We offer programs for
          all ages, including youth mentorship, adult study groups, and
          community outreach initiatives.
        </p>
        <p>
          Come and be part of a welcoming family where your spiritual journey
          is supported, and your gifts are celebrated.
        </p>

        <div className="info-grid">
          <div className="info-card card-animate">
            <h3>Worship</h3>
            <p>
              Experience uplifting sermons, inspiring messages, and heartfelt
              praise every Sabbath. Join us as we celebrate faith together.
            </p>
          </div>

          <div className="info-card card-animate">
            <h3>Youth Ministry</h3>
            <p>
              Empowering the next generation through mentorship, activities,
              and spiritual guidance to help them grow in faith and character.
            </p>
          </div>

          <div className="info-card card-animate">
            <h3>Community</h3>
            <p>
              Serving the MMUST community and beyond with compassion,
              support programs, and outreach events that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
