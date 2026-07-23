"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "../data/content";
import { glass, glassHover, sheen, label } from "./Glass";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });

  return (
    <section id="experience" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>03 — Experience</span>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-5xl">The road so far</h2>
          <p className="mt-5 max-w-2xl font-light text-zinc-400">From frontend teams in Kathmandu to data strategy in Bremen.</p>
        </motion.div>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-[3px] top-3 h-full w-px bg-white/[0.07]" />
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-[3px] top-3 h-full w-px origin-top bg-gradient-to-b from-amber-100/60 via-sky-200/40 to-transparent" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="relative">
                <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 }} className="absolute -left-8 top-8 h-[7px] w-[7px] rounded-full bg-amber-100/80 ring-[5px] ring-amber-100/10 sm:-left-12" />
                <div className={`${glass} ${glassHover} p-8`}>
                  <span className={sheen} />
                  <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <h3 className="text-xl font-light tracking-tight text-zinc-50">{job.role}</h3>
                    <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1 text-[11px] text-zinc-400">{job.period}</span>
                  </div>
                  <p className="relative mt-2 text-[13px] text-amber-100/70">{job.company} <span className="text-zinc-600">· {job.location}</span></p>
                  <ul className="relative mt-6 space-y-3">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-3.5 text-[13.5px] font-light leading-relaxed text-zinc-400"><span className="mt-[9px] h-px w-3 shrink-0 bg-zinc-700" />{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}