"use client";

import { useState, useRef, TouchEvent } from "react";

interface Slide {
  id: string;
  src?: string;
  isPlaceholder?: boolean;
  alt: string;
}

const slides: Slide[] = [
  {
    id: "exterior-1",
    src: "/assets/images/Around_Recovery.png",
    alt: "Swiss Behavioral Health campus and grounds",
  },
  {
    id: "exterior-2",
    src: "/assets/images/Building2.webp",
    alt: "Swiss Behavioral Health facility building and entrance in Oldsmar, Florida",
  },
];

export default function FacilityGallery() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = slides[current];

  return (
    <div
      className="facility-carousel-wrap reveal is-visible"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="facility-carousel-main">
        {slide.src ? (
          <div className="facility-carousel-image-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="facility-carousel-img"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="facility-carousel-placeholder">
            <div className="carousel-placeholder-inner">
              <div className="carousel-placeholder-icon" aria-hidden="true">📷</div>
              <span className="carousel-pending-tag">Photo to be added</span>
            </div>
          </div>
        )}

        <button
          type="button"
          className="carousel-btn prev"
          onClick={prev}
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-btn next"
          onClick={next}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <div className="carousel-nav-dots" role="tablist" aria-label="Photo slides">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`carousel-dot-btn ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
            aria-label={`View photo ${idx + 1}`}
            aria-selected={idx === current}
            role="tab"
          >
            <span className="dot-pill"></span>
            <span className="dot-label">0{idx + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
