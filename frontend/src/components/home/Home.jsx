import { useState, useEffect } from "react";
import "./Home.css";

import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

const images = [
  image1, image2, image3, image4, image5,
  image1, image2, image3, image4, image5,
  image1, image2
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [videoId, setVideoId] = useState(null);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  // Fetch live or recent YouTube video
  useEffect(() => {
    const channelId = "UCvWV-kXVd_jp9MwT4Dcsd0Q";
    const apiKey = "AIzaSyB9vyAOw2lmqALFcqcD4SKrifugIIbNFvA";

    const fetchVideo = async () => {
      try {
        const liveRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
        );
        const liveData = await liveRes.json();

        if (liveData.items && liveData.items.length > 0) {
          setVideoId(liveData.items[0].id.videoId);
        } else {
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
    const interval = setInterval(fetchVideo, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">

      {/* ---- VIDEO PLAYER ---- */}
      {showVideo && videoId && (
        <div className="video-container">

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
          </div>
        </div>
      )}

      {/* ---- IMAGE SLIDER ---- */}
      <div className="home-container">
        <button className="arrow left-arrow" onClick={prevImage}>❮</button>
        <img src={images[current]} alt="slider" className="slider-image" />
        <button className="arrow right-arrow" onClick={nextImage}>❯</button>
      </div>

    </div>
  );
};

export default Home;
