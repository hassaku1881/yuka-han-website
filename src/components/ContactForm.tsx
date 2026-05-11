"use client";

import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/lib/i18n";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// ── Translations ──────────────────────────────────────────────────────────────

const T = {
  ja: {
    sectionLabel: "CONTACT",
    heading: "お問い合わせ",
    description: "施設・ご予約のご質問、運営代行・コンサルティングのご相談、取材のご依頼、\nまた近隣にお住まいの方からのご連絡もこちらから受け付けています。\n通常2営業日以内にご返信いたします。",
    typeLabel: "お問い合わせ種別",
    typePlaceholder: "選択してください",
    typeGuest: "施設・ご予約に関するお問い合わせ",
    typeOperations: "民泊運営代行・コンサルティングのご相談",
    typeMedia: "取材・メディア掲載のご依頼",
    typeNeighbor: "近隣・地域住民の方からのご連絡",
    typeOther: "その他",
    addressLabel: "お住まいの住所・施設名（任意）",
    addressPlaceholder: "例：お花茶屋〇〇マンション、または施設名",
    addressNote: "ご不便・ご不満があれば、遠慮なくお知らせください。",
    companyLabel: "会社名・屋号（任意）",
    companyPlaceholder: "株式会社〇〇",
    nameLabel: "お名前",
    namePlaceholder: "山田 太郎",
    emailLabel: "メールアドレス",
    phoneLabel: "電話番号（任意）",
    phonePlaceholder: "090-0000-0000",
    messageLabel: "お問い合わせ内容",
    messagePlaceholder: "ご質問・ご要望などをお書きください",
    messageNeighborPlaceholder: "お気づきの点やご要望などをお書きください",
    fileLabel: "添付ファイル（任意・10MBまで）",
    fileButton: "ファイルを選択",
    fileNone: "選択されていません",
    submit: "送信する",
    sending: "送信中...",
    successTitle: "送信完了",
    successBody: "お問い合わせありがとうございます。\n内容を確認の上、2営業日以内にご返信いたします。",
    recaptcha: (privacy: React.ReactNode, terms: React.ReactNode) => (
      <>このフォームはreCAPTCHAで保護されています。Googleの{privacy}と{terms}が適用されます。</>
    ),
    errorFile: "ファイルサイズは10MB以下にしてください。",
    errorCaptcha: "認証に失敗しました。ページを再読み込みしてお試しください。",
    errorSubmit: "送信に失敗しました。しばらく経ってから再度お試しください。",
    required: "必須",
  },
  en: {
    sectionLabel: "CONTACT",
    heading: "Contact",
    description: "For property or reservation inquiries, operations consulting, media requests,\nor messages from local residents, please use the form below.\nWe typically respond within 2 business days.",
    typeLabel: "Inquiry type",
    typePlaceholder: "Please select",
    typeGuest: "Property / Reservation inquiry",
    typeOperations: "Vacation rental operations / Consulting",
    typeMedia: "Media / Press inquiry",
    typeNeighbor: "Message from a local resident",
    typeOther: "Other",
    addressLabel: "Your address or nearby facility name (optional)",
    addressPlaceholder: "e.g. Building name or facility name",
    addressNote: "Please feel free to share any concerns or feedback.",
    companyLabel: "Company / Organization (optional)",
    companyPlaceholder: "Company name",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email address",
    phoneLabel: "Phone number (optional)",
    phonePlaceholder: "+81-90-0000-0000",
    messageLabel: "Message",
    messagePlaceholder: "Please describe your inquiry",
    messageNeighborPlaceholder: "Please describe your concern or feedback",
    fileLabel: "Attachment (optional, up to 10 MB)",
    fileButton: "Choose file",
    fileNone: "No file selected",
    submit: "Send",
    sending: "Sending...",
    successTitle: "Message sent",
    successBody: "Thank you for your message.\nWe will get back to you within 2 business days.",
    recaptcha: (privacy: React.ReactNode, terms: React.ReactNode) => (
      <>This form is protected by reCAPTCHA. Google&apos;s {privacy} and {terms} apply.</>
    ),
    errorFile: "File size must be 10 MB or less.",
    errorCaptcha: "Verification failed. Please reload the page and try again.",
    errorSubmit: "Failed to send. Please try again later.",
    required: "required",
  },
  "zh-TW": {
    sectionLabel: "CONTACT",
    heading: "聯絡我們",
    description: "設施・預約相關問題、代營運・顧問服務諮詢、媒體採訪邀約，\n以及周邊住民的聯絡，均可透過此表單提交。\n通常於 2 個工作天內回覆。",
    typeLabel: "諮詢類別",
    typePlaceholder: "請選擇",
    typeGuest: "設施・預約諮詢",
    typeOperations: "民宿代營運・顧問服務諮詢",
    typeMedia: "媒體採訪・刊載邀約",
    typeNeighbor: "周邊住民聯絡",
    typeOther: "其他",
    addressLabel: "您的住址・設施名稱（選填）",
    addressPlaceholder: "例：附近的大樓名稱，或設施名稱",
    addressNote: "如有不便或意見，歡迎直接告知。",
    companyLabel: "公司・機構名稱（選填）",
    companyPlaceholder: "公司名稱",
    nameLabel: "姓名",
    namePlaceholder: "您的姓名",
    emailLabel: "電子郵件",
    phoneLabel: "電話號碼（選填）",
    phonePlaceholder: "+886-",
    messageLabel: "諮詢內容",
    messagePlaceholder: "請描述您的問題或需求",
    messageNeighborPlaceholder: "請描述您的意見或需求",
    fileLabel: "附件（選填，10MB以內）",
    fileButton: "選擇檔案",
    fileNone: "尚未選擇檔案",
    submit: "送出",
    sending: "送出中...",
    successTitle: "已成功送出",
    successBody: "感謝您的來信。\n我們將於 2 個工作天內回覆。",
    recaptcha: (privacy: React.ReactNode, terms: React.ReactNode) => (
      <>此表單受 reCAPTCHA 保護，並適用 Google 的{privacy}及{terms}。</>
    ),
    errorFile: "檔案大小請在 10MB 以內。",
    errorCaptcha: "驗證失敗，請重新整理頁面後再試。",
    errorSubmit: "送出失敗，請稍後再試。",
    required: "必填",
  },
} satisfies Record<Locale, {
  sectionLabel: string; heading: string; description: string;
  typeLabel: string; typePlaceholder: string;
  typeGuest: string; typeOperations: string; typeMedia: string; typeNeighbor: string; typeOther: string;
  addressLabel: string; addressPlaceholder: string; addressNote: string;
  companyLabel: string; companyPlaceholder: string;
  nameLabel: string; namePlaceholder: string;
  emailLabel: string; phoneLabel: string; phonePlaceholder: string;
  messageLabel: string; messagePlaceholder: string; messageNeighborPlaceholder: string;
  fileLabel: string; fileButton: string; fileNone: string;
  submit: string; sending: string;
  successTitle: string; successBody: string;
  recaptcha: (privacy: React.ReactNode, terms: React.ReactNode) => React.ReactNode;
  errorFile: string; errorCaptcha: string; errorSubmit: string;
  required: string;
}>;

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = T[locale];

  const [formData, setFormData] = useState({
    type: "", company: "", name: "", email: "", phone: "", address: "", message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [siteKey]);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.9rem 1rem", border: "1px solid #ddd",
    borderRadius: "4px", fontSize: "0.95rem", fontFamily: "inherit",
    color: "var(--color-text)", background: "var(--color-white)",
    outline: "none", transition: "border-color 0.3s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.85rem", fontWeight: 500,
    color: "var(--color-primary)", marginBottom: "0.5rem",
  };
  const requiredMark = (
    <span style={{ color: "var(--color-accent)", marginLeft: "0.3rem", fontSize: "0.75rem" }}>
      {t.required}
    </span>
  );

  const isNeighbor = formData.type === "neighbor";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > 10 * 1024 * 1024) {
      setErrorMsg(t.errorFile);
      e.target.value = "";
      setFile(null);
      return;
    }
    setErrorMsg("");
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    let recaptchaToken = "";
    try {
      recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(siteKey, { action: "contact" }).then(resolve).catch(reject);
        });
      });
    } catch {
      setErrorMsg(t.errorCaptcha);
      setLoading(false);
      return;
    }

    let attachment: { filename: string; content: string } | null = null;
    if (file) {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      attachment = { filename: file.name, content: base64 };
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, attachment, recaptchaToken, locale }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setErrorMsg(t.errorSubmit);
    } finally {
      setLoading(false);
    }
  };

  const linkStyle: React.CSSProperties = { color: "var(--color-accent)" };
  const privacyLink = <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>{locale === "ja" ? "プライバシーポリシー" : locale === "en" ? "Privacy Policy" : "隱私權政策"}</a>;
  const termsLink = <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={linkStyle}>{locale === "ja" ? "利用規約" : locale === "en" ? "Terms of Service" : "服務條款"}</a>;

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "5rem 8% 3rem", background: "var(--color-white)", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-en)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--color-accent)", marginBottom: "0.5rem" }}>
          {t.sectionLabel}
        </p>
        <h1 style={{ fontFamily: "var(--font-en)", fontSize: "2.5rem", fontWeight: 400, color: "var(--color-primary)", marginBottom: "2rem" }}>
          {t.heading}
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-light)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.9, whiteSpace: "pre-line" }}>
          {t.description}
        </p>
      </section>

      {/* Form */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 8% 6rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {submitted ? (
            <div style={{ background: "var(--color-white)", padding: "3rem", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
              <h2 style={{ fontFamily: "var(--font-en)", fontSize: "1.5rem", fontWeight: 400, color: "var(--color-primary)", marginBottom: "1rem" }}>
                {t.successTitle}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 1.9, whiteSpace: "pre-line" }}>
                {t.successBody}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ background: "var(--color-white)", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Inquiry type */}
              <div>
                <label style={labelStyle}>{t.typeLabel}{requiredMark}</label>
                <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} style={inputStyle}>
                  <option value="">{t.typePlaceholder}</option>
                  <option value="guest">{t.typeGuest}</option>
                  <option value="operations">{t.typeOperations}</option>
                  <option value="media">{t.typeMedia}</option>
                  <option value="neighbor">{t.typeNeighbor}</option>
                  <option value="other">{t.typeOther}</option>
                </select>
              </div>

              {/* Address (neighbor only) */}
              {isNeighbor && (
                <div>
                  <label style={labelStyle}>{t.addressLabel}</label>
                  <input type="text" placeholder={t.addressPlaceholder} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} style={inputStyle} />
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-light)", marginTop: "0.4rem" }}>{t.addressNote}</p>
                </div>
              )}

              {/* Company */}
              <div>
                <label style={labelStyle}>{t.companyLabel}</label>
                <input type="text" placeholder={t.companyPlaceholder} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} style={inputStyle} />
              </div>

              {/* Name */}
              <div>
                <label style={labelStyle}>{t.nameLabel}{requiredMark}</label>
                <input type="text" required placeholder={t.namePlaceholder} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>{t.emailLabel}{requiredMark}</label>
                <input type="email" required placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>{t.phoneLabel}</label>
                <input type="tel" placeholder={t.phonePlaceholder} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>{t.messageLabel}{requiredMark}</label>
                <textarea required rows={6} placeholder={isNeighbor ? t.messageNeighborPlaceholder : t.messagePlaceholder} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              {/* Attachment */}
              <div>
                <label style={labelStyle}>{t.fileLabel}</label>
                <input ref={fileInputRef} type="file" onChange={handleFileChange} style={{ display: "none" }} accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.zip" />
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <button type="button" onClick={() => fileInputRef.current?.click()}
                    style={{ padding: "0.6rem 1.2rem", border: "1px solid #ddd", borderRadius: "4px", background: "var(--color-white)", fontSize: "0.85rem", color: "var(--color-text)", cursor: "pointer", whiteSpace: "nowrap" }}>
                    {t.fileButton}
                  </button>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>
                    {file ? file.name : t.fileNone}
                  </span>
                  {file && (
                    <button type="button" onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                      style={{ background: "none", border: "none", color: "var(--color-text-light)", cursor: "pointer", fontSize: "1rem", padding: 0, lineHeight: 1 }}
                      aria-label="remove file">✕</button>
                  )}
                </div>
              </div>

              {errorMsg && (
                <p style={{ fontSize: "0.9rem", color: "#c0392b", background: "#fdf2f0", padding: "0.8rem 1rem", borderRadius: "4px" }}>{errorMsg}</p>
              )}

              <button type="submit" disabled={loading}
                style={{ padding: "1rem 2rem", background: loading ? "#b09070" : "var(--color-accent)", color: "var(--color-white)", border: "none", borderRadius: "4px", fontSize: "0.95rem", letterSpacing: "0.05em", cursor: loading ? "not-allowed" : "pointer", transition: "background 0.3s" }}>
                {loading ? t.sending : t.submit}
              </button>

              <p style={{ fontSize: "0.75rem", color: "var(--color-text-light)", textAlign: "center", lineHeight: 1.8 }}>
                {t.recaptcha(privacyLink, termsLink)}
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
