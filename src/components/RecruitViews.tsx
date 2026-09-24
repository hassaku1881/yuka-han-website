import Link from "next/link";
import type { ReactNode } from "react";
import { BASE_URL } from "@/lib/constants";
import {
  JOB_CATEGORY_LABELS,
  JOB_CATEGORY_LABELS_EN,
  OCCUPATION_LABELS,
  OCCUPATION_LABELS_EN,
  jobContent,
  type Occupation,
  type Job,
  type JobCategory,
  type JobContent,
  type RecruitLocale,
} from "@/lib/jobs";

const UI = {
  ja: {
    heading: "採用情報",
    empty: "現在募集中の求人はありません。",
    back: "← 採用情報一覧",
    requirements: "募集要項",
    applyMail: "メールで応募する",
    applyForm: "応募フォームへ進む",
    registerForm: "登録フォームへ進む",
    toAirwork: "Airワークの応募フォームに移動します。",
    applyTo: "応募先",
    mailSubject: "【応募】",
    employer: "募集者",
    employerRows: [
      { label: "名称", value: "株式会社ユカハン" },
      { label: "所在地", value: "〒124-0003 東京都葛飾区お花茶屋2-5-21" },
      { label: "連絡先", value: "contact@yuka-han.com" },
    ],
    posted: "掲載開始日",
    updated: "最終更新日",
    privacy: "ご応募いただいた個人情報は、採用選考および選考に関するご連絡・採否の通知のために使用し、それ以外の目的には使用しません。詳しくは",
    privacyLink: "プライバシーポリシー",
    privacyTail: "をご覧ください。",
    terms: "お仕事の条件の詳細（登録スタッフ規約）",
    categories: JOB_CATEGORY_LABELS,
    occupations: OCCUPATION_LABELS,
  },
  en: {
    heading: "Careers",
    empty: "There are no open positions at the moment.",
    back: "← All positions",
    requirements: "Details",
    applyMail: "Apply by email",
    applyForm: "Go to application form",
    registerForm: "Go to registration form",
    toAirwork: "You will be taken to our application form on Airwork.",
    applyTo: "Send to",
    mailSubject: "[Application] ",
    employer: "Hiring company",
    employerRows: [
      { label: "Name", value: "Yuka-Han & Co. (株式会社ユカハン)" },
      { label: "Address", value: "2-5-21 Ohanajaya, Katsushika-ku, Tokyo 124-0003, Japan" },
      { label: "Contact", value: "contact@yuka-han.com" },
    ],
    posted: "Posted",
    updated: "Last updated",
    privacy: "The personal information you send us is used only for the selection process and for contacting you about it and its result. See our",
    privacyLink: "Privacy Policy",
    privacyTail: ".",
    terms: "Full work conditions (Registered Staff Terms, in Japanese)",
    categories: JOB_CATEGORY_LABELS_EN,
    occupations: OCCUPATION_LABELS_EN,
  },
} as const;

const occupationOrder: Occupation[] = ["facility", "support", "sales"];
const categoryOrder: JobCategory[] = ["part", "contract", "registered"];
const fmtDate = (d: string, locale: RecruitLocale) =>
  new Date(`${d}T00:00:00+09:00`).toLocaleDateString(locale === "ja" ? "ja-JP" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  });
const privacyPath = (locale: RecruitLocale) => (locale === "ja" ? "/privacy" : `/${locale}/privacy`);

const basePath = (locale: RecruitLocale) => (locale === "ja" ? "/recruit" : `/${locale}/recruit`);

const sharedStyles = `
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
    line-height: 1.9;
    text-align: left;
    vertical-align: top;
  }
  .recruit-td { white-space: pre-line; }
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
`;

// ── 一覧 ──────────────────────────────────────────────────────────

