"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { profile } from "../data/content";
import { Magnetic } from "./Motion";

const container: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.25 } } };
const item: Variants = { hidden: { opacity: 0, y: 26, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

const roles = ["Data Strategist", "Frontend Developer", "SEO Analyst"];
const roleColor = ["text-violet-300", "text-cyan-300", "text-emerald-300"];

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

  const words = profile.name.split(" ");

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-6">
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block" style={{ background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(167,139,250,0.10), transparent 70%)` }} />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex w-full flex-col items-center">
        <motion.div variants={item} className="mb-7 flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10.5px] font-medium tracking-wide text-zinc-300 sm:text-[11px]">{profile.location} — open to opportunities</span>
        </motion.div>

        <motion.div variants={item} className="mb-6 flex h-5 items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span key={roleIndex} initial={{ y: 20, opacity: 0, filter: "blur(6px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={{ y: -20, opacity: 0, filter: "blur(6px)" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={`text-[10px] font-medium uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.4em] ${roleColor[roleIndex]}`}>{roles[roleIndex]}</motion.span>
          </AnimatePresence>
        </motion.div>

        <h1 className="w-full max-w-full">
          {words.map((word, wi) => (
            <motion.span
              key={wi}
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="block w-full bg-gradient-to-r from-violet-200 via-white via-30% to-cyan-200 bg-[length:200%_auto] bg-clip-text font-light leading-[1.05] tracking-[-0.03em] text-transparent"
              style={{ fontSize: "clamp(2.5rem, 13vw, 7rem)" }}
            >
              {word.split("").map((char, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 50, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.5 + (wi * 5 + i) * 0.04, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="inline-block">{char}</motion.span>
              ))}
            </motion.span>
          ))}
        </h1>

        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="mt-7 h-px w-40 bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent sm:w-56" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.9 }} className="mt-7 max-w-xl text-[14px] font-light leading-relaxed text-zinc-400 sm:text-[15px] md:text-base">I work between <span className="text-violet-300">data</span> and <span className="text-cyan-300">the web</span> — SEO, analytics and Python automation, with frontend development in React and TypeScript.</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75, duration: 0.9 }} className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Magnetic>
            <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="group relative block overflow-hidden rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 p-px shadow-[0_10px_35px_-8px_rgba(167,139,250,0.55)]">
              <span className="relative block rounded-full bg-[#0b0b0f] px-7 py-3 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-transparent group-hover:text-zinc-900">View my work</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block rounded-full border border-white/[0.14] bg-white/[0.05] px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:border-cyan-400/40 hover:bg-white/[0.1]">Get in touch</motion.a>
          </Magnetic>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 0.9 }} className="mt-9 flex items-center gap-5 text-[12.5px] text-zinc-500 sm:gap-6 sm:text-[13px]">
          <a href={profile.github} target="_blank" rel="noreferrer" className="relative transition-colors hover:text-violet-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-violet-400 after:transition-all hover:after:w-full">GitHub</a>
          <span className="h-3 w-px bg-zinc-800" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="relative transition-colors hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">LinkedIn</a>
          <span className="h-3 w-px bg-zinc-800" />
          <a href={profile.resume} target="_blank" rel="noreferrer" className="relative transition-colors hover:text-emerald-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full">Resume</a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.9 }} className="absolute bottom-8 z-10 hidden flex-col items-center gap-2 sm:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-10 w-px bg-gradient-to-b from-fuchsia-400 to-transparent" />
      </motion.div>
    </section>
  );
}