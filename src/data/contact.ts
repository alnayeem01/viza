import { site } from "@/data/site";
// import { whatsapp } from "@/data/site";

export const contactIntro = {
  eyebrow: "Get started",
  title: "Contact Us",
  description: "Use the form or contact us by email.",
} as const;

export const contactFormIntro = {
  title: "Send an enquiry",
} as const;

export const responseTimeNote =
  "We aim to respond within a few working days." as const;

export const contactMethods = [
  // Phone — temporarily hidden
  // {
  //   id: "phone",
  //   label: "Phone",
  //   value: site.phone,
  //   href: site.phoneHref,
  //   external: false,
  // },
  {
    id: "email",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  // WhatsApp — temporarily hidden
  // {
  //   id: "whatsapp",
  //   label: "WhatsApp",
  //   value: "Message us",
  //   href: whatsapp.href,
  //   external: true,
  // },
] as const;

export type ContactMethodId = (typeof contactMethods)[number]["id"];
