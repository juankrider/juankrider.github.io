"use client";

import { motion } from "framer-motion";

const skills = [
  {
    num: "01",
    title: "Ingeniería",
    items: [
      "SolidWorks",
      "AutoCAD",
      "Diseño Mecánico",
      "Simulación",
      "Prototipado",
      "Fabricación",
    ],
  },
  {
    num: "02",
    title: "Software",
    items: ["Python", "FastAPI", "APIs", "Git", "Linux", "Docker"],
  },
  {
    num: "03",
    title: "IA & Automatización",
    items: [
      "Ollama",
      "LLMs",
      "Agentes IA",
      "Automatización",
      "MCP",
      "Open Source AI",
    ],
  },
  {
    num: "04",
    title: "Diseño",
    items: ["Blender", "Photoshop", "UX Thinking", "Product Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">El conocimiento lo es todo</span>
          <h2 className="section-title">
            Mis
            <br />
            Skills.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="mb-3 text-sm font-medium text-gray-400">
                {skill.num}.
              </div>
              <h3 className="serif text-2xl font-medium text-gray-900">
                {skill.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600"
                  >
                    {item}
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
