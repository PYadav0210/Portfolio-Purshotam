"use client";

import { motion } from "framer-motion";
import { education } from "../data/content";
import { glass, sheen, label } from "./Glass";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>04 — Education</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">Where it started</h2>
        </motion.div>

        {education.map((ed, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className={`${glass} mt-14 p-10`}>
            <span className={sheen} />
            <span className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-200/[0.05] blur-3xl" />

            <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3 className="max-w-xl text-2xl font-light leading-snug tracking-tight text-zinc-50 sm:text-3xl">{ed.degree}</h3>
              <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3.5 py-1 text-[11px] text-zinc-400">{ed.period}</span>
            </div>

            <p className="relative mt-4 text-sm text-sky-100/70">{ed.school} <span className="text-zinc-600">· {ed.location}</span></p>
            <p className="relative mt-7 max-w-2xl text-[15px] font-light leading-relaxed text-zinc-400">{ed.note}</p>

            <div className="relative mt-9">
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">Core focus</h4>
              <div className="flex flex-wrap gap-2">
                {ed.focus.map((f, j) => (
                  <motion.span key={f} initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 320, damping: 24, delay: j * 0.06 }} whileHover={{ y: -3 }} className="cursor-default rounded-xl border border-white/[0.09] bg-white/[0.05] px-3.5 py-1.5 text-[12.5px] font-light text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-white/25 hover:text-white">{f}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}