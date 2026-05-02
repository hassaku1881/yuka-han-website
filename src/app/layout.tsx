import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BASE_URL } from "@/lib/constants";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const OGP_IMAGE = `${BASE_URL}/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "株式会社ユカハン | Yuka-Han & Co.",
    template: "%s | Yuka-Han",
  },
  description:
    "東京を中心に宿泊施設の企画・開発・運用を行う株式会社ユカハン（Yuka-Han & Co.）。主力ブランド「Wuto」でスモールラグジュアリーな滞在体験を提供。民泊運営代行も。",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "株式会社ユカハン",
    title: "株式会社ユカハン | Yuka-Han & Co.",
    description:
      "東京を中心に宿泊施設の企画・開発・運用を行う株式会社ユカハン（Yuka-Han & Co.）。主力ブランド「Wuto」でスモールラグジュアリーな滞在体験を提供。民泊運営代行も。",
    images: [{ url: OGP_IMAGE, width: 1200, height: 630, alt: "株式会社ユカハン" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ユカハン | Yuka-Han & Co.",
    description:
      "東京を中心に宿泊施設の企画・開発・運用を行う株式会社ユカハン（Yuka-Han & Co.）。主力ブランド「Wuto」でスモールラグジュアリーな滞在体験を提供。民泊運営代行も。",
    images: [OGP_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${cormorant.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3KBC10PGH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3KBC10PGH');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "株式会社ユカハン",
              alternateName: "Yuka-Han & Co.",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Japanese"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "JP",
                addressRegion: "東京都",
              },
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
