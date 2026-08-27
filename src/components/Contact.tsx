"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const contacts = [
    { icon: Mail, label: "Email", value: "juankcerrato@gmail.com", href: "mailto:juankcerrato@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/juankrider", href: "https://github.com/juankrider" },
    { icon: Linkedin, label: "LinkedIn", value: "in/juankcerrato", href: "https://www.linkedin.com/in/juankcerrato" },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Mantente en contacto</span>
          <h2 className="section-title">
            Stay In
            <br />
            Touch.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {contacts.map((c, index) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-5 border-b border-gray-200 py-5"
            >
              <c.icon size={22} className="text-gray-400 transition-colors group-hover:text-gray-900" />
              <div>
                <div className="text-xs tracking-wide text-gray-400 uppercase">
                  {c.label}
                </div>
                <div className="text-lg font-medium text-gray-900">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
