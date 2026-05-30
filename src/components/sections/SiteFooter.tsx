import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Complaints Procedure", href: "#" },
  { label: "Terms & Fees", href: "#" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-primary text-white">
      <Container as="footer" className="py-12">
        <p className="max-w-3xl text-sm leading-relaxed text-white/85">
          {site.name} is authorised and regulated by the Immigration Advice
          Authority (IAA) at {site.iaaLevel}.
        </p>
        <dl className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-white/60">Organisation Regulation Number</dt>
            <dd className="font-semibold">{site.regulationNumber}</dd>
          </div>
          <div>
            <dt className="text-white/60">Adviser Number</dt>
            <dd className="font-semibold">{site.adviserNumber}</dd>
          </div>
        </dl>

        <nav
          className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm"
          aria-label="Legal"
        >
          {legalLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-4">
              {index > 0 && <span className="text-white/30" aria-hidden>|</span>}
              <Link
                href={link.href}
                className="text-white/90 underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <p className="mt-8 border-t border-white/15 pt-8 text-sm text-white/70">
          © {site.copyrightYear} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
