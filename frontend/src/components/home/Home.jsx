import React, { useState, useEffect } from "react";
import "./Home.css";

// Importing images
//import logo1 from "../../assets/images/logo1";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

// Repeat these images to make 12 total
const images = [
  image1, image2, image3,
  image4, image5, image1,
  image2, image3, image4,
  image5, image1, image2
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-wrapper">

      {/* ---- HEADER ---- */}
      <div className="home-header">
        <h1>Welcome to MMUSDA Church</h1>
        <p className="tagline">Empowering Faith • Inspiring Hope • Serving Community</p>
        <button className="welcome-btn">Learn More</button>
      </div>

      {/* ---- IMAGE SLIDER ---- */}
      <div className="home-container">
        <button className="arrow left-arrow" onClick={prevImage}>❮</button>

        <img src={images[current]} alt="slider" className="slider-image" />

        <button className="arrow right-arrow" onClick={nextImage}>❯</button>
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

    </div>
  );
};

export default Home;
