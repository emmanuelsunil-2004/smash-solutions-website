"use client";
import Link from "next/link";

export default function NavLinks() {
  const close = () => {
    document.getElementById("nav-toggle").checked = false;
  };

  return (
    <>
      <ul className="nav-links">
        <li><Link href="/" onClick={close}>Home</Link></li>
        <li><Link href="/about" onClick={close}>About</Link></li>
        <li><Link href="/services" onClick={close}>Services</Link></li>
        <li><Link href="/faq" onClick={close}>FAQ</Link></li>
        <li><Link href="/contact" onClick={close}>Contact</Link></li>
      </ul>
      <Link href="/quote" className="btn btn-primary nav-cta" onClick={close}>Get a Quote</Link>
    </>
  );
}
