"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

export default function InsuranceSection() {
  const { t } = useLanguage();

  const openVerify = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-verify-modal"));
  };

  return (
    <section className="section white section-anchor" id="insurance" aria-labelledby="insurance-title">
      <div className="shell insurance-grid">
        <div className="section-heading reveal is-visible">
          <p className="eyebrow">{t.insuranceEyebrow}</p>
          <h2 id="insurance-title">{t.insuranceTitle}</h2>
          <p className="section-lead">{t.insuranceLead}</p>
          <div className="notice-box">
            <strong>{t.insuranceSecureTitle}</strong>
            <p>{t.insuranceSecureText}</p>
            <button
              type="button"
              className="button button-small button-seafoam"
              style={{ marginTop: "16px" }}
              onClick={openVerify}
            >
              {t.verifyInsurance}
            </button>
          </div>
        </div>

        <aside className="contact-card reveal is-visible">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/SBH_Isotipo_Color.svg"
            alt="Swiss Behavioral Health"
            width={80}
            height={80}
            aria-hidden="true"
          />
          <h3>{t.insuranceHelp}</h3>
          <p>{t.insuranceHelpText}</p>
          <a className="button button-primary full" href={`tel:${CONFIG.telHref}`}>
            {t.callAdmissions}
          </a>
          <button type="button" className="button button-outline full" onClick={openVerify}>
            {t.verifyInsurance}
          </button>
          <a
            className="button button-outline full"
            href={`mailto:${CONFIG.email}?subject=Insurance%20and%20Payment%20Question`}
          >
            {t.emailAdmissions}
          </a>
        </aside>
      </div>
    </section>
  );
}
