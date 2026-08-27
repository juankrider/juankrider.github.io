"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Atlas",
    description:
      "Asistente personal de IA modular. Un copiloto que integra modelos locales, agentes y conocimiento personal para gestionar tareas y flujos de trabajo.",
    stack: ["Python", "Ollama", "OpenClaw", "Obsidian"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "PDF AI Assistant",
    description:
      "Extracción, análisis y comprensión de documentación técnica con IA. Reduce horas de lectura manual a respuestas precisas y accionables.",
    stack: ["Python", "FastAPI"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "StreetBall",
    description:
      "Plataforma web para la organización de eventos y competiciones deportivas de baloncesto callejero.",
    stack: ["HTML", "CSS", "JS"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "AI Automation Lab",
    description:
      "Laboratorio de automatizaciones personales: flujos que conectan APIs y herramientas mediante agentes inteligentes para eliminar trabajo repetitivo.",
    stack: ["Python", "MCP", "APIs"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Proyectos
          </div>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Trabajo en acción
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
            Proyectos que cruzan el diseño industrial, el software y la
            inteligencia artificial.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card relative overflow-hidden"
            >
              <div
                className={`mb-6 flex h-24 w-full items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
              >
                <ArrowUpRight
                  size={32}
                  className="text-white/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
