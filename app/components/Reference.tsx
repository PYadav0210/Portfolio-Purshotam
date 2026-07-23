"use client";

import { motion } from "framer-motion";
import { referenceLetter as L } from "../data/content";
import { glass, sheen, label } from "./Glass";
import { Magnetic } from "./Motion";

export default function Reference() {
  return (
    <section id="reference" className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>08 — Reference</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">Employer reference letter</h2>
          <p className="mt-4 max-w-2xl text-sm font-light text-zinc-400 sm:text-base">Issued by Whyzzer UG following my full-stack internship in Hamburg.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50, rotateX: -5 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ perspective: 1400 }} className={`${glass} mt-12 p-2.5 sm:p-4`}>
          <span className={sheen} />
          <motion.span aria-hidden animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 9, repeat: Infinity }} className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/[0.12] blur-3xl" />

          <div className="relative rounded-2xl bg-[#fbfaf8] px-5 py-8 text-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-200 pb-6 sm:gap-6 sm:pb-8">
              <div>
                <div className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">whyzzer</div>
                <p className="mt-2.5 text-[10.5px] leading-relaxed text-zinc-500 sm:text-[11.5px]">{L.company}<br />{L.companyAddress}<br />{L.companyEmail}<br />{L.companyWeb}</p>
              </div>
              <p className="text-[10.5px] text-zinc-500 sm:text-[11.5px]">{L.date}</p>
            </div>

            <h3 className="mt-8 text-[12.5px] font-bold uppercase tracking-wide text-zinc-900 sm:mt-10 sm:text-sm">{L.title}</h3>
            <p className="mt-5 text-[12.5px] leading-[1.8] text-zinc-700 sm:mt-7 sm:text-[13.5px] sm:leading-[1.85]">{L.intro}</p>
            <p className="mt-4 text-[12.5px] leading-[1.8] text-zinc-700 sm:mt-6 sm:text-[13.5px]">{L.tasksIntro}</p>

            <ul className="mt-3.5 space-y-2.5">
              {L.tasks.map((t, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} className="flex gap-2.5 text-[12.5px] leading-[1.7] text-zinc-700 sm:gap-3 sm:text-[13.5px]">
                  <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-zinc-400" />{t}
                </motion.li>
              ))}
            </ul>

            <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
              {L.body.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 + i * 0.09 }} className="text-[12.5px] leading-[1.8] text-zinc-700 sm:text-[13.5px] sm:leading-[1.85]">{p}</motion.p>
              ))}
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-6 sm:mt-12 sm:pt-8">
              <p className="text-[12px] text-zinc-600 sm:text-[13px]">Whyzzer UG</p>
              <motion.svg initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }} viewBox="0 0 200 60" className="mt-2 h-12 w-40 sm:h-14 sm:w-44">
                <motion.path d="M12 46 C 18 8, 30 8, 30 30 C 30 50, 20 52, 22 34 C 24 16, 40 14, 44 40 C 46 52, 56 50, 58 34 C 60 14, 74 12, 78 38 C 80 50, 90 50, 96 36 C 104 18, 116 20, 124 40 C 130 52, 142 46, 150 30" fill="none" stroke="#1f2937" strokeWidth="2.2" strokeLinecap="round" />
              </motion.svg>
              <p className="mt-1 text-[12.5px] font-semibold text-zinc-900 sm:text-[13.5px]">{L.author}</p>
              <p className="text-[11.5px] text-zinc-500 sm:text-[12px]">{L.authorRole}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-7 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <motion.a href={L.file} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="group relative block overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 p-px shadow-[0_10px_35px_-10px_rgba(52,211,153,0.6)]">
              <span className="relative block rounded-full bg-[#0b0b0f] px-5 py-2.5 text-[12px] font-medium text-white transition-colors duration-300 group-hover:bg-transparent group-hover:text-zinc-900 sm:px-6 sm:text-[13px]">View original PDF ↗</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href={L.file} download whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block rounded-full border border-white/[0.14] bg-white/[0.05] px-5 py-2.5 text-[12px] font-medium text-zinc-200 backdrop-blur-xl transition-colors hover:border-emerald-400/40 hover:bg-white/[0.1] sm:px-6 sm:text-[13px]">Download letter</motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}