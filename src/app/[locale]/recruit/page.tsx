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
    "Open positions at Yuka-Han & Co., which plans, operates and manages accommodations and vacation rentals in eastern Tokyo and Shinjuku. Positions where Japanese language ability is not required.",
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
          <h2 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Helping travelers feel at home in the city they visit.
            <br />
            We are looking for people to support that every day.
          </h2>
          <p style={{ marginBottom: "1.2rem" }}>
            Yuka-Han &amp; Co. plans, operates and manages accommodations and vacation rentals, mainly in eastern Tokyo (Katsushika, Edogawa and nearby) and Shinjuku. We welcome travelers from Japan and abroad, taking care of everything ourselves, from creating each place to running it day to day.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            Our two founders have traveled across Asia, Europe and even to Antarctica. What they learned is that a memorable stay comes from the feel of a space, the warmth between people, and careful day-to-day operations working together. A clean, well-kept room and someone who comes quickly when a guest needs help both depend on work that happens behind the scenes.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            Our guiding principle is &ldquo;With Heads Held High.&rdquo; We want everyone involved — our guests, our neighbors and the people we work with — to be proud of what we do. Checking on a property, a small repair, a single message to a guest: each one builds our reputation and the trust of the local community.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            We offer part-time, freelance and registered on-call roles. Working with us alongside another job or your studies is welcome.
          </p>
          <p>The positions below do not require Japanese language ability.</p>
        </>
      }
    />
  );
}
