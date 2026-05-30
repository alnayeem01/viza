import {
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/data/seo";

/** Structured data for the home page — helps search engines understand the business. */
export const HomeJsonLd = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd, websiteJsonLd, professionalServiceJsonLd],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
};
