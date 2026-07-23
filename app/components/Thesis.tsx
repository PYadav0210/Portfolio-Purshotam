"use client";

import { motion } from "framer-motion";
import { thesis } from "../data/content";
import { glass, sheen, label } from "./Glass";
import { Magnetic, Shine } from "./Motion";

export default function Thesis() {
  return (
    <section id="thesis" className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>05 — Thesis</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">Research work</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className={`${glass} mt-12 p-6 sm:p-10 lg:p-12`}>
          <span className={sheen} />
          <motion.span aria-hidden animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/[0.14] blur-3xl" />
          <motion.span aria-hidden animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/[0.12] blur-3xl" />

          <div className="relative flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="rounded-full bg-gradient-to-r from-violet-400/25 to-fuchsia-400/25 px-3.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.18em] text-violet-200 sm:text-[10px]">Bachelor Thesis</span>
            <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3.5 py-1 text-[10.5px] text-zinc-400 sm:text-[11px]">{thesis.year}</span>
          </div>

          <h3 className="relative mt-6 max-w-2xl bg-gradient-to-r from-white to-violet-200 bg-clip-text text-2xl font-light leading-tight tracking-[-0.02em] text-transparent sm:mt-7 sm:text-3xl lg:text-4xl">{thesis.title}</h3>
          <p className="relative mt-2.5 text-[13px] text-zinc-500 sm:text-sm">{thesis.subtitle}</p>
          <p className="relative mt-6 max-w-2xl text-[14px] font-light leading-relaxed text-zinc-400 sm:mt-8 sm:text-[15px]">{thesis.summary}</p>

          <div className="relative mt-10 grid gap-3.5 sm:mt-12 sm:gap-4 md:grid-cols-2">
            {thesis.highlights.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className={`${glass} group p-5 transition-all duration-500 hover:border-violet-400/45 hover:shadow-[0_12px_40px_-8px_rgba(167,139,250,0.35)] sm:p-6`}>
                <span className={sheen} />
                <Shine />
                <div className="relative flex items-baseline gap-3">
                  <span className="bg-gradient-to-b from-violet-300 to-fuchsia-400 bg-clip-text font-mono text-[11px] text-transparent">0{i + 1}</span>
                  <h4 className="text-[14px] font-normal text-zinc-100 sm:text-[15px]">{h.label}</h4>
                </div>
                <p className="relative mt-2.5 text-[12.5px] font-light leading-relaxed text-zinc-500 sm:text-[13px]">{h.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-9 flex flex-wrap items-center gap-2 sm:mt-11">
            {thesis.tags.map((t) => (
              <motion.span key={t} whileHover={{ y: -3, scale: 1.06 }} className="cursor-default rounded-xl border border-white/[0.09] bg-white/[0.05] px-3 py-1.5 text-[11.5px] font-light text-zinc-300 transition-colors hover:border-violet-400/50 hover:text-white sm:text-[12.5px]">{t}</motion.span>
            ))}
          </div>

          <div className="relative mt-8 sm:mt-9">
            <Magnetic>
              <motion.a href={thesis.href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="group relative block overflow-hidden rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 p-px shadow-[0_10px_35px_-10px_rgba(167,139,250,0.6)]">
                <span className="relative block rounded-full bg-[#0b0b0f] px-6 py-2.5 text-[12.5px] font-medium text-white transition-colors duration-300 group-hover:bg-transparent group-hover:text-zinc-900">View thesis code →</span>
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}