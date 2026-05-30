import type { LegalDocument } from "@/types/legal";

/** Edit copy here — rendered on /complaints (static at build time). */
export const complaintsProcedure: LegalDocument = {
  title: "Complaints Procedure",
  description: "How to raise a complaint about Viza Ltd and how we will respond.",
  lastUpdated: "30 May 2026",
  draftNotice:
    "DRAFT FOR CLIENT REVIEW — This procedure must be reviewed and approved by Viza Ltd before publication. It should align with IAA requirements and your internal policies.",
  intro:
    "Viza Ltd is committed to providing a professional and courteous service. If you are dissatisfied with our service, we would like to hear from you. This Complaints Procedure explains how you can raise a complaint and how we will handle it.",
  sections: [
    {
      id: "scope",
      title: "1. Scope",
      blocks: [
        {
          type: "paragraph",
          text: "This procedure applies to complaints about the immigration advice and services provided by Viza Ltd, and about the conduct of our advisers and staff. It does not replace your right to complain to the Immigration Advice Authority (IAA) or to pursue other legal remedies where appropriate.",
        },
      ],
    },
    {
      id: "definition",
      title: "2. What is a complaint?",
      blocks: [
        {
          type: "paragraph",
          text: "A complaint is an expression of dissatisfaction about our service, advice, fees, communication or conduct, whether made orally or in writing, where you expect a response or remedial action.",
        },
        {
          type: "paragraph",
          text: "General enquiries, requests for updates, or disagreements with a Home Office decision alone are not necessarily complaints; however, if you believe our advice or service contributed to the outcome, please tell us.",
        },
      ],
    },
    {
      id: "how-to-complain",
      title: "3. How to make a complaint",
      blocks: [
        {
          type: "paragraph",
          text: "Please put your complaint in writing where possible so we can investigate fully. You may complain by:",
        },
        {
          type: "list",
          items: [
            "Email: contact@viza.org.uk (subject line: “Complaint”).",
            "Post: [Insert business address — to be confirmed by Viza Ltd].",
            "Telephone: 07539 641223 — we will note the details and may ask you to confirm in writing.",
          ],
        },
        {
          type: "paragraph",
          text: "Please include: your full name and contact details; your client reference (if any); a clear description of what went wrong; dates and names if relevant; and what outcome you are seeking.",
        },
      ],
    },
    {
      id: "timescales",
      title: "4. Acknowledgement and timescales",
      blocks: [
        {
          type: "list",
          items: [
            "We will acknowledge your complaint within [5] working days of receipt.",
            "We aim to provide a substantive response within [8] weeks. Complex matters may take longer; we will keep you informed of progress.",
            "If we cannot meet these timescales, we will explain why and give a revised date.",
          ],
        },
      ],
    },
    {
      id: "investigation",
      title: "5. How we investigate",
      blocks: [
        {
          type: "paragraph",
          text: "Your complaint will be recorded and investigated fairly and impartially. Where possible, it will be considered by a person not directly involved in the matter complained of. We may need to review your file, contact you for further information, or speak to staff involved.",
        },
      ],
    },
    {
      id: "outcomes",
      title: "6. Possible outcomes",
      blocks: [
        {
          type: "paragraph",
          text: "Following investigation, we may:",
        },
        {
          type: "list",
          items: [
            "Uphold the complaint in whole or in part and offer an apology.",
            "Take remedial action (e.g. corrective advice, additional work at no extra fee where appropriate).",
            "Offer a partial or full refund of professional fees where we consider it justified (subject to our Terms & Fees).",
            "Reject the complaint where we believe our service was reasonable and compliant with our obligations.",
            "Explain that the matter relates to a Home Office decision outside our control.",
          ],
        },
        {
          type: "paragraph",
          text: "We will write to you with our decision and reasons. If you remain dissatisfied, see section 7 below.",
        },
      ],
    },
    {
      id: "iaa",
      title: "7. Complaining to the Immigration Advice Authority",
      blocks: [
        {
          type: "paragraph",
          text: "If you are not satisfied with our final response, or if your complaint has not been resolved within eight weeks of receipt, you may be able to complain to the Immigration Advice Authority (IAA), the body that regulates immigration advisers.",
        },
        {
          type: "paragraph",
          text: "Viza Ltd — Organisation Regulation Number: F202637415 | Adviser Number: P063629 | IAA Level 1.",
        },
        {
          type: "paragraph",
          text: "Details of how to complain to the IAA are available on the IAA website. We will cooperate with any IAA investigation and provide records as required.",
        },
      ],
    },
    {
      id: "records",
      title: "8. Records",
      blocks: [
        {
          type: "paragraph",
          text: "We keep a record of complaints received, our response, and any remedial action taken, in line with regulatory requirements. Records are retained securely and confidentially.",
        },
      ],
    },
    {
      id: "contact",
      title: "9. Contact",
      blocks: [
        {
          type: "paragraph",
          text: "For complaints or questions about this procedure: contact@viza.org.uk | 07539 641223.",
        },
      ],
    },
  ],
};
