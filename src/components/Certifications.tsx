"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "CSWP",
    subtitle: "Certified SolidWorks Professional",
    type: "certification",
  },
  {
    title: "Ingeniería en Diseño Industrial",
    subtitle: "Formación universitaria",
    type: "degree",
  },
  {
    title: "Máster en Inyección de Plásticos",
    subtitle: "Universitat Politècnica de València (UPV)",
    type: "degree",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-zinc-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Certificaciones
          </div>
          <h2 className="text-balance text-3xl font-bold text-zinc-900 md:text-4xl">
            Formación y acreditaciones
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* CSWP destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 to-transparent p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/30">
              <Award size={28} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">CSWP</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Certified SolidWorks Professional
            </p>
            <span className="mt-4 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
              Certificación de referencia
            </span>
          </motion.div>

          {certifications.slice(1).map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="drawer-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-accent">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">{cert.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
