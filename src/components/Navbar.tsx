"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="container-custom mx-auto flex h-16 items-center justify-between px-6 md:px-12 lg:px-24">
        <a
          href="#"
          className="serif text-xl font-medium tracking-tight text-gray-900"
        >
          Juan Carlos <span className="italic text-gray-400">Cerrato</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-wide text-gray-500 uppercase transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-gray-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-xs tracking-wide text-gray-600 uppercase transition-colors hover:text-gray-900"
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
