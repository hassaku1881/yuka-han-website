"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LOCALE_LABELS, TRANSLATED_ARTICLE_BASE_IDS, type Locale } from "@/lib/i18n";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/wuto", label: "Wuto" },
  { href: "/operations", label: "Operations" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const locales: Locale[] = ["ja", "en", "zh-TW"];

type RouteKind = "article-detail" | "articles-list" | "contact" | "simple-page" | "home" | "other";


/** Parses pathname to determine current locale and which locales have a page here */
function parseLocaleContext(pathname: string): {
  locale: Locale;
  baseId: string | null;
  availableLocales: Locale[];
  route: RouteKind;
} {
  // /en/articles/2026010045 or /zh-TW/articles/2026010045
  const localeArticle = pathname.match(/^\/(en|zh-TW)\/articles\/([^/]+)/);
  if (localeArticle) {
    return { locale: localeArticle[1] as Locale, baseId: localeArticle[2], availableLocales: ["ja", "en", "zh-TW"], route: "article-detail" };
  }
  // /articles/id — only translated if baseId is in the list
  const jaArticle = pathname.match(/^\/articles\/([^/]+)/);
  if (jaArticle) {
    const baseId = jaArticle[1];
    const has = TRANSLATED_ARTICLE_BASE_IDS.includes(baseId);
    return { locale: "ja", baseId, availableLocales: has ? ["ja", "en", "zh-TW"] : ["ja"], route: "article-detail" };
  }
  // /en/about, /zh-TW/wuto, etc.
  const localeSimple = pathname.match(/^\/(en|zh-TW)\/(about|wuto|operations)\/?$/);
  if (localeSimple) {
    return { locale: localeSimple[1] as Locale, baseId: localeSimple[2], availableLocales: ["ja", "en", "zh-TW"], route: "simple-page" };
  }
  // /about, /wuto, /operations (Japanese)
  const jaSimple = pathname.match(/^\/(about|wuto|operations)\/?$/);
  if (jaSimple) {
    return { locale: "ja", baseId: jaSimple[1], availableLocales: ["ja", "en", "zh-TW"], route: "simple-page" };
  }

  // /en/articles or /zh-TW/articles (locale article listing)
  const localeArticles = pathname.match(/^\/(en|zh-TW)\/articles\/?$/);
  if (localeArticles) {
    return { locale: localeArticles[1] as Locale, baseId: null, availableLocales: ["ja", "en", "zh-TW"], route: "articles-list" };
  }
  // /en or /zh-TW — top page not yet implemented, treat as current locale only
  const localePage = pathname.match(/^\/(en|zh-TW)\/?$/);
  if (localePage) {
    return { locale: localePage[1] as Locale, baseId: null, availableLocales: [localePage[1] as Locale], route: "other" };
  }
  // /articles (Japanese article listing)
  if (pathname === "/articles") {
    return { locale: "ja", baseId: null, availableLocales: ["ja", "en", "zh-TW"], route: "articles-list" };
  }
  // /contact or /en/contact or /zh-TW/contact
  const localeContact = pathname.match(/^\/(en|zh-TW)\/contact/);
  if (localeContact) {
    return { locale: localeContact[1] as Locale, baseId: null, availableLocales: ["ja", "en", "zh-TW"], route: "contact" };
  }
  if (pathname === "/contact") {
    return { locale: "ja", baseId: null, availableLocales: ["ja", "en", "zh-TW"], route: "contact" };
  }
  // / (home) — JA only
  if (pathname === "/") {
    return { locale: "ja", baseId: null, availableLocales: ["ja"], route: "home" };
  }
  // Other pages (/about, /wuto, /operations, etc.) — JA only
  return { locale: "ja", baseId: null, availableLocales: ["ja"], route: "other" };
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const { locale: currentLocale, baseId, availableLocales, route } = parseLocaleContext(pathname);

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
    if (!availableLocales.includes(newLocale)) return;
    if (route === "article-detail" && baseId) {
      router.push(newLocale === "ja" ? `/articles/${baseId}` : `/${newLocale}/articles/${baseId}`);
    } else if (route === "articles-list") {
      router.push(newLocale === "ja" ? "/articles" : `/${newLocale}/articles`);
    } else if (route === "contact") {
      router.push(newLocale === "ja" ? "/contact" : `/${newLocale}/contact`);
    } else if (route === "simple-page" && baseId) {
      router.push(newLocale === "ja" ? `/${baseId}` : `/${newLocale}/${baseId}`);
    } else {
      router.push(newLocale === "ja" ? "/" : `/${newLocale}`);
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
      {locales.map((locale, index) => {
        const isActive = currentLocale === locale;
        const isAvailable = availableLocales.includes(locale);
        return (
          <span key={locale} style={{ display: "flex", alignItems: "center", gap: mobile ? "0.6rem" : "0.4rem" }}>
            {index > 0 && (
              <span style={{ opacity: 0.3, fontSize: mobile ? "0.9rem" : "0.75rem", color: mobile ? "var(--color-primary)" : textColor }}>
                /
              </span>
            )}
            <button
              onClick={() => handleLocaleChange(locale)}
              disabled={!isAvailable}
              title={!isAvailable ? "No translation available" : undefined}
              style={{
                background: "none",
                border: "none",
                cursor: isAvailable ? "pointer" : "not-allowed",
                fontSize: mobile ? "1rem" : "0.75rem",
                fontWeight: isActive ? 700 : 400,
                color: mobile
                  ? isAvailable ? "var(--color-primary)" : "#bbb"
                  : isAvailable ? textColor : isTransparent ? "rgba(255,255,255,0.3)" : "#ccc",
                opacity: isActive ? 1 : isAvailable ? 0.6 : 0.35,
                padding: 0,
                transition: "opacity 0.2s",
              }}
            >
              {LOCALE_LABELS[locale]}
            </button>
          </span>
        );
      })}
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
          <LangSwitch />
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
    </>
  );
}
