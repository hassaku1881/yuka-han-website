"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Locale = "ja" | "en" | "zh-TW";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/wuto", label: "Wuto" },
  { href: "/service", label: "Service" },
  { href: "/articles", label: "Articles" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const locales: { key: Locale; label: string }[] = [
  { key: "ja", label: "JP" },
  { key: "en", label: "EN" },
  { key: "zh-TW", label: "繁中" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("ja");
  const [scrolled, setScrolled] = useState(false);

  // スクロール検知（タスク7と共通）
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニュー開閉時のbodyスクロールロック
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleLocaleChange = (locale: Locale) => {
    setCurrentLocale(locale);
    console.log(`Locale changed to: ${locale}`);
    // TODO: next-intl実装時にルーティング切替を追加
  };

  // スクロール前は透明背景+白文字、後は白背景+ダーク文字
  const textColor = scrolled ? "var(--color-primary)" : "#ffffff";
  const navLinkHoverClass = scrolled ? "header-nav-link-scrolled" : "header-nav-link-top";

  // 言語切替UI（デスクトップ・モバイル共通）
  const LangSwitch = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: mobile ? "0.6rem" : "0.4rem",
        ...(mobile ? { marginTop: "1.5rem" } : { marginLeft: "1rem", paddingLeft: "1rem", borderLeft: `1px solid ${scrolled ? "#ddd" : "rgba(255,255,255,0.3)"}` }),
      }}
    >
      {locales.map((locale, index) => (
        <span key={locale.key} style={{ display: "flex", alignItems: "center", gap: mobile ? "0.6rem" : "0.4rem" }}>
          {index > 0 && (
            <span style={{ opacity: 0.4, fontSize: mobile ? "0.85rem" : "0.75rem", color: mobile ? "var(--color-primary)" : textColor }}>
              /
            </span>
          )}
          <button
            onClick={() => {
              handleLocaleChange(locale.key);
              if (mobile) setIsOpen(false);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: mobile ? "0.95rem" : "0.75rem",
              fontWeight: currentLocale === locale.key ? 700 : 400,
              color: mobile ? "var(--color-primary)" : textColor,
              opacity: currentLocale === locale.key ? 1 : 0.6,
              padding: 0,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { if (currentLocale !== locale.key) e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { if (currentLocale !== locale.key) e.currentTarget.style.opacity = "0.6"; }}
          >
            {locale.label}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.05)" : "none",
        zIndex: 1000,
        padding: "1rem 4%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        style={{
          fontFamily: "var(--font-en)",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: textColor,
          textDecoration: "none",
          letterSpacing: "0.1em",
          zIndex: 1001,
          transition: "color 0.3s",
        }}
      >
        YUKAHAN
      </Link>

      {/* Desktop Nav */}
      <nav className="header-desktop-nav">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`header-nav-link ${navLinkHoverClass}`}
            style={{ color: textColor }}
          >
            {link.label}
          </Link>
        ))}
        <LangSwitch />
      </nav>

      {/* Hamburger Button */}
      <button
        className="header-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: textColor,
          display: "none",
          padding: "4px",
          zIndex: 1001,
          transition: "color 0.3s",
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "64px",
            background: "rgba(255,255,255,0.98)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              width: "100%",
              padding: "0 8%",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "var(--color-primary)",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  fontFamily: "var(--font-en)",
                  letterSpacing: "0.1em",
                  padding: "1rem 0",
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <LangSwitch mobile />
          </nav>
        </div>
      )}

      <style>{`
        .header-desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .header-nav-link {
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 400;
          transition: color 0.3s, opacity 0.3s;
        }
        .header-nav-link-top:hover { opacity: 0.75; }
        .header-nav-link-scrolled:hover { color: var(--color-accent) !important; }
        @media (max-width: 768px) {
          .header-desktop-nav { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
