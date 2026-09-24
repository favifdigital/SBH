"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

export default function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<{ text: string; type: "idle" | "sending" | "success" | "error" }>({
    text: "",
    type: "idle",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ text: t.formRequired, type: "error" });
      return;
    }

    setStatus({ text: t.formSending, type: "sending" });

    try {
      const formData = new FormData(form);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Failed");
      }

      form.reset();
      setStatus({ text: t.formSuccess, type: "success" });
    } catch {
      setStatus({ text: t.formError, type: "error" });
    }
  };

  return (
    <section className="section gray section-anchor" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-info reveal is-visible">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2 id="contact-title">{t.contactTitle}</h2>
          <p>{t.contactLead}</p>

          <address className="contact-list">
            <a href={CONFIG.mapsUrl} target="_blank" rel="noopener">
              <span aria-hidden="true">⌖</span>
              <span>
                209 State St E<br />Oldsmar, FL 34677
              </span>
            </a>
            <a href={`tel:${CONFIG.telHref}`}>
              <span aria-hidden="true">☎</span>
              <span>{CONFIG.phone}</span>
            </a>
            <a href={`mailto:${CONFIG.email}`}>
              <span aria-hidden="true">✉</span>
              <span>{CONFIG.email}</span>
            </a>
          </address>

          <div className="map-wrap reveal is-visible">
            <iframe
              title="Map to Swiss Behavioral Health at 209 State St E, Oldsmar, Florida"
              src={CONFIG.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a className="text-link map-link" href={CONFIG.mapsUrl} target="_blank" rel="noopener">
            Open in Google Maps
          </a>
        </div>

        <div className="form-card reveal is-visible">
          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <h3>{t.formTitle}</h3>
              <p>{t.formIntro}</p>
            </div>
            <div className="honeypot" aria-hidden="true">
              <label>
                Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="field-grid two">
              <label>
                <span>{t.fieldName}</span>
                <input type="text" name="name" autoComplete="name" required maxLength={100} />
              </label>
              <label>
                <span>{t.fieldPhone}</span>
                <input type="tel" name="phone" autoComplete="tel" maxLength={30} />
              </label>
            </div>
            <div className="field-grid two">
              <label>
                <span>{t.fieldEmail}</span>
                <input type="email" name="email" autoComplete="email" required maxLength={150} />
              </label>
              <label>
                <span>{t.fieldPreferred}</span>
                <select name="preferred_contact" defaultValue="phone">
                  <option value="phone">{t.optionPhone}</option>
                  <option value="email">{t.optionEmail}</option>
                </select>
              </label>
            </div>
            <div className="field-grid two">
              <label>
                <span>{t.fieldReason}</span>
                <select name="reason" defaultValue="admissions">
                  <option value="admissions">{t.optionAdmissions}</option>
                  <option value="programs">{t.optionPrograms}</option>
                  <option value="insurance">{t.optionInsurance}</option>
                  <option value="general">{t.optionGeneral}</option>
                </select>
              </label>
              <label>
                <span>{t.fieldBestTime}</span>
                <input type="text" name="best_time" maxLength={80} placeholder={t.bestTimePlaceholder} />
              </label>
            </div>
            <label>
              <span>{t.fieldMessage}</span>
              <textarea name="message" rows={5} maxLength={1200} placeholder={t.messagePlaceholder} />
            </label>
            <label className="consent-row">
              <input type="checkbox" name="consent" value="yes" required />
              <span>{t.consentText}</span>
            </label>
            <button
              className="button button-primary full"
              type="submit"
              disabled={status.type === "sending"}
            >
              {status.type === "sending" ? t.formSending : t.submitForm}
            </button>
            {status.text && (
              <p
                className={`form-status ${status.type === "error" ? "error" : status.type === "success" ? "success" : ""}`}
                role="status"
                aria-live="polite"
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
