// CSS background-image 用の最適化URL。
// width は next.config の deviceSizes（640, 750, 828, 1080, 1200, 1920, 2048, 3840）のいずれかにすること。
export type BgWidth = 640 | 750 | 828 | 1080 | 1200 | 1920 | 2048 | 3840;

export function optimizedImage(src: string, width: BgWidth): string {
  if (src.startsWith("/")) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
  }
  if (src.includes("images.microcms-assets.io")) {
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}&fm=webp&q=75`;
  }
  return src;
}
