"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  {
    id: "vision",
    label: "CORPORATE VISION",
    headline: "東京の宿泊体験を、\nもっと豊かに。",
    sub: "宿泊を通じて、旅人と街をつなぐ。\n株式会社ユカハンは、東京を拠点に\n新しい滞在の形を創り続けます。",
    cta: { label: "会社を知る", href: "/about" },
    bg: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920",
    overlay: "rgba(20,30,48,0.58)",
  },
  {
    id: "wuto",
    label: "SMALL LUXURY STAYS IN TOKYO",
    headline: "Wuto",
    sub: "暮らすように、泊まる。\n— JAPANDI STYLE ACCOMMODATION —",
    cta: { label: "Wutoを見る", href: "/wuto" },
    bg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920",
    overlay: "rgba(44,62,80,0.50)",
  },
  {
    id: "operations",
    label: "ACCOMMODATION OPERATIONS",
    headline: "11年の実績が、\nあなたの物件を動かす。",
    sub: "予約管理・ゲスト対応・清掃手配まで一括対応。\nAirbnb平均評価4.9を支える運営ノウハウで\nオーナー様の収益を最大化します。",
    cta: { label: "運営受託を相談する", href: "/service" },
    bg: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920",
    overlay: "rgba(25,35,50,0.62)",
  },
  {
    id: "property",
    label: "OUR PROPERTIES",
    headline: "東京下町に佇む、\n特別な滞在を。",
    sub: "駅徒歩5分以内の好立地。\nJapandiスタイルで統一された空間で、\nまるで自宅のようにくつろぐ体験を。",
    cta: { label: "施設を見る", href: "/wuto" },
    bg: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920",
    overlay: "rgba(30,35,45,0.58)",
  },
  {
    id: "wildcard",
    label: "COMING SOON",
    headline: "新施設、\n2026年5月下旬オープン予定。",
    sub: "お花茶屋エリアに、新しいWutoが誕生します。\nJapandiの美意識を纏った新たな空間を\nどうぞお楽しみに。",
    cta: { label: "お知らせを見る", href: "/news" },
    bg: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920",
    overlay: "rgba(40,30,20,0.62)",
  },
];

const DURATION = 7000;

export default function HeroSlider() {
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
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

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

      {/* テキストコンテンツ（keyでスライド毎にアニメーション再起動） */}
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
            aria-label={`スライド ${i + 1}`}
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
      <button onClick={prev} aria-label="前のスライド" className="hero-arrow hero-arrow-prev">‹</button>
      <button onClick={next} aria-label="次のスライド" className="hero-arrow hero-arrow-next">›</button>

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
