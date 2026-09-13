"use client";

import Modal from "./Modal";

export type Project = {
  title: string;
  cat: string;
  desc: string;
  spec: string;
  code: string;
  mark: string;
  tagline: string;
  bio: string;
  features: string[];
  state: string;
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${project.title} · ${project.code}`}>
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Columna izquierda: texto */}
        <div className="space-y-6">
          <p className="text-xl font-medium leading-snug text-ink">{project.tagline}</p>
          <p className="text-[14px] leading-relaxed text-ink/80">{project.bio}</p>

          <div>
            <h4 className="mono mb-3 text-[11px] uppercase tracking-[0.2em] text-gray-mid">
              Enfoque
            </h4>
            <ul className="space-y-2 text-[13px] leading-relaxed text-ink/80">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mono mt-1 text-signal">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna derecha: spec sheet */}
        <div className="lg:col-span-1">
          <div className="hero-grid-fine relative flex aspect-square flex-col items-center justify-center gap-5 rounded-xl border border-ink/15 bg-ground p-6">
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-gray-mid">
              MODEL · {project.code}
            </span>
            <span className="mono text-6xl font-medium tracking-tight text-signal">
              {project.mark}
            </span>
            <div className="mono flex flex-wrap justify-center gap-2">
              {project.spec.split(" · ").map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-ink/20 bg-paper px-2 py-1 text-[10px] uppercase tracking-wide text-gray-mid"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="h-px w-full bg-ink/20" />
            <span className="mono text-[10px] uppercase tracking-wide text-gray-light">
              {project.state}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}