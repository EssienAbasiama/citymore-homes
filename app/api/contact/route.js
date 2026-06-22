import { NextResponse } from "next/server";

const PHONE = "2349037555786"; // hello@citymorehomes.com WhatsApp number

export async function POST(request) {
  const { name, email, phone, interest, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const text = [
    `*New Enquiry — ${interest}*`,
    ``,
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    `*Phone:* ${phone || "—"}`,
    ``,
    `*Message:*`,
    message,
  ].join("\n");

  const url = `https://api.callmebot.com/whatsapp.php?phone=${PHONE}&text=${encodeURIComponent(text)}&apikey=${process.env.CALLMEBOT_API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send WhatsApp message" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
