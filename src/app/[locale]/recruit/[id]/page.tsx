import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";
import { publishedJobsEn, getJob } from "@/lib/jobs";
import { RecruitDetail } from "@/components/RecruitViews";

type Props = { params: Promise<{ locale: string; id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedJobsEn.map((j) => ({ locale: "en", id: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);
  if (!job?.en) return {};
  const ja = `${BASE_URL}/recruit/${job.id}`;
  return {
    title: `${job.en.title} (${job.en.area}) | Careers | Yuka-Han & Co.`,
    description: job.en.summary,
    alternates: {
      canonical: `${BASE_URL}/en/recruit/${job.id}`,
      languages: { ja, en: `${BASE_URL}/en/recruit/${job.id}`, "x-default": ja },
    },
  };
}

export default async function LocaleRecruitDetailPage({ params }: Props) {
  const { locale, id } = await params;
  const job = getJob(id);
  if (locale !== "en" || !job?.en) notFound();
  return <RecruitDetail job={job} locale="en" />;
}
