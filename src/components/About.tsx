"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AboutModal from "./AboutModal";

const specs = [
  { key: "Role", value: "Ingeniero de Diseño Industrial · I+D" },
  { key: "Certification", value: "CSWP — SolidWorks Professional" },
  { key: "Education", value: "Ing. Diseño Industrial · Máster Inyección (UPV)" },
  { key: "Focus", value: "Mecánica · Producto · SF6-Free · IA" },
];

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="section-padding bg-paper">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="spec-label">
            <span className="spec-index">01</span>
            Profile
          </div>
          <h2 className="section-title">
            About.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-[15px] leading-relaxed text-ink/80 lg:col-span-3"
          >
            Doble vocación: la ingeniería mecánica que da forma a productos
            físicos y el software que automatiza el mundo digital. Trabajo en{" "}
            <span className="font-medium text-ink">I+D y diseño mecánico</span>{" "}
            con SolidWorks, AutoCAD, simulación y prototipado, con experiencia
            en celdas de media tensión y soluciones SF6-Free. En paralelo,
            construyo{" "}
            <span className="font-medium text-ink">herramientas de IA,
            automatización y software open source</span> con Python, FastAPI y
            agentes locales sobre Linux. Del taller a la terminal, con
            mentalidad internacional y remota.
          </motion.p>

          {/* Botón Más sobre mí */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="lg:col-span-2 flex items-center"
          >
            <button
              onClick={() => setShowModal(true)}
              className="mono border border-ink/40 px-6 py-4 text-[11px] uppercase tracking-wide text-ink transition-colors duration-100 hover:border-signal hover:bg-signal hover:text-paper"
            >
              Más sobre mí
            </button>
          </motion.div>

          {/* Spec table — first-class */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.2em] text-gray-mid">
              Specifications
            </div>
            <div className="border-t border-ink/20">
              {specs.map((s) => (
                <div
                  key={s.key}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-ink/10 py-3"
                >
                  <span className="mono text-[10px] uppercase tracking-wide text-gray-light">
                    {s.key}
                  </span>
                  <span className="mono text-[11px] text-ink">{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AboutModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
