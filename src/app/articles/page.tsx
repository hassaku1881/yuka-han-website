import Link from "next/link";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/microcms";
import type { Article } from "@/lib/microcms";
import { BASE_URL } from "@/lib/constants";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "コラム",
  description: "宿泊施設の空間づくりと運営の現場から、インテリア・Airbnb・ビジネスについて書くコラム。",
  alternates: { canonical: `${BASE_URL}/articles` },
  openGraph: {
    url: `${BASE_URL}/articles`,
    title: "コラム | Yuka-Han",
    description: "宿泊施設の空間づくりと運営の現場から、インテリア・Airbnb・ビジネスについて書くコラム。",
  },
};

const CATEGORIES = [
  { key: "ALL",        label: "ALL" },
  { key: "BUSINESS",  label: "BUSINESS" },
  { key: "INTERIOR",  label: "INTERIOR" },
  { key: "AREA GUIDE",label: "AREA GUIDE" },
  { key: "OTHERS",    label: "OTHERS" },
];

const FALLBACK_IMAGES: Record<string, string> = {
  BUSINESS:     "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
  INTERIOR:     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
  "AREA GUIDE": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
  OTHERS:       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
  DEFAULT:      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
};

function getFallback(category?: string) {
  if (!category) return FALLBACK_IMAGES.DEFAULT;
  return FALLBACK_IMAGES[category] ?? FALLBACK_IMAGES.DEFAULT;
}

function getReadingTime(body: string): number {
  const chars = body.replace(/<[^>]+>/g, "").length;
  return Math.max(1, Math.ceil(chars / 500));
}

type Props = { searchParams: Promise<{ category?: string }> };

export default async function ArticlesPage({ searchParams }: Props) {
  const { category: rawCategory } = await searchParams;
  const activeCategory = CATEGORIES.find((c) => c.key === rawCategory)?.key ?? "ALL";

  const { contents: articles } = await getArticlesByCategory(activeCategory, { limit: 24 });

  const [featured, ...rest] = articles;

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
          backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "var(--font-en)", fontSize: "0.72rem",
            letterSpacing: "0.35em", color: "var(--color-accent)",
            marginBottom: "1rem",
          }}>ARTICLES</p>
          <h1 style={{
            fontFamily: "var(--font-en)", fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400, color: "#fff", marginBottom: "1.2rem", letterSpacing: "0.05em",
          }}>コラム</h1>
          <p style={{
            fontSize: "0.95rem", color: "rgba(255,255,255,0.72)",
            maxWidth: "480px", margin: "0 auto", lineHeight: 2.0,
          }}>
            宿泊施設の空間づくりと運営の現場から、<br />
            インテリア・Airbnb・ビジネスについて書いています。
          </p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section style={{
        background: "var(--color-white)",
        borderBottom: "1px solid #eee",
        padding: "0 8%",
      }}>
        <div style={{
          display: "flex", gap: 0, maxWidth: "1100px",
          margin: "0 auto", overflowX: "auto",
        }} className="cat-tabs">
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === activeCategory;
            return (
              <Link
                key={cat.key}
                href={cat.key === "ALL" ? "/articles" : `/articles?category=${encodeURIComponent(cat.key)}`}
                style={{
                  display: "block",
                  padding: "1.1rem 1.6rem",
                  fontFamily: "var(--font-en)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  color: isActive ? "var(--color-primary)" : "var(--color-text-light)",
                  borderBottom: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Article List ── */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {articles.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-light)", padding: "6rem 0" }}>
              該当する記事はまだありません。
            </p>
          ) : (
            <>
              {/* Featured card */}
              {featured && (
                <Link
                  href={`/articles/${featured.id}`}
                  className="featured-card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="featured-img"
                    style={{
                      backgroundImage: `url('${featured.thumbnail?.url ?? getFallback(featured.category)}')`,
                    }}
                  />
                  <div className="featured-body">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                      {featured.category && (
                        <span style={{
                          fontSize: "0.68rem", letterSpacing: "0.12em",
                          color: "var(--color-accent)",
                          background: "rgba(139,115,85,0.1)",
                          padding: "0.25rem 0.7rem", borderRadius: "3px",
                        }}>{featured.category}</span>
                      )}
                      <span style={{
                        fontFamily: "var(--font-en)", fontSize: "0.78rem",
                        color: "var(--color-text-light)",
                      }}>
                        {new Date(featured.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-en)", fontSize: "0.72rem",
                        color: "var(--color-text-light)", opacity: 0.8,
                      }}>
                        約{getReadingTime(featured.body)}分
                      </span>
                    </div>
                    <h2 style={{
                      fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 500,
                      color: "var(--color-primary)", lineHeight: 1.55, marginBottom: "1rem",
                    }}>
                      {featured.title}
                    </h2>
                    {featured.excerpt && (
                      <p style={{
                        fontSize: "0.9rem", color: "var(--color-text-light)",
                        lineHeight: 1.8, marginBottom: "1.5rem",
                      }}>
                        {featured.excerpt}
                      </p>
                    )}
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      fontSize: "0.82rem", color: "var(--color-accent)",
                      fontFamily: "var(--font-en)", letterSpacing: "0.08em",
                    }}>
                      READ MORE →
                    </span>
                  </div>
                </Link>
              )}

              {/* Rest grid */}
              {rest.length > 0 && (
                <div className="articles-grid" style={{ marginTop: "2rem" }}>
                  {rest.map((article: Article) => (
                    <Link
                      key={article.id}
                      href={`/articles/${article.id}`}
                      className="article-card"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="article-card-img"
                        style={{
                          backgroundImage: `url('${article.thumbnail?.url ?? getFallback(article.category)}')`,
                        }}
                      />
                      <div style={{ padding: "1.3rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.7rem" }}>
                          {article.category && (
                            <span style={{
                              fontSize: "0.65rem", letterSpacing: "0.1em",
                              color: "var(--color-accent)",
                              background: "rgba(139,115,85,0.1)",
                              padding: "0.2rem 0.6rem", borderRadius: "3px",
                            }}>{article.category}</span>
                          )}
                          <span style={{
                            fontFamily: "var(--font-en)", fontSize: "0.72rem",
                            color: "var(--color-text-light)",
                          }}>
                            {new Date(article.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                          </span>
                          <span style={{
                            fontFamily: "var(--font-en)", fontSize: "0.68rem",
                            color: "var(--color-text-light)", opacity: 0.8,
                          }}>
                            約{getReadingTime(article.body)}分
                          </span>
                        </div>
                        <h3 style={{
                          fontSize: "0.95rem", fontWeight: 500,
                          color: "var(--color-primary)", lineHeight: 1.6,
                          marginBottom: "0.6rem",
                          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}>
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p style={{
                            fontSize: "0.82rem", color: "var(--color-text-light)",
                            lineHeight: 1.7,
                            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}>
                            {article.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`
        /* Featured card */
        .featured-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--color-white);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .featured-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          transform: translateY(-3px);
        }
        .featured-img {
          min-height: 320px;
          background-size: cover;
          background-position: center;
        }
        .featured-body {
          padding: 2.5rem 2.8rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Grid */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
        }
        .article-card {
          background: var(--color-white);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .article-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
        .article-card-img {
          height: 180px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }

        /* Category tabs scroll on mobile */
        .cat-tabs { scrollbar-width: none; }
        .cat-tabs::-webkit-scrollbar { display: none; }

        /* Responsive */
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
