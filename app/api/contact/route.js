import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, phone, interest, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Citymore Homes Contact <onboarding@resend.dev>",
    to: "hello@citymorehomes.com",
    replyTo: email,
    subject: `New enquiry — ${interest}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nInterest: ${interest}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
