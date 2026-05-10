import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ locale: string }> };

const META: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: "Contact | Yuka-Han & Co.",
    description: "Property inquiries, vacation rental consulting, media requests, and messages from local residents.",
  },
  "zh-TW": {
    title: "聯絡我們 | 株式会社ユカハン",
    description: "設施・預約諮詢、代營運・顧問服務、媒體採訪邀約及周邊住民聯絡。",
  },
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale as SupportedLocale];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: {
        ja: `${BASE_URL}/contact`,
        en: `${BASE_URL}/en/contact`,
        "x-default": `${BASE_URL}/contact`,
      },
    },
  };
}

export default async function LocaleContactPage({ params }: Props) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();
  return <ContactForm locale={locale as SupportedLocale} />;
}
