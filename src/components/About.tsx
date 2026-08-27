"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Soy un libro abierto</span>
          <h2 className="section-title">
            Sobre
            <br />
            Mí.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-gray-600"
          >
            Soy un <strong className="font-semibold text-gray-900">Ingeniero de
            Diseño Industrial</strong> con doble vocación: la ingeniería
            mecánica que da forma a productos físicos y el software que
            automatiza el mundo digital. Trabajo en{" "}
            <strong className="font-semibold text-gray-900">I+D y diseño
            mecánico</strong> con SolidWorks, AutoCAD, simulación y prototipado,
            con experiencia en celdas de media tensión y soluciones SF6-Free.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed text-gray-600"
          >
            En paralelo construyo{" "}
            <strong className="font-semibold text-gray-900">herramientas de IA,
            automatización y software open source</strong> con Python, FastAPI y
            agentes locales sobre un ecosistema Linux. Esta combinación — del
            taller a la terminal — me permite resolver problemas de forma
            integral, con mentalidad internacional y remota, y creo en el
            conocimiento open source como catalizador de innovación.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-gray-200 pt-8 text-sm text-gray-500">
          <span><strong className="font-semibold text-gray-900">CSWP</strong> · Certified SolidWorks Professional</span>
          <span><strong className="font-semibold text-gray-900">Máster</strong> · Inyección de Plásticos (UPV)</span>
          <span><strong className="font-semibold text-gray-900">Ingeniería</strong> · Diseño Industrial</span>
        </div>
      </div>
    </section>
  );
}
