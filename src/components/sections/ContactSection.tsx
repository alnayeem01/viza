import { site, whatsapp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Get started"
          title="Contact Us"
          description="Reach out by phone, email, or the form below. We aim to respond promptly."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <div className="space-y-6 rounded-2xl border border-primary/10 bg-background-muted p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 block text-lg font-semibold text-primary hover:text-accent"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg font-semibold text-primary hover:text-accent break-all"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Website
                </p>
                <p className="mt-1 text-lg font-semibold text-primary">{site.website}</p>
              </div>
              <Button href={whatsapp.href} variant="whatsapp" className="w-full">
                <WhatsAppIcon />
                {whatsapp.label}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-lg font-semibold text-primary">Send an enquiry</h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
