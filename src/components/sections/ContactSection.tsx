import { site, whatsapp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ContactForm } from "@/components/sections/ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-[4.5rem] bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Get started"
          title="Contact Us"
          description="Reach out by phone, email, WhatsApp, or the form below. We aim to respond promptly."
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
                  className="mt-1 block text-lg font-semibold text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
                  className="mt-1 block break-all text-lg font-semibold text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
            <h3 className="text-lg font-semibold text-primary">Send an enquiry</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Prefer a quick chat? Use WhatsApp. For detailed questions, complete the form —
              we will contact you using the details you provide.
            </p>
            <p className="mt-3 rounded-lg border border-primary/10 bg-background-muted px-4 py-3 text-sm text-text-secondary">
              We provide advice within our IAA Level 1 scope only. The Home Office makes all
              visa decisions; we cannot guarantee outcomes.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
