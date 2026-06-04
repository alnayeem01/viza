import Link from "next/link";
import {
  pricingNotes,
  serviceContactHref,
  services,
  servicesSection,
} from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServicePriceCard } from "@/components/sections/ServicePriceCard";

/**
 * Server Component: pricing & services — client copy in src/data/services.ts
 */
export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="scroll-mt-[4.5rem] border-y border-primary/10 bg-background-muted"
    >
      <Container className="py-12 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {servicesSection.eyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-text-secondary">
            {servicesSection.description}
          </p>
        </header>

        <div className="mt-8 hidden overflow-hidden rounded-xl border border-primary/15 shadow-md md:block">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Fixed adviser fees by immigration service</caption>
            <thead>
              <tr className="bg-primary text-white">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Service
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Details
                </th>
                <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                  Fixed Fee
                </th>
                <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                  Dependants
                </th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">
                  Enquire
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={service.id}
                  className={
                    index % 2 === 0
                      ? "bg-background"
                      : "bg-background-muted/80"
                  }
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 align-top font-semibold text-primary"
                  >
                    {service.title}
                  </th>
                  <td className="max-w-sm px-4 py-3 align-top text-text-secondary">
                    {service.description}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 align-top">
                    <span className="text-xs font-semibold text-text-secondary">
                      Fixed Fee:
                    </span>
                    <p className="text-xl font-bold tabular-nums text-accent">{service.fee}</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 align-top text-text-secondary">
                    {service.dependantsFee ? (
                      <>
                        <span className="text-xs font-semibold text-primary">Dependants:</span>
                        <p className="font-medium">{service.dependantsFee}</p>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 align-top text-right">
                    <Link
                      href={serviceContactHref(service.contactVisa)}
                      className="inline-flex rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Enquire
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:hidden">
          {services.map((service) => (
            <ServicePriceCard key={service.id} service={service} />
          ))}
        </div>

        {/* <aside className="mt-6 rounded-xl border border-primary/15 border-l-4 border-l-gold bg-background px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Important to know
          </p>
          <ul className="mt-2 space-y-2">
            {pricingNotes.map((line) => (
              <li key={line} className="text-sm leading-snug text-text-secondary">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-text-secondary">
            <Link
              href="/#important-info"
              className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Important Information
            </Link>{" "}
            — Home Office charges, scope, outcomes and when fees are due.
          </p>

          <div className="mt-4 flex flex-col gap-3 border-t border-primary/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-primary">
              Not sure which service fits? We can help you choose.
            </p>
            <Button href="/#contact" variant="primary" className="shrink-0 sm:px-5">
              Get in touch
            </Button>
          </div>
        </aside> */}
      </Container>
    </section>
  );
};
