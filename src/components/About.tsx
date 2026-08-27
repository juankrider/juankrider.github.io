"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Sobre mí
          </div>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Ingeniería que abraza el futuro digital
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-sm leading-relaxed text-gray-400 md:text-base"
          >
            <p>
              Soy un <span className="text-white">Ingeniero de Diseño
              Industrial</span> con una doble vocación: la ingeniería mecánica
              que da forma a productos físicos y la construcción de software e
              inteligencia artificial que automatiza y optimiza el mundo
              digital.
            </p>
            <p>
              En el ámbito industrial, trabajo en{" "}
              <span className="text-white">I+D y diseño mecánico</span>:
              desarrollo de producto, CAD avanzado con SolidWorks y AutoCAD,
              simulación, prototipado y validación, con experiencia específica
              en celdas de media tensión y soluciones <span className="text-white">SF6-Free</span>.
            </p>
            <p>
              En paralelo, construyo{" "}
              <span className="text-white">herramientas de IA, automatización
              y software open source</span>. Me apoyan Python, FastAPI, agentes
              y modelos locales, y un ecosistema Linux que administro de punta
              a punta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-sm leading-relaxed text-gray-400 md:text-base"
          >
            <p>
              Esta combinación inusual —<span className="text-white">del
              taller a la terminal</span>— me permite abordar problemas desde
              una perspectiva integral: entender la física real del producto y
              a la vez diseñar la lógica que lo hace operar de forma
              inteligente.
            </p>
            <p>
              Creo en el software y el conocimiento <span className="text-white">open
              source</span> como catalizadores de innovación, y en la
              automatización como el medio para liberar tiempo creativo y
              elevar la calidad de cada decisión de ingeniería.
            </p>
            <p>
              Trabajo con mentalidad internacional y remota, orientado a
              resultados, documentación limpia y soluciones mantenibles que
              resuelven problemas reales desde el primer día.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
