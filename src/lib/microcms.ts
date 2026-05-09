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

// カテゴリ別Articles取得
export async function getArticlesByCategory(category: string, queries?: {
  limit?: number;
  offset?: number;
}) {
  return client.get<MicroCMSList<Article>>({
    endpoint: "articles",
    queries: {
      ...queries,
      filters: category !== "ALL" ? `category[equals]${category}` : undefined,
    },
  });
}

export async function getArticle(id: string) {
  return client.get<Article>({
    endpoint: "articles",
    contentId: id,
  });
}

// 同カテゴリの前後記事を取得
export async function getAdjacentArticles(
  category: string,
  publishedAt: string
): Promise<{ prev: Article | null; next: Article | null }> {
  const [prevRes, nextRes] = await Promise.all([
    client.get<MicroCMSList<Article>>({
      endpoint: "articles",
      queries: {
        limit: 1,
        orders: "-publishedAt",
        filters: `category[equals]${category}[and]publishedAt[less_than]${publishedAt}`,
        fields: "id,title,publishedAt",
      },
    }),
    client.get<MicroCMSList<Article>>({
      endpoint: "articles",
      queries: {
        limit: 1,
        orders: "publishedAt",
        filters: `category[equals]${category}[and]publishedAt[greater_than]${publishedAt}`,
        fields: "id,title,publishedAt",
      },
    }),
  ]);
  return {
    prev: prevRes.contents[0] ?? null,
    next: nextRes.contents[0] ?? null,
  };
}

// 同カテゴリの関連記事取得（自記事除く）
export async function getRelatedArticles(category: string, excludeId: string, limit = 3) {
  const { contents } = await client.get<MicroCMSList<Article>>({
    endpoint: "articles",
    queries: {
      limit: limit + 1,
      orders: "-publishedAt",
      filters: `category[equals]${category}`,
    },
  });
  return contents.filter((a) => a.id !== excludeId).slice(0, limit);
}

// News一覧取得
export async function getNews(queries?: {
  limit?: number;
  offset?: number;
  orders?: string;
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
