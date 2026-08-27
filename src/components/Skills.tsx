"use client";

import { motion } from "framer-motion";

const skills = [
  {
    num: "01",
    title: "Engineering",
    items: ["SolidWorks", "AutoCAD", "Diseño Mecánico", "Simulación", "Prototipado", "Fabricación"],
  },
  {
    num: "02",
    title: "Software",
    items: ["Python", "FastAPI", "APIs", "Git", "Linux", "Docker"],
  },
  {
    num: "03",
    title: "AI / Automation",
    items: ["Ollama", "LLMs", "Agentes IA", "Automatización", "MCP", "Open Source AI"],
  },
  {
    num: "04",
    title: "Design",
    items: ["Blender", "Photoshop", "UX Thinking", "Product Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-paper">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="spec-label">
            <span className="spec-index">03</span>
            Skills
          </div>
          <h2 className="section-title">Capabilities.</h2>
        </motion.div>

        <div className="mt-12 border-t border-ink/20">
          {skills.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="grid gap-4 border-b border-ink/10 py-6 sm:grid-cols-[3rem_1fr]"
            >
              <span className="mono text-[10px] text-gray-light">{s.num}</span>
              <div>
                <h3 className="text-lg font-medium text-ink">{s.title}</h3>
                <div className="mono mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {s.items.map((it) => (
                    <span key={it} className="text-[12px] text-gray-mid">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
