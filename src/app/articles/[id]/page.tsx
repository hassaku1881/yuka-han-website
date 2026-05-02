import Link from "next/link";
import type { Metadata } from "next";
import { getArticle, getArticles } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const article = await getArticle(id);
    const canonicalUrl = `${BASE_URL}/articles/${id}`;
    const ogImage = article.thumbnail?.url ?? `${BASE_URL}/og-default.jpg`;
    return {
      title: article.title,
      description: article.excerpt,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        type: "article",
        url: canonicalUrl,
        title: article.title,
        description: article.excerpt,
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.excerpt,
        images: [ogImage],
      },
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    url: `${BASE_URL}/articles/${article.id}`,
    image: article.thumbnail?.url ?? `${BASE_URL}/og-default.jpg`,
    author: {
      "@type": "Organization",
      name: "株式会社ユカハン",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社ユカハン",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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

          {/* Contact CTA */}
          <div style={{
            marginTop: "4rem",
            padding: "3rem",
            background: "var(--color-bg)",
            borderRadius: "4px",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-en)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "var(--color-accent)",
              marginBottom: "0.8rem",
            }}>
              GET IN TOUCH
            </p>
            <h3 style={{
              fontSize: "1.3rem",
              fontWeight: 400,
              color: "var(--color-primary)",
              marginBottom: "1rem",
              lineHeight: 1.6,
            }}>
              運営のご相談、お気軽にどうぞ。
            </h3>
            <p style={{
              fontSize: "0.9rem",
              color: "var(--color-text-light)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}>
              GOP改善・収益最適化・運営受託など、<br />
              宿泊施設に関するご相談を無料で承っています。
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.8rem",
                background: "var(--color-primary)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.88rem",
                letterSpacing: "0.1em",
                transition: "opacity 0.3s",
              }}
            >
              お問い合わせはこちら
            </Link>
          </div>

          {/* Back */}
          <div style={{ marginTop: "2.5rem" }}>
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
        /* ── ベース ── */
        .article-body {
          font-size: 1rem;
          line-height: 2;
          color: var(--color-text);
        }

        /* ── 見出し h2 ── */
        .article-body h2 {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--color-primary);
          margin: 3.5rem 0 0;
          padding: 0.6rem 1rem 0.6rem 1.2rem;
          border-left: 4px solid var(--color-accent);
          background: rgba(139,115,85,0.06);
          border-radius: 0 4px 4px 0;
          line-height: 1.5;
        }
        /* G. h2直後の最初の段落をリード文として強調 */
        .article-body h2 + p {
          margin-top: 1.2rem;
          font-size: 1.02rem;
          color: var(--color-primary);
          font-weight: 400;
        }

        /* ── 見出し h3 ── E. カード風 */
        .article-body h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-primary);
          margin: 2.5rem 0 0.8rem;
          padding: 0.65rem 1rem;
          border-left: 3px solid var(--color-primary);
          background: rgba(20,30,48,0.04);
          border-radius: 0 4px 4px 0;
        }

        /* ── 本文 ── */
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
        .article-body li { margin-bottom: 0.6rem; line-height: 1.9; }
        .article-body a { color: var(--color-accent); }

        /* ── D. 引用ブロック ── */
        .article-body blockquote {
          position: relative;
          background: var(--color-bg);
          border-left: none;
          border-radius: 4px;
          padding: 1.8rem 2rem 1.8rem 3.5rem;
          margin: 2rem 0;
          font-style: normal;
          color: var(--color-primary);
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.9;
        }
        .article-body blockquote::before {
          content: '"';
          position: absolute;
          left: 0.8rem;
          top: 0.6rem;
          font-size: 3.5rem;
          line-height: 1;
          color: var(--color-accent);
          font-family: Georgia, serif;
          opacity: 0.7;
        }
        .article-body blockquote p { margin-bottom: 0; }

        /* ── F. 数式ボックス ── */
        .article-body pre {
          background: var(--color-primary);
          color: #fff;
          padding: 1.5rem 2rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 2;
          text-align: center;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 2rem 0;
        }

        /* ── B. マーカーハイライト ── */
        .article-body mark {
          background: linear-gradient(transparent 55%, rgba(255, 210, 60, 0.55) 55%);
          padding: 0 2px;
          color: inherit;
          font-weight: inherit;
        }

        /* ── A. POINTボックス ── */
        .article-body .point-box {
          background: rgba(139,115,85,0.07);
          border-left: 4px solid var(--color-accent);
          border-radius: 0 6px 6px 0;
          padding: 1.4rem 1.8rem;
          margin: 2rem 0;
        }
        .article-body .point-box::before {
          content: "POINT";
          display: block;
          font-family: var(--font-en);
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          color: var(--color-accent);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .article-body .point-box p { margin-bottom: 0; }

        /* ── C. 注意ボックス ── */
        .article-body .warning-box {
          background: rgba(240,160,40,0.08);
          border-left: 4px solid #e09020;
          border-radius: 0 6px 6px 0;
          padding: 1.4rem 1.8rem;
          margin: 2rem 0;
        }
        .article-body .warning-box::before {
          content: "⚠ 注意";
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: #c07010;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .article-body .warning-box p { margin-bottom: 0; }

        /* ── テーブル ── */
        .article-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.92rem;
        }
        .article-body th {
          background: var(--color-primary);
          color: #fff;
          padding: 0.7rem 1rem;
          text-align: left;
          font-weight: 500;
        }
        .article-body td {
          padding: 0.7rem 1rem;
          border-bottom: 1px solid #eee;
        }
        .article-body tr:last-child td {
          border-bottom: none;
          font-weight: 500;
          background: rgba(139,115,85,0.07);
        }

        /* ── 区切り線 ── */
        .article-body hr {
          border: none;
          border-top: 1px solid #e8e4de;
          margin: 3.5rem 0 2.5rem;
        }

        /* ── モバイル調整 ── */
        @media (max-width: 768px) {
          .article-body h2 { font-size: 1.2rem; }
          .article-body blockquote { padding: 1.4rem 1.4rem 1.4rem 3rem; font-size: 0.97rem; }
          .article-body pre { text-align: left; font-size: 0.88rem; }
        }
      `}</style>
    </main>
  );
}
