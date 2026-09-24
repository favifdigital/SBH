import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { THERAPIES, THERAPIES_BY_SLUG } from "@/data/therapies";
import TherapyDetailClient from "./TherapyDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return THERAPIES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const therapy = THERAPIES_BY_SLUG[slug];
  if (!therapy) return {};

  return {
    title: therapy.en.documentTitle,
    description: therapy.en.lead,
    keywords: [
      `${therapy.en.heading.toLowerCase()} Oldsmar FL`,
      `${therapy.en.heading.toLowerCase()} Tampa Bay`,
      "therapy services Oldsmar",
      "addiction recovery Florida"
    ],
    openGraph: {
      title: therapy.en.documentTitle,
      description: therapy.en.lead,
      url: `https://www.swissbehavioralhealth.com/${slug}`,
    },
    alternates: {
      canonical: `https://www.swissbehavioralhealth.com/${slug}`,
    },
  };
}

export default async function TherapyPage({ params }: Props) {
  const { slug } = await params;
  const therapy = THERAPIES_BY_SLUG[slug];

  if (!therapy) {
    notFound();
  }

  return <TherapyDetailClient therapy={therapy} />;
}
