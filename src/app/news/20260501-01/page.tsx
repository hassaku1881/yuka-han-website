import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【ご報告】2026年5月1日付 組織変更のお知らせ（株式会社化）| 株式会社ユカハン",
  description:
    "ユカハン合同会社は2026年5月1日付で株式会社ユカハンへ組織変更いたしました。あわせて約4,000万円の資金調達を実施し、体制を強化しております。",
};

export default function AnnouncementPage() {
  return (
    <>
      <style>{`
        .ann-wrapper {
          width: 100%;
          background-color: #eae6df;
          padding: 40px 0 60px;
        }
        .ann-container {
          max-width: 560px;
          margin: 0 auto;
          background-color: #FAFAF8;
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
          color: #333333;
        }
        .ann-header-table { border-bottom: 1px solid #e0dbd2; border-collapse: collapse; width: 100%; }
        .ann-hero { padding: 44px 48px 40px; border-bottom: 1px solid #e0dbd2; }
        .ann-hero-date { font-size: 11px; color: #8B7355; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 20px; }
        .ann-hero-headline {
          font-family: 'Georgia', 'Hiragino Mincho ProN', '游明朝', YuMincho, serif;
          font-size: 22px; font-weight: normal; color: #2C3E50;
          line-height: 1.75; margin: 0 0 20px; letter-spacing: 0.03em;
        }
        .ann-hero-lead { font-size: 13px; color: #666666; line-height: 2.05; margin: 0 0 28px; }
        .ann-btn { display: inline-block; font-size: 11px; letter-spacing: 0.2em; color: #2C3E50 !important; text-decoration: none; border-bottom: 1px solid #2C3E50; padding-bottom: 3px; text-transform: uppercase; }
        .ann-stats { background-color: #f0ece3; padding: 32px 48px; border-bottom: 1px solid #e0dbd2; }
        .ann-eyebrow { font-size: 10px; letter-spacing: 0.22em; color: #8B7355; text-transform: uppercase; margin-bottom: 24px; }
        .ann-stats-row { display: flex; flex-wrap: wrap; align-items: flex-start; }
        .ann-stat-item { flex: 1; min-width: 80px; padding-right: 12px; }
        .ann-stat-num { font-family: 'Georgia', serif; font-size: 24px; font-weight: normal; color: #2C3E50; line-height: 1.1; margin-bottom: 4px; }
        .ann-stat-num .unit { font-size: 12px; font-family: sans-serif; }
        .ann-stat-desc { font-size: 10px; color: #8B7355; letter-spacing: 0.1em; }
        .ann-stat-vline { width: 1px; background-color: #ccc5b8; margin: 0 12px 0 0; flex-shrink: 0; align-self: stretch; }
        .ann-body { padding: 0 48px; }
        .ann-section { padding: 40px 0; border-bottom: 1px solid #e0dbd2; }
        .ann-section:last-child { border-bottom: none; }
        .ann-section-eyebrow { font-size: 10px; color: #8B7355; letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 14px; }
        .ann-section h2 { font-family: 'Georgia', 'Hiragino Mincho ProN', '游明朝', YuMincho, serif; font-size: 18px; font-weight: normal; color: #2C3E50; line-height: 1.7; margin: 0 0 20px; letter-spacing: 0.02em; }
        .ann-section p { font-size: 13.5px; color: #4a4740; line-height: 2.1; margin: 0 0 16px; }
        .ann-section p:last-child { margin-bottom: 0; }
        .ann-pull-quote { border-left: 2px solid #8B7355; padding: 4px 0 4px 20px; margin: 22px 0; }
        .ann-pull-quote p { font-family: 'Georgia', 'Hiragino Mincho ProN', serif; font-size: 13.5px; color: #4a4740; line-height: 2.2; margin: 0; font-style: italic; }
        .ann-consult-wrap { margin-top: 22px; }
        .ann-consult-label { font-size: 10px; color: #8B7355; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 12px; }
        .ann-consult-list { list-style: none; padding: 0; margin: 0; }
        .ann-consult-list li { font-size: 13px; color: #4a4740; line-height: 1.8; padding: 10px 0; border-bottom: 1px solid #e4dfd6; display: flex; align-items: baseline; gap: 10px; }
        .ann-consult-list li:last-child { border-bottom: none; }
        .ann-consult-list li::before { content: "—"; color: #8B7355; flex-shrink: 0; font-size: 11px; }
        .ann-cta { margin-top: 28px; }
        .ann-btn-accent { display: inline-block; font-size: 11px; letter-spacing: 0.2em; color: #8B7355 !important; text-decoration: none; border-bottom: 1px solid #8B7355; padding-bottom: 3px; text-transform: uppercase; }
        .ann-closing { background-color: #f0ece3; padding: 40px 48px; border-top: 1px solid #e0dbd2; }
        .ann-closing p { font-size: 13.5px; color: #4a4740; line-height: 2.1; margin: 0 0 16px; }
        .ann-closing p:last-child { margin-bottom: 0; }
        .ann-footer-table { border-top: 1px solid #e0dbd2; border-collapse: collapse; width: 100%; }
        .ann-copyright { padding: 14px 48px; font-size: 10px; color: #b5aca0; letter-spacing: 0.1em; border-top: 1px solid #e0dbd2; background-color: #eae6df; }
        @media only screen and (max-width: 600px) {
          .ann-hero, .ann-body, .ann-stats, .ann-closing { padding-left: 22px !important; padding-right: 22px !important; }
          .ann-copyright { padding-left: 22px; padding-right: 22px; }
          .ann-header-table td, .ann-footer-table td { display: block !important; width: 100% !important; text-align: left !important; box-sizing: border-box; }
          .ann-header-cell-l, .ann-footer-cell-l { padding: 22px 22px 6px 22px !important; }
          .ann-header-cell-r { padding: 0 22px 18px 22px !important; text-align: left !important; }
          .ann-footer-cell-r { padding: 6px 22px 22px 22px !important; text-align: left !important; }
          .ann-hero-headline { font-size: 19px !important; }
        }
      `}</style>

      <div style={{ paddingTop: "72px" }}>
        <div className="ann-wrapper">
          <div className="ann-container">

            {/* Header */}
            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border={0} className="ann-header-table">
              <tbody><tr>
                <td align="left" valign="middle" className="ann-header-cell-l" style={{ padding: "28px 0 28px 48px" }}>
                  <a href="https://yuka-han.com/" style={{ textDecoration: "none", lineHeight: 0, display: "inline-block" }}>
                    <img src="https://mcusercontent.com/036dc71bb243ab7c4451385db/images/c54435a9-4276-eff8-11f1-2a6a5a22bcba.png"
                      alt="ユカハン" width="100"
                      style={{ height: "24px", width: "auto", display: "block", border: "none" }} />
                  </a>
                </td>
                <td align="right" valign="middle" className="ann-header-cell-r" style={{ padding: "28px 48px 28px 0", fontSize: "10px", letterSpacing: "0.22em", color: "#8B7355", textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                  ご報告
                </td>
              </tr></tbody>
            </table>

            {/* Hero image */}
            <div style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
              <img src="https://mcusercontent.com/036dc71bb243ab7c4451385db/images/b06d8e22-376e-40d2-4724-b55c74ba3ede.jpg"
                alt="Wuto — ジャパンディインテリア" width="560"
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>

            {/* Hero text */}
            <div className="ann-hero">
              <div className="ann-hero-date">May 2026</div>
              <h1 className="ann-hero-headline">株式会社ユカハンとして、<br />宿泊運営支援の体制を<br />強化しました</h1>
              <p className="ann-hero-lead">私たちは、宿泊業の現場で積み重ねてきた経験と実績をもとに、より安心してご相談いただける体制を整えました。事業拡大に伴う株式会社化と、コーポレートWebサイトのリニューアルについて、ご報告させていただきます。</p>
              <a href="https://yuka-han.com/" className="ann-btn">新しいWebサイトを見る →</a>
            </div>

            {/* Stats */}
            <div className="ann-stats">
              <div className="ann-eyebrow">直営物件 / 直近6ヶ月（2025.11 – 2026.4）</div>
              <div className="ann-stats-row">
                <div className="ann-stat-item">
                  <div className="ann-stat-num">95.1<span className="unit"> %</span></div>
                  <div className="ann-stat-desc">稼働率</div>
                </div>
                <div className="ann-stat-vline"></div>
                <div className="ann-stat-item">
                  <div className="ann-stat-num">4.99<span className="unit"> ★</span></div>
                  <div className="ann-stat-desc">レビュー平均</div>
                </div>
                <div className="ann-stat-vline"></div>
                <div className="ann-stat-item">
                  <div className="ann-stat-num">100<span className="unit"> %</span></div>
                  <div className="ann-stat-desc">ゲストチョイス率<br /><span style={{ fontSize: "9px", color: "#a89a83" }}>（うち上位5%: 60%）</span></div>
                </div>
              </div>
              <div style={{ height: "1px", backgroundColor: "#d0c9be", margin: "24px 0" }}></div>
              <div className="ann-eyebrow">ホストアカウント / 通算（補助ホスト含む）</div>
              <div className="ann-stats-row">
                <div className="ann-stat-item">
                  <div className="ann-stat-num">4.97<span className="unit"> ★</span></div>
                  <div className="ann-stat-desc">レビュー平均</div>
                </div>
                <div className="ann-stat-vline"></div>
                <div className="ann-stat-item">
                  <div className="ann-stat-num">11<span className="unit"> 年</span></div>
                  <div className="ann-stat-desc">運営年数</div>
                </div>
                <div className="ann-stat-vline"></div>
                <div className="ann-stat-item">
                  <div className="ann-stat-num" style={{ fontSize: "13px", paddingTop: "5px", lineHeight: 1.5 }}>スーパー<br />ホスト</div>
                  <div className="ann-stat-desc" style={{ marginTop: "2px" }}>継続中</div>
                </div>
              </div>
              <div style={{ marginTop: "14px" }}>
                <a href="https://www.airbnb.jp/co-hosts/profile/1368097205517945251" style={{ fontSize: "11px", color: "#8B7355", letterSpacing: "0.08em", textDecoration: "none", borderBottom: "1px solid #8B7355", paddingBottom: "2px" }}>補助ホストアカウントを見る →</a>
              </div>
            </div>

            {/* Body */}
            <div className="ann-body">

              <div className="ann-section">
                <div className="ann-section-eyebrow">01 &nbsp;株式会社化</div>
                <h2>宿泊運営支援の体制を、<br />さらに強化しました</h2>
                <p>このたび、ユカハン合同会社は事業拡大に伴い、<strong>2026年5月1日付で株式会社ユカハン</strong>として新たな体制となりました。</p>
                <p>私たちはこれまで、コロナ前から宿泊業界に携わり、民泊・旅館業・運営代行など、さまざまな形の宿泊事業に関わってきました。現在は直営施設が5件まで増え、運営代行としてお預かりする物件数も増加し、運営代行に関するご相談もありがたいことに多数いただいております。</p>
                <p>世界情勢の変化や物価上昇、インバウンド需要の変化など、宿泊業を取り巻く環境が大きく変わるなかでも、<strong>稼働率と単価の最適化、安定した高レビュー獲得による収益の最大化と運営の安定化</strong>を実現できていることは、私たちにとって大きな自信にもなっています。</p>
                <p>こうした事業のさらなる拡大に向けて、このたび<strong>約4,000万円の資金調達</strong>を実施いたしました。その結果として資本金も600万円から3,000万円へと増資となり、より安心してご相談いただける体制を整えております。</p>
              </div>

              <div className="ann-section">
                <div className="ann-section-eyebrow">02 &nbsp;運営への考え方</div>
                <h2>価格を下げるだけではない、<br />宿泊運営の改善を</h2>
                <p><strong>運営のベースにあるもの。</strong> 業界経験とノウハウ、日々の数値管理、リスティングの継続的な改善——そうした「当たり前」を徹底することで、価格を大きく下げて稼働を取りにいくのではなく、物件の魅力づくり・写真・リスティング・価格調整・ゲスト対応を総合的に見直し、単価と稼働の両立を目指しています。</p>
                <p><strong>その先で目指すもの。</strong> 誰かの「家」ではなく「住宅を利用した宿泊施設」になっていることも多い日本の「民泊（Minpaku）」。そんな状況のなかでも私たちは、シェアリングエコノミー、ローカルな体験、ホストとの交流——Airbnbや民泊が本来持っていた魅力を、あらためて大切にしていきたいと考えています。</p>
                <div className="ann-pull-quote">
                  <p>どのような魅力を伝えるか。<br />
                  どのような写真で見せるか。<br />
                  どの価格帯で、どのタイミングで販売するか。<br />
                  ゲストにどのような体験を届けるか。</p>
                </div>
                <p>そうした一つひとつの積み重ねが、稼働率や単価、レビュー、リピートにつながっていくと考えています。</p>
              </div>

              <div className="ann-section">
                <div className="ann-section-eyebrow">03 &nbsp;Webサイト</div>
                <h2>コーポレートサイトを<br />リニューアルしました</h2>
                <p>株式会社化にあわせて、コーポレートWebサイトもリニューアルいたしました。会社概要や事業内容だけでなく、民泊・旅館業に関する専門的なコラムも公開しています。</p>
                <p>立ち上げ、価格設定、ゲスト対応、運営改善など、実際に現場で向き合ってきたからこそ書ける内容を、できるだけ具体的にまとめています。宿泊事業を検討されている方や、すでに運営しているものの改善に悩まれている方にとって、少しでも参考になるサイトを目指しています。</p>
                <div className="ann-cta">
                  <a href="https://yuka-han.com/" className="ann-btn">新しいWebサイトを見る →</a>
                </div>
                <div className="ann-cta" style={{ marginTop: "10px" }}>
                  <a href="https://yuka-han.com/articles" className="ann-btn">専門コラムを読む →</a>
                </div>
              </div>

              <div className="ann-section">
                <div className="ann-section-eyebrow">04 &nbsp;ご相談</div>
                <h2>新規のご相談も、<br />受け付けています</h2>
                <p>体制強化により、新規のご相談も受け付けております。民泊・旅館業の立ち上げ、既存物件の運営改善、運営代行、運営代行業者の切り替えなど、宿泊事業に関するお悩みがありましたら、お気軽にご相談ください。</p>
                <p>また、既にお取引いただいている皆さまにおかれましても、お知り合いで宿泊事業にお悩みの方がいらっしゃいましたら、ぜひご紹介いただけますと幸いです。</p>
                <div className="ann-consult-wrap">
                  <div className="ann-consult-label">ご相談内容の例</div>
                  <ul className="ann-consult-list">
                    <li>民泊や旅館業を始めたい</li>
                    <li>所有している物件を宿泊事業として活用できるか知りたい</li>
                    <li>すでに運営しているが、稼働率や単価に課題がある</li>
                    <li>写真、家具、リスティング文、価格設定を見直したい</li>
                    <li>ゲスト対応や清掃体制を整えたい</li>
                    <li>運営代行を依頼したい</li>
                    <li>運営代行業者の切り替えを検討している</li>
                  </ul>
                </div>
                <div className="ann-cta">
                  <a href="https://yuka-han.com/contact" className="ann-btn-accent">宿泊運営について相談する →</a>
                </div>
                <div className="ann-cta" style={{ marginTop: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#6b6b6b", letterSpacing: "0.04em" }}>またはメールで <a href="mailto:contact@yuka-han.com" style={{ color: "#6b6b6b", textDecoration: "underline" }}>contact@yuka-han.com</a> までご連絡ください</span>
                </div>
                <div className="ann-cta" style={{ marginTop: "28px" }}>
                  <a href="https://yuka-han.com/operations" className="ann-btn">運営代行について詳しく見る →</a>
                </div>
              </div>

            </div>

            {/* Closing */}
            <div className="ann-closing">
              <p>今後も、ひとつひとつの物件と丁寧に向き合いながら、地域に根ざした宿泊体験をつくっていけるよう努めてまいります。</p>
              <p>株式会社ユカハンとして、より一層信頼していただける運営体制を整え、宿泊事業に関わる皆さまのお力になれるよう取り組んでまいります。</p>
              <p>今後とも、どうぞよろしくお願いいたします。</p>
              <p style={{ marginTop: "24px", textAlign: "right", fontSize: "13.5px", color: "#4a4740", lineHeight: 1.9 }}>
                株式会社ユカハン<br />
                代表取締役　范　凱翔<br />
                代表取締役　山本悠佳
              </p>
            </div>

            {/* Footer */}
            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border={0} className="ann-footer-table">
              <tbody><tr>
                <td align="left" valign="middle" className="ann-footer-cell-l" style={{ padding: "28px 0 28px 48px" }}>
                  <div style={{ fontFamily: "'Georgia', serif", fontSize: "13px", color: "#2C3E50", letterSpacing: "0.08em" }}>
                    株式会社ユカハン
                    <small style={{ display: "block", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "10px", color: "#8B7355", letterSpacing: "0.15em", marginTop: "4px" }}>Yuka-Han &amp; Co.</small>
                  </div>
                </td>
                <td align="right" valign="middle" className="ann-footer-cell-r" style={{ padding: "28px 48px 28px 0" }}>
                  <a href="https://yuka-han.com/" style={{ display: "block", fontSize: "11px", color: "#8B7355", textDecoration: "none", letterSpacing: "0.08em", marginBottom: "4px" }}>yuka-han.com</a>
                  <a href="https://yuka-han.com/contact" style={{ display: "block", fontSize: "11px", color: "#8B7355", textDecoration: "none", letterSpacing: "0.08em" }}>お問い合わせ</a>
                </td>
              </tr></tbody>
            </table>

            <div className="ann-copyright">
              &copy; 2026 株式会社ユカハン. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
