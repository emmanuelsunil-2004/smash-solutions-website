import Link from "next/link";
import { FadeIn, Stagger } from "@/components/Animations";

export default function About() {
  return (
    <>
      <PageBanner />
      <Story />
      <Values />
      <CTASection />
    </>
  );
}

function PageBanner() {
  return (
    <section className="page-banner">
      <h1>About Us</h1>
      <p>Your trusted partner in commodity trading</p>
    </section>
  );
}

function Story() {
  return (
    <section className="section">
      <FadeIn>
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-tag">Our Business</span>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: 24 }}>
                Goods Across Borders
              </h2>
              <p>
                SMASH SOLUTIONS is a commodity supply company based in Kollam, Kerala,
                specializing in ferrous and non-ferrous metals. We supply aluminium,
                copper, gold, iron, zinc, lead, brass, nickel, tin, and more —
                delivering quality metals to clients across the globe at competitive prices.
              </p>
              <p>
                We supply quality metals directly to manufacturers and industries
                that need them. By leveraging our network and market knowledge,
                we deliver reliable supply and transparent pricing that create
                lasting value for our clients.
              </p>
              <p>
                From logistics and customs clearance to pricing and documentation,
                we handle everything so our clients can focus on their core business.
              </p>
              <div className="md-info">
                <strong>Managing Director:</strong> Albin Antony B
              </div>
              <div className="branch-info">
                <strong>Branches:</strong><br />
                🇮🇳 Kerala, India (HQ)<br />
                🇹🇿 Dar es Salaam, Tanzania<br />
                🇦🇪 Dubai, UAE
              </div>
            </div>
            <Stagger>
              <div className="story-certs">
                <div className="cert-card">
                  <div className="cert-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3>IEC Certified</h3>
                  <p className="cert-code">BMKPK3827Q</p>
                   <p>Registered with DGFT for international commodity trading</p>
                </div>
                <div className="cert-card">
                  <div className="cert-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3>GST Registered</h3>
                  <p className="cert-code">32BMKPK3827Q1ZK</p>
                  <p>Fully compliant with tax regulations</p>
                </div>
              </div>
            </Stagger>
          </div>
        </div>
      </FadeIn>
      <style>{`
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
        .story-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .story-text p {
          color: var(--text-secondary);
          font-size: 1.02rem;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .story-certs { display: flex; flex-direction: column; gap: 20px; }
        .cert-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .cert-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
        }
        .cert-icon {
          width: 48px; height: 48px;
          border-radius: var(--radius);
          background: linear-gradient(135deg, rgba(28,153,217,0.1), rgba(28,153,217,0.05));
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-hover);
          margin-bottom: 16px;
        }
        .cert-card h3 { color: var(--text-white); font-size: 1.05rem; margin-bottom: 4px; }
        .cert-code {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: var(--primary-light);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .cert-card > p:last-child { color: var(--text-secondary); font-size: 0.88rem; }
        .md-info {
          margin-top: 24px;
          padding: 16px 20px;
          background: rgba(28,153,217,0.08);
          border-left: 3px solid var(--accent);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 0.95rem;
          color: var(--text);
        }
        .md-info strong { color: var(--text-white); }
        .branch-info {
          margin-top: 12px;
          padding: 16px 20px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .branch-info strong { color: var(--text-white); }
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr; gap: 40px; }
          .story-text p { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
}

function Values() {
  const values = [
    {
      title: "Market Expertise",
      desc: "Deep knowledge of global commodity prices, trends, and trade routes.",
      icon: "🎯",
    },
    {
      title: "Reliability",
      desc: "When we commit to a price and delivery, we honor it. Every time.",
      icon: "⚖️",
    },
    {
      title: "Global Reach",
      desc: "Strong supply network serving clients across 50+ countries worldwide.",
      icon: "🌐",
    },
    {
      title: "Transparency",
      desc: "Clear pricing, honest communication, and no hidden fees.",
      icon: "🤝",
    },
  ];
  return (
    <section className="section section-dark">
      <FadeIn>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <Stagger>
            <div className="values-grid">
              {values.map((v) => (
                <div key={v.title} className="card value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </Stagger>
        </div>
      </FadeIn>
      <style>{`
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .value-card { text-align: center; }
        .value-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
        .value-card h3 { color: var(--text-white); margin-bottom: 10px; font-size: 1.1rem; }
        .value-card p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; }
        @media (max-width: 768px) { .values-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr; } .value-icon { font-size: 2rem; } .value-card p { font-size: 0.85rem; } }
      `}</style>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="container cta-content" style={{ textAlign: "center", padding: "60px 0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
          Interested in commodity trading?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28 }}>
          Let&apos;s discuss how we can help you source or sell commodities
        </p>
        <Link href="/contact" className="btn btn-primary">
          Contact Us <span className="btn-arrow">→</span>
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
