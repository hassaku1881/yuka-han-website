import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社ユカハン",
  description: "株式会社ユカハンにおける個人情報の取り扱いについて定めたプライバシーポリシーです。",
  alternates: { canonical: `${BASE_URL}/privacy` },
};

const sections: { heading: string; body: string | string[] }[] = [
  {
    heading: "1. 事業者情報",
    body: [
      "名称：株式会社ユカハン（Yuka-Han & Co., Ltd.）",
      "所在地：東京都",
      "お問い合わせ：contact@yuka-han.com",
    ],
  },
  {
    heading: "2. 取得する個人情報",
    body: [
      "当社は、お問い合わせフォームのご利用時に以下の情報をご提供いただきます。",
      "・お名前",
      "・メールアドレス",
      "・お問い合わせの種類および内容",
    ],
  },
  {
    heading: "3. 利用目的",
    body: [
      "取得した個人情報は、以下の目的のみに利用します。",
      "・お問い合わせへの回答および対応",
      "・上記に付随する業務連絡",
    ],
  },
  {
    heading: "4. 第三者提供",
    body: "ご提供いただいた個人情報は、法令に基づく開示が必要な場合を除き、第三者に提供・開示することはありません。",
  },
  {
    heading: "5. 委託",
    body: "個人情報の取り扱いを外部に委託する場合は、適切な委託先を選定し、秘密保持等について取り決めたうえで管理・監督します。",
  },
  {
    heading: "6. アクセス解析ツール",
    body: "当ウェブサイトでは、Googleが提供するアクセス解析ツール「Google アナリティクス」を使用しています。Google アナリティクスはCookieを利用してアクセス情報を収集しますが、個人を特定する情報は収集しません。収集されるデータはGoogleのプライバシーポリシーに基づき管理されます。Cookieの使用を無効にすることで、データ収集を拒否することが可能です。",
  },
  {
    heading: "7. 安全管理措置",
    body: "当社は、取得した個人情報の漏洩・滅失・毀損の防止のため、適切な安全管理措置を講じます。",
  },
  {
    heading: "8. 開示・訂正・削除",
    body: "ご本人から個人情報の開示・訂正・削除のご請求があった場合は、合理的な範囲内で速やかに対応いたします。お問い合わせは下記よりご連絡ください。",
  },
  {
    heading: "9. プライバシーポリシーの変更",
    body: "本ポリシーは、必要に応じて予告なく変更することがあります。変更後のポリシーは当ページに掲載した時点で効力を生じるものとします。",
  },
  {
    heading: "10. お問い合わせ窓口",
    body: "個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: "80px", paddingBottom: "8rem", minHeight: "100vh" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 8% 0" }}>
        <p style={{
          fontFamily: "var(--font-en)",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          color: "var(--color-accent)",
          marginBottom: "0.6rem",
        }}>
          PRIVACY POLICY
        </p>
        <h1 style={{
          fontFamily: "var(--font-en)",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 400,
          color: "var(--color-primary)",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}>
          プライバシーポリシー
        </h1>
        <p style={{
          fontSize: "0.85rem",
          color: "var(--color-text-light)",
          marginBottom: "3.5rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}>
          制定日：2025年1月1日　最終更新：2026年5月1日
        </p>

        {sections.map((sec) => (
          <section key={sec.heading} style={{ marginBottom: "2.8rem" }}>
            <h2 style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              marginBottom: "0.9rem",
              letterSpacing: "0.02em",
            }}>
              {sec.heading}
            </h2>
            {Array.isArray(sec.body) ? (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {sec.body.map((line, i) => (
                  <li key={i} style={{
                    fontSize: "0.95rem",
                    lineHeight: 2,
                    color: "var(--color-text)",
                  }}>
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{
                fontSize: "0.95rem",
                lineHeight: 2,
                color: "var(--color-text)",
                margin: 0,
              }}>
                {sec.body}
              </p>
            )}
          </section>
        ))}

        <div style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          textAlign: "center",
        }}>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.5rem",
              border: "1px solid var(--color-primary)",
              color: "var(--color-primary)",
              textDecoration: "none",
              fontSize: "0.88rem",
              letterSpacing: "0.1em",
              transition: "background 0.3s, color 0.3s",
              fontFamily: "var(--font-en)",
            }}
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </main>
  );
}
