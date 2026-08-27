"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python",
  "FastAPI",
  "PySide6",
  "Ollama",
  "OpenClaw",
  "OpenCode",
  "OmniRoute",
  "MCP",
  "Docker",
  "Linux",
  "Arch Linux",
  "Hyprland",
  "Obsidian",
  "SolidWorks",
  "AutoCAD",
  "Blender",
  "Photoshop",
];

export default function TechStack() {
  return (
    <section id="stack" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Stack Tecnológico
          </div>
          <h2 className="text-balance text-3xl font-bold text-zinc-900 md:text-4xl">
            Herramientas con las que trabajo
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
