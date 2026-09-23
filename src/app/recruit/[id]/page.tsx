import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";
import { publishedJobs, getJob, JOB_CATEGORY_LABELS, type Job } from "@/lib/jobs";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedJobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);
  if (!job) return {};
  return {
    title: `${job.title}（${job.area}）| 採用情報 | 株式会社ユカハン`,
    description: job.summary,
    alternates: { canonical: `${BASE_URL}/recruit/${job.id}` },
  };
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function jobPostingJsonLd(job: Job) {
  const description = [
    `<p>${escapeHtml(job.summary)}</p>`,
    ...job.sections.map(
      (s) => `<h3>${escapeHtml(s.heading)}</h3><p>${escapeHtml(s.text).replace(/\n/g, "<br>")}</p>`
    ),
    `<ul>${job.facts.map((f) => `<li>${escapeHtml(f.label)}：${escapeHtml(f.value)}</li>`).join("")}</ul>`,
  ].join("");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    datePosted: job.datePosted,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "株式会社ユカハン",
      sameAs: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
    ...(job.remote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "JP" },
        }
      : {
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "JP",
              addressRegion: "東京都",
              addressLocality: job.locality,
              ...(job.streetAddress && { streetAddress: job.streetAddress }),
            },
          },
        }),
    ...(job.hourlyWage && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "JPY",
        value: { "@type": "QuantitativeValue", value: job.hourlyWage, unitText: "HOUR" },
      },
    }),
    directApply: !job.applyUrl,
  };
}

export default async function RecruitDetailPage({ params }: Props) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();

  const mailto = `mailto:contact@yuka-han.com?subject=${encodeURIComponent(`【応募】${job.title}（${job.area}）`)}`;
  const applyHref = job.applyUrl ?? mailto;
  const isExternal = !!job.applyUrl;

  return (
    <main style={{ paddingTop: "72px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd(job)).replace(/</g, "\\u003c") }}
      />

      <section style={{ padding: "4rem 8% 2.5rem", background: "var(--color-white)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Link href="/recruit" style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}>
            ← 採用情報一覧
          </Link>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", margin: "1.8rem 0 0.9rem" }}>
            <span className="recruit-tag">{JOB_CATEGORY_LABELS[job.category]}</span>
            <span className="recruit-tag">{job.area}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.5, marginBottom: "0.8rem" }}>
            {job.title}
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--color-accent)" }}>{job.wage}</p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "3rem 8% 6rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "var(--color-white)", borderRadius: "8px", padding: "2.5rem clamp(1.2rem, 4vw, 3rem)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          {job.sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: "2.5rem" }}>
              <h2 className="recruit-h2">{s.heading}</h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 2, color: "var(--color-text)", whiteSpace: "pre-line" }}>{s.text}</p>
            </div>
          ))}

          {job.facts.length > 0 && (
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 className="recruit-h2">募集要項</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {job.facts.map((f) => (
                    <tr key={f.label}>
                      <th className="recruit-th">{f.label}</th>
                      <td className="recruit-td">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <a
              href={applyHref}
              {...(isExternal && { target: "_blank", rel: "noopener" })}
              style={{
                display: "inline-block",
                padding: "1rem 3rem",
                background: "var(--color-accent)",
                color: "var(--color-white)",
                textDecoration: "none",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                borderRadius: "4px",
              }}
            >
              {isExternal ? "応募フォームへ進む" : "メールで応募する"}
            </a>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-light)", marginTop: "1rem", lineHeight: 1.8 }}>
              {job.note ?? (isExternal ? "Airワークの応募フォームに移動します。" : "")}
              {!isExternal && (
                <>
                  <br />
                  応募先：contact@yuka-han.com
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .recruit-tag {
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          color: var(--color-accent);
          background: rgba(139,115,85,0.1);
          padding: 0.25rem 0.7rem;
          border-radius: 3px;
        }
        .recruit-h2 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 0.9rem;
          padding-left: 0.8rem;
          border-left: 3px solid var(--color-accent);
        }
        .recruit-th, .recruit-td {
          padding: 0.8rem 0.9rem;
          border-bottom: 1px solid #eee;
          font-size: 0.9rem;
          line-height: 1.8;
          text-align: left;
          vertical-align: top;
        }
        .recruit-th {
          width: 28%;
          background: #f8f6f2;
          font-weight: 500;
          color: var(--color-primary);
        }
        @media (max-width: 600px) {
          .recruit-th, .recruit-td { display: block; width: 100%; }
          .recruit-th { border-bottom: none; padding-bottom: 0.3rem; }
        }
      `}</style>
    </main>
  );
}
