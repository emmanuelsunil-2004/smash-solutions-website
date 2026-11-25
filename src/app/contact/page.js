"use client";
import { useState } from "react";
import { FadeIn } from "@/components/Animations";

export default function Contact() {
  return (
    <>
      <PageBanner />
      <section className="section">
        <FadeIn>
          <div className="container contact-grid">
            <div className="contact-info">
            <span className="section-tag">Get in Touch</span>
            <h2 className="contact-title">Let&apos;s Talk Commodities</h2>
            <p className="contact-desc">
              Looking for a reliable metal supplier?
              Reach out to us — we&apos;ll respond within 24 hours.
            </p>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Address</strong>
                  <p>Ground Floor, 3/1639, Kayalthope, Kavanad PO,<br />Mukkad, Meenathucherry, Kollam, Kerala, India</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:smashkollam@gmail.com">smashkollam@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+917736864777">+91 7736864777</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>
            <div className="contact-cert">
              <span><strong>IEC:</strong> BMKPK3827Q</span>
              <span><strong>GST:</strong> 32BMKPK3827Q1ZK</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </FadeIn>
    </section>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: start;
        }
        .section-tag {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 50px;
          background: rgba(28,153,217,0.1);
          color: var(--accent-hover);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .contact-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 16px;
        }
        .contact-desc {
          color: var(--text-secondary);
          margin-bottom: 36px;
          line-height: 1.7;
        }
        .info-list { display: flex; flex-direction: column; gap: 24px; }
        .info-item { display: flex; gap: 16px; align-items: flex-start; }
        .info-icon-wrap {
          width: 44px; height: 44px;
          border-radius: var(--radius);
          background: rgba(28,153,217,0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-hover);
          flex-shrink: 0;
        }
        .info-item strong {
          display: block;
          color: var(--text-white);
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        .info-item p, .info-item a {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }
        .info-item a:hover { color: var(--primary-light); }
        .contact-cert {
          display: flex;
          gap: 20px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .contact-cert strong { color: var(--text-white); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-title { font-size: 1.5rem; }
          .contact-desc { font-size: 0.95rem; }
          .contact-cert { flex-direction: column; gap: 8px; }
          .contact-form { padding: 24px; }
          .form-group input, .form-group textarea { padding: 10px 14px; font-size: 0.9rem; }
        }
      `}</style>
    </>
  );
}

function PageBanner() {
  return (
    <section className="page-banner">
      <h1>Contact Us</h1>
      <p>Get in touch for commodity trading inquiries</p>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrMsg(err.message);
    }
  };

  return (
    <form className="contact-form card" onSubmit={handleSubmit}>
      <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: 8 }}>Send us a Message</h3>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Fill out the form and we&apos;ll get back to you shortly.
      </p>
      {status === "success" && (
        <div className="form-success">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="16 8 9 17 4 12"/></svg>
          <span>Message sent! We&apos;ll get back to you within 24 hours.</span>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={update} placeholder="Your full name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" value={form.email} onChange={update} placeholder="your@email.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" value={form.subject} onChange={update} placeholder="How can we help?" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={update} placeholder="Tell us what metal commodities you need or want to sell (aluminium, copper, gold, iron, zinc, etc.)..." required></textarea>
      </div>
      {status === "error" && <p className="form-error">{errMsg}</p>}
      <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 36px;
        }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label {
          font-weight: 600;
          color: var(--text-white);
          font-size: 0.88rem;
        }
        .form-group input, .form-group textarea {
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
          color: var(--text);
          background: var(--bg-dark);
        }
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: var(--text-light);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-light);
          box-shadow: 0 0 0 3px rgba(26,74,122,0.08);
        }
        .form-success {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.3);
          border-radius: var(--radius-sm);
          color: #4ade80;
          font-size: 0.9rem;
        }
        .form-error {
          color: #f87171;
          font-size: 0.88rem;
          padding: 10px 14px;
          background: rgba(248,113,113,0.1);
          border-radius: var(--radius-sm);
        }
        .contact-form button { align-self: flex-start; }
      `}</style>
    </form>
  );
}
