"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import FacilityGallery from "./FacilityGallery";

export default function TreatmentSection() {
  const { t } = useLanguage();

  return (
    <section className="section gray section-anchor" id="treatment" aria-labelledby="treatment-title">
      <div className="shell">
        <div className="section-heading centered reveal is-visible">
          <p className="eyebrow">{t.programsEyebrow}</p>
          <h2 id="treatment-title">{t.programsTitle}</h2>
          <p className="section-lead">{t.programsLead}</p>
        </div>

        <div className="cards cards-3 program-cards">
          <article className="card reveal is-visible">
            <span className="program-code">PHP</span>
            <h3>{t.phpTitle}</h3>
            <p>{t.phpText}</p>
          </article>
          <article className="card reveal is-visible">
            <span className="program-code">IOP</span>
            <h3>{t.iopTitle}</h3>
            <p>{t.iopText}</p>
          </article>
          <article className="card reveal is-visible">
            <span className="program-code">OP</span>
            <h3>{t.opTitle}</h3>
            <p>{t.opText}</p>
          </article>
        </div>

        <div className="therapy-wrap">
          <div className="section-heading reveal is-visible">
            <p className="eyebrow">{t.therapiesEyebrow}</p>
            <h2>{t.therapiesTitle}</h2>
            <p className="section-lead">{t.therapiesLead}</p>
          </div>
          <div className="therapy-grid">
            <Link className="therapy-card reveal is-visible" href="/individual-therapy" aria-label="Learn more about Individual Therapy">
              <span>01</span>
              <h3>{t.individualTherapy}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/group-therapy" aria-label="Learn more about Group Therapy">
              <span>02</span>
              <h3>{t.groupTherapy}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/family-therapy" aria-label="Learn more about Family Therapy & Support">
              <span>03</span>
              <h3>{t.familyTherapy}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/cbt" aria-label="Learn more about Cognitive Behavioral Therapy (CBT)">
              <span>04</span>
              <h3>{t.cbt}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/dbt" aria-label="Learn more about Dialectical Behavior Therapy (DBT)">
              <span>05</span>
              <h3>{t.dbt}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/wellness" aria-label="Learn more about Integrative Wellness Modalities">
              <span>06</span>
              <h3>{t.mi || "Wellness"}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/trauma-informed-care" aria-label="Learn more about Trauma-Informed Care">
              <span>07</span>
              <h3>{t.trauma}</h3>
            </Link>
            <Link className="therapy-card reveal is-visible" href="/relapse-prevention" aria-label="Learn more about Relapse Prevention & Psychoeducation">
              <span>08</span>
              <h3>{t.relapse}</h3>
            </Link>
          </div>
        </div>

        <div className="experience-grid">
          <article className="experience-copy reveal is-visible">
            <p className="eyebrow">{t.settingEyebrow}</p>
            <h2>{t.settingTitle}</h2>
            <p>{t.settingText}</p>
            <ul className="clean-list">
              <li>{t.settingList1}</li>
              <li>{t.settingList2}</li>
              <li>{t.settingList3}</li>
            </ul>
          </article>
          <div className="gallery-slot-wrap">
            <FacilityGallery />
          </div>
        </div>

        <div className="supportive-grid">
          <div
            className="photo-placeholder photo-placeholder-dark reveal is-visible"
            style={{
              padding: 0,
              boxSizing: "border-box",
              minHeight: "500px",
              background: "transparent",
              border: "none",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "500px",
                objectFit: "cover",
                display: "block",
                borderRadius: "18px",
              }}
              aria-label="Philippe Park and supportive lodging environment near Swiss Behavioral Health"
            >
              <source src="/assets/videos/philippe_park.mp4" type="video/mp4" />
            </video>
          </div>
          <article className="supportive-copy reveal is-visible">
            <p className="eyebrow">{t.lodgingEyebrow}</p>
            <h2>{t.lodgingTitle}</h2>
            <p>{t.lodgingText}</p>
            <p className="important-note">{t.lodgingNote}</p>
            <a className="button button-primary" href="#admissions">
              {t.askLodging}
            </a>
          </article>
        </div>

        <div className="families-panel reveal is-visible">
          <div>
            <p className="eyebrow">{t.familiesEyebrow}</p>
            <h2>{t.familiesTitle}</h2>
          </div>
          <div>
            <p>{t.familiesText}</p>
            <a className="text-link" href="#admissions">
              {t.speakAdmissions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
