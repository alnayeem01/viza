import type { Feature } from "@/types";

export const whyChooseIntro = {
  eyebrow: "Why Viza Ltd",
  title: "Why Choose Viza Ltd?",
  description: "How we support you through your immigration matter.",
} as const;

export const features: Feature[] = [
  {
    id: "iaa",
    title: "IAA Authorised",
    description:
      "Authorised and regulated by the Immigration Advice Authority at Level 1.",
    icon: "shield",
  },
  {
    id: "confidential",
    title: "Confidential Service",
    description: "Professional and confidential handling of your immigration matter.",
    icon: "lock",
  },
  {
    id: "fees",
    title: "Transparent Fees",
    description: "Clear fixed fees so you know what to expect before you proceed.",
    icon: "receipt",
  },
  {
    id: "guidance",
    title: "Practical Guidance",
    description: "Straightforward advice focused on what you need for your application.",
    icon: "compass",
  },
  {
    id: "responsive",
    title: "Responsive Communication",
    description: "We aim to keep you informed and answer enquiries promptly.",
    icon: "message",
  },
  {
    id: "personal",
    title: "Personal Support",
    description: "Support throughout your application, from consultation to submission.",
    icon: "user",
  },
];
