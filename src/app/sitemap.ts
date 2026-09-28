import type { MetadataRoute } from "next";
import { SITE } from "@/lib/siteContent";
import { getAllLegalSlugs } from "@/lib/legalContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPaths = [
    "",
    "/services",
    "/process",
    "/pricing",
    "/faq",
    "/contact",
  ];
  const legal = getAllLegalSlugs().map((slug) => `/legal/${slug}`);

  return [...staticPaths, ...legal].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/legal") ? "yearly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/legal") ? 0.3 : 0.7,
  }));
}
