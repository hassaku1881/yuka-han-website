import Link from "next/link";
import type { Metadata } from "next";
import {
  Home as HomeIcon,
  TrainFront,
  Sparkles,
  Building2,
  Globe,
  Briefcase,
  Star,
  LifeBuoy,
  Camera,
  KeyRound,
} from "lucide-react";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, LOCALE_SUFFIX, type SupportedLocale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";
import { getArticles } from "@/lib/microcms";
import HeroSlider from "@/components/HeroSlider";
import { reviews } from "@/lib/reviews";

export const revalidate = 60;

type Props = { params: Promise<{ locale: string }> };

// ── Static data ──────────────────────────────────────────────────────────────

const PROPERTY_THUMBS = [
  { name: "Wutoお花茶屋 1F", image: "/images/properties/ohanajaya-1f-main.jpg" },
  { name: "Wutoお花茶屋 2F", image: "/images/properties/ohanajaya-2f-main.jpg" },
  { name: "Wuto立石", image: "/images/properties/tateishi-main.jpg" },
  { name: "Wuto堀切", image: "/images/properties/horikiri-main.jpg" },
  { name: "Wuto青砥", image: "/images/properties/aoto-main.jpg" },
];

const HOMEPAGE_REVIEW_INDICES = [0, 1, 8];

const FALLBACK_IMAGES: Record<string, string> = {
  BUSINESS: "/images/articles-business.jpg",
  INTERIOR: "/images/articles-interior.jpg",
  "AREA GUIDE": "/images/articles-area-guide.jpg",
};
const getFallback = (category?: string) =>
  (category && FALLBACK_IMAGES[category]) || "/images/articles-interior.jpg";

// ── Translations ─────────────────────────────────────────────────────────────

