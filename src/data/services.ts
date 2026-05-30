import type { Service } from "@/types";

export const servicesSection = {
  eyebrow: "Pricing",
  title: "Our Services & Fixed Fees",
  description:
    "Transparent fixed fees for straightforward immigration matters. Fees below are for our professional advice and application support — not Home Office or NHS charges.",
} as const;

export const pricingHighlights = [
  "Fixed fees agreed before work starts",
  "Dependants priced clearly",
  "Official visa fees paid separately by you",
] as const;

export const services: Service[] = [
  {
    id: "skilled-worker",
    title: "Skilled Worker Visa",
    description:
      "Professional support with eligibility, document preparation and application assistance.",
    fee: "£975",
    dependantsFee: "£250 each",
    contactVisa: "skilled-worker",
  },
  {
    id: "student",
    title: "Student Visa",
    description:
      "Guidance and support for international students applying to study in the UK.",
    fee: "£500",
    dependantsFee: "£250 each",
    contactVisa: "student",
  },
  {
    id: "spouse-partner",
    title: "Spouse / Partner Visa",
    description:
      "Support with spouse, partner and family-related applications.",
    fee: "£975",
    dependantsFee: "£250 each",
    contactVisa: "spouse-partner",
  },
  {
    id: "visitor",
    title: "Visitor Visa",
    description:
      "Help with preparing visitor visa applications and supporting documents.",
    fee: "£500",
    dependantsFee: "£250 each",
    contactVisa: "visitor",
  },
  {
    id: "naturalisation",
    title: "Naturalisation",
    description:
      "Support with straightforward British citizenship applications.",
    fee: "£500",
    contactVisa: "naturalisation",
  },
];

export const dependantsNote =
  "Dependants applications: £250 each (in addition to main application fees where applicable).";

export const pricingDisclaimers = [
  "Home Office fees, health surcharges and other official charges are separate and must be paid by you directly to the relevant authority.",
  dependantsNote,
] as const;

/** Pre-filled WhatsApp message for a service enquiry. */
export const serviceWhatsAppHref = (title: string, fee: string) => {
  const text = `Hi, I'd like to enquire about ${title} (fixed fee ${fee}).`;
  return `https://wa.me/447539641223?text=${encodeURIComponent(text)}`;
};

/** Contact form deep link with visa type pre-selected. */
export const serviceContactHref = (contactVisa: string) =>
  `/?visa=${contactVisa}#contact`;
