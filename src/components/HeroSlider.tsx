"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type Slide = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  cta: { label: string; href: string };
  bg: string;
  overlay: string;
};

const SLIDES_JA: Slide[] = [
  {
    id: "wuto",
    label: "OUR FLAGSHIP BRAND",
    headline: "Wuto",
    sub: "暮らすように、泊まる。\n旅暮らしの夫婦が作った、落ち着ける日本の暮らし。",
    cta: { label: "Wutoを見る", href: "/wuto" },
    bg: "/images/hero-wuto.jpg",
    overlay: "rgba(20,30,48,0.45)",
  },
  {
    id: "about",
    label: "ABOUT US",
    headline: "人生に残る\n日本の旅をつくる",
    sub: "東京の下町で暮らすように旅をし、日本を好きになってもらう。\nそれが私たちの目指すものです。",
    cta: { label: "私たちについて", href: "/about" },
    bg: "/images/hero-vision.jpg",
    overlay: "rgba(20,30,48,0.52)",
  },
  {
    id: "operations",
    label: "MINPAKU OPERATIONS",
    headline: "オーナーと、\n同じ方向へ。",
    sub: "Airbnb運営11年、ホテル・大規模施設の開発経験を背景に、\n運営代行から収益改善まで一括でお引き受けします。",
    cta: { label: "運営代行を見る", href: "/operations" },
    bg: "/images/hero-operations.jpg",
    overlay: "rgba(25,35,50,0.55)",
  },
  {
    id: "wildcard",
    label: "COMING SOON",
    headline: "新施設、\n新小岩エリアへ。",
    sub: "ユカハンの新しい宿泊施設が誕生します。\n詳細は順次お知らせします。",
    cta: { label: "お知らせを見る", href: "/news" },
    bg: "/images/hero-wildcard.jpg",
    overlay: "rgba(30,25,20,0.55)",
  },
];

const SLIDES_EN: Slide[] = [
  {
    id: "wuto",
    label: "OUR FLAGSHIP BRAND",
    headline: "Wuto",
    sub: "Live like a local.\nCreated by a traveling couple for those seeking a calm Japanese home.",
    cta: { label: "Explore Wuto", href: "/en/wuto" },
    bg: "/images/hero-wuto.jpg",
    overlay: "rgba(20,30,48,0.45)",
  },
  {
    id: "about",
    label: "ABOUT US",
    headline: "Creating Japanese travels\nthat last a lifetime",
    sub: "Travel like a local in Tokyo's shitamachi,\nand fall in love with Japan.",
    cta: { label: "About Us", href: "/en/about" },
    bg: "/images/hero-vision.jpg",
    overlay: "rgba(20,30,48,0.52)",
  },
  {
    id: "operations",
    label: "MINPAKU OPERATIONS",
    headline: "Aligned with\nour owners.",
    sub: "11 years of Airbnb, backed by hotel development experience.\nFull-service vacation rental management.",
    cta: { label: "Our Services", href: "/en/operations" },
    bg: "/images/hero-operations.jpg",
    overlay: "rgba(25,35,50,0.55)",
  },
  {
    id: "wildcard",
    label: "COMING SOON",
    headline: "New property,\ncoming soon.",
    sub: "Yuka-Han's newest accommodation is on its way.\nStay tuned for details.",
    cta: { label: "News", href: "/news" },
    bg: "/images/hero-wildcard.jpg",
    overlay: "rgba(30,25,20,0.55)",
  },
];

