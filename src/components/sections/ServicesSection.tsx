import { dependantsNote, services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Server Component: service list is static data from src/data — rendered on the server.
 */
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-background-muted py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Our Services & Fixed Fees"
          description="Transparent fixed fees for straightforward immigration matters."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <div className="mt-6 border-t border-primary/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Fixed fee
                </p>
                <p className="mt-1 text-2xl font-bold text-accent">{service.fee}</p>
                {service.dependantsFee && (
                  <p className="mt-2 text-sm text-text-secondary">
                    Dependants: {service.dependantsFee}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">{dependantsNote}</p>
      </Container>
    </section>
  );
}
