export const FALLBACK_IMAGES: Record<string, string> = {
  BUSINESS:     "/images/articles-business.jpg",
  INTERIOR:     "/images/articles-interior.jpg",
  "AREA GUIDE": "/images/articles-area-guide.jpg",
  OTHERS:       "/images/20241109-32.jpg",
  DEFAULT:      "/images/20241109-32.jpg",
};

export function getFallback(category?: string) {
  if (!category) return FALLBACK_IMAGES.DEFAULT;
  return FALLBACK_IMAGES[category] ?? FALLBACK_IMAGES.DEFAULT;
}

export function getReadingTime(body: string): number {
  const chars = body.replace(/<[^>]+>/g, "").length;
  return Math.max(1, Math.ceil(chars / 500));
}

export const ARTICLE_CATEGORIES = [
  { key: "ALL",         label: "ALL" },
  { key: "BUSINESS",   label: "BUSINESS" },
  { key: "INTERIOR",   label: "INTERIOR" },
  { key: "AREA GUIDE", label: "AREA GUIDE" },
  { key: "OTHERS",     label: "OTHERS" },
] as const;
