"use client";

import { useEffect, useState } from "react";

// サーバーからの型（page.tsxとの互換性維持）
export type TocHeading = { id: string; text: string; level: 2 | 3 };

type InternalHeading = { id: string; text: string; level: 2 | 3 };

export default function ArticleToc(_props: { headings: TocHeading[] }) {
  const [headings, setHeadings] = useState<InternalHeading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    // DOMから直接h2/h3を取得してIDを上書き付与（サーバー注入に依存しない）
    const body = document.querySelector(".article-body");
    if (!body) return;

    const els = Array.from(body.querySelectorAll<HTMLElement>("h2, h3"));
    if (els.length === 0) return;

    const discovered: InternalHeading[] = els.map((el, i) => {
      const id = `toc-${i}`;
      el.id = id; // DOMに直接書き込み
      return {
        id,
        text: el.textContent?.trim() ?? "",
        level: (el.tagName === "H2" ? 2 : 3) as 2 | 3,
      };
    });
    setHeadings(discovered);

    // スクロールスパイ
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 91;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  return (
    <>
      <style>{`
        .toc-link {
          display: block;
          padding: 0.38rem 0.55rem;
          font-size: 0.8rem;
          line-height: 1.55;
          text-decoration: none;
          color: var(--color-text-light);
          border-left: 2px solid rgba(139,115,85,0.2);
          cursor: pointer;
          transition: color 0.18s, border-color 0.18s, background 0.18s;
          border-radius: 0 3px 3px 0;
        }
        .toc-link:hover {
          color: var(--color-accent);
          border-left-color: var(--color-accent);
          background: rgba(139,115,85,0.06);
        }
        .toc-link-h3 {
          padding-left: 1.1rem;
          font-size: 0.74rem;
        }
        .toc-link-active {
          color: var(--color-accent) !important;
          border-left-color: var(--color-accent) !important;
          font-weight: 500;
          background: rgba(139,115,85,0.06);
        }
      `}</style>

      <nav aria-label="目次">
        <p style={{
          fontFamily: "var(--font-en)",
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          color: "var(--color-accent)",
          marginBottom: "0.9rem",
          fontWeight: 700,
        }}>
          CONTENTS
        </p>
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={[
                  "toc-link",
                  level === 3 ? "toc-link-h3" : "",
                  active === id ? "toc-link-active" : "",
                ].join(" ")}
              >
                {text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
