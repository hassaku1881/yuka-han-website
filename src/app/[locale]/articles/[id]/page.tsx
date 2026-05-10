import Link from "next/link";
import type { Metadata } from "next";
import { getArticle } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";
import ArticleToc, { type TocHeading } from "@/components/ArticleToc";
import ArticleShareButtons from "@/components/ArticleShareButtons";
import ArticleProgress from "@/components/ArticleProgress";
import {
  SUPPORTED_LOCALES,
  TRANSLATED_ARTICLE_BASE_IDS,
  LOCALE_SUFFIX,
  type SupportedLocale,
} from "@/lib/i18n";

export const revalidate = 60;

type Props = { params: Promise<{ locale: string; id: string }> };

function extractHeadings(html: string): { processedHtml: string; headings: TocHeading[] } {
  const headings: TocHeading[] = [];
  let idx = 0;
  const processedHtml = html.replace(
    /<(h[23])([^>]*)>([\s\S]*?)<\/\1>/g,
    (_match, tag, attrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      const level = parseInt(tag[1]) as 2 | 3;
      const id = `toc-${idx++}`;
      headings.push({ id, text, level });
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    }
  );
  return { processedHtml, headings };
}

export async function generateStaticParams() {
  return TRANSLATED_ARTICLE_BASE_IDS.flatMap((baseId) =>
    SUPPORTED_LOCALES.map((locale) => ({ locale, id: baseId }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const suffix = LOCALE_SUFFIX[locale as SupportedLocale];
  try {
    const article = await getArticle(`${id}${suffix}`);
    const canonicalUrl = `${BASE_URL}/${locale}/articles/${id}`;
    const ogImage = article.thumbnail?.url ?? `${BASE_URL}/og-default.jpg`;
    return {
      title: article.title,
      description: article.excerpt,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          ja: `${BASE_URL}/articles/${id}`,
          en: `${BASE_URL}/en/articles/${id}`,
          "x-default": `${BASE_URL}/articles/${id}`,
        },
      },
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
    return { title: "Article | Yuka-Han" };
  }
}

const CTA: Record<SupportedLocale, { label: string; heading: string; body: string; btn: string }> = {
  en: {
    label: "GET IN TOUCH",
    heading: "Let's talk about your property.",
    body: "Free consultations available on vacation rental operations, management, and consulting.",
    btn: "Contact us",
  },
  "zh-TW": {
    label: "聯絡我們",
    heading: "歡迎就您的設施進行諮詢。",
    body: "民宿運營代行・顧問服務等宿泊施設相關事宜，免費受理。",
    btn: "前往諮詢",
  },
};

export default async function TranslatedArticlePage({ params }: Props) {
  const { locale, id } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();

  const suffix = LOCALE_SUFFIX[locale as SupportedLocale];
  const translatedId = `${id}${suffix}`;

  let article;
  try {
    article = await getArticle(translatedId);
  } catch {
    notFound();
  }

  const { processedHtml, headings } = extractHeadings(article.body);
  const shareUrl = `${BASE_URL}/${locale}/articles/${id}`;
  const cta = CTA[locale as SupportedLocale];
  const backLabel = locale === "en" ? "← Back to articles" : "← 返回文章列表";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    url: shareUrl,
    image: article.thumbnail?.url ?? `${BASE_URL}/og-default.jpg`,
    inLanguage: locale === "en" ? "en" : "zh-TW",
    author: {
      "@type": "Organization",
      name: "Yuka-Han & Co.",
      url: BASE_URL,
    },
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <ArticleProgress />

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
        <div className="article-layout">
          {/* ── Main content ── */}
          <div>
            {/* Meta */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              {article.category && (
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-accent)",
                    background: "rgba(139,115,85,0.1)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "3px",
                  }}
                >
                  {article.category}
                </span>
              )}
              <span
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.85rem",
                  color: "var(--color-text-light)",
                }}
              >
                {new Date(article.publishedAt).toLocaleDateString(
                  locale === "en" ? "en-US" : "zh-TW",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 500,
                color: "var(--color-primary)",
                lineHeight: 1.5,
                marginBottom: "3rem",
              }}
            >
              {article.title}
            </h1>

            {/* Body */}
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            <ArticleShareButtons url={shareUrl} title={article.title} />

            {/* CTA */}
            <div
              style={{
                marginTop: "2rem",
                padding: "3rem",
                background: "var(--color-bg)",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-accent)",
                  marginBottom: "0.8rem",
                }}
              >
                {cta.label}
              </p>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--color-primary)",
                  marginBottom: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {cta.heading}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                {cta.body}
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
                {cta.btn}
              </Link>
            </div>

            {/* Back */}
            <div style={{ marginTop: "2.5rem" }}>
              <Link
                href={`/${locale}/articles`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {backLabel}
              </Link>
            </div>
          </div>

          {/* ── TOC sidebar ── */}
          <aside className="article-toc-aside">
            <div
              style={{
                position: "sticky",
                top: "96px",
                padding: "1.4rem",
                background: "var(--color-bg)",
                borderRadius: "6px",
                borderLeft: "3px solid rgba(139,115,85,0.2)",
              }}
            >
              <ArticleToc headings={headings} />
            </div>
          </aside>
        </div>
      </article>

      <style>{`
        .article-layout {
          display: grid;
          grid-template-columns: 1fr 248px;
          gap: 4rem;
          max-width: 1120px;
          margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr; max-width: 800px; }
          .article-toc-aside { display: none; }
        }
        .article-body { font-size: 1rem; line-height: 2; color: var(--color-text); }
        .article-body h2 {
          font-size: 1.4rem; font-weight: 500; color: var(--color-primary);
          margin: 3.5rem 0 0; padding: 0.6rem 1rem 0.6rem 1.2rem;
          border-left: 4px solid var(--color-accent);
          background: rgba(139,115,85,0.06);
          border-radius: 0 4px 4px 0; line-height: 1.5;
        }
        .article-body h2 + p { margin-top: 1.2rem; font-size: 1.02rem; color: var(--color-primary); font-weight: 400; }
        .article-body h3 {
          font-size: 1.05rem; font-weight: 600; color: var(--color-primary);
          margin: 2.5rem 0 0.8rem; padding: 0.65rem 1rem;
          border-left: 3px solid var(--color-primary);
          background: rgba(20,30,48,0.04); border-radius: 0 4px 4px 0;
        }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body img { max-width: 100%; height: auto; border-radius: 8px; margin: 2rem 0; }
        .article-body ul, .article-body ol { margin: 1rem 0 1.5rem 1.8rem; padding-left: 0; }
        .article-body ul { list-style: disc outside; }
        .article-body ol { list-style: decimal outside; }
        .article-body li { margin-bottom: 0.6rem; line-height: 1.9; padding-left: 0.3rem; }
        .article-body li::marker { color: var(--color-accent); }
        .article-body a { color: var(--color-accent); }
        .article-body blockquote {
          position: relative; background: var(--color-bg); border-radius: 4px;
          padding: 1.8rem 2rem 1.8rem 3.5rem; margin: 2rem 0;
          font-style: normal; color: var(--color-primary);
          font-size: 1.05rem; font-weight: 500; line-height: 1.9;
        }
        .article-body blockquote::before {
          content: '"'; position: absolute; left: 0.8rem; top: 0.6rem;
          font-size: 3.5rem; line-height: 1; color: var(--color-accent);
          font-family: Georgia, serif; opacity: 0.7;
        }
        .article-body blockquote p { margin-bottom: 0; }
        .article-body pre {
          background: var(--color-primary); color: #fff;
          padding: 1.5rem 2rem; border-radius: 6px;
          font-family: inherit; font-size: 0.95rem;
          line-height: 2; text-align: center;
          white-space: pre-wrap; word-break: break-word; margin: 2rem 0;
        }
        .article-body mark {
          background: linear-gradient(transparent 55%, rgba(255,210,60,0.55) 55%);
          padding: 0 2px; color: inherit; font-weight: inherit;
        }
        .article-body .point-box {
          background: rgba(139,115,85,0.07); border-left: 4px solid var(--color-accent);
          border-radius: 0 6px 6px 0; padding: 1.4rem 1.8rem; margin: 2rem 0;
        }
        .article-body .point-box::before {
          content: "POINT"; display: block; font-family: var(--font-en);
          font-size: 0.68rem; letter-spacing: 0.25em; color: var(--color-accent);
          font-weight: 700; margin-bottom: 0.5rem;
        }
        .article-body .point-box p { margin-bottom: 0; }
        .article-body .warning-box {
          background: rgba(240,160,40,0.08); border-left: 4px solid #e09020;
          border-radius: 0 6px 6px 0; padding: 1.4rem 1.8rem; margin: 2rem 0;
        }
        .article-body .warning-box::before {
          content: "⚠ Note"; display: block; font-size: 0.72rem;
          letter-spacing: 0.12em; color: #c07010; font-weight: 700; margin-bottom: 0.5rem;
        }
        .article-body .warning-box p { margin-bottom: 0; }
        .article-body table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.92rem; }
        .article-body th { background: var(--color-primary); color: #fff; padding: 0.7rem 1rem; text-align: left; font-weight: 500; }
        .article-body td { padding: 0.7rem 1rem; border-bottom: 1px solid #eee; }
        .article-body tr:last-child td { border-bottom: none; font-weight: 500; background: rgba(139,115,85,0.07); }
        .article-body hr { border: none; border-top: 1px solid #e8e4de; margin: 3.5rem 0 2.5rem; }
        @media (max-width: 768px) {
          .article-body h2 { font-size: 1.2rem; }
          .article-body blockquote { padding: 1.4rem 1.4rem 1.4rem 3rem; font-size: 0.97rem; }
          .article-body pre { text-align: left; font-size: 0.88rem; }
        }
      `}</style>
    </main>
  );
}
