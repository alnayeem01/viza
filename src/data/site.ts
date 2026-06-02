import type { NavLink, VisaOption } from "@/types";

export const site = {
  name: "Viza Ltd",
  tagline: "UK Immigration Advice & Visa Assistance",
  description:
    "Professional support with UK visa and immigration applications.",
  iaaLevel: "Level 1",
  regulationNumber: "F202637415",
  adviserNumber: "P063629",
  phone: "07539 641223",
  phoneHref: "tel:+447539641223",
  email: "contact@viza.org.uk",
  website: "www.viza.org.uk",
  copyrightYear: 2026,
} as const;

/** Use /#section so links work from legal pages (/privacy, /terms, etc.) as well as home. */
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Why Us", href: "/#why-us", sectionId: "why-us" },
  { label: "Process", href: "/#process", sectionId: "process" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const visaOptions: VisaOption[] = [
  { value: "skilled-worker", label: "Skilled Worker Visa" },
  { value: "student", label: "Student Visa" },
  { value: "spouse-partner", label: "Spouse / Partner Visa" },
  { value: "visitor", label: "Visitor Visa" },
  { value: "naturalisation", label: "Naturalisation" },
  { value: "ilr", label: "Indefinite Leave to Remain" },
  { value: "dependants", label: "Dependants" },
  { value: "other", label: "Other / Not sure" },
];

export const whatsapp = {
  label: "WhatsApp Us",
  href: "https://wa.me/447539641223",
} as const;
