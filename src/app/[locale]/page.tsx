import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

// /en と /zh-TW はまだトップページ未実装のため 404
// 将来ここに各言語のトップページコンテンツを実装する
export default async function LocaleTopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();
  notFound();
}
