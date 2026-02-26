import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8214613908:AAGhMq6p7ygcybeS6fdWnf-DnpuUEJvDfOY";
const TELEGRAM_CHAT_ID = "8510702982";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Get the plumber name from the request body (passed from the client)
  let plumberName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  try {
    const body = await req.json().catch(() => ({}));
    if (body.name) {
      plumberName = body.name;
    }
  } catch {
    // ignore
  }

  const message = `👀 [${plumberName}] just viewed their Studio10k spec site\n\nhttps://studio10k.com/preview/${slug}`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ success: false, error: err }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Track error:", err);
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
  }
}
