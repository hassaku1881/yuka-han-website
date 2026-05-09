"use client";

import { useEffect, useRef, useState } from "react";

export type TocHeading = { id: string; text: string; level: 2 | 3 };

export default function ArticleToc({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const rafRef = useRef<number>(0);

  // IDをDOM要素に付与 + rAFスクロールスパイ
  useEffect(() => {
    if (headings.length === 0) return;

    // すべてのh2/h3にIDを直接セット（既存idを上書き）
    const body = document.querySelector(".article-body");
    if (!body) return;
    const els = Array.from(body.querySelectorAll<HTMLElement>("h2, h3"));
    els.forEach((el, i) => {
      if (headings[i]) el.id = headings[i].id;
    });

    // rAFで毎フレーム位置チェック
    let lastId = "";
    const tick = () => {
      let found = "";
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) found = id; // 画面上端+120px以内なら候補
      }
      if (found !== lastId) {
        lastId = found;
        setActiveId(found);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        .toc-link-wrap:hover { background: rgba(139,115,85,0.07) !important; }
        .toc-link-wrap:hover .toc-text { color: var(--color-accent) !important; }
      `}</style>
      <nav aria-label="目次">
        <p
          style={{
            fontFamily: "var(--font-en)",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            color: "var(--color-accent)",
            marginBottom: "0.9rem",
            fontWeight: 700,
          }}
        >
          CONTENTS
        </p>
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {headings.map(({ id, text, level }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className="toc-link-wrap"
                  style={{
                    display: "block",
                    padding: "0.38rem 0.55rem",
                    paddingLeft: level === 3 ? "1.2rem" : "0.55rem",
                    textDecoration: "none",
                    cursor: "pointer",
                    borderLeft: isActive
                      ? "3px solid var(--color-primary)"
                      : "2px solid rgba(139,115,85,0.2)",
                    background: isActive ? "rgba(44,62,80,0.07)" : "transparent",
                    borderRadius: "0 3px 3px 0",
                    transition: "background 0.15s",
                  }}
                >
                  <span
                    className="toc-text"
                    style={{
                      display: "block",
                      fontSize: level === 3 ? "0.74rem" : "0.8rem",
                      lineHeight: 1.55,
                      color: isActive ? "var(--color-primary)" : "var(--color-text-light)",
                      fontWeight: isActive ? 600 : 400,
                      transition: "color 0.15s",
                    }}
                  >
                    {text}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
