"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Del taller a la terminal: ingeniería que abraza la IA",
    date: "2024",
    excerpt:
      "Cómo el diseño mecánico industrial y el software open source convergen en un mismo flujo de trabajo.",
    tag: "Ingeniería",
  },
  {
    title: "SF6-Free y diseño sostenible en media tensión",
    date: "2023",
    excerpt:
      "El reto de sustituir el SF6: una mirada técnica al desarrollo de soluciones libres de gases fluorados.",
    tag: "I+D",
  },
  {
    title: "Automatizando mi día con agentes locales",
    date: "2023",
    excerpt:
      "Construyendo un asistente personal con Ollama, MCP y modelos que corren 100% en local.",
    tag: "IA",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Algo que contar</span>
          <h2 className="section-title">
            El
            <br />
            Blog.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-10"
            >
              <span className="text-xs tracking-wide text-gray-400 uppercase">
                {post.date}
              </span>
              <h3 className="serif mt-2 text-2xl font-medium text-gray-900 md:text-3xl">
                {post.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-xs font-medium tracking-wide text-gray-900 uppercase">
                {post.tag}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
