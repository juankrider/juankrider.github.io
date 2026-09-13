"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const images = [
  "/images/about/about-1.webp",
  "/images/about/about-2.webp",
  "/images/about/about-3.webp",
  "/images/about/about-4.webp",
  "/images/about/about-5.webp",
  "/images/about/about-6.webp",
];

const extendedInfo = [
  { label: "Especialidad", value: "Diseño Mecánico · I+D Producto · IA/Automatización" },
  { label: "Herramientas CAD", value: "SolidWorks (CSWP) · AutoCAD · Fusion 360" },
  { label: "Simulación", value: "FEA · Análisis térmico · CFD básico" },
  { label: "Prototipado", value: "CNC · Impresión 3D · Moldeo por inyección" },
  { label: "Software/IA", value: "Python · FastAPI · Ollama · OpenClaw · Linux" },
  { label: "Sectores", value: "Energía (celdas MT, SF6-Free) · Consumo · Industrial" },
  { label: "Idiomas", value: "Español (nativo) · Inglés (técnico fluido)" },
  { label: "Disponibilidad", value: "Remoto · Internacional · Freelance / Contrato" },
];

export default function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + images.length) % images.length);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Juan Carlos Cerrato — Ingeniero de Diseño Industrial">
      <div className="grid gap-8 lg:grid-cols-[1fr_480px]">
        {/* Columna izquierda: Texto e info */}
        <div className="space-y-6 lg:col-span-1">
          <div className="space-y-4">
            <h4 className="mono text-[11px] uppercase tracking-[0.2em] text-gray-mid">
              Información ampliada
            </h4>

            <div className="border-t border-ink/20">
              {extendedInfo.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-ink/10 py-4"
                >
                  <span className="mono text-[10px] uppercase tracking-wide text-gray-light">
                    {item.label}
                  </span>
                  <span className="mono text-[11px] text-ink leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bio extendida */}
            <div className="pt-4 border-t border-ink/20">
              <h5 className="mono text-[11px] uppercase tracking-[0.2em] text-gray-mid mb-3">
                Trayectoria
              </h5>
              <p className="text-[14px] leading-relaxed text-ink/80">
                Ingeniero de Diseño Industrial con doble perfil: ingeniería mecánica pura (diseño de producto,
                simulación, prototipado, validación en serie) y desarrollo de software aplicado a automatización
                e IA. Experiencia liderando proyectos de I+D en celdas de media tensión SF6-Free, desde el concepto
                hasta la validación normativa. En paralelo, construyo herramientas de IA y automatización con
                modelos locales (Ollama, LM Studio) y arquitectura de agentes (OpenClaw, MCP), aplicando la misma
                rigurosidad de ingeniería mecánica al software: especificaciones claras, pruebas, versionado y
                documentación técnica.
              </p>
            </div>

            {/* Enfoque */}
            <div className="pt-4 border-t border-ink/20">
              <h5 className="mono text-[11px] uppercase tracking-[0.2em] text-gray-mid mb-3">
                Enfoque de trabajo
              </h5>
              <ul className="space-y-2 text-[13px] leading-relaxed text-ink/80">
                <li className="flex items-start gap-2">
                  <span className="mono text-signal mt-1">•</span>
                  Ingeniería first: requisitos claros, análisis de riesgos, validación documentada
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-signal mt-1">•</span>
                  Iteración rápida: prototipa, testea, documenta, itera
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-signal mt-1">•</span>
                  Código como ingeniería: tipos estrictos, tests, CI/CD, arquitectura limpia
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-signal mt-1">•</span>
                  Trabajo remoto nativo: documentación viva, comunicación asíncrona, entrega continua
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna derecha: Carrusel más pequeño */}
        <div className="lg:col-span-1">
          <div className="relative aspect-square max-w-[480px] mx-auto self-center">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-ground border border-ink/15">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`Foto ${currentImage + 1} de Juan Carlos Cerrato`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 mono flex items-center justify-center w-8 h-8 rounded-full border border-ink/25 bg-paper/90 text-ink transition-colors duration-100 hover:border-signal hover:text-signal"
                aria-label="Foto anterior"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 mono flex items-center justify-center w-8 h-8 rounded-full border border-ink/25 bg-paper/90 text-ink transition-colors duration-100 hover:border-signal hover:text-signal"
                aria-label="Siguiente foto"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      i === currentImage
                        ? "bg-signal w-5"
                        : "bg-gray-mid hover:bg-signal/50"
                    }`}
                    aria-label={`Ver foto ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}