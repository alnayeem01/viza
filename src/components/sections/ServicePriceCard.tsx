import Link from "next/link";
import type { Service } from "@/types";
import { serviceContactHref } from "@/data/services";

type ServicePriceCardProps = {
  service: Service;
};

export const ServicePriceCard = ({ service }: ServicePriceCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-primary/15 bg-background shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3 border-b border-primary/10 bg-primary/5 px-4 py-3">
        <h3 className="font-bold text-primary">{service.title}</h3>
        <div className="shrink-0 text-right">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-text-secondary">
            Fixed Fee:
          </p>
          <p className="text-xl font-bold tabular-nums leading-none text-accent">{service.fee}</p>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-sm leading-snug text-text-secondary">{service.description}</p>

        {service.dependantsFee && (
          <p className="mt-2 text-sm text-text-secondary">
            <span className="font-semibold text-primary">Dependants:</span>{" "}
            {service.dependantsFee}
          </p>
        )}

        <Link
          href={serviceContactHref(service.contactVisa)}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Enquire →
        </Link>
      </div>
    </article>
  );
};
