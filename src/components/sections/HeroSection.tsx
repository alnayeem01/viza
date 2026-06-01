import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
// import { whatsapp } from "@/data/site";
// import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1a2d5c]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              IAA regulated · {site.iaaLevel}
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {site.tagline}
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/#contact" variant="accent" className="px-6 py-3">
                Get in touch
              </Button>
              <Button
                href="/#services"
                variant="outline"
                className="border-white px-6 py-3 text-white hover:bg-white hover:text-primary"
              >
                View fees
              </Button>
            </div>

            {/* WhatsApp link — temporarily hidden
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Or message us on WhatsApp
            </a>
            */}

          </div>

          <aside className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold text-white">Contact &amp; regulation</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-white/60">Organisation</dt>
                <dd className="mt-0.5 font-semibold">{site.regulationNumber}</dd>
              </div>
              <div>
                <dt className="text-white/60">Adviser</dt>
                <dd className="mt-0.5 font-semibold">{site.adviserNumber}</dd>
              </div>
              {/* Phone — temporarily hidden
              <div>
                <dt className="text-white/60">Phone</dt>
                <dd className="mt-0.5 font-semibold">
                  <a
                    href={site.phoneHref}
                    className="text-white/90 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              */}
              <div>
                <dt className="text-white/60">Email</dt>
                <dd className="mt-0.5 font-semibold">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-white/90 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>

      <div className="h-1 bg-gold" aria-hidden />
    </section>
  );
};
