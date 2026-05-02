import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { getArticles, getNews } from "@/lib/microcms";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,       lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${BASE_URL}/service`,     lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${BASE_URL}/wuto`,        lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${BASE_URL}/articles`,    lastModified: new Date(), changeFrequency: "weekly",   priority: 0.9 },
    { url: `${BASE_URL}/news`,        lastModified: new Date(), changeFrequency: "weekly",   priority: 0.7 },
    { url: `${BASE_URL}/contact`,     lastModified: new Date(), changeFrequency: "yearly",   priority: 0.6 },
  ];

  const [articlesData, newsData] = await Promise.all([
    getArticles({ limit: 200 }).catch(() => ({ contents: [] })),
    getNews({ limit: 200 }).catch(() => ({ contents: [] })),
  ]);

  const articleRoutes: MetadataRoute.Sitemap = articlesData.contents.map((a) => ({
    url: `${BASE_URL}/articles/${a.id}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsData.contents.map((n) => ({
    url: `${BASE_URL}/news/${n.id}`,
    lastModified: new Date(n.updatedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes, ...newsRoutes];
}
