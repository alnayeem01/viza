export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  draftNotice: string;
  intro?: string;
  sections: LegalSection[];
};
