import Link from "next/link";
import { contactMethods, responseTimeNote } from "@/data/contact";
import { site } from "@/data/site";
import { ContactMethodIcon } from "@/components/ui/ContactMethodIcon";

export const ContactQuickActions = () => {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
        Quick contact
      </p>

      <ul className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {contactMethods.map((method) => (
          <li key={method.id}>
            <a
              href={method.href}
              {...(method.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group flex items-center gap-3 rounded-xl border border-primary/15 bg-background px-3 py-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                method.id === "whatsapp" ? "hover:border-whatsapp/40" : ""
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  method.id === "whatsapp"
                    ? "bg-whatsapp/15 text-whatsapp"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                }`}
              >
                <ContactMethodIcon method={method.id} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  {method.label}
                </span>
                <span className="block truncate text-sm font-semibold text-primary">
                  {method.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <aside className="rounded-xl border border-primary/15 border-l-4 border-l-gold bg-background-muted px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Regulated by the IAA
        </p>
        <p className="mt-1 text-sm text-text-secondary">
          Authorised at {site.iaaLevel} · Org {site.regulationNumber} · Adviser{" "}
          {site.adviserNumber}
        </p>
      </aside>

      <p className="flex items-center gap-2 text-sm text-text-secondary">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
          aria-hidden
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
        {responseTimeNote}
      </p>

      <p className="text-sm text-text-secondary">
        See{" "}
        <Link
          href="/#important-info"
          className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Important Information
        </Link>{" "}
        for scope, outcomes and fees.
      </p>
    </div>
  );
};
