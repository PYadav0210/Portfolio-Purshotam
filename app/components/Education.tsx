"use client";

import { motion } from "framer-motion";
import { education } from "../data/content";
import { glass, sheen, label } from "./Glass";
import { Shine } from "./Motion";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>04 — Education</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">Where it started</h2>
        </motion.div>

        {education.map((ed, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className={`${glass} group mt-12 p-6 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_12px_50px_-8px_rgba(34,211,238,0.3)] sm:p-10`}>
            <span className={sheen} />
            <Shine />
            <motion.span aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/[0.12] blur-3xl" />

            <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3 className="max-w-xl text-xl font-light leading-snug tracking-tight text-zinc-50 sm:text-2xl lg:text-3xl">{ed.degree}</h3>
              <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1 text-[10.5px] text-zinc-400 sm:text-[11px]">{ed.period}</span>
            </div>

            <p className="relative mt-3 text-[13px] text-cyan-300 sm:text-sm">{ed.school} <span className="text-zinc-600">· {ed.location}</span></p>
            <p className="relative mt-6 max-w-2xl text-[14px] font-light leading-relaxed text-zinc-400 sm:text-[15px]">{ed.note}</p>

            <div className="relative mt-8">
              <h4 className="mb-4 text-[9.5px] font-medium uppercase tracking-[0.26em] text-zinc-600 sm:text-[10px]">Core focus</h4>
              <div className="flex flex-wrap gap-2">
                {ed.focus.map((f, j) => (
                  <motion.span key={f} initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 320, damping: 24, delay: j * 0.06 }} whileHover={{ y: -4, scale: 1.07 }} className="cursor-default rounded-xl border border-white/[0.09] bg-white/[0.05] px-3 py-1.5 text-[11.5px] font-light text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-cyan-400/50 hover:text-white sm:text-[12.5px]">{f}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}