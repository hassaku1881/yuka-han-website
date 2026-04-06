import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | YUKAHAN",
  description: "ユカハン合同会社のお知らせ・ニュース一覧。",
};

const newsItems = [
  { date: "2025.01.15", category: "受賞", title: "Wuto Ohanajaya が Airbnb ゲストチョイス 2024 を受賞しました", body: "2024年のAirbnbゲストチョイスアワードを受賞いたしました。ゲストの皆様からの温かいレビューの賜物です。これからも最高の滞在体験をお届けできるよう、さらなるサービス向上に努めてまいります。" },
  { date: "2024.12.01", category: "サービス", title: "民泊運営代行サービスの提供を開始しました", body: "11年間のAirbnb運営ノウハウを活かした民泊運営代行サービスを正式に開始いたしました。物件オーナーの皆様の収益最大化をサポートいたします。無料相談も受け付けておりますので、お気軽にお問い合わせください。" },
  { date: "2024.10.20", category: "お知らせ", title: "公式ウェブサイトをリニューアルしました", body: "ユカハン合同会社の公式ウェブサイトをリニューアルいたしました。Wutoの施設情報、民泊運営代行サービスの詳細など、より見やすく情報をご提供できるよう改善しました。" },
  { date: "2024.08.10", category: "施設", title: "Wuto Hikifune をオープンしました", body: "東京・曳舟エリアに3つ目の施設「Wuto Hikifune」をオープンいたしました。最大6名様まで対応できる広々とした空間で、グループ旅行や家族旅行に最適です。" },
  { date: "2024.05.01", category: "施設", title: "Wuto Kameido をオープンしました", body: "亀戸エリアに2つ目の施設「Wuto Kameido」をオープンいたしました。リモートワーカーやひとり旅の方に特化した快適なワークスペースを完備しています。" },
];

const categoryColors: Record<string, string> = {
  受賞: "#8B7355",
  サービス: "#2C3E50",
  お知らせ: "#666",
  施設: "#4a7c59",
};

export default function NewsPage() {
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
      <section style={{ padding: "5rem 8% 3rem", background: "var(--color-white)", textAlign: "center" }}>
        <p style={sectionLabel}>NEWS</p>
        <h1 style={sectionTitle}>News &amp; Updates</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)" }}>
          ユカハン合同会社からのお知らせ
        </p>
      </section>

      {/* News List */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {newsItems.map((item) => (
            <article
              key={item.title}
              style={{
                background: "var(--color-white)",
                padding: "2rem 2.5rem",
                borderRadius: "8px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-en)",
                    fontSize: "0.85rem",
                    color: "var(--color-accent)",
                    minWidth: "90px",
                  }}
                >
                  {item.date}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    color: "var(--color-white)",
                    background: categoryColors[item.category] || "#666",
                    padding: "0.2rem 0.7rem",
                    borderRadius: "3px",
                  }}
                >
                  {item.category}
                </span>
              </div>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem", lineHeight: 1.6 }}>
                {item.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.9 }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
