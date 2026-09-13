"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogModal, { type Post } from "./BlogModal";

const posts: Post[] = [
  {
    title: "Atlas Body Tracker: seguimiento físico por Telegram",
    date: "2026",
    tag: "IA / Automation",
    excerpt:
      "Peso y fotos al bot, dashboard web con tendencia. 32 tests y un stack Docker completo corriendo en local.",
    lead: "Medir el progreso no debería exigir abrir una app que te roba la atención. Atlas Body Tracker nació de una pregunta incómoda: ¿por qué lo único que registro de verdad es lo que puedo hacer con un chat?",
    sections: [
      {
        heading: "El problema",
        body: "Las apps de hábitos mueren por fricción: formularios, notificaciones, muros de registro. Un bot de Telegram tiene cero instalación y cero onboarding: ya está donde estás mientras le escribes a alguien. Ese es el formato correcto para un dato que tienes que registrar cada día sin pensar.",
      },
      {
        heading: "Cómo funciona",
        body: "Envías el peso (o una foto) al bot @atlas_body_bot. El mensaje entra como un evento en una API, se valida, se persiste en base de datos y desde ahí cae en una tendencia. El dashboard web lo lee con vista histórica: sin ruido, sin gamificación vacía, solo la serie.",
      },
      {
        heading: "La parte de ingeniería",
        body: "Lo construí como producto serio porque un 'bot de ejemplo' no te da un año de datos. 32 tests, stack completo en Docker (api + bot), versionado limpio. Si se cae, se levanta solo; si cambia algo, los tests avisan antes que los usuarios.",
      },
      {
        heading: "Lo que enseña",
        body: "El reto de un tracker no es capturar datos, es que el canal de captura sea tan invisible que no falle nunca. La consistencia la paga el diseño del flujo, no la fuerza de voluntad.",
      },
    ],
    closing: "Sigue corriendo en local, alimentado un día a la vez. El progreso no se siente: se mide.",
  },
  {
    title: "PDF AI Assistant: documentación técnica con IA",
    date: "2026",
    tag: "IA / Docs",
    excerpt:
      "Del documento normativo a respuestas con citas verificables: el motor que reutilizan mis otros proyectos de IA.",
    lead: "En ingeniería, alucinar no es un bug simpático: es una responsabilidad. PDF AI Assistant empieza asumiendo ese principio.",
    sections: [
      {
        heading: "El problema",
        body: "Una norma nueva son 300 páginas. Un pliego, 200. Leer documentación técnica al calado se lleva días y deja dudas. Preguntar a un LLM sin control sobre esa documentación es jugar a que no invente: inaceptable cuando una cifra mal leída cambia un diseño completo.",
      },
      {
        heading: "La solución",
        body: "El sistema ingiere el documento, lo estructura y responde contra un índice de la fuente real. Cada respuesta lleva una cita al párrafo original: si te dice un límite, te enseña dónde lo dice. Verificable por diseño, no por promesa.",
      },
      {
        heading: "Ingeniería",
        body: "FastAPI de API limpia, tipada y testeable. El núcleo documental es un motor reutilizable: ese mismo componente alimenta otros proyectos de IA en lugar de reinventar el RAG cada vez.",
      },
      {
        heading: "Por qué importa",
        body: "Un asistente que no enseña sus fuentes es un oráculo. En diseño industrial la regla es documentar la decisión; el software que construyo hace lo mismo: cada afirmación sabe de dónde viene.",
      },
    ],
    closing: "Cita o no responde. Así es como la IA entra en un departamento de ingeniería sin tener que pedir permiso.",
  },
  {
    title: "Del taller a la terminal: ingeniería que abraza la IA",
    date: "2025",
    tag: "Engineering",
    excerpt:
      "Cómo el diseño mecánico industrial y el software open source convergen en un mismo flujo de trabajo.",
    lead: "Pasé años midiendo tolerancias en milímetros y hoy escribo código con disciplina de ingeniero. Al final resultaba que eran el mismo oficio.",
    sections: [
      {
        heading: "Dos oficios, misma ética",
        body: "En diseño mecánico no entregas un plano: entregas también la lógica de por qué ese plano existe. Tolerancias, materiales, validación. En software pasó igual: tipos estrictos, tests, documentación. Lo que cambió fue el material, no el método.",
      },
      {
        heading: "Lo que el CAD me enseñó sobre código",
        body: "El ensamblaje en SolidWorks te obliga a pensar en interfaces antes que en piezas: cada superficie acopla con otra. Eso es exactamente diseño de APIs modular. La simulación te entrena para formular hipótesis y probarlas, igual que un test unitario.",
      },
      {
        heading: "La IA como molde",
        body: "Un agente de IA es como un molde: dale especificaciones claras y piezas consistentes, y devuelve producto repetible. La ingeniería de prompts es diseño para fabricación: definición, restricciones, tolerancias de salida.",
      },
      {
        heading: "Fabricación propia",
        body: "Hoy trabajo a la vez en ambas direcciones: sigo diseñando producto físico, y esa misma disciplina alimenta herramientas de automatización e IA open source. Del taller a la terminal, sin cambiar de persona.",
      },
    ],
    closing: "La transición no trata de olvidar lo que fuiste, sino de llevarte el taller contigo.",
  },
];

export default function Blog() {
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <section id="blog" className="section-padding bg-ground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="spec-label">
            <span className="spec-index">04</span>
            Journal
          </div>
          <h2 className="section-title">Blog.</h2>
        </motion.div>

        <div className="mt-12 border-t border-ink/20">
          {posts.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group block w-full border-b border-ink/10 py-8 text-left"
            >
              <div className="mono mb-3 flex items-center gap-6 text-[10px] uppercase tracking-wide text-gray-mid">
                <span className="text-gray-light">{p.date}</span>
                <span>{p.tag}</span>
              </div>
              <h3 className="text-xl font-medium leading-snug text-ink md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
                {p.excerpt}
              </p>
              <span className="mono mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide text-ink transition-colors duration-100 group-hover:text-signal">
                Leer más
                <span className="transition-transform duration-100 group-hover:translate-x-1">→</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <BlogModal isOpen={selected !== null} onClose={() => setSelected(null)} post={selected} />
    </section>
  );
}