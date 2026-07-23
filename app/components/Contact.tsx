"use client";

import { motion } from "framer-motion";
import { profile } from "../data/content";
import { label } from "./Glass";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden py-40 text-center">
      <motion.div aria-hidden animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.26, 0.12] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/25 blur-[140px]" />

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-3xl px-6">
        <span className={`text-[11px] font-medium uppercase tracking-[0.3em] ${label}`}>09 — Contact</span>
        <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-zinc-50 sm:text-6xl">Let&apos;s build something.</h2>
        <p className="mx-auto mt-7 max-w-lg font-light text-zinc-400">I&apos;m open to frontend and data roles in Germany. Reach out — I read everything.</p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <motion.a href={`mailto:${profile.email}`} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="rounded-full border border-white/25 bg-white/95 px-7 py-3 text-sm font-medium text-zinc-900 shadow-[0_8px_30px_rgba(255,255,255,0.12)]">Email me</motion.a>
          <motion.a href={profile.resume} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="rounded-full border border-white/[0.14] bg-white/[0.05] px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.09]">Download CV</motion.a>
          <motion.a href={profile.linkedin} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="rounded-full border border-white/[0.14] bg-white/[0.05] px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.09]">LinkedIn</motion.a>
          <motion.a href={profile.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="rounded-full border border-white/[0.14] bg-white/[0.05] px-7 py-3 text-sm font-medium text-zinc-100 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.09]">GitHub</motion.a>
        </div>
      </motion.div>
    </section>
  );
}