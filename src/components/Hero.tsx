"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm italic text-gray-500"
      >
        Soy Juan Carlos Cerrato
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="serif mt-6 max-w-4xl text-balance text-5xl font-medium leading-tight text-gray-900 md:text-7xl"
      >
        Industrial Engineer.
        <br />
        <span className="italic text-gray-400">a Product Developer.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg"
      >
        Diseño productos físicos e inteligentes. Del diseño mecánico industrial
        a la construcción de agentes de IA: ingeniería rigurosa y software open
        source.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 flex animate-bounce items-center justify-center text-gray-400"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
