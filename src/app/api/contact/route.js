import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendMail({
      to: process.env.CONTACT_EMAIL || "smashkollam@gmail.com",
      subject: `Contact: ${subject || "New Inquiry"} — ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:700;color:#333">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:700;color:#333">Email</td><td style="padding:8px">${email}</td></tr>
          ${subject ? `<tr><td style="padding:8px;font-weight:700;color:#333">Subject</td><td style="padding:8px">${subject}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:700;color:#333">Message</td><td style="padding:8px">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
