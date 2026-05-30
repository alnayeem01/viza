import { disclaimerIntro, disclaimerThemes } from "@/data/disclaimer";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { DisclaimerIcon } from "@/components/ui/DisclaimerIcon";

export const DisclaimerSection = () => {
  return (
    <section className="border-y border-primary/10 bg-background-muted">
      <Container className="py-12 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {disclaimerIntro.eyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {disclaimerIntro.title}
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            IAA authorised · {site.iaaLevel}
          </p>
        </header>

        <ul className="mt-8 grid gap-3 lg:grid-cols-3 lg:gap-4">
          {disclaimerThemes.map((theme) => (
            <li key={theme.id}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-xl border border-primary/15 bg-background shadow-sm ${
                  theme.id === "outcomes" ? "border-l-4 border-l-gold" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 bg-primary px-3 py-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                    <DisclaimerIcon icon={theme.icon} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{theme.title}</h3>
                </div>
                <ul className="flex-1 space-y-2.5 px-3 py-3">
                  {theme.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-snug text-text-secondary"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
