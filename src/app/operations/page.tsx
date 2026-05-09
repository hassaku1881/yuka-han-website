import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, MapPin, Users, TrendingUp, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "民泊運営代行 | Yuka-Han & Co.",
  description:
    "東京東エリアを中心とした民泊運営代行。Airbnb専業、経営者夫婦が直接担当。代行手数料20%、清掃費マージンなし。既存オーナー・事業者の切り替えを随時受け付けています。",
};

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

export default function OperationsPage() {
  return (
    <main style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(20,30,48,0.68), rgba(20,30,48,0.75)), url('/images/hero-operations.jpg') center/cover",
        color: "var(--color-white)",
        padding: "5rem 2rem",
      }}>
        <div style={{ maxWidth: "760px" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>MINPAKU OPERATIONS</p>
          <h1 style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
            fontWeight: 400,
            letterSpacing: "0.04em",
            lineHeight: 1.35,
            marginBottom: "1.5rem",
          }}>
            民泊運営代行
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, opacity: 0.92, lineHeight: 1.9, marginBottom: "0.8rem" }}>
            Airbnb専業。経営者夫婦が直接担当。
          </p>
          <p style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.82rem",
            opacity: 0.75,
            letterSpacing: "0.05em",
          }}>
            <MapPin size={13} />
            東京東エリア（墨田・江東・葛飾・足立・江戸川 他）を中心に対応
          </p>
        </div>
      </section>

      {/* ── お悩み ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={sectionLabel}>CHALLENGES</p>
          <h2 style={{ ...sectionTitle, marginBottom: "1rem" }}>こんな状況、心当たりはありませんか</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 1.9, marginBottom: "3rem" }}>
            インバウンド需要が戻り、民泊市場は活況に見えます。ただ、コロナ後の急拡大期に参入した業者・担当者が多く、
            いま訪れている調整局面への対応が追いついていないケースが増えています。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
            {[
              "代行に任せているが、収益が改善した実感がない",
              "月次レポートは届くが、数字の説明だけで改善提案がない",
              "担当者が変わるたびに、物件のことを一から話し直している",
              "インバウンド需要が回復しているのに、自分の物件だけ波に乗れていない",
              "清掃費・諸経費の内訳を細かく確認したことがない",
              "Airbnbのレビューが4.7前後から上がらず、原因がわからない",
            ].map((text) => (
              <div key={text} style={{
                display: "flex",
                gap: "0.8rem",
                alignItems: "flex-start",
                padding: "1.2rem 1.4rem",
                background: "var(--color-bg)",
                borderRadius: "6px",
                borderLeft: "3px solid var(--color-accent)",
              }}>
                <CheckCircle2 size={16} color="var(--color-accent)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <p style={{ fontSize: "0.88rem", color: "var(--color-primary)", lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2.5rem", fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.9, fontStyle: "italic" }}>
            これらは担当者の怠慢ではなく、多くの場合「構造の問題」です。
            代行業者・清掃業者・オーナーの利益が、必ずしも同じ方向を向いていない——その背景を整理した記事もあわせてご覧ください。
          </p>
          <div style={{ marginTop: "1rem" }}>
            <Link href="/articles" style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}>
              BUSINESS連載を読む →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 選ばれる理由 ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={sectionLabel}>WHY YUKA-HAN</p>
          <h2 style={sectionTitle}>私たちを選ぶ理由</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
          {[
            {
              icon: <Users size={28} strokeWidth={1.5} />,
              title: "経営者夫婦が直接担当",
              body: "立ち上げから軌道に乗るまで、代表自身が直接関わります。担当者の引き継ぎは発生しません。資金繰り・収益構造・今後の展開まで、事業者目線での判断が伴います。大手代行の「担当者制」との最大の違いです。",
            },
            {
              icon: <Star size={28} strokeWidth={1.5} />,
              title: "Airbnb専業。浮き沈みを知っている。",
              body: "Airbnbが日本に広まった黎明期から、民泊新法・コロナ禍・インバウンド急回復・そして現在の調整局面まで。市況が変わっても動ける運営には、変化を経験してきた蓄積が必要です。",
            },
            {
              icon: <TrendingUp size={28} strokeWidth={1.5} />,
              title: "旅人目線のゲスト体験設計",
              body: "私たち夫婦自身が、Airbnbを使って世界中を旅してきました。なぜあの宿は心地よかったのか、何がゲストの記憶に残るのか——ゲストとして感じてきたことが、ホスト側の設計に直結しています。",
            },
            {
              icon: <MapPin size={28} strokeWidth={1.5} />,
              title: "東東京・葛飾に根を張る",
              body: "本社は葛飾区。Wutoも東東京エリアで展開しています。地域の交通・商圏・インバウンドゲストの動線・緊急時の現地対応スピード——地元だからこそ持てる強みです。",
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: "var(--color-white)",
              padding: "2.2rem 2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}>
              <div style={{ color: "var(--color-accent)", marginBottom: "1.2rem" }}>{item.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.9rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── サービス：立ち上げ ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICE 01</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>民泊立ち上げ支援</h2>
          <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", marginBottom: "3rem" }}>
            コンセプト設計から申請・リスティング公開まで。初期から経営者が直接伴走します。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h3 style={{ fontSize: "0.78rem", fontFamily: "var(--font-en)", letterSpacing: "0.18em", color: "var(--color-accent)", marginBottom: "1.2rem" }}>
                WHAT WE DO
              </h3>
              {[
                "収益シミュレーション・コンセプト立案",
                "施設設計・設備・備品の選定（実費＋レシート報告）",
                "民泊申請・住宅宿泊事業法サポート",
                "Airbnbリスティング設計・写真構成アドバイス",
                "オペレーションマニュアル構築",
                "立ち上げ後の初期改善サポート",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.65rem 0", borderBottom: "1px solid #f0ede8" }}>
                  <ArrowRight size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize: "0.78rem", fontFamily: "var(--font-en)", letterSpacing: "0.18em", color: "var(--color-accent)", marginBottom: "1.2rem" }}>
                FEE STRUCTURE
              </h3>
              {[
                { label: "実働・制作費用", value: "¥20,000〜", note: "リスティング作成、マニュアル構築など" },
                { label: "購入物（備品・家具等）", value: "実費のみ", note: "レシート付きで全額ご報告。マージンなし" },
                { label: "企画・コンサルティング費", value: "※", note: "通常は請求しません。短期解約の場合のみ、事前にご説明した金額を請求します" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1rem 0", borderBottom: "1px solid #f0ede8" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-en)", fontSize: "1rem", color: "var(--color-accent)", fontWeight: 400 }}>{item.value}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── サービス：運営代行 ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICE 02</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>フル運営代行</h2>
          <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", marginBottom: "3rem" }}>
            予約管理からゲスト対応・清掃手配・月次改善まで、運営業務を一括でお受けします。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h3 style={{ fontSize: "0.78rem", fontFamily: "var(--font-en)", letterSpacing: "0.18em", color: "var(--color-accent)", marginBottom: "1.2rem" }}>
                WHAT WE DO
              </h3>
              {[
                "予約管理・カレンダー管理",
                "ゲストメッセージ対応（日英中 3言語）",
                "清掃・リネン手配（マージンなし）",
                "チェックイン・アウト対応",
                "消耗品・備品補充（実費のみ）",
                "月次レポート（数値分析＋改善提案）",
                "ADR・LOS・シーズン戦略の継続最適化",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.65rem 0", borderBottom: "1px solid #e8e4de" }}>
                  <ArrowRight size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize: "0.78rem", fontFamily: "var(--font-en)", letterSpacing: "0.18em", color: "var(--color-accent)", marginBottom: "1.2rem" }}>
                FEE STRUCTURE
              </h3>
              {[
                { label: "代行手数料", value: "売上の20%", note: "OTA手数料控除後の売上に対して適用" },
                { label: "清掃費マージン", value: "なし", note: "清掃業者への支払いをそのまま請求。中間マージンは一切取りません" },
                { label: "消耗品・備品", value: "実費のみ", note: "レシート付きで全額ご報告。立替対応します" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1rem 0", borderBottom: "1px solid #e8e4de" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-en)", fontSize: item.value === "なし" ? "0.88rem" : "1rem", color: item.value === "なし" ? "var(--color-text-light)" : "var(--color-accent)", fontWeight: 400 }}>{item.value}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>{item.note}</p>
                </div>
              ))}
              <div style={{ marginTop: "1.8rem", padding: "1.4rem", background: "rgba(139,115,85,0.07)", borderRadius: "6px", borderLeft: "3px solid var(--color-accent)" }}>
                <p style={{ fontSize: "0.82rem", color: "var(--color-primary)", lineHeight: 1.8 }}>
                  私たちの収益はオーナーの収益が伸びてこそ成立します。
                  手数料以外で利益を取る構造を持たないことが、
                  同じ方向を向き続けられる理由です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Airbnb補助ホスト ── */}
      <section style={{ background: "var(--color-white)", padding: "4rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", gap: "3rem", alignItems: "center" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: "80px", height: "80px", borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-accent), #c49a6c)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "white", fontSize: "2rem", lineHeight: 1 }}>★</span>
            </div>
          </div>
          <div>
            <p style={{ ...sectionLabel }}>AIRBNB CO-HOST</p>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "0.8rem" }}>
              Airbnb公認の補助ホストとして登録・活動しています
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85, marginBottom: "1rem" }}>
              Airbnbの補助ホスト制度に登録し、オーナーに代わって正式に運営業務を代行できる立場で活動しています。
              Airbnbのプラットフォームを通じた評価・実績もご確認いただけます。
            </p>
            <a
              href="https://www.airbnb.jp/co-hosts/profile/1368097205517945251"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}
            >
              Airbnb補助ホストプロフィールを見る →
            </a>
          </div>
        </div>
      </section>

      {/* ── 受注について（限定感） ── */}
      <section style={{
        background: "var(--color-primary)",
        padding: "5rem 8%",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.6)" }}>AVAILABILITY</p>
          <h2 style={{ fontFamily: "var(--font-en)", fontSize: "2rem", fontWeight: 400, color: "var(--color-white)", marginBottom: "1.5rem" }}>
            新規受注は随時調整しています
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.82)", lineHeight: 2, marginBottom: "2rem" }}>
            経営者が直接担当するため、同時に携わる案件数には上限があります。
            ひとつひとつ丁寧に向き合うためです。
            <br />
            切り替えや立ち上げをご検討中の方は、早めのご相談をおすすめします。
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
              letterSpacing: "0.08em",
              borderRadius: "4px",
            }}
          >
            まず相談する（無料）
          </Link>
        </div>
      </section>

      {/* ── ご依頼の流れ ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={sectionLabel}>FLOW</p>
          <h2 style={sectionTitle}>ご依頼の流れ</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {[
            {
              step: "01",
              title: "お問い合わせ",
              text: "フォームまたはメールでご連絡ください。現在の運営状況・ご要望を簡単にお知らせいただければ十分です。",
            },
            {
              step: "02",
              title: "ヒアリング・現状確認",
              text: "物件・エリア・現状の収益・課題感をお聞きします。他社からの切り替えをご検討中の場合も、現在のご状況をそのまま共有ください。",
            },
            {
              step: "03",
              title: "プランご提案",
              text: "収益シミュレーション・運営方針・費用感をお伝えします。比較検討していただいて構いません。",
            },
            {
              step: "04",
              title: "ご契約・準備開始",
              text: "内容にご納得いただけたらご契約。立ち上げ支援の場合はここから準備、運営代行切り替えはスムーズに引き継ぎます。",
            },
          ].map((item, i) => (
            <div key={item.step} style={{
              display: "flex",
              gap: "2rem",
              alignItems: "flex-start",
              padding: "2rem 0",
              borderBottom: i < 3 ? "1px solid #eee" : "none",
            }}>
              <div style={{
                minWidth: "52px", height: "52px", borderRadius: "50%",
                background: "var(--color-bg)",
                border: "2px solid var(--color-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-en)", fontSize: "1rem", color: "var(--color-accent)", fontWeight: 400,
                flexShrink: 0,
              }}>
                {item.step}
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 宿泊施設運営支援事業 ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={sectionLabel}>HOSPITALITY SUPPORT</p>
          <h2 style={{ ...sectionTitle, marginBottom: "1rem" }}>宿泊施設運営支援事業</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2, marginBottom: "2.5rem" }}>
            民泊運営代行に加え、インバウンド向けの宿泊施設全般を対象としたコンサルティング・運営支援も行っています。
            ホテル・ホステル・ゲストハウス・サービスアパートメントなど、施設形態を問わずご相談ください。
          </p>
          <div style={{
            padding: "2rem 2.4rem",
            background: "var(--color-white)",
            borderRadius: "8px",
            borderLeft: "4px solid var(--color-accent)",
            marginBottom: "2rem",
          }}>
            <p style={{ fontSize: "0.82rem", fontFamily: "var(--font-en)", letterSpacing: "0.1em", color: "var(--color-accent)", marginBottom: "0.6rem" }}>
              BACKGROUND
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--color-primary)", lineHeight: 1.9 }}>
              国内最大級規模のホステルの企画・開業に携わった経験を背景に、
              スモールから大型施設まで幅広くサポートできる体制を持っています。
              「民泊とは違う、本格的な宿泊施設として展開したい」というご相談も歓迎します。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.2rem", marginBottom: "2.5rem" }}>
            {[
              "施設コンセプト・収益モデル設計",
              "インバウンド対応強化",
              "OTA戦略・リスティング最適化",
              "収益改善・コスト構造の見直し",
              "オペレーション設計・スタッフ研修",
              "開業サポート全般",
            ].map((item) => (
              <div key={item} style={{
                padding: "0.9rem 1rem",
                background: "var(--color-white)",
                borderRadius: "5px",
                fontSize: "0.82rem",
                color: "var(--color-text)",
                lineHeight: 1.6,
              }}>
                {item}
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>
            内容・規模・ご予算によって対応をご相談させていただきます。
            まずはどのような施設・状況なのかをお聞かせいただければ、対応可否・費用感もお伝えできます。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%", textAlign: "center" }}>
        <p style={sectionLabel}>CONTACT</p>
        <h2 style={{ ...sectionTitle, marginBottom: "1rem" }}>まずはご相談ください</h2>
        <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2, marginBottom: "0.5rem" }}>
          他社からの切り替え・内製業務のアウトソース、どちらもお受けしています。
        </p>
        <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "2.5rem", opacity: 0.8 }}>
          現状の運営状況や課題感を簡単に共有いただければ、対応可否と費用感をお伝えします。
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "1rem 3.2rem",
            background: "var(--color-primary)",
            color: "var(--color-white)",
            textDecoration: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.08em",
            borderRadius: "4px",
          }}
        >
          お問い合わせ・ご相談はこちら
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ops-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
