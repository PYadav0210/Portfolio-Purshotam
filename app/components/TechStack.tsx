"use client";

import { motion } from "framer-motion";
import { marqueeStack } from "../data/content";
import { label } from "./Glass";

const hues = ["hover:border-violet-400/50 hover:text-violet-200", "hover:border-cyan-400/50 hover:text-cyan-200", "hover:border-emerald-400/50 hover:text-emerald-200", "hover:border-rose-400/50 hover:text-rose-200", "hover:border-amber-400/50 hover:text-amber-200"];

export default function TechStack() {
  const half = Math.ceil(marqueeStack.length / 2);
  const rowA = [...marqueeStack.slice(0, half), ...marqueeStack.slice(0, half)];
  const rowB = [...marqueeStack.slice(half), ...marqueeStack.slice(half)];

  return (
    <section id="stack" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>07 — Toolkit</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">Everything I work with</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-zinc-400 sm:text-base">Languages, frameworks and tools I use day to day across data and the web.</p>
        </motion.div>
      </div>

      <div className="relative mt-12 sm:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#08080a] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#08080a] to-transparent sm:w-40" />

        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} className="flex w-max gap-3 sm:gap-3.5">
          {rowA.map((tech, i) => (
            <motion.span key={i} whileHover={{ y: -5, scale: 1.06 }} className={`cursor-default whitespace-nowrap rounded-2xl border border-white/[0.09] bg-white/[0.05] px-4 py-2.5 text-[12px] font-light text-zinc-300 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] transition-all duration-300 sm:px-6 sm:py-3.5 sm:text-[13.5px] ${hues[i % hues.length]}`}>{tech}</motion.span>
          ))}
        </motion.div>

        <motion.div animate={{ x: ["-50%", "0%"] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="mt-3 flex w-max gap-3 sm:mt-3.5 sm:gap-3.5">
          {rowB.map((tech, i) => (
            <motion.span key={i} whileHover={{ y: -5, scale: 1.06 }} className={`cursor-default whitespace-nowrap rounded-2xl border border-white/[0.09] bg-white/[0.05] px-4 py-2.5 text-[12px] font-light text-zinc-400 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] transition-all duration-300 sm:px-6 sm:py-3.5 sm:text-[13.5px] ${hues[(i + 2) % hues.length]}`}>{tech}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}