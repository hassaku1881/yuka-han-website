import type { Locale } from "@/lib/i18n";

// 住宅宿泊管理業者の登録（住宅宿泊事業法）。
// 有効期間満了は 2031-11-04。更新申請は 2031-08-06〜2031-10-05 のみ受付で、事前連絡はない。
// 更新したら登録番号の（01）が（02）に変わるので、ここを書き換える。

export const HOUSING_MGMT_REG_NO: Record<Locale, string> = {
  ja: "国土交通大臣（01）第F06538号",
  en: "Minister of Land, Infrastructure, Transport and Tourism (01) No. F06538",
  "zh-TW": "國土交通大臣（01）第F06538號",
};

export const HOUSING_MGMT_REG_TITLE: Record<Locale, string> = {
  ja: "住宅宿泊管理業者",
  en: "Registered Residential Accommodation Management Business Operator",
  "zh-TW": "住宅宿泊管理業者",
};
