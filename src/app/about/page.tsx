import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社ユカハン",
  description: "株式会社ユカハン（Yuka-Han & Co.）の会社概要。東京・葛飾区お花茶屋を拠点に、民泊ブランドWutoの運営と民泊運営代行サービスを提供。",
};

export default function AboutPage() {
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
          height: "45vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(44,62,80,0.65), rgba(44,62,80,0.75)), url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920') center/cover",
          color: "var(--color-white)",
          padding: "0 2rem",
        }}
      >
        <div>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>COMPANY</p>
          <h1
            style={{
              fontFamily: "var(--font-en)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            About Yuka-Han
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>MISSION</p>
          <h2 style={sectionTitle}>旅する人の「もうひとつの家」をつくる</h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.4, color: "var(--color-text-light)" }}>
            私たち株式会社ユカハンは、「暮らすように泊まる」体験を通じて、
            <br />
            旅人と地域を繋ぐ宿泊施設の企画・開発・運営を行っています。
            <br />
            <br />
            ホテルでも民宿でもない、第三の選択肢——
            <br />
            Japandiの美意識が息づく空間で、訪れた人がその街の住人になれる。
            <br />
            そんな「もうひとつの家」を東京の下町から発信していきます。
          </p>
        </div>
      </section>

      {/* Founders */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={sectionLabel}>FOUNDERS</p>
          <h2 style={sectionTitle}>創業者について</h2>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", maxWidth: "1000px", margin: "0 auto" }}
          className="founders-grid"
        >
          {[
            {
              name: "山本 悠佳",
              role: "代表取締役 / Interior Director",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
              text: "インテリアデザインへの深い情熱と、世界40カ国以上を旅した経験を持つ。Wutoのインテリアコンセプト設計とゲスト体験のデザインを担当。「細部への愛情が、空間の温度を決める」が信条。",
            },
            {
              name: "范 凱翔",
              role: "代表取締役 / Operations Director",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
              text: "IT企業でのプロジェクトマネジメント経験を活かし、民泊運営のシステム化と効率化を推進。Airbnb運営11年のベテランとして、収益最大化と高評価維持の両立を実現。",
            },
          ].map((founder) => (
            <div key={founder.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  backgroundImage: `url('${founder.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  margin: "0 auto 1.5rem",
                  border: "4px solid var(--color-white)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "var(--color-primary)",
                  marginBottom: "0.3rem",
                }}
              >
                {founder.name}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--color-accent)", letterSpacing: "0.05em", marginBottom: "1.5rem" }}>
                {founder.role}
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 2, color: "var(--color-text-light)" }}>{founder.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={sectionLabel}>COMPANY INFO</p>
          <h2 style={sectionTitle}>会社概要</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {[
                { label: "社名", value: "株式会社ユカハン" },
                { label: "英文社名", value: "Yuka-Han & Co." },
                { label: "設立", value: "2020年5月1日" },
                { label: "所在地", value: "〒124-0003 東京都葛飾区お花茶屋2-5-21" },
                { label: "資本金", value: "3,000万円" },
                { label: "代表者", value: "代表取締役　山本 悠佳 / 代表取締役　范 凱翔" },
                { label: "取引銀行", value: "東京東信用金庫 / 第一勧業信用組合" },
                { label: "事業内容", value: "宿泊施設の企画・開発・運用 / 民泊運営代行サービス" },
                { label: "主力ブランド", value: "Wuto（スモールラグジュアリー宿泊施設）" },
                { label: "Email", value: "info@yuka-han.com" },
              ].map((row) => (
                <tr key={row.label} style={{ borderBottom: "1px solid #eee" }}>
                  <td
                    style={{
                      padding: "1.2rem 1rem 1.2rem 0",
                      fontSize: "0.85rem",
                      color: "var(--color-text-light)",
                      whiteSpace: "nowrap",
                      width: "160px",
                      fontWeight: 500,
                    }}
                  >
                    {row.label}
                  </td>
                  <td style={{ padding: "1.2rem 0", fontSize: "0.95rem", color: "var(--color-text)" }}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", padding: "5rem 8%", textAlign: "center" }}>
        <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>GET IN TOUCH</p>
        <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: "1rem" }}>お問い合わせ</h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
          Wutoのご予約、民泊運営代行のご相談など、
          <br />
          お気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "1rem 3rem",
            background: "var(--color-accent)",
            color: "var(--color-white)",
            textDecoration: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            borderRadius: "4px",
          }}
        >
          お問い合わせフォームへ
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  );
}
