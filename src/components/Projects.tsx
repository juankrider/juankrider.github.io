"use client";

import { motion } from "framer-motion";
import Calculator from "./Calculator";

const projects = [
  {
    title: "Atlas",
    cat: "IA / Automation",
    desc: "Asistente personal de IA modular con modelos locales.",
    spec: "Py · Ollama · OpenClaw",
  },
  {
    title: "PDF AI Assistant",
    cat: "IA / Docs",
    desc: "Extracción y análisis de documentación técnica.",
    spec: "Py · FastAPI",
  },
  {
    title: "StreetBall",
    cat: "Web / Product",
    desc: "Plataforma web para organización deportiva.",
    spec: "HTML · CSS · JS",
  },
  {
    title: "AI Automation Lab",
    cat: "IA / Tooling",
    desc: "Automatizaciones personales con APIs, MCP, agentes.",
    spec: "Py · MCP · APIs",
  },
];

export default function Projects() {
  return (
    <section id="works" className="section-padding bg-ground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="spec-label">
            <span className="spec-index">02</span>
            Works
          </div>
          <h2 className="section-title">Projects.</h2>
        </motion.div>

        {/* Dos cajones: proyectos a la izquierda, calculadora a la derecha */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto]">
          {/* Cajón izquierda — proyectos */}
          <div className="grid content-start gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group block border border-ink/25 bg-paper p-6 transition-colors duration-100 hover:border-ink"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="mono text-[10px] uppercase tracking-wide text-gray-mid">
                    {p.cat}
                  </span>
                  <span className="mono text-[10px] text-gray-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mono flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-light transition-colors duration-100 group-hover:bg-signal" />
                  <span className="mono text-[10px] uppercase tracking-wide text-gray-light">
                    {p.spec}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-medium leading-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {p.desc}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Cajón derecha — calculadora centrada */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex items-start justify-center lg:w-[340px]"
          >
            <Calculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
