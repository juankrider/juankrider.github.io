"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const bandY = () => window.innerHeight * 0.45;
    const compute = () => {
      const home = document.getElementById("home");
      if (home && home.getBoundingClientRect().bottom > bandY()) {
        setActiveId("");
        return;
      }
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= bandY()) current = id;
      }
      setActiveId(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id === "home" ? "" : e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...sectionIds].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <header className="no-print fixed inset-x-0 top-0 md:top-2 z-50 overflow-hidden rounded-xl border border-ink/20 bg-ink/5 backdrop-blur-sm">
      <nav className="mx-auto flex h-11 max-w-[1200px] items-center justify-between px-8">
        <a href="#" className="flex items-center gap-2">
          {/* Punto de "power" — funcional, never decorativo */}
          <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink">
            Cerrato
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => {
            const active = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mono text-[10px] uppercase tracking-wide transition-colors duration-100 ${
                    active ? "text-ink" : "text-gray-mid hover:text-ink"
                  }`}
                >
                  <span className={`mr-1 ${active ? "text-signal" : "text-gray-light"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <button
            className="text-ink md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className="mono text-[11px] uppercase tracking-wide">
              {mobileOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink/20 bg-ink/5 md:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mono block border-b border-ink/10 py-2.5 text-[10px] uppercase tracking-wide transition-colors duration-100 hover:text-ink ${
                    activeId === link.href.slice(1) ? "text-signal" : "text-gray-mid"
                  }`}
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
