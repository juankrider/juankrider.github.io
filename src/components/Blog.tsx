"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Del taller a la terminal: ingeniería que abraza la IA",
    date: "2024",
    tag: "Engineering",
    excerpt:
      "Cómo el diseño mecánico industrial y el software open source convergen en un mismo flujo de trabajo.",
  },
  {
    title: "SF6-Free y diseño sostenible en media tensión",
    date: "2023",
    tag: "R&D",
    excerpt:
      "El reto de sustituir el SF6: desarrollo de soluciones libres de gases fluorados.",
  },
  {
    title: "Automatizando mi día con agentes locales",
    date: "2023",
    tag: "AI",
    excerpt:
      "Un asistente personal con Ollama, MCP y modelos que corren 100% en local.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-ground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="spec-label">
            <span className="spec-index">04</span>
            Journal
          </div>
          <h2 className="section-title">Blog.</h2>
        </motion.div>

        <div className="mt-12 border-t border-ink/20">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group border-b border-ink/10 py-8"
            >
              <div className="mono mb-3 flex items-center gap-6 text-[10px] uppercase tracking-wide text-gray-mid">
                <span className="text-gray-light">{p.date}</span>
                <span>{p.tag}</span>
              </div>
              <h3 className="text-xl font-medium leading-snug text-ink md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
                {p.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
