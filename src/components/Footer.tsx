"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { type Locale } from "@/lib/i18n";

type LinkDef = { path: string; label: string; localized: boolean };

const t: Record<
  Locale,
  {
    companyLines: string[];
    business: LinkDef[];
    company: LinkDef[];
  }
> = {
  ja: {
    companyLines: ["株式会社ユカハン", "〒124-0003", "東京都葛飾区お花茶屋2-5-21"],
    business: [
      { path: "/wuto", label: "Wuto", localized: true },
      { path: "/operations", label: "民泊運営代行", localized: true },
      { path: "/articles", label: "コラム", localized: true },
    ],
    company: [
      { path: "/about", label: "会社概要", localized: true },
      { path: "/news", label: "お知らせ", localized: false },
      { path: "/contact", label: "お問い合わせ", localized: true },
      { path: "/privacy", label: "プライバシーポリシー", localized: true },
    ],
  },
  en: {
    companyLines: ["Yuka-Han & Co.", "2-5-21 Ohanajaya, Katsushika-ku", "Tokyo 124-0003, Japan"],
    business: [
      { path: "/wuto", label: "Wuto", localized: true },
      { path: "/operations", label: "Operations", localized: true },
      { path: "/articles", label: "Articles", localized: true },
    ],
    company: [
      { path: "/about", label: "About", localized: true },
      { path: "/news", label: "News", localized: false },
      { path: "/contact", label: "Contact", localized: true },
      { path: "/privacy", label: "Privacy Policy", localized: true },
    ],
  },
  "zh-TW": {
    companyLines: ["株式会社ユカハン（Yuka-Han & Co.）", "〒124-0003", "東京都葛飾區お花茶屋2-5-21"],
    business: [
      { path: "/wuto", label: "Wuto", localized: true },
      { path: "/operations", label: "民宿營運代行", localized: true },
      { path: "/articles", label: "專欄", localized: true },
    ],
    company: [
      { path: "/about", label: "公司概要", localized: true },
      { path: "/news", label: "最新消息", localized: false },
      { path: "/contact", label: "聯絡我們", localized: true },
      { path: "/privacy", label: "隱私權政策", localized: true },
    ],
  },
};

export default function Footer() {
  const pathname = usePathname();
  const match = pathname.match(/^\/(en|zh-TW)(\/|$)/);
  const locale = (match ? match[1] : "ja") as Locale;
  const content = t[locale];

  // ロケール版があるページのみ言語プレフィックスを付与
  const href = (link: LinkDef) =>
    locale === "ja" || !link.localized ? link.path : `/${locale}${link.path}`;
  const homeHref = locale === "ja" ? "/" : `/${locale}`;

  return (
    <footer
      id="contact"
      style={{
        background: "var(--color-primary)",
        color: "var(--color-white)",
        padding: "4rem 8% 2rem",
      }}
    >
      <div className="footer-grid">
        <div>
          <Link href={homeHref} style={{ display: "inline-block", marginBottom: "1rem" }}>
            <Image
              src="/logo.png"
              alt="株式会社ユカハン"
              width={258}
              height={61}
              style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.8 }}>
            {content.companyLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < content.companyLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div>
          <h4 className="footer-nav-heading">BUSINESS</h4>
          {content.business.map((link) => (
            <Link key={link.path} href={href(link)} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="footer-nav-heading">COMPANY</h4>
          {content.company.map((link) => (
            <Link key={link.path} href={href(link)} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 株式会社ユカハン (Yuka-Han &amp; Co.) All Rights Reserved.</p>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto 3rem;
        }
        .footer-logo {
          font-family: var(--font-en);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-white);
          text-decoration: none;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 1rem;
        }
        .footer-nav-heading {
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          opacity: 0.6;
        }
        .footer-nav-link {
          display: block;
          color: var(--color-white);
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.3rem 0;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .footer-nav-link:hover { opacity: 1; }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.8rem;
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
