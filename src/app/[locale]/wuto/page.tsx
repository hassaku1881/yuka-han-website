import Link from "next/link";
import type { Metadata } from "next";
import { Home as HomeIcon, UtensilsCrossed, Bath, Wifi, Car, BedDouble, Coffee, MapPin, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";
import WutoReviews from "@/components/WutoReviews";
import PropertyImageSlider from "@/components/PropertyImageSlider";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

// ── Shared property structural data ──────────────────────────────────────────
const properties = [
  {
    id: "ohanajaya-1f",
    name: "Wuto Ohanajaya 1F",
    nameJa: "Wutoお花茶屋 1F",
    area: "東京・葛飾区お花茶屋",
    access: "京成本線 お花茶屋駅 徒歩5分",
    capacityNum: 5,
    size: "50㎡",
    rooms: "2BR",
    parking: false,
    images: [
      "/images/properties/ohanajaya-1f-main.jpg",
      "/images/properties/ohanajaya-1f-2.jpg",
      "/images/properties/ohanajaya-1f-3.jpg",
    ],
    airbnbUrl: "https://www.airbnb.jp/rooms/1167161798047093034",
    featureKeys: ["japandi", "kitchen", "wifi", "station5min"] as const,
    award: true,
    flagship: false,
  },
  {
    id: "ohanajaya-2f",
    name: "Wuto Ohanajaya 2F",
    nameJa: "Wutoお花茶屋 2F",
    area: "東京・葛飾区お花茶屋",
    access: "京成本線 お花茶屋駅 徒歩5分",
    capacityNum: 9,
    size: "85㎡",
    rooms: "3BR",
    parking: false,
    images: [
      "/images/properties/ohanajaya-2f-main.jpg",
      "/images/properties/ohanajaya-2f-2.jpg",
      "/images/properties/ohanajaya-2f-3.jpg",
    ],
    airbnbUrl: "https://www.airbnb.jp/rooms/932450594135447897",
    featureKeys: ["japandi", "kitchen", "wifi", "station5min"] as const,
    award: true,
    flagship: false,
  },
  {
    id: "tateishi",
    name: "Wuto Tateishi",
    nameJa: "Wuto立石",
    area: "東京・葛飾区立石",
    access: "京成押上線 京成立石駅 徒歩9分",
    capacityNum: 10,
    size: "95㎡",
    rooms: "4BR",
    parking: true,
    images: [
      "/images/properties/tateishi-main.jpg",
      "/images/properties/tateishi-2.jpg",
      "/images/properties/tateishi-3.jpg",
    ],
    airbnbUrl: "https://www.airbnb.jp/rooms/1292012584407421176",
    featureKeys: ["japandi", "kitchen", "wifi", "parking"] as const,
    award: true,
    flagship: true,
  },
  {
    id: "horikiri",
    name: "Wuto Horikiri",
    nameJa: "Wuto堀切",
    area: "東京・葛飾区堀切",
    access: "京成本線 堀切菖蒲園駅 徒歩8分",
    capacityNum: 10,
    size: "77㎡",
    rooms: "3BR",
    parking: true,
    images: [
      "/images/properties/horikiri-main.jpg",
      "/images/properties/horikiri-2.jpg",
      "/images/properties/horikiri-3.jpg",
    ],
    airbnbUrl: "https://www.airbnb.jp/rooms/1445577802479821116",
    featureKeys: ["japandi", "kitchen", "wifi", "parking"] as const,
    award: true,
    flagship: false,
  },
  {
    id: "aoto",
    name: "Wuto Aoto",
    nameJa: "Wuto青砥",
    area: "東京・葛飾区青砥",
    access: "京成押上線 青砥駅 徒歩9分",
    capacityNum: 10,
    size: "65㎡",
    rooms: "3BR",
    parking: false,
    images: [
      "/images/properties/aoto-main.jpg",
      "/images/properties/aoto-2.jpg",
      "/images/properties/aoto-3.jpg",
    ],
    airbnbUrl: "https://www.airbnb.jp/rooms/1464127952772504828",
    featureKeys: ["japandi", "kitchen", "wifi", "airportDirect"] as const,
    award: true,
    flagship: false,
  },
];

type FeatureKey = "japandi" | "kitchen" | "wifi" | "station5min" | "parking" | "airportDirect";

// ── Translations ──────────────────────────────────────────────────────────────
const t: Record<
  SupportedLocale,
  {
    meta: { title: string; description: string };
    heroTagline: string;
    conceptHeadline: string;
    conceptP1: string;
    conceptP2: string;
    aboutNameLabel: string;
    aboutNameBody: string;
    commitmentsHeading: string;
    commitmentsSubtitle: string;
    features: {
      japandiInterior: string;
      sleepQuality: string;
      curatedAmenities: string;
      fullKitchen: string;
      drinkAmenity: string;
      workConnect: string;
      localExperience: string;
      forEveryGeneration: string;
    };
    propertiesHeading: string;
    propertiesSubtitle: string;
    capacityLabel: (n: number) => string;
    parkingLabel: string;
    featureTags: Record<FeatureKey, string>;
    propertyDescriptions: Record<string, string>;
    awardBadge: string;
    inquireButton: string;
    airbnbButton: string;
  }
> = {
  en: {
    meta: {
      title: "Wuto | Yuka-Han & Co.",
      description:
        "Wuto — Japandi-style vacation rentals in Tokyo's Katsushika area. Created by a couple who traveled the world, seeking spaces they truly wanted to stay in.",
    },
    heroTagline: "Live like a local.",
    conceptHeadline: "A calm Japanese home,\nbrought into your journey.",
    conceptP1:
      "Wuto was created by a couple who traveled the world—always searching for 'a place we'd truly want to stay.' Not just ticking off sightseeing spots, but sinking into the rhythm of a neighborhood, feeling the local passage of time. And having somewhere to breathe easy when you come home.",
    conceptP2:
      "A quality space that feels like an extension of everyday life. Real sleep. Tools that are simply good to use. The balance between the exhilaration of travel and the comfort of home—that is the Wuto concept. Japandi interiors, amenities curated from journeys around the world. Every detail chosen to a standard we'd be happy living in ourselves.",
    aboutNameLabel: "ABOUT THE NAME",
    aboutNameBody:
      "The name Wuto (烏兎, uto) comes from an old Japanese word.\nThe crow represents the sun; the rabbit, the moon—together they have signified the passage of time since ancient times.\nDay and night. The everyday and the journey. The familiar and the unknown.\nIn this name, we hold the wish to gently dissolve the boundary between them.",
    commitmentsHeading: "What We Care About",
    commitmentsSubtitle:
      "The shape of a truly comfortable stay, discovered through a life of travel.",
    features: {
      japandiInterior:
        "Centered on natural solid wood, quality materials with genuine warmth. Carefully selected furniture from beloved brands — Re:CENO, MUJI, Hida Sangyo, and more.",
      sleepQuality:
        "Plush down duvets prioritizing comfort. Carefully chosen linens and towels that are both luxurious and practical — to properly ease the fatigue of travel.",
      curatedAmenities:
        "Shampoos, soaps, and toiletries selected from places we fell in love with on our travels. Every amenity chosen because we wanted to use it again.",
      fullKitchen:
        "A kitchen stocked with proper cookware and tableware, making home cooking a pleasure. Even for extended stays, you can cook just like at home.",
      drinkAmenity:
        "Coffee, tea, and other drink amenities provided. A space where good conversation naturally arises over a relaxed cup.",
      workConnect:
        "Ultra-fast Wi-Fi over 1 Gbps and a proper workspace. Ready for those who work while they travel.",
      localExperience:
        "Local recommendations from two people who actually live here. Tokyo isn't only tourist spots — come experience the everyday life of Katsushika.",
      forEveryGeneration:
        "Baby cots, high chairs, and spaces designed with seniors in mind. A place where families of all ages can create precious memories together.",
    },
    propertiesHeading: "Our Properties",
    propertiesSubtitle: "5 properties in the Katsushika area, Tokyo",
    capacityLabel: (n) => `Up to ${n} guests`,
    parkingLabel: "Free parking",
    featureTags: {
      japandi: "Japandi Interior",
      kitchen: "Full Kitchen",
      wifi: "High-Speed Wi-Fi",
      station5min: "5 min from station",
      parking: "Free Parking",
      airportDirect: "Airport Direct",
    },
    propertyDescriptions: {
      "ohanajaya-1f":
        "The origin of Wuto — a home where the owners themselves once lived. A relaxed, café-like space with a well-equipped kitchen with a large fridge, and a raised-floor two-bedroom. The natural comfort found in everyday life, given a physical form.",
      "ohanajaya-2f":
        "A true cypress-built Japanese house. The upper floor opens into three bedrooms, filled with the gentle scent of cypress and traditional wooden fittings. Soak in the warmth of a Japanese home through all five senses.",
      tateishi:
        "Wuto's largest — four bedrooms. Centered on a light-filled, double-height living and dining area, the layout gives everyone the freedom to find their own rhythm. A space with just the right amount of room to come together and to be alone — ideal for group travel or extended family stays.",
      horikiri:
        "Soft natural light pours through a skylight in this open three-bedroom. A bright, spacious living area at the heart of the home where family and friends naturally gather. Stylish design and wooden warmth in perfect balance — for a quality everyday experience.",
      aoto: "A 50-year-old Japanese house. Three bedrooms that preserve the plaster walls, tatami rooms, and the dignified presence of a well-loved home. Minimal intervention — just enough to bring comfort — so you can feel what real Japanese daily life is like. Direct access to Narita and Haneda airports from Aoto station.",
    },
    awardBadge: "🏆 Airbnb Guest Favourite",
    inquireButton: "Inquire / Book",
    airbnbButton: "View on Airbnb",
  },

  "zh-TW": {
    meta: {
      title: "Wuto | Yuka-Han & Co.",
      description:
        "Wuto——東京葛飾地區的 Japandi 風格住宿設施。由一對旅行世界的夫妻打造，追求他們真正想要入住的空間。",
    },
    heroTagline: "像住家一樣，住宿。",
    conceptHeadline: "將沉靜的日本生活，\n帶入你的旅途之中。",
    conceptP1:
      "Wuto 由一對走遍世界的夫妻創立——他們一直在尋找「自己真正想住的地方」。不只是走馬看花地參觀景點，而是融入當地的生活節奏，感受那個地方特有的時間流逝。然後，回到住處時，有一個能讓人真正放鬆喘息的空間。",
    conceptP2:
      "日常生活延伸線上的優質空間，真正的好眠，使用起來舒適的器具。旅行的興奮感與家的舒適感之間的平衡——這就是 Wuto 的概念。Japandi 風格的室內設計，搭配從世界各地旅途中精心挑選的備品。每一個細節都達到我們自己也樂於居住的標準。",
    aboutNameLabel: "ABOUT THE NAME",
    aboutNameBody:
      "Wuto（ウト）的名字，源自日本古語「烏兎（うと）」。\n烏代表太陽，兎代表月亮——自古以來，這個詞象徵著時間的流逝。\n白晝與黑夜。日常與旅行。熟悉與未知。\n在這個名字中，我們寄託了輕柔消弭這些界限的願望。",
    commitmentsHeading: "我們的堅持",
    commitmentsSubtitle: "在旅居生活中發現的，真正舒適的住宿形式。",
    features: {
      japandiInterior:
        "以原木素材為中心，兼具品質與溫暖的空間。從 Re:CENO、無印良品、飛騨産業等心儀品牌中嚴選的傢俱。",
      sleepQuality:
        "注重睡眠舒適度的豐厚羽絨被。兼顧觸感與實用性的精選床單與毛巾，讓您充分消除旅途疲勞。",
      curatedAmenities:
        "從旅途中愛上的地方帶回的洗髮精及洗手液。每一件備品都是「想要再次使用」的精選之作。",
      fullKitchen:
        "配備充足廚具與餐具的廚房，讓自炊變得輕鬆愉快。即使是長期住宿，也能像在自己家中一樣烹飪。",
      drinkAmenity:
        "提供咖啡、茶等飲品備品。在悠然的時光中，自然而然地萌生對話。",
      workConnect:
        "超過1Gbps的高速Wi-Fi與完善的工作空間。充分滿足一邊旅行一邊工作的需求。",
      localExperience:
        "由真正居住在此的兩人為您介紹當地推薦。東京不只有觀光景點——來感受葛飾的日常生活吧。",
      forEveryGeneration:
        "備有嬰兒床、餐椅，空間設計也充分考慮長輩的需求。一個讓全家人共同創造珍貴回憶的地方。",
    },
    propertiesHeading: "設施一覽",
    propertiesSubtitle: "東京・葛飾地區共5處設施",
    capacityLabel: (n) => `最多${n}人`,
    parkingLabel: "免費停車場",
    featureTags: {
      japandi: "Japandi 風格設計",
      kitchen: "完整廚房設備",
      wifi: "高速Wi-Fi",
      station5min: "距車站5分鐘",
      parking: "免費停車場",
      airportDirect: "機場直達",
    },
    propertyDescriptions: {
      "ohanajaya-1f":
        "這是 Wuto 的起點——業主夫妻曾真實居住過的家。如同咖啡廳般舒適放鬆的空間，配備整齊的廚具和大型冰箱，以及附有地台的兩房格局。日常生活中蘊藏的舒適感，就此化為具體形態。",
      "ohanajaya-2f":
        "正宗的檜木建造獨棟日式住宅，二樓設有三間臥室。一推開玄關，便輕柔飄來檜木的香氣，榻榻米空間與木質建材交織出寧靜的氛圍。用五感細細品味日式民家特有的溫暖。",
      tateishi:
        "Wuto 最大的四房設施。以採光充足的挑高客廳為中心，間距適當的格局讓每個人都能找到自己的節奏。既能一起享受歡聚時光，也能各自靜靜獨處——非常適合多人團體旅行或家族長期住宿的空間。",
      horikiri:
        "天窗灑入柔和自然光的開闊三房。以寬敞明亮的客廳為中心，家人與朋友自然而然地聚集、交流。時尚感與木質溫暖完美融合，盡享高品質的日常體驗。",
      aoto: "屋齡50年的日式老宅。保留了灰泥牆壁、榻榻米和室等原有風貌的三房格局。僅做了最低限度的改善以確保舒適，讓您真實感受日本的日常生活。青砥站可直達成田・羽田兩大機場，交通極為便利。",
    },
    awardBadge: "🏆 Airbnb 房客最愛",
    inquireButton: "預約・詢問",
    airbnbButton: "在Airbnb上查看",
  },
};

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tr = t[locale as SupportedLocale];
  if (!tr) return {};
  return {
    title: tr.meta.title,
    description: tr.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/wuto`,
      languages: {
        ja: `${BASE_URL}/wuto`,
        en: `${BASE_URL}/en/wuto`,
        "zh-TW": `${BASE_URL}/zh-TW/wuto`,
        "x-default": `${BASE_URL}/wuto`,
      },
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function LocaleWutoPage({ params }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();

  const tr = t[locale as SupportedLocale];

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

  const commitmentItems = [
    {
      icon: <HomeIcon size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Japandi Interior",
      text: tr.features.japandiInterior,
    },
    {
      icon: <BedDouble size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Sleep Quality",
      text: tr.features.sleepQuality,
    },
    {
      icon: <Bath size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Curated Amenities",
      text: tr.features.curatedAmenities,
    },
    {
      icon: <UtensilsCrossed size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Full Kitchen",
      text: tr.features.fullKitchen,
    },
    {
      icon: <Coffee size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Drink Amenity",
      text: tr.features.drinkAmenity,
    },
    {
      icon: <Wifi size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Work & Connect",
      text: tr.features.workConnect,
    },
    {
      icon: <MapPin size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "Local Experience",
      text: tr.features.localExperience,
    },
    {
      icon: <Users size={34} strokeWidth={1.3} color="#d4a574" />,
      title: "For Every Generation",
      text: tr.features.forEveryGeneration,
    },
  ];

  return (
    <main style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section style={{
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(20,30,48,0.48), rgba(20,30,48,0.52)), url('/images/hero-wuto.jpg') center/cover",
        color: "var(--color-white)",
      }}>
        <div style={{ maxWidth: "700px", padding: "0 2rem" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>OUR BRAND</p>
          <h1 style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}>
            Wuto
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 300, letterSpacing: "0.2em", opacity: 0.9 }}>
            {tr.heroTagline}
          </p>
        </div>
      </section>

      {/* ── Concept ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>CONCEPT</p>
          <h2 style={{ ...sectionTitle, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.4 }}>
            {tr.conceptHeadline.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.4, color: "var(--color-text-light)", marginBottom: "2.5rem" }}>
            {tr.conceptP1}
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 2.4, color: "var(--color-text-light)", marginBottom: "2.5rem" }}>
            {tr.conceptP2}
          </p>
          <div style={{
            display: "inline-block",
            padding: "1.4rem 2rem",
            borderTop: "1px solid var(--color-accent)",
            borderBottom: "1px solid var(--color-accent)",
            maxWidth: "640px",
          }}>
            <p style={{
              fontFamily: "var(--font-en)",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              color: "var(--color-accent)",
              marginBottom: "0.6rem",
            }}>
              {tr.aboutNameLabel}
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 2.0, color: "var(--color-text-light)" }}>
              {tr.aboutNameBody.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Commitments ── */}
      <section style={{ background: "var(--color-primary)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>COMMITMENTS</p>
            <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: "0.5rem" }}>
              {tr.commitmentsHeading}
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
              {tr.commitmentsSubtitle}
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
            {commitmentItems.map((f) => (
              <div key={f.title} style={{
                padding: "2.5rem 2rem",
                color: "var(--color-white)",
                textAlign: "center",
                background: "var(--color-primary)",
              }}>
                <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  marginBottom: "0.8rem",
                  letterSpacing: "0.08em",
                }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.9, opacity: 0.82 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Properties ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>PROPERTIES</p>
          <h2 style={sectionTitle}>{tr.propertiesHeading}</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", marginTop: "-1rem" }}>
            {tr.propertiesSubtitle}
          </p>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {properties.map((prop, i) => (
            <div
              key={prop.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                background: "var(--color-white)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
              }}
              className="property-card"
            >
              <div
                style={{
                  minHeight: "340px",
                  order: i % 2 === 0 ? 0 : 1,
                }}
                className="property-image"
              >
                <PropertyImageSlider images={prop.images} alt={prop.nameJa} />
              </div>
              <div style={{
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                order: i % 2 === 0 ? 1 : 0,
              }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {prop.flagship && (
                    <span style={{
                      fontSize: "0.68rem", letterSpacing: "0.12em",
                      color: "#fff", background: "var(--color-primary)",
                      padding: "0.25rem 0.7rem", borderRadius: "3px",
                    }}>
                      ★ FLAGSHIP
                    </span>
                  )}
                  {prop.award && (
                    <span style={{
                      fontSize: "0.68rem", letterSpacing: "0.1em",
                      color: "var(--color-accent)", background: "rgba(139,115,85,0.1)",
                      padding: "0.25rem 0.7rem", borderRadius: "3px",
                    }}>
                      {tr.awardBadge}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "var(--color-primary)",
                  marginBottom: "0.2rem",
                  letterSpacing: "0.05em",
                }}>
                  {prop.nameJa}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-light)", marginBottom: "1.2rem" }}>
                  {prop.area} | {prop.access}
                </p>

                <div style={{
                  display: "flex", gap: "1.2rem", marginBottom: "1.4rem",
                  fontSize: "0.85rem", color: "var(--color-text-light)",
                }}>
                  <span>{tr.capacityLabel(prop.capacityNum)}</span>
                  <span style={{ color: "#ddd" }}>|</span>
                  <span>{prop.rooms}</span>
                  <span style={{ color: "#ddd" }}>|</span>
                  <span>{prop.size}</span>
                  {prop.parking && (
                    <>
                      <span style={{ color: "#ddd" }}>|</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <Car size={13} strokeWidth={1.5} />{tr.parkingLabel}
                      </span>
                    </>
                  )}
                </div>

                <p style={{ fontSize: "0.93rem", lineHeight: 2, color: "var(--color-text-light)", marginBottom: "1.6rem" }}>
                  {tr.propertyDescriptions[prop.id]}
                </p>

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  {prop.featureKeys.map((key) => (
                    <span key={key} style={{
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "20px",
                      color: "var(--color-text-light)",
                    }}>
                      {tr.featureTags[key]}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  <Link href={`/${locale}/contact`} style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",
                    background: "var(--color-primary)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    borderRadius: "4px",
                  }}>
                    {tr.inquireButton}
                  </Link>
                  <a href={prop.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.8rem 2rem",
                    border: "1px solid var(--color-primary)",
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    borderRadius: "4px",
                  }}>
                    <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                      <path d="M16 1C10.7 1 2 12.3 2 19.4c0 4.7 3.1 8.1 7.1 8.1 2.3 0 4.4-1.1 6.9-4.4 2.5 3.3 4.6 4.4 6.9 4.4 4 0 7.1-3.4 7.1-8.1C30 12.3 21.3 1 16 1zm-6.9 24c-2.6 0-4.6-2.1-4.6-5.6 0-5.8 7-15.5 10.1-18.6C17.8 4 24.5 13.6 24.5 19.4c0 3.5-2 5.6-4.6 5.6-1.8 0-3.6-1.1-5.9-4.5-2.3 3.4-4.1 4.5-5.9 4.5z"/>
                    </svg>
                    {tr.airbnbButton}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <WutoReviews />

      <style>{`
        @media (max-width: 768px) {
          .property-card { grid-template-columns: 1fr !important; }
          .property-image { order: 0 !important; min-height: 240px !important; }
        }
      `}</style>
    </main>
  );
}
