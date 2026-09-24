"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 1240) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const openVerify = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    window.dispatchEvent(new CustomEvent("open-verify-modal"));
  };

  return (
    <header className="site-header" id="top">
      <div className="header-inner shell">
        <Link
          className="brand-link"
          href={isHome ? "#home" : "/"}
          aria-label="Swiss Behavioral Health home"
          onClick={closeMenu}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/SBH_Logo_Horizontal_Color.svg"
            alt="Swiss Behavioral Health"
            className="brand-logo"
            width={240}
            height={52}
          />
        </Link>

        <nav
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <a href={getHref("#home")} data-nav="home" onClick={closeMenu}>
            {t.navHome}
          </a>
          <a href={getHref("#about")} data-nav="about" onClick={closeMenu}>
            {t.navAbout}
          </a>
          <a href={getHref("#treatment")} data-nav="treatment" onClick={closeMenu}>
            {t.navTreatment}
          </a>
          <a href={getHref("#insurance")} data-nav="insurance" onClick={closeMenu}>
            {t.navInsurance}
          </a>
          <a href={getHref("#admissions")} data-nav="admissions" onClick={closeMenu}>
            {t.navAdmissions}
          </a>
          <a href={getHref("#contact")} data-nav="contact" onClick={closeMenu}>
            {t.navContact}
          </a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "is-active" : ""}`}
              data-lang="en"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={`lang-btn ${lang === "es" ? "is-active" : ""}`}
              data-lang="es"
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <button
            type="button"
            className="button button-small button-seafoam verify-link"
            onClick={openVerify}
          >
            {t.verifyInsurance}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={t.openMenu}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="sr-only">{t.menu}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
