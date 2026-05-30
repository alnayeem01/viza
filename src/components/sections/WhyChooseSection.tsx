import { features, whyChooseIntro } from "@/data/features";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

export const WhyChooseSection = () => {
  return (
    <section id="why-us" className="scroll-mt-[4.5rem] relative overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 40%, white 1px, transparent 1px), radial-gradient(circle at 85% 15%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:pt-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {whyChooseIntro.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {whyChooseIntro.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              {whyChooseIntro.description}
            </p>

            <aside className="mt-6 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Regulated by the IAA
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Authorised at {site.iaaLevel}
              </p>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-white/60">Organisation</dt>
                  <dd className="font-semibold text-white">{site.regulationNumber}</dd>
                </div>
                <div>
                  <dt className="text-white/60">Adviser</dt>
                  <dd className="font-semibold text-white">{site.adviserNumber}</dd>
                </div>
              </dl>
            </aside>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 lg:gap-3">
            {features.map((feature) => (
              <li key={feature.id}>
                <article className="group h-full rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/15 sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <FeatureIcon icon={feature.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-snug text-white/75">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="h-1 bg-gold" aria-hidden />
    </section>
  );
};
