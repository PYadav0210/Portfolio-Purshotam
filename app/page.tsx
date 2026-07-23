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
  backgroundSize: "56px 56px",
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 });

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08080a] text-zinc-100 antialiased">
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-400 via-fuchsia-400 via-50% to-cyan-400" />
      <Navbar />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]" style={gridStyle} />
      <motion.div aria-hidden animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none fixed -top-40 left-0 z-0 h-[24rem] w-[24rem] rounded-full bg-violet-600/[0.13] blur-[130px] sm:left-1/4 sm:h-[32rem] sm:w-[32rem]" />
      <motion.div aria-hidden animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.25, 1] }} transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none fixed right-0 top-1/3 z-0 h-[22rem] w-[22rem] rounded-full bg-cyan-500/[0.11] blur-[130px] sm:right-1/4 sm:h-[30rem] sm:w-[30rem]" />
      <motion.div aria-hidden animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.3, 1] }} transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 5 }} className="pointer-events-none fixed bottom-0 left-1/3 z-0 hidden h-[26rem] w-[26rem] rounded-full bg-fuchsia-600/[0.09] blur-[130px] sm:block" />

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