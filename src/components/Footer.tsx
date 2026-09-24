"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/SBH_Logo_Horizontal_White.svg"
            alt="Swiss Behavioral Health"
            width={250}
            height={50}
          />
          <p>Clinically Led. Personally Delivered.</p>
        </div>

        <div className="footer-col">
          <h3>{t.footerExplore}</h3>
          <a href={getHref("#about")}>{t.navAbout}</a>
          <a href={getHref("#treatment")}>{t.navTreatment}</a>
          <a href={getHref("#insurance")}>{t.navInsurance}</a>
          <a href={getHref("#admissions")}>{t.navAdmissions}</a>
        </div>

        <div className="footer-col">
          <h3>{t.footerContact}</h3>
          <a href={`tel:${CONFIG.telHref}`}>{CONFIG.phone}</a>
          <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          <span>
            209 State St E<br />Oldsmar, FL 34677
          </span>
        </div>

        <div className="footer-col">
          <h3>{t.footerLegal}</h3>
          <Link href="/legal/privacy">{t.privacyPolicy}</Link>
          <Link href="/legal/terms">{t.termsDisclaimer}</Link>
          <Link href="/legal/accessibility">{t.accessibility}</Link>
          <Link href="/legal/npp">{t.privacyPractices}</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>
          © <span id="year">{currentYear}</span> Swiss Behavioral Health.{" "}
          <span>{t.rightsReserved}</span>
        </span>
        <a href="#top">{t.backTop}</a>
      </div>
    </footer>
  );
}
