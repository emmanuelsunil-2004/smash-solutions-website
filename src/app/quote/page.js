"use client";
import { useState } from "react";
import { FadeIn } from "@/components/Animations";

const metals = [
  "Aluminium", "Copper", "Gold", "Iron & Steel", "Zinc",
  "Lead", "Brass", "Nickel", "Tin", "Other",
];

const units = ["MT", "KG", "LB", "Ounce", "Container"];

export default function Quote() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", country: "",
    metal: "", quantity: "", unit: "MT", details: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", country: "", metal: "", quantity: "", unit: "MT", details: "" });
    } catch (err) {
      setStatus("error");
      setErrMsg(err.message);
    }
  };

  return (
    <>
      <PageBanner />
      <section className="section">
        <FadeIn>
          <div className="container">
            <div className="quote-layout">
              <div className="quote-info">
                <span className="section-tag">Get a Quote</span>
                <h2 className="quote-title">Request a Price Quote</h2>
                <p className="quote-desc">
                  Tell us what metals you need and we&apos;ll get back to you with
                  competitive pricing within 24 hours.
                </p>
                <div className="quote-benefits">

                  <div className="qb-item">
                    <div className="qb-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="qb-item">
                    <div className="qb-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>Bulk & small quantities welcome</span>
                  </div>
                  <div className="qb-item">
                    <div className="qb-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>Worldwide delivery</span>
                  </div>
                </div>
              </div>
              <form className="quote-form card" onSubmit={handleSubmit}>
                {status === "success" && (
                  <div className="form-success">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="16 8 9 17 4 12"/></svg>
                    <span>Quote request sent! We&apos;ll get back to you within 24 hours.</span>
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={update} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={update} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={update} placeholder="+91 1234567890" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={form.company} onChange={update} placeholder="Company name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" value={form.country} onChange={update} placeholder="Delivery country" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="metal">Metal Type *</label>
                    <select id="metal" name="metal" value={form.metal} onChange={update} required>
                      <option value="">Select a metal</option>
                      {metals.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity *</label>
                    <input type="text" id="quantity" name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 500" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="unit">Unit</label>
                    <select id="unit" name="unit" value={form.unit} onChange={update}>
                      {units.map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="details">Additional Details</label>
                  <textarea id="details" name="details" value={form.details} onChange={update} rows="4" placeholder="Grade, purity, delivery timeline, or any special requirements..." />
                </div>
                {status === "error" && <p className="form-error">{errMsg}</p>}
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Request Quote"}
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
        <style>{`
          .quote-layout {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 56px;
            align-items: start;
          }
          .quote-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-white);
            margin-bottom: 16px;
          }
          .quote-desc {
            color: var(--text-secondary);
            margin-bottom: 32px;
            line-height: 1.7;
          }
          .quote-benefits { display: flex; flex-direction: column; gap: 16px; }
          .qb-item {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text);
            font-size: 0.95rem;
          }
          .qb-icon {
            width: 32px; height: 32px;
            border-radius: 50%;
            background: rgba(28,153,217,0.1);
            display: flex; align-items: center; justify-content: center;
            color: var(--accent-hover);
            flex-shrink: 0;
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
          .quote-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 36px;
          }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .form-group { display: flex; flex-direction: column; gap: 6px; }
          .form-group label {
            font-weight: 600;
            color: var(--text-white);
            font-size: 0.88rem;
          }
          .form-group input, .form-group textarea, .form-group select {
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
          .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
            outline: none;
            border-color: var(--primary-light);
            box-shadow: 0 0 0 3px rgba(26,74,122,0.08);
          }
          .form-group select {
            cursor: pointer;
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239aa3b5' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 12px center;
            padding-right: 36px;
          }
          .form-success {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
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
          @media (max-width: 768px) {
            .quote-layout { grid-template-columns: 1fr; gap: 40px; }
            .quote-title { font-size: 1.5rem; }
            .quote-form { padding: 24px; }
            .form-row { grid-template-columns: 1fr; gap: 16px; }
          }
        `}</style>
      </section>
    </>
  );
}

function PageBanner() {
  return (
    <section className="page-banner">
      <h1>Request a Quote</h1>
      <p>Get competitive pricing for the metals you need</p>
    </section>
  );
}
