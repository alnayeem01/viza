import { processIntro, processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="scroll-mt-[4.5rem] border-b border-primary/10 bg-background"
    >
      <Container className="py-12 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {processIntro.eyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {processIntro.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-text-secondary">
            {processIntro.description}
          </p>
        </header>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {processSteps.map((step) => (
            <li key={step.step}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-primary/15 bg-background-muted shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-2.5 bg-primary px-3 py-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-semibold leading-tight text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="flex-1 px-3 py-3 text-sm leading-snug text-text-secondary">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-primary/15 border-l-4 border-l-gold bg-background-muted px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm font-medium text-primary">
            Ready to discuss your application?
          </p>
          <Button href="/#contact" variant="primary" className="shrink-0 sm:px-5">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
};
