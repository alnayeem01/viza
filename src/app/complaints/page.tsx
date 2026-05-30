import type { Metadata } from "next";
import { complaintsProcedure } from "@/data/legal/complaints";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";

/**
 * SSG: This page is static HTML generated at `next build`.
 * Content lives in src/data/legal/complaints.ts — edit there, not here.
 */
export const metadata: Metadata = {
  title: "Complaints Procedure",
  description: complaintsProcedure.description,
};

const ComplaintsPage = () => {
  return (
    <LegalPageShell>
      <LegalDocumentView document={complaintsProcedure} />
    </LegalPageShell>
  );
};

export default ComplaintsPage;
