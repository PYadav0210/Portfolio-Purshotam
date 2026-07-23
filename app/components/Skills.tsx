"use client";

import { motion, type Variants } from "framer-motion";
import { skillCategories } from "../data/content";
import { glass, sheen, label, accents, type AccentKey } from "./Glass";
import { Tilt, Shine } from "./Motion";

const order: AccentKey[] = ["violet", "rose", "emerald", "cyan"];
const card: Variants = { hidden: { opacity: 0, y: 44 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } };
const pill: Variants = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 24 } } };
const pillGroup: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } } };

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>02 — Skills</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">What I work with</h2>
          <p className="mt-4 max-w-2xl text-sm font-light text-zinc-400 sm:text-base">Grouped by what I actually use them for — building, designing, analysing and engineering.</p>
        </motion.div>

        <motion.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const a = accents[order[ci % order.length]];
            return (
              <motion.div key={cat.title} variants={card}>
                <Tilt className={`${glass} ${a.border} ${a.shadow} group h-full p-6 transition-all duration-500 sm:p-9`}>
                  <span className={sheen} />
                  <Shine />
                  <span className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-transparent blur-3xl transition-all duration-700 ${a.glow}`} />
                  <div className="relative flex items-center gap-2.5">
                    <motion.span animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: ci * 0.4 }} className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                    <span className={`text-[9.5px] font-medium uppercase tracking-[0.28em] sm:text-[10px] ${a.text}`}>{cat.tag}</span>
                  </div>
                  <h3 className="relative mt-3.5 text-xl font-light tracking-tight text-zinc-50 sm:text-2xl">{cat.title}</h3>
                  <p className="relative mt-2 text-[13px] font-light text-zinc-500 sm:text-sm">{cat.desc}</p>
                  <motion.div variants={pillGroup} className="relative mt-7 flex flex-wrap gap-2">
                    {cat.items.map((s) => (
                      <motion.span key={s} variants={pill} whileHover={{ y: -4, scale: 1.07 }} className={`cursor-default rounded-xl border border-white/[0.09] bg-white/[0.05] px-3 py-1.5 text-[11.5px] font-light text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 sm:text-[12.5px] ${a.border} hover:text-white`}>{s}</motion.span>
                    ))}
                  </motion.div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}