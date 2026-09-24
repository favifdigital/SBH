"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TherapyPageData, THERAPIES, THERAPY_COMMON } from "@/data/therapies";
import { CONFIG } from "@/data/translations";
import FinalCTA from "@/components/FinalCTA";

export default function TherapyDetailClient({ therapy }: { therapy: TherapyPageData }) {
  const { lang, t } = useLanguage();
  const data = therapy[lang] || therapy.en;
  const common = THERAPY_COMMON[lang] || THERAPY_COMMON.en;

  const faqs = [
    {
      q: lang === "es" ? `¿Qué es ${data.heading}?` : `What is ${data.heading}?`,
      a: data.intro,
    },
    {
      q: common.insuranceQuestion,
      a: common.insuranceAnswer,
    },
    {
      q: common.durationQuestion,
      a: common.durationAnswer,
    },
    {
      q: common.startQuestion,
      a: common.startAnswer,
    },
  ];

  return (
    <main id="main">
      <section className="subpage-hero" aria-labelledby="subpage-title">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">{common.home}</Link> /{" "}
            <Link href="/#treatment">{common.treatment}</Link> / {data.heading}
          </nav>
          <p className="eyebrow">{data.eyebrow}</p>
          <h1 id="subpage-title">{data.heading}</h1>
          <p className="hero-lead">{data.lead}</p>
        </div>
      </section>

      <div className="therapy-nav-band" aria-label="Therapy navigation">
        <div className="shell therapy-nav-scroll">
          {THERAPIES.map((item) => {
            const isCurrent = item.slug === therapy.slug;
            const itemHeading = item[lang]?.heading || item.en.heading;
            return (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={`therapy-nav-link ${isCurrent ? "is-current" : ""}`}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.order} · {itemHeading}
              </Link>
            );
          })}
        </div>
      </div>

      <section className="section white">
        <div className="shell therapy-detail-grid">
          <article className="therapy-detail-copy reveal is-visible">
            <h2>{data.sectionTitle}</h2>
            <p>{data.intro}</p>
            <h3>{data.focusTitle}</h3>
            <ul id="therapy-focus-list">
              {data.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p>{data.goal}</p>
            <p className="important-note">{common.clinicalNote}</p>
          </article>

          <aside className="side-contact reveal is-visible">
            <p className="eyebrow">{data.admissionsEyebrow}</p>
            <h2>{data.admissionsTitle}</h2>
            <p>{data.admissionsText}</p>
            <a className="button button-primary full" href={`tel:${CONFIG.telHref}`}>
              {data.callButton}
            </a>
            <a
              className="button button-outline full"
              style={{ marginTop: "10px" }}
              href="/#contact"
            >
              {data.inquiryButton}
            </a>
          </aside>
        </div>

        <div className="shell related-therapies">
          <div className="section-heading reveal is-visible">
            <p className="eyebrow">{data.relatedEyebrow}</p>
            <h2>{data.relatedTitle}</h2>
          </div>
          <div className="therapy-grid">
            {THERAPIES.map((item) => {
              const itemHeading = item[lang]?.heading || item.en.heading;
              return (
                <Link key={item.slug} className="therapy-card reveal is-visible" href={`/${item.slug}`}>
                  <span>{item.order}</span>
                  <h3>{itemHeading}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="shell">
          <div className="section-heading reveal is-visible">
            <p className="eyebrow">{data.faqEyebrow}</p>
            <h2>{data.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <article key={i} className="faq-item reveal is-visible">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
