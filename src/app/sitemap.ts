import type { MetadataRoute } from "next";
import { legalRoutes } from "@/data/legal/routes";
import { siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const legalPages = legalRoutes.map((route) => ({
    url: new URL(route.href, siteUrl).href,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [
    {
      url: siteUrl.href,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPages,
  ];
}
