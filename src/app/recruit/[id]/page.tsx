import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";
import { publishedJobs, getJob } from "@/lib/jobs";
import { RecruitDetail } from "@/components/RecruitViews";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedJobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);
  if (!job) return {};
  const url = `${BASE_URL}/recruit/${job.id}`;
  return {
    title: `${job.title}（${job.area}）| 採用情報 | 株式会社ユカハン`,
    description: job.summary,
    alternates: {
      canonical: url,
      ...(job.en && {
        languages: { ja: url, en: `${BASE_URL}/en/recruit/${job.id}`, "x-default": url },
      }),
    },
  };
}

export default async function RecruitDetailPage({ params }: Props) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();
  return <RecruitDetail job={job} locale="ja" />;
}
