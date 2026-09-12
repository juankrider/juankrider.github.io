"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print mono border border-ink/40 px-4 py-2 text-[10px] uppercase tracking-wide text-ink transition-colors duration-100 hover:border-signal hover:bg-signal hover:text-paper"
    >
      Imprimir / PDF
    </button>
  );
}