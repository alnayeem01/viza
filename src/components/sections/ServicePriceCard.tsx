import Link from "next/link";
import type { Service } from "@/types";
import { serviceContactHref, serviceWhatsAppHref } from "@/data/services";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

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

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <a
          href={serviceWhatsAppHref(service.title, service.fee)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
        >
          <WhatsAppIcon />
          WhatsApp enquiry
        </a>
        <Link
          href={serviceContactHref(service.contactVisa)}
          className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Send enquiry
        </Link>
      </div>
    </article>
  );
};
