"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  alt: string;
};

export default function PropertyImageSlider({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "340px", overflow: "hidden" }}>
      {/* 画像（クロスフェード） */}
      {images.map((src, i) => (
        <div
          key={i}
          role="img"
          aria-label={`${alt} ${i + 1}`}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      ))}

      {images.length > 1 && (
        <>
          {/* 矢印ボタン */}
          <button
            onClick={prev}
            aria-label="前の写真"
            style={{
              position: "absolute",
              left: "0.8rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.85)")}
          >
            <ChevronLeft size={20} color="var(--color-primary)" />
          </button>
          <button
            onClick={next}
            aria-label="次の写真"
            style={{
              position: "absolute",
              right: "0.8rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.85)")}
          >
            <ChevronRight size={20} color="var(--color-primary)" />
          </button>

          {/* ドットナビ */}
          <div
            style={{
              position: "absolute",
              bottom: "0.8rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
              display: "flex",
              gap: "0.4rem",
              padding: "0.3rem 0.7rem",
              background: "rgba(0,0,0,0.25)",
              borderRadius: "20px",
              backdropFilter: "blur(4px)",
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`写真 ${i + 1}`}
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === current ? "#fff" : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
