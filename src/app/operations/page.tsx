import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, MapPin, Building, BarChart3, Compass, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "民泊運営代行 | Yuka-Han & Co.",
  description:
    "東京の東エリアを中心とした民泊運営代行。Airbnb運営11年、ホテル・大規模宿泊施設の開発経験を背景に、運営代行と収益改善を提供します。",
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

const subHeading: React.CSSProperties = {
  fontSize: "0.78rem",
  fontFamily: "var(--font-en)",
  letterSpacing: "0.18em",
  color: "var(--color-accent)",
  fontWeight: 600,
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
        background: "linear-gradient(rgba(20,30,48,0.6), rgba(20,30,48,0.7)), url('/images/20250711-02.jpg') center/cover",
        color: "var(--color-white)",
        padding: "5rem 2rem",
      }}>
        <div style={{ maxWidth: "780px" }}>
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
          <p style={{ fontSize: "1rem", fontWeight: 300, opacity: 0.92, lineHeight: 1.95, marginBottom: "1rem" }}>
            Airbnb運営11年、ホテル・大規模宿泊施設の開発経験を背景に、
            <br />
            民泊の運営代行と収益改善を提供します。
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
            東京の東エリア（葛飾・墨田・江東・足立・江戸川 ほか）を中心に対応
          </p>
        </div>
      </section>

      {/* ── お悩み ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={sectionLabel}>CHALLENGES</p>
          <h2 style={{ ...sectionTitle, marginBottom: "1.5rem" }}>こんな状況、心当たりはありませんか</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2, marginBottom: "3rem" }}>
            インバウンド需要の急回復から数年が経過し、民泊市場は調整局面に入っています。
            自然に埋まっていた予約が入らなくなる、収益が思うように伸びない。これらは多くの場合、
            運営体制が市況変化に追いついていないことに起因します。
          </p>
          <div className="ops-pain-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
            {[
              "以前と同じ運営をしているのに、予約が入らなくなり採算が悪化している",
              "1〜2件目はうまくいったが、3件目以降の収益がなかなか伸びない",
              "月次レポートに数字は並ぶが、運営の中身が見えてこない",
              "メッセージ対応は速いが、改善提案や収益向上の打ち手が出てこない",
              "クレームが増えているが、原因も対策もはっきりしないまま",
              "Airbnbのレビュースコアが4.8前後から上に動かない",
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
          <p style={{ marginTop: "2rem", fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.95 }}>
            なお、レビュースコア4.8は一見高く見えますが、私たちの基準では改善余地が大きいサインと捉えています。
            運営の構造的な背景については、BUSINESS連載でも整理しています。
          </p>
          <div style={{ marginTop: "0.8rem" }}>
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
          <h2 style={sectionTitle}>選ばれる理由</h2>
        </div>
        <div className="ops-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
          {[
            {
              icon: <BarChart3 size={28} strokeWidth={1.5} />,
              title: "Airbnb運営11年の実績",
              body: "Airbnb日本展開の黎明期から現在の調整局面まで、市況の浮き沈みを経験してきました。短期の波に振り回されず、変化に対応した運営判断ができる蓄積があります。",
            },
            {
              icon: <Building size={28} strokeWidth={1.5} />,
              title: "ホテル・大規模宿泊施設開発のバックグラウンド",
              body: "国内最大級規模のホステル企画・開業や、大手不動産会社との協働実績があります。民泊運営の枠を超えた、宿泊事業全体の知見をベースにしています。",
            },
            {
              icon: <Compass size={28} strokeWidth={1.5} />,
              title: "マーケティング・収益設計の専門性",
              body: "OCC・LOS・ADR・GOPなどの経営指標を起点に、リスティング戦略・OTAチャネル設計・価格運用までを一貫して設計します。数値の裏付けを伴う改善提案ができる体制です。",
              note: "※ OCC：稼働率／LOS：平均宿泊日数／ADR：1泊あたりの平均販売単価／GOP：運営から生まれる利益／OTA：Airbnb・Booking.com等の予約サイト。",
            },
            {
              icon: <MapPin size={28} strokeWidth={1.5} />,
              title: "東京の東エリアに拠点を置く強み",
              body: "本社は葛飾区。成田・羽田の両空港、都心へのアクセスが良く、下町情緒と暮らしのリアリティが残るインバウンド人気エリアです。地元ならではのお店紹介や、現場での迅速な対応も含めてサポートします。",
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
              {item.note && (
                <p style={{ fontSize: "0.72rem", color: "var(--color-text-light)", lineHeight: 1.75, marginTop: "0.9rem", paddingTop: "0.8rem", borderTop: "1px solid #f0ede8" }}>
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── サービス：運営代行 ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICE 01</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>運営代行</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", marginBottom: "3rem" }}>
            予約管理からゲスト対応、清掃手配、月次の収益改善まで一括でお引き受けします。
          </p>
          <div className="ops-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>SERVICES</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>サービス内容</h3>
              {[
                "予約・カレンダー管理",
                "ゲスト対応（日本語・英語・中国語の多言語対応）",
                "チェックイン・チェックアウト対応",
                "清掃・リネン手配",
                "消耗品・備品の補充",
                "月次レポート（数値分析と改善提案）",
                "OCC・LOS・ADRの継続最適化",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.7rem 0", borderBottom: "1px solid #f0ede8" }}>
                  <ArrowRight size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
              <p style={{ marginTop: "1rem", fontSize: "0.74rem", color: "var(--color-text-light)", lineHeight: 1.75 }}>
                ※ OCC：稼働率／LOS：平均宿泊日数／ADR：1泊あたりの平均販売単価。
              </p>
            </div>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>FEE</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>料金</h3>
              {[
                { label: "運営代行手数料", value: "20%", big: true, note: "OTA手数料控除後の月間売上に対して" },
                { label: "清掃費", value: "個別見積り", big: false, note: "清掃業者へのお支払い額をそのまま反映。中間マージンはいただきません" },
                { label: "消耗品・備品", value: "実費", big: false, note: "ご使用分のみ請求します" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1rem 0", borderBottom: "1px solid #f0ede8" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem", gap: "1rem" }}>
                    <span style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-en)", fontSize: item.big ? "1.4rem" : "0.88rem", color: "var(--color-accent)", fontWeight: 400, whiteSpace: "nowrap" }}>{item.value}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.65 }}>{item.note}</p>
                </div>
              ))}
              <div style={{ marginTop: "1.5rem", padding: "1.2rem 1.4rem", background: "rgba(139,115,85,0.07)", borderRadius: "6px", borderLeft: "3px solid var(--color-accent)" }}>
                <p style={{ fontSize: "0.82rem", color: "var(--color-primary)", lineHeight: 1.85 }}>
                  代行手数料以外で利益を取る構造を持ちません。
                  オーナーの収益最大化と私たちの収益が、同じ方向を向く設計です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── サービス：立ち上げ支援 ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICE 02</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.5rem" }}>立ち上げ支援</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", marginBottom: "3rem" }}>
            コンセプト設計からリスティング公開、立ち上がり期のサポートと運営改善企画まで、
            軌道に乗るまで一貫して伴走します。
          </p>
          <div className="ops-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>SERVICES</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>サービス内容</h3>
              {[
                "コンセプト設計・ゲスト体験設計",
                "インテリア企画",
                "写真撮影",
                "リスティング作成",
                "ガイド・施設ページ・ロゴ等の制作",
                "立ち上がり期のサポート",
                "運営改善企画（リスティング・価格・体験の見直し）",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.7rem 0", borderBottom: "1px solid #e8e4de" }}>
                  <ArrowRight size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ ...subHeading, marginBottom: "0.4rem" }}>FEE</p>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>料金</h3>
              {[
                { label: "企画・コンサルティング費", value: "¥0〜", big: true, note: "運営代行とセット、かつ1年以上ご継続の場合は不要です" },
                { label: "初期導入費用", value: "¥20,000〜", big: true, note: "リスティング作成、ガイド・施設ページ・ロゴ等の制作" },
                { label: "写真撮影・インテリアデザイン料", value: "個別見積り", big: false, note: "中間マージンはいただきません" },
                { label: "開業諸経費", value: "個別見積り", big: false, note: "家具・備品・その他経費。実費でのご請求です" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1rem 0", borderBottom: "1px solid #e8e4de" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem", gap: "1rem" }}>
                    <span style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-en)", fontSize: item.big ? "1.15rem" : "0.88rem", color: "var(--color-accent)", fontWeight: 400, whiteSpace: "nowrap" }}>{item.value}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.65 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Airbnb補助ホスト ── */}
      <section style={{ background: "var(--color-white)", padding: "4rem 8%" }}>
        <div className="ops-cohost" style={{ maxWidth: "880px", margin: "0 auto", display: "flex", gap: "2.5rem", alignItems: "center" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-accent), #c49a6c)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "white", fontSize: "1.7rem", lineHeight: 1 }}>★</span>
            </div>
          </div>
          <div>
            <p style={sectionLabel}>AIRBNB CO-HOST</p>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.7rem" }}>
              Airbnbの補助ホストマーケットに掲載しています
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85, marginBottom: "0.9rem" }}>
              Airbnbプラットフォーム上で、私たちのプロフィールや活動状況をご確認いただけます。
            </p>
            <a
              href="https://www.airbnb.jp/co-hosts/profile/1368097205517945251"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}
            >
              補助ホストプロフィールを見る →
            </a>
          </div>
        </div>
      </section>

      {/* ── 受注について ── */}
      <section style={{
        background: "var(--color-primary)",
        padding: "5rem 8%",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, color: "rgba(255,255,255,0.6)" }}>AVAILABILITY</p>
          <h2 style={{ fontFamily: "var(--font-en)", fontSize: "1.9rem", fontWeight: 400, color: "var(--color-white)", marginBottom: "1.5rem" }}>
            新規受注は計画的にお受けしています
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.82)", lineHeight: 2, marginBottom: "1.4rem" }}>
            提供品質を一定に保つため、同時にお受けする案件数を管理しています。
          </p>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.95, marginBottom: "2.2rem" }}>
            既存物件の運営代行への切り替え、新規立ち上げのいずれも受付中です。
            タイミングによってはお待ちいただく場合があります。
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
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {[
            {
              step: "01",
              title: "お問い合わせ",
              text: "フォームまたはメールでご連絡ください。",
              extra: (
                <div style={{ marginTop: "0.9rem", padding: "1rem 1.2rem", background: "var(--color-bg)", borderRadius: "5px" }}>
                  <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <FileText size={13} color="var(--color-accent)" />
                    事前にご用意いただけるとスムーズな資料
                  </p>
                  <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", margin: 0 }}>
                    {[
                      "現在のリスティングURL（運営中の場合）",
                      "物件の基本情報（住所・間取り・面積）",
                      "運営形態（住宅宿泊事業法 / 旅館業法 / 特区民泊 など）",
                      "直近の運営状況がわかる資料（売上・稼働率・レビューなど）",
                    ].map((t) => (
                      <li key={t} style={{ fontSize: "0.8rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{t}</li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              step: "02",
              title: "ヒアリング・現状確認",
              text: "オンラインまたは対面で物件・現状・ご要望を伺います。他社からの切り替えの場合は、現運営の状況や課題感もそのままお話しください。",
            },
            {
              step: "03",
              title: "プランご提案",
              text: "収益シミュレーション、運営方針、費用感をまとめてお伝えします。比較検討のための資料としてもお使いいただけます。",
            },
            {
              step: "04",
              title: "ご契約",
              text: "ご納得いただけましたらご契約。電子契約に対応しています。",
            },
            {
              step: "05",
              title: "立ち上げ／運営交代の準備",
              text: "新規立ち上げの場合は最短2週間〜2ヶ月、既存運営の交代は最短1日で切り替えに対応します。",
            },
            {
              step: "06",
              title: "運営開始",
              text: "開始直後はGuest Choice獲得を最初のマイルストーンに、これまでの経験と素早いPDCAでスタートダッシュをかけます。",
            },
            {
              step: "07",
              title: "定期レポート",
              text: "KGI・KPIの推移に加え、営業状況・今後の見通し・物件の管理状況などを月次レポートにまとめてお送りします。",
            },
          ].map((item, i, arr) => (
            <div key={item.step} style={{
              display: "flex",
              gap: "1.6rem",
              alignItems: "flex-start",
              padding: "1.8rem 0",
              borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none",
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
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>{item.text}</p>
                {item.extra}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 宿泊施設運営全般 ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={sectionLabel}>HOSPITALITY OPERATIONS</p>
          <h2 style={{ ...sectionTitle, marginBottom: "1.2rem" }}>宿泊施設運営全般</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2.05, marginBottom: "1.4rem" }}>
            上記の民泊運営代行に加えて、宿泊施設運営にまつわるご相談を幅広くお受けしています。
            ホテル・ホステル・ゲストハウス・アパートメントホテル、一棟民泊や複数施設をまとめた大規模民泊などの施設形態を問わず、
            運営代行・コンサルティング・収益改善・新規開業サポートまで対応可能です。
          </p>
          <p style={{ fontSize: "0.92rem", color: "var(--color-text-light)", lineHeight: 2, marginBottom: "2.5rem" }}>
            民泊運営代行で培った知見に加え、ホテル開発や大規模施設の開業に携わってきた経験を背景に、
            施設の規模・体制に応じて柔軟に支援を組み立てます。
          </p>

          <p style={{ ...subHeading, marginBottom: "0.7rem" }}>SCOPE</p>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1.2rem" }}>対応領域</h3>
          <div className="ops-scope-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.8rem", marginBottom: "2.5rem" }}>
            {[
              "施設コンセプト設計・収益モデル構築",
              "インバウンド対応の強化",
              "OTA戦略・リスティング最適化",
              "収益改善・コスト構造の見直し",
              "オペレーション設計・スタッフ研修",
              "新規開業のサポート全般",
            ].map((item) => (
              <div key={item} style={{
                padding: "0.85rem 1rem",
                background: "var(--color-white)",
                borderRadius: "5px",
                fontSize: "0.85rem",
                color: "var(--color-text)",
                lineHeight: 1.6,
              }}>
                {item}
              </div>
            ))}
          </div>

          <p style={{ ...subHeading, marginBottom: "0.7rem" }}>CORPORATE & FUND</p>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem" }}>法人案件・ファンド案件</h3>
          <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            法人の新規事業立ち上げ、不動産・ホテルファンド案件、指定管理者案件にも対応しています。
            SPC・GK-TMKを含む各種スキームへの対応経験があり、契約形式は MC・リース・フランチャイズ など、
            案件特性に応じて柔軟に組成可能です。
          </p>

          <p style={{ ...subHeading, marginBottom: "0.7rem" }}>FEE STRUCTURE</p>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "1rem" }}>報酬形態の柔軟性</h3>
          <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            業務委託としてのレベニューシェア型に加え、利害をより強く共にするプロフィットシェア型、
            両者を組み合わせたミックス型、共同経営型など、案件の体制・狙いに応じてご提案します。
          </p>

          <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>
            内容・規模・体制によって対応をご相談させていただきます。お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%", textAlign: "center" }}>
        <p style={sectionLabel}>CONTACT</p>
        <h2 style={{ ...sectionTitle, marginBottom: "1rem" }}>まずはご相談ください</h2>
        <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 2.05, marginBottom: "2.5rem" }}>
          他社からの切り替え、内製業務のアウトソース、新規立ち上げ、いずれもお受けしています。
          <br />
          現状や課題感を共有いただければ、対応可否と費用感をお伝えします。
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
          .ops-grid-2 { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .ops-pain-grid { grid-template-columns: 1fr !important; }
          .ops-scope-grid { grid-template-columns: 1fr !important; }
          .ops-cohost { flex-direction: column !important; gap: 1.5rem !important; text-align: center; }
        }
      `}</style>
    </main>
  );
}
