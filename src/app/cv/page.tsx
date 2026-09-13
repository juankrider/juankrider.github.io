import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae de Juan Carlos Cerrato — Ingeniero de Diseño Industrial & AI Builder.",
};

const keyFacts = [
  { key: "Role", value: "Ingeniero de Diseño Industrial · I+D" },
  { key: "Certification", value: "CSWP — SolidWorks Professional" },
  { key: "Education", value: "Ing. Diseño Industrial · Máster Inyección (UPV)" },
  { key: "Focus", value: "Mecánica · Producto · SF6-Free · IA" },
  { key: "Idiomas", value: "Español (nativo) · Inglés (técnico fluido)" },
  { key: "Disponibilidad", value: "Remoto · Internacional · Freelance / Contrato" },
];

const skills = [
  {
    title: "Engineering",
    items: ["SolidWorks (CSWP)", "AutoCAD", "Fusion 360", "Diseño Mecánico", "FEA", "Prototipado", "Moldeo por inyección"],
  },
  {
    title: "Software",
    items: ["Python", "FastAPI", "SQL", "APIs", "Git", "Linux", "Docker"],
  },
  {
    title: "AI / Automation",
    items: ["Ollama", "LLMs", "Agentes IA", "MCP", "OpenClaw", "Open Source AI"],
  },
  {
    title: "Design",
    items: ["Blender", "Photoshop", "UX Thinking", "Product Design"],
  },
];

const contact = [
  { label: "Email", value: "juankcerrato@gmail.com", href: "mailto:juankcerrato@gmail.com" },
  { label: "GitHub", value: "github.com/juankrider", href: "https://github.com/juankrider" },
  { label: "LinkedIn", value: "in/juankcerrato", href: "https://www.linkedin.com/in/juankcerrato" },
];

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper px-6 pb-16 pt-28 md:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Cabecera */}
        <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-gray-mid">
          <span>CV · Juan Carlos Cerrato</span>
          <PrintButton />
        </div>

        <h1 className="mt-8 text-4xl font-medium leading-[0.95] tracking-tight text-ink md:text-5xl">
          Juan Carlos
          <br />
          Cerrato
        </h1>
        <p className="mono mt-4 text-[13px] uppercase tracking-wide text-gray-mid">
          Industrial Design Engineer · I+D · Product Development · AI / Automation
        </p>

        {/* Contacto */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {contact.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-ink/25 bg-ground p-4 transition-colors duration-100 hover:border-ink"
            >
              <div className="mono mb-3 flex items-center justify-between text-[10px] uppercase tracking-wide text-gray-mid">
                <span>{c.label}</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
              </div>
              <div className="mono text-[11px] leading-relaxed text-ink">{c.value}</div>
            </a>
          ))}
        </div>

        {/* Perfil */}
        <section className="mt-12">
          <h2 className="spec-label">Profile</h2>
          <p className="text-[15px] leading-relaxed text-ink/80">
            Doble vocación: la ingeniería mecánica que da forma a productos físicos y el
            software que automatiza el mundo digital. Experiencia liderando proyectos de
            I+D en celdas de media tensión SF6-Free, desde el concepto hasta la validación
            normativa. En paralelo, construyo herramientas de IA, automatización y
            software open source con Python, FastAPI y agentes locales sobre Linux.
          </p>
        </section>

        {/* Datos clave */}
        <section className="mt-12">
          <h2 className="spec-label">Key facts</h2>
          <div className="border-t border-ink/20">
            {keyFacts.map((s) => (
              <div
                key={s.key}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-ink/10 py-3"
              >
                <span className="mono text-[10px] uppercase tracking-wide text-gray-light">
                  {s.key}
                </span>
                <span className="mono text-[11px] text-ink">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Capacidades */}
        <section className="mt-12">
          <h2 className="spec-label">Capabilities</h2>
          <div className="border-t border-ink/20">
            {skills.map((s, i) => (
              <div key={s.title} className="grid gap-3 border-b border-ink/10 py-5 sm:grid-cols-[3rem_1fr]">
                <span className="mono text-[10px] text-gray-light">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-medium text-ink">{s.title}</h3>
                  <div className="mono mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                    {s.items.map((it) => (
                      <span key={it} className="text-[11px] text-gray-mid">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pie */}
        <p className="mono mt-12 text-[10px] uppercase tracking-wide text-gray-light">
          © {new Date().getFullYear()} Juan Carlos Cerrato · Engineering & AI
        </p>
      </div>
    </main>
    </>
  );
}