import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import { publishedJobs } from "@/lib/jobs";
import { RecruitList } from "@/components/RecruitViews";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社ユカハン",
  description:
    "株式会社ユカハンの採用情報。東京の東エリアと新宿を中心に、宿泊施設・民泊の企画・運営・管理を行っています。施設管理スタッフ、カスタマーサポートなどを募集中です。",
  alternates: {
    canonical: `${BASE_URL}/recruit`,
    languages: { ja: `${BASE_URL}/recruit`, en: `${BASE_URL}/en/recruit`, "x-default": `${BASE_URL}/recruit` },
  },
};

const h2: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: 500,
  color: "var(--color-primary)",
  lineHeight: 1.7,
  marginBottom: "1.5rem",
};
const p: React.CSSProperties = { marginBottom: "1.2rem" };

export default function RecruitPage() {
  return (
    <RecruitList
      locale="ja"
      jobs={publishedJobs}
      intro={
        <>
          <h2 style={h2}>
            旅する人が、その街で心地よく過ごせるように。
            <br />
            その毎日を、いっしょに支えてくれる仲間を探しています。
          </h2>
          <p style={p}>
            株式会社ユカハンは、東京の東エリア（葛飾区・江戸川区など）と新宿を中心に、宿泊施設・民泊の企画、運営、管理を行っている会社です。国内外から訪れる旅行者を、施設づくりから日々の運営まで自分たちの手でお迎えしています。
          </p>
          <p style={p}>
            代表の二人は、アジアやヨーロッパ、南極まで旅を重ねてきました。そのなかで実感したのは、心に残る滞在は、空間の手ざわりや人と人との温度、そして日々のていねいな運営が噛み合ったときに生まれるということです。清潔に整えられた部屋も、困ったときにすぐ駆けつけてくれる人の存在も、目立たない現場の仕事があってこそ成り立っています。
          </p>
          <p style={p}>
            私たちが大切にしている考え方は「胸を張って歩けるように」。ゲストにも、近隣にお住まいの方にも、一緒に働く仲間にも、関わるすべての人が誇りを持てる仕事をすること。施設の見回りやちょっとした修繕、ゲストへの一通のメッセージ。その一つひとつが、宿の評判と地域との信頼をつくっています。
          </p>
          <p>
            働き方は、パート・アルバイト、業務委託、登録スタッフとさまざまです。ダブルワークや、学業と両立しながらの働き方も歓迎します。日本語以外の言語が得意な方も大歓迎です。
          </p>
        </>
      }
    />
  );
}
