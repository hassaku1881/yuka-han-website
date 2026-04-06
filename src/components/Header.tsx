"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/wuto", label: "Wuto" },
  { href: "/service", label: "Service" },
  { href: "/articles", label: "Articles" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-en)",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "var(--color-primary)",
          textDecoration: "none",
          letterSpacing: "0.1em",
        }}
      >
        YUKAHAN
      </Link>

      {/* Desktop Nav */}
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "var(--color-text)",
              fontSize: "0.9rem",
              fontWeight: 400,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
          >
            {link.label}
          </Link>
        ))}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginLeft: "1rem",
            paddingLeft: "1rem",
            borderLeft: "1px solid #ddd",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "0.75rem",
              color: "var(--color-primary)",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            JP
          </a>
          <a
            href="#"
            style={{ fontSize: "0.75rem", color: "#999", textDecoration: "none" }}
          >
            EN
          </a>
          <a
            href="#"
            style={{ fontSize: "0.75rem", color: "#999", textDecoration: "none" }}
          >
            繁中
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
        className="mobile-menu-btn"
        aria-label="メニュー"
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "var(--color-primary)",
            transition: "transform 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "var(--color-primary)",
            transition: "opacity 0.3s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "var(--color-primary)",
            transition: "transform 0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.98)",
            padding: "1.5rem 4%",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--color-text)",
                fontSize: "1rem",
                fontWeight: 400,
                padding: "0.5rem 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
