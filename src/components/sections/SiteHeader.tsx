import Link from "next/link";
import { site, whatsapp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SkipLink } from "@/components/ui/SkipLink";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { DesktopNav } from "@/components/sections/DesktopNav";
import { MobileNav } from "@/components/sections/MobileNav";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <SkipLink />
      <Container as="nav" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <BrandLogo priority />
          <span className="text-lg font-bold tracking-tight text-primary sm:text-xl">
            {site.name}
          </span>
        </Link>

        <DesktopNav />

        <div className="hidden md:block">
          <Button href={whatsapp.href} variant="whatsapp">
            <WhatsAppIcon />
            {whatsapp.label}
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="inline-flex rounded-lg bg-whatsapp p-2.5 text-white transition hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
          >
            <WhatsAppIcon />
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};
