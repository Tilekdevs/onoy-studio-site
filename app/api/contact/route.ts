import { NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org/bot";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return NextResponse.json(
      { error: "Server is not configured for Telegram" },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    telegramWhatsapp?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    name = "",
    email = "",
    phone = "",
    telegramWhatsapp = "",
    message = "",
  } = body;
  const text = [
    "🆕 Новая заявка с сайта Onoy",
    "",
    `👤 Имя: ${String(name).trim() || "—"}`,
    `📧 Email: ${String(email).trim() || "—"}`,
    `📱 Телефон: ${String(phone).trim() || "—"}`,
    `💬 Telegram/WhatsApp: ${String(telegramWhatsapp).trim() || "—"}`,
    "",
    "Сообщение:",
    String(message).trim() || "—",
  ].join("\n");

  try {
    const res = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      console.error("Telegram API error", data);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Network error" }, { status: 502 });
  }
}
