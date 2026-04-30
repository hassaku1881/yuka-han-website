import Link from "next/link";
import { Home as HomeIcon, TrainFront, Sparkles, Building2, Globe, Briefcase } from "lucide-react";
import { getArticles, getNews } from "@/lib/microcms";

export const revalidate = 60;

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600";

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

export default async function Home() {
  const [{ contents: articles }, { contents: newsItems }] = await Promise.all([
    getArticles({ limit: 3 }),
    getNews({ limit: 3 }),
  ]);
  return (
    <main style={{ paddingTop: 0 }}>
      {/* Hero */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background:
            "linear-gradient(rgba(44,62,80,0.45), rgba(44,62,80,0.65)), url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920') center/cover",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "var(--color-white)",
            maxWidth: "800px",
            padding: "0 2rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-en)", fontSize: "0.9rem", letterSpacing: "0.3em", marginBottom: "1.5rem", opacity: 0.9 }}>
            SMALL LUXURY STAYS IN TOKYO
          </p>
          <h1 style={{ fontFamily: "var(--font-en)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, letterSpacing: "0.05em", marginBottom: "1rem" }}>
            Wuto
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 300, marginBottom: "0.5rem", letterSpacing: "0.1em" }}>
            暮らすように、泊まる。
          </p>
          <p style={{ fontFamily: "var(--font-en)", fontSize: "0.85rem", letterSpacing: "0.2em", opacity: 0.85, marginBottom: "2.5rem" }}>
            — JAPANDI STYLE ACCOMMODATION —
          </p>
          <Link href="/wuto" className="hero-cta">
            Explore Our Story
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>ABOUT US</p>
          <h2 style={sectionTitle}>Who We Are</h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)", marginBottom: "2rem" }}>
            株式会社ユカハンは、東京を中心に宿泊施設の企画・開発・運用を行う会社です。
            <br />
            私たちは「暮らすように泊まる」をコンセプトに、
            <br />
            Japandiスタイルを取り入れたスモールラグジュアリーな滞在体験を提供しています。
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)", marginBottom: "2rem" }}>
            主力ブランド「Wuto」では、駅近の好立地でありながら、
            <br />
            ゆったりとした空間と充実した設備で、まるで自宅のようにくつろげる宿泊体験をお届けします。
            <br />
            ReCeno、無印良品、飛騨産業など、こだわりのブランドで揃えたインテリアも魅力です。
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #eee" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)" }}>
              <strong style={{ color: "var(--color-primary)" }}>山本 悠佳 &amp; 范 凱翔</strong> — 代表取締役夫婦による直接運営。
              <br />
              世界中を旅してきた私たちだからこそ提供できる、最高のおもてなしを。
            </p>
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business" style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>BUSINESS</p>
          <h2 style={sectionTitle}>事業内容</h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-light)", marginTop: "1rem" }}>
            宿泊体験を軸に、4つの事業を展開しています。
          </p>
        </div>
        <div className="business-grid">
          {[
            {
              icon: <HomeIcon size={36} strokeWidth={1.5} />,
              title: "Wuto事業",
              text: "Japandiスタイルのスモールラグジュアリー宿泊ブランド「Wuto」の企画・開発・運営。",
              href: "/wuto",
            },
            {
              icon: <Building2 size={36} strokeWidth={1.5} />,
              title: "宿泊施設運営事業",
              text: "民泊をはじめとする宿泊施設の運営受託。予約管理・ゲスト対応・清掃まで一括サポート。",
              href: "/service",
            },
            {
              icon: <Globe size={36} strokeWidth={1.5} />,
              title: "マーケティング事業",
              text: "インバウンドマーケティング戦略の立案・実行、インバウンド向け施設の企画・プロデュース。",
              href: null,
            },
            {
              icon: <Briefcase size={36} strokeWidth={1.5} />,
              title: "コンサルティング事業",
              text: "事業開発支援、業務改善コンサルティング。民泊・宿泊業を中心とした経営課題を解決。",
              href: null,
            },
          ].map((biz) => {
            const inner = (
              <>
                <div style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}>{biz.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem" }}>
                  {biz.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.8 }}>{biz.text}</p>
                {biz.href ? (
                  <span style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--color-accent)", letterSpacing: "0.05em" }}>
                    詳しく見る →
                  </span>
                ) : (
                  <span style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "0.75rem", color: "var(--color-text-light)", opacity: 0.6 }}>
                    近日公開
                  </span>
                )}
              </>
            );
            return biz.href ? (
              <Link key={biz.title} href={biz.href} className="business-card business-card-link">
                {inner}
              </Link>
            ) : (
              <div key={biz.title} className="business-card">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements */}
      <section style={{ background: "var(--color-primary)", padding: "4rem 8%" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>ACHIEVEMENTS</p>
          <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: "3rem" }}>Our Track Record</h2>
          <div className="achievements-grid">
            {[
              { number: "11+", label: "Airbnb運営年数" },
              { number: "4.9", label: "平均レビュー評価" },
              { number: "500+", label: "年間ゲスト数" },
              { number: "3", label: "運営施設数" },
            ].map((item, i) => (
              <>
                {i > 0 && (
                  <div key={`divider-${i}`} className="achievements-divider" />
                )}
                <div key={item.label} style={{ padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-en)", fontSize: "3rem", fontWeight: 400, color: "var(--color-accent)", marginBottom: "0.5rem" }}>
                    {item.number}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em" }}>{item.label}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Wuto Brand */}
      <section id="wuto" style={{ background: "var(--color-primary)", padding: 0 }}>
        <div
          style={{
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920') center/cover",
            padding: "5rem 8%",
          }}
        >
          <div style={{ maxWidth: "700px", color: "var(--color-white)" }}>
            <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>OUR BRAND</p>
            <h2 style={{ fontFamily: "var(--font-en)", fontSize: "4rem", fontWeight: 400, letterSpacing: "0.15em", marginBottom: "0.5rem", color: "var(--color-white)" }}>
              Wuto
            </h2>
            <p style={{ fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.2em", marginBottom: "1.5rem", opacity: 0.9 }}>
              暮らすように、泊まる。
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 2, opacity: 0.85 }}>
              Japandiスタイルを取り入れた、スモールラグジュアリーな宿泊体験。
              <br />
              駅近の好立地で、まるで自宅のようにくつろげる滞在をお届けします。
            </p>
          </div>
        </div>

        <div className="wuto-features-grid">
          {[
            { icon: <HomeIcon size={40} strokeWidth={1.5} color="#d4a574" />, title: "Japandi Interior", text: "日本の美意識と北欧デザインの融合。ReCeno、無印良品、飛騨産業など厳選ブランドで統一。" },
            { icon: <TrainFront size={40} strokeWidth={1.5} color="#d4a574" />, title: "Prime Location", text: "全施設が駅徒歩5分以内。東京の下町の暮らしを体験できるロケーション。" },
            { icon: <Sparkles size={40} strokeWidth={1.5} color="#d4a574" />, title: "Premium Amenities", text: "高速Wi-Fi、充実のキッチン設備、こだわりのバスアメニティで快適な滞在を。" },
          ].map((f) => (
            <div key={f.title} style={{ textAlign: "center", padding: "2rem", color: "var(--color-white)" }}>
              <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-en)", fontSize: "1.1rem", fontWeight: 400, letterSpacing: "0.05em", marginBottom: "1rem", color: "var(--color-accent)" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, opacity: 0.85 }}>{f.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", padding: "0 8% 4rem", background: "var(--color-primary)" }}>
          <Link href="/wuto" className="btn-primary">View Our Properties</Link>
        </div>
      </section>

      {/* News */}
      {newsItems.length > 0 && (
        <section id="news" style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={sectionLabel}>NEWS</p>
            <h2 style={sectionTitle}>News &amp; Updates</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {newsItems.map((item) => (
              <Link key={item.id} href="/news" className="news-item">
                <span style={{ fontFamily: "var(--font-en)", fontSize: "0.85rem", color: "var(--color-accent)", minWidth: "100px" }}>
                  {new Date(item.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                </span>
                <span style={{ fontSize: "0.95rem", color: "var(--color-text)" }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Articles */}
      {articles.length > 0 && (
        <section id="articles" style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={sectionLabel}>ARTICLES</p>
            <h2 style={sectionTitle}>コラム</h2>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="article-card">
                <div style={{ height: "180px", backgroundImage: `url('${article.thumbnail?.url ?? FALLBACK_IMAGE}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#eee" }} />
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                    {article.category && (
                      <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--color-accent)", background: "rgba(139,115,85,0.1)", padding: "0.2rem 0.6rem", borderRadius: "3px" }}>
                        {article.category}
                      </span>
                    )}
                    <span style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", color: "var(--color-text-light)" }}>
                      {new Date(article.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.6, marginBottom: "0.8rem" }}>
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.7 }}>
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/articles" className="btn-outline">Read More</Link>
          </div>
        </section>
      )}

      <style>{`
        .hero-cta {
          display: inline-block;
          padding: 1rem 3rem;
          border: 1px solid var(--color-white);
          color: var(--color-white);
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          transition: background 0.3s, color 0.3s;
        }
        .hero-cta:hover { background: var(--color-white); color: var(--color-primary); }

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

        .business-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 900px;
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

        .news-item {
          display: flex;
          gap: 2rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid #eee;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s;
        }
        .news-item:hover { opacity: 0.7; }

        .achievements-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .achievements-divider {
          display: none;
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.2);
        }
        .service-card {
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        @media (min-width: 768px) {
          .achievements-divider { display: block; }
        }
        @media (max-width: 768px) {
          .wuto-features-grid { grid-template-columns: 1fr !important; }
          .business-grid { grid-template-columns: 1fr !important; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .news-item { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </main>
  );
}
