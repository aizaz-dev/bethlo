export async function POST(req) {
  try {
    const data = await req.json();
    const { name, request } = data || {};
    if (!name || !request) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const subject = "Prayer Request";
    const html = `
      <div style="background:#f5f7fb; padding:24px; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width:680px; margin:0 auto; background:#ffffff; border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.06); overflow:hidden;">
          <div style="background:#8CA0C4; color:#fff; padding:18px 22px;">
            <div style="font-size:16px; letter-spacing:0.3px;">Bethlehem Lutheran Church</div>
            <div style="font-size:22px; font-weight:600; margin-top:4px;">Prayer Request</div>
          </div>
          <div style="padding:22px">
            <div style="font-size:18px; font-weight:600; color:#1f2937; margin-bottom:8px;">New Prayer Submission</div>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:separate; border-spacing:0 10px;">
              <tr>
                <td style="width:160px; color:#6b7280; font-size:13px;">Name</td>
                <td style="color:#111827; font-size:15px; font-weight:500;">${escapeHtml(name)}</td>
              </tr>
              ${data.email ? `<tr><td style=\"width:160px; color:#6b7280; font-size:13px;\">Email</td><td style=\"color:#111827; font-size:15px; font-weight:500;\">${escapeHtml(data.email)}</td></tr>` : ""}
              <tr>
                <td style="width:160px; color:#6b7280; font-size:13px;">Private</td>
                <td style="color:#111827; font-size:15px; font-weight:500;">${data.private ? "Yes" : "No"}</td>
              </tr>
            </table>
            <div style="margin-top:16px; color:#374151; font-size:14px; font-weight:600;">Request</div>
            <div style="margin-top:8px; background:#F8FAFC; border:1px solid #E5E7EB; border-radius:10px; padding:12px; color:#111827; line-height:1.6; font-size:15px; white-space:pre-wrap;">${escapeHtml(request)}</div>
            ${data.email ? `<div style="margin-top:18px"><a href="mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent("Re: Prayer Request")}" style="display:inline-block; background:#76C7CF; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:8px; font-weight:600; font-size:14px;">Reply to ${escapeHtml(data.email)}</a></div>` : ""}
            <div style="margin-top:16px; color:#6b7280; font-size:12px;">Submitted at ${escapeHtml(new Date().toLocaleString())}</div>
          </div>
        </div>
      </div>
    `;

    const sent = await sendEmail({ subject, html });
    if (!sent.ok) {
      return NextResponse.json({ message: sent.message || "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendEmail({ subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true").toLowerCase() === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;
    if (!host || !user || !pass) {
      console.warn("Email not configured: missing SMTP env. Mock-sending prayer email.");
      console.log("MOCK EMAIL PRAYER =>", { to: "azaz@athenasols.com", subject });
      return { ok: true, message: "Mock send (no SMTP)" };
    }
    try {
      const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
      await transporter.sendMail({ from, to: "azaz@athenasols.com", subject, html });
      return { ok: true };
    } catch (e) {
      console.error("SMTP send error", e);
      return { ok: false, message: "SMTP error" };
    }
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "azaz@athenasols.com",
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("Resend error", res.status, body);
    return { ok: false, message: "Email provider error" };
  }

  return { ok: true };
}
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
export const preferredRegion = "auto";