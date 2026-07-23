import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const interest = (body.interest || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, email, and a message." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  const subject = `1654 Birchwood Drive — new enquiry from ${name}${interest ? ` (${interest})` : ""}`;
  const text = [
    `Property: 1654 Birchwood Drive, Lorne Park, Mississauga`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    interest ? `Interest: ${interest}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <table style="font-family: 'Inter', sans-serif; max-width: 560px;">
      <tr><td colspan="2" style="padding-bottom:14px; color:#a85a3c; font-size:12px; letter-spacing:0.22em; text-transform:uppercase;">1654 Birchwood Drive — New Enquiry</td></tr>
      <tr><td style="padding:6px 0; color:#666; width:90px;">Name</td><td style="padding:6px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      ${phone ? `<tr><td style="padding:6px 0; color:#666;">Phone</td><td style="padding:6px 0;">${escapeHtml(phone)}</td></tr>` : ""}
      ${interest ? `<tr><td style="padding:6px 0; color:#666;">Interest</td><td style="padding:6px 0;">${escapeHtml(interest)}</td></tr>` : ""}
      <tr><td colspan="2" style="padding-top:18px; border-top:1px solid #eee; white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
    </table>`;

  if (!apiKey) {
    // Dev fallback: log and return success so the form works without keys.
    console.log("[43-ballacaine contact] No RESEND_API_KEY set. Submission:\n" + text);
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      // Sender uses Resend's onboarding sender (no domain verification
      // needed). Upgrade later to a verified custom domain (e.g.
      // noreply@davidoey.com) for branded sender display.
      from: "1654 Birchwood Drive <onboarding@resend.dev>",
      to: "davidoey@mac.com",
      reply_to: email,
      subject,
      text,
      html,
    });
    if ((result as { error?: unknown }).error) {
      console.error("[43-ballacaine contact] Resend error:", (result as { error?: unknown }).error);
      return NextResponse.json(
        { ok: false, error: "Email service rejected the request." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[43-ballacaine contact] Send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send the message right now." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
