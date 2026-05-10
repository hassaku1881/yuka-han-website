import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 株式会社ユカハン",
  description: "施設・ご予約・運営代行・コンサルティング・取材のご依頼、近隣からのご連絡など、お気軽にお問い合わせください。",
  alternates: {
    canonical: `${BASE_URL}/contact`,
    languages: {
      en: `${BASE_URL}/en/contact`,
      "x-default": `${BASE_URL}/contact`,
    },
  },
};

export default function ContactPage() {
  return <ContactForm locale="ja" />;
}
