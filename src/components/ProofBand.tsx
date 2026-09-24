"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ProofBand() {
  const { t } = useLanguage();

  return (
    <section className="proof-band" aria-label="Key facts">
      <div className="shell proof-grid">
        <article className="proof-item">
          <strong>{t.proofTwiceWeekly || "Twice-Weekly"}</strong>
          <span>{t.proofBeds}</span>
        </article>
        <article className="proof-item">
          <strong>{t.proofLow}</strong>
          <span>{t.proofRatio}</span>
        </article>
        <article className="proof-item">
          <strong>PHP · IOP · OP</strong>
          <span>{t.proofCare}</span>
        </article>
        <article className="proof-item">
          <strong>{t.proofEnSuite || "En-Suite Lodging"}</strong>
          <span>{t.proofLocation}</span>
        </article>
      </div>
    </section>
  );
}
