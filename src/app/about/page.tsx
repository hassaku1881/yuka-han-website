import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 株式会社ユカハン",
  description: "株式会社ユカハン（Yuka-Han & Co.）について。感性とロジックの両輪で、人の心が動く瞬間を事業として成立させる会社です。",
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
    en: "Work Hard, Live Hard",
    ja: "何事もとことん",
    body: "仕事にも、旅にも、日常のすべてに全力で向き合う。最高のアウトプットを出すプロとしての深みと、質の高いインプットとしての「生きること」。どちらも手を抜かない。",
  },
  {
    en: "Pure Inspiration, Bold Creativity",
    ja: "刺激を創造に",
    body: "先入観を外し、純粋に刺激を受け取る。創造するときは大胆に、10倍の発想で。インスピレーションなくして、本当の創造は生まれない。",
  },
  {
    en: "Data-Driven, Poetry-Crafted",
    ja: "99%のロジックと1%のひらめき",
    body: "すべての事業判断はロジックと数字から始まる。ただし、純粋なロジックだけでは生み出せないものがある。データが骨格なら、詩はその魂。",
  },
  {
    en: "Equity and Symphony",
    ja: "胸を張って歩けるように",
    body: "情報の非対称性を利用して利益を得ることを良しとしない。「誠実」という言葉は曖昧すぎるから、あえてこう言う。関わるすべての人が胸を張って歩けるように、調和のなかで事業を進める。",
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
        background: "linear-gradient(rgba(20,30,48,0.55), rgba(20,30,48,0.68)), url('/images/20231003_katsushika-02.jpg') 25% 75% / cover no-repeat",
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
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p style={sectionLabel}>STORY</p>
          <h2 style={sectionTitle}>Our Story</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.7rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              私たちは旅をしてきた。アジア、ヨーロッパ、ラテンアメリカ。日本でも、家を手放して車一台で全国をめぐったことがある。
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              滞在のしかたはいつも「暮らすような旅」だった。1週間ひとつの場所にとどまって、近所のスーパーで食材を買い、商店街を歩き、その土地の音楽を聴く。観光地を駆け抜けるのではなく、空気を吸い込むように街と関わる。そういう滞在のなかでしか見えてこないものを、私たちはたくさん集めてきた。
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              そこで気づいたことがある。良い体験は、感性だけでも、ロジックだけでも生まれない。空間の手ざわり、人と人との温度、数字に裏打ちされた運営判断——そのすべてが噛み合ったときに、人の記憶に残る。
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              ところが現実には、それらは別々の人・別々の会社が担当することが多い。空間をつくる人は数字を見ない。運営する人は世界観を語らない。マーケティングを描く人は現場に立たない。それぞれの専門性が分断されたまま事業が組み立てられている。
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              ユカハンは、この分断を一つの視点から組み立て直すための会社だ。インテリアの細部まで語れる人間が、収益モデルも設計する。マーケティングを描く人間が、ゲストへのメッセージも書く。事業のあらゆる面を、感性とロジックの両輪で。
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 2.2, color: "var(--color-text-light)" }}>
              いま、宿泊施設の企画・運営を主軸に、運営代行、撮影スタジオ、マーケティング、コンサルティングと、領域は広がりつつある。共通しているのは「人の心が動く瞬間を、事業として成立させる」という関心。これからも、その輪郭をすこしずつ広げていく。
            </p>
          </div>
        </div>
      </section>

      {/* ── Purpose ── */}
      <section style={{ background: "var(--color-bg)", padding: "7rem 8%" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionLabel}>PURPOSE</p>
          <h2 style={{
            fontFamily: "var(--font-jp, inherit)",
            fontSize: "clamp(1.7rem, 4.2vw, 2.6rem)",
            fontWeight: 500,
            color: "var(--color-primary)",
            lineHeight: 1.55,
            letterSpacing: "0.04em",
            marginBottom: "1.2rem",
          }}>
            人生にちょっと刺激を、<br />人生をちょっと面白く
          </h2>
          <p style={{
            fontFamily: "var(--font-en)",
            fontSize: "1.05rem",
            color: "var(--color-text-light)",
            letterSpacing: "0.04em",
            marginBottom: "3.5rem",
            fontStyle: "italic",
          }}>
            A little more spark in life. A little more wonder in the everyday.
          </p>
          <p style={{
            fontSize: "1.02rem",
            lineHeight: 2.2,
            color: "var(--color-text-light)",
            textAlign: "left",
            maxWidth: "720px",
            margin: "0 auto",
          }}>
            旅は、日常に刺激を与えてくれるものだと信じています。私たちにとって旅は非日常ではなく、生活の一部。誰かの「もうちょっと面白い日常」のきっかけになりたい。<br /><br />
            押しつけではなく、ちょっとした余白で。訪れた場所の暮らしに少し触れるように。そういう体験と空間を、私たちは事業として届けていきます。
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
                padding: "2.4rem 2.2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.35,
                  marginBottom: "0.4rem",
                  fontStyle: "italic",
                }}>
                  {v.en}
                </h3>
                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--color-accent)",
                  letterSpacing: "0.04em",
                  marginBottom: "1.4rem",
                  fontWeight: 400,
                }}>
                  {v.ja}
                </p>
                <p style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-light)",
                  lineHeight: 2,
                }}>
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
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={sectionLabel}>LEADERSHIP</p>
            <h2 style={sectionTitle}>Our Team</h2>
          </div>

          {/* イラスト */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Image
              src="/images/leadership-illustration.png"
              alt="Yuka-Han Leadership Illustration"
              width={520}
              height={420}
              style={{
                maxWidth: "min(420px, 80vw)",
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>

          <div className="founders-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            {[
              {
                name: "山本 悠佳",
                nameEn: "Yuka",
                role: "代表取締役",
                origin: "福岡生まれ、兵庫育ち",
                edu: "京都大学農学部、東京大学医科学研究科卒業",
                bio: "製造業にて研究開発を経て、マーケティング・ブランディングおよび事業企画を担当。学生時代にカナダ・マギル大学への留学、ドイツの研究所・スイスの多国籍企業でのビジネスインターンシップを経験。これまでに全国47都道府県、世界70カ国以上を旅し、世界中のAirbnbにゲストとして滞在してきた視点を、空間設計とゲスト体験に活かす。施設のブランディング、ゲスト体験設計、QA（品質維持）を担当。",
                charge: "施設ブランディング / ゲスト体験設計 / QA",
              },
              {
                name: "范 凱翔",
                nameEn: "Han",
                role: "代表取締役",
                origin: "中国吉林省生まれ、神奈川・大阪育ち",
                edu: "京都大学総合人間学部卒業",
                bio: "IT企業にて人事として労務企画、制度企画、M&A/PMIに携わったのち、2018年より宿泊施設の企画・立ち上げに従事。東京・白馬・福岡での大型ホステル・ホテル開発、民泊運営代行、清掃事業を担当。2015年より自宅を活用したAirbnbホスティングを開始し、現在に至る。学生時代にインド・グルガオンでのビジネスインターンシップを経験。日本語・中国語・英語の3言語対応。事業開発と収益設計、バックオフィス全般を担当。",
                charge: "事業開発 / 収益設計 / バックオフィス",
              },
            ].map((person) => (
              <div key={person.name}>
                <h3 style={{
                  fontSize: "1.55rem",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  marginBottom: "0.2rem",
                  letterSpacing: "0.04em",
                }}>
                  {person.name}
                </h3>
                <p style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "0.82rem",
                  color: "var(--color-text-light)",
                  marginBottom: "0.8rem",
                  letterSpacing: "0.04em",
                }}>
                  {person.nameEn}
                </p>
                <p style={{
                  fontSize: "0.78rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.06em",
                  marginBottom: "1.6rem",
                }}>
                  {person.role}
                </p>
                <p style={{ fontSize: "0.86rem", color: "var(--color-text-light)", marginBottom: "0.2rem" }}>
                  {person.origin}
                </p>
                <p style={{ fontSize: "0.86rem", color: "var(--color-text-light)", marginBottom: "1.6rem" }}>
                  {person.edu}
                </p>
                <p style={{
                  fontSize: "0.92rem",
                  lineHeight: 2,
                  color: "var(--color-text-light)",
                  marginBottom: "1.4rem",
                }}>
                  {person.bio}
                </p>
                <p style={{
                  fontSize: "0.75rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.06em",
                  paddingTop: "1rem",
                  borderTop: "1px solid #e8e3da",
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
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={sectionLabel}>COMPANY INFO</p>
          <h2 style={sectionTitle}>会社概要</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {[
                { label: "社名", value: "株式会社ユカハン" },
                { label: "英文社名", value: "Yuka-Han & Co." },
                { label: "設立", value: "2020年5月1日" },
                { label: "所在地", value: "東京都葛飾区お花茶屋2-5-21" },
                { label: "資本金", value: "3,000万円" },
                {
                  label: "代表者",
                  value: (
                    <>
                      代表取締役　范 凱翔<br />
                      代表取締役　山本 悠佳
                    </>
                  ),
                },
                {
                  label: "取引銀行",
                  value: (
                    <>
                      第一勧業信用組合<br />
                      東京東信用金庫
                    </>
                  ),
                },
                {
                  label: "事業内容",
                  value: (
                    <>
                      宿泊施設の企画・開発・運営（Wuto）<br />
                      民泊運営代行<br />
                      宿泊施設運営支援<br />
                      撮影スタジオ事業<br />
                      マーケティング事業<br />
                      コンサルティング事業<br />
                      不動産賃貸事業
                    </>
                  ),
                },
                { label: "主力ブランド", value: "Wuto" },
                { label: "Email", value: "contact@yuka-han.com" },
              ].map((row) => (
                <tr key={row.label} style={{ borderBottom: "1px solid #f0ede8" }}>
                  <td style={{
                    padding: "1.3rem 1rem 1.3rem 0",
                    fontSize: "0.85rem",
                    color: "var(--color-text-light)",
                    whiteSpace: "nowrap",
                    width: "150px",
                    fontWeight: 500,
                    verticalAlign: "top",
                  }}>
                    {row.label}
                  </td>
                  <td style={{
                    padding: "1.3rem 0",
                    fontSize: "0.95rem",
                    color: "var(--color-text)",
                    lineHeight: 1.9,
                  }}>
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
