import Link from "next/link";
import type { Metadata } from "next";
import { getNews, getNewsItem } from "@/lib/microcms";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const { contents } = await getNews({ limit: 100 });
  return contents.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const item = await getNewsItem(id);
    return {
      title: `${item.title} | お知らせ | Yuka-Han & Co.`,
    };
  } catch {
    return { title: "お知らせ | Yuka-Han & Co." };
  }
}

const categoryColors: Record<string, string> = {
  受賞: "#8B7355",
  サービス: "#2C3E50",
  お知らせ: "#666",
  施設: "#4a7c59",
};

export default async function NewsItemPage({ params }: Props) {
  const { id } = await params;

  let item;
  try {
    item = await getNewsItem(id);
  } catch {
    notFound();
  }

  const sectionLabel: React.CSSProperties = {
    fontFamily: "var(--font-en)",
    fontSize: "0.75rem",
    letterSpacing: "0.3em",
    color: "var(--color-accent)",
    marginBottom: "0.5rem",
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* ページヘッダー */}
      <section style={{
        padding: "4rem 8% 2rem",
        background: "var(--color-white)",
        borderBottom: "1px solid #eee",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={sectionLabel}>NEWS</p>
          <Link href="/news" style={{
            fontSize: "0.82rem",
            color: "var(--color-accent)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            marginBottom: "2rem",
            opacity: 0.8,
            transition: "opacity 0.2s",
          }}>
            ← お知らせ一覧
          </Link>
        </div>
      </section>

      {/* 記事本文 */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <article style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "var(--color-white)",
          borderRadius: "8px",
          padding: "3rem 3.5rem",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        }}>
          {/* メタ情報 */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{
              fontFamily: "var(--font-en)",
              fontSize: "0.85rem",
              color: "var(--color-accent)",
            }}>
              {new Date(item.publishedAt).toLocaleDateString("ja-JP", {
                year: "numeric", month: "long", day: "numeric"
              })}
            </span>
            {item.category && (
              <span style={{
                fontSize: "0.72rem",
                letterSpacing: "0.05em",
                color: "var(--color-white)",
                background: categoryColors[item.category] ?? "#666",
                padding: "0.25rem 0.75rem",
                borderRadius: "3px",
              }}>
                {item.category}
              </span>
            )}
          </div>

          {/* タイトル */}
          <h1 style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--color-primary)",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid #eee",
          }}>
            {item.title}
          </h1>

          {/* 本文 */}
          {item.body && (
            <>
              <style>{`
                .news-body p { margin: 0 0 1.4em; font-size: 0.95rem; color: var(--color-text); line-height: 2.2; }
                .news-body ul, .news-body ol { margin: 0 0 1.4em 1.5em; }
                .news-body li { font-size: 0.95rem; color: var(--color-text); line-height: 2.0; margin-bottom: 0.3em; }
                .news-body a { color: var(--color-accent); text-decoration: underline; }
                .news-body strong { font-weight: 600; }
                .news-body .news-release-table { width: 100%; border-collapse: collapse; margin: 1.2em 0 1.8em; font-size: 0.9rem; }
                .news-body .news-release-table th, .news-body .news-release-table td { padding: 0.6em 1em; border: 1px solid #e0dbd2; text-align: left; line-height: 1.8; }
                .news-body .news-release-table th { background: #f5f3ef; font-weight: 500; width: 40%; }
              `}</style>
              <div
                className="news-body"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </>
          )}
        </article>

        {/* ナビゲーション */}
        <div style={{ maxWidth: "800px", margin: "2.5rem auto 0", textAlign: "center" }}>
          <Link href="/news" style={{
            display: "inline-block",
            padding: "0.9rem 2.5rem",
            border: "1px solid var(--color-primary)",
            color: "var(--color-primary)",
            textDecoration: "none",
            fontSize: "0.88rem",
            letterSpacing: "0.05em",
            borderRadius: "4px",
            transition: "background 0.3s, color 0.3s",
          }}>
            お知らせ一覧に戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
