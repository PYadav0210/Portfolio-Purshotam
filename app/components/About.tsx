"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { profile, stats, languages } from "../data/content";
import { glass, sheen, label } from "./Glass";
import { Shine } from "./Motion";

const barGrad = ["from-violet-400 to-fuchsia-400", "from-fuchsia-400 to-rose-400", "from-cyan-400 to-sky-400", "from-emerald-400 to-teal-400"];

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
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const words = profile.bio.split(" ");

  return (
    <section id="about" ref={ref} className="relative scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div style={{ y }} className="lg:sticky lg:top-32 lg:self-start">
          <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>01 — About</span>
          <h2 className="mt-5 text-3xl font-light leading-[1.15] tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">{profile.headline}</h2>

          <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} whileHover={{ y: -5 }} className={`${glass} group p-4 sm:p-5`}>
                <span className={sheen} />
                <Shine />
                <div className={`bg-gradient-to-br ${barGrad[i]} bg-clip-text text-2xl font-light tracking-tight text-transparent sm:text-3xl`}><Counter to={s.value} suffix={s.suffix} /></div>
                <div className="mt-1.5 text-[9.5px] leading-tight text-zinc-500 sm:text-[10px]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <p className="flex flex-wrap text-[15px] font-light leading-[1.7] text-zinc-400 sm:text-[17px] sm:leading-[1.75]">
            {words.map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.012, ease: "easeOut" }} className="mr-[0.32em]">{w}</motion.span>
            ))}
          </p>

          <div className={`${glass} mt-12 p-6 sm:p-8`}>
            <span className={sheen} />
            <h3 className="mb-6 text-[10.5px] font-medium uppercase tracking-[0.25em] text-zinc-500 sm:text-[11px]">Languages</h3>
            <div className="space-y-5 sm:space-y-6">
              {languages.map((l, i) => (
                <motion.div key={l.name} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group">
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-[13.5px] font-light text-zinc-200 transition-colors group-hover:text-white sm:text-sm">{l.name}</span>
                    <span className="text-[10.5px] text-zinc-500 sm:text-[11px]">{l.level}</span>
                  </div>
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.pct}%` }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.4, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className={`h-full rounded-full bg-gradient-to-r ${barGrad[i]}`} />
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