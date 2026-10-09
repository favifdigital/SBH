import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_PAGES } from "@/data/legal";
import { CONFIG } from "@/data/translations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(LEGAL_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];
  if (!page) return {};

  return {
    title: page.metaTitle,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];

  if (!page) {
    notFound();
  }

  return (
    <main id="main" className="legal-page">
      <div className="shell">
        <div className="legal-box">
          <Link href="/" className="back-home-link">
            ← Swiss Behavioral Health
          </Link>
          <h1>{page.title}</h1>
          <div className="legal-notice">
            <strong>Pre-launch draft / Borrador previo al lanzamiento</strong>
            <p>
              {page.leadEn} / {page.leadEs}
            </p>
          </div>
          <div className="legal-contact">
            <p>
              <strong>Swiss Behavioral Health</strong>
              <br />
              {CONFIG.address}
              <br />
              <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a> ·{" "}
              <a href={`tel:${CONFIG.telHref}`}>{CONFIG.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
