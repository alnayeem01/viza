import { site, whatsapp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
            IAA Regulated · Level {site.iaaLevel.replace("Level ", "")}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 text-lg text-white/85 sm:text-xl">{site.description}</p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {site.name} is authorised and regulated by the Immigration Advice
            Authority (IAA) at {site.iaaLevel}. We provide clear, practical and
            confidential immigration advice for individuals, families, students
            and workers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={whatsapp.href} variant="whatsapp" className="px-6 py-3">
              <WhatsAppIcon />
              {whatsapp.label}
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
      <div className="h-1 bg-gold" aria-hidden />
    </section>
  );
}
