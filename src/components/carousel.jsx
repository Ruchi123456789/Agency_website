
import React, { useState } from "react";
import "./carousel.css"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/28975820/pexels-photo-28975820/free-photo-of-scenic-autumn-view-of-covered-bridge-in-lincoln-nh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/10252812/pexels-photo-10252812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/27373548/pexels-photo-27373548/free-photo-of-tropea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">

      <button className="carousel-button   
 prev" onClick={handlePrev}>
        Previous
      </button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt="Slide" />
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Carousel