export interface LegalPageData {
  slug: string;
  title: string;
  metaTitle: string;
  leadEn: string;
  leadEs: string;
}

export const LEGAL_PAGES: Record<string, LegalPageData> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy / Política de Privacidad",
    metaTitle: "Privacy Policy / Política de Privacidad | Swiss Behavioral Health",
    leadEn: "This page is intentionally a draft placeholder. Replace it with SBH-approved privacy language before public launch.",
    leadEs: "Esta página es un borrador provisional. Reemplácela con el texto de privacidad aprobado por SBH antes del lanzamiento público."
  },
  terms: {
    slug: "terms",
    title: "Terms & Website Disclaimer / Términos y Aviso del Sitio",
    metaTitle: "Terms & Website Disclaimer / Términos y Aviso del Sitio | Swiss Behavioral Health",
    leadEn: "This page is intentionally a draft placeholder. Replace it with SBH-approved terms and website disclaimer before public launch.",
    leadEs: "Esta página es un borrador provisional. Reemplácela con los términos y aviso del sitio aprobados por SBH antes del lanzamiento público."
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility Statement / Declaración de Accesibilidad",
    metaTitle: "Accessibility Statement / Declaración de Accesibilidad | Swiss Behavioral Health",
    leadEn: "This page is intentionally a draft placeholder. Replace it with SBH-approved accessibility language before public launch.",
    leadEs: "Esta página es un borrador provisional. Reemplácela con el texto de accesibilidad aprobado por SBH antes del lanzamiento público."
  },
  npp: {
    slug: "npp",
    title: "Notice of Privacy Practices / Aviso de Prácticas de Privacidad",
    metaTitle: "Notice of Privacy Practices / Aviso de Prácticas de Privacidad | Swiss Behavioral Health",
    leadEn: "This page is intentionally a draft placeholder. Publish only the SBH-approved Notice of Privacy Practices that applies to its operations.",
    leadEs: "Esta página es un borrador provisional. Publique únicamente el Aviso de Prácticas de Privacidad aprobado por SBH y aplicable a sus operaciones."
  }
};
