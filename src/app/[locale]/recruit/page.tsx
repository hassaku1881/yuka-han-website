import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";
import { publishedJobsEn } from "@/lib/jobs";
import { RecruitList } from "@/components/RecruitViews";

type Props = { params: Promise<{ locale: string }> };

// 採用情報は英語版のみ（繁体字は無し）
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: "Careers | Yuka-Han & Co.",
  description:
    "Open positions at Yuka-Han & Co., operator of Wuto accommodations in Tokyo. Positions where Japanese language ability is not required.",
  alternates: {
    canonical: `${BASE_URL}/en/recruit`,
    languages: { ja: `${BASE_URL}/recruit`, en: `${BASE_URL}/en/recruit`, "x-default": `${BASE_URL}/recruit` },
  },
};

export default async function LocaleRecruitPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  return (
    <RecruitList
      locale="en"
      jobs={publishedJobsEn}
      intro={
        <>
          <p style={{ marginBottom: "1rem" }}>
            We plan and operate Wuto, accommodations for international visitors to Japan, and manage properties on behalf of other owners. Based in Katsushika, Tokyo, we welcome travelers who want to experience everyday life and culture in Tokyo&apos;s shitamachi, and connect them with the local community.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            We build places that guests choose for the quality of their stay, not for a low price, and our properties are highly rated by international guests on Airbnb. Rooted in the community, we are growing from Katsushika — and from 2026, in Shinjuku too.
          </p>
          <p>The positions below do not require Japanese language ability.</p>
        </>
      }
    />
  );
}
