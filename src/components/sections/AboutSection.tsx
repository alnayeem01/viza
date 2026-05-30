import Link from "next/link";
import { aboutIntro, aboutValues, visaAreas } from "@/data/about";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Server Component: static about content from src/data/about.ts
 */
export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-[4.5rem] bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About us"
          title="About Viza Ltd"
          description={aboutIntro.description}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <article className="rounded-2xl border border-primary/10 bg-background-muted p-6 sm:p-8 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Who we are
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
              {aboutIntro.experience}
            </p>
            <p className="mt-4 border-l-4 border-gold pl-4 text-sm font-medium text-primary">
              Authorised and regulated by the IAA at {site.iaaLevel}.
            </p>
          </article>

          <article className="rounded-2xl border border-primary/10 bg-background p-6 sm:p-8 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              We assist with
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {visaAreas.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-primary/10 bg-background-muted px-4 py-3 text-text-secondary transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-text-secondary">
              <Link
                href="/#services"
                className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                See fixed fees for each service →
              </Link>
            </p>
          </article>
        </div>

        <article className="mt-8 rounded-2xl border border-primary/10 bg-background-muted p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            We aim to provide
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {aboutValues.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm text-text shadow-sm"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-bold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="capitalize">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
};
