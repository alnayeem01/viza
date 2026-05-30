import type { LegalDocument } from "@/types/legal";
import { services } from "@/data/services";

const feeScheduleItems = services.map(
  (service) =>
    `${service.title}: ${service.fee}${service.dependantsFee ? ` (dependants: ${service.dependantsFee})` : ""}`,
);

/** Edit copy here — rendered on /terms (static at build time). */
export const termsAndFees: LegalDocument = {
  title: "Terms & Fees",
  description: "Terms of business and fixed fees for immigration advice and services.",
  lastUpdated: "30 May 2026",
  draftNotice:
    "DRAFT FOR CLIENT REVIEW — These terms must be reviewed and approved by Viza Ltd (and ideally by a qualified adviser or solicitor) before publication. Fee figures are pulled from src/data/services.ts.",
  intro:
    "These Terms & Fees govern the provision of immigration advice and services by Viza Ltd. By instructing us or using our services, you agree to these terms unless we have agreed otherwise in writing.",
  sections: [
    {
      id: "about-us",
      title: "1. About Viza Ltd",
      blocks: [
        {
          type: "paragraph",
          text: "Viza Ltd is authorised and regulated by the Immigration Advice Authority (IAA) at Level 1. Organisation Regulation Number: F202637415. Adviser Number: P063629. We provide immigration advice and services within our authorised scope only.",
        },
      ],
    },
    {
      id: "services",
      title: "2. Our services",
      blocks: [
        {
          type: "paragraph",
          text: "We provide advice and assistance on straightforward UK immigration matters, including (subject to our authorisation): skilled worker, student, spouse/partner and family, visitor visas, naturalisation, and dependants applications.",
        },
        {
          type: "paragraph",
          text: "We only provide immigration advice and services within our authorised Level 1 scope. If your matter is complex or outside our authorisation, we will advise you accordingly and may suggest seeking advice from a suitably authorised adviser or legal representative.",
        },
        {
          type: "paragraph",
          text: "All immigration decisions are made by the Home Office (or relevant authority). We cannot guarantee the outcome of any application.",
        },
      ],
    },
    {
      id: "engagement",
      title: "3. Taking instructions",
      blocks: [
        {
          type: "paragraph",
          text: "Before work begins, we will confirm the scope of work, applicable fees, and any documents required. A separate client care letter or engagement letter may be issued for your matter; where there is a conflict, the engagement letter prevails.",
        },
        {
          type: "paragraph",
          text: "You must provide accurate and complete information. We rely on the information and documents you supply. You are responsible for the truthfulness of your application to the Home Office.",
        },
      ],
    },
    {
      id: "fees",
      title: "4. Fixed fees",
      blocks: [
        {
          type: "paragraph",
          text: "Our current fixed professional fees for standard matters are set out below. These fees cover our professional advice and assistance as agreed for each matter type. They do not include Home Office fees, health surcharges, priority services, biometrics, translations, couriers or other third-party costs.",
        },
        {
          type: "list",
          items: feeScheduleItems,
        },
        {
          type: "paragraph",
          text: "Dependants applications: £250 each (in addition to main application fees where applicable), unless otherwise agreed in writing.",
        },
        {
          type: "paragraph",
          text: "If your matter requires substantially more work than anticipated (for example due to complexity, delays, or additional applications), we will discuss any revised fees with you before incurring further chargeable work.",
        },
      ],
    },
    {
      id: "payment",
      title: "5. Payment terms",
      blocks: [
        {
          type: "paragraph",
          text: "Professional fees are charged only after the agreed work has been completed, unless we agree staged payments or an upfront fee in writing for your matter.",
        },
        {
          type: "paragraph",
          text: "Invoices are payable within [14] days of issue unless otherwise stated. We may charge interest on late payments at the statutory rate where permitted by law.",
        },
        {
          type: "paragraph",
          text: "We do not hold client money. You must pay Home Office and other official fees directly to the relevant authority or provider.",
        },
      ],
    },
    {
      id: "cancellations",
      title: "6. Cancellation and termination",
      blocks: [
        {
          type: "paragraph",
          text: "You may withdraw your instructions at any time. If work has already been undertaken, you remain liable for fees proportionate to work completed and any non-recoverable costs agreed in advance.",
        },
        {
          type: "paragraph",
          text: "We may cease to act if there are reasonable grounds to do so (for example, non-payment, failure to cooperate, dishonesty, conflict of interest, or abusive behaviour), with notice where practicable.",
        },
      ],
    },
    {
      id: "confidentiality",
      title: "7. Confidentiality and data protection",
      blocks: [
        {
          type: "paragraph",
          text: "We treat your information as confidential subject to legal and regulatory obligations. Our use of personal data is described in our Privacy Policy.",
        },
      ],
    },
    {
      id: "liability",
      title: "8. Limitation of liability",
      blocks: [
        {
          type: "paragraph",
          text: "We carry professional indemnity insurance as required by our regulator. Nothing in these terms excludes or limits liability where it would be unlawful to do so (including for death or personal injury caused by negligence, or fraud).",
        },
        {
          type: "paragraph",
          text: "Subject to the above, our total liability to you in connection with any matter shall not exceed the professional fees paid to us for that matter, except where a court or competent authority determines otherwise.",
        },
        {
          type: "paragraph",
          text: "We are not liable for delays, refusals or decisions of the Home Office or third parties, or for losses arising from inaccurate or incomplete information supplied by you.",
        },
      ],
    },
    {
      id: "complaints",
      title: "9. Complaints",
      blocks: [
        {
          type: "paragraph",
          text: "If you are dissatisfied with our service, please refer to our Complaints Procedure. A copy is available on our website at /complaints.",
        },
      ],
    },
    {
      id: "law",
      title: "10. Governing law",
      blocks: [
        {
          type: "paragraph",
          text: "These terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction, subject to any mandatory rights you may have as a consumer.",
        },
      ],
    },
    {
      id: "contact",
      title: "11. Contact",
      blocks: [
        {
          type: "paragraph",
          text: "Viza Ltd | Email: contact@viza.org.uk | Telephone: 07539 641223 | Website: www.viza.org.uk",
        },
      ],
    },
  ],
};
