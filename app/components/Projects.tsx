"use client";

import { motion, useMotionValue, type Variants } from "framer-motion";
import { projects } from "../data/content";
import { glass, sheen, label, accents, type AccentKey } from "./Glass";
import { Tilt, Shine } from "./Motion";

const order: AccentKey[] = ["violet", "cyan", "emerald", "rose", "amber", "violet"];
const item: Variants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } };
const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };

function Card({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const a = accents[order[index % order.length]];
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div variants={item} className={p.featured ? "lg:col-span-3" : "lg:col-span-2"}>
      <Tilt max={5} className={`${glass} ${a.border} ${a.shadow} group flex h-full flex-col p-6 transition-all duration-500 sm:p-8`}>
        <span className={sheen} />
        <Shine />
        <motion.div onMouseMove={onMove} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(340px circle at var(--x) var(--y), rgba(255,255,255,0.07), transparent 70%)", ["--x" as string]: mx, ["--y" as string]: my }} />

        <div className="relative flex items-center justify-between gap-3">
          <span className="font-mono text-[10.5px] text-zinc-600 sm:text-[11px]">{String(index + 1).padStart(2, "0")}</span>
          {p.badge && <span className={`rounded-full bg-gradient-to-r ${a.grad} bg-clip-text px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-transparent ring-1 ring-inset ring-white/10 sm:text-[9.5px]`}>{p.badge}</span>}
        </div>

        <h3 className={`relative mt-4 font-light tracking-tight text-zinc-50 transition-colors duration-300 group-hover:${a.text} ${p.featured ? "text-xl sm:text-2xl" : "text-lg"}`}>{p.title}</h3>
        <p className="relative mt-3 flex-1 text-[12.5px] font-light leading-relaxed text-zinc-400 sm:text-[13.5px]">{p.desc}</p>

        <div className="relative mt-6 flex flex-wrap gap-1.5 sm:gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10.5px] font-light text-zinc-400 sm:text-[11px]">{t}</span>
          ))}
        </div>

        <div className="relative mt-7 flex flex-wrap gap-2.5 sm:gap-3">
          {p.live && <motion.a href={p.live} target="_blank" rel="noreferrer" whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${a.grad} px-4 py-2 text-[11.5px] font-semibold text-zinc-900 sm:text-[12px]`}>Live demo ↗</motion.a>}
          {p.href && <motion.a href={p.href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} className={`inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.05] px-4 py-2 text-[11.5px] font-medium text-zinc-300 backdrop-blur-xl transition-colors hover:text-white sm:text-[12px] ${a.border}`}>GitHub →</motion.a>}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>06 — Projects</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">Selected work</h2>
          <p className="mt-4 max-w-2xl text-sm font-light text-zinc-400 sm:text-base">Data automation, full-stack web and open-source components.</p>
        </motion.div>

        <motion.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}