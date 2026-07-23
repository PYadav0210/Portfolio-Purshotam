"use client";

import { motion, type Variants } from "framer-motion";
import { skillCategories } from "../data/content";
import { glass, glassHover, sheen, label } from "./Glass";

const card: Variants = { hidden: { opacity: 0, y: 44, rotateX: -10 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } } };
const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
const pill: Variants = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 24 } } };
const pillGroup: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.18 } } };

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>02 — Skills</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">What I work with</h2>
          <p className="mt-5 max-w-2xl font-light text-zinc-400">Grouped by what I actually use them for — building, designing, analysing and engineering.</p>
        </motion.div>

        <motion.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-16 grid gap-5 md:grid-cols-2" style={{ perspective: 1400 }}>
          {skillCategories.map((cat) => (
            <motion.div key={cat.title} variants={card} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 26 }} className={`${glass} ${glassHover} group p-9`}>
              <span className={sheen} />
              <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-transparent blur-3xl transition-all duration-700 group-hover:bg-amber-100/[0.07]" />
              <span className="relative text-[10px] font-medium uppercase tracking-[0.3em] text-amber-100/60">{cat.tag}</span>
              <h3 className="relative mt-4 text-2xl font-light tracking-tight text-zinc-50">{cat.title}</h3>
              <p className="relative mt-2.5 text-sm font-light text-zinc-500">{cat.desc}</p>
              <motion.div variants={pillGroup} className="relative mt-8 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <motion.span key={s} variants={pill} whileHover={{ y: -3, scale: 1.06 }} className="cursor-default rounded-xl border border-white/[0.09] bg-white/[0.05] px-3.5 py-1.5 text-[12.5px] font-light text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-white/25 hover:text-white">{s}</motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}