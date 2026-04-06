import Link from "next/link";

export default function Footer() {
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
          <Link href="/" className="footer-logo">
            YUKAHAN
          </Link>
          <p style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.8 }}>
            ユカハン合同会社
            <br />〒124-0003
            <br />
            東京都葛飾区お花茶屋
            <br />
            <br />
            info@yuka-han.com
          </p>
        </div>

        <div>
          <h4 className="footer-nav-heading">SERVICES</h4>
          {[
            { href: "/wuto", label: "Wuto" },
            { href: "/service", label: "運営代行" },
            { href: "/contact", label: "お問い合わせ" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="footer-nav-heading">COMPANY</h4>
          {[
            { href: "/about", label: "会社概要" },
            { href: "/privacy", label: "プライバシーポリシー" },
            { href: "/tokusho", label: "特定商取引法に基づく表記" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 YUKAHAN LLC. All Rights Reserved.</p>
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
