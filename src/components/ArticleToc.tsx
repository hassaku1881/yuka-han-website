"use client";

import { useEffect, useState } from "react";

export type TocHeading = { id: string; text: string; level: 2 | 3 };

export default function ArticleToc({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 画面上部に最も近い見出しをアクティブに
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
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
        {headings.map(({ id, text, level }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 92;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                style={{
                  display: "block",
                  paddingTop: "0.35rem",
                  paddingBottom: "0.35rem",
                  paddingLeft: level === 3 ? "1.1rem" : "0.55rem",
                  fontSize: level === 2 ? "0.8rem" : "0.74rem",
                  lineHeight: 1.55,
                  color: isActive ? "var(--color-accent)" : "var(--color-text-light)",
                  textDecoration: "none",
                  borderLeft: isActive
                    ? "2px solid var(--color-accent)"
                    : "2px solid rgba(139,115,85,0.18)",
                  fontWeight: isActive ? 500 : 400,
                  transition: "color 0.2s, border-color 0.2s, font-weight 0.2s",
                }}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
