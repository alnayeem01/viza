import Link from "next/link";
import {
  pricingDisclaimers,
  pricingHighlights,
  serviceContactHref,
  services,
  servicesSection,
} from "@/data/services";
import { whatsapp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ServicePriceCard } from "@/components/sections/ServicePriceCard";

/**
 * Server Component: pricing & services — static data from src/data/services.ts
 */
export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="scroll-mt-[4.5rem] border-t border-primary/5 bg-background-muted py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          description={servicesSection.description}
        />

        <ul className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3">
          {pricingHighlights.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background px-3 py-1.5 text-xs font-medium text-primary sm:text-sm"
            >
              <span className="text-accent" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-sm lg:block">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Fixed adviser fees by immigration service</caption>
            <thead>
              <tr className="border-b border-primary/10 bg-primary/5">
                <th scope="col" className="px-6 py-4 font-semibold text-primary">
                  Service
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-primary">
                  Details
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-primary">
                  Fixed Fee
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-primary">
                  Dependants
                </th>
                <th scope="col" className="px-6 py-4 text-right font-semibold text-primary">
                  Enquire
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={service.id}
                  className={
                    index % 2 === 0 ? "bg-background" : "bg-background-muted/50"
                  }
                >
                  <th scope="row" className="px-6 py-4 align-top font-medium text-primary">
                    {service.title}
                  </th>
                  <td className="max-w-md px-6 py-4 align-top text-text-secondary">
                    {service.description}
                  </td>
                  <td className="px-6 py-4 align-top">
                    <span className="text-xs font-semibold text-text-secondary">Fixed Fee:</span>
                    <p className="text-lg font-bold tabular-nums text-accent">{service.fee}</p>
                  </td>
                  <td className="px-6 py-4 align-top text-text-secondary">
                    {service.dependantsFee ? (
                      <>
                        <span className="text-xs font-semibold text-primary">Dependants:</span>
                        <p className="mt-0.5">{service.dependantsFee}</p>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-6 py-4 align-top text-right">
                    <Link
                      href={serviceContactHref(service.contactVisa)}
                      className="font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Enquire →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <ServicePriceCard key={service.id} service={service} />
          ))}
        </div>

        <aside className="mt-10 rounded-2xl border border-primary/10 bg-background p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Important to know
          </p>
          <ul className="mt-4 space-y-3">
            {pricingDisclaimers.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm leading-relaxed text-text-secondary"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 border-t border-primary/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-primary">
              Not sure which service fits? We can help you choose.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={whatsapp.href} variant="whatsapp">
                <WhatsAppIcon />
                {whatsapp.label}
              </Button>
              <Button href="/#contact" variant="outline">
                Contact form
              </Button>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
};
