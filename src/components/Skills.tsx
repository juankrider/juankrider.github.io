"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Code2,
  BrainCircuit,
  Palette,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    icon: Cog,
    title: "Ingeniería",
    skills: [
      "SolidWorks",
      "AutoCAD",
      "Diseño Mecánico",
      "Simulación",
      "Prototipado",
      "Fabricación",
    ],
  },
  {
    icon: Code2,
    title: "Software",
    skills: ["Python", "FastAPI", "APIs", "Git", "Linux"],
  },
  {
    icon: BrainCircuit,
    title: "IA",
    skills: [
      "Ollama",
      "LLMs",
      "Agentes IA",
      "Automatización",
      "MCP",
      "Open Source AI",
    ],
  },
  {
    icon: Palette,
    title: "Diseño",
    skills: ["Blender", "Photoshop", "UX Thinking", "Product Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Skills
          </div>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Un espectro técnico completo
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
            Del modelado mecánico al desarrollo de agentes de IA: competencias
            que cruzan la frontera entre el producto físico y el software
            inteligente.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
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
