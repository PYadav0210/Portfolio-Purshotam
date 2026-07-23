"use client";

import { motion } from "framer-motion";
import { marqueeStack } from "../data/content";
import { label } from "./Glass";

export default function TechStack() {
  const half = Math.ceil(marqueeStack.length / 2);
  const rowA = [...marqueeStack.slice(0, half), ...marqueeStack.slice(0, half)];
  const rowB = [...marqueeStack.slice(half), ...marqueeStack.slice(half)];

  return (
    <section id="stack" className="relative scroll-mt-28 overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>07 — Toolkit</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">Everything I work with</h2>
          <p className="mx-auto mt-5 max-w-xl font-light text-zinc-400">Languages, frameworks and tools I use day to day across data and the web.</p>
        </motion.div>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#08080a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[#08080a] to-transparent" />

        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} className="flex w-max gap-3.5">
          {rowA.map((tech, i) => (
            <motion.span key={i} whileHover={{ y: -4, scale: 1.05 }} className="cursor-default whitespace-nowrap rounded-2xl border border-white/[0.09] bg-white/[0.045] px-6 py-3.5 text-[13.5px] font-light text-zinc-300 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] transition-colors hover:border-amber-100/30 hover:text-white">{tech}</motion.span>
          ))}
        </motion.div>

        <motion.div animate={{ x: ["-50%", "0%"] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="mt-3.5 flex w-max gap-3.5">
          {rowB.map((tech, i) => (
            <motion.span key={i} whileHover={{ y: -4, scale: 1.05 }} className="cursor-default whitespace-nowrap rounded-2xl border border-white/[0.09] bg-white/[0.045] px-6 py-3.5 text-[13.5px] font-light text-zinc-400 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] transition-colors hover:border-sky-200/30 hover:text-white">{tech}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}