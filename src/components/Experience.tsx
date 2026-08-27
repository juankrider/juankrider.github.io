"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "IBERAPA",
    role: "Ingeniero I+D Mecánico",
    period: "Actualidad",
    responsibilities: [
      "Diseño 3D y 2D de producto industrial de media tensión",
      "Desarrollo de celdas MT y soluciones electrónicas SF6-Free",
      "Simulación y validación de producto mediante análisis CAD/CAE",
      "Prototipado, ensayo y puesta en producción de nuevos diseños",
      "Gestión técnica de proyectos de I+D e innovación",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Experiencia
          </div>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Trayectoria profesional
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <div className="relative border-l border-white/10 pl-8 md:pl-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pb-12 last:pb-0">
                <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-accent bg-dark-950 md:-left-[49px]">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="glass-card">
                  <div className="mb-1 flex items-center gap-2 text-accent">
                    <Building2 size={18} />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{exp.period}</p>

                  <ul className="mt-5 space-y-3">
                    {exp.responsibilities.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
