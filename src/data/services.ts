import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "skilled-worker",
    title: "Skilled Worker Visa",
    description:
      "Professional support with eligibility, document preparation and application assistance.",
    fee: "£975",
    dependantsFee: "£250 each",
  },
  {
    id: "student",
    title: "Student Visa",
    description:
      "Guidance and support for international students applying to study in the UK.",
    fee: "£500",
    dependantsFee: "£250 each",
  },
  {
    id: "spouse-partner",
    title: "Spouse / Partner Visa",
    description:
      "Support with spouse, partner and family-related applications.",
    fee: "£975",
    dependantsFee: "£250 each",
  },
  {
    id: "visitor",
    title: "Visitor Visa",
    description:
      "Help with preparing visitor visa applications and supporting documents.",
    fee: "£500",
    dependantsFee: "£250 each",
  },
  {
    id: "naturalisation",
    title: "Naturalisation",
    description:
      "Support with straightforward British citizenship applications.",
    fee: "£500",
  },
];

export const dependantsNote =
  "Dependants applications: £250 each (in addition to main application fees where applicable).";
