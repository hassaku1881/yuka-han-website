import Link from "next/link";
import type { Metadata } from "next";
import { getArticle, getArticles } from "@/lib/microcms";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const article = await getArticle(id);
    return {
      title: `${article.title} | Yuka-Han`,
      description: article.excerpt,
    };
  } catch {
    return { title: "記事 | Yuka-Han" };
  }
}

export async function generateStaticParams() {
  const { contents } = await getArticles({ limit: 100 });
  return contents.map((article) => ({ id: article.id }));
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;
  let article;
  try {
    article = await getArticle(id);
  } catch {
    notFound();
  }

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      {article.thumbnail && (
        <div
          style={{
            height: "50vh",
            backgroundImage: `url('${article.thumbnail.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <article style={{ background: "var(--color-white)", padding: "4rem 8%" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            {article.category && (
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--color-accent)", background: "rgba(139,115,85,0.1)", padding: "0.3rem 0.8rem", borderRadius: "3px" }}>
                {article.category}
              </span>
            )}
            <span style={{ fontFamily: "var(--font-en)", fontSize: "0.85rem", color: "var(--color-text-light)" }}>
              {new Date(article.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.5, marginBottom: "3rem" }}>
            {article.title}
          </h1>

          {/* Body */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          {/* Back */}
          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #eee" }}>
            <Link
              href="/articles"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-accent)",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              ← コラム一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        .article-body {
          font-size: 1rem;
          line-height: 2;
          color: var(--color-text);
        }
        .article-body h2 {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--color-primary);
          margin: 2.5rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-accent);
        }
        .article-body h3 {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-primary);
          margin: 2rem 0 0.8rem;
        }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 2rem 0;
        }
        .article-body ul, .article-body ol {
          margin: 1rem 0 1.5rem 1.5rem;
        }
        .article-body li { margin-bottom: 0.5rem; }
        .article-body a { color: var(--color-accent); }
        .article-body blockquote {
          border-left: 3px solid var(--color-accent);
          padding-left: 1.5rem;
          color: var(--color-text-light);
          font-style: italic;
          margin: 2rem 0;
        }
      `}</style>
    </main>
  );
}
