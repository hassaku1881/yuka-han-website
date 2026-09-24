import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const { type, company, name, email, phone, address, message, attachment, recaptchaToken } = await req.json();

  // reCAPTCHA v3 verification
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const verifyData = await verifyRes.json();
  if (!verifyData.success || verifyData.score < 0.5) {
    console.warn("reCAPTCHA failed:", verifyData);
    return NextResponse.json({ error: "認証に失敗しました" }, { status: 400 });
  }

  // バリデーション
  const validTypes = ["guest", "operations", "media", "neighbor", "system", "other"];
  if (!validTypes.includes(type)) {
    return NextResponse.json({ error: "種別が不正です" }, { status: 400 });
  }
  if (!name?.trim()) {
    return NextResponse.json({ error: "お名前は必須です" }, { status: 400 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "メールアドレスが不正です" }, { status: 400 });
  }
  if (!message?.trim() || message.trim().length < 10) {
    return NextResponse.json({ error: "お問い合わせ内容は10文字以上入力してください" }, { status: 400 });
  }

  const typeLabel: Record<string, string> = {
    guest: "施設・ご予約に関するお問い合わせ",
    operations: "民泊運営代行・コンサルティングのご相談",
    media: "取材・メディア掲載のご依頼",
    neighbor: "近隣・地域住民の方からのご連絡",
    system: "運営支援システムに関するお問い合わせ",
    other: "その他",
  };

  const body: Record<string, unknown> = {
    from: "Yuka-Han お問い合わせフォーム <contact@yuka-han.com>",
    to: ["contact@yuka-han.com"],
    reply_to: email,
    subject: `【お問い合わせ】${typeLabel[type] ?? type} — ${name}`,
    html: `
      <h2>お問い合わせが届きました</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold;width:160px">種別</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${typeLabel[type] ?? type}</td></tr>
        ${company ? `<tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">会社名・屋号</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${company}</td></tr>` : ""}
        <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">お名前</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">メール</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${email}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">電話</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${phone || "未記入"}</td></tr>
        ${address ? `<tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">住所・施設名</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${address}</td></tr>` : ""}
        <tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold;vertical-align:top">内容</td><td style="padding:8px 12px;white-space:pre-wrap">${message}</td></tr>
        ${attachment ? `<tr><td style="padding:8px 12px;background:#f5f5f3;font-weight:bold">添付ファイル</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${attachment.filename}</td></tr>` : ""}
      </table>
    `,
  };

  if (attachment) {
    body.attachments = [{ filename: attachment.filename, content: attachment.content }];
  }

  // Send email via Resend
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Resend error:", error);
    return NextResponse.json({ error: "送信に失敗しました", detail: error }, { status: 500 });
  }

  // Add to Mailchimp（失敗してもフォーム送信は成功扱い）
  try {
    const mcApiKey = process.env.MAILCHIMP_API_KEY;
    const mcListId = process.env.MAILCHIMP_LIST_ID;
    const mcServer = mcApiKey?.split("-")[1]; // e.g. "us20"

    if (mcApiKey && mcListId && mcServer) {
      const emailHash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
      const mcBase = `https://${mcServer}.api.mailchimp.com/3.0/lists/${mcListId}/members`;

      // Add/update member
      await fetch(`${mcBase}/${emailHash}`, {
        method: "PUT",
        headers: {
          Authorization: `apikey ${mcApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: "subscribed",
          merge_fields: { FNAME: name },
        }),
      });

      // Add tags: 全員に "contact_form" + カテゴリ別タグ
      const tagMap: Record<string, string> = {
        guest:      "contact_guest",
        operations: "contact_operations",
        media:      "contact_media",
        neighbor:   "contact_neighbor",
        system:     "contact_system",
        other:      "contact_other",
      };
      await fetch(`${mcBase}/${emailHash}/tags`, {
        method: "POST",
        headers: {
          Authorization: `apikey ${mcApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tags: [
            { name: "contact_form", status: "active" },
            { name: tagMap[type] ?? "contact_other", status: "active" },
          ],
        }),
      });
    }
  } catch (err) {
    console.error("Mailchimp error:", err);
  }

  return NextResponse.json({ ok: true });
}
