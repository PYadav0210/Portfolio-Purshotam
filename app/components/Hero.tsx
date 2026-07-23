"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { profile } from "../data/content";

const container: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.25 } } };
const item: Variants = { hidden: { opacity: 0, y: 26, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

const roles = ["Data Strategist", "Frontend Developer", "SEO Analyst"];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const letters = profile.name.split("");

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(253,230,138,0.07), transparent 70%)` }} />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center">
        <motion.div variants={item} className="mb-8 flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-1.5 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-zinc-300">{profile.location} — open to opportunities</span>
        </motion.div>

        <motion.div variants={item} className="mb-6 flex h-5 items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span key={roleIndex} initial={{ y: 20, opacity: 0, filter: "blur(6px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={{ y: -20, opacity: 0, filter: "blur(6px)" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="text-[11px] font-medium uppercase tracking-[0.4em] text-amber-100/70">{roles[roleIndex]}</motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.h1 animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="flex flex-wrap justify-center bg-gradient-to-r from-zinc-400 via-white via-30% to-zinc-400 bg-[length:200%_auto] bg-clip-text text-5xl font-light leading-[1.02] tracking-[-0.04em] text-transparent sm:text-7xl md:text-[7.5rem]">
          {letters.map((char, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 60, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55 + i * 0.045, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>
          ))}
        </motion.h1>

        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="mt-8 h-px w-56 bg-gradient-to-r from-transparent via-amber-100/40 to-transparent" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.9 }} className="mt-8 max-w-xl text-[15px] font-light leading-relaxed text-zinc-400 sm:text-base">I work between <span className="text-zinc-100">data</span> and <span className="text-zinc-100">the web</span> — SEO, analytics and Python automation, with frontend development in React and TypeScript.</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75, duration: 0.9 }} className="mt-11 flex flex-col gap-3 sm:flex-row">
          <motion.a href="#projects" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="rounded-full border border-white/25 bg-white/95 px-7 py-3 text-sm font-medium text-zinc-900 shadow-[0_8px_30px_rgba(255,255,255,0.12)]">View my work</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="rounded-full border border-white/[0.14] bg-white/[0.05] px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.09]">Get in touch</motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 0.9 }} className="mt-10 flex items-center gap-6 text-[13px] text-zinc-500">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-zinc-200">GitHub</a>
          <span className="h-3 w-px bg-zinc-800" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-zinc-200">LinkedIn</a>
          <span className="h-3 w-px bg-zinc-800" />
          <a href={profile.resume} target="_blank" rel="noreferrer" className="transition hover:text-zinc-200">Resume</a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.9 }} className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-10 w-px bg-gradient-to-b from-zinc-400 to-transparent" />
      </motion.div>
    </section>
  );
}