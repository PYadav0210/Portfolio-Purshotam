"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, type Variants } from "framer-motion";
import { profile } from "../data/content";
import { Magnetic } from "./Motion";

const container: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const item: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const rotating = ["data pipelines", "clean interfaces", "smart automations", "search rankings"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 20 });
  const sry = useSpring(ry, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % rotating.length), 2600);
    return () => clearInterval(id);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <section id="top" onMouseMove={onMove} onMouseLeave={reset} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-6">
      {/* background glows */}
      <motion.div aria-hidden animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-[12%] top-[18%] z-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      <motion.div aria-hidden animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.25, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute right-[12%] bottom-[18%] z-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* floating content — tilts in 3D, no box */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1600, transformStyle: "preserve-3d" }}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center"
      >
        <motion.div variants={item} style={{ transform: "translateZ(30px)" }} className="mb-8 flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10.5px] font-medium tracking-wide text-zinc-300 sm:text-[11px]">{profile.location} — open to opportunities</span>
        </motion.div>

        <motion.p variants={item} style={{ transform: "translateZ(40px)" }} className="mb-4 text-[13px] font-light text-zinc-500 sm:text-sm">Hi, I&apos;m</motion.p>

        <motion.h1 variants={item} style={{ transform: "translateZ(70px)" }} className="font-semibold leading-[0.98] tracking-[-0.045em] text-white" style={{ fontSize: "clamp(3rem, 15vw, 8rem)", transform: "translateZ(70px)" }}>
          <span className="block">Purshotam</span>
          <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Yadav</span>
        </motion.h1>

        <motion.div variants={item} style={{ transform: "translateZ(50px)" }} className="mt-7 flex flex-wrap items-center justify-center gap-x-2 text-[16px] font-light text-zinc-400 sm:text-xl md:text-2xl">
          <span>I build</span>
          <span className="relative inline-flex h-[1.5em] items-center overflow-hidden text-left">
            <AnimatePresence mode="wait">
              <motion.span key={wordIndex} initial={{ y: "100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text font-normal text-transparent">
                {rotating[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.div variants={item} style={{ transform: "translateZ(60px)" }} className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Magnetic>
            <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="group relative block overflow-hidden rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 p-px shadow-[0_10px_35px_-8px_rgba(167,139,250,0.55)]">
              <span className="relative block rounded-full bg-[#0b0b0f] px-7 py-3 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-transparent group-hover:text-zinc-900">View my work</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block rounded-full border border-white/[0.14] bg-white/[0.05] px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-xl transition-colors hover:border-cyan-400/40 hover:bg-white/[0.1]">Get in touch</motion.a>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} style={{ transform: "translateZ(30px)" }} className="mt-9 flex items-center gap-5 text-[12.5px] text-zinc-500 sm:gap-6 sm:text-[13px]">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-violet-300">GitHub</a>
          <span className="h-3 w-px bg-zinc-800" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300">LinkedIn</a>
          <span className="h-3 w-px bg-zinc-800" />
          <a href={profile.resume} target="_blank" rel="noreferrer" className="transition-colors hover:text-emerald-300">Resume</a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.9 }} className="absolute bottom-8 z-10 hidden flex-col items-center gap-2 sm:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-10 w-px bg-gradient-to-b from-fuchsia-400 to-transparent" />
      </motion.div>
    </section>
  );
}