"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/wuto", label: "Wuto" },
  { href: "/service", label: "Service" },
  { href: "/articles", label: "Articles" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"JP" | "EN">("JP");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        padding: "1rem 4%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
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
          color: "var(--color-primary)",
          textDecoration: "none",
          letterSpacing: "0.1em",
          zIndex: 1001,
        }}
      >
        YUKAHAN
      </Link>

      {/* Desktop Nav */}
      <nav className="header-desktop-nav">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="header-nav-link">
            {link.label}
          </Link>
        ))}
        <div className="header-lang-switch">
          {(["JP", "EN"] as const).map((l, i) => (
            <>
              {i > 0 && <span key={`sep-${l}`} style={{ color: "#ccc", fontSize: "0.75rem" }}>/</span>}
              <button
                key={l}
                onClick={() => { setLang(l); console.log(`${l} selected`); }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.75rem",
                  fontWeight: lang === l ? 700 : 400,
                  color: lang === l ? "var(--color-primary)" : "#999",
                  opacity: lang === l ? 1 : 0.6,
                  padding: 0,
                  transition: "opacity 0.2s",
                }}
              >
                {l}
              </button>
            </>
          ))}
        </div>
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
          color: "var(--color-primary)",
          display: "none",
          padding: "4px",
          zIndex: 1001,
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
            gap: "0.5rem",
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginTop: "1.5rem",
              }}
            >
              {(["JP", "EN"] as const).map((l, i) => (
                <>
                  {i > 0 && <span key={`msep-${l}`} style={{ color: "#ccc", fontSize: "0.85rem" }}>/</span>}
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsOpen(false); console.log(`${l} selected`); }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      fontWeight: lang === l ? 700 : 400,
                      color: lang === l ? "var(--color-primary)" : "#999",
                      opacity: lang === l ? 1 : 0.6,
                      padding: 0,
                    }}
                  >
                    {l}
                  </button>
                </>
              ))}
            </div>
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
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 400;
          transition: color 0.3s;
        }
        .header-nav-link:hover { color: var(--color-accent); }
        .header-lang-switch {
          display: flex;
          gap: 0.5rem;
          margin-left: 1rem;
          padding-left: 1rem;
          border-left: 1px solid #ddd;
        }
        .header-lang-active {
          font-size: 0.75rem;
          color: var(--color-primary);
          font-weight: 500;
          text-decoration: none;
        }
        .header-lang {
          font-size: 0.75rem;
          color: #999;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .header-desktop-nav { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
