import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  LOCALE_SUFFIX,
  type SupportedLocale,
} from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";
import { getArticles, getArticlesByCategory } from "@/lib/microcms";
import type { Article } from "@/lib/microcms";
import { getFallback, getReadingTime, ARTICLE_CATEGORIES } from "@/lib/articleUtils";

export const revalidate = 60;

const PAGE_SIZE = 12;

const PAGE_META: Record<SupportedLocale, {
  title: string; description: string;
  heading: string; sub: string;
  readMore: string; minRead: string; noArticles: string;
  dateLocale: string;
}> = {
  en: {
    title: "Articles | Yuka-Han & Co.",
    description: "Articles on vacation rental operations, interior design, and Tokyo area guides.",
    heading: "Articles",
    sub: "Insights on vacation rentals, interior design, and Tokyo.",
    readMore: "READ MORE →",
    minRead: "min read",
    noArticles: "No articles available yet.",
    dateLocale: "en-US",
  },
  "zh-TW": {
    title: "文章 | 株式会社ユカハン",
    description: "關於民宿經營、室內設計與東京地區導覽的文章。",
    heading: "文章",
    sub: "關於民宿經營、空間設計與東京的深度內容。",
    readMore: "閱讀更多 →",
    minRead: "分鐘",
    noArticles: "目前尚無文章。",
    dateLocale: "zh-TW",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = PAGE_META[locale as SupportedLocale];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/articles`,
      languages: {
        ja: `${BASE_URL}/articles`,
        en: `${BASE_URL}/en/articles`,
        "x-default": `${BASE_URL}/articles`,
      },
    },
  };
}

function buildHref(locale: string, page: number, category: string) {
  const params = new URLSearchParams();
  if (category !== "ALL") params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const q = params.toString();
  return q ? `/${locale}/articles?${q}` : `/${locale}/articles`;
}

export default async function LocaleArticlesPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();

  const { category: rawCategory, page: rawPage } = await searchParams;
  const meta = PAGE_META[locale as SupportedLocale];
  const suffix = LOCALE_SUFFIX[locale as SupportedLocale];
  const localeFilter = `id[contains]${suffix}`;

  const activeCategory = ARTICLE_CATEGORIES.find((c) => c.key === rawCategory)?.key ?? "ALL";
  const currentPage = Math.max(1, parseInt(rawPage ?? "1") || 1);
  const offset = (currentPage - 1) * PAGE_SIZE;

  const [
    { contents: articles, totalCount },
    countAll,
    countBusiness,
    countInterior,
    countAreaGuide,
    countOthers,
  ] = await Promise.all([
    getArticlesByCategory(activeCategory, { limit: PAGE_SIZE, offset, filters: localeFilter }),
    getArticles({ limit: 1, filters: localeFilter }),
    getArticlesByCategory("BUSINESS",   { limit: 1, filters: localeFilter }),
    getArticlesByCategory("INTERIOR",   { limit: 1, filters: localeFilter }),
    getArticlesByCategory("AREA GUIDE", { limit: 1, filters: localeFilter }),
    getArticlesByCategory("OTHERS",     { limit: 1, filters: localeFilter }),
  ]);

  const categoryCounts: Record<string, number> = {
    BUSINESS:   countBusiness.totalCount,
    INTERIOR:   countInterior.totalCount,
    "AREA GUIDE": countAreaGuide.totalCount,
    OTHERS:     countOthers.totalCount,
  };
  const grandTotal = countAll.totalCount;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const showFeatured = currentPage === 1;
  const featured = showFeatured ? articles[0] : null;
  const rest = showFeatured ? articles.slice(1) : articles;

  return (
    <main style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section style={{
        background: "var(--color-primary)",
        padding: "5rem 8% 4rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/20241109-32.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 66%",
          opacity: 0.18,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "var(--font-en)", fontSize: "0.72rem",
            letterSpacing: "0.35em", color: "var(--color-accent)", marginBottom: "1rem",
          }}>ARTICLES</p>
          <h1 style={{
            fontFamily: "var(--font-en)", fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400, color: "#fff", marginBottom: "1.2rem", letterSpacing: "0.05em",
          }}>{meta.heading}</h1>
          <p style={{
            fontSize: "0.95rem", color: "rgba(255,255,255,0.72)",
            maxWidth: "480px", margin: "0 auto", lineHeight: 2.0,
          }}>{meta.sub}</p>
        </div>
      </section>

      {/* ── Category tabs ── */}
      <section style={{ background: "var(--color-white)", borderBottom: "1px solid #eee", padding: "0 8%" }}>
        <div style={{ display: "flex", gap: 0, maxWidth: "1100px", margin: "0 auto", overflowX: "auto" }} className="cat-tabs">
          {ARTICLE_CATEGORIES.map((cat) => {
            const isActive = cat.key === activeCategory;
            const count = cat.key === "ALL" ? grandTotal : (categoryCounts[cat.key] ?? 0);
            if (count === 0 && cat.key !== "ALL") return null;
            return (
              <Link
                key={cat.key}
                href={cat.key === "ALL" ? `/${locale}/articles` : `/${locale}/articles?category=${encodeURIComponent(cat.key)}`}
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  padding: "1.1rem 1.6rem",
                  fontFamily: "var(--font-en)", fontSize: "0.72rem", letterSpacing: "0.18em",
                  textDecoration: "none", whiteSpace: "nowrap",
                  color: isActive ? "var(--color-primary)" : "var(--color-text-light)",
                  borderBottom: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {cat.label}
                <span style={{
                  fontSize: "0.65rem",
                  color: isActive ? "var(--color-accent)" : "rgba(139,115,85,0.6)",
                  fontWeight: 400, letterSpacing: "0",
                }}>({count})</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Article list ── */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {articles.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-light)", padding: "6rem 0" }}>
              {meta.noArticles}
            </p>
          ) : (
            <>
              {/* Featured */}
              {featured && (() => {
                const baseId = featured.id.replace(/-en$/, "").replace(/-zh$/, "");
                return (
                  <Link href={`/${locale}/articles/${baseId}`} className="featured-card" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="featured-img" style={{ backgroundImage: `url('${featured.thumbnail?.url ?? getFallback(featured.category)}')` }} />
                    <div className="featured-body">
                      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                        {featured.category && (
                          <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--color-accent)", background: "rgba(139,115,85,0.1)", padding: "0.25rem 0.7rem", borderRadius: "3px" }}>
                            {featured.category}
                          </span>
                        )}
                        <span style={{ fontFamily: "var(--font-en)", fontSize: "0.78rem", color: "var(--color-text-light)" }}>
                          {new Date(featured.publishedAt).toLocaleDateString(meta.dateLocale, { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        <span style={{ fontFamily: "var(--font-en)", fontSize: "0.72rem", color: "var(--color-text-light)", opacity: 0.8 }}>
                          {getReadingTime(featured.body)} {meta.minRead}
                        </span>
                      </div>
                      <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.55, marginBottom: "1rem" }}>
                        {featured.title}
                      </h2>
                      {featured.excerpt && (
                        <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                          {featured.excerpt}
                        </p>
                      )}
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "var(--color-accent)", fontFamily: "var(--font-en)", letterSpacing: "0.08em" }}>
                        {meta.readMore}
                      </span>
                    </div>
                  </Link>
                );
              })()}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="articles-grid" style={{ marginTop: featured ? "2rem" : "0" }}>
                  {rest.map((article: Article) => {
                    const baseId = article.id.replace(/-en$/, "").replace(/-zh$/, "");
                    return (
                      <Link key={article.id} href={`/${locale}/articles/${baseId}`} className="article-card" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="article-card-img" style={{ backgroundImage: `url('${article.thumbnail?.url ?? getFallback(article.category)}')` }} />
                        <div style={{ padding: "1.3rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.7rem" }}>
                            {article.category && (
                              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--color-accent)", background: "rgba(139,115,85,0.1)", padding: "0.2rem 0.6rem", borderRadius: "3px" }}>
                                {article.category}
                              </span>
                            )}
                            <span style={{ fontFamily: "var(--font-en)", fontSize: "0.72rem", color: "var(--color-text-light)" }}>
                              {new Date(article.publishedAt).toLocaleDateString(meta.dateLocale, { year: "numeric", month: "short", day: "numeric" })}
                            </span>
                            <span style={{ fontFamily: "var(--font-en)", fontSize: "0.68rem", color: "var(--color-text-light)", opacity: 0.8 }}>
                              {getReadingTime(article.body)} {meta.minRead}
                            </span>
                          </div>
                          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.6, marginBottom: "0.6rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {article.title}
                          </h3>
                          {article.excerpt && (
                            <p style={{ fontSize: "0.82rem", color: "var(--color-text-light)", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                              {article.excerpt}
                            </p>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem", marginTop: "3.5rem" }}>
                  {currentPage > 1 ? (
                    <Link href={buildHref(locale, currentPage - 1, activeCategory)} className="page-btn">←</Link>
                  ) : (
                    <span className="page-btn page-btn-disabled">←</span>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link key={page} href={buildHref(locale, page, activeCategory)} className={`page-btn ${page === currentPage ? "page-btn-active" : ""}`}>{page}</Link>
                  ))}
                  {currentPage < totalPages ? (
                    <Link href={buildHref(locale, currentPage + 1, activeCategory)} className="page-btn">→</Link>
                  ) : (
                    <span className="page-btn page-btn-disabled">→</span>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`
        .featured-card { display: grid; grid-template-columns: 1fr 1fr; background: var(--color-white); border-radius: 6px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.06); transition: box-shadow 0.3s, transform 0.3s; }
        .featured-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.12); transform: translateY(-3px); }
        .featured-img { min-height: 320px; background-size: cover; background-position: center; }
        .featured-body { padding: 2.5rem 2.8rem; display: flex; flex-direction: column; justify-content: center; }
        .articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }
        .article-card { background: var(--color-white); border-radius: 6px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05); transition: box-shadow 0.3s, transform 0.3s; display: flex; flex-direction: column; }
        .article-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.1); transform: translateY(-4px); }
        .article-card-img { height: 180px; background-size: cover; background-position: center; flex-shrink: 0; }
        .page-btn { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 4px; font-family: var(--font-en); font-size: 0.82rem; text-decoration: none; color: var(--color-text-light); background: var(--color-white); border: 1px solid #e8e4de; transition: background 0.2s, color 0.2s; }
        .page-btn:hover { background: var(--color-bg); border-color: var(--color-accent); color: var(--color-accent); }
        .page-btn-active { background: var(--color-primary) !important; color: #fff !important; border-color: var(--color-primary) !important; font-weight: 600; }
        .page-btn-disabled { opacity: 0.3; cursor: default; }
        .cat-tabs { scrollbar-width: none; }
        .cat-tabs::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr; }
          .featured-img { min-height: 220px; }
          .featured-body { padding: 1.5rem; }
          .articles-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </main>
  );
}
