import { contactFormIntro, contactIntro } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactQuickActions } from "@/components/sections/ContactQuickActions";

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-[4.5rem] border-t border-primary/10 bg-background">
      <Container className="py-12 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {contactIntro.eyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {contactIntro.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-text-secondary">
            {contactIntro.description}
          </p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-4">
            <ContactQuickActions />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8">
            <article className="overflow-hidden rounded-xl border border-primary/15 bg-background-muted shadow-md">
              <div className="bg-primary px-4 py-3 sm:px-5">
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {contactFormIntro.title}
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <ContactForm />
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};
