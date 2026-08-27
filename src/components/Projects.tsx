"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Atlas",
    category: "IA · Automatización",
    desc: "Asistente personal de IA modular con modelos locales.",
    gradient: "from-gray-900 to-gray-600",
  },
  {
    title: "PDF AI Assistant",
    category: "IA · Documentación",
    desc: "Extracción y análisis de documentación técnica con IA.",
    gradient: "from-slate-700 to-slate-500",
  },
  {
    title: "StreetBall",
    category: "Producto Web",
    desc: "Plataforma web para organización deportiva.",
    gradient: "from-neutral-800 to-neutral-600",
  },
  {
    title: "AI Automation Lab",
    category: "IA · Tooling",
    desc: "Automatizaciones personales con APIs, MCP y agentes.",
    gradient: "from-zinc-800 to-zinc-600",
  },
];

export default function Projects() {
  return (
    <section id="works" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Echa un vistazo</span>
          <h2 className="section-title">
            Mis
            <br />
            Trabajos.
          </h2>
          <p className="mt-6 max-w-xl text-base text-gray-500">
            Proyectos que cruzan el diseño industrial, el software y la
            inteligencia artificial.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group block"
            >
              <div
                className={`mb-4 flex aspect-[4/3] w-full items-end justify-between rounded-md bg-gradient-to-br ${project.gradient} p-5 transition-transform duration-300 group-hover:-translate-y-1`}
              >
                <span className="text-xs font-medium tracking-wide text-white/80 uppercase">
                  {project.category}
                </span>
                <span className="serif text-2xl text-white/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="serif text-2xl font-medium text-gray-900 transition-colors group-hover:text-gray-600">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{project.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
