"use client";

import { motion } from "framer-motion";

const channels = [
  { label: "Email", value: "juankcerrato@gmail.com", href: "mailto:juankcerrato@gmail.com" },
  { label: "GitHub", value: "github.com/juankrider", href: "https://github.com/juankrider" },
  { label: "LinkedIn", value: "in/juankcerrato", href: "https://www.linkedin.com/in/juankcerrato" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-paper">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="spec-label">
            <span className="spec-index">05</span>
            Stay in touch
          </div>
          <h2 className="section-title">Contact.</h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/80">
            ¿Un producto físico, una automatización inteligente, o software que
            lo conecte todo? Hablemos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group block border border-ink/25 bg-ground p-6 transition-colors duration-100 hover:border-ink"
            >
              <div className="mono mb-8 flex items-center justify-between text-[10px] uppercase tracking-wide text-gray-mid">
                <span>{c.label}</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-light transition-colors duration-100 group-hover:bg-signal" />
              </div>
              <div className="mono text-[12px] leading-relaxed text-ink">
                {c.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
