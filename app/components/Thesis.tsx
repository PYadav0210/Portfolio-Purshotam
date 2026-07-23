"use client";

import { motion } from "framer-motion";
import { thesis } from "../data/content";
import { glass, glassHover, sheen, label } from "./Glass";

export default function Thesis() {
  return (
    <section id="thesis" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>05 — Thesis</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">Research work</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className={`${glass} mt-14 p-10 sm:p-12`}>
          <span className={sheen} />
          <motion.span aria-hidden animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-100/[0.06] blur-3xl" />

          <div className="relative flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-100/25 bg-amber-100/[0.07] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-100/80">Bachelor Thesis</span>
            <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3.5 py-1 text-[11px] text-zinc-400">{thesis.year}</span>
          </div>

          <h3 className="relative mt-7 max-w-2xl text-3xl font-light leading-tight tracking-[-0.02em] text-zinc-50 sm:text-4xl">{thesis.title}</h3>
          <p className="relative mt-3 text-sm text-zinc-500">{thesis.subtitle}</p>
          <p className="relative mt-8 max-w-2xl text-[15px] font-light leading-relaxed text-zinc-400">{thesis.summary}</p>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-2">
            {thesis.highlights.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -4 }} className={`${glass} ${glassHover} p-6`}>
                <span className={sheen} />
                <div className="relative flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-amber-100/50">0{i + 1}</span>
                  <h4 className="text-[15px] font-normal text-zinc-100">{h.label}</h4>
                </div>
                <p className="relative mt-2.5 text-[13px] font-light leading-relaxed text-zinc-500">{h.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-11 flex flex-wrap items-center gap-2">
            {thesis.tags.map((t) => (
              <span key={t} className="rounded-xl border border-white/[0.09] bg-white/[0.05] px-3.5 py-1.5 text-[12.5px] font-light text-zinc-300">{t}</span>
            ))}
          </div>

          <motion.a href={thesis.href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="relative mt-9 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/95 px-6 py-2.5 text-[13px] font-medium text-zinc-900">View thesis code<span>→</span></motion.a>
        </motion.div>
      </div>
    </section>
  );
}