const t = {
  en: {
    meta: {
      title: "Yuka-Han & Co. | Tokyo Vacation Rentals & Hospitality",
      description:
        "Yuka-Han & Co. — Japandi-style vacation rentals in Tokyo (Wuto) and vacation rental management services. Based in Katsushika, Tokyo.",
    },
    philosophyLabel: "OUR PHILOSOPHY",
    philosophyPoem: (
      <>
        <p className="poem-stanza poem-large">
          Our journeys have always led us
          <br />
          off the tourist map.
        </p>
        <p className="poem-stanza poem-mid">
          The restaurant not in any guidebook,
          <br />
          the supermarket only locals use,
          <br />
          ingredients whose names we can&apos;t read
          <br />
          bought to cook back at our stay.
        </p>
        <p className="poem-stanza poem-close">
          In that ordinary everyday life,
          <br />
          we want to find the essence of travel.
        </p>
      </>
    ),
    philosophyBody: [
      "We travel by staying in Airbnbs, living like locals, exchanging natural greetings with the neighbors around us.",
      "When you live in a neighborhood, blend in, and talk with people — the real country, the real town, the real person behind the tourist facade begins to appear.",
      "We don’t create ‘residences used as accommodations.’ We create value that is only possible because it’s Airbnb.",
    ],
    philosophyCta: "About Us",
    businessLabel: "BUSINESS",
    businessHeading: "What We Do",
    mainCards: [
      {
        icon: <HomeIcon size={36} strokeWidth={1.5} />,
        title: "Wuto",
        body: "Japandi-style accommodation brand ‘Wuto’ — planned, developed, and operated directly. 5 properties across the Katsushika area.",
        linkText: "Learn more →",
        href: "/en/wuto",
      },
      {
        icon: <Building2 size={36} strokeWidth={1.5} />,
        title: "Vacation Rental Management",
        body: "Full-service vacation rental management. From reservation management and guest communications to cleaning coordination.",
        linkText: "Learn more →",
        href: "/en/operations",
      },
      {
        icon: <LifeBuoy size={36} strokeWidth={1.5} />,
        title: "Hospitality Operations Support",
        body: "Consulting, revenue improvement, and operations support for all types of accommodation properties. We handle a wide range of challenges.",
        linkText: "Feel free to reach out",
        href: null,
      },
    ],
    otherBusinessesLabel: "OTHER BUSINESSES",
    subCards: [
      {
        icon: <Camera size={22} strokeWidth={1.5} />,
        title: "Photography Studio",
        text: "No studio set-up, just the texture of real life. Available for film, drama, web commercials, product shoots, and other commercial creative work.",
      },
      {
        icon: <Globe size={22} strokeWidth={1.5} />,
        title: "Marketing",
        text: "Inbound marketing strategy planning and execution. Project production and consulting for inbound-focused facilities.",
      },
      {
        icon: <Briefcase size={22} strokeWidth={1.5} />,
        title: "Consulting",
        text: "Support across a wide range of management challenges: business strategy, HR, operations improvement, and new business development.",
      },
      {
        icon: <KeyRound size={22} strokeWidth={1.5} />,
        title: "Real Estate",
        text: "Property leasing and management.",
      },
    ],
    wutoLabel: "OUR BRAND",
    wutoTagline: "Live like a local.",
    wutoBody:
      "Created by a couple who traveled the world — always seeking a place they truly wanted to stay. A calm Japanese everyday life as the foundation, where the familiar and the journey gently blend.",
    wutoNameExplanation:
      "Wuto = 烏兔 (uto). The sun (crow) and moon (rabbit) — a soft boundary between passing moments.",
    wutoFeatures: [
      {
        icon: <HomeIcon size={40} strokeWidth={1.5} color="#d4a574" />,
        title: "Japandi Interior",
        text: "Centered on solid wood, quality materials with genuine warmth. Carefully selected furniture from beloved brands — Re:CENO, MUJI, Hida Sangyo.",
      },
      {
        icon: <Sparkles size={40} strokeWidth={1.5} color="#d4a574" />,
        title: "Real Comfort",
        text: "Plush down duvets, luxurious linens, and amenities curated from travels around the world. Real comfort at the heart of every stay.",
      },
      {
        icon: <TrainFront size={40} strokeWidth={1.5} color="#d4a574" />,
        title: "Local Experience",
        text: "The everyday life of Tokyo’s shitamachi, known only to those who live here. Experience the rhythm of this neighborhood that no tourist spot can offer.",
      },
    ],
    wutoCta: "Explore Wuto",
    reviewsLabel: "VOICES FROM AROUND THE WORLD",
    reviewsHeading: "From Guests Around the World",
    reviewsCta: "Read all reviews",
    articlesLabel: "ARTICLES",
    articlesHeading: "Articles",
    articlesCta: "View all articles",
    getReviewText: (r: (typeof reviews)[number]) => r.original ?? r.ja,
  },
  "zh-TW": {
    meta: {
      title: "株式会社ユカハン | 東京民宿・住宿設施",
      description:
        "Yuka-Han & Co.——東京葛飾區的Japandi風格住宿品牌Wuto及民宿代營運服務。",
    },
    philosophyLabel: "OUR PHILOSOPHY",
    philosophyPoem: (
      <>
        <p className="poem-stanza poem-large">
          我們的旅行，
          <br />
          從不在觀光地圖上。
        </p>
        <p className="poem-stanza poem-mid">
          那家不在任何旅遊書上的餐廳，
          <br />
          那間只有當地人才去的超市，
          <br />
          買下那些連名字都看不懂的食材，
          <br />
          帶回住處的夜晚。
        </p>
        <p className="poem-stanza poem-close">
          在那些平凡的日常之中，
          <br />
          我們想找到旅行的本質。
        </p>
      </>
    ),
    philosophyBody: [
      "我們住在Airbnb，像當地人一樣生活，自然而然地與周圍鄰居打招呼。",
      "當你真正生活在一個地方、融入其中、與人交流，才能看見觀光所看不見的——那個國家、那個城市、那個人的真實面貌。",
      "我們不創造「使用住宅的住宿設施」，而是創造只有Airbnb才能帶來的獨特價值。",
    ],
    philosophyCta: "關於我們",
    businessLabel: "BUSINESS",
    businessHeading: "業務內容",
    mainCards: [
      {
        icon: <HomeIcon size={36} strokeWidth={1.5} />,
        title: "Wuto事業",
        body: "Japandi風格住宿品牌「Wuto」的企劃・開發・直接運營。以葛飾區為中心共有5處設施。",
        linkText: "了解詳情 →",
        href: "/zh-TW/wuto",
      },
      {
        icon: <Building2 size={36} strokeWidth={1.5} />,
        title: "民宿代營運事業",
        body: "民宿・度假租賃的代營運服務。預約管理・房客應對・清潔安排，一站式全面支援。",
        linkText: "了解詳情 →",
        href: "/zh-TW/operations",
      },
      {
        icon: <LifeBuoy size={36} strokeWidth={1.5} />,
        title: "住宿設施運營支援事業",
        body: "不限民宿，提供各類住宿設施的諮詢・收益改善・運營支援。各類問題皆可廣泛支援。",
        linkText: "歡迎隨時諮詢",
        href: null,
      },
    ],
    otherBusinessesLabel: "OTHER BUSINESSES",
    subCards: [
      {
        icon: <Camera size={22} strokeWidth={1.5} />,
        title: "攝影工作室事業",
        text: "無人工佈景感，呈現真實生活質感。提供電影・電視劇・網路廣告・商品攝影等商業創意拍攝場地。",
      },
      {
        icon: <Globe size={22} strokeWidth={1.5} />,
        title: "行銷事業",
        text: "入境旅遊行銷策略的規劃與執行。針對入境旅遊設施的企劃與製作。",
      },
      {
        icon: <Briefcase size={22} strokeWidth={1.5} />,
        title: "顧問事業",
        text: "涵蓋經營・人事・業務改善・新事業推進等各類經營課題的全方位支援。",
      },
      {
        icon: <KeyRound size={22} strokeWidth={1.5} />,
        title: "不動產租賃事業",
        text: "不動產的租賃・管理業務。",
      },
    ],
    wutoLabel: "OUR BRAND",
    wutoTagline: "像住家一樣，住宿。",
    wutoBody:
      "由走遍世界的夫妻打造——他們一直在追尋真正想要入住的地方。以沉靜的日本日常為核心，讓熟悉感與旅行感輕柔地融合。",
    wutoNameExplanation:
      "Wuto = 烏兎（uto）。太陽（烏）與月亮（兎）——時光流逝中的柔和界限。",
    wutoFeatures: [
      {
        icon: <HomeIcon size={40} strokeWidth={1.5} color="#d4a574" />,
        title: "Japandi Interior",
        text: "以原木素材為中心，兼具品質與溫暖的空間。從Re:CENO・無印良品・飛騨産業等心儀品牌中嚴選。",
      },
      {
        icon: <Sparkles size={40} strokeWidth={1.5} color="#d4a574" />,
        title: "真正的舒適",
        text: "豐厚羽絨被、觸感絕佳的床單，以及從旅途中精心挑選的備品。將真正的舒適置於每次住宿的核心。",
      },
      {
        icon: <TrainFront size={40} strokeWidth={1.5} color="#d4a574" />,
        title: "在地體驗",
        text: "只有真正居住在此才能知道的東京下町日常。體驗任何觀光景點都無法感受到的這個城市的節奏。",
      },
    ],
    wutoCta: "了解Wuto詳情",
    reviewsLabel: "VOICES FROM AROUND THE WORLD",
    reviewsHeading: "來自世界各地房客的聲音",
    reviewsCta: "查看所有評價",
    articlesLabel: "ARTICLES",
    articlesHeading: "文章",
    articlesCta: "查看所有文章",
    getReviewText: (r: (typeof reviews)[number]) => r.ja,
  },
} as const;

