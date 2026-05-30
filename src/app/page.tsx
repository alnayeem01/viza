import { HashScroll } from "@/components/HashScroll";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DisclaimerSection } from "@/components/sections/DisclaimerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

/**
 * Home page — Server Component (default).
 * Sections are composed here; only MobileNav and ContactForm use "use client".
 * Content lives in src/data/* so copy can be updated without touching layout markup.
 */
export default function Home() {
  return (
    <>
      <HashScroll />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <DisclaimerSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
