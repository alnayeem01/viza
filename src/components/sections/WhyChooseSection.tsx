import { features } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

export function WhyChooseSection() {
  return (
    <section id="why-us" className="scroll-mt-[4.5rem] bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Viza Ltd"
          title="Why Choose Viza Ltd?"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-2xl border border-primary/10 bg-background-muted p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
