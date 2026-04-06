import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コラム | YUKAHAN",
  description: "Japandiインテリア、東京下町エリアガイド、民泊運営のノウハウなど、YUKAHANが発信するコラム。",
};

const articles = [
  {
    category: "INTERIOR",
    date: "2025.01.20",
    title: "Japandiスタイルとは？Wutoのインテリアへのこだわり",
    excerpt: "日本の美意識と北欧デザインを融合させたJapandiスタイル。Wutoで採用しているインテリアブランドと選定理由をご紹介します。",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
  },
  {
    category: "AREA GUIDE",
    date: "2025.01.15",
    title: "お花茶屋の魅力｜下町の暮らしを体験する",
    excerpt: "東京の下町・お花茶屋エリアの魅力をご紹介。地元民に愛される商店街やおすすめスポットをお伝えします。",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600",
  },
  {
    category: "BUSINESS",
    date: "2025.01.10",
    title: "民泊運営で大切にしている3つのこと",
    excerpt: "私たちYuka & Hanが運営経験から学んだ、ゲストに喜ばれる民泊運営のポイントを共有します。",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
  },
  {
    category: "TRAVEL",
    date: "2024.12.25",
    title: "東京の下町エリアで「暮らすように泊まる」旅のすすめ",
    excerpt: "観光地だけを巡るのではなく、その土地の日常に溶け込む旅。亀戸・曳舟・お花茶屋エリアの歩き方をご提案します。",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600",
  },
  {
    category: "INTERIOR",
    date: "2024.12.10",
    title: "飛騨産業の家具がWutoに選ばれた理由",
    excerpt: "100年以上の歴史を持つ飛騨産業の家具。その品質とデザインがJapandiスタイルと完璧にマッチする理由を解説します。",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
  },
  {
    category: "BUSINESS",
    date: "2024.11.20",
    title: "Airbnbで高評価を得るための清掃のポイント",
    excerpt: "ゲストが最も気にするのは清潔感。私たちが実践している清掃手順と、5つ星レビューを獲得するための工夫をご紹介します。",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
  },
];

const categories = ["ALL", "INTERIOR", "AREA GUIDE", "BUSINESS", "TRAVEL"];

export default function ArticlesPage() {
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
      <section
        style={{
          padding: "5rem 8% 3rem",
          background: "var(--color-white)",
          textAlign: "center",
        }}
      >
        <p style={sectionLabel}>ARTICLES</p>
        <h1 style={sectionTitle}>コラム</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)", maxWidth: "600px", margin: "0 auto" }}>
          Japandiインテリア、東京下町エリアガイド、民泊運営のノウハウなど、YUKAHANが発信するコラム。
        </p>

        {/* Category Filter */}
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: "0.4rem 1.2rem",
                border: cat === "ALL" ? "1px solid var(--color-primary)" : "1px solid #ddd",
                borderRadius: "20px",
                background: cat === "ALL" ? "var(--color-primary)" : "transparent",
                color: cat === "ALL" ? "var(--color-white)" : "var(--color-text-light)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
          className="articles-grid"
        >
          {articles.map((article) => (
            <Link
              key={article.title}
              href="#"
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
            >
              <div
                style={{
                  height: "200px",
                  backgroundImage: `url('${article.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "var(--color-accent)",
                      background: "rgba(139,115,85,0.1)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "3px",
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", color: "var(--color-text-light)" }}>
                    {article.date}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--color-primary)",
                    lineHeight: 1.6,
                    marginBottom: "0.8rem",
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-light)",
                    lineHeight: 1.7,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .articles-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </main>
  );
}
