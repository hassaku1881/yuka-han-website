import Link from "next/link";
import type { Metadata } from "next";
import { Home as HomeIcon, TrainFront, UtensilsCrossed, Bath, Wifi, Car, BedDouble, Coffee, Star } from "lucide-react";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wuto | Yuka-Han",
  description: "東京・葛飾エリアに展開するJapandiスタイルの宿泊施設 Wuto。旅暮らしをしていた夫婦が、自分たちも納得して住める空間を追い求めて作りました。",
  alternates: { canonical: `${BASE_URL}/wuto` },
  openGraph: {
    url: `${BASE_URL}/wuto`,
    title: "Wuto | Yuka-Han",
    description: "落ち着ける日本の暮らし。旅暮らしをしていた夫婦が作った、Japandiスタイルの宿泊施設。",
    images: [{ url: `${BASE_URL}/images/hero-wuto.jpg`, width: 1920, height: 1280, alt: "Wuto" }],
  },
};

const properties = [
  {
    id: "ohanajaya-1f",
    name: "Wuto Ohanajaya 1F",
    nameJa: "Wutoお花茶屋 1F",
    area: "東京・葛飾区お花茶屋",
    access: "京成本線 お花茶屋駅 徒歩5分",
    capacity: "最大5名",
    size: "50㎡",
    rooms: "2BR",
    parking: false,
    image: "/images/properties/ohanajaya-1f-main.jpg",
    airbnbUrl: "https://www.airbnb.jp/rooms/1167161798047093034",
    features: ["Japandiインテリア", "フルキッチン完備", "高速Wi-Fi", "駅近5分"],
    description:
      "Wuto発祥の地、お花茶屋の1階。木の温もりが全体に宿るナチュラルな空間に、和の要素を融合させた2ベッドルーム。下町の生活感と上質な滞在が自然に共存する、原点ともいえる施設です。",
  },
  {
    id: "ohanajaya-2f",
    name: "Wuto Ohanajaya 2F",
    nameJa: "Wutoお花茶屋 2F",
    area: "東京・葛飾区お花茶屋",
    access: "京成本線 お花茶屋駅 徒歩5分",
    capacity: "最大9名",
    size: "85㎡",
    rooms: "3BR",
    parking: false,
    image: "/images/properties/ohanajaya-2f-main.jpg",
    airbnbUrl: "https://www.airbnb.jp/rooms/932450594135447897",
    features: ["Japandiインテリア", "フルキッチン完備", "高速Wi-Fi", "駅近5分"],
    award: "Airbnb ゲストチョイス",
    description:
      "桧づくりの一軒家、その2階に広がる3ベッドルーム85㎡。緑のカーテンと木の建具が織りなす穏やかな空間。グループや家族での滞在に、下町の情緒とゆとりある時間をお届けします。",
  },
  {
    id: "tateishi",
    name: "Wuto Tateishi",
    nameJa: "Wuto立石",
    area: "東京・葛飾区立石",
    access: "京成押上線 京成立石駅 徒歩9分",
    capacity: "最大10名",
    size: "95㎡",
    rooms: "4BR",
    parking: true,
    image: "/images/properties/tateishi-main.jpg",
    airbnbUrl: "https://www.airbnb.jp/rooms/1292012584407421176",
    features: ["Japandiインテリア", "フルキッチン完備", "高速Wi-Fi", "無料駐車場"],
    award: "Airbnb ゲストチョイス",
    flagship: true,
    description:
      "吹き抜けのLDKにシーリングファンが回る、Wuto最大の4ベッドルーム95㎡。明るくモダンな空間設計と充実した設備が、グループ旅行・長期滞在の両方に応えます。売上・レビュー・稼働率、すべてでWutoのトップを走るフラグシップ施設。",
  },
  {
    id: "horikiri",
    name: "Wuto Horikiri",
    nameJa: "Wuto堀切",
    area: "東京・葛飾区堀切",
    access: "京成本線 堀切菖蒲園駅 徒歩8分",
    capacity: "最大10名",
    size: "77㎡",
    rooms: "3BR",
    parking: true,
    image: "/images/properties/horikiri-main.jpg",
    airbnbUrl: "https://www.airbnb.jp/rooms/1445577802479821116",
    features: ["Japandiインテリア", "フルキッチン完備", "高速Wi-Fi", "無料駐車場"],
    award: "Airbnb ゲストチョイス",
    description:
      "天窓から自然光が降り注ぐ開放的なリビングが印象的な3ベッドルーム77㎡。ゴールドのペンダントライトとバスタブを備えたプレミアムな設えで、スタイリッシュな滞在を。堀切菖蒲園の四季も楽しめるロケーション。",
  },
  {
    id: "aoto",
    name: "Wuto Aoto",
    nameJa: "Wuto青砥",
    area: "東京・葛飾区青砥",
    access: "京成押上線 青砥駅 徒歩9分",
    capacity: "最大10名",
    size: "65㎡",
    rooms: "3BR",
    parking: false,
    image: "/images/properties/aoto-main.jpg",
    airbnbUrl: "https://www.airbnb.jp/rooms/1464127952772504828",
    features: ["Japandiインテリア", "フルキッチン完備", "高速Wi-Fi", "空港直通"],
    award: "Airbnb ゲストチョイス",
    description:
      "和室に低床ベッドとちょうちんランプ——日本家屋の骨格をそのまま生かした、最も「和」を感じる3ベッドルーム65㎡。青砥駅から成田・羽田空港への直通アクセスも魅力です。シックで落ち着く、大人のための空間。",
  },
];

