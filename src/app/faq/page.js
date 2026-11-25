"use client";
import { useState } from "react";
import { FadeIn } from "@/components/Animations";

const faqs = [
  {
    q: "What metals do you supply?",
    a: "We supply a wide range of ferrous and non-ferrous metals including aluminium, copper, gold, iron & steel, zinc, lead, brass, bronze, nickel, and tin. If you need a specific grade or form, contact us and we'll source it.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order quantities vary by metal type and market availability. Generally, we work with bulk quantities (starting from 1 MT for most base metals). Contact us with your requirements and we'll provide a tailored quote.",
  },
  {
    q: "How do you handle shipping and delivery?",
    a: "We manage the entire logistics chain — from loading at origin to delivery at your destination. This includes freight forwarding, customs clearance, documentation, and insurance. Standard delivery timelines range from 2–6 weeks depending on the destination and metal type.",
  },
  {
    q: "What payment terms do you offer?",
    a: "We offer flexible payment terms including letter of credit (LC) and telegraphic transfer (TT). Terms are negotiated based on the order value, metal type, and client relationship.",
  },
  {
    q: "How do you ensure metal quality?",
    a: "We work with trusted suppliers and conduct quality inspections at every stage. Third-party sampling and assay verification can be arranged upon request. Certificates of analysis and origin are provided with every shipment.",
  },
  {
    q: "What countries do you ship to?",
    a: "We serve clients across 50+ countries including markets in Asia, Africa, Europe, the Middle East, and the Americas. Our logistics network enables us to deliver to most major ports worldwide.",
  },
  {
    q: "How long does delivery typically take?",
    a: "Delivery timelines depend on the destination and metal type. Typical lead times are 2–3 weeks for standard base metals to major ports, and up to 6 weeks for precious metals or less common destinations.",
  },
  {
    q: "What certifications do you have?",
    a: "We are IEC registered (BMKPK3827Q) and GST compliant (32BMKPK3827Q1ZK), fully authorized for international commodity trading under Indian regulations.",
  },
  {
    q: "Do you buy scrap and used metals?",
    a: "Yes, we source metal scrap and recyclable materials from suppliers worldwide. Contact us with details of the material type, quantity, and location for a competitive price quote.",
  },
  {
    q: "How do I get a price quote?",
    a: "You can request a quote through our dedicated Quote Request page or contact us directly. Please include the metal type, quantity required, delivery destination, and preferred timeline, and we'll respond within 24 hours.",
  },
];

export default function FAQ() {
  return (
    <>
      <PageBanner />
      <section className="section">
        <FadeIn>
          <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <Accordion key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </FadeIn>
        <style>{`
          .faq-item {
            border: 1px solid var(--border);
            border-radius: var(--radius);
            margin-bottom: 12px;
            background: var(--bg-white);
            overflow: hidden;
            transition: box-shadow 0.3s;
          }
          .faq-item:hover { box-shadow: var(--shadow-sm); }
          .faq-question {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            background: none;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-white);
            text-align: left;
            cursor: pointer;
            gap: 16px;
          }
          .faq-question:hover { color: var(--accent-hover); }
          .faq-icon {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s;
            color: var(--accent);
          }
          .faq-icon.open { transform: rotate(45deg); }
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease, padding 0.35s ease;
            padding: 0 24px;
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.8;
          }
          .faq-answer.open {
            max-height: 300px;
            padding: 0 24px 20px;
          }
        `}</style>
      </section>
    </>
  );
}

function PageBanner() {
  return (
    <section className="page-banner">
      <h1>Frequently Asked Questions</h1>
      <p>Everything you need to know about trading with SMASH SOLUTIONS</p>
    </section>
  );
}

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className={`faq-icon ${open ? "open" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
