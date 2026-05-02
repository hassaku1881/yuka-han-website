import Link from "next/link";
import type { Metadata } from "next";
import { getNews } from "@/lib/microcms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "お知らせ | Yuka-Han & Co.",
  description: "株式会社ユカハンからのお知らせ・ニュース一覧。",
};

const PER_PAGE = 10;

const categoryColors: Record<string, string> = {
  受賞: "#8B7355",
  サービス: "#2C3E50",
  お知らせ: "#666",
  施設: "#4a7c59",
};

type Props = { searchParams: Promise<{ page?: string }> };

export default async function NewsPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam ?? 1));
  const offset = (page - 1) * PER_PAGE;

  const { contents: newsItems, totalCount } = await getNews({
    limit: PER_PAGE,
    offset,
    orders: "-publishedAt",
  });

  const totalPages = Math.ceil(totalCount / PER_PAGE);

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
      {/* ページヘッダー */}
      <section style={{ padding: "5rem 8% 3rem", background: "var(--color-white)", textAlign: "center" }}>
        <p style={sectionLabel}>NEWS</p>
        <h1 style={sectionTitle}>お知らせ</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)" }}>
          株式会社ユカハンからのお知らせ
        </p>
      </section>

      {/* 一覧 */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {newsItems.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-light)", padding: "4rem 0" }}>
              お知らせはありません。
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1.5rem",
                    padding: "1.4rem 0",
                    borderBottom: "1px solid #e8e8e8",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "opacity 0.2s",
                  }}
                  className="news-list-item"
                >
                  <span style={{
                    fontFamily: "var(--font-en)",
                    fontSize: "0.82rem",
                    color: "var(--color-accent)",
                    whiteSpace: "nowrap",
                    minWidth: "90px",
                  }}>
                    {new Date(item.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric", month: "2-digit", day: "2-digit"
                    }).replace(/\//g, ".")}
                  </span>
                  {item.category && (
                    <span style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.04em",
                      color: "var(--color-white)",
                      background: categoryColors[item.category] ?? "#666",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                    }}>
                      {item.category}
                    </span>
                  )}
                  <span style={{
                    fontSize: "0.95rem",
                    color: "var(--color-text)",
                    lineHeight: 1.6,
                  }}>
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* ページネーション */}
          {totalPages > 1 && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "3rem",
            }}>
              {/* 前へ */}
              {page > 1 && (
                <Link href={`/news?page=${page - 1}`} className="page-btn">
                  ‹
                </Link>
              )}

              {/* ページ番号 */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/news?page=${p}`}
                  className={`page-btn ${p === page ? "page-btn-active" : ""}`}
                >
                  {p}
                </Link>
              ))}

              {/* 次へ */}
              {page < totalPages && (
                <Link href={`/news?page=${page + 1}`} className="page-btn">
                  ›
                </Link>
              )}
            </div>
          )}

          {/* 総件数 */}
          {totalCount > 0 && (
            <p style={{
              textAlign: "center",
              fontSize: "0.8rem",
              color: "var(--color-text-light)",
              marginTop: "1.5rem",
            }}>
              全{totalCount}件中 {offset + 1}〜{Math.min(offset + PER_PAGE, totalCount)}件を表示
            </p>
          )}
        </div>
      </section>

      <style>{`
        .news-list-item:hover { opacity: 0.65; }
        .page-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.88rem;
          color: var(--color-text);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .page-btn:hover {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }
        .page-btn-active {
          background: var(--color-primary);
          color: #fff !important;
          border-color: var(--color-primary);
          pointer-events: none;
        }
      `}</style>
    </main>
  );
}
