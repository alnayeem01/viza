import { complaintsProcedure } from "@/data/legal/complaints";
import { pageMetadata } from "@/data/seo";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";

/**
 * SSG: This page is static HTML generated at `next build`.
 * Content lives in src/data/legal/complaints.ts — edit there, not here.
 */
export const metadata = pageMetadata(
  "Complaints Procedure",
  complaintsProcedure.description,
  "/complaints",
);

const ComplaintsPage = () => {
  return (
    <LegalPageShell>
      <LegalDocumentView document={complaintsProcedure} />
    </LegalPageShell>
  );
};

export default ComplaintsPage;
