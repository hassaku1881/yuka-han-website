import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  TRANSLATED_ARTICLE_BASE_IDS,
  LOCALE_SUFFIX,
  type SupportedLocale,
} from "@/lib/i18n";
import { getArticle } from "@/lib/microcms";
import type { Article } from "@/lib/microcms";

export const revalidate = 60;

const PAGE_META: Record<SupportedLocale, { title: string; description: string; heading: string; sub: string; back: string }> = {
  en: {
    title: "Articles | Yuka-Han & Co.",
    description: "Articles on vacation rental operations, interior design, and Tokyo area guides.",
    heading: "Articles",
    sub: "Insights on vacation rentals, interior design, and Tokyo.",
    back: "Back to top",
  },
  "zh-TW": {
    title: "文章 | 株式会社ユカハン",
    description: "關於民宿經營、室內設計與東京地區導覽的文章。",
    heading: "文章",
    sub: "關於民宿經營、空間設計與東京的深度內容。",
    back: "回到首頁",
  },
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = PAGE_META[locale as SupportedLocale];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function LocaleTopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();

  const suffix = LOCALE_SUFFIX[locale as SupportedLocale];
  const meta = PAGE_META[locale as SupportedLocale];

  const settled = await Promise.allSettled(
    TRANSLATED_ARTICLE_BASE_IDS.map((baseId) => getArticle(`${baseId}${suffix}`))
  );
  const articles = settled
    .filter((r): r is PromiseFulfilledResult<Article> => r.status === "fulfilled")
    .map((r) => r.value)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  const sectionLabel: React.CSSProperties = {
    fontFamily: "var(--font-en)",
    fontSize: "0.72rem",
    letterSpacing: "0.35em",
    color: "var(--color-accent)",
    marginBottom: "1rem",
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-primary)",
          padding: "5rem 8% 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/20241109-32.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 66%",
            opacity: 0.18,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={sectionLabel}>ARTICLES</p>
          <h1
            style={{
              fontFamily: "var(--font-en)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "1.2rem",
              letterSpacing: "0.05em",
            }}
          >
            {meta.heading}
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 2.0,
            }}
          >
            {meta.sub}
          </p>
        </div>
      </section>

      {/* Article list */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {articles.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "var(--color-text-light)",
                padding: "6rem 0",
              }}
            >
              No articles available yet.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {articles.map((article) => {
                const baseId = article.id.replace(/-en$/, "").replace(/-zh$/, "");
                return (
                  <Link
                    key={article.id}
                    href={`/${locale}/articles/${baseId}`}
                    className="locale-article-card"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        background: "var(--color-white)",
                        borderRadius: "6px",
                        padding: "1.8rem 2rem",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.8rem",
                          marginBottom: "0.7rem",
                        }}
                      >
                        {article.category && (
                          <span
                            style={{
                              fontSize: "0.68rem",
                              letterSpacing: "0.1em",
                              color: "var(--color-accent)",
                              background: "rgba(139,115,85,0.1)",
                              padding: "0.2rem 0.7rem",
                              borderRadius: "3px",
                            }}
                          >
                            {article.category}
                          </span>
                        )}
                        <span
                          style={{
                            fontFamily: "var(--font-en)",
                            fontSize: "0.78rem",
                            color: "var(--color-text-light)",
                          }}
                        >
                          {new Date(article.publishedAt).toLocaleDateString(
                            locale === "en" ? "en-US" : "zh-TW",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </span>
                      </div>
                      <h2
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 500,
                          color: "var(--color-primary)",
                          lineHeight: 1.6,
                          marginBottom: article.excerpt ? "0.5rem" : 0,
                        }}
                      >
                        {article.title}
                      </h2>
                      {article.excerpt && (
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "var(--color-text-light)",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {article.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .locale-article-card > div:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
