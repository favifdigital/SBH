"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

export default function AdmissionsSection() {
  const { t } = useLanguage();

  return (
    <section className="section navy section-anchor" id="admissions" aria-labelledby="admissions-title">
      <div className="shell">
        <div className="section-heading centered light reveal is-visible">
          <p className="eyebrow">{t.admissionsEyebrow}</p>
          <h2 id="admissions-title">{t.admissionsTitle}</h2>
          <p className="section-lead">{t.admissionsLead}</p>
        </div>

        <ol className="admission-steps">
          <li className="reveal is-visible">
            <span>01</span>
            <h3>{t.step1Title}</h3>
            <p>{t.step1Text}</p>
          </li>
          <li className="reveal is-visible">
            <span>02</span>
            <h3>{t.step2Title}</h3>
            <p>{t.step2Text}</p>
          </li>
          <li className="reveal is-visible">
            <span>03</span>
            <h3>{t.step3Title}</h3>
            <p>{t.step3Text}</p>
          </li>
          <li className="reveal is-visible">
            <span>04</span>
            <h3>{t.step4Title}</h3>
            <p>{t.step4Text}</p>
          </li>
          <li className="reveal is-visible">
            <span>05</span>
            <h3>{t.step5Title}</h3>
            <p>{t.step5Text}</p>
          </li>
        </ol>

        <div className="admissions-cta reveal is-visible">
          <div>
            <h3>{t.readyTalk}</h3>
            <p>{t.readyTalkText}</p>
          </div>
          <div className="cta-actions">
            <a className="button button-seafoam" href={`tel:${CONFIG.telHref}`}>
              {t.callNow}
            </a>
            <a className="button button-white-outline" href="#contact">
              {t.sendInquiry}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
