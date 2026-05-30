import Link from "next/link";
import { navLinks, site, whatsapp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { MobileNav } from "./MobileNav";


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container as="nav" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-primary sm:text-xl"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={whatsapp.href} variant="whatsapp">
            <WhatsAppIcon />
            {whatsapp.label}
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
