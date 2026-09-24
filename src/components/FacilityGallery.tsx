"use client";

import { useState } from "react";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  src?: string;
  isPlaceholder?: boolean;
}

const slides: Slide[] = [
  {
    id: "exterior",
    title: "Oldsmar Exterior & Signboard",
    subtitle: "209 State St E, Oldsmar, Florida",
    src: "/assets/images/Around_Recovery.png",
  },
  {
    id: "group-rooms",
    title: "Oldsmar Group Therapy Room",
    subtitle: "Intimate circle seating for focused group discussions",
    isPlaceholder: true,
  },
  {
    id: "individual",
    title: "Individual Therapy Suites",
    subtitle: "Private, sound-insulated clinical environments",
    isPlaceholder: true,
  },
  {
    id: "wellness",
    title: "The Wellness Center",
    subtitle: "Mindfulness, trauma-informed yoga & breath work",
    isPlaceholder: true,
  },
  {
    id: "clinical",
    title: "Clinical & Multidisciplinary Offices",
    subtitle: "Dedicated space for physician and leadership consultations",
    isPlaceholder: true,
  },
  {
    id: "bedroom",
    title: "Lodging Suite & Private Bath",
    subtitle: "Featuring serene Alabaster walls and private en-suite bath",
    isPlaceholder: true,
  },
];

export default function FacilityGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <div className="facility-carousel-wrap reveal is-visible">
      <div className="facility-carousel-main">
        {slide.src ? (
          <div className="facility-carousel-image-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.title}
              className="facility-carousel-img"
            />
            <div className="signboard-badge">
              <span className="signboard-dot"></span>
              <strong>Swiss Behavioral Health</strong> · 209 State St E
            </div>
          </div>
        ) : (
          <div className="facility-carousel-placeholder">
            <div className="carousel-placeholder-inner">
              <div className="carousel-placeholder-icon">📷</div>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
              <span className="carousel-pending-tag">Photo to be uploaded</span>
            </div>
          </div>
        )}

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
