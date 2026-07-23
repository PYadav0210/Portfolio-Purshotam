"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Thesis from "./components/Thesis";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const gridStyle = {
  backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 });

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08080a] text-zinc-100 antialiased">
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-amber-100 via-rose-100 to-sky-200" />
      <Navbar />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]" style={gridStyle} />
      <motion.div aria-hidden animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none fixed -top-40 left-1/4 z-0 h-[32rem] w-[32rem] rounded-full bg-amber-100/[0.07] blur-[150px]" />
      <motion.div aria-hidden animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.25, 1] }} transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none fixed right-1/4 top-1/3 z-0 h-[30rem] w-[30rem] rounded-full bg-sky-200/[0.06] blur-[150px]" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Thesis />
        <Projects />
        <TechStack />
        <Reference />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}