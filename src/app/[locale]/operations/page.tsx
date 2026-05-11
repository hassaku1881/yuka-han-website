import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, MapPin, Building, BarChart3, Compass, ArrowRight, FileText } from "lucide-react";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

const t: Record<SupportedLocale, {
  meta: { title: string; description: string };
  hero: { label: string; headline: string; sub: string; area: string };
  challenges: {
    heading: string;
    intro: string;
    points: string[];
    footerNote: string;
    linkText: string;
  };
  why: {
    heading: string;
    items: { title: string; body: string; note?: string }[];
  };
  service01: {
    heading: string;
    sub: string;
    servicesHeading: string;
    services: string[];
    feeFootnote: string;
    feeHeading: string;
    fees: { label: string; value: string; big: boolean; note: string }[];
    alignment: string;
  };
  service02: {
    heading: string;
    sub: string;
    servicesHeading: string;
    services: string[];
    feeHeading: string;
    fees: { label: string; value: string; big: boolean; note: string }[];
  };
  cohost: {
    label: string;
    heading: string;
    body: string;
    link: string;
  };
  availability: {
    heading: string;
    body: string;
    sub: string;
    cta: string;
  };
  flow: {
    heading: string;
    steps: {
      step: string;
      title: string;
      text: string;
      docBoxHeading?: string;
      docItems?: string[];
    }[];
  };
  hospitality: {
    label: string;
    heading: string;
    body1: string;
    body2: string;
    scopeLabel: string;
    scopeHeading: string;
    scopeItems: string[];
    corporateLabel: string;
    corporateHeading: string;
    corporateBody: string;
    feeLabel: string;
    feeHeading: string;
    feeBody: string;
    closing: string;
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
}> = {
  en: {
    meta: {
      title: "Vacation Rental Management | Yuka-Han & Co.",
      description:
        "Tokyo vacation rental management services. Backed by 11 years of Airbnb hosting and hotel development experience, we handle everything from operations management to revenue optimization.",
    },
    hero: {
      label: "MINPAKU OPERATIONS",
      headline: "Vacation Rental\nManagement",
      sub: "Backed by 11 years of Airbnb hosting and hotel development experience,\nwe handle everything from operations management to revenue optimization.",
      area: "Primarily serving Tokyo's east area (Katsushika, Sumida, Koto, Adachi, Edogawa, and more)",
    },
    challenges: {
      heading: "Does any of this sound familiar?",
      intro:
        "Several years have passed since inbound tourism surged back, and the vacation rental market is entering a correction phase. Bookings that used to fill naturally no longer come in; revenue isn't growing as expected. In most cases, this stems from operational frameworks that haven't kept up with market changes.",
      points: [
        "We're running the same operations as before, but bookings have dried up and profitability is declining.",
        "The first 1–2 properties did well, but revenue from the 3rd property onward just won't grow.",
        "Monthly reports are full of numbers, but there's no visibility into what's actually happening in operations.",
        "Messaging response is fast, but there are no improvement proposals or revenue-boosting initiatives.",
        "Complaints are increasing, but we can't pin down the cause or implement solutions.",
        "The Airbnb review score is stuck around 4.8 and won't go higher.",
      ],
      footerNote:
        "Note: A score of 4.8 may look high, but by our standards it signals significant room for improvement. We explore the structural reasons behind this in our BUSINESS column series.",
      linkText: "Read the BUSINESS column →",
    },
    why: {
      heading: "Why Yuka-Han?",
      items: [
        {
          title: "11 Years of Airbnb Operations",
          body: "We've been operating Airbnb properties since the early days of its Japan launch, through the current correction phase. We have the accumulated experience to make operational decisions that adapt to change without being swayed by short-term fluctuations.",
        },
        {
          title: "Hotel & Large-Scale Hospitality Background",
          body: "We have planned and opened some of Japan's largest hostels, and collaborated with major real estate companies. Our knowledge base goes beyond vacation rental management to encompass the full picture of hospitality as a business.",
        },
        {
          title: "Marketing & Revenue Design Expertise",
          body: "We design everything from listing strategy, OTA channel management to pricing operations, grounded in key metrics such as OCC, LOS, ADR, and GOP. We are equipped to make data-backed improvement proposals.",
          note: "OCC: Occupancy Rate / LOS: Length of Stay / ADR: Average Daily Rate / GOP: Gross Operating Profit / OTA: Booking platforms such as Airbnb and Booking.com",
        },
        {
          title: "Based in Tokyo's East — Our Home Turf Advantage",
          body: "Our headquarters is in Katsushika. Excellent access to both Narita and Haneda airports and central Tokyo, in an area beloved by inbound visitors for its shitamachi atmosphere and authentic local life. We support you with neighborhood recommendations and rapid on-site response.",
        },
      ],
    },
    service01: {
      heading: "Operations Management",
      sub: "We handle everything from reservation management and guest communications to cleaning coordination and monthly revenue improvement.",
      servicesHeading: "Services",
      services: [
        "Reservation & calendar management",
        "Guest communications (multilingual: Japanese, English, Chinese)",
        "Check-in / check-out management",
        "Cleaning & linen coordination",
        "Consumables & supplies replenishment",
        "Monthly reports (data analysis + improvement proposals)",
        "Continuous optimization of OCC, LOS, and ADR",
      ],
      feeFootnote: "OCC: Occupancy Rate / LOS: Length of Stay / ADR: Average Daily Rate",
      feeHeading: "Fee",
      fees: [
        {
          label: "Management Fee",
          value: "20%",
          big: true,
          note: "Of monthly revenue after OTA commission deductions",
        },
        {
          label: "Cleaning Fees",
          value: "At cost",
          big: false,
          note: "Passed through at the exact amount paid to cleaning contractors. No markup.",
        },
        {
          label: "Consumables & Supplies",
          value: "Actual cost",
          big: false,
          note: "Billed only for what is used",
        },
      ],
      alignment:
        "We have no structure that generates profit beyond the management fee. Our revenue and the owner's revenue optimization are designed to point in the same direction.",
    },
    service02: {
      heading: "Launch Support",
      sub: "From concept design and listing publication to early-stage support and operations improvement — we walk alongside you until your property is running smoothly.",
      servicesHeading: "Services",
      services: [
        "Concept design & guest experience design",
        "Interior planning",
        "Photography",
        "Listing creation",
        "Guest guide, property page, logo and other production",
        "Early-stage support",
        "Operations improvement planning (listing, pricing, experience review)",
      ],
      feeHeading: "Fee",
      fees: [
        {
          label: "Planning & Consulting Fee",
          value: "¥0–",
          big: true,
          note: "Waived when bundled with operations management and contracted for 1+ year",
        },
        {
          label: "Initial Setup Fee",
          value: "¥20,000–",
          big: true,
          note: "Listing creation, guest guide, property page, logo and other production",
        },
        {
          label: "Photography & Interior Design",
          value: "Quote-based",
          big: false,
          note: "No markup",
        },
        {
          label: "Opening Costs",
          value: "Quote-based",
          big: false,
          note: "Furniture, fixtures, and other expenses at actual cost",
        },
      ],
    },
    cohost: {
      label: "AIRBNB CO-HOST",
      heading: "Listed on Airbnb's Co-Host Marketplace",
      body: "You can review our profile and track record on the Airbnb platform.",
      link: "View Co-Host Profile →",
    },
    availability: {
      heading: "We Accept New Clients Selectively",
      body: "To maintain consistent service quality, we manage the number of concurrent engagements.",
      sub: "We are currently accepting both switches from existing operators and new property launches. Depending on timing, there may be a waiting period.",
      cta: "Start a Conversation (Free)",
    },
    flow: {
      heading: "How It Works",
      steps: [
        {
          step: "01",
          title: "Initial Inquiry",
          text: "Reach out via our contact form or email.",
          docBoxHeading: "Documents that speed things along",
          docItems: [
            "Current listing URL (if already operating)",
            "Property details (address, floor plan, size)",
            "Operating license type (Private Accommodation Act / Ryokan Business Act / Special Zone, etc.)",
            "Recent performance data (revenue, occupancy rate, reviews, etc.)",
          ],
        },
        {
          step: "02",
          title: "Discovery Call",
          text: "We'll learn about your property, current situation, and goals — online or in person. If you're switching from another operator, feel free to share exactly what's been working and what hasn't.",
        },
        {
          step: "03",
          title: "Proposal",
          text: "We'll present a revenue simulation, operational strategy, and cost summary. You're welcome to use this as a reference when comparing options.",
        },
        {
          step: "04",
          title: "Contract",
          text: "Once you're satisfied, we sign the agreement. We support electronic contracts.",
        },
        {
          step: "05",
          title: "Setup / Handover Preparation",
          text: "For new launches: 2 weeks to 2 months minimum. For handovers from existing operators: as fast as 1 day.",
        },
        {
          step: "06",
          title: "Operations Begin",
          text: "From day one, our first milestone is earning Airbnb Guest Favourite status — we drive a strong start with our experience and rapid PDCA cycles.",
        },
        {
          step: "07",
          title: "Monthly Reports",
          text: "KGI & KPI trends, operational status, outlook, and property management updates — delivered in monthly reports.",
        },
      ],
    },
    hospitality: {
      label: "HOSPITALITY OPERATIONS",
      heading: "Broad Hospitality Operations",
      body1:
        "Beyond vacation rental management, we accept a wide range of hospitality operations consultations. We cover hotels, hostels, guesthouses, apartment hotels, entire-building vacation rentals, and large-scale multi-property operations.",
      body2:
        "Building on our vacation rental expertise and our background in hotel development and large facility openings, we flexibly structure support based on the scale and setup of each property.",
      scopeLabel: "SCOPE",
      scopeHeading: "Areas of Support",
      scopeItems: [
        "Facility concept design & revenue model development",
        "Inbound tourism capability enhancement",
        "OTA strategy & listing optimization",
        "Revenue improvement & cost structure review",
        "Operations design & staff training",
        "Full-service new opening support",
      ],
      corporateLabel: "CORPORATE & FUND",
      corporateHeading: "Corporate & Fund Engagements",
      corporateBody:
        "We handle corporate new business launches, real estate and hotel fund projects, and designated management (指定管理) engagements. We have experience with various schemes including SPC and GK-TMK, and can structure contracts as MC, lease, franchise, or other formats appropriate to the project.",
      feeLabel: "FEE STRUCTURE",
      feeHeading: "Flexible Fee Structures",
      feeBody:
        "In addition to revenue-share structures, we can propose profit-share models with stronger alignment, mixed approaches, or co-management arrangements — tailored to the project's setup and goals.",
      closing:
        "Details and scope depend on the content and scale of the project. Please feel free to contact us.",
    },
    cta: {
      heading: "Let's Talk",
      body: "Whether you're switching from another operator, outsourcing in-house operations, or launching a new property — we're ready.\nShare your current situation and goals, and we'll let you know what's possible and at what cost.",
      button: "Get in Touch",
    },
  },
  "zh-TW": {
    meta: {
      title: "民宿代營運 | 株式会社ユカハン",
      description:
        "東京民宿代營運服務。憑藉11年的Airbnb運營經驗及飯店開發背景，提供從代營運到收益改善的一站式服務。",
    },
    hero: {
      label: "MINPAKU OPERATIONS",
      headline: "民宿\n代營運服務",
      sub: "憑藉11年的Airbnb運營經驗及飯店・大型住宿設施的開發背景，\n提供從代營運到收益改善的全方位服務。",
      area: "以東京東部地區（葛飾・墨田・江東・足立・江戶川等）為中心提供服務",
    },
    challenges: {
      heading: "您是否有以下煩惱？",
      intro:
        "距離入境旅遊需求急速回升已過了數年，民宿市場正進入調整期。原本自然滿房的預約不再進來，收益也無法如預期般成長——這些問題在大多數情況下，源於運營體制未能跟上市況變化。",
      points: [
        "以相同的方式繼續運營，但預約不再進來，利潤持續惡化。",
        "前1～2間房源運營順利，但第3間以後的收益卻遲遲無法提升。",
        "月報上雖然羅列了數字，但看不出運營的實際內容。",
        "訊息回覆雖然迅速，但沒有改善提案或提升收益的具體行動。",
        "投訴增加，但原因與對策都不明朗，問題懸而未決。",
        "Airbnb評分卡在4.8附近，無法再往上提升。",
      ],
      footerNote:
        "備注：4.8分的評分看似偏高，但在我們的標準中，這是有很大改善空間的信號。相關運營結構性原因，我們在BUSINESS專欄系列中有詳細整理。",
      linkText: "閱讀BUSINESS專欄 →",
    },
    why: {
      heading: "選擇Yuka-Han的理由",
      items: [
        {
          title: "11年的Airbnb運營實績",
          body: "從Airbnb在日本展開初期至今日的調整期，我們經歷了市況的起伏波動。積累了豐富的運營決策經驗，能夠不被短期波動左右，靈活應對市場變化。",
        },
        {
          title: "飯店・大型住宿設施開發背景",
          body: "我們有參與規劃及開業日本最大規模青年旅館的實績，並與主要不動產公司有合作經驗。知識基礎超越了民宿運營的框架，涵蓋了整個住宿事業的全局視野。",
        },
        {
          title: "行銷與收益設計的專業能力",
          body: "以OCC・LOS・ADR・GOP等經營指標為出發點，從房源策略、OTA渠道設計到定價操作，進行一貫性的整體規劃。具備提出有數據支撐的改善方案的能力。",
          note: "OCC：入住率／LOS：平均住宿天數／ADR：每晚平均銷售單價／GOP：運營產生的利潤／OTA：Airbnb、Booking.com等預訂平台。",
        },
        {
          title: "紮根東京東部的在地優勢",
          body: "總部位於葛飾區。交通方便，可達成田・羽田兩大機場及市中心，同時是保有下町情懷與真實生活氣息的入境旅遊熱門地區。提供在地化的店家推薦，以及現場快速回應的全面支援。",
        },
      ],
    },
    service01: {
      heading: "代營運服務",
      sub: "從預約管理、房客應對、清潔安排，到每月的收益改善，全部一手包辦。",
      servicesHeading: "服務內容",
      services: [
        "預約・行事曆管理",
        "房客應對（日語・英語・中文多語言對應）",
        "入住・退房管理",
        "清潔・床單安排",
        "消耗品・備品補充",
        "月度報告（數據分析與改善提案）",
        "OCC・LOS・ADR持續最適化",
      ],
      feeFootnote: "OCC：入住率／LOS：平均住宿天數／ADR：每晚平均銷售單價。",
      feeHeading: "費用",
      fees: [
        {
          label: "代營運手續費",
          value: "20%",
          big: true,
          note: "OTA手續費扣除後的月銷售額的20%",
        },
        {
          label: "清潔費",
          value: "依實際費用",
          big: false,
          note: "依支付給清潔業者的金額如實計費，不收取任何中間差價",
        },
        {
          label: "消耗品・備品",
          value: "實際費用",
          big: false,
          note: "僅收取實際使用費用",
        },
      ],
      alignment:
        "我們沒有在代營運手續費以外獲取利潤的結構。房東的收益最大化與我們的收益，指向同一個方向。",
    },
    service02: {
      heading: "開業支援",
      sub: "從概念設計、房源上線，到啟動期支援和運營改善規劃——我們全程陪跑，直到您的業務步入正軌。",
      servicesHeading: "服務內容",
      services: [
        "概念設計・房客體驗設計",
        "室內設計規劃",
        "拍攝攝影",
        "房源頁面製作",
        "房客手冊・設施頁面・LOGO等製作",
        "啟動期支援",
        "運營改善規劃（房源・定價・體驗的優化）",
      ],
      feeHeading: "費用",
      fees: [
        {
          label: "規劃・諮詢費",
          value: "¥0～",
          big: true,
          note: "與代營運服務同時委託，且合約期1年以上時免費",
        },
        {
          label: "初期導入費用",
          value: "¥20,000～",
          big: true,
          note: "房源製作、房客手冊・設施頁面・LOGO等製作費用",
        },
        {
          label: "攝影・室內設計費",
          value: "依情況報價",
          big: false,
          note: "不收取中間差價",
        },
        {
          label: "開業相關費用",
          value: "依情況報價",
          big: false,
          note: "家具・備品等費用，依實際費用計算",
        },
      ],
    },
    cohost: {
      label: "AIRBNB CO-HOST",
      heading: "已在Airbnb補助房東市場登錄",
      body: "您可以在Airbnb平台上查看我們的資料及業績。",
      link: "查看補助房東資料 →",
    },
    availability: {
      heading: "新案件採計劃性承接",
      body: "為維持一定的服務品質，我們管控同時進行的案件數量。",
      sub: "目前接受既有設施的代營運交接委託及新物件的開業委託。視時間安排，可能需要稍候。",
      cta: "立即諮詢（免費）",
    },
    flow: {
      heading: "委託流程",
      steps: [
        {
          step: "01",
          title: "提出諮詢",
          text: "請透過表單或電郵與我們聯繫。",
          docBoxHeading: "事先準備以下資料將有助於加速流程",
          docItems: [
            "目前的房源網址（已在運營的情況）",
            "物件基本資訊（地址・格局・面積）",
            "運營形式（住宅宿泊事業法 / 旅館業法 / 特區民泊等）",
            "近期可反映運營狀況的資料（銷售額・入住率・評價等）",
          ],
        },
        {
          step: "02",
          title: "訪談・現況確認",
          text: "以線上或現場方式，了解物件、現況及需求。如果是從其他業者交接，請直接告知目前的運營狀況與問題所在。",
        },
        {
          step: "03",
          title: "提出方案",
          text: "我們將提交收益模擬、運營方針及費用概算。您可以將此作為比較選擇的參考資料使用。",
        },
        {
          step: "04",
          title: "簽訂合約",
          text: "確認內容後正式簽約。支援電子合約。",
        },
        {
          step: "05",
          title: "開業・交接準備",
          text: "新物件開業：最短2週～2個月。既有運營交接：最快1天即可完成切換。",
        },
        {
          step: "06",
          title: "開始運營",
          text: "以獲得Airbnb房客最愛為首個里程碑，憑藉過往經驗與快速的PDCA循環，實現強勢起步。",
        },
        {
          step: "07",
          title: "定期報告",
          text: "KGI・KPI的推移，加上營業狀況・未來展望・物件管理狀況等，每月提交報告。",
        },
      ],
    },
    hospitality: {
      label: "HOSPITALITY OPERATIONS",
      heading: "住宿設施運營全方位服務",
      body1:
        "除上述民宿代營運外，我們廣泛接受各類住宿設施運營的諮詢。無論是飯店、青年旅館、民宿、公寓式酒店，還是整棟民宿或多設施大規模民宿等任何形式，均可提供代營運、諮詢、收益改善及新開業支援。",
      body2:
        "結合民宿代營運的知識積累，以及飯店開發和大型設施開業的實戰經驗，我們依據設施規模與體制，靈活組合最適合的支援方案。",
      scopeLabel: "SCOPE",
      scopeHeading: "服務範疇",
      scopeItems: [
        "設施概念設計・收益模式構建",
        "入境旅遊應對能力強化",
        "OTA策略・房源最適化",
        "收益改善・成本結構優化",
        "運營流程設計・員工培訓",
        "新開業全程支援",
      ],
      corporateLabel: "CORPORATE & FUND",
      corporateHeading: "法人・基金案件",
      corporateBody:
        "我們接受法人新事業立項、不動產・飯店基金案件，以及指定管理者案件。具備包含SPC・GK-TMK在內的各種架構的對應經驗，合約形式可依案件特性靈活選擇MC・租賃・特許加盟等方式。",
      feeLabel: "FEE STRUCTURE",
      feeHeading: "彈性的費用結構",
      feeBody:
        "除業務委託形式的收益分成型外，亦可依案件體制與目標，提案利益分成型、混合型或共同經營型等方案。",
      closing: "具體內容・規模・體制將依情況協商。歡迎隨時與我們聯繫。",
    },
    cta: {
      heading: "歡迎隨時諮詢",
      body: "無論是從其他業者交接、將自行管理的業務外包，還是新物件開業，我們都歡迎您的諮詢。\n請告知您的現況與問題，我們將提供可行方案及費用概算。",
      button: "聯絡我們・諮詢請點此",
    },
  },
};

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
const subHeading: React.CSSProperties = {
  fontSize: "0.78rem",
  fontFamily: "var(--font-en)",
  letterSpacing: "0.18em",
  color: "var(--color-accent)",
  fontWeight: 600,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tx = t[locale as SupportedLocale];
  if (!tx) return {};
  return {
    title: tx.meta.title,
    description: tx.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/operations`,
      languages: {
        ja: `${BASE_URL}/operations`,
        en: `${BASE_URL}/en/operations`,
        "zh-TW": `${BASE_URL}/zh-TW/operations`,
        "x-default": `${BASE_URL}/operations`,
      },
    },
  };
}

export default async function LocaleOperationsPage({ params }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();
  const tx = t[locale as SupportedLocale];

  return (
    <main style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(20,30,48,0.6), rgba(20,30,48,0.7)), url('/images/20250711-02.jpg') center/cover",
        color: "var(--color-white)",
        padding: "5rem 2rem",
      }}>
        <div style={{ maxWidth: "780px" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>{tx.hero.label}</p>
          <h1 style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
            fontWeight: 400,
            letterSpacing: "0.04em",
            lineHeight: 1.35,
            marginBottom: "1.5rem",
            whiteSpace: "pre-line",
          }}>
            {tx.hero.headline}
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, opacity: 0.92, lineHeight: 1.95, marginBottom: "1rem", whiteSpace: "pre-line" }}>
            {tx.hero.sub}
          </p>
          <p style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.82rem",
            opacity: 0.75,
            letterSpacing: "0.05em",
          }}>
            <MapPin size={13} />
            {tx.hero.area}
          </p>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={sectionLabel}>CHALLENGES</p>
          <h2 style={{ ...sectionTitle, marginBottom: "1.5rem" }}>{tx.challenges.heading}</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2, marginBottom: "3rem" }}>
            {tx.challenges.intro}
          </p>
          <div className="ops-pain-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
            {tx.challenges.points.map((text) => (
              <div key={text} style={{
                display: "flex",
                gap: "0.8rem",
                alignItems: "flex-start",
                padding: "1.2rem 1.4rem",
                background: "var(--color-bg)",
                borderRadius: "6px",
                borderLeft: "3px solid var(--color-accent)",
              }}>
                <CheckCircle2 size={16} color="var(--color-accent)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <p style={{ fontSize: "0.88rem", color: "var(--color-primary)", lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2rem", fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.95 }}>
            {tx.challenges.footerNote}
          </p>
          <div style={{ marginTop: "0.8rem" }}>
            <Link href={`/${locale}/articles`} style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}>
              {tx.challenges.linkText}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Yuka-Han ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={sectionLabel}>WHY YUKA-HAN</p>
          <h2 style={sectionTitle}>{tx.why.heading}</h2>
        </div>
        <div className="ops-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
          {tx.why.items.map((item, idx) => (
            <div key={item.title} style={{
              background: "var(--color-white)",
              padding: "2.2rem 2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}>
              <div style={{ color: "var(--color-accent)", marginBottom: "1.2rem" }}>
                {idx === 0 && <BarChart3 size={28} strokeWidth={1.5} />}
                {idx === 1 && <Building size={28} strokeWidth={1.5} />}
                {idx === 2 && <Compass size={28} strokeWidth={1.5} />}
                {idx === 3 && <MapPin size={28} strokeWidth={1.5} />}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.9rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{item.body}</p>
              {item.note && (
                <p style={{ fontSize: "0.72rem", color: "var(--color-text-light)", lineHeight: 1.75, marginTop: "0.9rem", paddingTop: "0.8rem", borderTop: "1px solid #f0ede8" }}>
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Service 01: Operations Management ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICE 01</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>{tx.service01.heading}</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", marginBottom: "3rem" }}>
            {tx.service01.sub}
          </p>
          <div className="ops-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>SERVICES</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>{tx.service01.servicesHeading}</h3>
              {tx.service01.services.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.7rem 0", borderBottom: "1px solid #f0ede8" }}>
                  <ArrowRight size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
              <p style={{ marginTop: "1rem", fontSize: "0.74rem", color: "var(--color-text-light)", lineHeight: 1.75 }}>
                {tx.service01.feeFootnote}
              </p>
            </div>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>FEE</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>{tx.service01.feeHeading}</h3>
              {tx.service01.fees.map((item) => (
                <div key={item.label} style={{ padding: "1rem 0", borderBottom: "1px solid #f0ede8" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem", gap: "1rem" }}>
                    <span style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-en)", fontSize: item.big ? "1.4rem" : "0.88rem", color: "var(--color-accent)", fontWeight: 400, whiteSpace: "nowrap" }}>{item.value}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.65 }}>{item.note}</p>
                </div>
              ))}
              <div style={{ marginTop: "1.5rem", padding: "1.2rem 1.4rem", background: "rgba(139,115,85,0.07)", borderRadius: "6px", borderLeft: "3px solid var(--color-accent)" }}>
                <p style={{ fontSize: "0.82rem", color: "var(--color-primary)", lineHeight: 1.85 }}>
                  {tx.service01.alignment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 02: Launch Support ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICE 02</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>{tx.service02.heading}</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", marginBottom: "3rem" }}>
            {tx.service02.sub}
          </p>
          <div className="ops-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>SERVICES</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>{tx.service02.servicesHeading}</h3>
              {tx.service02.services.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.7rem 0", borderBottom: "1px solid #e8e4de" }}>
                  <ArrowRight size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>FEE</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>{tx.service02.feeHeading}</h3>
              {tx.service02.fees.map((item) => (
                <div key={item.label} style={{ padding: "1rem 0", borderBottom: "1px solid #e8e4de" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem", gap: "1rem" }}>
                    <span style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-en)", fontSize: item.big ? "1.15rem" : "0.88rem", color: "var(--color-accent)", fontWeight: 400, whiteSpace: "nowrap" }}>{item.value}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.65 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Airbnb Co-Host ── */}
      <section style={{ background: "var(--color-white)", padding: "4rem 8%" }}>
        <div className="ops-cohost" style={{ maxWidth: "880px", margin: "0 auto", display: "flex", gap: "2.5rem", alignItems: "center" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-accent), #c49a6c)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "white", fontSize: "1.7rem", lineHeight: 1 }}>★</span>
            </div>
          </div>
          <div>
            <p style={sectionLabel}>{tx.cohost.label}</p>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.7rem" }}>
              {tx.cohost.heading}
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85, marginBottom: "0.9rem" }}>
              {tx.cohost.body}
            </p>
            <a
              href="https://www.airbnb.jp/co-hosts/profile/1368097205517945251"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}
            >
              {tx.cohost.link}
            </a>
          </div>
        </div>
      </section>

      {/* ── Availability ── */}
      <section style={{
        background: "var(--color-primary)",
        padding: "5rem 8%",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.6)" }}>AVAILABILITY</p>
          <h2 style={{ fontFamily: "var(--font-en)", fontSize: "1.9rem", fontWeight: 400, color: "var(--color-white)", marginBottom: "1.5rem" }}>
            {tx.availability.heading}
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.82)", lineHeight: 2, marginBottom: "1.4rem" }}>
            {tx.availability.body}
          </p>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.95, marginBottom: "2.2rem" }}>
            {tx.availability.sub}
          </p>
          <Link
            href={`/${locale}/contact`}
            style={{
              display: "inline-block",
              padding: "1rem 3rem",
              background: "var(--color-accent)",
              color: "var(--color-white)",
              textDecoration: "none",
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              borderRadius: "4px",
            }}
          >
            {tx.availability.cta}
          </Link>
        </div>
      </section>

      {/* ── Flow ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>FLOW</p>
          <h2 style={sectionTitle}>{tx.flow.heading}</h2>
        </div>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {tx.flow.steps.map((item, i, arr) => (
            <div key={item.step} style={{
              display: "flex",
              gap: "1.6rem",
              alignItems: "flex-start",
              padding: "1.8rem 0",
              borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none",
            }}>
              <div style={{
                minWidth: "52px", height: "52px", borderRadius: "50%",
                background: "var(--color-bg)",
                border: "2px solid var(--color-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-en)", fontSize: "1rem", color: "var(--color-accent)", fontWeight: 400,
                flexShrink: 0,
              }}>
                {item.step}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{item.text}</p>
                {item.docBoxHeading && item.docItems && (
                  <div style={{ marginTop: "0.9rem", padding: "1rem 1.2rem", background: "var(--color-bg)", borderRadius: "5px" }}>
                    <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <FileText size={13} color="var(--color-accent)" />
                      {item.docBoxHeading}
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", margin: 0 }}>
                      {item.docItems.map((docItem) => (
                        <li key={docItem} style={{ fontSize: "0.8rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{docItem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hospitality Operations ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={sectionLabel}>{tx.hospitality.label}</p>
          <h2 style={{ ...sectionTitle, marginBottom: "1.2rem" }}>{tx.hospitality.heading}</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2.05, marginBottom: "1.4rem" }}>
            {tx.hospitality.body1}
          </p>
          <p style={{ fontSize: "0.92rem", color: "var(--color-text-light)", lineHeight: 2, marginBottom: "2.5rem" }}>
            {tx.hospitality.body2}
          </p>

          <p style={{ ...subHeading, marginBottom: "0.7rem" }}>{tx.hospitality.scopeLabel}</p>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>{tx.hospitality.scopeHeading}</h3>
          <div className="ops-scope-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.8rem", marginBottom: "2.5rem" }}>
            {tx.hospitality.scopeItems.map((item) => (
              <div key={item} style={{
                padding: "0.85rem 1rem",
                background: "var(--color-white)",
                borderRadius: "5px",
                fontSize: "0.85rem",
                color: "var(--color-text)",
                lineHeight: 1.6,
              }}>
                {item}
              </div>
            ))}
          </div>

          <p style={{ ...subHeading, marginBottom: "0.7rem" }}>{tx.hospitality.corporateLabel}</p>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem" }}>{tx.hospitality.corporateHeading}</h3>
          <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            {tx.hospitality.corporateBody}
          </p>

          <p style={{ ...subHeading, marginBottom: "0.7rem" }}>{tx.hospitality.feeLabel}</p>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem" }}>{tx.hospitality.feeHeading}</h3>
          <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            {tx.hospitality.feeBody}
          </p>

          <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>
            {tx.hospitality.closing}
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%", textAlign: "center" }}>
        <p style={sectionLabel}>CONTACT</p>
        <h2 style={{ ...sectionTitle, marginBottom: "1rem" }}>{tx.cta.heading}</h2>
        <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2.05, marginBottom: "2.5rem", whiteSpace: "pre-line" }}>
          {tx.cta.body}
        </p>
        <Link
          href={`/${locale}/contact`}
          style={{
            display: "inline-block",
            padding: "1rem 3.2rem",
            background: "var(--color-primary)",
            color: "var(--color-white)",
            textDecoration: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.08em",
            borderRadius: "4px",
          }}
        >
          {tx.cta.button}
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ops-grid-2 { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .ops-pain-grid { grid-template-columns: 1fr !important; }
          .ops-scope-grid { grid-template-columns: 1fr !important; }
          .ops-cohost { flex-direction: column !important; gap: 1.5rem !important; text-align: center; }
        }
      `}</style>
    </main>
  );
}
