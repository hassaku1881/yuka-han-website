import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { type, name, email, phone, message } = await req.json();

  const typeLabel: Record<string, string> = {
    wuto: "Wutoのご予約・お問い合わせ",
    service: "民泊運営代行のご相談",
    other: "その他",
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Yuka-Han お問い合わせフォーム <onboarding@resend.dev>",
      to: ["info@yuka-han.com"],
      reply_to: email,
      subject: `【お問い合わせ】${typeLabel[type] ?? type} — ${name}`,
      html: `
        <h2>お問い合わせが届きました</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold;width:160px">種別</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${typeLabel[type] ?? type}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">お名前</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">メール</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">電話</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${phone || "未記入"}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold;vertical-align:top">内容</td><td style="padding:8px 12px;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Resend error:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
