import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 株式会社ユカハン",
  description: "株式会社ユカハン（Yuka-Han & Co.）について。宿泊体験の解像度と事業運営の専門性を一体として扱う会社です。",
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

const values = [
  {
    en: "work hard, live hard",
    ja: "何事もとことん",
    body: "仕事にも、旅にも、日常のすべてに全力で向き合う。最高のアウトプットを出すプロとしての深みと、質の高いインプットとしての「生きること」。どちらも手を抜かない。",
  },
  {
    en: "pure inspiration, bold creativity",
    ja: "刺激を創造に",
    body: "先入観を外し、純粋に刺激を受け取る。創造するときは大胆に、10倍の発想で。インスピレーションなくして、本当の創造は生まれない。",
  },
  {
    en: "Data-Driven, Poetry-Crafted",
    ja: "99%のロジックと1%のひらめき",
    body: "すべての事業判断はロジックと数字から始まる。ただし、純粋なロジックだけでは生み出せないものがある。データが骨格なら、詩はその魂。",
  },
  {
    en: "equity and symphony",
    ja: "胸を張って歩けるように",
    body: "情報の非対称性を利用して利益を得ることを良しとしない。「誠実」という言葉は曖昧すぎるから、あえてこう言う。旅行・宿泊と地域社会の共存も含め、関わるすべての人が胸を張って歩けるように。",
  },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(20,30,48,0.55), rgba(20,30,48,0.68)), url('/images/20231003_katsushika-02.jpg') center/cover no-repeat",
        color: "var(--color-white)",
        padding: "5rem 2rem",
      }}>
        <div style={{ maxWidth: "680px" }}>
          <p style={{ ...sectionLabel, color: "var(--color-accent)" }}>COMPANY</p>
          <h1 style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}>
            About Us
          </h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={sectionLabel}>STORY</p>
          <h2 style={sectionTitle}>なぜこの会社があるのか</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
            <p style={{ fontSize: "0.97rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              2022年春、私たちは家を手放すことにした。車一台で日本全国を旅しながら働く生活。仕事用のパソコンとモニターを積んで、今週の家はここ、来週の家はここ、と軽やかに旅をした。
            </p>
            <p style={{ fontSize: "0.97rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              旅のスタイルはいつも「暮らすような旅」だった。数日で移動を繰り返すのではなく、1週間じっくりひとつの場所に滞在する。観光地を巡るよりも、家の近所を散歩する。スーパーで地元の食材を買って、キッチンで料理をする。そうしているうちに「少しここに引っ越してきた」ような感覚になって、「また帰ってきたい」と思える場所が増えていった。
            </p>
            <p style={{ fontSize: "0.97rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              2023年夏、自分たちの宿を持つことにした。日本全国を旅してきた私たちだからこそ作れる宿がある——そう思った。東京を拠点に、世界中からやってきた旅人と出会いたい。のんびり、くつろいで、暮らすように旅してもらえる場所をつくりたい。
            </p>
            <p style={{ fontSize: "0.97rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              宿を運営するにつれて、問題意識が生まれた。体験設計と事業運営を別物として扱う会社が多すぎる。空間はこだわっているが数字が読めない。収益は追っているが体験がおざなりになる。この二つを一体として扱える会社をつくりたい——それが、ユカハンの出発点だ。
            </p>
          </div>
        </div>
      </section>

      {/* ── Purpose ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>PURPOSE</p>
          <h2 style={{ ...sectionTitle, marginBottom: "0.6rem" }}>
            人生にちょっと刺激を、人生をちょっと面白く
          </h2>
          <p style={{
            fontFamily: "var(--font-en)",
            fontSize: "0.9rem",
            color: "var(--color-text-light)",
            letterSpacing: "0.04em",
            marginBottom: "3rem",
            fontStyle: "italic",
          }}>
            A little more spark in life. A little more wonder in the everyday.
          </p>
          <p style={{
            fontSize: "0.97rem",
            lineHeight: 2.2,
            color: "var(--color-text-light)",
            textAlign: "left",
            maxWidth: "680px",
            margin: "0 auto",
          }}>
            旅は、日常に刺激を与えてくれるものだと信じています。私たちにとって旅は非日常ではなく、生活の一部。誰かの「もうちょっと面白い日常」のきっかけになりたい。<br /><br />
            押しつけではなく、ちょっとした余白で。訪れた場所の暮らしに少し触れるように。そういう体験と空間を、東京の下町から発信していきます。
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "var(--color-white)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={sectionLabel}>VALUES</p>
            <h2 style={sectionTitle}>What We Stand For</h2>
          </div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.8rem" }}>
            {values.map((v) => (
              <div key={v.en} style={{
                background: "var(--color-bg)",
                padding: "2.2rem 2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}>
                <p style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                  color: "var(--color-accent)",
                  marginBottom: "0.6rem",
                  fontStyle: "italic",
                }}>
                  {v.en}
                </p>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  marginBottom: "1rem",
                  lineHeight: 1.45,
                }}>
                  {v.ja}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.9 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section style={{ background: "var(--color-bg)", padding: "6rem 8%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={sectionLabel}>LEADERSHIP</p>
            <h2 style={sectionTitle}>Our Team</h2>
          </div>
          <div className="founders-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            {[
              {
                name: "范 凱翔",
                nameEn: "Fan Kaixiang",
                role: "代表社員",
                origin: "中国吉林省生まれ、神奈川・大阪育ち",
                edu: "京都大学総合人間学部卒業",
                bio: "人事・企画の経験を経て、2018年より宿泊施設の企画・立ち上げに従事。東京・白馬・福岡での大型ホステル・ホテル開発、民泊運営代行、清掃事業を担当。2015年より自宅を活用したAirbnbホスティングを開始し、現在に至る。学生時代にインド グルガオンでのビジネスインターンシップを経験。日本語・中国語・英語の3言語対応。ユカハン合同会社では事業開発およびバックオフィス全般を担当。",
                charge: "事業開発 / 収益設計 / バックオフィス",
              },
              {
                name: "山本 悠佳",
                nameEn: "Yamamoto Yuka",
                role: "代表社員",
                origin: "福岡生まれ、兵庫育ち",
                edu: "京都大学農学部、東京大学医科学研究科卒業",
                bio: "製品の研究開発に携わったのち、新製品のブランディングおよびマーケティングを担当。全国47都道府県、世界50カ国以上を旅した経験を持つ。学生時代にカナダ マギル大学への留学、ドイツ・スイスの多国籍企業でのビジネスインターンシップを経験。ゲストとして世界中のAirbnbに滞在してきた視点を、空間設計とゲスト体験に活かす。ユカハン合同会社では施設のブランディング、ゲスト体験設計、QA（品質維持）を担当。",
                charge: "施設ブランディング / ゲスト体験設計 / QA",
              },
            ].map((person) => (
              <div key={person.name} style={{ textAlign: "center" }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "var(--color-white)",
                  margin: "0 auto 1.4rem",
                  border: "2px solid #f0ede8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{
                    fontSize: "2rem",
                    color: "rgba(139,115,85,0.35)",
                    fontWeight: 300,
                  }}>
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  marginBottom: "0.2rem",
                  letterSpacing: "0.04em",
                }}>
                  {person.name}
                </h3>
                <p style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.78rem",
                  color: "var(--color-text-light)",
                  marginBottom: "0.3rem",
                  letterSpacing: "0.04em",
                }}>
                  {person.nameEn}
                </p>
                <p style={{
                  fontSize: "0.75rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.06em",
                  marginBottom: "1.4rem",
                }}>
                  {person.role}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", marginBottom: "0.2rem" }}>
                  {person.origin}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", marginBottom: "1.6rem" }}>
                  {person.edu}
                </p>
                <p style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.95,
                  color: "var(--color-text-light)",
                  textAlign: "left",
                  marginBottom: "1.2rem",
                }}>
                  {person.bio}
                </p>
                <p style={{
                  fontSize: "0.72rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.06em",
                  textAlign: "left",
                }}>
                  {person.charge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Info ── */}
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
                { label: "代表者", value: "范 凱翔 / 山本 悠佳" },
                { label: "取引銀行", value: "第一勧業信用組合 / 東京東信用金庫" },
                { label: "事業内容", value: "宿泊施設の企画・開発・運用 / 民泊運営代行サービス" },
                { label: "主力ブランド", value: "Wuto（スモールラグジュアリー宿泊施設）" },
                { label: "Email", value: "contact@yuka-han.com" },
              ].map((row) => (
                <tr key={row.label} style={{ borderBottom: "1px solid #f0ede8" }}>
                  <td style={{
                    padding: "1.2rem 1rem 1.2rem 0",
                    fontSize: "0.85rem",
                    color: "var(--color-text-light)",
                    whiteSpace: "nowrap",
                    width: "160px",
                    fontWeight: 500,
                  }}>
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

      <style>{`
        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .founders-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  );
}
