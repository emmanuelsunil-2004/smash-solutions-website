import Link from "next/link";
import { FadeIn, Stagger } from "@/components/Animations";

export default function Services() {
  const services = [
    {
      title: "Commodity Sourcing",
      desc: "We supply a wide range of metals — aluminium, copper, gold, iron, zinc, lead, brass, and more — sourced through our global network. Our inventory spans ferrous and non-ferrous markets worldwide.",
      features: [
        "Direct metal supply",
        "Competitive pricing",
        "Quality assurance & sampling",
        "Bulk order fulfilment",
        "Multi-country supply network",
        "Ferrous & non-ferrous metals",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      ),
    },
    {
      title: "Global Export Logistics",
      desc: "We handle the complete export process — from shipping and freight to customs clearance and documentation. Your commodities reach buyers safely and on time.",
      features: [
        "International shipping (FCL & LCL)",
        "Customs clearance & documentation",
        "Freight forwarding",
        "Real-time shipment tracking",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      ),
    },
    {
      title: "Bulk Supply",
      desc: "We supply metals to manufacturers and industries in bulk — handling everything from pricing to logistics so you get a seamless experience.",
      features: [
        "Volume-based supply",
        "Contract management",
        "Market intelligence reports",
        "Long-term supply partnerships",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
      ),
    },
    {
      title: "Customs & Compliance",
      desc: "We ensure every shipment meets international trade regulations. Our expertise in customs documentation keeps your cargo moving without delays or penalties.",
      features: [
        "HS code classification",
        "Import/export permits & licenses",
        "Duty calculation & optimization",
        "Trade compliance audits",
        "Commodity trade regulations",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
      ),
    },
  ];

  return (
    <>
      <PageBanner />
      <section className="section">
        <FadeIn>
          <div className="container">
            <Stagger>
              <div className="services-list">
                {services.map((s, i) => (
                  <div key={s.title} className="service-detail-wrap">
                    <div className={`service-detail ${i % 2 === 0 ? "" : "reverse"}`}>
                      <div className="sd-icon-wrap">
                        <div className="sd-icon">{s.icon}</div>
                        <span className="sd-number">0{i + 1}</span>
                      </div>
                      <div className="sd-content">
                        <h2>{s.title}</h2>
                        <p>{s.desc}</p>
                        <ul className="sd-features">
                          {s.features.map((f) => (
                            <li key={f}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-hover)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Stagger>
          </div>
        </FadeIn>
        <style>{`
          .service-detail-wrap { margin-bottom: 40px; }
          .service-detail {
            display: flex;
            gap: 48px;
            align-items: flex-start;
            background: var(--bg-white);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 40px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
          }
          .service-detail:hover {
            box-shadow: var(--shadow-lg);
            border-color: var(--accent);
          }
          .service-detail.reverse {
            flex-direction: row-reverse;
          }
          .sd-icon-wrap {
            flex-shrink: 0;
            text-align: center;
            width: 100px;
          }
          .sd-icon {
            width: 64px; height: 64px;
            border-radius: var(--radius);
            background: linear-gradient(135deg, rgba(28,153,217,0.12), rgba(28,153,217,0.05));
            display: flex; align-items: center; justify-content: center;
            color: var(--accent-hover);
            margin: 0 auto 12px;
          }
          .sd-number {
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-light);
            letter-spacing: 1px;
          }
          .sd-content h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-white);
            margin-bottom: 12px;
          }
          .sd-content > p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.8;
            margin-bottom: 20px;
          }
          .sd-features {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px 24px;
          }
          .sd-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
            color: var(--text);
          }
          @media (max-width: 768px) {
            .service-detail { flex-direction: column !important; gap: 20px; padding: 24px; }
            .sd-icon-wrap { width: auto; display: flex; align-items: center; gap: 16px; }
            .sd-icon { margin: 0; }
            .sd-features { grid-template-columns: 1fr; }
            .sd-content h2 { font-size: 1.25rem; }
            .sd-content > p { font-size: 0.9rem; }
          }
        `}</style>
      </section>
      <CTASection />
    </>
  );
}

function PageBanner() {
  return (
    <section className="page-banner">
      <h1>Our Services</h1>
      <p>End-to-end commodity trading for aluminium, copper, gold, iron, zinc, and more</p>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="container cta-content" style={{ textAlign: "center", padding: "60px 0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
          Looking for a reliable metal supplier?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28 }}>
          Contact us and we&apos;ll help you get the metals you need
        </p>
        <Link href="/contact" className="btn btn-primary">
          Get Started <span className="btn-arrow">→</span>
        </Link>
      </div>
      <style>{`
        .cta-section { position: relative; overflow: hidden; }
        .cta-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-light) 100%);
        }
        .cta-content { position: relative; z-index: 1; }
      `}</style>
    </section>
  );
}
