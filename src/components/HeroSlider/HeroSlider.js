import React, { useState } from 'react';
import './HeroSlider.css'; // Import CSS file for styling

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of current slide

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="hero-slider">
      <div className="slides-container">
        {slides.map((slide, index) => index === currentSlide && (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.imageUrl} alt={slide.altText} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>
      &lt;
      </button>
      <button className="next-btn" onClick={handleNext}>
       &gt;
      </button>
    </div>
  );
};

export default HeroSlider;
