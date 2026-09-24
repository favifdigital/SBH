import Hero from "@/components/Hero";
import ProofBand from "@/components/ProofBand";
import AboutSection from "@/components/AboutSection";
import TreatmentSection from "@/components/TreatmentSection";
import InsuranceSection from "@/components/InsuranceSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ProofBand />
      <AboutSection />
      <TreatmentSection />
      <InsuranceSection />
      <AdmissionsSection />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}
