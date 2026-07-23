"use client";

import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-[11.5px] font-light text-zinc-600 sm:flex-row sm:text-[12.5px]">
        <span suppressHydrationWarning>© {new Date().getFullYear()} {profile.name} — {profile.location}</span>
        <div className="flex gap-5 sm:gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-violet-300">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="transition-colors hover:text-emerald-300">Resume</a>
        </div>
      </div>
    </footer>
  );
}