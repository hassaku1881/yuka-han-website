import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import { publishedJobs } from "@/lib/jobs";
import { RecruitList } from "@/components/RecruitViews";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社ユカハン",
  description:
    "株式会社ユカハンの採用情報。訪日外国人向け宿泊施設「Wuto」の施設管理スタッフ、カスタマーサポートなどを募集しています。",
  alternates: {
    canonical: `${BASE_URL}/recruit`,
    languages: { ja: `${BASE_URL}/recruit`, en: `${BASE_URL}/en/recruit`, "x-default": `${BASE_URL}/recruit` },
  },
};

export default function RecruitPage() {
  return (
    <RecruitList
      locale="ja"
      jobs={publishedJobs}
      intro={
        <>
          <p style={{ marginBottom: "1rem" }}>
            訪日外国人向け宿泊施設「Wuto」の企画・運営と、他社施設の運営受託を行っています。葛飾区を拠点に、下町の暮らしと文化を体験したい旅行者を迎え、地域とつなぐ役割を担っています。
          </p>
          <p>
            安さで選ばれる宿ではなく、滞在の質で選ばれる宿づくりをしています。Airbnbでも国際的なゲストから高い評価をいただいています。地域に根ざし、葛飾から施設を広げています。
          </p>
        </>
      }
    />
  );
}
