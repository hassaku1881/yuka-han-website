"use client";

import { useEffect, useState } from "react";

export default function ArticleProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: "72px",
      left: 0,
      right: 0,
      height: "3px",
      background: "rgba(20,30,48,0.08)",
      zIndex: 200,
      pointerEvents: "none",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "var(--color-accent)",
        transition: "width 80ms linear",
      }} />
    </div>
  );
}
