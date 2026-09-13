"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Calculator from "./Calculator";
import ProjectModal, { type Project } from "./ProjectModal";

const projects: Project[] = [
  {
    title: "Atlas",
    cat: "IA / Automation",
    desc: "Asistente personal de IA modular con modelos locales y arquitectura de agentes.",
    spec: "Py · Ollama · OpenClaw",
    code: "JCC-02",
    mark: "ATL",
    tagline: "De la célula de media tensión al agente personal: un sistema que se mueve contigo, no al revés.",
    bio: "Atlas no es un chatbot de chat: es la capa de operaciones desde la que gestiono el día a día. Arquitectura de agentes modular, modelos locales y memoria persistente de decisiones, proyectos y contexto. Todo corre en la máquina —sin cuentas de la nube, sin fugas de datos, sin coste por pregunta.",
    features: [
      "Arquitectura de agentes modular: core + skills reemplazables",
      "Modelos locales (Ollama) — privacidad primero, coste por petición cero",
      "Memoria persistente de contexto: proyectos, decisiones, aprendizajes",
      "Automatizaciones y herramientas vía MCP",
    ],
    state: "Desarrollo · iteración continua",
  },
  {
    title: "Atlas Body Tracker",
    cat: "IA / Product",
    desc: "Seguimiento físico diario: peso y fotos vía Telegram con dashboard web y tendencias.",
    spec: "Py · Telegram API · Docker",
    code: "JCC-03",
    mark: "ABT",
    tagline: "El registro físico más honesto: un chat, cero fricción.",
    bio: "Te pesas, mandas un mensaje al bot y punto. Atlas Body Tracker coge ese dato, lo estructura y lo convierte en una tendencia que puedes ver. Sin apps que roban la atención ni tablas que nadie rellena —telemetría personal con disciplina de producto: tests, contenedores y versionado.",
    features: [
      "Bot de Telegram como única interfaz de entrada",
      "Dashboard web con tendencia y visión histórica",
      "32 tests y stack completo orquestado con Docker",
      "Reproducible en local, listo para un año de datos",
    ],
    state: "En producción · contenedores al día",
  },
  {
    title: "PDF AI Assistant",
    cat: "IA / Docs",
    desc: "Extracción y análisis de documentación técnica con respuestas verificables.",
    spec: "Py · FastAPI",
    code: "JCC-04",
    mark: "PDF",
    tagline: "La documentación técnica por fin se explica sola.",
    bio: "Normas, pliegos, manuales de cientos de páginas. PDF AI Assistant los extrae, los estructura y responde con citas verificables —cada afirmación es un enlace al párrafo original, pensado para ingeniería donde alucinar no es opción. Es el motor documental que alimenta al resto de mis proyectos de IA.",
    features: [
      "Extracción y análisis de documentos técnicos",
      "Respuestas con citas ancladas al documento fuente",
      "Motor RAG reutilizable por otros proyectos de IA",
      "API FastAPI limpia, tipada y testeable",
    ],
    state: "MVP · pendiente refactor Fase 1",
  },
  {
    title: "StreetBall",
    cat: "Web / Product",
    desc: "Plataforma web para organización deportiva con backend y autenticación.",
    spec: "FastAPI · SQL · JS",
    code: "JCC-05",
    mark: "SBK",
    tagline: "Organizar la liga de tu barrio sin que se llene de Excel.",
    bio: "Equipos, calendario, resultados. StreetBall es una plataforma web para deporte amateur con backend propio y autenticación, pensada para aguantar el domingo de torneo: el front bonito importa poco si la API se cae con el primer partido. Producción y robustez como prioridad de diseño.",
    features: [
      "Gestión de equipos, calendario y resultados",
      "Backend FastAPI con autenticación de usuarios",
      "Modelo de datos SQL relacional",
      "Arquitectura preparada para carga real",
    ],
    state: "v2 en rama · pendiente publicar",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
              <motion.button
                key={p.title}
                onClick={() => setSelected(p)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col rounded-xl border border-ink/25 bg-paper p-6 text-left transition-colors duration-100 hover:border-ink"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="mono text-[10px] uppercase tracking-wide text-gray-mid">
                    {p.cat}
                  </span>
                  <span className="mono flex items-center gap-1.5 text-[10px] text-gray-light transition-colors duration-100 group-hover:text-signal">
                    {String(i + 1).padStart(2, "0")}
                    <span className="opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                      ↗
                    </span>
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
              </motion.button>
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

      <ProjectModal isOpen={selected !== null} onClose={() => setSelected(null)} project={selected} />
    </section>
  );
}