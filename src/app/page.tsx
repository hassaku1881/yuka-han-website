import Link from "next/link";

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

export default function Home() {
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
            ユカハン合同会社は、東京を中心に宿泊施設の企画・開発・運用を行う会社です。
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
              <strong style={{ color: "var(--color-primary)" }}>Yuka &amp; Han</strong> — 創業者夫婦による直接運営。
              <br />
              世界中を旅してきた私たちだからこそ提供できる、最高のおもてなしを。
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ background: "var(--color-primary)", padding: "4rem 8%" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.7)" }}>ACHIEVEMENTS</p>
          <h2 style={{ ...sectionTitle, color: "var(--color-white)", marginBottom: "3rem" }}>Our Track Record</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {[
              { number: "11+", label: "Airbnb運営年数" },
              { number: "4.9", label: "平均レビュー評価" },
              { number: "500+", label: "年間ゲスト数" },
              { number: "3", label: "運営施設数" },
            ].map((item) => (
              <div key={item.label} style={{ padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-en)", fontSize: "3rem", fontWeight: 400, color: "var(--color-accent)", marginBottom: "0.5rem" }}>
                  {item.number}
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em" }}>{item.label}</p>
              </div>
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
            { icon: "🏠", title: "Japandi Interior", text: "日本の美意識と北欧デザインの融合。ReCeno、無印良品、飛騨産業など厳選ブランドで統一。" },
            { icon: "🚉", title: "Prime Location", text: "全施設が駅徒歩5分以内。東京の下町の暮らしを体験できるロケーション。" },
            { icon: "✨", title: "Premium Amenities", text: "高速Wi-Fi、充実のキッチン設備、こだわりのバスアメニティで快適な滞在を。" },
          ].map((f) => (
            <div key={f.title} style={{ textAlign: "center", padding: "2rem", color: "var(--color-white)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{f.icon}</div>
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

      {/* Service */}
      <section id="service" style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>FOR OWNERS</p>
          <h2 style={sectionTitle}>民泊運営代行・サポート</h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-light)", marginTop: "1rem" }}>
            Airbnb運営11年の実績を活かし、物件の収益最大化をサポートします。
          </p>
        </div>

        <div className="service-points-grid">
          {[
            { num: "01", title: "運営代行", text: "予約管理、ゲスト対応、清掃手配まで。オーナー様の手間をゼロに。" },
            { num: "02", title: "開業サポート", text: "物件選定から許認可取得、内装デザインまで新規参入をフルサポート。" },
            { num: "03", title: "収益改善", text: "価格最適化、リスティング改善で既存物件の収益アップをご提案。" },
          ].map((p) => (
            <div key={p.num} style={{ background: "var(--color-white)", padding: "2.5rem 2rem", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <span style={{ fontFamily: "var(--font-en)", fontSize: "2rem", fontWeight: 400, color: "var(--color-accent)", display: "block", marginBottom: "1rem" }}>
                {p.num}
              </span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem" }}>{p.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.8 }}>{p.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/service" className="btn-primary" style={{ marginRight: "1rem" }}>詳しく見る</Link>
          <Link href="/contact" className="btn-outline">お問い合わせ</Link>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>ARTICLES</p>
          <h2 style={sectionTitle}>コラム</h2>
        </div>

        <div className="articles-grid">
          {[
            {
              image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
              category: "INTERIOR",
              date: "2025.01.20",
              title: "Japandiスタイルとは？Wutoのインテリアへのこだわり",
              excerpt: "日本の美意識と北欧デザインを融合させたJapandiスタイル。Wutoで採用しているインテリアブランドと選定理由をご紹介します。",
            },
            {
              image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600",
              category: "AREA GUIDE",
              date: "2025.01.15",
              title: "お花茶屋の魅力｜下町の暮らしを体験する",
              excerpt: "東京の下町・お花茶屋エリアの魅力をご紹介。地元民に愛される商店街やおすすめスポットをお伝えします。",
            },
            {
              image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
              category: "BUSINESS",
              date: "2025.01.10",
              title: "民泊運営で大切にしている3つのこと",
              excerpt: "私たちYuka & Hanが運営経験から学んだ、ゲストに喜ばれる民泊運営のポイントを共有します。",
            },
          ].map((article) => (
            <Link key={article.title} href="/articles" className="article-card">
              <div style={{ height: "180px", backgroundImage: `url('${article.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--color-accent)", background: "rgba(139,115,85,0.1)", padding: "0.2rem 0.6rem", borderRadius: "3px" }}>
                    {article.category}
                  </span>
                  <span style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", color: "var(--color-text-light)" }}>
                    {article.date}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.6, marginBottom: "0.8rem" }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.7 }}>
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/articles" className="btn-outline">Read More</Link>
        </div>
      </section>

      {/* News */}
      <section id="news" style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>NEWS</p>
          <h2 style={sectionTitle}>News &amp; Updates</h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {[
            { date: "2025.01.15", title: "Wuto Ohanajaya が Airbnb ゲストチョイス 2024 を受賞しました" },
            { date: "2024.12.01", title: "民泊運営代行サービスの提供を開始しました" },
            { date: "2024.10.20", title: "公式ウェブサイトをリニューアルしました" },
          ].map((item) => (
            <Link key={item.title} href="/news" className="news-item">
              <span style={{ fontFamily: "var(--font-en)", fontSize: "0.85rem", color: "var(--color-accent)", minWidth: "100px" }}>
                {item.date}
              </span>
              <span style={{ fontSize: "0.95rem", color: "var(--color-text)" }}>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

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

        .service-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
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

        @media (max-width: 768px) {
          .wuto-features-grid { grid-template-columns: 1fr !important; }
          .service-points-grid { grid-template-columns: 1fr !important; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .news-item { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </main>
  );
}
