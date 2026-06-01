import type { Metadata } from "next";
import { brand } from "@/data/brand";
import { site } from "@/data/site";

/** Public site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.viza.org.uk). */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.viza.org.uk",
);

export const defaultTitle = `${brand.name} | UK Immigration Advice & Visa Assistance`;

export const defaultDescription =
  "IAA Level 1 regulated UK immigration advisers. Fixed fees for Skilled Worker, Student, Spouse, Visitor visas and naturalisation. Contact Viza Ltd.";

export const seoKeywords = [
  "UK immigration advice",
  "visa assistance UK",
  "IAA regulated immigration adviser",
  "Skilled Worker visa UK",
  "Student visa UK",
  "Spouse visa UK",
  "Visitor visa UK",
  "British naturalisation",
  "immigration adviser Level 1",
  "fixed fee immigration advice",
] as const;

const ogImagePath = brand.logo;

export const sharedOpenGraph = {
  type: "website" as const,
  locale: "en_GB",
  siteName: brand.name,
  images: [
    {
      url: ogImagePath,
      width: 512,
      height: 512,
      alt: `${brand.name} logo`,
    },
  ],
};

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: defaultTitle,
    template: `%s | ${brand.name}`,
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: brand.name, url: siteUrl.href }],
  creator: brand.name,
  publisher: brand.name,
  category: "Legal Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...sharedOpenGraph,
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImagePath],
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

/** Per-page metadata for legal and other inner routes. */
export const pageMetadata = (
  title: string,
  description: string,
  path: `/${string}`,
): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    ...sharedOpenGraph,
    title: `${title} | ${brand.name}`,
    description,
    url: path,
  },
  twitter: {
    card: "summary",
    title: `${title} | ${brand.name}`,
    description,
  },
});

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${siteUrl.href}#organization`,
  name: brand.name,
  url: siteUrl.href,
  logo: `${siteUrl.href}${brand.logo}`,
  email: site.email,
  telephone: site.phoneHref.replace("tel:", ""),
  description: defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
} as const;

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteUrl.href}#website`,
  url: siteUrl.href,
  name: brand.name,
  description: defaultDescription,
  publisher: { "@id": `${siteUrl.href}#organization` },
  inLanguage: "en-GB",
} as const;

export const professionalServiceJsonLd = {
  "@type": "ProfessionalService",
  "@id": `${siteUrl.href}#service`,
  name: brand.name,
  url: siteUrl.href,
  image: `${siteUrl.href}${brand.logo}`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  description: defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  priceRange: "££",
  knowsAbout: [
    "UK Skilled Worker visa",
    "UK Student visa",
    "UK Spouse and partner visa",
    "UK Visitor visa",
    "British citizenship and naturalisation",
    "UK dependant visa applications",
  ],
  parentOrganization: { "@id": `${siteUrl.href}#organization` },
} as const;
