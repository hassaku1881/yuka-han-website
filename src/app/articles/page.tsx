import Link from "next/link";
import type { Metadata } from "next";
import { getArticles } from "@/lib/microcms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "コラム | Yuka-Han",
  description: "Japandiインテリア、東京下町エリアガイド、民泊運営のノウハウなど、Yuka-Hanが発信するコラム。",
};

const categories = ["ALL", "INTERIOR", "AREA GUIDE", "BUSINESS", "TRAVEL"];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600";

export default async function ArticlesPage() {
  const { contents: articles } = await getArticles({ limit: 12 });

  const sectionLabel: React.CSSProperties = {
    fontFamily: "var(--font-en)",
    fontSize: "0.75rem",
    letterSpacing: "0.3em",
    color: "var(--color-accent)",
    marginBottom: "0.5rem",
  };
  const sectionTitle: React.CSSProperties = {
    fontFamily: "var(--font-en)",
    fontSize: "2.5rem",
    fontWeight: 400,
    color: "var(--color-primary)",
    marginBottom: "2rem",
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "5rem 8% 3rem", background: "var(--color-white)", textAlign: "center" }}>
        <p style={sectionLabel}>ARTICLES</p>
        <h1 style={sectionTitle}>コラム</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)", maxWidth: "600px", margin: "0 auto" }}>
          Japandiインテリア、東京下町エリアガイド、民泊運営のノウハウなど、Yuka-Hanが発信するコラム。
        </p>
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <span
              key={cat}
              style={{
                padding: "0.4rem 1.2rem",
                border: cat === "ALL" ? "1px solid var(--color-primary)" : "1px solid #ddd",
                borderRadius: "20px",
                background: cat === "ALL" ? "var(--color-primary)" : "transparent",
                color: cat === "ALL" ? "var(--color-white)" : "var(--color-text-light)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        {articles.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--color-text-light)", padding: "4rem 0" }}>
            記事は準備中です。もうしばらくお待ちください。
          </p>
        ) : (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}
            className="articles-grid"
          >
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                style={{
                  background: "var(--color-white)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                className="article-card-link"
              >
                <div
                  style={{
                    height: "200px",
                    backgroundImage: `url('${article.thumbnail?.url ?? FALLBACK_IMAGE}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#eee",
                  }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                    {article.category && (
                      <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--color-accent)", background: "rgba(139,115,85,0.1)", padding: "0.2rem 0.6rem", borderRadius: "3px" }}>
                        {article.category}
                      </span>
                    )}
                    <span style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", color: "var(--color-text-light)" }}>
                      {new Date(article.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.6, marginBottom: "0.8rem" }}>
                    {article.title}
                  </h2>
                  {article.excerpt && (
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.7, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <style>{`
        .article-card-link:hover { transform: translateY(-5px) !important; box-shadow: 0 8px 30px rgba(0,0,0,0.1) !important; }
        @media (max-width: 768px) { .articles-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .articles-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </main>
  );
}
