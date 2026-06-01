import type { LegalDocument } from "@/types/legal";

/** Client-approved copy — rendered on /privacy (static at build time). */
export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: "Privacy policy: Viza Ltd",
  lastUpdated: "2 June 2026",
  draftNotice: "",
  intro: "Viza Ltd – Privacy Policy",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "paragraph",
          text: "Viza Ltd is committed to protecting your privacy and handling your personal information responsibly and securely.",
        },
        {
          type: "paragraph",
          text: "This Privacy Policy explains how we collect, use, store and protect your personal information when you contact us or use our services.",
        },
      ],
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      blocks: [
        {
          type: "paragraph",
          text: "Viza Ltd provides UK immigration advice and visa assistance.",
        },
        {
          type: "paragraph",
          text: "Viza Ltd is authorised and regulated by the Immigration Advice Authority (IAA) at Level 1.",
        },
        {
          type: "paragraph",
          text: "Email: contact@viza.org.uk",
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        {
          type: "paragraph",
          text: "We may collect and process the following personal information:",
        },
        {
          type: "list",
          items: [
            "Full name",
            "Date of birth",
            "Contact details",
            "Passport and identity documents",
            "Immigration and visa information",
            "Employment and education details",
            "Financial information relevant to immigration applications",
            "Information provided through contact forms, emails, WhatsApp or consultations",
          ],
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "How We Use Your Information",
      blocks: [
        {
          type: "paragraph",
          text: "We use your personal information to:",
        },
        {
          type: "list",
          items: [
            "Respond to enquiries",
            "Provide immigration advice and services",
            "Prepare immigration applications",
            "Communicate with clients",
            "Maintain records required for regulatory and compliance purposes",
            "Comply with legal and regulatory obligations",
          ],
        },
      ],
    },
    {
      id: "legal-basis-for-processing",
      title: "Legal Basis for Processing",
      blocks: [
        {
          type: "paragraph",
          text: "We process personal information on the basis of:",
        },
        {
          type: "list",
          items: [
            "Your consent",
            "Performance of a contract or requested service",
            "Compliance with legal obligations",
            "Legitimate business interests",
          ],
        },
      ],
    },
    {
      id: "sharing-your-information",
      title: "Sharing Your Information",
      blocks: [
        {
          type: "paragraph",
          text: "We may share information with:",
        },
        {
          type: "list",
          items: [
            "UK Home Office and related government authorities",
            "Visa application centres",
            "Translators or third-party service providers where necessary",
            "Regulatory bodies where required by law",
          ],
        },
        {
          type: "paragraph",
          text: "We do not sell your personal information to third parties.",
        },
      ],
    },
    {
      id: "data-storage-and-security",
      title: "Data Storage and Security",
      blocks: [
        {
          type: "paragraph",
          text: "We take reasonable steps to protect personal information from unauthorised access, loss, misuse or disclosure.",
        },
        {
          type: "paragraph",
          text: "Information may be stored electronically or in paper files and will only be accessible to authorised persons.",
        },
      ],
    },
    {
      id: "retention-of-information",
      title: "Retention of Information",
      blocks: [
        {
          type: "paragraph",
          text: "We retain client records for as long as reasonably necessary to comply with legal, regulatory and professional obligations.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      blocks: [
        {
          type: "paragraph",
          text: "You may have the right to:",
        },
        {
          type: "list",
          items: [
            "Request access to your personal data",
            "Request correction of inaccurate information",
            "Request deletion of personal information where applicable",
            "Object to certain processing activities",
            "Withdraw consent where processing is based on consent",
          ],
        },
        {
          type: "paragraph",
          text: "Requests may be made by contacting us using the details above.",
        },
      ],
    },
    {
      id: "cookies-and-website-usage",
      title: "Cookies and Website Usage",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may use basic cookies or analytics tools to improve website functionality and user experience.",
        },
        {
          type: "paragraph",
          text: "You can adjust your browser settings to refuse cookies if you prefer.",
        },
      ],
    },
    {
      id: "third-party-websites",
      title: "Third-Party Websites",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to This Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time. Updated versions will be published on our website.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          type: "paragraph",
          text: "If you have any questions regarding this Privacy Policy or how your information is handled, please contact:",
        },
        {
          type: "paragraph",
          text: "Viza Ltd Email: contact@viza.org.uk",
        },
      ],
    },
  ],
};
