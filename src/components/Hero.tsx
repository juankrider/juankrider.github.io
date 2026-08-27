"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-zinc-50 px-6 pt-16 md:px-12 lg:px-24">
      {/* Background glow sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-xs font-medium text-zinc-600"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Disponible para nuevas oportunidades
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-balance max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-6xl lg:text-7xl"
        >
          Juan Carlos
          <br />
          <span className="gradient-text">Cerrato</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg font-medium text-zinc-600 md:text-xl"
        >
          Industrial Design Engineer · AI Builder · Product Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 max-w-2xl text-sm text-zinc-500 md:text-base"
        >
          Diseño productos físicos e intangibles que importan. De la célula de
          media tensión al agente de IA: ingeniería rigurosa, automatización
          inteligente y software open source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#contact" className="btn-primary">
            <Mail size={16} />
            Contactar
          </a>
          <a href="/cv-juan-carlos-cerrato.pdf" className="btn-outline" download>
            <Download size={16} />
            Descargar CV
          </a>
          <a href="#projects" className="btn-outline">
            Ver proyectos
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex flex-wrap gap-8 text-center"
        >
          {[
            { value: "8+", label: "Años de experiencia" },
            { value: "50+", label: "Proyectos I+D" },
            { value: "CSWP", label: "Certificación SolidWorks" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-zinc-900 md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
