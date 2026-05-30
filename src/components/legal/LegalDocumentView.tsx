import Link from "next/link";
import type { LegalDocument } from "@/types/legal";
import { Container } from "@/components/ui/Container";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

export const LegalDocumentView = ({ document }: LegalDocumentViewProps) => {
  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:text-primary"
        >
          ← Back to home
        </Link>

        <header className="mt-6 border-b border-primary/10 pb-8">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            {document.title}
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Last updated: {document.lastUpdated}
          </p>
          <p className="mt-4 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-text">
            {document.draftNotice}
          </p>
          {document.intro && (
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              {document.intro}
            </p>
          )}
        </header>

        <div className="mt-10 space-y-10">
          {document.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-text-secondary"
                      >
                        {block.text}
                      </p>
                    );
                  }

                  return (
                    <ul
                      key={index}
                      className="list-disc space-y-2 pl-6 text-base leading-relaxed text-text-secondary"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
};
