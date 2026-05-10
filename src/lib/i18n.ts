export const SUPPORTED_LOCALES = ["en", "zh-TW"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export type Locale = "ja" | SupportedLocale;

export const LOCALE_LABELS: Record<Locale, string> = {
  ja: "JP",
  en: "EN",
  "zh-TW": "繁中",
};

export const LOCALE_LANG: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  "zh-TW": "zh-TW",
};

/** microCMS ID suffix per non-Japanese locale */
export const LOCALE_SUFFIX: Record<SupportedLocale, string> = {
  en: "-en",
  "zh-TW": "-zh",
};

/** Base article IDs that have EN + ZH translations in microCMS */
export const TRANSLATED_ARTICLE_BASE_IDS = [
  "2026010012",
  "2026010023",
  "2026010034",
  "2026010045",
  "2026010056",
  "2026010067",
  "2026010078",
  "2026010089",
];
