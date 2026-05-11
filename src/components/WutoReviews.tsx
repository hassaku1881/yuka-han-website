"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { reviews, type Review } from "@/lib/reviews";


function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: "var(--color-white)",
      borderRadius: "8px",
      padding: "1.8rem",
      boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      breakInside: "avoid",
      marginBottom: "1.5rem",
    }}>
      {/* 星 + 国旗 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
        <div style={{ display: "flex", gap: "2px" }}>
          {[...Array(review.rating)].map((_, j) => (
            <Star key={j} size={13} fill="var(--color-accent)" color="var(--color-accent)" />
          ))}
        </div>
        <span style={{ fontSize: "1.3rem" }}>{review.flag}</span>
      </div>

      {/* 日本語テキスト */}
      <p style={{
        fontSize: "0.88rem",
        lineHeight: 1.9,
        color: "var(--color-text-light)",
        fontStyle: "italic",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: expanded ? undefined : 4,
        WebkitBoxOrient: "vertical",
        marginBottom: "0.5rem",
      }}>
        &ldquo;{review.ja}&rdquo;
      </p>

      {/* 原文（展開時のみ） */}
      {expanded && review.original && (
        <p style={{
          fontSize: "0.78rem",
          lineHeight: 1.8,
          color: "rgba(0,0,0,0.35)",
          marginBottom: "0.8rem",
          paddingTop: "0.8rem",
          borderTop: "1px solid #f0f0f0",
        }}>
          {review.original}
        </p>
      )}

      {/* 展開ボタン + 著者 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem" }}>
        <p style={{
          fontSize: "0.78rem",
          color: "var(--color-primary)",
          fontFamily: "var(--font-en)",
          letterSpacing: "0.05em",
        }}>
          {review.author}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
            fontSize: "0.72rem",
            color: "var(--color-accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.2rem 0",
            letterSpacing: "0.05em",
          }}
        >
          {expanded ? (
            <><ChevronUp size={13} /> 閉じる</>
          ) : (
            <><ChevronDown size={13} /> 続きを見る</>
          )}
        </button>
      </div>
    </div>
  );
}

export default function WutoReviews() {
  return (
    <section id="reviews" style={{ background: "var(--color-bg)", padding: "5rem 8%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <p style={{
            fontFamily: "var(--font-en)",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "var(--color-accent)",
            marginBottom: "0.5rem",
          }}>GUEST REVIEWS</p>
          <h2 style={{
            fontFamily: "var(--font-en)",
            fontSize: "2.5rem",
            fontWeight: 400,
            color: "var(--color-primary)",
            marginBottom: "0.5rem",
          }}>ゲストの声</h2>
        </div>

        {/* 評価サマリー */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}>
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-en)",
              fontSize: "3rem",
              fontWeight: 300,
              color: "var(--color-primary)",
              lineHeight: 1,
              marginBottom: "0.3rem",
            }}>4.97</p>
            <div style={{ display: "flex", gap: "2px", justifyContent: "center", marginBottom: "0.3rem" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />
              ))}
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", letterSpacing: "0.05em" }}>
              Airbnb 5施設平均評価
            </p>
          </div>
          <div style={{ width: "1px", height: "60px", background: "#ddd" }} className="review-divider" />
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-en)",
              fontSize: "3rem",
              fontWeight: 300,
              color: "var(--color-primary)",
              lineHeight: 1,
              marginBottom: "0.3rem",
            }}>5/5</p>
            <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", letterSpacing: "0.05em" }}>
              全施設 Airbnb ゲストチョイス獲得
            </p>
          </div>
        </div>

        {/* レビューカード masonry */}
        <div style={{ columns: 3, columnGap: "1.5rem" }} className="reviews-masonry">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-masonry { columns: 1 !important; }
          .review-divider { display: none; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-masonry { columns: 2 !important; }
        }
      `}</style>
    </section>
  );
}
