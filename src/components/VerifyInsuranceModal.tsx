"use client";

import { useState, useEffect, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

interface VerifyInsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VerifyInsuranceModal({ isOpen, onClose }: VerifyInsuranceModalProps) {
  const { lang } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/verify-insurance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message || "Submission failed");
      setResult({
        ok: true,
        msg:
          lang === "es"
            ? "Su información de seguro se ha enviado de forma segura. Nuestro equipo de admisiones se comunicará con usted en breve."
            : "Your insurance information has been securely submitted. Our admissions team will review your benefits and contact you shortly.",
      });
      form.reset();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Error";
      setResult({
        ok: false,
        msg:
          errorMessage ||
          (lang === "es"
            ? "Ocurrió un error. Llame directamente a Admisiones al (656) 232-3504."
            : "An error occurred. Please call Admissions directly at (656) 232-3504."),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-verify-title">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: "4px" }}>
              {lang === "es" ? "Confidencial y Seguro" : "Confidential & Secure"}
            </span>
            <h2 id="modal-verify-title" style={{ fontSize: "1.8rem", margin: 0 }}>
              {lang === "es" ? "Verificación de Seguro Médico" : "Verify Your Insurance Coverage"}
            </h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginBottom: "20px" }}>
            {lang === "es"
              ? "Complete los detalles a continuación. Nuestro equipo de admisiones verificará sus beneficios de salud conductual de forma estrictamente confidencial y sin ningún costo ni obligación."
              : "Complete the details below. Our admissions team will verify your behavioral health benefits confidentially at no cost or obligation."}
          </p>

          {result && (
            <div className={`form-status ${result.ok ? "success" : "error"}`} style={{ padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>
              {result.msg}
            </div>
          )}

          {!result?.ok && (
            <form onSubmit={handleSubmit}>
              <div className="field-grid two">
                <label>
                  <span>{lang === "es" ? "Nombre Completo del Paciente *" : "Patient Full Name *"}</span>
                  <input type="text" name="patientName" required maxLength={100} placeholder="e.g. John Doe" />
                </label>
                <label>
                  <span>{lang === "es" ? "Fecha de Nacimiento *" : "Date of Birth *"}</span>
                  <input type="date" name="dob" required />
                </label>
              </div>

              <div className="field-grid two">
                <label>
                  <span>{lang === "es" ? "Teléfono de Contacto *" : "Contact Phone *"}</span>
                  <input type="tel" name="phone" required maxLength={30} placeholder="(555) 000-0000" />
                </label>
                <label>
                  <span>{lang === "es" ? "Correo Electrónico *" : "Email Address *"}</span>
                  <input type="email" name="email" required maxLength={150} placeholder="name@example.com" />
                </label>
              </div>

              <div className="field-grid two">
                <label>
                  <span>{lang === "es" ? "Aseguradora Principal *" : "Primary Insurance Provider *"}</span>
                  <select name="insuranceProvider" required defaultValue="">
                    <option value="" disabled>
                      {lang === "es" ? "Seleccione aseguradora..." : "Select provider..."}
                    </option>
                    <option value="Aetna">Aetna</option>
                    <option value="Blue Cross Blue Shield / Florida Blue">Blue Cross Blue Shield / Florida Blue</option>
                    <option value="Cigna / Evernorth">Cigna / Evernorth</option>
                    <option value="UnitedHealthcare / Optum">UnitedHealthcare / Optum</option>
                    <option value="Humana">Humana</option>
                    <option value="Tricare">Tricare</option>
                    <option value="Beacon / Carelon">Beacon / Carelon</option>
                    <option value="Other / Private Pay">Other / Private Pay</option>
                  </select>
                </label>
                <label>
                  <span>{lang === "es" ? "ID de Miembro / Póliza *" : "Member / Policy ID *"}</span>
                  <input type="text" name="memberId" required maxLength={80} placeholder="e.g. W123456789" />
                </label>
              </div>

              <div className="field-grid two">
                <label>
                  <span>{lang === "es" ? "Número de Grupo" : "Group Number"}</span>
                  <input type="text" name="groupNumber" maxLength={80} placeholder="e.g. GRP-98765" />
                </label>
                <label>
                  <span>{lang === "es" ? "Titular / Suscriptor" : "Subscriber / Policyholder Name"}</span>
                  <input type="text" name="subscriberName" maxLength={100} placeholder="If different from patient" />
                </label>
              </div>

              <div className="field-grid two">
                <label>
                  <span>{lang === "es" ? "Relación con el Paciente" : "Relationship to Patient"}</span>
                  <select name="relationship" defaultValue="self">
                    <option value="self">{lang === "es" ? "El mismo paciente" : "Self"}</option>
                    <option value="spouse">{lang === "es" ? "Cónyuge" : "Spouse"}</option>
                    <option value="child">{lang === "es" ? "Hijo/a" : "Child"}</option>
                    <option value="other">{lang === "es" ? "Otro familiar / Tutor" : "Other / Guardian"}</option>
                  </select>
                </label>
                <label>
                  <span>{lang === "es" ? "Nivel de Atención de Interés" : "Level of Care Interested In"}</span>
                  <select name="careLevel" defaultValue="php">
                    <option value="php">Partial Hospitalization Program (PHP)</option>
                    <option value="iop">Intensive Outpatient Program (IOP)</option>
                    <option value="op">Outpatient Program (OP)</option>
                    <option value="lodging">Supportive Lodging with Day Treatment</option>
                    <option value="unsure">Unsure / Need Clinical Guidance</option>
                  </select>
                </label>
              </div>

              <label>
                <span>{lang === "es" ? "Notas Adicionales (Opcional)" : "Additional Notes (Optional)"}</span>
                <textarea name="notes" rows={3} maxLength={600} placeholder={lang === "es" ? "Detalles sobre su consulta..." : "Any specific questions or preferred call times..."} />
              </label>

              <label className="consent-row" style={{ marginTop: "12px", marginBottom: "20px" }}>
                <input type="checkbox" name="consent" value="yes" required />
                <span>
                  {lang === "es"
                    ? "Autorizo a Swiss Behavioral Health a verificar la cobertura de seguro médico de forma confidencial. Entiendo que la verificación no garantiza el pago y que mis datos están protegidos bajo estándares de privacidad."
                    : "I authorize Swiss Behavioral Health to confidentially verify my insurance coverage benefits. I understand that verification does not guarantee payment and that all health information is strictly protected under privacy standards."}
                </span>
              </label>

              <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
                <button type="button" className="button button-outline" onClick={onClose}>
                  {lang === "es" ? "Cancelar" : "Cancel"}
                </button>
                <button type="submit" className="button button-primary" disabled={submitting}>
                  {submitting ? (lang === "es" ? "Verificando..." : "Submitting...") : lang === "es" ? "Enviar para Verificación" : "Submit for Verification"}
                </button>
              </div>
            </form>
          )}

          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.82rem", color: "var(--muted)" }}>
            <span>🔒 256-Bit Encrypted HIPAA-Ready Submission</span>
            <span>
              {lang === "es" ? "O llame directamente:" : "Or call directly:"}{" "}
              <a href={`tel:${CONFIG.telHref}`} style={{ color: "var(--navy)", fontWeight: 700 }}>
                {CONFIG.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
