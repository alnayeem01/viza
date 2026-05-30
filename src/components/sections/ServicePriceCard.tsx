import Link from "next/link";
import type { Service } from "@/types";
import { serviceContactHref } from "@/data/services";

type ServicePriceCardProps = {
  service: Service;
};

export const ServicePriceCard = ({ service }: ServicePriceCardProps) => {
  return (
    <article className="flex flex-col rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition-all hover:border-primary/25 hover:shadow-md focus-within:ring-2 focus-within:ring-primary/25 sm:p-7">
      <h3 className="text-lg font-bold text-primary sm:text-xl">{service.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary sm:text-base">
        {service.description}
      </p>

      <dl className="mt-6 space-y-3 border-t border-primary/10 pt-5">
        <div>
          <dt className="text-sm font-semibold text-primary">Fixed Fee:</dt>
          <dd className="mt-0.5 text-2xl font-bold tabular-nums text-accent">{service.fee}</dd>
        </div>
        {service.dependantsFee && (
          <div>
            <dt className="text-sm font-semibold text-primary">Dependants:</dt>
            <dd className="mt-0.5 text-base text-text-secondary">{service.dependantsFee}</dd>
          </div>
        )}
      </dl>

      <Link
        href={serviceContactHref(service.contactVisa)}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Enquire about this service
      </Link>
    </article>
  );
};
