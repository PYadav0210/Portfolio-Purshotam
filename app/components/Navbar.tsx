"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Thesis", id: "thesis" },
  { name: "Projects", id: "projects" },
  { name: "Reference", id: "reference" },
  { name: "Contact", id: "contact" },
];

const shell = "relative overflow-hidden rounded-full border backdrop-blur-xl md:backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.18)]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const bg = scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)";
  const bd = scrolled ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex justify-start">
          <motion.a href="#top" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1, backgroundColor: bg, borderColor: bd }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className={`${shell} group flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5`}>
            <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <motion.span whileHover={{ rotate: 14, scale: 1.08 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-300 via-fuchsia-300 to-cyan-300 text-[12px] font-bold text-zinc-900 shadow-[0_4px_14px_-2px_rgba(167,139,250,0.6)]">P</motion.span>
            <span className="relative hidden whitespace-nowrap text-[13.5px] font-medium tracking-tight text-zinc-100 sm:block">Purshotam</span>
          </motion.a>
        </div>

        <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1, backgroundColor: bg, borderColor: bd }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className={`${shell} hidden items-center gap-0.5 px-2 py-2 lg:flex`}>
          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="relative whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] transition-colors duration-300 xl:px-3.5 xl:text-[12.5px]">
              {active === link.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/25 via-fuchsia-400/25 to-cyan-400/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" transition={{ type: "spring", stiffness: 340, damping: 30 }} />}
              <span className={`relative z-10 ${active === link.id ? "text-white" : "text-zinc-400 hover:text-zinc-100"}`}>{link.name}</span>
            </a>
          ))}
        </motion.nav>

        <div className="hidden lg:block" />

        <div className="flex justify-end lg:hidden">
          <motion.button onClick={() => setOpen(!open)} aria-label="Toggle menu" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1, backgroundColor: bg, borderColor: bd }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} whileTap={{ scale: 0.92 }} className={`${shell} flex h-11 w-11 flex-col items-center justify-center gap-1.5`}>
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-px w-5 bg-zinc-200" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }} className="block h-px w-5 bg-zinc-200" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-3 max-w-7xl lg:hidden">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.07] p-3 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.16)]">
              <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <div className="relative grid grid-cols-2 gap-1.5">
                {links.map((link, i) => (
                  <motion.a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="rounded-2xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12]">{link.name}</motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}