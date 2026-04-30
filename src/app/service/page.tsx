import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "宿泊施設運営事業 | Yuka-Han & Co.",
  description: "株式会社ユカハンの宿泊施設運営事業。Airbnb運営11年の実績を活かし、民泊・短期賃貸の運営代行から開業サポート・収益改善まで一括対応。",
};

export default function ServicePage() {
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
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(44,62,80,0.7), rgba(44,62,80,0.8)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920') center/cover",
          color: "var(--color-white)",
          padding: "0 2rem",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>ACCOMMODATION OPERATIONS</p>
          <h1
            style={{
              fontFamily: "var(--font-en)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            宿泊施設運営事業
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, opacity: 0.9, lineHeight: 1.8 }}>
            Airbnb運営11年の実績を活かし、あなたの物件の収益最大化をサポートします。
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>WHY CHOOSE US</p>
          <h2 style={sectionTitle}>私たちが選ばれる理由</h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
            私たち夫婦はAirbnbのヘビーユーザーとして世界中の宿に泊まり、
            <br />
            その経験から「本当に良いと思える宿」の条件を肌で知っています。
            <br />
            ゲスト目線の運営だからこそ、高評価と安定した稼働率を実現できます。
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>SERVICES</p>
          <h2 style={sectionTitle}>サービス内容</h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}
        >
          {[
            {
              num: "01",
              title: "運営代行（フルサポート）",
              items: ["予約管理・カレンダー管理", "ゲスト対応（24時間対応）", "清掃・リネン手配", "チェックイン・アウト対応", "トラブル対応・緊急連絡"],
              text: "オーナー様は何もしなくてOK。すべてお任せください。",
            },
            {
              num: "02",
              title: "開業サポート",
              items: ["物件選定・収益シミュレーション", "民泊許可・住宅宿泊事業法対応", "インテリアコーディネート", "Airbnbリスティング作成", "写真撮影・文章制作"],
              text: "はじめての民泊参入も、安心してスタートできます。",
            },
            {
              num: "03",
              title: "収益改善コンサルティング",
              items: ["現状分析・競合調査", "価格最適化（ダイナミックプライシング）", "リスティング改善", "ゲストレビュー対策", "稼働率向上プラン策定"],
              text: "既存物件の収益が伸び悩んでいるオーナー様へ。",
            },
          ].map((svc) => (
            <div
              key={svc.num}
              style={{
                background: "var(--color-white)",
                padding: "2.5rem 2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {svc.num}
              </span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.5rem" }}>
                {svc.title}
              </h3>
              <ul style={{ listStyle: "none", marginBottom: "1.5rem" }}>
                {svc.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text)",
                      padding: "0.4rem 0",
                      paddingLeft: "1.2rem",
                      position: "relative",
                      borderBottom: "1px solid #f5f5f5",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--color-accent)" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", fontStyle: "italic" }}>{svc.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section style={{ background: "var(--color-primary)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>TRACK RECORD</p>
          <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: "3rem" }}>実績</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem" }}>
            {[
              { number: "11+", label: "Airbnb運営年数" },
              { number: "4.9", label: "平均レビュー評価" },
              { number: "500+", label: "年間ゲスト数" },
              { number: "98%", label: "オーナー継続率" },
            ].map((item) => (
              <div key={item.label} style={{ padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-en)", fontSize: "3rem", fontWeight: 400, color: "var(--color-accent)", marginBottom: "0.5rem" }}>
                  {item.number}
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>FLOW</p>
          <h2 style={sectionTitle}>ご依頼の流れ</h2>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {[
            { step: "STEP 1", title: "無料相談", text: "まずはお気軽にご連絡ください。物件の状況やご要望をヒアリングします。" },
            { step: "STEP 2", title: "現地視察・プラン提案", text: "物件を拝見し、最適な運営プランと収益シミュレーションをご提案します。" },
            { step: "STEP 3", title: "契約・準備", text: "内容にご納得いただけましたら契約を締結し、開業・運営の準備を開始します。" },
            { step: "STEP 4", title: "運営開始", text: "リスティング公開後、すべての運営業務をYuka-Hanがお引き受けします。" },
          ].map((flow, i) => (
            <div
              key={flow.step}
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
                padding: "2rem 0",
                borderBottom: i < 3 ? "1px solid #eee" : "none",
              }}
            >
              <div style={{ minWidth: "80px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-en)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "var(--color-accent)",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  {flow.step}
                </span>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-white)",
                    fontFamily: "var(--font-en)",
                    fontSize: "1rem",
                  }}
                >
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                  {flow.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.8 }}>{flow.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-bg)", padding: "5rem 8%", textAlign: "center" }}>
        <p style={sectionLabel}>CONTACT</p>
        <h2 style={{ ...sectionTitle, marginBottom: "1rem" }}>まずは無料相談から</h2>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
          物件のご状況やご要望をお聞かせください。
          <br />
          最適なプランをご提案いたします。
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
          無料相談のお問い合わせ
        </Link>
      </section>
    </main>
  );
}
