"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="section white section-anchor" id="about" aria-labelledby="about-title">
      <div className="shell">
        <div className="section-heading reveal is-visible">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2 id="about-title">{t.aboutTitle}</h2>
          <p className="section-lead">{t.aboutLead}</p>
          {t.about14BedsLine && (
            <p
              className="about-intentional-note"
              style={{ marginTop: "14px", fontStyle: "italic", color: "var(--navy)", fontWeight: 600 }}
            >
              “{t.about14BedsLine}”
            </p>
          )}
        </div>

        <div className="feature-split">
          <div className="number-feature reveal is-visible" aria-hidden="true">
            14
          </div>
          <div className="feature-copy reveal is-visible">
            <h3>{t.aboutQuote}</h3>
            <p>{t.aboutP1}</p>
            <div className="check-grid">
              <span>{t.aboutCheck1}</span>
              <span>{t.aboutCheck2}</span>
              <span>{t.aboutCheck3}</span>
              <span>{t.aboutCheck4}</span>
            </div>
          </div>
        </div>

        <div className="divider divider-seafoam" aria-hidden="true"></div>

        <div className="section-heading centered reveal is-visible">
          <p className="eyebrow">{t.pillarsEyebrow}</p>
          <h2 className="pillars-title-one-line">{t.pillarsTitle}</h2>
          <p className="section-lead">{t.pillarsLead}</p>
        </div>

        <div className="cards cards-3 pillars-cards">
          <article className="card reveal is-visible">
            <span className="card-number">01</span>
            <h3>{t.pillarClinicalTitle}</h3>
            <p>{t.pillarClinicalText}</p>
          </article>
          <article className="card reveal is-visible">
            <span className="card-number">02</span>
            <h3>{t.pillarWellnessTitle}</h3>
            <p>{t.pillarWellnessText}</p>
          </article>
          <article className="card reveal is-visible">
            <span className="card-number">03</span>
            <h3>{t.pillarFamilyTitle}</h3>
            <p>{t.pillarFamilyText}</p>
          </article>
        </div>

        <div className="team-block">
          <div className="section-heading reveal is-visible">
            <p className="eyebrow">{t.teamEyebrow}</p>
            <h2>{t.teamTitle}</h2>
            <p className="section-lead">{t.teamLead}</p>
          </div>
          <div className="cards team-cards team-cards-3">
            <article className="profile-card reveal is-visible">
              <div className="profile-photo media-photo-slot is-loaded">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/team/Medical_Director.png"
                  alt="Dr. Brian Gadbois, MD, Medical Director at Swiss Behavioral Health in Oldsmar, Florida"
                  className="loaded-photo"
                />
              </div>
              <div className="profile-copy">
                <span>{t.medicalDirector}</span>
                <h3>Dr. Brian Gadbois, MD</h3>
                <p>{t.drGadboisBio}</p>
              </div>
            </article>

            <article className="profile-card reveal is-visible">
              <div className="profile-photo media-photo-slot is-loaded">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/team/Director_Program.png"
                  alt="Jey Roche, MA, MCAP, Program Director at Swiss Behavioral Health in Oldsmar, Florida"
                  className="loaded-photo"
                />
              </div>
              <div className="profile-copy">
                <span>{t.clinicalDirector || "Program Director (MA, MCAP)"}</span>
                <h3>Jey Roche, MA, MCAP</h3>
                <p>{t.jeyRocheBio}</p>
              </div>
            </article>

            <article className="profile-card reveal is-visible">
              <div className="profile-photo media-photo-slot is-loaded">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/team/Angela_Turner.png"
                  alt="Dr. Angela Turner, Ph.D., LMHC, MCAP, Clinical Leadership at Swiss Behavioral Health"
                  className="loaded-photo"
                />
              </div>
              <div className="profile-copy">
                <span>{t.angelaTurnerRole || "Clinical Leadership"}</span>
                <h3>Dr. Angela Turner, Ph.D., LMHC, MCAP</h3>
                <p>{t.angelaTurnerBio}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
