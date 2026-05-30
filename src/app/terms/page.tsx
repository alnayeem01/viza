import type { Metadata } from "next";
import { termsAndFees } from "@/data/legal/terms";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";

/**
 * SSG: This page is static HTML generated at `next build`.
 * Content lives in src/data/legal/terms.ts — fees sync from src/data/services.ts.
 */
export const metadata: Metadata = {
  title: "Terms & Fees",
  description: termsAndFees.description,
};

const TermsPage = () => {
  return (
    <LegalPageShell>
      <LegalDocumentView document={termsAndFees} />
    </LegalPageShell>
  );
};

export default TermsPage;
