"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ground pt-16">
      {/* Rejilla técnica de fondo */}
      <div className="hero-grid-fine pointer-events-none absolute inset-0" />
      <div className="container-custom relative grid w-full items-center gap-12 px-6 py-16 md:px-12 lg:px-24 lg:grid-cols-2">
        {/* Copy en ficha técnica */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mono flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-gray-mid">
            <span className="inline-block h-2 w-2 rounded-full bg-signal" />
            Model JCC-01 · Portfolio
          </div>

          <h1 className="mt-8 text-5xl font-medium leading-[0.95] tracking-tight text-ink md:text-6xl">
            Juan Carlos
            <br />
            Cerrato
          </h1>

          <div className="mono mt-8 space-y-2 text-[13px] uppercase tracking-wide text-gray-mid">
            <p>Industrial Design Engineer</p>
            <p>I+D · Product Development</p>
            <p>AI / Automation</p>
          </div>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/80">
            De la célula de media tensión al agente de IA. Diseño de producto
            físico, ingeniería mecánica y software open source con precisión de
            instrumento.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#works"
              className="mono bg-ink px-5 py-3 text-[11px] uppercase tracking-wide text-paper transition-colors duration-100 hover:bg-gray-mid"
            >
              Ver trabajos
            </a>
            <a
              href="#contact"
              className="mono border border-ink/40 px-5 py-3 text-[11px] uppercase tracking-wide text-ink transition-colors duration-100 hover:border-ink hover:bg-ink hover:text-paper"
            >
              Contacto
            </a>
          </div>
        </motion.div>

        {/* "Exploded view" — despiece de pieza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative hidden select-none flex-col gap-6 lg:flex"
        >
          <div className="mono mb-2 text-[11px] uppercase tracking-[0.2em] text-gray-mid">
            Exploded view · JCC-01
          </div>

          {/* Bloques apilados tipo despiece */}
          {[
            { w: "w-64", h: "h-16", label: "01 · Core" },
            { w: "w-72", h: "h-12", label: "02 · Mechanics" },
            { w: "w-56", h: "h-16", label: "03 · Electronics" },
            { w: "w-80", h: "h-12", label: "04 · Software / AI" },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              className="relative"
            >
              <div className={`${b.w} ${b.h} border border-ink/40 bg-paper flex items-center justify-between px-4`}>
                <span className="mono text-[10px] uppercase tracking-wide text-gray-mid">
                  {b.label}
                </span>
                <span className="mono text-[10px] text-gray-light">
                  {i === 3 ? <span className="inline-block h-2 w-2 rounded-full bg-signal" /> : `${64 - i * 8}mm`}
                </span>
              </div>
              {/* Callout línea guía */}
              {i < 3 && (
                <span className="mono absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] uppercase tracking-wide text-gray-light">
                  {`⌀ ${40 - i * 6}`}
                </span>
              )}
            </motion.div>
          ))}

          {/* Línea de referencia inferior */}
          <div className="mt-4 h-px w-80 bg-ink/20" />
        </motion.div>
      </div>
    </section>
  );
}
