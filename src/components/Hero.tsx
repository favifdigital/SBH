"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const openVerify = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-verify-modal"));
  };

  return (
    <section className="hero section-anchor" id="home" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy reveal is-visible">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1
            id="hero-title"
            dangerouslySetInnerHTML={{ __html: t.heroTitle }}
          />
          <p className="hero-lead">{t.heroLead}</p>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#admissions">
              {t.speakAdmissions}
            </a>
            <button
              type="button"
              className="button button-outline verify-link"
              onClick={openVerify}
            >
              {t.verifyInsurance}
            </button>
          </div>
        </div>

        <aside className="hero-mark reveal is-visible" aria-label="Swiss Behavioral Health brand mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/SBH_Logo_Vertical_Color.svg"
            alt="Swiss Behavioral Health"
            width={310}
            height={200}
            aria-hidden="true"
          />
          <div className="hero-mark-line"></div>
          <p>{t.heroMarkText}</p>
        </aside>
      </div>
    </section>
  );
}
