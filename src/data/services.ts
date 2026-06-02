import type { Service } from "@/types";

export const servicesSection = {
  eyebrow: "Pricing",
  title: "Our Services & Fixed Fees",
  description:
    "Transparent fixed fees for immigration matters. Fees below are for our professional advice and application support — not Home Office or NHS charges.",
} as const;

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
      "Support with British citizenship applications.",
    fee: "£500",
    contactVisa: "naturalisation",
  },
  {
    id: "ilr",
    title: "Indefinite Leave to Remain",
    description:
      "Support with ILR applications, eligibility and document preparation.",
    fee: "£975",
    dependantsFee: "£500 each",
    contactVisa: "ilr",
  },
];

export const dependantsNote =
  "Dependants applications: £250 each (in addition to main application fees where applicable).";

/** Pricing-specific note; Home Office / scope / outcomes live in Important Information. */
export const pricingNotes = [dependantsNote] as const;

/** Contact form deep link with visa type pre-selected. */
export const serviceContactHref = (contactVisa: string) =>
  `/?visa=${contactVisa}#contact`;
