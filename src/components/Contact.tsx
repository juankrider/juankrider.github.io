"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Grabación real: conectar con servicio de email o backend cuando se disponga
    setSent(true);
  };

  const links = [
    {
      href: "https://github.com/juankrider",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/juankcerrato",
      label: "LinkedIn",
      icon: Linkedin,
    },
    { href: "mailto:hola@juankcerrato.com", label: "Email", icon: Mail },
  ];

  return (
    <section id="contact" className="section-padding bg-zinc-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Contacto
          </div>
          <h2 className="text-balance text-3xl font-bold text-zinc-900 md:text-4xl">
            ¿Construimos algo juntos?
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-zinc-500 md:text-base">
            ¿Un producto físico, una automatización inteligente, o software que
            lo conecte todo? Hablemos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-card flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-accent">
                  <link.icon size={18} />
                </div>
                <span className="text-sm font-medium text-zinc-600">
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="drawer-card"
          >
            {sent ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-accent">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm text-zinc-500">
                  Gracias por escribirme. Te responderé pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-600"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-accent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-600"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-accent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-600"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-accent"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