export function RecruitList({ locale, jobs, intro }: { locale: RecruitLocale; jobs: Job[]; intro: ReactNode }) {
  const ui = UI[locale];
  // 職種 → その中を雇用区分で分ける
  const groups = occupationOrder
    .map((occ) => ({
      occ,
      subs: categoryOrder
        .map((cat) => ({
          cat,
          items: jobs
            .filter((j) => j.occupation === occ && j.category === cat)
            .map((j) => ({ job: j, c: jobContent(j, locale) }))
            .filter((x): x is { job: Job; c: JobContent } => x.c !== null),
        }))
        .filter((s) => s.items.length > 0),
    }))
    .filter((g) => g.subs.length > 0);

  return (
    <main style={{ paddingTop: "72px" }}>
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(20,30,48,0.5), rgba(20,30,48,0.65)), url('/images/20250711-02.jpg') center / cover no-repeat",
          color: "var(--color-white)",
          padding: "5rem 2rem",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--color-accent)", marginBottom: "0.8rem" }}>
            RECRUIT
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 500, letterSpacing: "0.08em" }}>{ui.heading}</h1>
        </div>
      </section>

      <section style={{ padding: "4.5rem 8% 4rem", background: "var(--color-white)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", fontSize: "0.98rem", lineHeight: 2.1, color: "var(--color-text-light)" }}>
          {intro}
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {jobs.length > 0 && (
            <p style={{ textAlign: "right", fontSize: "0.8rem", color: "var(--color-text-light)", marginBottom: "1.5rem" }}>
              {ui.updated}：{fmtDate(jobs.map((j) => j.updatedAt).sort().at(-1)!, locale)}
            </p>
          )}
          {groups.length === 0 && <p style={{ textAlign: "center", color: "var(--color-text-light)" }}>{ui.empty}</p>}
          {groups.map(({ occ, subs }) => (
            <div key={occ} style={{ marginBottom: "3.5rem" }}>
              <h2 className="recruit-h2" style={{ fontSize: "1.2rem", marginBottom: "1.4rem" }}>{ui.occupations[occ]}</h2>
              {subs.map(({ cat, items }) => (
                <div key={cat} style={{ marginBottom: "1.8rem" }}>
                  <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text-light)", letterSpacing: "0.05em", marginBottom: "0.8rem" }}>
                    {ui.categories[cat]}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {items.map(({ job, c }) => (
                      <Link key={job.id} href={`${basePath(locale)}/${job.id}`} className="recruit-card">
                        <div style={{ marginBottom: "0.6rem" }}>
                          <span className="recruit-tag">{c.area}</span>
                        </div>
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--color-primary)", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                          {c.title}
                        </h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--color-accent)", marginBottom: "0.6rem" }}>{c.wage}</p>
                        <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.8 }}>{c.summary}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <style>{sharedStyles}</style>
    </main>
  );
}

// ── 詳細 ──────────────────────────────────────────────────────────

const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function jobPostingJsonLd(job: Job, c: JobContent) {
  const description = [
    `<p>${escapeHtml(c.summary)}</p>`,
    ...c.sections.map((s) => `<h3>${escapeHtml(s.heading)}</h3><p>${escapeHtml(s.text).replace(/\n/g, "<br>")}</p>`),
    `<ul>${c.facts.map((f) => `<li>${escapeHtml(f.label)}: ${escapeHtml(f.value)}</li>`).join("")}</ul>`,
  ].join("");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: c.title,
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
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "JP" } }
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

export function RecruitDetail({ job, locale }: { job: Job; locale: RecruitLocale }) {
  const ui = UI[locale];
  const c = jobContent(job, locale)!;
  const mailto = `mailto:contact@yuka-han.com?subject=${encodeURIComponent(`${ui.mailSubject}${c.title}（${c.area}）`)}`;
  const isExternal = !!job.applyUrl;
  const applyHref = job.applyUrl ?? mailto;

  return (
    <main style={{ paddingTop: "72px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd(job, c)).replace(/</g, "\\u003c") }}
      />

      <section style={{ padding: "4rem 8% 2.5rem", background: "var(--color-white)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Link href={basePath(locale)} style={{ fontSize: "0.82rem", color: "var(--color-accent)", textDecoration: "none" }}>
            {ui.back}
          </Link>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", margin: "1.8rem 0 0.9rem" }}>
            <span className="recruit-tag">{ui.occupations[job.occupation]}</span>
            <span className="recruit-tag">{ui.categories[job.category]}</span>
            <span className="recruit-tag">{c.area}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 500, color: "var(--color-primary)", lineHeight: 1.5, marginBottom: "0.8rem" }}>
            {c.title}
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--color-accent)" }}>{c.wage}</p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-text-light)", marginTop: "0.8rem" }}>
            {ui.posted}：{fmtDate(job.datePosted, locale)}　{ui.updated}：{fmtDate(job.updatedAt, locale)}
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "3rem 8% 6rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "var(--color-white)", borderRadius: "8px", padding: "2.5rem clamp(1.2rem, 4vw, 3rem)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          {c.sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: "2.5rem" }}>
              <h2 className="recruit-h2">{s.heading}</h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 2, color: "var(--color-text)", whiteSpace: "pre-line" }}>{s.text}</p>
            </div>
          ))}

          {job.termsUrl && (
            <p style={{ marginBottom: "2.5rem", fontSize: "0.9rem" }}>
              <a href={job.termsUrl} target="_blank" rel="noopener" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>
                {ui.terms}
              </a>
            </p>
          )}

          {c.facts.length > 0 && (
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 className="recruit-h2">{ui.requirements}</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {c.facts.map((f) => (
                    <tr key={f.label}>
                      <th className="recruit-th">{f.label}</th>
                      <td className="recruit-td">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 className="recruit-h2">{ui.employer}</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {ui.employerRows.map((r) => (
                  <tr key={r.label}>
                    <th className="recruit-th">{r.label}</th>
                    <td className="recruit-td">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
              {isExternal ? ui.applyForm : ui.applyMail}
            </a>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-light)", marginTop: "1rem", lineHeight: 1.8 }}>
              {c.note ?? (isExternal && job.applyUrl?.includes("arwrk.net") ? ui.toAirwork : "")}
              {!isExternal && (
                <>
                  <br />
                  {ui.applyTo}: contact@yuka-han.com
                </>
              )}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-light)", marginTop: "0.8rem", lineHeight: 1.8, textAlign: "left" }}>
              {ui.privacy} <Link href={privacyPath(locale)} style={{ color: "var(--color-accent)" }}>{ui.privacyLink}</Link>{ui.privacyTail}
            </p>
          </div>
        </div>
      </section>
      <style>{sharedStyles}</style>
    </main>
  );
}
