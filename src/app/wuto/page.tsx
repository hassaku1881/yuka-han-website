import Link from "next/link";
import type { Metadata } from "next";
import { Home as HomeIcon, TrainFront, UtensilsCrossed, Bath, Wifi, Moon } from "lucide-react";

export const metadata: Metadata = {
  title: "Wuto | Yuka-Han",
  description: "Japandiスタイルのスモールラグジュアリー宿泊施設 Wuto。東京・お花茶屋エリアに展開。",
};

const properties = [
  {
    id: "ohanajaya",
    name: "Wuto Ohanajaya",
    area: "東京・お花茶屋",
    access: "京成本線 お花茶屋駅 徒歩3分",
    capacity: "最大4名",
    size: "55㎡",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    features: ["Japandiインテリア", "フルキッチン完備", "高速Wi-Fi", "駅近3分"],
    award: "Airbnb ゲストチョイス 2024",
    description:
      "下町の温かみと洗練されたJapandiデザインが融合した、Wuto旗艦施設。飛騨産業の家具と無印良品のテキスタイルで統一されたインテリアが、非日常と日常のあいだに連れ出します。",
  },
  {
    id: "kameido",
    name: "Wuto Kameido",
    area: "東京・亀戸",
    access: "JR総武線 亀戸駅 徒歩5分",
    capacity: "最大2名",
    size: "38㎡",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    features: ["ワークスペース", "コーヒーセット", "高速Wi-Fi", "駅近5分"],
    award: null,
    description:
      "リモートワーカーやひとり旅に最適な、コンパクトながら機能的な空間。ReCenoのデスクと大型モニターを備えたワークスペースで、仕事も旅もどちらも快適に。",
  },
  {
    id: "hikifune",
    name: "Wuto Hikifune",
    area: "東京・曳舟",
    access: "東武スカイツリーライン 曳舟駅 徒歩4分",
    capacity: "最大6名",
    size: "72㎡",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    features: ["広々LDK", "グループ対応", "バスタブ付き", "駅近4分"],
    award: null,
    description:
      "グループ旅行や家族での滞在にぴったりな広々とした空間。和の風情が残る曳舟エリアで、東京の下町文化をたっぷり体験できます。",
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
      {/* Hero */}
      <section
        style={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920') center/cover",
          color: "var(--color-white)",
        }}
      >
        <div style={{ maxWidth: "700px", padding: "0 2rem" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>OUR BRAND</p>
          <h1
            style={{
              fontFamily: "var(--font-en)",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            Wuto
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 300, letterSpacing: "0.2em", opacity: 0.9 }}>
            暮らすように、泊まる。
          </p>
        </div>
      </section>

      {/* Concept */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>CONCEPT</p>
          <h2 style={sectionTitle}>Japandi × Small Luxury</h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)", marginBottom: "2rem" }}>
            日本の「間」の美意識と、北欧デザインのシンプルさを融合させたJapandiスタイル。
            <br />
            Wutoはそのフィロソフィーを体現した、東京の下町に佇むスモールラグジュアリーな宿泊施設です。
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
            「暮らすように泊まる」——それは観光地を巡るだけでなく、
            <br />
            その土地に溶け込み、地元の時間の流れを感じること。
            <br />
            Wutoはそんな旅の在り方を提案します。
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "var(--color-primary)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>FEATURES</p>
            <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: 0 }}>
              Wutoのこだわり
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}
          >
            {[
              { icon: <HomeIcon size={36} strokeWidth={1.5} color="#d4a574" />, title: "Japandi Interior", text: "ReCeno、無印良品、飛騨産業など厳選ブランドで統一された、上質なインテリア空間。" },
              { icon: <TrainFront size={36} strokeWidth={1.5} color="#d4a574" />, title: "Prime Location", text: "全施設が駅徒歩5分以内。東京の下町エリアから都心へのアクセスも抜群。" },
              { icon: <UtensilsCrossed size={36} strokeWidth={1.5} color="#d4a574" />, title: "Full Kitchen", text: "IHコンロ、電子レンジ、食器類まで充実したキッチンで自炊も楽しめる。" },
              { icon: <Bath size={36} strokeWidth={1.5} color="#d4a574" />, title: "Premium Bath", text: "お気に入りのバスアメニティと、清潔感あふれる水まわりで至福のひとときを。" },
              { icon: <Wifi size={36} strokeWidth={1.5} color="#d4a574" />, title: "High-Speed Wi-Fi", text: "ビジネスユースにも対応した高速光回線でストレスフリーなワーク環境。" },
              { icon: <Moon size={36} strokeWidth={1.5} color="#d4a574" />, title: "Personal Service", text: "創業者夫婦による直接運営。細やかなホスピタリティで旅をサポート。" },
            ].map((f) => (
              <div key={f.title} style={{ padding: "2rem", color: "var(--color-white)", textAlign: "center" }}>
                <div style={{ marginBottom: "0.8rem", display: "flex", justifyContent: "center" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-en)", fontSize: "1rem", fontWeight: 400, color: "var(--color-accent)", marginBottom: "0.8rem", letterSpacing: "0.05em" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, opacity: 0.85 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>PROPERTIES</p>
          <h2 style={sectionTitle}>施設一覧</h2>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {properties.map((prop, i) => (
            <div
              key={prop.id}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "3rem",
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
                  minHeight: "320px",
                  order: i % 2 === 0 ? 0 : 1,
                }}
                className="property-image"
              />
              <div style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 1 : 0 }}>
                {prop.award && (
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "var(--color-accent)",
                      background: "rgba(139,115,85,0.1)",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "3px",
                      marginBottom: "1rem",
                      width: "fit-content",
                    }}
                  >
                    🏆 {prop.award}
                  </span>
                )}
                <h3
                  style={{
                    fontFamily: "var(--font-en)",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: "var(--color-primary)",
                    marginBottom: "0.3rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {prop.name}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", marginBottom: "1.5rem" }}>
                  {prop.area} | {prop.access}
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 2, color: "var(--color-text-light)", marginBottom: "1.5rem" }}>
                  {prop.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  {prop.features.map((feat) => (
                    <span
                      key={feat}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.3rem 0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "20px",
                        color: "var(--color-text-light)",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-text-light)", marginBottom: "2rem" }}>
                  <span>{prop.capacity}</span>
                  <span>|</span>
                  <span>{prop.size}</span>
                </div>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",
                    background: "var(--color-primary)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    borderRadius: "4px",
                    width: "fit-content",
                  }}
                >
                  予約・お問い合わせ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .property-card { grid-template-columns: 1fr !important; }
          .property-image { order: 0 !important; min-height: 240px !important; }
        }
      `}</style>
    </main>
  );
}
