import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({ to, subject, html }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("--- MAIL (not sent — SMTP not configured) ---");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Body:", html);
    console.log("--- END MAIL ---");
    return true;
  }
  await transport.sendMail({
    from: `"SMASH SOLUTIONS" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}
