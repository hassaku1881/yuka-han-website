import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

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

const t: Record<
  SupportedLocale,
  {
    meta: { title: string; description: string };
    storyParagraphs: string[];
    purposeHeadline: React.ReactNode;
    purposeBody: React.ReactNode;
    values: { title: string; subtitle: string; body: string }[];
    founders: {
      name: string;
      nameEn: string;
      role: string;
      origin: string;
      edu: string;
      bio: string;
      charge: string;
    }[];
    companyInfoTitle: string;
    companyRows: { label: string; value: React.ReactNode }[];
    ctaLabel: string;
  }
> = {
  en: {
    meta: {
      title: "About Us | Yuka-Han & Co.",
      description:
        "About Yuka-Han & Co. — A company that makes moments that move people viable as a business, driven by both sensibility and logic.",
    },
    storyParagraphs: [
      "We have traveled. Asia, Europe, the Americas, Africa—and eventually, Antarctica. In Japan, we once gave up our home and drove across all forty-seven prefectures.",
      "Our way of staying was always a kind of 'living travel.' Spending a week in one place, buying groceries at the neighborhood supermarket, listening to the music of that land. Rather than rushing through tourist spots, we engaged with each city as if breathing in its air. Through that kind of stay, we gathered many things that can't be seen any other way.",
      "That's when we realized: great experiences don't arise from sensibility alone, or from logic alone. The texture of a space, the warmth between people, operational decisions backed by data—when all of these align, something stays in people's memory.",
      "Yet in reality, these things are often handled by different people, different companies. The designer doesn't look at the numbers. The operator doesn't articulate the vision. The marketer never stands on the floor. Business gets assembled with each specialty working in a silo.",
      "Yuka-Han was founded to rebuild this fragmentation from a single perspective. The people who can discuss every detail of an interior also design the revenue model. The people who craft the marketing also write the messages to guests. Every dimension of the business, navigated by both sensibility and logic.",
      "Today, with accommodation planning and operations as our core, we are growing into operations management, photography studios, marketing, and consulting. What they all share is an interest in 'making moments that move people viable as a business.' We will keep expanding that outline, one step at a time.",
    ],
    purposeHeadline: (
      <>
        A little more spark in life,
        <br />
        A little more wonder in the everyday.
      </>
    ),
    purposeBody: (
      <>
        We believe travel gives a spark to life. For us, travel isn&apos;t an escape from the
        everyday—it&apos;s part of life itself. We want to be the catalyst for someone&apos;s
        &apos;just a little more interesting day.&apos;
        <br />
        <br />
        Not through imposition, but through small openings. Touching the life of a place you visit,
        just a little. That is the experience and space we deliver as a business.
      </>
    ),
    values: [
      {
        title: "Work Hard, Live Hard",
        subtitle: "All In",
        body: "We give everything to work, to travel, to every moment of daily life. The depth of a professional who delivers exceptional output, and the richness of 'living well' as quality input—we never cut corners on either.",
      },
      {
        title: "Pure Inspiration, Bold Creativity",
        subtitle: "From Spark to Creation",
        body: "Strip away assumptions and receive inspiration with an open mind. When it's time to create, be bold—think 10× bigger. Without genuine inspiration, real creativity cannot exist.",
      },
      {
        title: "Data-Driven, Poetry-Crafted",
        subtitle: "99% Logic, 1% Spark",
        body: "Every business decision starts from logic and numbers. Yet there are things that pure logic alone cannot produce. If data is the skeleton, poetry is its soul.",
      },
      {
        title: "Equity and Symphony",
        subtitle: "With Heads Held High",
        body: "We don't accept profiting from information asymmetry. 'Integrity' is too vague a word—so we say it this way: we advance our business in harmony, so that everyone involved can walk with their head held high.",
      },
    ],
    founders: [
      {
        name: "Yuka Yamamoto",
        nameEn: "Yuka",
        role: "CEO",
        origin: "Born in Fukuoka, raised in Hyogo",
        edu: "Kyoto University, Faculty of Agriculture; University of Tokyo, Institute of Medical Science",
        bio: "After working in R&D at a manufacturing company, she moved into marketing, branding, and business planning. During her student years, she studied abroad at McGill University in Canada and completed internships at a research institute in Germany and a multinational corporation in Switzerland. Having traveled to all 47 Japanese prefectures and over 70 countries, she brings a seasoned Airbnb guest's perspective to space design and guest experience design. Responsible for: facility branding, guest experience design, QA.",
        charge: "Facility Branding / Guest Experience Design / QA",
      },
      {
        name: "Gaisho Han",
        nameEn: "Gaisho",
        role: "CEO",
        origin: "Born in Jilin, China; raised in Kanagawa and Osaka",
        edu: "Kyoto University, Faculty of Integrated Human Studies",
        bio: "After a career in HR at an IT company covering labor management, system design, and M&A/PMI, he began planning and launching hospitality venues in 2018. He has been involved in developing large-scale hostels and hotels in Tokyo, Hakuba, and Fukuoka, as well as vacation rental management and cleaning operations. He began hosting on Airbnb from his own home in 2015 and continues to the present. During his student years, he completed a business internship in Gurugram, India. Fluent in Japanese, Chinese, and English. Responsible for: business development, revenue design, all back-office operations.",
        charge: "Business Development / Revenue Design / Back Office",
      },
    ],
    companyInfoTitle: "Company Info",
    companyRows: [
      { label: "Company Name", value: "株式会社ユカハン" },
      { label: "English Name", value: "Yuka-Han & Co., Ltd." },
      { label: "Founded", value: "May 1, 2020" },
      { label: "Address", value: "2-5-21 Ohanajaya, Katsushika-ku, Tokyo, Japan" },
      { label: "Capital", value: "¥30,000,000" },
      {
        label: "Directors",
        value: (
          <>
            Gaisho Han, CEO
            <br />
            Yuka Yamamoto, CEO
          </>
        ),
      },
      {
        label: "Banking",
        value: (
          <>
            Dai-ichi Kangyo Credit Union
            <br />
            Tokyo Higashi Credit Union
          </>
        ),
      },
      {
        label: "Business",
        value: (
          <>
            Accommodation planning, development &amp; operations (Wuto)
            <br />
            Vacation rental management
            <br />
            Hospitality operations consulting
            <br />
            Photography studio
            <br />
            Marketing
            <br />
            Consulting
            <br />
            Real estate leasing
          </>
        ),
      },
      { label: "Lead Brand", value: "Wuto" },
      { label: "Email", value: "contact@yuka-han.com" },
    ],
    ctaLabel: "Contact Us",
  },
  "zh-TW": {
    meta: {
      title: "關於我們 | 株式会社ユカハン",
      description:
        "關於 Yuka-Han & Co.——以感性與邏輯並行，將打動人心的瞬間化為可持續的事業。",
    },
    storyParagraphs: [
      "我們一直在旅行。亞洲、歐洲、南北美洲、非洲，不知不覺間甚至到了南極。在日本，也曾放棄了住所，開著一輛車走遍全國四十七個都道府縣。",
      "我們的旅行方式，始終是一種「像生活一樣的旅行」。在同一個地方停留一週，去附近的超市買食材，聆聽當地的音樂。不是走馬看花地穿越景點，而是像吸入空氣一般地融入街道。只有這樣的滯留方式，才能看見那些其他方法看不到的東西，我們收集了許多這樣的記憶。",
      "這讓我們意識到：好的體驗，不能僅靠感性，也不能僅靠邏輯。空間的質感、人與人之間的溫度、由數據支撐的運營判斷——唯有這一切完美齊備，才能留存在人們的記憶中。",
      "然而現實中，這些往往由不同的人、不同的公司分別負責。設計空間的人不看數字。負責運營的人不談世界觀。規劃行銷的人不站在現場。每個專業領域各自分立，事業就在這樣的割裂狀態中被拼湊起來。",
      "Yuka-Han 的成立，正是為了從一個視角重新整合這種割裂。能夠深入探討室內設計每一個細節的人，同樣設計收益模式。構思行銷策略的人，同樣親筆撰寫給房客的訊息。事業的每一個面向，都由感性與邏輯兩輪驅動。",
      "目前，以住宿設施的企劃與運營為核心，我們正逐步拓展至運營代理、攝影工作室、行銷及諮詢領域。所有業務共同的出發點，是對「將打動人心的瞬間化為可持續事業」的追求。我們將繼續一步一步地擴展這個輪廓。",
    ],
    purposeHeadline: (
      <>
        讓人生多一點刺激，
        <br />
        讓日常多一點精彩
      </>
    ),
    purposeBody: (
      <>
        我們相信，旅行能為生活帶來獨特的刺激。對我們而言，旅行不是日常的逃離，而是生活本身的一部分。我們希望成為某人「讓日常更有趣一點點」的契機。
        <br />
        <br />
        不是強行推銷，而是透過細微的餘白。像是輕輕觸碰所到之地的日常生活。我們要將這樣的體驗與空間，作為事業來傳遞給每一個人。
      </>
    ),
    values: [
      {
        title: "Work Hard, Live Hard",
        subtitle: "凡事全力以赴",
        body: "無論工作、旅行，還是日常的每一個瞬間，我們都全力投入。作為能夠交出最佳成果的專業人士，以及作為高品質的人生體驗——兩者都不能馬虎。",
      },
      {
        title: "Pure Inspiration, Bold Creativity",
        subtitle: "將刺激化為創造",
        body: "放下先入為主的觀念，純粹地接受刺激。創造時要大膽，要有十倍的想像力。沒有真正的靈感，就沒有真正的創造。",
      },
      {
        title: "Data-Driven, Poetry-Crafted",
        subtitle: "99%的邏輯與1%的靈感",
        body: "所有的商業判斷，都從邏輯與數字出發。然而，有些東西是純粹的邏輯無法創造的。如果數據是骨骼，那麼詩意便是它的靈魂。",
      },
      {
        title: "Equity and Symphony",
        subtitle: "讓每個人都能昂首闊步",
        body: "我們不認可利用資訊不對稱來謀取利益。「誠信」這個詞太模糊，所以我們直接這樣說：在與我們相關的所有人都能昂首闊步的前提下，在和諧中推進我們的事業。",
      },
    ],
    founders: [
      {
        name: "山本 悠佳",
        nameEn: "Yuka",
        role: "代表取締役（聯合創辦人）",
        origin: "出生於福岡，成長於兵庫",
        edu: "京都大學農學部、東京大學醫科學研究科",
        bio: "曾任職製造業研究開發部門，後轉任行銷、品牌及事業企劃。學生時代曾赴加拿大麥基爾大學留學，並在德國研究所及瑞士跨國企業完成實習。走遍日本全國47個都道府縣及世界70個以上國家，長期以Airbnb房客身份旅行的視角，被運用於空間設計與房客體驗設計中。負責：設施品牌建設、房客體驗設計、品質保證（QA）。",
        charge: "設施品牌 / 房客體驗設計 / QA",
      },
      {
        name: "范 凱翔",
        nameEn: "Han",
        role: "代表取締役（聯合創辦人）",
        origin: "出生於中國吉林省，成長於神奈川及大阪",
        edu: "京都大學綜合人間學部",
        bio: "曾任職IT企業人事部門，負責勞務企劃、制度設計及M&A/PMI，2018年起專注於住宿設施的企劃與開業。曾主導東京、白馬、福岡等地大型青旅及酒店的開發，以及民宿運營代理和清潔業務。2015年起以自有住宅開始Airbnb房東業務，迄今持續。學生時代曾在印度古爾岡完成商業實習。精通日語、中文及英語。負責：事業開發、收益設計、後台業務全般。",
        charge: "事業開發 / 收益設計 / 後台業務",
      },
    ],
    companyInfoTitle: "公司概要",
    companyRows: [
      { label: "公司名稱", value: "株式会社ユカハン" },
      { label: "英文名稱", value: "Yuka-Han & Co., Ltd." },
      { label: "成立日期", value: "2020年5月1日" },
      { label: "所在地", value: "東京都葛飾區御花茶屋2-5-21" },
      { label: "資本金", value: "3,000萬日圓" },
      {
        label: "代表人",
        value: (
          <>
            代表取締役　范 凱翔
            <br />
            代表取締役　山本 悠佳
          </>
        ),
      },
      {
        label: "往來銀行",
        value: (
          <>
            第一勧業信用組合
            <br />
            東京東信用金庫
          </>
        ),
      },
      {
        label: "業務內容",
        value: (
          <>
            住宿設施企劃・開發・運營（Wuto）
            <br />
            民宿運營代理
            <br />
            住宿設施運營支援
            <br />
            攝影工作室事業
            <br />
            行銷事業
            <br />
            諮詢事業
            <br />
            不動產租賃事業
          </>
        ),
      },
      { label: "主要品牌", value: "Wuto" },
      { label: "Email", value: "contact@yuka-han.com" },
    ],
    ctaLabel: "聯絡我們",
  },
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = t[locale as SupportedLocale];
  if (!content) return {};
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/about`,
      languages: {
        ja: `${BASE_URL}/about`,
        en: `${BASE_URL}/en/about`,
        "zh-TW": `${BASE_URL}/zh-TW/about`,
        "x-default": `${BASE_URL}/about`,
      },
    },
  };
}

export default async function LocaleAboutPage({ params }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();
  const content = t[locale as SupportedLocale];

  return (
    <main style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(20,30,48,0.55), rgba(20,30,48,0.68)), url('/images/20231003_katsushika-02.jpg') 25% 75% / cover no-repeat",
        color: "var(--color-white)",
        padding: "5rem 2rem",
      }}>
        <div style={{ maxWidth: "680px" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>COMPANY</p>
          <h1 style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}>
            About Us
          </h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p style={sectionLabel}>STORY</p>
          <h2 style={sectionTitle}>Our Story</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.7rem" }}>
            {content.storyParagraphs.map((para, i) => (
              <p key={i} style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Purpose ── */}
      <section style={{ background: "var(--color-bg)", padding: "7rem 8%" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>PURPOSE</p>
          <h2 style={{
            fontFamily: locale === "en" ? "var(--font-en)" : "var(--font-jp, inherit)",
            fontSize: "clamp(1.7rem, 4.2vw, 2.6rem)",
            fontWeight: 500,
            color: "var(--color-primary)",
            lineHeight: 1.55,
            letterSpacing: "0.04em",
            marginBottom: "1.2rem",
          }}>
            {content.purposeHeadline}
          </h2>
          <p style={{
            fontFamily: "var(--font-en)",
            fontSize: "1.05rem",
            color: "var(--color-text-light)",
            letterSpacing: "0.04em",
            marginBottom: "3.5rem",
            fontStyle: "italic",
          }}>
            A little more spark in life. A little more wonder in the everyday.
          </p>
          <p style={{
            fontSize: "1.02rem",
            lineHeight: 2.2,
            color: "var(--color-text-light)",
            textAlign: "left",
            maxWidth: "720px",
            margin: "0 auto",
          }}>
            {content.purposeBody}
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={sectionLabel}>VALUES</p>
            <h2 style={sectionTitle}>What We Stand For</h2>
          </div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.8rem" }}>
            {content.values.map((v) => (
              <div key={v.title} style={{
                background: "var(--color-bg)",
                padding: "2.4rem 2.2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.35,
                  marginBottom: "0.4rem",
                  fontStyle: "italic",
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--color-accent)",
                  letterSpacing: "0.04em",
                  marginBottom: "1.4rem",
                  fontWeight: 400,
                }}>
                  {v.subtitle}
                </p>
                <p style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-light)",
                  lineHeight: 2,
                }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={sectionLabel}>LEADERSHIP</p>
            <h2 style={sectionTitle}>Our Team</h2>
          </div>

          {/* Illustration */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Image
              src="/images/leadership-illustration.png"
              alt="Yuka-Han Leadership Illustration"
              width={520}
              height={420}
              style={{
                maxWidth: "min(420px, 80vw)",
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>

          <div className="founders-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            {content.founders.map((person) => (
              <div key={person.name}>
                <h3 style={{
                  fontSize: "1.55rem",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  marginBottom: "0.2rem",
                  letterSpacing: "0.04em",
                }}>
                  {person.name}
                </h3>
                <p style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.82rem",
                  color: "var(--color-text-light)",
                  marginBottom: "0.8rem",
                  letterSpacing: "0.04em",
                }}>
                  {person.nameEn}
                </p>
                <p style={{
                  fontSize: "0.78rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.06em",
                  marginBottom: "1.6rem",
                }}>
                  {person.role}
                </p>
                <p style={{ fontSize: "0.86rem", color: "var(--color-text-light)", marginBottom: "0.2rem" }}>
                  {person.origin}
                </p>
                <p style={{ fontSize: "0.86rem", color: "var(--color-text-light)", marginBottom: "1.6rem" }}>
                  {person.edu}
                </p>
                <p style={{
                  fontSize: "0.92rem",
                  lineHeight: 2,
                  color: "var(--color-text-light)",
                  marginBottom: "1.4rem",
                }}>
                  {person.bio}
                </p>
                <p style={{
                  fontSize: "0.75rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.06em",
                  paddingTop: "1rem",
                  borderTop: "1px solid #e8e3da",
                }}>
                  {person.charge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Info ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={sectionLabel}>COMPANY INFO</p>
          <h2 style={sectionTitle}>{content.companyInfoTitle}</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {content.companyRows.map((row) => (
                <tr key={String(row.label)} style={{ borderBottom: "1px solid #f0ede8" }}>
                  <td style={{
                    padding: "1.3rem 1rem 1.3rem 0",
                    fontSize: "0.85rem",
                    color: "var(--color-text-light)",
                    whiteSpace: "nowrap",
                    width: "150px",
                    fontWeight: 500,
                    verticalAlign: "top",
                  }}>
                    {row.label}
                  </td>
                  <td style={{
                    padding: "1.3rem 0",
                    fontSize: "0.95rem",
                    color: "var(--color-text)",
                    lineHeight: 1.9,
                  }}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <Link
              href={`/${locale}/contact`}
              style={{
                display: "inline-block",
                padding: "1rem 2.8rem",
                background: "var(--color-primary)",
                color: "var(--color-white)",
                fontFamily: "var(--font-en)",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .founders-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  );
}
