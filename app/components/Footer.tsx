"use client";

import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-[12.5px] font-light text-zinc-600 sm:flex-row">
        <span suppressHydrationWarning>© {new Date().getFullYear()} {profile.name} — {profile.location}</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-zinc-300">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-zinc-300">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="transition hover:text-zinc-300">Resume</a>
        </div>
      </div>
    </footer>
  );
}