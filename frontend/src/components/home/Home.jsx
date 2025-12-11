import React, { useState, useEffect } from "react";
import "./Home.css";

import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

const images = [image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  // Fetch live or recent video from YouTube
  useEffect(() => {
    const channelId = "UCvWV-kXVd_jp9MwT4Dcsd0Q"; // replace with your channel ID
    const apiKey = "AIzaSyB9vyAOw2lmqALFcqcD4SKrifugIIbNFvA";       // replace with your API key

    const fetchVideo = async () => {
      try {
        // Check for live stream
        const liveRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
        );
        const liveData = await liveRes.json();

        if (liveData.items && liveData.items.length > 0) {
          // Live video available
          setVideoId(liveData.items[0].id.videoId);
        } else {
          // No live video → get most recent past video
          const pastRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${apiKey}`
          );
          const pastData = await pastRes.json();
          setVideoId(pastData.items[0].id.videoId);
        }
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
      }
    };

    fetchVideo();

    // Optional: auto-refresh every minute to detect live stream start
    const interval = setInterval(fetchVideo, 60000);
    return () => clearInterval(interval);

  }, []);

  return (
    <div className="home-wrapper">

      {/* ---- LIVE OR RECENT VIDEO PLAYER ---- */}
      {showVideo && videoId && (
        <div className={`video-container ${isExpanded ? "expanded" : ""}`}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Church Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="video-controls">
            <button onClick={() => setShowVideo(false)}>Close</button>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Minimize" : "Expand"}
            </button>
          </div>
        </div>
      )}

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
