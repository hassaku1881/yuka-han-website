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
              "@id": `${BASE_URL}/#organization`,
              name: "株式会社ユカハン",
              legalName: "株式会社ユカハン",
              alternateName: ["Yuka-Han & Co.", "ユカハン", "Yuka-Han"],
              url: BASE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.png`,
                width: 258,
                height: 61,
              },
              image: `${BASE_URL}/og-default.jpg`,
              description:
                "東京を中心とした宿泊施設の企画・開発・運用、民泊運営代行、撮影スタジオ運営を行う会社。",
              foundingDate: "2020-05-01",
              founders: [
                { "@type": "Person", name: "范 凱翔", alternateName: "Han Gaisho", jobTitle: "代表取締役" },
                { "@type": "Person", name: "山本 悠佳", alternateName: "Yuka Yamamoto", jobTitle: "代表取締役" },
              ],
              // 国税庁 法人番号
              taxID: "1011703002545",
              email: "contact@yuka-han.com",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@yuka-han.com",
                url: `${BASE_URL}/contact`,
                availableLanguage: ["Japanese", "English", "Chinese"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "JP",
                postalCode: "124-0003",
                addressRegion: "東京都",
                addressLocality: "葛飾区",
                streetAddress: "お花茶屋2-5-21",
              },
              location: [
                {
                  "@type": "Place",
                  name: "本社",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "JP",
                    postalCode: "124-0003",
                    addressRegion: "東京都",
                    addressLocality: "葛飾区",
                    streetAddress: "お花茶屋2-5-21",
                  },
                },
                {
                  "@type": "Place",
                  name: "新宿オフィス",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "JP",
                    postalCode: "160-0022",
                    addressRegion: "東京都",
                    addressLocality: "新宿区",
                    streetAddress: "新宿1-36-2 新宿第七葉山ビル3F",
                  },
                },
              ],
              brand: [
                { "@type": "Brand", name: "Wuto", url: `${BASE_URL}/wuto` },
                { "@type": "Brand", name: "STUDIOウト", url: "https://studio.yuka-han.com/wuto" },
              ],
              sameAs: [
                "https://studio.yuka-han.com",
                "https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=1011703002545",
              ],
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
