import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社ユカハン",
  description: "株式会社ユカハンにおける個人情報の取り扱いについて定めたプライバシーポリシーです。",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
    languages: {
      ja: `${BASE_URL}/privacy`,
      en: `${BASE_URL}/en/privacy`,
      "zh-TW": `${BASE_URL}/zh-TW/privacy`,
      "x-default": `${BASE_URL}/privacy`,
    },
  },
};

const sections: { heading: string; body: string | string[] }[] = [
  {
    heading: "1. 事業者情報",
    body: [
      "名称：株式会社ユカハン（Yuka-Han & Co.）",
      "所在地：東京都葛飾区お花茶屋2-5-21",
      "お問い合わせ：contact@yuka-han.com",
    ],
  },
  {
    heading: "2. 基本方針",
    body: "株式会社ユカハン（以下「当社」といいます）は、宿泊施設の企画・開発・運用および民泊運営代行等の事業を行うにあたり、お客様の個人情報を適切に取り扱うことが社会的責務であると考えています。当社は、個人情報の保護に関する法律その他の関係法令およびガイドラインを遵守し、本プライバシーポリシーに基づき、個人情報を適正に取得・利用・管理します。",
  },
  {
    heading: "3. 取得する個人情報",
    body: [
      "当社は、以下の場面において個人情報を取得します。",
      "（1）お問い合わせ・資料請求フォームのご利用時",
      "・お名前",
      "・会社名・屋号",
      "・メールアドレス",
      "・電話番号",
      "・ご住所・施設名",
      "・お問い合わせの種類および内容、添付資料",
      "（2）メールマガジン・お知らせの購読お申し込み時",
      "・お名前、メールアドレス",
      "（3）宿泊施設のチェックインフォーム（checkin.airchoice.jp）のご利用時",
      "・宿泊予約に関する情報（チェックイン・チェックアウト日、宿泊人数、到着・出発予定時刻、交通手段等）",
      "・宿泊者の氏名、住所、生年月日、国籍、職業",
      "・日本国内に住所を有しない外国籍の宿泊者のパスポート情報およびパスポートの写し（画像）",
      "（4）当ウェブサイトのご利用時（自動的に取得される情報）",
      "・Cookie、アクセスログ、閲覧履歴、IPアドレス、端末・ブラウザ情報等",
    ],
  },
  {
    heading: "4. 利用目的",
    body: [
      "取得した個人情報は、以下の目的の範囲内で利用します。",
      "・お問い合わせ・ご相談への回答および対応",
      "・当社サービスのご提供、ご契約の締結・履行および関連するご連絡",
      "・当社のサービス、キャンペーン、セミナー、お役立ち情報等のご案内（メールマガジン・ニュースレターの配信を含む）",
      "・アンケートの実施、およびサービス改善・新サービス開発のための分析",
      "・ウェブサイトの利用状況の分析、および統計データの作成（個人を特定できない形式に加工します）",
      "・旅館業法に基づく宿泊者名簿の作成および保管のため",
      "・宿泊施設のご利用に関するご連絡・ご案内のため",
      "・リピーター向け割引やキャンペーン等のご案内の配信のため（メールアドレスのみ）",
      "・上記各号に付随する業務上の連絡",
    ],
  },
  {
    heading: "5. メールマガジン等の配信および配信停止",
    body: "当社は、お問い合わせをいただいた方や購読をお申し込みいただいた方に対し、上記利用目的の範囲でメールマガジン・お知らせ・各種ご案内を配信することがあります。配信の停止をご希望の場合は、配信メール下部に記載の配信停止（購読解除）リンク、または本ポリシー末尾のお問い合わせ窓口からお申し出いただくことで、いつでも停止できます。なお、ご契約・お問い合わせへの対応等に必要な業務連絡は、配信停止後も送信させていただく場合があります。",
  },
  {
    heading: "6. 第三者提供",
    body: [
      "当社は、次のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供いたしません。",
      "・法令に基づく場合",
      "・人の生命、身体または財産の保護のために必要があり、ご本人の同意を得ることが困難な場合",
      "・国の機関等が法令の定める事務を遂行することに協力する必要がある場合",
    ],
  },
  {
    heading: "7. 業務委託・外部サービスの利用",
    body: "当社は、利用目的の達成に必要な範囲で、個人情報の取り扱いを外部に委託する場合があります。また、お問い合わせ対応・メール配信・ウェブサイト運用等のために、以下のような外部サービス（クラウド事業者を含む）を利用しています。これらの委託先・提供事業者の一部は日本国外に個人情報を保管・処理する場合があります。当社は、いずれの場合も適切な委託先を選定し、秘密保持等について取り決めたうえで、必要かつ適切な監督を行います。",
  },
  {
    heading: "8. 利用する主な外部サービス",
    body: [
      "・Mailchimp（The Rocket Science Group LLC、米国）：メールマガジン・お知らせの配信および購読者管理",
      "・Resend（米国）：お問い合わせ内容の送受信",
      "・Vercel（米国）：ウェブサイトのホスティング",
      "・Google アナリティクス（Google LLC、米国）：アクセス解析",
      "・Google reCAPTCHA（Google LLC、米国）：不正送信の防止",
    ],
  },
  {
    heading: "9. Cookie およびアクセス解析ツール",
    body: "当ウェブサイトでは、利便性の向上およびアクセス状況の把握のためCookieを使用しています。また、Googleが提供する「Google アナリティクス」を利用しています。Google アナリティクスはCookieを利用してアクセス情報を収集しますが、収集される情報は匿名で処理され、個人を特定するものではありません。収集されるデータはGoogleのプライバシーポリシーに基づき管理されます。ブラウザの設定によりCookieの使用を無効にすることで、これらのデータ収集を拒否することが可能です。あわせて、フォームの不正送信防止のためGoogle reCAPTCHAを利用しており、その利用にはGoogleのプライバシーポリシーおよび利用規約が適用されます。",
  },
  {
    heading: "10. 安全管理措置",
    body: "当社は、取得した個人情報の漏洩・滅失・毀損の防止その他の安全管理のため、アクセス権限の管理、通信の暗号化、取扱状況の把握等、必要かつ適切な安全管理措置を講じます。また、宿泊者名簿およびパスポートの写しは、旅館業法に基づき3年間保管し、保管期間経過後に適切に削除します。これらの情報は、法令に基づく行政機関からの求めがある場合を除き、第三者に提供することはありません。",
  },
  {
    heading: "11. 開示・訂正・利用停止等の請求",
    body: "ご本人から、保有個人データの開示、内容の訂正・追加・削除、利用停止・消去、第三者提供の停止のご請求があった場合は、ご本人であることを確認のうえ、法令に基づき合理的な範囲内で速やかに対応いたします。ご請求は、本ポリシー末尾のお問い合わせ窓口よりご連絡ください。",
  },
  {
    heading: "12. 未成年者の個人情報",
    body: "未成年の方が当社サービスをご利用になる場合は、保護者の同意を得たうえでご提供いただくようお願いいたします。",
  },
  {
    heading: "13. プライバシーポリシーの変更",
    body: "本ポリシーは、法令の改正やサービス内容の変更等に応じて、必要に応じて変更することがあります。重要な変更を行う場合は、当ウェブサイト上でお知らせします。変更後のポリシーは、当ページに掲載した時点で効力を生じるものとします。",
  },
  {
    heading: "14. お問い合わせ窓口",
    body: "個人情報の取り扱いに関するお問い合わせ、および開示等のご請求は、当サイトのお問い合わせフォームまたは contact@yuka-han.com までご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: "80px", paddingBottom: "8rem", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 8% 0" }}>
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
          制定日：2020年5月1日　最終更新：2026年7月22日
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
