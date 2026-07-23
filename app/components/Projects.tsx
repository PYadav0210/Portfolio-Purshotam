"use client";

import { motion, useMotionValue, type Variants } from "framer-motion";
import { projects } from "../data/content";
import { glass, glassHover, sheen, label } from "./Glass";

const item: Variants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } };
const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function Card({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div variants={item} onMouseMove={onMove} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 26 }} className={`${glass} ${glassHover} group flex flex-col p-8 ${p.featured ? "md:col-span-3" : "md:col-span-2"}`}>
      <span className={sheen} />
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(360px circle at var(--x) var(--y), rgba(253,230,138,0.09), transparent 70%)", ["--x" as string]: mx, ["--y" as string]: my }} />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[11px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
        {p.badge && <span className="rounded-full border border-amber-100/20 bg-amber-100/[0.06] px-3 py-1 text-[9.5px] font-medium uppercase tracking-[0.18em] text-amber-100/75">{p.badge}</span>}
      </div>

      <h3 className={`relative mt-5 font-light tracking-tight text-zinc-50 ${p.featured ? "text-2xl" : "text-lg"}`}>{p.title}</h3>
      <p className="relative mt-3.5 flex-1 text-[13.5px] font-light leading-relaxed text-zinc-400">{p.desc}</p>

      <div className="relative mt-7 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-light text-zinc-400">{t}</span>
        ))}
      </div>

      <div className="relative mt-8 flex flex-wrap gap-3">
        {p.live && <motion.a href={p.live} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/95 px-4 py-2 text-[12px] font-medium text-zinc-900">Live demo<span>↗</span></motion.a>}
        {p.href && <motion.a href={p.href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.05] px-4 py-2 text-[12px] font-medium text-zinc-300 backdrop-blur-xl transition-colors hover:text-white">GitHub<span>→</span></motion.a>}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>06 — Projects</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">Selected work</h2>
          <p className="mt-5 max-w-2xl font-light text-zinc-400">Data automation, full-stack web and open-source components.</p>
        </motion.div>

        <motion.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}