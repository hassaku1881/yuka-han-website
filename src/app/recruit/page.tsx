import Link from "next/link";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import { publishedJobs, JOB_CATEGORY_LABELS, type JobCategory } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社ユカハン",
  description:
    "株式会社ユカハンの採用情報。訪日外国人向け宿泊施設「Wuto」の施設管理スタッフ、カスタマーサポートなどを募集しています。",
  alternates: { canonical: `${BASE_URL}/recruit` },
};

const categoryOrder: JobCategory[] = ["part", "contract", "registered"];

export default function RecruitPage() {
  const groups = categoryOrder
    .map((cat) => ({ cat, jobs: publishedJobs.filter((j) => j.category === cat) }))
    .filter((g) => g.jobs.length > 0);

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "5rem 8% 3rem", background: "var(--color-white)", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--color-accent)", marginBottom: "0.5rem" }}>
          RECRUIT
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "2rem" }}>
          採用情報
        </h1>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "left", fontSize: "0.95rem", lineHeight: 2, color: "var(--color-text-light)" }}>
          <p style={{ marginBottom: "1rem" }}>
            訪日外国人向け宿泊施設「Wuto」の企画・運営と、他社施設の運営受託を行っています。葛飾区を拠点に、下町の暮らしと文化を体験したい旅行者を迎え、地域とつなぐ役割を担っています。
          </p>
          <p>
            安さで選ばれる宿ではなく、滞在の質で選ばれる宿づくりをしています。Airbnbでも国際的なゲストから高い評価をいただいています。地域に根ざし、葛飾から施設を広げています。
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {groups.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--color-text-light)" }}>
              現在募集中の求人はありません。
            </p>
          )}
          {groups.map(({ cat, jobs }) => (
            <div key={cat} style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "1.2rem", paddingLeft: "0.8rem", borderLeft: "3px solid var(--color-accent)" }}>
                {JOB_CATEGORY_LABELS[cat]}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {jobs.map((job) => (
                  <Link key={job.id} href={`/recruit/${job.id}`} className="recruit-card">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
                      <span className="recruit-tag">{job.area}</span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                      {job.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-accent)", marginBottom: "0.6rem" }}>{job.wage}</p>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.8 }}>{job.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .recruit-card {
          display: block;
          background: var(--color-white);
          padding: 1.6rem 1.8rem;
          border-radius: 6px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          text-decoration: none;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .recruit-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .recruit-tag {
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          color: var(--color-accent);
          background: rgba(139,115,85,0.1);
          padding: 0.25rem 0.7rem;
          border-radius: 3px;
        }
      `}</style>
    </main>
  );
}
