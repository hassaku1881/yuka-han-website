import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

type Section = { heading: string; body: string | string[] };

const t: Record<
  SupportedLocale,
  {
    meta: { title: string; description: string };
    label: string;
    title: string;
    dateLine: string;
    contactBtn: string;
    sections: Section[];
  }
> = {
  en: {
    meta: {
      title: "Privacy Policy | Yuka-Han & Co.",
      description:
        "Yuka-Han & Co.'s privacy policy, describing how we handle personal information, including for communications and marketing.",
    },
    label: "PRIVACY POLICY",
    title: "Privacy Policy",
    dateLine: "Effective: May 1, 2020　Last updated: September 24, 2026",
    contactBtn: "Contact",
    sections: [
      {
        heading: "1. Company Information",
        body: [
          "Name: Yuka-Han & Co. (株式会社ユカハン)",
          "Address: 2-5-21 Ohanajaya, Katsushika-ku, Tokyo, Japan",
          "Contact: contact@yuka-han.com",
        ],
      },
      {
        heading: "2. Basic Policy",
        body: "Yuka-Han & Co. (the \"Company\") plans, develops, and operates accommodation facilities and provides vacation-rental management services. We regard the proper handling of our customers' personal information as a social responsibility. The Company complies with the Act on the Protection of Personal Information and other applicable laws and guidelines, and appropriately acquires, uses, and manages personal information in accordance with this Privacy Policy.",
      },
      {
        heading: "3. Personal Information We Collect",
        body: [
          "We collect personal information in the following situations.",
          "(1) When you use our inquiry / document-request form",
          "・Name",
          "・Company or business name",
          "・Email address",
          "・Phone number",
          "・Address and facility name",
          "・The type and content of your inquiry, and any attachments",
          "(2) When you subscribe to our newsletter or announcements",
          "・Name and email address",
          "(3) When you use the check-in form for an accommodation facility (checkin.airchoice.jp)",
          "・Booking information (check-in and check-out dates, number of guests, estimated arrival and departure times, means of transportation, etc.)",
          "・The guest's name, address, date of birth, nationality, and occupation",
          "・For foreign guests without an address in Japan, passport information and a copy (image) of the passport",
          "(4) When you apply for a job with us",
          "・Name, contact details, information in your résumé and other application documents, and information obtained during the selection process",
          "(5) Automatically, when you use this website",
          "・Cookies, access logs, browsing history, IP address, device and browser information, etc.",
        ],
      },
      {
        heading: "4. Purposes of Use",
        body: [
          "We use the personal information we collect within the scope of the following purposes.",
          "・Responding to and handling inquiries and consultations",
          "・Providing our services, entering into and performing contracts, and related communications",
          "・Informing you about our services, campaigns, seminars, and useful information (including distribution of newsletters and announcements)",
          "・Conducting surveys and analysis to improve our services and develop new ones",
          "・Analyzing website usage and creating statistical data (processed so that individuals cannot be identified)",
          "・Preparing and retaining the guest register as required by the Inns and Hotels Act",
          "・Communications and guidance regarding your use of the accommodation facility",
          "・Distributing information such as discounts and campaigns for returning guests (email address only)",
          "・Selection of job applicants, contacting applicants about the selection process, and notifying them of the result (for job applicants)",
          "・Business communications incidental to the above",
        ],
      },
      {
        heading: "5. Newsletters and Opt-Out",
        body: "Within the purposes described above, we may send newsletters, announcements, and other information to those who have contacted us or subscribed. You can stop receiving these at any time via the unsubscribe link at the bottom of each email or by contacting us using the details at the end of this policy. Please note that essential communications regarding contracts or the handling of your inquiry may still be sent after you unsubscribe.",
      },
      {
        heading: "6. Provision to Third Parties",
        body: [
          "Except in the following cases, the Company will not provide personal information to third parties without obtaining the individual's prior consent.",
          "・When required by law",
          "・When necessary to protect a person's life, body, or property, and it is difficult to obtain the individual's consent",
          "・When it is necessary to cooperate with a government agency carrying out duties prescribed by law",
        ],
      },
      {
        heading: "7. Outsourcing and Use of External Services",
        body: "To the extent necessary to achieve the purposes of use, we may outsource the handling of personal information. We also use external services (including cloud providers) for inquiry handling, email distribution, and website operation. Some of these providers may store or process personal information outside Japan. In all cases, we select appropriate providers, establish confidentiality and other arrangements, and exercise necessary and appropriate supervision.",
      },
      {
        heading: "8. Main External Services Used",
        body: [
          "・Mailchimp (The Rocket Science Group LLC, USA): newsletter distribution and subscriber management",
          "・Resend (USA): sending and receiving inquiry content",
          "・Vercel (USA): website hosting",
          "・Google Analytics (Google LLC, USA): access analysis",
          "・Google reCAPTCHA (Google LLC, USA): prevention of fraudulent submissions",
          "・Google Workspace (Google LLC, USA): sending and receiving email, storing application documents",
          "・Airワーク Recruitment Management (Recruit Co., Ltd., Japan): receiving and managing applications for some positions",
        ],
      },
      {
        heading: "9. Cookies and Access Analysis Tools",
        body: "This website uses cookies to improve usability and understand access trends. We also use Google Analytics, which uses cookies to collect access information. The information collected is processed anonymously and does not identify individuals; it is managed in accordance with Google's privacy policy. You can refuse this data collection by disabling cookies in your browser settings. We also use Google reCAPTCHA to prevent fraudulent submissions; its use is subject to Google's privacy policy and terms of service.",
      },
      {
        heading: "10. Security Measures",
        body: "The Company takes necessary and appropriate security measures—such as access-rights management, encryption of communications, and monitoring of handling status—to prevent the leakage, loss, or damage of the personal information it collects. In addition, the guest register and copies of passports are retained for three years as required by the Inns and Hotels Act, and are appropriately deleted after the retention period. This information will not be provided to third parties except when requested by an administrative agency in accordance with the law. Personal information of job applicants is not used for any purpose other than selection, and is promptly deleted once it no longer needs to be kept after the selection process ends. We will also delete it upon the applicant's request.",
      },
      {
        heading: "11. Disclosure, Correction, and Suspension of Use",
        body: "If an individual requests disclosure, correction, addition, deletion, suspension of use, erasure, or suspension of third-party provision of their retained personal data, we will verify their identity and respond promptly within a reasonable scope in accordance with the law. Please make such requests via the contact details at the end of this policy.",
      },
      {
        heading: "12. Minors' Personal Information",
        body: "If a minor uses our services, we ask that the information be provided with the consent of a parent or guardian.",
      },
      {
        heading: "13. Changes to This Privacy Policy",
        body: "This policy may be revised as necessary in response to changes in laws or our services. When we make significant changes, we will announce them on this website. The revised policy takes effect when posted on this page.",
      },
      {
        heading: "14. Contact",
        body: "For inquiries regarding the handling of personal information, or to make requests such as disclosure, please contact us through the inquiry form on this site or at contact@yuka-han.com.",
      },
    ],
  },
  "zh-TW": {
    meta: {
      title: "隱私權政策 | Yuka-Han & Co.",
      description:
        "Yuka-Han & Co. 的隱私權政策，說明我們如何處理個人資訊，包含用於聯絡與行銷的情形。",
    },
    label: "PRIVACY POLICY",
    title: "隱私權政策",
    dateLine: "制定日：2020年5月1日　最後更新：2026年9月24日",
    contactBtn: "聯絡我們",
    sections: [
      {
        heading: "1. 事業者資訊",
        body: [
          "名稱：株式会社ユカハン（Yuka-Han & Co.）",
          "地址：日本東京都葛飾區お花茶屋2-5-21",
          "聯絡方式：contact@yuka-han.com",
        ],
      },
      {
        heading: "2. 基本方針",
        body: "株式会社ユカハン（以下稱「本公司」）從事宿泊設施的企劃、開發與營運，以及民宿營運代管等業務。本公司認為妥善處理顧客的個人資訊是應盡的社會責任，將遵守《個人資訊保護法》及其他相關法令與指引，並依本隱私權政策適當地取得、利用及管理個人資訊。",
      },
      {
        heading: "3. 蒐集的個人資訊",
        body: [
          "本公司於下列情形蒐集個人資訊。",
          "（1）使用洽詢・資料索取表單時",
          "・姓名",
          "・公司名稱・商號",
          "・電子郵件地址",
          "・電話號碼",
          "・地址・設施名稱",
          "・洽詢的種類與內容、附件資料",
          "（2）訂閱電子報・最新消息時",
          "・姓名、電子郵件地址",
          "（3）使用宿泊設施的入住登記表單（checkin.airchoice.jp）時",
          "・住宿預約相關資訊（入住・退房日期、住宿人數、預計抵達・離開時間、交通方式等）",
          "・住宿者的姓名、地址、出生年月日、國籍、職業",
          "・於日本國內無住所之外國籍住宿者的護照資訊及護照影本（影像）",
          "（4）應徵本公司職缺時",
          "・姓名、聯絡方式、履歷等應徵文件所載事項，以及於甄選過程中詢問之事項",
          "（5）使用本網站時（自動取得的資訊）",
          "・Cookie、存取紀錄、瀏覽紀錄、IP位址、裝置與瀏覽器資訊等",
        ],
      },
      {
        heading: "4. 利用目的",
        body: [
          "本公司於下列目的範圍內利用所取得的個人資訊。",
          "・回覆與處理洽詢及諮詢",
          "・提供本公司服務、締結與履行契約，以及相關聯絡",
          "・提供本公司服務、活動、講座及實用資訊等的介紹（包含電子報・最新消息的寄送）",
          "・進行問卷調查，以及為改善服務・開發新服務所做的分析",
          "・分析網站使用狀況，並製作統計資料（將加工為無法識別個人的形式）",
          "・依旅館業法製作及保管住宿者名簿",
          "・關於宿泊設施使用的聯絡與說明",
          "・寄送回頭客專屬折扣及活動等資訊（僅限電子郵件地址）",
          "・進行應徵者之甄選、甄選相關聯絡及錄取與否之通知（限應徵者）",
          "・上述各項附帶的業務聯絡",
        ],
      },
      {
        heading: "5. 電子報等的寄送與停止",
        body: "在上述利用目的範圍內，本公司可能向曾洽詢或申請訂閱的您寄送電子報、最新消息及各類介紹。若您希望停止接收，可透過各封郵件下方所載的取消訂閱連結，或本政策末尾的聯絡窗口提出，隨時皆可停止。惟為處理契約・洽詢等所必要的業務聯絡，於取消訂閱後仍可能寄送。",
      },
      {
        heading: "6. 提供予第三方",
        body: [
          "除下列情形外，本公司不會在未事先取得本人同意的情況下，將個人資訊提供予第三方。",
          "・依法令規定時",
          "・為保護人的生命、身體或財產所必要，且難以取得本人同意時",
          "・為協助國家機關等執行法令所定事務而有必要時",
        ],
      },
      {
        heading: "7. 業務委託與外部服務的利用",
        body: "在達成利用目的所必要的範圍內，本公司可能將個人資訊的處理委託予外部。此外，為進行洽詢處理、郵件寄送與網站營運等，本公司利用下列外部服務（包含雲端業者）。其中部分委託對象・提供業者可能於日本境外保管或處理個人資訊。無論何種情形，本公司皆會選定適當的委託對象，就保密等事項作出約定，並進行必要且適當的監督。",
      },
      {
        heading: "8. 主要利用的外部服務",
        body: [
          "・Mailchimp（The Rocket Science Group LLC，美國）：電子報・最新消息的寄送及訂閱者管理",
          "・Resend（美國）：洽詢內容的收發",
          "・Vercel（美國）：網站的主機代管",
          "・Google Analytics（Google LLC，美國）：存取分析",
          "・Google reCAPTCHA（Google LLC，美國）：防止不正當的表單送出",
          "・Google Workspace（Google LLC，美國）：電子郵件的收發、應徵文件等的保管",
          "・Airワーク 採用管理（株式会社リクルート，日本）：部分職缺的應徵受理與應徵者管理",
        ],
      },
      {
        heading: "9. Cookie 及存取分析工具",
        body: "本網站為提升便利性及掌握存取狀況而使用 Cookie。此外，本公司利用 Google 提供的「Google Analytics」。Google Analytics 會使用 Cookie 蒐集存取資訊，惟所蒐集的資訊以匿名方式處理，並不會識別個人；相關資料依 Google 的隱私權政策管理。您可透過瀏覽器設定停用 Cookie，以拒絕這些資料的蒐集。另外，本公司為防止不正當送出而利用 Google reCAPTCHA，其利用適用 Google 的隱私權政策及使用條款。",
      },
      {
        heading: "10. 安全管理措施",
        body: "本公司為防止所取得個人資訊的外洩、滅失或毀損等，採取存取權限管理、通訊加密、掌握處理狀況等必要且適當的安全管理措施。此外，住宿者名簿及護照影本將依旅館業法保管三年，並於保管期間屆滿後適當刪除。除依法令有行政機關要求的情形外，這些資訊不會提供予第三方。應徵者的個人資訊不會用於甄選以外之目的，並於甄選結束後、無保管必要時迅速銷毀或刪除；應徵者本人要求刪除時亦同。",
      },
      {
        heading: "11. 開示・更正・停止利用等的請求",
        body: "當本人請求開示、更正・追加・刪除、停止利用・消除、或停止提供予第三方其保有個人資料時，本公司將於確認為本人後，依法令於合理範圍內迅速處理。相關請求請透過本政策末尾的聯絡窗口與我們聯繫。",
      },
      {
        heading: "12. 未成年人的個人資訊",
        body: "未成年人使用本公司服務時，敬請於取得監護人同意後再行提供。",
      },
      {
        heading: "13. 隱私權政策的變更",
        body: "本政策可能因法令修訂或服務內容變更等而視需要進行變更。進行重大變更時，本公司將於本網站上公告。變更後的政策，自刊載於本頁面之時起生效。",
      },
      {
        heading: "14. 聯絡窗口",
        body: "有關個人資訊處理的洽詢，以及開示等請求，請透過本網站的洽詢表單或 contact@yuka-han.com 與我們聯繫。",
      },
    ],
  },
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = t[locale as SupportedLocale];
  if (!content) return {};
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/privacy`,
      languages: {
        ja: `${BASE_URL}/privacy`,
        en: `${BASE_URL}/en/privacy`,
        "zh-TW": `${BASE_URL}/zh-TW/privacy`,
        "x-default": `${BASE_URL}/privacy`,
      },
    },
  };
}

export default async function LocalePrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();
  const content = t[locale as SupportedLocale];

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
          {content.label}
        </p>
        <h1 style={{
          fontFamily: "var(--font-en)",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 400,
          color: "var(--color-primary)",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}>
          {content.title}
        </h1>
        <p style={{
          fontSize: "0.85rem",
          color: "var(--color-text-light)",
          marginBottom: "3.5rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}>
          {content.dateLine}
        </p>

        {content.sections.map((sec) => (
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
            href={`/${locale}/contact`}
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
            {content.contactBtn}
          </a>
        </div>
      </div>
    </main>
  );
}
