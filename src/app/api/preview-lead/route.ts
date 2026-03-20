import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = "8510702982";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message, businessName, slug } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const text = [
      `🔥 *New Preview Site Lead*`,
      ``,
      businessName ? `*Business:* ${businessName}` : null,
      `*Contact:* ${name}`,
      `*Phone:* ${phone}`,
      email ? `*Email:* ${email}` : null,
      message ? `*Message:* ${message}` : null,
      ``,
      slug ? `Preview: https://studio10k.com/preview/${slug}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Preview lead error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
