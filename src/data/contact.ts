import { site, whatsapp } from "@/data/site";

export const contactIntro = {
  eyebrow: "Get started",
  title: "Contact Us",
  description:
    "Reach out by phone, email, WhatsApp, or the form below. We aim to respond promptly.",
} as const;

export const contactFormIntro = {
  title: "Send an enquiry",
  description:
    "Complete the form and we will contact you using the details you provide.",
} as const;

export const responseTimeNote =
  "We aim to respond within a few working days." as const;

export const contactMethods = [
  {
    id: "phone",
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    external: false,
  },
  {
    id: "email",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Message us",
    href: whatsapp.href,
    external: true,
  },
] as const;

export type ContactMethodId = (typeof contactMethods)[number]["id"];
