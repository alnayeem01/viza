import Link from "next/link";
import type { LegalDocument } from "@/types/legal";
import { Container } from "@/components/ui/Container";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

export const LegalDocumentView = ({ document }: LegalDocumentViewProps) => {
  const showToc = document.sections.length >= 6;

  return (
    <article className="py-12 sm:py-16">
      <Container className={showToc ? "max-w-5xl" : "max-w-3xl"}>
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
          {document.draftNotice.trim() ? (
            <p className="mt-4 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-text">
              {document.draftNotice}
            </p>
          ) : null}
          {document.intro && (
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              {document.intro}
            </p>
          )}
        </header>

        <div className={showToc ? "mt-10 lg:flex lg:gap-12" : "mt-10"}>
          {showToc && (
            <nav
              className="mb-8 lg:sticky lg:top-20 lg:mb-0 lg:h-fit lg:w-56 lg:shrink-0"
              aria-label="On this page"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                On this page
              </p>
              <ul className="mt-3 space-y-2 border-l border-primary/15 pl-4 text-sm">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className={`space-y-10 ${showToc ? "min-w-0 flex-1 max-w-3xl" : ""}`}>
            {document.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-[4.5rem]">
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
        </div>
      </Container>
    </article>
  );
};
