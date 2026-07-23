"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "../data/content";
import { glass, sheen, label, accents, type AccentKey } from "./Glass";
import { Shine } from "./Motion";

const order: AccentKey[] = ["violet", "rose", "cyan", "emerald"];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });

  return (
    <section id="experience" className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>03 — Experience</span>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">The road so far</h2>
          <p className="mt-4 max-w-2xl text-sm font-light text-zinc-400 sm:text-base">From frontend teams in Kathmandu to data strategy in Bremen.</p>
        </motion.div>

        <div ref={ref} className="relative mt-12 pl-6 sm:mt-16 sm:pl-12">
          <div className="absolute left-[3px] top-3 h-full w-px bg-white/[0.07]" />
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-[3px] top-3 h-full w-px origin-top bg-gradient-to-b from-violet-400 via-fuchsia-400 via-50% to-cyan-400" />

          <div className="space-y-5 sm:space-y-6">
            {experience.map((job, i) => {
              const a = accents[order[i % order.length]];
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="relative">
                  <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 }} className={`absolute -left-6 top-7 h-[7px] w-[7px] rounded-full ring-4 sm:-left-12 ${a.dot} ${a.ring}`} />
                  <motion.div whileHover={{ y: -4 }} className={`${glass} ${a.border} ${a.shadow} group p-6 transition-all duration-500 sm:p-8`}>
                    <span className={sheen} />
                    <Shine />
                    <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <h3 className="text-lg font-light tracking-tight text-zinc-50 sm:text-xl">{job.role}</h3>
                      <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1 text-[10.5px] text-zinc-400 sm:text-[11px]">{job.period}</span>
                    </div>
                    <p className={`relative mt-2 text-[12.5px] sm:text-[13px] ${a.text}`}>{job.company} <span className="text-zinc-600">· {job.location}</span></p>
                    <ul className="relative mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                      {job.points.map((p, j) => (
                        <li key={j} className="flex gap-3 text-[12.5px] font-light leading-relaxed text-zinc-400 sm:gap-3.5 sm:text-[13.5px]"><span className={`mt-[8px] h-px w-2.5 shrink-0 transition-all duration-500 group-hover:w-4 sm:w-3 ${a.dot}`} />{p}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}