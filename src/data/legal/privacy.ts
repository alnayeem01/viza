import type { LegalDocument } from "@/types/legal";

/** Edit copy here — rendered on /privacy (static at build time). */
export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: "How Viza Ltd collects, uses and protects your personal data.",
  lastUpdated: "30 May 2026",
  draftNotice:
    "DRAFT FOR CLIENT REVIEW — This policy must be reviewed and approved by Viza Ltd before publication. It does not constitute legal advice.",
  intro:
    "Viza Ltd respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and share personal information when you use our website, contact us, or receive immigration advice and services from us.",
  sections: [
    {
      id: "who-we-are",
      title: "1. Who we are",
      blocks: [
        {
          type: "paragraph",
          text: "Viza Ltd (“we”, “us”, “our”) is authorised and regulated by the Immigration Advice Authority (IAA) at Level 1. Organisation Regulation Number: F202637415. Adviser Number: P063629.",
        },
        {
          type: "paragraph",
          text: "For the purposes of UK data protection law, Viza Ltd is the data controller responsible for your personal data. Contact: contact@viza.org.uk | Telephone: 07539 641223 | Website: www.viza.org.uk.",
        },
      ],
    },
    {
      id: "scope",
      title: "2. Scope of this policy",
      blocks: [
        {
          type: "paragraph",
          text: "This policy applies to personal data we process about clients, prospective clients, website visitors and other individuals who contact us. It should be read together with our Terms & Fees and Complaints Procedure.",
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "3. Personal data we may collect",
      blocks: [
        {
          type: "paragraph",
          text: "Depending on your relationship with us, we may collect and process the following categories of personal data:",
        },
        {
          type: "list",
          items: [
            "Identity and contact details (e.g. name, date of birth, address, email, telephone number).",
            "Immigration and application information (e.g. nationality, visa history, employment, education, family details, documents you provide).",
            "Communication records (e.g. emails, messages, call notes, meeting records).",
            "Website and technical data (e.g. IP address, browser type, pages visited, cookies where used).",
            "Payment-related information where applicable (we do not hold client money; see section 8).",
          ],
        },
        {
          type: "paragraph",
          text: "We may also receive information from third parties where relevant to your matter (for example, family members, employers, or educational institutions), provided you have authorised this or it is otherwise lawful.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "4. How we use your personal data",
      blocks: [
        {
          type: "paragraph",
          text: "We use personal data only where permitted by law. Our lawful bases under UK GDPR may include:",
        },
        {
          type: "list",
          items: [
            "Performance of a contract — to provide immigration advice and services you have requested.",
            "Legal obligation — to comply with regulatory, record-keeping and anti-money laundering requirements where applicable.",
            "Legitimate interests — to operate our business, respond to enquiries, maintain records, and improve our services (balanced against your rights).",
            "Consent — where you have given clear consent (e.g. marketing, or non-essential cookies if used). You may withdraw consent at any time.",
          ],
        },
        {
          type: "paragraph",
          text: "We use your data to: assess enquiries; provide advice within our authorised scope; prepare and support applications; communicate with you; maintain client files; meet IAA and other regulatory obligations; and administer our website.",
        },
      ],
    },
    {
      id: "sharing",
      title: "5. Sharing your personal data",
      blocks: [
        {
          type: "paragraph",
          text: "We do not sell your personal data. We may share information only where necessary and lawful, including with:",
        },
        {
          type: "list",
          items: [
            "The Home Office and related UK authorities when submitting applications or complying with immigration processes.",
            "Professional advisers or interpreters engaged for your matter (under confidentiality obligations).",
            "IT and communication providers (e.g. email, hosting, form processing) who process data on our instructions.",
            "The Immigration Advice Authority or other regulators if required by law or regulation.",
            "Courts, tribunals or law enforcement where we are legally required to do so.",
          ],
        },
        {
          type: "paragraph",
          text: "Where we use service providers, we require appropriate contractual safeguards. Some providers may process data outside the UK; where this occurs we ensure appropriate safeguards (such as UK adequacy regulations or standard contractual clauses) are in place.",
        },
      ],
    },
    {
      id: "retention",
      title: "6. How long we keep your data",
      blocks: [
        {
          type: "paragraph",
          text: "We retain personal data only for as long as necessary for the purposes set out in this policy, including to satisfy legal, regulatory, accounting and reporting requirements. Immigration advice files are typically retained in line with IAA record-keeping standards and limitation periods. When data is no longer required, we securely delete or anonymise it.",
        },
      ],
    },
    {
      id: "security",
      title: "7. Security",
      blocks: [
        {
          type: "paragraph",
          text: "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse or alteration. No method of transmission over the internet is completely secure; we cannot guarantee absolute security.",
        },
      ],
    },
    {
      id: "client-money",
      title: "8. Client money",
      blocks: [
        {
          type: "paragraph",
          text: "We do not hold client money. Home Office fees, health surcharges, priority service fees and other third-party charges must be paid directly by you to the relevant authority or provider.",
        },
      ],
    },
    {
      id: "rights",
      title: "9. Your rights",
      blocks: [
        {
          type: "paragraph",
          text: "Under UK data protection law, you may have the following rights (subject to conditions and exemptions):",
        },
        {
          type: "list",
          items: [
            "Right of access to your personal data.",
            "Right to rectification of inaccurate data.",
            "Right to erasure in certain circumstances.",
            "Right to restrict processing in certain circumstances.",
            "Right to object to processing based on legitimate interests or for direct marketing.",
            "Right to data portability where processing is based on consent or contract and is automated.",
            "Right to withdraw consent at any time where processing is based on consent.",
          ],
        },
        {
          type: "paragraph",
          text: "To exercise your rights, contact us at contact@viza.org.uk. We will respond within one month in most cases. You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO): ico.org.uk.",
        },
      ],
    },
    {
      id: "cookies",
      title: "10. Cookies and website analytics",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may use essential cookies necessary for operation. If we introduce non-essential cookies or analytics in future, we will update this policy and, where required, obtain your consent before they are placed.",
        },
      ],
    },
    {
      id: "changes",
      title: "11. Changes to this policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will be revised when changes are made. We encourage you to review this page periodically.",
        },
      ],
    },
    {
      id: "contact",
      title: "12. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: "For questions about this Privacy Policy or our use of your personal data, please contact: Viza Ltd, email: contact@viza.org.uk, telephone: 07539 641223.",
        },
      ],
    },
  ],
};
