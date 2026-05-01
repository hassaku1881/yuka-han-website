"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sectionLabel: React.CSSProperties = {
    fontFamily: "var(--font-en)",
    fontSize: "0.75rem",
    letterSpacing: "0.3em",
    color: "var(--color-accent)",
    marginBottom: "0.5rem",
  };
  const sectionTitle: React.CSSProperties = {
    fontFamily: "var(--font-en)",
    fontSize: "2.5rem",
    fontWeight: 400,
    color: "var(--color-primary)",
    marginBottom: "2rem",
  };
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.9rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "0.95rem",
    fontFamily: "var(--font-jp)",
    color: "var(--color-text)",
    background: "var(--color-white)",
    outline: "none",
    transition: "border-color 0.3s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 500,
    color: "var(--color-primary)",
    marginBottom: "0.5rem",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setErrorMsg("送信に失敗しました。しばらく経ってから再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "5rem 8% 3rem",
          background: "var(--color-white)",
          textAlign: "center",
        }}
      >
        <p style={sectionLabel}>CONTACT</p>
        <h1 style={sectionTitle}>お問い合わせ</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.9 }}>
          Wutoのご予約、民泊運営代行のご相談など、
          <br />
          お気軽にご連絡ください。通常2営業日以内にご返信いたします。
        </p>
      </section>

      {/* Form + Info */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4rem", maxWidth: "1100px", margin: "0 auto" }}
          className="contact-grid"
        >
          {/* Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "var(--color-white)",
                  padding: "3rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
                <h2
                  style={{
                    fontFamily: "var(--font-en)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--color-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  送信完了
                </h2>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 1.9 }}>
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認の上、2営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--color-white)",
                  padding: "3rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Type */}
                <div>
                  <label style={labelStyle}>
                    お問い合わせ種別 <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="">選択してください</option>
                    <option value="wuto">Wutoのご予約・お問い合わせ</option>
                    <option value="service">民泊運営代行のご相談</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label style={labelStyle}>
                    お名前 <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>
                    メールアドレス <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>電話番号（任意）</label>
                  <input
                    type="tel"
                    placeholder="090-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>
                    お問い合わせ内容 <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="ご質問・ご要望などをお書きください"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {errorMsg && (
                  <p style={{ fontSize: "0.9rem", color: "#c0392b", background: "#fdf2f0", padding: "0.8rem 1rem", borderRadius: "4px" }}>
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "1rem 2rem",
                    background: loading ? "#b09070" : "var(--color-accent)",
                    color: "var(--color-white)",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "background 0.3s",
                    fontFamily: "var(--font-jp)",
                  }}
                >
                  {loading ? "送信中..." : "送信する"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div
              style={{
                background: "var(--color-white)",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                Contact Info
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {[
                  { icon: "📧", label: "Email", value: "info@yuka-han.com" },
                  { icon: "📍", label: "Address", value: "東京都葛飾区お花茶屋" },
                  { icon: "🕐", label: "対応時間", value: "9:00 – 21:00（年中無休）" },
                ].map((info) => (
                  <div key={info.label} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.1rem" }}>{info.icon}</span>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                        {info.label}
                      </p>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text)" }}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--color-primary)",
                padding: "2rem",
                borderRadius: "8px",
                color: "var(--color-white)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                よくあるご質問
              </h3>
              {[
                { q: "予約の空き状況は？", a: "お問い合わせフォームよりご希望日をお知らせください。" },
                { q: "最少宿泊数は？", a: "基本的に1泊からご利用いただけます。" },
                { q: "ペット同伴は可能？", a: "申し訳ありませんが、ペット同伴はお断りしております。" },
              ].map((faq) => (
                <div key={faq.q} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.3rem" }}>Q. {faq.q}</p>
                  <p style={{ fontSize: "0.8rem", opacity: 0.8 }}>A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
