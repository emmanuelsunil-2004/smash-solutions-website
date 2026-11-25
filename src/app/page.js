"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { FadeIn, Stagger, CountUp } from "@/components/Animations";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <MetalsSection />
      <ServicesPreview />
      <WhyUs />
      <CTASection />
    </>
  );
}

function Hero() {
  const refs = [useRef(null), useRef(null)];
  const videos = ["/cargo-ship.mp4", "/metal-stacked.mp4"];

  useEffect(() => {
    const el = refs[0].current;
    if (el) {
      const tryPlay = () => el.play().catch(() => {});
      el.addEventListener("loadeddata", tryPlay, { once: true });
      document.addEventListener("touchstart", tryPlay, { once: true });
    }
  }, []);

  const switchVideo = (next) => {
    const el = refs[next].current;
    const prev = refs[next === 0 ? 1 : 0].current;
    if (el) {
      el.classList.remove("hero-hidden");
      el.classList.add("hero-visible");
      el.currentTime = 0;
      el.play().catch(() => {});
    }
    if (prev) {
      prev.classList.remove("hero-visible");
      prev.classList.add("hero-hidden");
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <video ref={refs[0]} muted playsInline preload="auto" className="hero-video hero-visible"
          src={videos[0]} autoPlay onEnded={() => switchVideo(1)} />
        <video ref={refs[1]} muted playsInline preload="auto" className="hero-video hero-hidden"
          src={videos[1]} onEnded={() => switchVideo(0)} />
        <div className="hero-pattern" />
      </div>
      <div className="container hero-content">
        <span className="hero-badge">Commodity Trading</span>
        <h1>Your Trusted<br /><span className="highlight shimmer-text">Metal Supplier</span></h1>
        <p>
          Based in Kollam, Kerala, SMASH SOLUTIONS supplies a wide
          range of metals — including <strong>aluminium, copper, gold, iron,
          zinc, lead, brass, and more</strong> — to clients
          worldwide at competitive prices.
        </p>
        <div className="hero-buttons">
          <Link href="/services" className="btn btn-primary">
            Explore Services <span className="btn-arrow">→</span>
          </Link>
          <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
        </div>
      </div>
      <style>{`
        .hero {
          position: relative;
          padding: 140px 0 120px;
          text-align: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: var(--primary-dark);
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease;
        }
        .hero-visible { opacity: 0.65; z-index: 1; }
        .hero-hidden { opacity: 0; z-index: 0; }
        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          border-radius: 50px;
          background: rgba(28,153,217,0.12);
          color: #cdf4fd;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 28px;
          border: 1px solid rgba(28,153,217,0.3);
        }
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-white);
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }
        .highlight {
          background: linear-gradient(135deg, #cdf4fd, #87c9e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero p {
          font-size: 1.15rem;
          max-width: 580px;
          margin: 0 auto 40px;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-arrow { transition: transform 0.2s; }
        .btn-primary:hover .btn-arrow { transform: translateX(4px); }
        @media (max-width: 768px) {
          .hero { padding: 100px 0 80px; }
          .hero h1 { font-size: 2.5rem; }
          .hero-badge { font-size: 0.75rem; padding: 6px 14px; margin-bottom: 20px; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .hero-buttons .btn { width: 100%; max-width: 300px; justify-content: center; }
        }
        @media (max-width: 480px) {
          .hero { padding: 80px 0 60px; }
          .hero h1 { font-size: 1.85rem; }
          .hero p { font-size: 0.95rem; }
          .hero-badge { font-size: 0.7rem; }
        }
      `}</style>
    </section>
  );
}

function Stats() {
  const items = [
    { end: 50, suffix: "+", label: "Countries Served" },
    { end: 500, suffix: "+", label: "Clients Worldwide" },
    { end: 98, suffix: "%", label: "On-Time Delivery" },
    { end: 15, suffix: "+", label: "Years Experience" },
  ];
  return (
    <section className="stats-section">
      <FadeIn>
        <div className="container">
          <div className="stats-grid">
            {items.map((item, i) => (
              <div key={item.label} className="stat-card">
                <span className="stat-number">
                  <CountUp end={item.end} suffix={item.suffix} />
                </span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <style>{`
        .stats-section {
          background: var(--bg-white);
          padding: 0;
          position: relative;
          z-index: 2;
          margin-top: -40px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .stat-card {
          background: var(--bg-white);
          text-align: center;
          padding: 40px 24px;
          transition: var(--transition);
        }
        .stat-card:hover {
          background: var(--bg-light);
        }
        .stat-number {
          display: block;
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.92rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .stats-section { margin-top: -24px; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-card { padding: 24px 12px; }
          .stat-number { font-size: 1.75rem; }
          .stat-label { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}


function MetalsSection() {
  const metals = [
    {
      name: "Copper",
      desc: "Pure copper scrap, wire, and ingots for manufacturing and industrial applications.",
      img: "https://images.pexels.com/photos/5279317/pexels-photo-5279317.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    },
    {
      name: "Aluminium",
      desc: "High-grade aluminium scrap and sheets sourced globally for industrial buyers.",
      img: "https://images.pexels.com/photos/5279334/pexels-photo-5279334.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    },
    {
      name: "Gold",
      desc: "Precious gold scrap, jewellery waste, and dore bars for refining and resale.",
      img: "https://images.pexels.com/photos/23511040/pexels-photo-23511040.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    },
    {
      name: "Iron & Steel",
      desc: "Heavy iron scrap, HMS, and steel for construction and heavy industry.",
      img: "https://images.pexels.com/photos/10783800/pexels-photo-10783800.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    },
    {
      name: "Zinc",
      desc: "Zinc scrap, alloys, and die-cast material for galvanising and manufacturing.",
      img: "https://images.pexels.com/photos/36772464/pexels-photo-36772464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    },
    {
      name: "More Metals",
      desc: "Lead, brass, bronze, nickel, tin, and other industrial metals available on request.",
      img: "https://images.pexels.com/photos/6203909/pexels-photo-6203909.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="section metals-section">
      <div className="container">
        <FadeIn>
          <div className="section-heading" style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-tag">What We Trade</span>
            <h2 className="section-title">Metals We Handle</h2>
            <p className="section-subtitle">
              From base metals to precious — we supply a wide range of
              commodities to clients across global markets
            </p>
          </div>
        </FadeIn>
        <Stagger>
          <div className="metals-grid">
            {metals.map((m) => (
              <div key={m.name} className="card metal-card">
                <div className="metal-img-wrap">
                  <img src={m.img} alt={m.name} loading="lazy" className="metal-img" />
                </div>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </Stagger>
      </div>
      <style>{`
        .metals-section {
          background: var(--bg-light);
          padding-top: 48px;
        }
        .metals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .metal-card {
          text-align: center;
          padding: 0 0 28px;
          overflow: hidden;
        }
        .metal-img-wrap {
          width: 100%;
          height: 180px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .metal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .metal-card:hover .metal-img {
          transform: scale(1.08);
        }
        .metal-card h3 {
          color: var(--text-white);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
          padding: 0 20px;
        }
        .metal-card p {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.7;
          padding: 0 20px;
        }
        @media (max-width: 768px) {
          .metals-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .metal-card p { font-size: 0.82rem; }
          .metal-img-wrap { height: 150px; }
        }
        @media (max-width: 480px) {
          .metals-grid { grid-template-columns: 1fr; }
          .metal-img-wrap { height: 180px; }
        }
      `}</style>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      title: "Global Sourcing",
      desc: "We directly supply quality metals sourced from our network of partners — bringing you materials you can trust.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      ),
    },
    {
      title: "Global Logistics",
      desc: "We handle shipping, customs clearance, and documentation so your goods move seamlessly across borders.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      ),
    },
    {
      title: "Price Negotiation",
      desc: "Our market expertise ensures fair, transparent pricing that reflects real market conditions — building trust on both sides.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
    },
    {
      title: "Bulk Supply",
      desc: "We supply industrial metals in bulk quantities — meeting the volume and quality requirements of manufacturers across industries.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
      ),
    },
  ];
  return (
    <section className="section services-preview">
      <FadeIn>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Commodity Trading</h2>
            <p className="section-subtitle">
              We supply quality commodities to clients worldwide with reliable, end-to-end service
            </p>
          </div>
          <Stagger>
            <div className="services-grid">
              {services.map((s) => (
                <div key={s.title} className="card service-card">
                  <div className="service-icon-wrap">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href="/services" className="service-link">
                    Learn more <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </Stagger>
        </div>
      </FadeIn>
      <style>{`
        .section-heading { text-align: center; margin-bottom: 56px; }
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
        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .service-card {
          text-align: left;
          display: flex;
          flex-direction: column;
          padding: 32px;
        }
        .service-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: var(--radius);
          background: linear-gradient(135deg, rgba(28,153,217,0.1) 0%, rgba(28,153,217,0.05) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-hover);
          margin-bottom: 20px;
        }
        .service-card h3 {
          color: var(--text-white);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .service-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 20px;
        }
        .service-link {
          color: var(--primary-light);
          font-weight: 600;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }
        .service-link:hover { gap: 10px; }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .service-card { padding: 24px; }
          .service-card p { font-size: 0.85rem; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section section-dark why-us">
      <FadeIn>
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <span className="section-tag">Why SMASH</span>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: 20 }}>
                Your Trusted<br />Metal Supplier
              </h2>
              <p className="why-desc">
                SMASH SOLUTIONS is a commodity supply company. We source and supply
                quality metals — handling all logistics and paperwork so you get
                what you need, when you need it. With 15+ years of market knowledge,
                we deliver reliably to clients across the globe.
              </p>
              <div className="why-features">
                <div className="why-feature">
                  <div className="wf-icon">✓</div>
                  <div>
                    <strong>Global Supply Network</strong>
                    <p>Strong supply channels for metals sourced across multiple countries</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="wf-icon">✓</div>
                  <div>
                    <strong>Best Price Margins</strong>
                    <p>We secure fair market pricing through our global supplier network</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="wf-icon">✓</div>
                  <div>
                    <strong>Hassle-Free Logistics</strong>
                    <p>We handle shipping, customs, and paperwork end to end</p>
                  </div>
                </div>
              </div>
              <div className="why-meta">
                <div className="why-meta-item">
                  <strong>Managing Director:</strong> Albin Antony B
                </div>
                <div className="why-meta-item">
                  <strong>Branches:</strong> 🇮🇳 Kerala, India (HQ) &nbsp;|&nbsp; 🇹🇿 Tanzania &nbsp;|&nbsp; 🇦🇪 Dubai
                </div>
              </div>
            </div>
            <Stagger>
              <div className="why-stats">
                <div className="ws-card">
                  <span className="ws-number">500+</span>
                  <span className="ws-label">Happy Clients</span>
                </div>
                <div className="ws-card">
                  <span className="ws-number">50+</span>
                  <span className="ws-label">Countries</span>
                </div>
                <div className="ws-card">
                  <span className="ws-number">98%</span>
                  <span className="ws-label">On-Time Rate</span>
                </div>
              </div>
            </Stagger>
          </div>
        </div>
      </FadeIn>
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .why-desc {
          color: var(--text-secondary);
          font-size: 1.02rem;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .why-features { display: flex; flex-direction: column; gap: 20px; }
        .why-feature {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .wf-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent);
          color: var(--primary-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .why-feature strong {
          color: var(--text-white);
          font-size: 0.95rem;
          display: block;
          margin-bottom: 2px;
        }
        .why-feature p {
          color: var(--text-secondary);
          font-size: 0.88rem;
        }
        .why-stats { display: flex; flex-direction: column; gap: 20px; }
        .why-meta {
          margin-top: 28px;
          padding: 20px;
          background: var(--bg-white);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .why-meta-item {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .why-meta-item strong { color: var(--text-white); }
        .why-meta-item:first-child { margin-bottom: 8px; }
        .ws-card {
          background: var(--bg-white);
          border-radius: var(--radius);
          padding: 32px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          text-align: center;
        }
        .ws-card:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
        }
        .ws-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .ws-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr; gap: 40px; }
          .why-desc { font-size: 0.95rem; }
          .why-meta { padding: 16px; }
          .why-meta-item { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="container cta-content">
        <h2>Ready to trade commodities?</h2>
        <p>Contact us today for a quote. We&apos;ll respond within 24 hours.</p>
        <Link href="/contact" className="btn btn-primary">
          Get Started <span className="btn-arrow">→</span>
        </Link>
      </div>
      <style>{`
        .cta-section {
          position: relative;
          padding: 80px 0;
          text-align: center;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-light) 100%);
        }
        .cta-content {
          position: relative;
          z-index: 1;
        }
        .cta-content h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 12px;
        }
        .cta-content p {
          color: rgba(255,255,255,0.75);
          margin-bottom: 32px;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .cta-section { padding: 60px 0; }
          .cta-content h2 { font-size: 1.5rem; }
          .cta-content p { font-size: 0.95rem; }
        }
        @media (max-width: 480px) {
          .cta-content h2 { font-size: 1.3rem; }
        }
      `}</style>
    </section>
  );
}
