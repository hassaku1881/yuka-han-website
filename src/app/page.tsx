import Link from "next/link";
import { Home as HomeIcon, TrainFront, Sparkles, Building2, Globe, Briefcase, Star } from "lucide-react";
import { getArticles, getNews } from "@/lib/microcms";
import HeroSlider from "@/components/HeroSlider";
import { reviews } from "@/lib/reviews";

const PROPERTY_THUMBS = [
  { name: "Wutoお花茶屋 1F", image: "/images/properties/ohanajaya-1f-main.jpg" },
  { name: "Wutoお花茶屋 2F", image: "/images/properties/ohanajaya-2f-main.jpg" },
  { name: "Wuto立石", image: "/images/properties/tateishi-main.jpg" },
  { name: "Wuto堀切", image: "/images/properties/horikiri-main.jpg" },
  { name: "Wuto青砥", image: "/images/properties/aoto-main.jpg" },
];

// 抜粋する3レビュー（バランスのとれた国・分量）
const HOMEPAGE_REVIEW_INDICES = [0, 1, 8]; // 日本・アメリカ・ニュージーランド

export const revalidate = 60;

const FALLBACK_IMAGES: Record<string, string> = {
  BUSINESS:     "/images/articles-business.jpg",
  INTERIOR:     "/images/articles-interior.jpg",
  "AREA GUIDE": "/images/articles-area-guide.jpg",
};
const FALLBACK_IMAGE_DEFAULT = "/images/articles-interior.jpg";
const getFallback = (category?: string) =>
  (category && FALLBACK_IMAGES[category]) || FALLBACK_IMAGE_DEFAULT;

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
    getNews({ limit: 3, orders: "-publishedAt" }),
  ]);
  return (
    <main style={{ paddingTop: 0 }}>
      {/* Hero Slider */}
      <HeroSlider />

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
            落ち着ける日本の暮らしを軸にした上質な滞在体験をお届けしています。
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)", marginBottom: "2rem" }}>
            主力ブランド「Wuto」は、旅暮らしをしていた夫婦が
            <br />
            「自分たちが本当に泊まりたい場所」を追い求めて作った宿泊施設。
            <br />
            Japandiな内装、本物の眠り、こだわりのアメニティで、
            <br />
            日常と非日常がやさしく溶けあう滞在をお届けします。
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

      {/* Philosophy bridge */}
      <section style={{
        background: "var(--color-bg)",
        padding: "6rem 8%",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p style={sectionLabel}>OUR PHILOSOPHY</p>
          <h2 style={{ ...sectionTitle, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", lineHeight: 1.5, marginBottom: "2.5rem" }}>
            日常と非日常の境目で、<br />ほっと息をつける場所を。
          </h2>
          <p style={{ fontSize: "0.98rem", lineHeight: 2.3, color: "var(--color-text-light)", marginBottom: "2rem" }}>
            観光地を駆け足でめぐるだけの旅ではなく、<br />
            その土地に溶け込み、地元の時間に身を委ねる滞在を。<br />
            一日の終わりにほっと息をつける場所があってこそ、<br />
            旅はより深く、豊かなものになる。
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 2.3, color: "var(--color-text-light)" }}>
            私たちが大切にしているのは、上質な日常の延長線上にある滞在。<br />
            無垢材の温もり、本物の眠り、ゆっくり淹れる一杯のコーヒー——<br />
            そんな当たり前の心地よさを、旅の中にもしっかりと。
          </p>
        </div>
      </section>

      {/* Business */}
      <section id="business" style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
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
              text: "落ち着ける日本の暮らしを軸にしたJapandiスタイル宿泊ブランド「Wuto」の企画・開発・運営。",
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

      {/* Wuto Brand */}
      <section id="wuto" style={{ background: "var(--color-primary)", padding: 0 }}>
        <div
          style={{
            minHeight: "560px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "linear-gradient(rgba(20,30,48,0.55), rgba(20,30,48,0.55)), url('/images/hero-wuto.jpg') center/cover",
            padding: "5rem 8%",
          }}
        >
          <div style={{ maxWidth: "760px", color: "var(--color-white)" }}>
            <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>OUR BRAND</p>
            <h2 style={{ fontFamily: "var(--font-en)", fontSize: "4rem", fontWeight: 400, letterSpacing: "0.15em", marginBottom: "0.5rem", color: "var(--color-white)" }}>
              Wuto
            </h2>
            <p style={{ fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.2em", marginBottom: "2rem", opacity: 0.9 }}>
              暮らすように、泊まる。
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 2.2, opacity: 0.88, marginBottom: "1.5rem" }}>
              旅暮らしをしていた夫婦が、自分たちが本当に泊まりたい場所を追い求めて作った宿泊施設。
              <br />
              落ち着ける日本の暮らしを軸に、日常と非日常がやさしく溶けあう滞在を。
            </p>
            <p style={{
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              opacity: 0.65,
              fontFamily: "var(--font-en)",
            }}>
              Wuto = 烏兎 — 太陽（烏）と月（兎）、移ろう時のやわらかな境目。
            </p>
          </div>
        </div>

        <div className="wuto-features-grid">
          {[
            { icon: <HomeIcon size={40} strokeWidth={1.5} color="#d4a574" />, title: "Japandi Interior", text: "無垢材を中心にした、上質で温かみのある空間。Re:CENO・無印良品・飛騨産業など、こだわりのブランドを厳選。" },
            { icon: <Sparkles size={40} strokeWidth={1.5} color="#d4a574" />, title: "Real Comfort", text: "ふかふかの羽毛布団、肌触りのよいリネン、旅先で気に入って選んだアメニティ。本物のくつろぎを、滞在の中心に。" },
            { icon: <TrainFront size={40} strokeWidth={1.5} color="#d4a574" />, title: "Local Experience", text: "ここで暮らす2人だからこそ知る、葛飾の日常。観光地だけでは味わえない、東京下町の時間の流れを体験。" },
          ].map((f) => (
            <div key={f.title} style={{ textAlign: "center", padding: "2rem", color: "var(--color-white)" }}>
              <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-en)", fontSize: "1.1rem", fontWeight: 400, letterSpacing: "0.05em", marginBottom: "1rem", color: "var(--color-accent)" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, opacity: 0.85 }}>{f.text}</p>
            </div>
          ))}
        </div>

        {/* 評価バッジ */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          padding: "0 8% 2.5rem",
          background: "var(--color-primary)",
          flexWrap: "wrap",
        }}>
          <div style={{ textAlign: "center", color: "var(--color-white)" }}>
            <p style={{ fontFamily: "var(--font-en)", fontSize: "2rem", fontWeight: 300, lineHeight: 1, color: "var(--color-accent)" }}>4.97</p>
            <p style={{ fontSize: "0.72rem", opacity: 0.7, letterSpacing: "0.05em", marginTop: "0.3rem" }}>Airbnb 5施設平均</p>
          </div>
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.2)" }} />
          <div style={{ textAlign: "center", color: "var(--color-white)" }}>
            <p style={{ fontFamily: "var(--font-en)", fontSize: "2rem", fontWeight: 300, lineHeight: 1, color: "var(--color-accent)" }}>5/5</p>
            <p style={{ fontSize: "0.72rem", opacity: 0.7, letterSpacing: "0.05em", marginTop: "0.3rem" }}>全施設 ゲストチョイス獲得</p>
          </div>
        </div>

        {/* 施設サムネイル */}
        <div style={{ background: "var(--color-primary)", padding: "1rem 8% 3rem" }}>
          <div className="property-thumbs">
            {PROPERTY_THUMBS.map((p) => (
              <Link key={p.name} href="/wuto" className="property-thumb">
                <div
                  className="property-thumb-image"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <p style={{
                  fontSize: "0.78rem",
                  color: "var(--color-white)",
                  marginTop: "0.7rem",
                  letterSpacing: "0.03em",
                  textAlign: "center",
                }}>
                  {p.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "0 8% 5rem", background: "var(--color-primary)" }}>
          <Link href="/wuto" className="btn-primary">Wutoを詳しく見る</Link>
        </div>
      </section>

      {/* Reviews preview */}
      <section style={{ background: "var(--color-bg)", padding: "5rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={sectionLabel}>VOICES FROM AROUND THE WORLD</p>
            <h2 style={sectionTitle}>世界中のゲストから</h2>
          </div>

          <div className="homepage-reviews">
            {HOMEPAGE_REVIEW_INDICES.map((idx) => {
              const r = reviews[idx];
              return (
                <div key={idx} className="homepage-review-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} size={13} fill="var(--color-accent)" color="var(--color-accent)" />
                      ))}
                    </div>
                    <span style={{ fontSize: "1.3rem" }}>{r.flag}</span>
                  </div>
                  <p style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.95,
                    color: "var(--color-text-light)",
                    fontStyle: "italic",
                    marginBottom: "1.2rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    &ldquo;{r.ja}&rdquo;
                  </p>
                  <p style={{
                    fontSize: "0.78rem",
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-en)",
                    letterSpacing: "0.05em",
                  }}>
                    — {r.author}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/wuto#reviews" className="btn-outline">すべてのレビューを見る</Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>NEWS</p>
          <h2 style={sectionTitle}>お知らせ</h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {newsItems.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-light)", padding: "2rem 0" }}>
              お知らせはありません。
            </p>
          ) : (
            newsItems.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`} className="news-item-vertical">
                <span style={{ fontFamily: "var(--font-en)", fontSize: "0.8rem", color: "var(--color-accent)", display: "block", marginBottom: "0.4rem" }}>
                  {new Date(item.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                </span>
                <span style={{ fontSize: "0.95rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item.title}</span>
              </Link>
            ))
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/news" className="btn-outline">お知らせ一覧を見る</Link>
        </div>
      </section>

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
                <div style={{ height: "180px", backgroundImage: `url('${article.thumbnail?.url ?? getFallback(article.category)}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#eee" }} />
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
            <Link href="/articles" className="btn-outline">コラム一覧を見る</Link>
          </div>
        </section>
      )}

      <style>{`
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

        .news-item-vertical {
          display: block;
          padding: 1.2rem 0;
          border-bottom: 1px solid #eee;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s;
        }
        .news-item-vertical:hover { opacity: 0.7; }

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
          .business-grid { grid-template-columns: 1fr !important; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .property-thumbs { grid-template-columns: repeat(2, 1fr) !important; }
          .homepage-reviews { grid-template-columns: 1fr !important; }
          .news-item { flex-direction: column; gap: 0.5rem; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .property-thumbs { grid-template-columns: repeat(3, 1fr) !important; }
          .homepage-reviews { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
