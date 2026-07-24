"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/content";
import { label } from "./Glass";
import { Magnetic } from "./Motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden px-5 py-28 text-center sm:px-6 sm:py-40">
      <motion.div aria-hidden animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.32, 0.15] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-[130px] sm:h-[34rem] sm:w-[34rem]" />
      <motion.div aria-hidden animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.28, 0.12] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/20 blur-[130px] sm:h-[28rem] sm:w-[28rem]" />

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-3xl">
        <span className={`text-[10.5px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${label}`}>09 — Contact</span>
        <motion.h2 animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="mt-5 bg-gradient-to-r from-violet-200 via-white via-30% to-cyan-200 bg-[length:200%_auto] bg-clip-text text-3xl font-light tracking-[-0.03em] text-transparent sm:text-5xl lg:text-6xl">Let&apos;s build something.</motion.h2>
        <p className="mx-auto mt-6 max-w-lg text-sm font-light text-zinc-400 sm:text-base">I&apos;m open to frontend and data roles in Germany. Reach out — I read everything.</p>

        <motion.button onClick={copyEmail} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.05] px-5 py-4 backdrop-blur-xl transition-colors hover:border-violet-400/50 sm:px-7">
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.09] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative select-all text-[13px] font-light text-zinc-100 sm:text-base">{profile.email}</span>
          <span className="relative flex h-6 w-16 items-center justify-center">
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span key="done" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="text-[11px] font-medium text-emerald-300">Copied!</motion.span>
              ) : (
                <motion.span key="copy" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="text-[11px] font-medium text-zinc-500 group-hover:text-violet-300">Copy</motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.button>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <motion.a href={`mailto:${profile.email}?subject=Hello%20Purshotam`} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="group relative block overflow-hidden rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 p-px shadow-[0_10px_35px_-8px_rgba(167,139,250,0.55)]">
              <span className="relative block rounded-full bg-[#0b0b0f] px-6 py-3 text-[13px] font-medium text-white transition-colors duration-300 group-hover:bg-transparent group-hover:text-zinc-900 sm:px-7 sm:text-sm">Open mail app</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href={profile.resume} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block rounded-full border border-white/[0.14] bg-white/[0.05] px-6 py-3 text-[13px] font-medium text-zinc-100 backdrop-blur-xl transition-colors hover:border-emerald-400/50 hover:text-emerald-200 sm:px-7 sm:text-sm">Download CV</motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href={profile.linkedin} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block rounded-full border border-white/[0.14] bg-white/[0.05] px-6 py-3 text-[13px] font-medium text-zinc-100 backdrop-blur-xl transition-colors hover:border-cyan-400/50 hover:text-cyan-200 sm:px-7 sm:text-sm">LinkedIn</motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href={profile.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block rounded-full border border-white/[0.14] bg-white/[0.05] px-6 py-3 text-[13px] font-medium text-zinc-100 backdrop-blur-xl transition-colors hover:border-violet-400/50 hover:text-violet-200 sm:px-7 sm:text-sm">GitHub</motion.a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}