"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        className={`stt-btn ${visible ? "stt-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
      <style>{`
        .stt-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(16px);
          pointer-events: none;
          transition: opacity 0.3s, transform 0.3s, background 0.2s;
          z-index: 999;
          box-shadow: 0 4px 16px rgba(28,153,217,0.35);
        }
        .stt-btn:hover {
          background: var(--accent-hover);
        }
        .stt-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        @media (max-width: 768px) {
          .stt-btn {
            bottom: 20px;
            right: 20px;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  );
}
