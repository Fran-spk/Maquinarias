// src/components/Carousel.tsx
import React from "react";

interface CarouselProps {
  id?: string;
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ id = "carouselExample", images }) => {
  return (
    <div id={id} className="carousel slide">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={src} className="d-block w-100" alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};