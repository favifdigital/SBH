import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalModals from "@/components/GlobalModals";

export const viewport: Viewport = {
  themeColor: "#082E6B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swissbehavioralhealth.com"),
  title: "Behavioral Health & Addiction Recovery in Oldsmar, FL | Swiss Behavioral Health",
  description:
    "Swiss Behavioral Health offers individualized behavioral health and substance use recovery care in Oldsmar, Florida, serving the Tampa Bay area through PHP, IOP and outpatient programs.",
  keywords: [
    "behavioral health Oldsmar FL",
    "addiction recovery Tampa Bay",
    "therapy services Oldsmar",
    "PHP IOP OP Florida",
    "rehab services Tampa Bay"
  ],
  authors: [{ name: "Swiss Behavioral Health" }],
  icons: {
    icon: "/assets/logos/SBH_Isotipo_Color.svg",
    shortcut: "/assets/logos/SBH_Isotipo_Color.svg",
    apple: "/assets/logos/SBH_Isotipo_Color.svg",
  },
  openGraph: {
    title: "Swiss Behavioral Health",
    description:
      "Small by Design. Personal by Nature. Individualized behavioral health and substance use recovery care in Oldsmar, Florida, serving Tampa Bay.",
    url: "https://www.swissbehavioralhealth.com/",
    siteName: "Swiss Behavioral Health",
    type: "website",
    images: [
      {
        url: "/assets/logos/SBH_Logo_Horizontal_Color.svg",
        alt: "Swiss Behavioral Health",
      }
    ],
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Oldsmar",
    "geo.position": "28.036096;-82.660752",
    "ICBM": "28.036096, -82.660752",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://www.swissbehavioralhealth.com/#organization",
      name: "Swiss Behavioral Health",
      url: "https://www.swissbehavioralhealth.com/",
      logo: "https://www.swissbehavioralhealth.com/assets/logos/SBH_Logo_Horizontal_Color.svg",
      image: "https://www.swissbehavioralhealth.com/assets/logos/SBH_Logo_Horizontal_Color.svg",
      email: "info@swissbehavioralhealth.com",
      telephone: "+16562323504",
      description:
        "Individualized behavioral health and substance use recovery care in Oldsmar, Florida, serving the Tampa Bay area.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "209 State St E",
        addressLocality: "Oldsmar",
        addressRegion: "FL",
        postalCode: "34677",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.036096,
        longitude: -82.660752,
      },
      areaServed: [
        { "@type": "City", name: "Oldsmar" },
        { "@type": "AdministrativeArea", name: "Tampa Bay" },
        { "@type": "State", name: "Florida" },
      ],
      medicalSpecialty: "Behavioral health and substance use treatment",
      knowsLanguage: ["en", "es"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.swissbehavioralhealth.com/#website",
      url: "https://www.swissbehavioralhealth.com/",
      name: "Swiss Behavioral Health",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <SkipLink />
          <Header />
          {children}
          <Footer />
          <GlobalModals />
        </LanguageProvider>
      </body>
    </html>
  );
}
