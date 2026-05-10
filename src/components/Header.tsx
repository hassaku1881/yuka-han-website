"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LOCALE_LABELS, type Locale } from "@/lib/i18n";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/wuto", label: "Wuto" },
  { href: "/operations", label: "Operations" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const locales: Locale[] = ["ja", "en", "zh-TW"];

/** Parses pathname to determine current locale context and article base ID */
function parseLocaleContext(pathname: string): {
  locale: Locale;
  baseId: string | null;
  showSwitcher: boolean;
} {
  // /en/articles/2026010045 or /zh-TW/articles/2026010045
  const localeArticle = pathname.match(/^\/(en|zh-TW)\/articles\/([^/]+)/);
  if (localeArticle) {
    return { locale: localeArticle[1] as Locale, baseId: localeArticle[2], showSwitcher: true };
  }
  // /articles/2026010045
  const jaArticle = pathname.match(/^\/articles\/([^/]+)/);
  if (jaArticle) {
    return { locale: "ja", baseId: jaArticle[1], showSwitcher: true };
  }
  // /en or /zh-TW (locale top page)
  const localePage = pathname.match(/^\/(en|zh-TW)\/?$/);
  if (localePage) {
    return { locale: localePage[1] as Locale, baseId: null, showSwitcher: true };
  }
  return { locale: "ja", baseId: null, showSwitcher: false };
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const { locale: currentLocale, baseId, showSwitcher } = parseLocaleContext(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    if (baseId) {
      // On article detail page — navigate to translated version
      if (newLocale === "ja") {
        router.push(`/articles/${baseId}`);
      } else {
        router.push(`/${newLocale}/articles/${baseId}`);
      }
    } else {
      // On locale top page — navigate to other locale top
      if (newLocale === "ja") {
        router.push("/");
      } else {
        router.push(`/${newLocale}`);
      }
    }
    if (isOpen) setIsOpen(false);
  };

  const isTransparent = isHome && !scrolled && !isOpen;
  const textColor = isTransparent ? "#ffffff" : "var(--color-primary)";

  const LangSwitch = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: mobile ? "0.6rem" : "0.4rem",
        ...(mobile
          ? { marginTop: "2rem" }
          : {
              marginLeft: "1rem",
              paddingLeft: "1rem",
              borderLeft: `1px solid ${isTransparent ? "rgba(255,255,255,0.3)" : "#ddd"}`,
            }),
      }}
    >
      {locales.map((locale, index) => (
        <span key={locale} style={{ display: "flex", alignItems: "center", gap: mobile ? "0.6rem" : "0.4rem" }}>
          {index > 0 && (
            <span style={{ opacity: 0.4, fontSize: mobile ? "0.9rem" : "0.75rem", color: mobile ? "var(--color-primary)" : textColor }}>
              /
            </span>
          )}
          <button
            onClick={() => handleLocaleChange(locale)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: mobile ? "1rem" : "0.75rem",
              fontWeight: currentLocale === locale ? 700 : 400,
              color: mobile ? "var(--color-primary)" : textColor,
              opacity: currentLocale === locale ? 1 : 0.6,
              padding: 0,
              transition: "opacity 0.2s",
            }}
          >
            {LOCALE_LABELS[locale]}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: isTransparent ? "transparent" : "rgba(255,255,255,0.97)",
          backdropFilter: isTransparent ? "none" : "blur(10px)",
          boxShadow: isTransparent ? "none" : "0 1px 0 rgba(0,0,0,0.05)",
          zIndex: 1000,
          padding: "1rem 4%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <Image
            src="/logo.png"
            alt="株式会社ユカハン"
            width={258}
            height={61}
            style={{
              height: "40px",
              width: "auto",
              filter: isTransparent ? "brightness(0) invert(1)" : "none",
              transition: "filter 0.3s",
            }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="header-desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-nav-link ${scrolled ? "header-nav-link-scrolled" : "header-nav-link-top"}`}
              style={{ color: textColor }}
            >
              {link.label}
            </Link>
          ))}
          {showSwitcher && <LangSwitch />}
        </nav>

        {/* Hamburger */}
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
            transition: "color 0.3s",
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(255,255,255,0.98)",
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "64px",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                  fontSize: "1.4rem",
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
            {showSwitcher && <LangSwitch mobile />}
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
    </>
  );
}
