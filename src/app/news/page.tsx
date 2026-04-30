import type { Metadata } from "next";
import { getNews } from "@/lib/microcms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "お知らせ | Yuka-Han & Co.",
  description: "株式会社ユカハンからのお知らせ・ニュース一覧。",
};

const categoryColors: Record<string, string> = {
  受賞: "#8B7355",
  サービス: "#2C3E50",
  お知らせ: "#666",
  施設: "#4a7c59",
};

export default async function NewsPage() {
  const { contents: newsItems } = await getNews({ limit: 20 });

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
      <section style={{ padding: "5rem 8% 3rem", background: "var(--color-white)", textAlign: "center" }}>
        <p style={sectionLabel}>NEWS</p>
        <h1 style={sectionTitle}>お知らせ</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)" }}>
          株式会社ユカハンからのお知らせ
        </p>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {newsItems.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-light)", padding: "4rem 0" }}>
              ニュースは準備中です。もうしばらくお待ちください。
            </p>
          ) : (
            newsItems.map((item) => (
              <article
                key={item.id}
                style={{
                  background: "var(--color-white)",
                  padding: "2rem 2.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                  <span style={{ fontFamily: "var(--font-en)", fontSize: "0.85rem", color: "var(--color-accent)", minWidth: "90px" }}>
                    {new Date(item.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                  </span>
                  {item.category && (
                    <span style={{ fontSize: "0.7rem", letterSpacing: "0.05em", color: "var(--color-white)", background: categoryColors[item.category] ?? "#666", padding: "0.2rem 0.7rem", borderRadius: "3px" }}>
                      {item.category}
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem", lineHeight: 1.6 }}>
                  {item.title}
                </h2>
                {item.body && (
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.9 }}>
                    {item.body}
                  </p>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
