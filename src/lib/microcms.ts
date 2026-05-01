import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// 型定義
export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
};

export type NewsItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  category: string;
  body: string;
};

export type MicroCMSList<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

// Articles取得
export async function getArticles(queries?: {
  limit?: number;
  offset?: number;
  filters?: string;
}) {
  return client.get<MicroCMSList<Article>>({
    endpoint: "articles",
    queries,
  });
}

export async function getArticle(id: string) {
  return client.get<Article>({
    endpoint: "articles",
    contentId: id,
  });
}

// News一覧取得
export async function getNews(queries?: {
  limit?: number;
  offset?: number;
}) {
  return client.get<MicroCMSList<NewsItem>>({
    endpoint: "news",
    queries,
  });
}

// News個別取得
export async function getNewsItem(id: string) {
  return client.get<NewsItem>({
    endpoint: "news",
    contentId: id,
  });
}
