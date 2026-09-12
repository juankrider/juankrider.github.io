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
      aria-label={dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      aria-pressed={dark}
      className="mono flex items-center gap-2 text-[10px] uppercase tracking-wide text-gray-mid transition-colors duration-100 hover:text-ink"
    >
      <span
        className={`inline-block h-2 w-2 rounded-full transition-colors duration-100 ${
          dark ? "bg-signal" : "bg-gray-light"
        }`}
      />
      {dark ? "Luz" : "Noche"}
    </button>
  );
}