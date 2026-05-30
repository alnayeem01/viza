import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 bg-background-muted py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="Our Process"
          description="A clear, step-by-step approach from first consultation to submission."
        />

        <ol className="relative mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative flex gap-6 pb-12 last:pb-0">
              {index < processSteps.length - 1 && (
                <span
                  className="absolute left-5 top-12 h-[calc(100%-3rem)] w-0.5 bg-primary/20"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.step}
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
