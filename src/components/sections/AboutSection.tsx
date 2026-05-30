import Link from "next/link";
import {
  aboutIntro,
  aboutSection,
  aboutValues,
  visaAreas,
} from "@/data/about";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

/**
 * Server Component: static about content from src/data/about.ts
 */
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[4.5rem] border-b border-primary/10 bg-background"
    >
      <Container className="py-12 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {aboutSection.eyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {aboutSection.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-text-secondary">
            {aboutSection.description}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            IAA authorised · {site.iaaLevel}
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="overflow-hidden rounded-xl border border-primary/15 bg-background-muted shadow-sm lg:col-span-4">
            <div className="bg-primary px-3 py-2.5 sm:px-4">
              <h3 className="text-sm font-semibold text-white">{aboutSection.whoWeAre}</h3>
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                {aboutIntro.experience}
              </p>
              <p className="mt-4 border-l-4 border-gold pl-3 text-sm font-medium leading-snug text-primary">
                {aboutIntro.iaaNote}
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-primary/15 bg-background-muted shadow-sm lg:col-span-8">
            <div className="bg-primary px-3 py-2.5 sm:px-4">
              <h3 className="text-sm font-semibold text-white">{aboutSection.assistWith}</h3>
            </div>
            <div className="p-4 sm:p-5">
              <ul className="grid gap-2 sm:grid-cols-2">
                {visaAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-primary/10 bg-background px-3 py-2.5 text-sm text-text-secondary"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {aboutSection.servicesLink}
              </Link>
            </div>
          </article>
        </div>

        <article className="mt-4 overflow-hidden rounded-xl border border-primary/15 bg-background-muted shadow-sm">
          <div className="bg-primary px-3 py-2.5 sm:px-4">
            <h3 className="text-sm font-semibold text-white">{aboutSection.valuesHeading}</h3>
          </div>
          <ul className="grid gap-2 p-4 sm:grid-cols-2 sm:gap-3 sm:p-5 lg:grid-cols-4">
            {aboutValues.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-primary/10 bg-background px-3 py-2.5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-sm capitalize text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
};