const SLIDES_ZH: Slide[] = [
  {
    id: "wuto",
    label: "OUR FLAGSHIP BRAND",
    headline: "Wuto",
    sub: "像住家一樣，住宿。\n由旅居夫妻打造，追求真正舒適的日本居家體驗。",
    cta: { label: "了解Wuto", href: "/zh-TW/wuto" },
    bg: "/images/hero-wuto.jpg",
    overlay: "rgba(20,30,48,0.45)",
  },
  {
    id: "about",
    label: "ABOUT US",
    headline: "創造留存一生的\n日本旅行記憶",
    sub: "像在東京下町生活一樣地旅行，\n愛上日本。",
    cta: { label: "關於我們", href: "/zh-TW/about" },
    bg: "/images/hero-vision.jpg",
    overlay: "rgba(20,30,48,0.52)",
  },
  {
    id: "operations",
    label: "MINPAKU OPERATIONS",
    headline: "與業主\n同一方向。",
    sub: "11年的Airbnb運營經驗，以飯店開發為背景，\n提供民宿代營運全方位服務。",
    cta: { label: "了解服務", href: "/zh-TW/operations" },
    bg: "/images/hero-operations.jpg",
    overlay: "rgba(25,35,50,0.55)",
  },
  {
    id: "wildcard",
    label: "COMING SOON",
    headline: "新設施，\n即將登場。",
    sub: "Yuka-Han的全新住宿設施即將誕生。\n詳情敬請期待。",
    cta: { label: "最新消息", href: "/news" },
    bg: "/images/hero-wildcard.jpg",
    overlay: "rgba(30,25,20,0.55)",
  },
];

const SLIDES_BY_LOCALE: Record<string, Slide[]> = {
  ja: SLIDES_JA,
  en: SLIDES_EN,
  "zh-TW": SLIDES_ZH,
};

const DURATION = 7000;

export default function HeroSlider({ locale = "ja" }: { locale?: string }) {
  const SLIDES = SLIDES_BY_LOCALE[locale] ?? SLIDES_JA;

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
    setProgress(0);
  }, [SLIDES.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, [SLIDES.length]);

  // 自動再生 + プログレスバー
  useEffect(() => {
    if (paused) return;
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + (50 / DURATION) * 100, 100));
    }, 50);

    const slideTimer = setTimeout(() => {
      next();
    }, DURATION);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [current, paused, next]);

  // スワイプ対応
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slide = SLIDES[current];

  return (
    <section
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 背景画像（全枚プリロード・クロスフェード） */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${s.overlay}, ${s.overlay}), url('${s.bg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
      ))}

      {/* テキストコンテンツ */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <div key={current} className="hero-content" style={{ maxWidth: "800px", color: "#fff" }}>
          <p className="hero-anim" style={{
            fontFamily: "var(--font-en)",
            fontSize: "0.78rem",
            letterSpacing: "0.35em",
            opacity: 0.85,
            marginBottom: "1.5rem",
          }}>
            {slide.label}
          </p>
          <h1 className="hero-anim" style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 400,
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
            lineHeight: 1.25,
            whiteSpace: "pre-line",
          }}>
            {slide.headline}
          </h1>
          <p className="hero-anim-delay" style={{
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 2,
            opacity: 0.85,
            marginBottom: "2.5rem",
            whiteSpace: "pre-line",
          }}>
            {slide.sub}
          </p>
          <Link href={slide.cta.href} className="hero-cta hero-anim-delay">
            {slide.cta.label}
          </Link>
        </div>
      </div>

      {/* プログレスバー */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        height: "3px",
        background: "rgba(255,255,255,0.15)",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "var(--color-accent)",
          transition: paused ? "none" : "width 50ms linear",
        }} />
      </div>

      {/* ドットナビゲーション */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
        display: "flex",
        gap: "0.6rem",
        alignItems: "center",
      }}>
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "var(--color-accent)" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>

      {/* 前後矢印ボタン */}
      <button onClick={prev} aria-label="Previous slide" className="hero-arrow hero-arrow-prev">‹</button>
      <button onClick={next} aria-label="Next slide" className="hero-arrow hero-arrow-next">›</button>

      <style>{`
        .hero-anim {
          animation: heroFadeUp 0.8s ease forwards;
        }
        .hero-anim-delay {
          animation: heroFadeUp 0.8s ease 0.18s both;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-cta {
          display: inline-block;
          padding: 0.9rem 2.8rem;
          border: 1px solid rgba(255,255,255,0.8);
          color: #fff;
          text-decoration: none;
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .hero-cta:hover {
          background: #fff;
          color: var(--color-primary);
          border-color: #fff;
        }
        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.6rem;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s;
          backdrop-filter: blur(4px);
        }
        .hero-arrow:hover { background: rgba(255,255,255,0.2); }
        .hero-arrow-prev { left: 2rem; }
        .hero-arrow-next { right: 2rem; }
        @media (max-width: 768px) {
          .hero-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
