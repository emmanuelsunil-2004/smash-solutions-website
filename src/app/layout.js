import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

export const metadata = {
  title: "SMASH SOLUTIONS – Commodity Trading",
  description:
    "Based in Kollam, Kerala, SMASH SOLUTIONS is a trusted commodity supply company, delivering quality metals to clients worldwide at competitive prices.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="nav-right">
            <NavLinks />
          </div>
        </div>
      </nav>
      <style>{`
        .navbar {
          background: var(--bg-nav);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .nav-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 56px;
        }
        .nav-toggle { display: none; }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          z-index: 101;
        }
        .nav-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .nav-toggle:checked ~ .nav-hamburger span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .nav-toggle:checked ~ .nav-hamburger span:nth-child(2) { opacity: 0; }
        .nav-toggle:checked ~ .nav-hamburger span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 28px;
        }
        .nav-links a {
          font-weight: 500;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.85);
          transition: color 0.2s;
          position: relative;
          padding: 4px 0;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s;
        }
        .nav-links a:hover {
          color: #ffffff;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-cta {
          padding: 10px 24px;
          font-size: 0.85rem;
        }
        @media (max-width: 768px) {
          .nav-container { justify-content: space-between; }
          .nav-hamburger { display: flex; }
          .nav-right {
            position: fixed;
            top: 0;
            right: -100%;
            width: 75%;
            max-width: 320px;
            height: 100vh;
            background: var(--bg-nav-overlay);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            flex-direction: column;
            justify-content: center;
            gap: 0;
            padding: 80px 40px 40px;
            transition: right 0.35s ease;
            z-index: 100;
          }
          .nav-toggle:checked ~ .nav-right {
            right: 0;
          }
          .nav-links {
            flex-direction: column;
            gap: 0;
            width: 100%;
          }
          .nav-links li { border-bottom: 1px solid rgba(255,255,255,0.08); }
          .nav-links a {
            display: block;
            padding: 16px 0;
            font-size: 1.1rem;
          }
          .nav-links a::after { display: none; }
          .nav-cta {
            display: flex;
            margin-top: 32px;
            width: 100%;
            justify-content: center;
            padding: 14px;
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          .nav-right { width: 100%; max-width: 100%; }
        }
      `}</style>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo.jpeg" alt="SMASH SOLUTIONS" width={320} height={102} className="footer-logo" />
            <p>
              Your trusted partner in commodity supply. Based in Kollam, Kerala,
              we deliver quality metals to clients
              worldwide at competitive prices.
            </p>
            <div className="footer-cert">
              <span><strong>IEC:</strong> BMKPK3827Q</span>
              <span><strong>GST:</strong> 32BMKPK3827Q1ZK</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/quote">Get a Quote</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Commodity Sourcing</li>
              <li>Global Logistics</li>
              <li>Bulk Supply</li>
              <li>Customs & Compliance</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Branches</h4>
            <ul className="footer-contact">
              <li>
                <span className="fc-icon">🇮🇳</span>
                <span>Kerala, India (HQ)</span>
              </li>
              <li>
                <span className="fc-icon">🇹🇿</span>
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li>
                <span className="fc-icon">🇦🇪</span>
                <span>Dubai, UAE</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="fc-icon">📍</span>
                <span>Ground Floor, 3/1639, Kayalthope,<br />Kavanad PO, Kollam, Kerala</span>
              </li>
              <li>
                <span className="fc-icon">📧</span>
                <a href="mailto:smashkollam@gmail.com">smashkollam@gmail.com</a>
              </li>
              <li>
                <span className="fc-icon">📞</span>
                <a href="tel:+917736864777">+91 7736864777</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>&copy; {new Date().getFullYear()} SMASH SOLUTIONS. All rights reserved.</span>
          <span>Commodity Trading Specialists</span>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--bg-white);
          color: var(--text);
          padding: 72px 0 0;
          border-top: 1px solid var(--border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1.2fr;
          gap: 48px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer { padding: 48px 0 0; }
          .footer-col h4 { margin-bottom: 14px; font-size: 0.9rem; }
          .footer-col li { font-size: 0.82rem; }
          .footer-brand p { font-size: 0.82rem; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom .container { flex-direction: column; gap: 4px; text-align: center; }
          .footer-bottom { margin-top: 36px; }
        }
        .footer-logo {
          object-fit: contain;
          height: auto;
          width: 100%;
          max-width: 320px;
          margin-bottom: 16px;
        }
        .footer-brand p {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .footer-cert {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.82rem;
          color: var(--text-light);
        }
        .footer-cert strong { color: var(--text-white); }
        .footer-col h4 {
          color: var(--text-white);
          margin-bottom: 20px;
          font-size: 1rem;
          font-weight: 600;
        }
        .footer-col ul {
          list-style: none;
        }
        .footer-col li {
          margin-bottom: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .footer-col a {
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .footer-col a:hover {
          color: var(--text-white);
        }
        .footer-contact li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .fc-icon {
          flex-shrink: 0;
          font-size: 0.9rem;
        }
        .footer-bottom {
          margin-top: 56px;
          border-top: 1px solid var(--border);
          padding: 20px 0;
        }
        .footer-bottom .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: var(--text-light);
        }
      `}</style>
    </footer>
  );
}
