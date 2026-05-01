import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧ランダムID → 新フォーマットID へのリダイレクト
      {
        source: "/articles/y_v8jj93a1",
        destination: "/articles/2026010012",
        permanent: true,
      },
      {
        source: "/articles/qnsjwoza43j6",
        destination: "/articles/2026020013",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
