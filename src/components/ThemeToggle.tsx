"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className={`relative h-6 w-10 shrink-0 rounded-full border border-ink/20 transition-colors duration-200 ${
        dark ? "bg-signal" : "bg-gray-light"
      }`}
    >
      <span
        className={`absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-paper shadow transition-transform duration-200 ${
          dark ? "translate-x-4" : ""
        }`}
      />
    </button>
  );
}