# SMASH Solutions & Facilities — Website

Marketing website for a commodity trading and facilities company: metals trading (copper, aluminium, gold, iron, zinc and others), plus facility services.

Six pages, two server-side form handlers, server-side validation and email delivery. Built with Next.js 15 (App Router), React 19 and Nodemailer.

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page — hero video, metals grid, value proposition |
| `/about` | Company background and approach |
| `/services` | Trading and facilities services |
| `/quote` | Multi-field quote request form |
| `/contact` | Contact form and company details |
| `/faq` | Common questions |

## API routes

- `POST /api/quote` — validates name, email, metal type and quantity, then emails the sales inbox
- `POST /api/contact` — validates and delivers contact messages

Both routes validate input server-side (not just in the browser), and `src/lib/mail.js` logs the email instead of sending when SMTP is unconfigured, so the app runs without credentials.

## Run it

    npm install
    npm run dev

## Environment

    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587
    SMTP_SECURE=false
    SMTP_USER=you@example.com
    SMTP_PASS=app-password
    CONTACT_EMAIL=sales@example.com

Without these the forms still work end to end — the message is logged rather than delivered.

## Deploy

Deploys to Vercel without configuration. Set the environment variables above in the project settings.

---

Emmanuel Sunil · emmanuelsunil959@gmail.com · [github.com/emmanuelsunil-2004](https://github.com/emmanuelsunil-2004)
