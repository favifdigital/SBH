"use client";

import { useState, useRef, TouchEvent } from "react";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  src?: string;
  isPlaceholder?: boolean;
  hasSignboard?: boolean;
  note?: string;
}

const slides: Slide[] = [
  {
    id: "exterior-grounds",
    title: "Oldsmar Campus & Grounds",
    subtitle: "209 State St E, Oldsmar, Florida",
    src: "/assets/images/Around_Recovery.png",
    hasSignboard: true,
  },
  {
    id: "exterior-office",
    title: "The Oldsmar Exterior Office",
    subtitle: "Tranquil tree-lined treatment setting beside Philippe Park",
    src: "/assets/images/oldsmar_exterior_office.jpg",
    hasSignboard: true,
  },
  {
    id: "group-rooms",
    title: "The Oldsmar Group Rooms",
    subtitle: "Intimate circle seating for focused clinical discussions",
    isPlaceholder: true,
    note: "Professional photography being prepared",
  },
  {
    id: "individual",
    title: "Individual Therapy Spaces",
    subtitle: "Private, sound-insulated clinical consultation suites",
    isPlaceholder: true,
    note: "Professional photography being prepared",
  },
  {
    id: "wellness",
    title: "The Wellness Center",
    subtitle: "Trauma-informed yoga, breath work, sound healing & meditation",
    isPlaceholder: true,
    note: "Professional photography being prepared",
  },
  {
    id: "clinical",
    title: "Clinical-Office Areas",
    subtitle: "Dedicated multidisciplinary leadership and medical spaces",
    isPlaceholder: true,
    note: "Professional photography being prepared",
  },
  {
    id: "bedroom",
    title: "Lodging Suite & Private Bath",
    subtitle: "Comfortable lodging featuring serene Alabaster walls and private en-suite bath",
    isPlaceholder: true,
    note: "Alabaster wall finishes currently being applied",
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
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      // Swiped left -> next
      next();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
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
              alt={`${slide.title} - Swiss Behavioral Health, Oldsmar FL`}
              className="facility-carousel-img"
              loading="lazy"
            />
            {slide.hasSignboard && (
              <div className="signboard-badge architectural-signboard" aria-label="Facility entrance signboard">
                <div className="signboard-brand">
                  <span className="signboard-dot"></span>
                  <strong>Swiss Behavioral Health</strong>
                </div>
                <span className="signboard-address">209 State St E · Oldsmar, FL</span>
              </div>
            )}
          </div>
        ) : (
          <div className="facility-carousel-placeholder">
            <div className="carousel-placeholder-inner">
              <div className="carousel-placeholder-icon" aria-hidden="true">🌿</div>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
              <span className="carousel-pending-tag">{slide.note || "Photo to be uploaded"}</span>
            </div>
          </div>
        )}

        <div className="carousel-slide-counter" aria-hidden="true">
          <span>{current + 1}</span> / {slides.length}
        </div>

        <div className="carousel-overlay-caption">
          <h4>{slide.title}</h4>
          <p>{slide.subtitle}</p>
        </div>

        <button
          type="button"
          className="carousel-btn prev"
          onClick={prev}
          aria-label="Previous facility photo"
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-btn next"
          onClick={next}
          aria-label="Next facility photo"
        >
          ›
        </button>
      </div>

      <div className="carousel-nav-strip">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`carousel-thumb-btn ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
            aria-label={`View ${s.title}`}
          >
            <span className="thumb-idx">0{idx + 1}</span>
            <span className="thumb-name">{s.title.split(" ")[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
