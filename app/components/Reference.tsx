"use client";

import { motion } from "framer-motion";
import { referenceLetter as L } from "../data/content";
import { glass, sheen, label } from "./Glass";

export default function Reference() {
  return (
    <section id="reference" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>08 — Reference</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">Employer reference letter</h2>
          <p className="mt-5 max-w-2xl font-light text-zinc-400">Issued by Whyzzer UG following my full-stack internship in Hamburg.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50, rotateX: -6 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ perspective: 1400 }} className={`${glass} mt-14 p-3 sm:p-4`}>
          <span className={sheen} />

          <div className="relative rounded-2xl bg-[#fbfaf8] px-8 py-12 text-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:px-14 sm:py-16">
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-zinc-200 pb-8">
              <div>
                <div className="text-2xl font-bold tracking-tight text-zinc-900">whyzzer</div>
                <p className="mt-3 text-[11.5px] leading-relaxed text-zinc-500">{L.company}<br />{L.companyAddress}<br />{L.companyEmail}<br />{L.companyWeb}</p>
              </div>
              <p className="text-[11.5px] text-zinc-500">{L.date}</p>
            </div>

            <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-zinc-900">{L.title}</h3>

            <p className="mt-7 text-[13.5px] leading-[1.85] text-zinc-700">{L.intro}</p>
            <p className="mt-6 text-[13.5px] leading-[1.85] text-zinc-700">{L.tasksIntro}</p>

            <ul className="mt-4 space-y-2.5">
              {L.tasks.map((t, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} className="flex gap-3 text-[13.5px] leading-[1.75] text-zinc-700">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-zinc-400" />{t}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 space-y-5">
              {L.body.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 + i * 0.09 }} className="text-[13.5px] leading-[1.85] text-zinc-700">{p}</motion.p>
              ))}
            </div>

            <div className="mt-12 border-t border-zinc-200 pt-8">
              <p className="text-[13px] text-zinc-600">Whyzzer UG</p>
              <motion.svg initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }} viewBox="0 0 200 60" className="mt-2 h-14 w-44">
                <motion.path d="M12 46 C 18 8, 30 8, 30 30 C 30 50, 20 52, 22 34 C 24 16, 40 14, 44 40 C 46 52, 56 50, 58 34 C 60 14, 74 12, 78 38 C 80 50, 90 50, 96 36 C 104 18, 116 20, 124 40 C 130 52, 142 46, 150 30" fill="none" stroke="#1f2937" strokeWidth="2.2" strokeLinecap="round" />
              </motion.svg>
              <p className="mt-1 text-[13.5px] font-semibold text-zinc-900">{L.author}</p>
              <p className="text-[12px] text-zinc-500">{L.authorRole}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-wrap justify-center gap-3">
          <motion.a href={L.file} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-full border border-white/25 bg-white/95 px-6 py-2.5 text-[13px] font-medium text-zinc-900">View original PDF ↗</motion.a>
          <motion.a href={L.file} download whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-full border border-white/[0.14] bg-white/[0.05] px-6 py-2.5 text-[13px] font-medium text-zinc-200 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.09]">Download letter</motion.a>
        </motion.div>
      </div>
    </section>
  );
}