// ── Shared inline styles ──────────────────────────────────────────────────────

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

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) return {};
  const meta = t[locale as SupportedLocale].meta;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ja: BASE_URL,
        en: `${BASE_URL}/en`,
        "zh-TW": `${BASE_URL}/zh-TW`,
        "x-default": BASE_URL,
      },
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function LocaleTopPage({ params }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();

  const l = locale as SupportedLocale;
  const tr = t[l];

  const suffix = LOCALE_SUFFIX[l];
  const { contents: articles } = await getArticles({
    limit: 3,
    filters: `id[contains]${suffix}`,
  });

  return (
    <main style={{ paddingTop: 0 }}>
      {/* Hero Slider */}
      <HeroSlider locale={l} />

      {/* Philosophy */}
      <section id="about" className="philosophy-section">
        <div className="philosophy-inner">
          <p style={{ ...sectionLabel, textAlign: "center" }}>{tr.philosophyLabel}</p>
          <div className="philosophy-layout">
            {/* Poem */}
            <div className="philosophy-poem">{tr.philosophyPoem}</div>

            {/* Body */}
            <div className="philosophy-body">
              {tr.philosophyBody.map((para, i) => (
                <p key={i} className="philosophy-body-p">
                  {para}
                </p>
              ))}
              <div style={{ textAlign: "center" }} className="philosophy-cta">
                <Link href={`/${locale}/about`} className="btn-outline">
                  {tr.philosophyCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section
        id="business"
        style={{ background: "var(--color-white)", padding: "6rem 8%" }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={sectionLabel}>{tr.businessLabel}</p>
          <h2 style={sectionTitle}>{tr.businessHeading}</h2>
        </div>

        {/* Main 3 cards */}
        <div className="business-grid-3">
          {tr.mainCards.map((card) =>
            card.href ? (
              <Link key={card.title} href={card.href} className="business-card business-card-link">
                <div style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--color-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-light)",
                    lineHeight: 1.8,
                  }}
                >
                  {card.body}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "1.5rem",
                    fontSize: "0.8rem",
                    color: "var(--color-accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {card.linkText}
                </span>
              </Link>
            ) : (
              <div key={card.title} className="business-card">
                <div style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--color-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-light)",
                    lineHeight: 1.8,
                  }}
                >
                  {card.body}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "1.5rem",
                    fontSize: "0.8rem",
                    color: "var(--color-text-light)",
                    opacity: 0.6,
                  }}
                >
                  {card.linkText}
                </span>
              </div>
            )
          )}
        </div>

        {/* Sub-businesses */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid #ece9e3",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-en)",
              fontSize: "0.63rem",
              letterSpacing: "0.22em",
              color: "var(--color-text-light)",
              marginBottom: "2rem",
            }}
          >
            {tr.otherBusinessesLabel}
          </p>
          <div className="sub-business-grid">
            {tr.subCards.map((biz) => (
              <div key={biz.title} className="sub-business-card">
                <div style={{ color: "var(--color-accent)", marginBottom: "0.9rem" }}>
                  {biz.icon}
                </div>
                <h4
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: "var(--color-primary)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {biz.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-light)",
                    lineHeight: 1.75,
                  }}
                >
                  {biz.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wuto Brand */}
      <section id="wuto" style={{ background: "var(--color-primary)", padding: 0 }}>
        <div
          style={{
            minHeight: "560px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background:
              "linear-gradient(rgba(20,30,48,0.55), rgba(20,30,48,0.55)), url('/images/hero-wuto.jpg') center/cover",
            padding: "5rem 8%",
          }}
        >
          <div style={{ maxWidth: "760px", color: "var(--color-white)" }}>
            <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>{tr.wutoLabel}</p>
            <h2
              style={{
                fontFamily: "var(--font-en)",
                fontSize: "4rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                marginBottom: "0.5rem",
                color: "var(--color-white)",
              }}
            >
              Wuto
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                marginBottom: "2rem",
                opacity: 0.9,
              }}
            >
              {tr.wutoTagline}
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 2.2,
                opacity: 0.88,
                marginBottom: "1.5rem",
              }}
            >
              {tr.wutoBody}
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                opacity: 0.65,
                fontFamily: "var(--font-en)",
              }}
            >
              {tr.wutoNameExplanation}
            </p>
          </div>
        </div>

        <div className="wuto-features-grid">
          {tr.wutoFeatures.map((f) => (
            <div
              key={f.title}
              style={{ textAlign: "center", padding: "2rem", color: "var(--color-white)" }}
            >
              <div
                style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                  color: "var(--color-accent)",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, opacity: 0.85 }}>{f.text}</p>
            </div>
          ))}
        </div>

        {/* Property thumbnails */}
        <div style={{ background: "var(--color-primary)", padding: "1rem 8% 3rem" }}>
          <div className="property-thumbs">
            {PROPERTY_THUMBS.map((p) => (
              <Link key={p.name} href={`/${locale}/wuto`} className="property-thumb">
                <div
                  className="property-thumb-image"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-white)",
                    marginTop: "0.7rem",
                    letterSpacing: "0.03em",
                    textAlign: "center",
                  }}
                >
                  {p.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "0 8% 5rem",
            background: "var(--color-primary)",
          }}
        >
          <Link href={`/${locale}/wuto`} className="btn-primary">
            {tr.wutoCta}
          </Link>
        </div>
      </section>

      {/* Reviews preview */}
      <section style={{ background: "var(--color-bg)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={sectionLabel}>{tr.reviewsLabel}</p>
            <h2 style={sectionTitle}>{tr.reviewsHeading}</h2>
          </div>

          <div className="homepage-reviews">
            {HOMEPAGE_REVIEW_INDICES.map((idx) => {
              const r = reviews[idx];
              const reviewText = tr.getReviewText(r);
              return (
                <div key={idx} className="homepage-review-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(r.rating)].map((_, j) => (
                        <Star
                          key={j}
                          size={13}
                          fill="var(--color-accent)"
                          color="var(--color-accent)"
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: "1.3rem" }}>{r.flag}</span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.95,
                      color: "var(--color-text-light)",
                      fontStyle: "italic",
                      marginBottom: "1.2rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    &ldquo;{reviewText}&rdquo;
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-en)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {r.author}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/wuto#reviews" className="btn-outline">
              {tr.reviewsCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Articles (only if content exists for this locale) */}
      {articles.length > 0 && (
        <section
          id="articles"
          style={{ background: "var(--color-white)", padding: "6rem 8%" }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={sectionLabel}>{tr.articlesLabel}</p>
            <h2 style={sectionTitle}>{tr.articlesHeading}</h2>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/${locale}/articles/${article.id}`}
                className="article-card"
              >
                <div
                  style={{
                    height: "180px",
                    backgroundImage: `url('${
                      article.thumbnail?.url ?? getFallback(article.category)
                    }')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#eee",
                  }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {article.category && (
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
                    )}
                    <span
                      style={{
                        fontFamily: "var(--font-en)",
                        fontSize: "0.75rem",
                        color: "var(--color-text-light)",
                      }}
                    >
                      {new Date(article.publishedAt)
                        .toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, ".")}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--color-primary)",
                      lineHeight: 1.6,
                      marginBottom: "0.8rem",
                    }}
                  >
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-light)",
                        lineHeight: 1.7,
                      }}
                    >
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href={`/${locale}/articles`} className="btn-outline">
              {tr.articlesCta}
            </Link>
          </div>
        </section>
      )}

      <style>{`
        /* ── Philosophy section ── */
        .philosophy-section {
          background: var(--color-bg);
          padding: 8rem 8%;
        }
        .philosophy-inner {
          max-width: 1060px;
          margin: 0 auto;
        }
        .philosophy-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          margin-top: 2.5rem;
          align-items: start;
        }
        .philosophy-poem {
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }
        .poem-stanza {
          margin: 0;
          line-height: 2;
          letter-spacing: 0.04em;
          font-weight: 400;
          color: var(--color-text-light);
        }
        .poem-large {
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
        }
        .poem-mid {
          font-size: clamp(0.82rem, 1vw, 0.88rem);
          opacity: 0.8;
        }
        .poem-close {
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
        }
        .philosophy-body {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          padding-top: 0.4rem;
        }
        .philosophy-body-p {
          margin: 0;
          font-size: clamp(0.97rem, 1.3vw, 1.05rem);
          line-height: 2.1;
          color: var(--color-text);
        }
        .philosophy-cta { text-align: left; }
        @media (max-width: 768px) {
          .philosophy-section { padding: 5rem 8%; }
          .philosophy-layout { grid-template-columns: 1fr; gap: 3rem; }
          .philosophy-cta { text-align: center; }
        }

        .btn-primary {
          display: inline-block;
          padding: 1rem 3rem;
          background: var(--color-accent);
          color: var(--color-white);
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          border-radius: 4px;
          transition: background 0.3s;
        }
        .btn-primary:hover { background: #a07840; }

        .btn-outline {
          display: inline-block;
          padding: 1rem 3rem;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          border-radius: 4px;
          transition: background 0.3s, color 0.3s;
        }
        .btn-outline:hover { background: var(--color-primary); color: var(--color-white); }

        .wuto-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 4rem 8%;
          background: var(--color-primary);
        }

        .property-thumbs {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .property-thumb {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .property-thumb-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          background-size: cover;
          background-position: center;
          border-radius: 6px;
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .property-thumb:hover .property-thumb-image {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }

        .homepage-reviews {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .homepage-review-card {
          background: var(--color-white);
          border-radius: 8px;
          padding: 1.8rem;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
        }

        .business-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .business-card {
          background: var(--color-white);
          padding: 2.5rem 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .business-card-link {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .business-card-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        .sub-business-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .sub-business-card {
          background: var(--color-bg);
          padding: 1.6rem 1.4rem;
          border-radius: 6px;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .article-card {
          background: var(--color-bg);
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .article-card:hover { transform: translateY(-5px); box-shadow: 0 8px 30px rgba(0,0,0,0.1); }

        .service-card {
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        @media (max-width: 768px) {
          .wuto-features-grid { grid-template-columns: 1fr !important; }
          .business-grid-3 { grid-template-columns: 1fr !important; }
          .sub-business-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sub-business-card { padding: 1.2rem 1rem !important; text-align: center; }
          .sub-business-card p { display: none; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .property-thumbs { grid-template-columns: repeat(2, 1fr) !important; }
          .homepage-reviews { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .business-grid-3 { grid-template-columns: 1fr 1fr !important; }
          .sub-business-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .property-thumbs { grid-template-columns: repeat(3, 1fr) !important; }
          .homepage-reviews { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
