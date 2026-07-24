"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { glass, sheen, label } from "../components/Glass";

type Job = {
  slug: string;
  title: string;
  company_name: string;
  location: string;
  remote: boolean;
  url: string;
  tags: string[];
  created_at: number;
};

const FIELDS = [
  { name: "All", match: () => true },
  { name: "Frontend", match: (t: string) => /react|angular|vue|frontend|javascript|typescript|ui/i.test(t) },
  { name: "Backend", match: (t: string) => /backend|node|java|python|php|golang|api|django/i.test(t) },
  { name: "Data", match: (t: string) => /data|analyst|sql|python|bi|machine learning|scientist/i.test(t) },
  { name: "DevOps", match: (t: string) => /devops|cloud|aws|azure|kubernetes|docker|infrastructure/i.test(t) },
  { name: "Design", match: (t: string) => /design|ux|ui|figma/i.test(t) },
];

function timeAgo(unix: number) {
  const days = Math.floor((Date.now() / 1000 - unix) / 86400);
  if (days <= 0) return "today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [field, setField] = useState("All");
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [visible, setVisible] = useState(20);

  useEffect(() => {
    async function load() {
      const all: Job[] = [];
      for (let page = 1; page <= 4; page++) {
        try {
          const r = await fetch(`https://www.arbeitnow.com/api/job-board-api?page=${page}`);
          const data = await r.json();
          all.push(...(data.data || []));
        } catch {
          break;
        }
      }
      const unique = Array.from(new Map(all.map((j) => [j.slug, j])).values());
      setJobs(unique);
      setLoading(false);
    }
    load();
  }, []);

  const cities = useMemo(() => {
    const counts: Record<string, number> = {};
    jobs.forEach((j) => {
      const c = (j.location || "").split(",")[0].trim();
      if (c) counts[c] = (counts[c] || 0) + 1;
    });
    return ["All", ...Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([c]) => c)];
  }, [jobs]);

  const filtered = useMemo(() => {
    const fieldFn = FIELDS.find((f) => f.name === field)?.match || (() => true);
    return jobs.filter((j) => {
      const haystack = `${j.title} ${(j.tags || []).join(" ")}`;
      if (!fieldFn(haystack)) return false;
      if (city !== "All" && !(j.location || "").toLowerCase().startsWith(city.toLowerCase())) return false;
      if (search && !`${j.title} ${j.company_name}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [jobs, field, city, search]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08080a] text-zinc-100 antialiased">
      <Navbar />
      <div className="pointer-events-none fixed -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none fixed right-1/4 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[130px]" />

      <section className="relative mx-auto max-w-5xl px-5 pt-32 pb-24 sm:px-6">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">Live · updated hourly</span>
        </div>

        <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-light tracking-tight text-transparent sm:text-5xl">German Tech Job Market</h1>
        <p className="mt-3 max-w-xl font-light text-zinc-400">
          Live tech job listings across Germany, updated hourly. Data from{" "}
          <a href="https://www.arbeitnow.com" target="_blank" rel="noreferrer" className="text-violet-300 hover:underline">Arbeitnow</a>.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FIELDS.map((f) => (
            <button key={f.name} onClick={() => { setField(f.name); setVisible(20); }} className={`rounded-full border px-4 py-1.5 text-[13px] transition-colors ${field === f.name ? "border-violet-400/50 bg-violet-400/15 text-white" : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white"}`}>{f.name}</button>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input value={search} onChange={(e) => { setSearch(e.target.value); setVisible(20); }} placeholder="Search title or company…" className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-violet-400/50" />
          <select value={city} onChange={(e) => { setCity(e.target.value); setVisible(20); }} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 outline-none focus:border-violet-400/50">
            {cities.map((c) => <option key={c} value={c} className="bg-zinc-900">{c}</option>)}
          </select>
        </div>

        {/* Results */}
        {loading ? (
          <p className="mt-16 text-center text-sm text-zinc-500">Loading live jobs…</p>
        ) : (
          <>
            <p className="mt-8 text-sm text-zinc-500">{filtered.length} jobs found</p>
            <div className="mt-4 space-y-3">
              {filtered.slice(0, visible).map((job, i) => (
                <motion.a key={job.slug} href={job.url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: Math.min(i, 10) * 0.03 }} className={`${glass} group flex flex-col gap-2 p-5 transition-colors hover:border-violet-400/40 sm:flex-row sm:items-center sm:justify-between`}>
                  <span className={sheen} />
                  <div className="relative min-w-0">
                    <h3 className="truncate text-[15px] font-medium text-white group-hover:text-violet-200">{job.title}</h3>
                    <p className="mt-1 truncate text-[13px] text-zinc-500">{job.company_name} · {job.location} · {timeAgo(job.created_at)}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {job.remote && <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">Remote</span>}
                      {(job.tags || []).slice(0, 3).map((t) => <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">{t}</span>)}
                    </div>
                  </div>
                  <span className="relative shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-medium text-zinc-200 transition-colors group-hover:border-violet-400/50 group-hover:text-white">Apply →</span>
                </motion.a>
              ))}
            </div>

            {visible < filtered.length && (
              <div className="mt-8 text-center">
                <button onClick={() => setVisible((v) => v + 20)} className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-2.5 text-sm text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white">Show more</button>
              </div>
            )}
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}