"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

interface VerifyInsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VerifyInsuranceModal({ isOpen, onClose }: VerifyInsuranceModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-verify-title"
    >
      <div
        className="modal-box"
        style={{ maxWidth: "560px", width: "min(560px, 92vw)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: "4px" }}>
              {lang === "es" ? "Confidencial y Directo" : "Confidential & Direct"}
            </span>
            <h2 id="modal-verify-title" style={{ fontSize: "1.7rem", margin: 0, color: "var(--navy)" }}>
              {lang === "es" ? "Verifique su Seguro Directamente" : "Verify Insurance with Admissions"}
            </h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-body" style={{ textAlign: "center", padding: "32px 28px" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              background: "rgba(93, 164, 162, 0.15)",
              color: "var(--seafoam)",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 20px",
              fontSize: "1.9rem",
            }}
            aria-hidden="true"
          >
            📞
          </div>

          <p style={{ fontSize: "1.08rem", color: "var(--navy)", fontWeight: 700, marginBottom: "12px", lineHeight: "1.4" }}>
            {lang === "es"
              ? "Hable directamente con nuestro equipo de admisiones para verificar su cobertura en tiempo real."
              : "Please call Admissions directly to verify your insurance benefits in real time."}
          </p>

          <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "26px" }}>
            {lang === "es"
              ? "Para proteger su privacidad y brindarle información exacta de inmediato, nuestras verificaciones de seguro se realizan directamente por teléfono. Nuestro equipo revisará sus beneficios sin ningún costo ni compromiso."
              : "To protect your privacy and ensure fast, accurate answers, insurance verifications are conducted directly over the phone. Our team will review your benefits at no cost or obligation."}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <a
              className="button button-primary"
              href={`tel:${CONFIG.telHref}`}
              style={{
                width: "100%",
                maxWidth: "360px",
                fontSize: "1rem",
                padding: "16px 24px",
                boxShadow: "0 8px 24px rgba(8, 46, 107, 0.18)",
              }}
            >
              📞 {lang === "es" ? "Llamar a Admisiones:" : "Call Admissions:"} {CONFIG.phone}
            </a>

            <a
              className="button button-outline"
              href={`mailto:${CONFIG.email}?subject=Insurance%20Verification%20Inquiry`}
              style={{ width: "100%", maxWidth: "360px" }}
            >
              ✉️ {lang === "es" ? "Enviar Consulta por Email" : "Email Admissions"}
            </a>
          </div>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "18px",
              borderTop: "1px solid var(--line)",
              fontSize: "0.82rem",
              color: "var(--muted)",
            }}
          >
            {lang === "es"
              ? "100% Confidencial · Cumplimiento estricto de HIPAA · Sin compromiso"
              : "100% Confidential · Strict HIPAA Compliance · No Obligation"}
          </div>
        </div>
      </div>
    </div>
  );
}
