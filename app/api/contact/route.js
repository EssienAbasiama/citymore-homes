import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where enquiries land — your real inbox.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@citymorehomes.com";
// Who they appear to be from — MUST be on a domain verified in Resend.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "CITYMORE Homes <website@citymorehomes.com>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, interest, message } = body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    // Misconfiguration — surfaced in logs, generic message to the visitor.
    console.error("RESEND_API_KEY is not set; cannot send contact email.");
    return NextResponse.json(
      { error: "Email isn't configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  const subjectInterest = interest?.trim() || "General enquiry";
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0a0a0a;line-height:1.6">
      <h2 style="margin:0 0 16px">New website enquiry — ${escapeHtml(subjectInterest)}</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#666">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">Phone</td><td>${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">Interest</td><td>${escapeHtml(subjectInterest)}</td></tr>
      </table>
      <p style="margin:20px 0 6px;color:#666">Message</p>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>`;

  const text = [
    `New website enquiry — ${subjectInterest}`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Interest: ${subjectInterest}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const firstName = name.trim().split(/\s+/)[0];
  const replyHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0a0a0a;line-height:1.7;max-width:520px">
      <p style="margin:0 0 16px">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px">
        Thank you for reaching out to <strong>CITYMORE Homes</strong>. We've received
        your message and a member of our team will be in touch within one working day.
      </p>
      <p style="margin:0 0 8px;color:#666">For reference, here's what you sent us:</p>
      <blockquote style="margin:0 0 20px;padding:12px 16px;border-left:3px solid #0a0a0a;background:#f5f2e9;white-space:pre-wrap">${escapeHtml(message)}</blockquote>
      <p style="margin:0 0 16px">
        If it's urgent, you can reach us directly at
        <a href="mailto:${escapeHtml(TO_EMAIL)}" style="color:#0a0a0a">${escapeHtml(TO_EMAIL)}</a>
        or on +234 903 755 5786.
      </p>
      <p style="margin:24px 0 0;color:#666">Warm regards,<br/>The CITYMORE Homes team</p>
    </div>`;

  const replyText = [
    `Hi ${firstName},`,
    ``,
    `Thank you for reaching out to CITYMORE Homes. We've received your message and a member of our team will be in touch within one working day.`,
    ``,
    `For reference, here's what you sent us:`,
    message,
    ``,
    `If it's urgent, you can reach us directly at ${TO_EMAIL} or on +234 903 755 5786.`,
    ``,
    `Warm regards,`,
    `The CITYMORE Homes team`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email, // hit "Reply" and it goes straight to the client
      subject: `New enquiry — ${subjectInterest} — ${name}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try again." },
        { status: 502 },
      );
    }

    // Auto-reply to the visitor. Best-effort — the enquiry already reached us,
    // so don't fail the request if only the confirmation bounces.
    try {
      const { error: replyError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: TO_EMAIL, // their reply comes back to our inbox
        subject: "We've got your message — CITYMORE Homes",
        text: replyText,
        html: replyHtml,
      });
      if (replyError) console.error("Auto-reply send error:", replyError);
    } catch (replyErr) {
      console.error("Auto-reply threw:", replyErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
