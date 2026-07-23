export const glass = "relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl md:backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.10)]";
export const glassHover = "transition-all duration-500 hover:border-white/[0.2] hover:bg-white/[0.07]";
export const sheen = "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent";
export const label = "bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent";

export const accents = {
  violet: { text: "text-violet-300", dot: "bg-violet-400", ring: "ring-violet-400/20", glow: "group-hover:bg-violet-500/25", border: "hover:border-violet-400/50", grad: "from-violet-400 to-fuchsia-400", shadow: "hover:shadow-[0_12px_45px_-8px_rgba(167,139,250,0.35)]" },
  cyan: { text: "text-cyan-300", dot: "bg-cyan-400", ring: "ring-cyan-400/20", glow: "group-hover:bg-cyan-500/25", border: "hover:border-cyan-400/50", grad: "from-cyan-400 to-sky-400", shadow: "hover:shadow-[0_12px_45px_-8px_rgba(34,211,238,0.35)]" },
  amber: { text: "text-amber-300", dot: "bg-amber-400", ring: "ring-amber-400/20", glow: "group-hover:bg-amber-500/25", border: "hover:border-amber-400/50", grad: "from-amber-400 to-orange-400", shadow: "hover:shadow-[0_12px_45px_-8px_rgba(251,191,36,0.35)]" },
  emerald: { text: "text-emerald-300", dot: "bg-emerald-400", ring: "ring-emerald-400/20", glow: "group-hover:bg-emerald-500/25", border: "hover:border-emerald-400/50", grad: "from-emerald-400 to-teal-400", shadow: "hover:shadow-[0_12px_45px_-8px_rgba(52,211,153,0.35)]" },
  rose: { text: "text-rose-300", dot: "bg-rose-400", ring: "ring-rose-400/20", glow: "group-hover:bg-rose-500/25", border: "hover:border-rose-400/50", grad: "from-rose-400 to-pink-400", shadow: "hover:shadow-[0_12px_45px_-8px_rgba(251,113,133,0.35)]" },
} as const;

export type AccentKey = keyof typeof accents;