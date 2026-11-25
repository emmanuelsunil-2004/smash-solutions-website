import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, country, metal, quantity, unit, details } = body;

    if (!name || !email || !metal || !quantity) {
      return NextResponse.json(
        { error: "Name, email, metal type, and quantity are required." },
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
      subject: `Quote Request: ${metal} — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:700;color:#333">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:700;color:#333">Email</td><td style="padding:8px">${email}</td></tr>
          ${phone ? `<tr><td style="padding:8px;font-weight:700;color:#333">Phone</td><td style="padding:8px">${phone}</td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px;font-weight:700;color:#333">Company</td><td style="padding:8px">${company}</td></tr>` : ""}
          ${country ? `<tr><td style="padding:8px;font-weight:700;color:#333">Country</td><td style="padding:8px">${country}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:700;color:#333">Metal</td><td style="padding:8px">${metal}</td></tr>
          <tr><td style="padding:8px;font-weight:700;color:#333">Quantity</td><td style="padding:8px">${quantity} ${unit || "MT"}</td></tr>
          ${details ? `<tr><td style="padding:8px;font-weight:700;color:#333">Details</td><td style="padding:8px">${details.replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
