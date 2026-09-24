"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

interface FinalCTAProps {
  onOpenVerify?: () => void;
}

export default function FinalCTA({ onOpenVerify }: FinalCTAProps) {
  const { lang, t } = useLanguage();

  return (
    <section className="final-cta consolidated-closing-cta">
      <div className="shell final-cta-inner reveal is-visible">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/SBH_Isotipo_Color.svg"
          alt="Swiss Behavioral Health leaf icon"
          width={84}
          height={84}
          aria-hidden="true"
        />
        <div className="closing-cta-copy">
          <p className="eyebrow">{t.finalEyebrow}</p>
          <h2 style={{ fontSize: "clamp(2.1rem, 3.2vw, 3.2rem)", marginBottom: "12px", lineHeight: "1.15" }}>
            {t.closingAdmissionsTitle || "A more personal path forward starts with a conversation."}
          </h2>
          <p style={{ fontSize: "1.12rem", color: "var(--muted)", maxWidth: "780px" }}>
            {t.closingAdmissionsLead ||
              "Speak confidentially with our admissions team about treatment, supportive lodging, insurance, and the next appropriate step."}
          </p>
        </div>
        <div className="closing-cta-buttons" style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <a className="button button-primary" href={`tel:${CONFIG.telHref}`}>
            {lang === "es" ? "Llamar a Admisiones" : "Call Admissions"}
          </a>
          <button
            type="button"
            className="button button-outline"
            onClick={onOpenVerify ? onOpenVerify : () => window.dispatchEvent(new CustomEvent("open-verify-modal"))}
          >
            {t.verifyInsurance}
          </button>
        </div>
      </div>
    </section>
  );
}
