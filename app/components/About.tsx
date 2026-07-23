"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { profile, stats, languages } from "../data/content";
import { glass, sheen, label } from "./Glass";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const words = profile.bio.split(" ");

  return (
    <section id="about" ref={ref} className="relative scroll-mt-28 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <motion.div style={{ y }} className="lg:sticky lg:top-32 lg:self-start">
          <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>01 — About</span>
          <h2 className="mt-6 text-4xl font-light leading-[1.15] tracking-[-0.03em] text-zinc-50 sm:text-5xl">{profile.headline}</h2>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className={`${glass} p-5`}>
                <span className={sheen} />
                <div className="text-3xl font-light tracking-tight text-zinc-50"><Counter to={s.value} suffix={s.suffix} /></div>
                <div className="mt-1.5 text-[10px] leading-tight text-zinc-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <p className="flex flex-wrap text-[17px] font-light leading-[1.75] text-zinc-400">
            {words.map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: i * 0.014, ease: "easeOut" }} className="mr-[0.32em]">{w}</motion.span>
            ))}
          </p>

          <div className={`${glass} mt-14 p-8`}>
            <span className={sheen} />
            <h3 className="mb-7 text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">Languages</h3>
            <div className="space-y-6">
              {languages.map((l, i) => (
                <motion.div key={l.name} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <div className="mb-2.5 flex items-baseline justify-between">
                    <span className="text-sm font-light text-zinc-200">{l.name}</span>
                    <span className="text-[11px] text-zinc-500">{l.level}</span>
                  </div>
                  <div className="h-px w-full bg-white/[0.07]">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.pct}%` }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.4, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="h-px bg-gradient-to-r from-amber-100/70 to-sky-200/50" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}