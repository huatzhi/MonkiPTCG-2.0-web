import React, { useState, useEffect } from 'react';

// 你可以将图片放在 public/images/slideshow/ 目录下
const images = [
  '/images/slideshow/slide1.jpg',
  '/images/slideshow/slide2.jpg',
  '/images/slideshow/slide3.jpg',
  // 你可以继续添加更多图片
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearInterval(timer);
  }, [length]);

  const goTo = (idx) => setCurrent(idx);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);

  if (length === 0) return null;

  return (
    <div className="slideshow-container">
      <div className="slideshow-image-wrapper">
        <img src={images[current]} alt={`slide-${current+1}`} className="slideshow-image" />
        <button className="slideshow-arrow left" onClick={prevSlide}>&lt;</button>
        <button className="slideshow-arrow right" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`slideshow-dot${idx === current ? ' active' : ''}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow; 