const reviews = [
  {
    text: "ここにレビュー文を入れてください",
    author: "ゲスト名・国",
    rating: 5,
  },
  {
    text: "ここにレビュー文を入れてください",
    author: "ゲスト名・国",
    rating: 5,
  },
  {
    text: "ここにレビュー文を入れてください",
    author: "ゲスト名・国",
    rating: 5,
  },
];

export default function WutoPage() {
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
            暮らすように、泊まる。
          </p>
        </div>
      </section>

      {/* ── Concept ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>CONCEPT</p>
          <h2 style={{ ...sectionTitle, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.4 }}>
            落ち着ける日本の暮らしを、<br />旅の中に。
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.4, color: "var(--color-text-light)", marginBottom: "2.5rem" }}>
            Wutoは、旅暮らしをしていた夫婦が「自分たちが本当に泊まりたい場所」を追い求めて作った宿泊施設です。<br />
            観光地を巡るだけでなく、その土地に溶け込み、地元の時間の流れを感じること。<br />
            そして帰ってきたとき、ほっと息をつける場所があること。
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 2.4, color: "var(--color-text-light)" }}>
            日常の延長線上にある上質な空間、本物の眠り、使い心地のよい道具たち。<br />
            非日常の高揚感と、日常のくつろぎ——そのバランスこそがWutoのコンセプトです。<br />
            Japandiな内装に、旅先で見つけたこだわりのアメニティ。<br />
            自分たちも納得して住めるように、細部まで選び抜いた空間をどうぞ。
          </p>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ background: "var(--color-bg)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <p style={sectionLabel}>GUEST REVIEWS</p>
            <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>ゲストの声</h2>
          </div>
          {/* 評価サマリー */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}>
            <div style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "var(--font-en)",
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--color-primary)",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}>4.9</p>
              <div style={{ display: "flex", gap: "2px", justifyContent: "center", marginBottom: "0.3rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", letterSpacing: "0.05em" }}>
                Airbnb平均評価
              </p>
            </div>
            <div style={{ width: "1px", height: "60px", background: "#ddd" }} className="review-divider" />
            <div style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "var(--font-en)",
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--color-primary)",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}>5/5</p>
              <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", letterSpacing: "0.05em" }}>
                全施設 ゲストチョイス獲得
              </p>
            </div>
          </div>

          {/* レビューカード */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }} className="reviews-grid">
            {reviews.map((review, i) => (
              <div key={i} style={{
                background: "var(--color-white)",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={13} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>
                <p style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  color: "var(--color-text-light)",
                  marginBottom: "1.2rem",
                  fontStyle: "italic",
                }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <p style={{
                  fontSize: "0.78rem",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.05em",
                }}>
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: "var(--color-primary)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>COMMITMENTS</p>
            <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: "0.5rem" }}>
              Wutoのこだわり
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
              自分たちが本当に泊まりたい場所を作るために、細部まで選び抜いた。
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
            {[
              {
                icon: <HomeIcon size={34} strokeWidth={1.3} color="#d4a574" />,
                title: "Japandi Interior",
                text: "無垢材を中心にした、上質で温かみのある空間。ReCeno・無印良品・飛騨産業など厳選ブランドで統一されたインテリア。",
              },
              {
                icon: <BedDouble size={34} strokeWidth={1.3} color="#d4a574" />,
                title: "Sleep Quality",
                text: "寝心地を重視したふかふかの羽毛布団。肌触りと実用性を兼ね備えた厳選のリネン・タオルで、旅の疲れをしっかり癒します。",
              },
              {
                icon: <Bath size={34} strokeWidth={1.3} color="#d4a574" />,
                title: "Curated Amenities",
                text: "旅先で気に入ったシャンプー類・ハンドソープをセレクト。「また使いたい」と思えるアメニティを厳選して揃えています。",
              },
              {
                icon: <UtensilsCrossed size={34} strokeWidth={1.3} color="#d4a574" />,
                title: "Full Kitchen",
                text: "IHコンロ・電子レンジ・炊飯器・食器類まで充実。長期滞在でも自炊を楽しめるキッチン環境を整えています。",
              },
              {
                icon: <Coffee size={34} strokeWidth={1.3} color="#d4a574" />,
                title: "Drink Amenity",
                text: "コーヒー・お茶などのドリンクアメニティを用意。到着してすぐ、ほっと一息ついてもらえるように。",
              },
              {
                icon: <Wifi size={34} strokeWidth={1.3} color="#d4a574" />,
                title: "Work & Connect",
                text: "1Gbps超の高速Wi-Fiと本格ワークスペース。旅しながら働く、そんな使い方にもしっかり応えます。",
              },
            ].map((f) => (
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
          <h2 style={sectionTitle}>施設一覧</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", marginTop: "-1rem" }}>
            東京・葛飾エリアに5施設展開中
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
                  backgroundImage: `url('${prop.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "340px",
                  order: i % 2 === 0 ? 0 : 1,
                }}
                className="property-image"
              />
              <div style={{
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                order: i % 2 === 0 ? 1 : 0,
              }}>
                {/* バッジ */}
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
                      🏆 {prop.award}
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
                  {prop.name}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-light)", marginBottom: "1.2rem" }}>
                  {prop.area} | {prop.access}
                </p>

                <div style={{
                  display: "flex", gap: "1.2rem", marginBottom: "1.4rem",
                  fontSize: "0.85rem", color: "var(--color-text-light)",
                }}>
                  <span>{prop.capacity}</span>
                  <span style={{ color: "#ddd" }}>|</span>
                  <span>{prop.rooms}</span>
                  <span style={{ color: "#ddd" }}>|</span>
                  <span>{prop.size}</span>
                  {prop.parking && (
                    <>
                      <span style={{ color: "#ddd" }}>|</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <Car size={13} strokeWidth={1.5} />駐車場あり
                      </span>
                    </>
                  )}
                </div>

                <p style={{ fontSize: "0.93rem", lineHeight: 2, color: "var(--color-text-light)", marginBottom: "1.6rem" }}>
                  {prop.description}
                </p>

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  {prop.features.map((feat) => (
                    <span key={feat} style={{
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "20px",
                      color: "var(--color-text-light)",
                    }}>
                      {feat}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  <Link href="/contact" style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",
                    background: "var(--color-primary)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    borderRadius: "4px",
                  }}>
                    予約・お問い合わせ
                  </Link>
                  <a href={prop.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",
                    border: "1px solid var(--color-primary)",
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    borderRadius: "4px",
                  }}>
                    Airbnbで見る
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .property-card { grid-template-columns: 1fr !important; }
          .property-image { order: 0 !important; min-height: 240px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .review-divider { display: none; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
