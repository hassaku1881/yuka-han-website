"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    address: "",
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

  const isNeighbor = formData.type === "neighbor";

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
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.9 }}>
          民泊運営代行・コンサルティングのご相談、取材・メディア掲載のご依頼、
          <br />
          また近隣にお住まいの方からのご連絡もこちらから受け付けています。
          <br />
          通常2営業日以内にご返信いたします。
        </p>
      </section>

      {/* Form */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
                    <option value="operations">民泊運営代行・コンサルティングのご相談</option>
                    <option value="media">取材・メディア掲載のご依頼</option>
                    <option value="neighbor">近隣・地域住民の方からのご連絡</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* Neighbor address (conditional) */}
                {isNeighbor && (
                  <div>
                    <label style={labelStyle}>お住まいの住所・施設名（任意）</label>
                    <input
                      type="text"
                      placeholder="例：お花茶屋〇〇マンション、または施設名"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={inputStyle}
                    />
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-light)", marginTop: "0.4rem" }}>
                      ご不便・ご不満があれば、遠慮なくお知らせください。
                    </p>
                  </div>
                )}

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
                    placeholder={isNeighbor ? "お気づきの点やご要望などをお書きください" : "ご質問・ご要望などをお書きください"}
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
        </div>
      </section>
    </main>
  );
}
