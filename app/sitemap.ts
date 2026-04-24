import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/data/vehicles";
import { company } from "@/lib/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || company.urlPreview;
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/vozy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/cenik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/obchodni-podminky`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/gdpr`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  for (const v of vehicles) {
    urls.push({
      url: `${base}/vozy/${v.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  return urls;
}
