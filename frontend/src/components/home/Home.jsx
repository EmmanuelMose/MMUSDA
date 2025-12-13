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

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <button className="arrow left-arrow" onClick={prevImage}>❮</button>

        <img
          src={images[current]}
          alt="slider"
          className="slider-image"
        />

        <button className="arrow right-arrow" onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default Home;
