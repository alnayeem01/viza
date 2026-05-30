import type { Metadata } from "next";
import { privacyPolicy } from "@/data/legal/privacy";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";

/**
 * SSG: This page is static HTML generated at `next build`.
 * Content lives in src/data/legal/privacy.ts — edit there, not here.
 */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyPolicy.description,
};

const PrivacyPage = () => {
  return (
    <LegalPageShell>
      <LegalDocumentView document={privacyPolicy} />
    </LegalPageShell>
  );
};

export default PrivacyPage;
