"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 z-50 w-full max-w-[calc(100%-2rem)] mx-auto rounded-xl border border-signal/40 bg-signal/20 backdrop-blur-sm">
      <nav className="flex h-11 items-center justify-between px-4 md:px-8 lg:pl-8 lg:pr-8">
        <a href="#" className="flex items-center gap-2">
          {/* Punto de "power" — funcional, never decorativo */}
          <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink">
            Cerrato
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mono text-[10px] uppercase tracking-wide text-gray-mid transition-colors duration-100 hover:text-ink"
              >
                <span className="mr-1 text-gray-light">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-ink md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="mono text-[11px] uppercase tracking-wide">
            {mobileOpen ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-signal/30 bg-signal/15 rounded-b-xl md:hidden">
          <ul className="flex flex-col px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mono block border-b border-ink/10 py-2.5 text-[10px] uppercase tracking-wide text-gray-mid transition-colors hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
