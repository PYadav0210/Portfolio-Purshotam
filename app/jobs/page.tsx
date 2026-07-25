"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { glass, sheen } from "../components/Glass";

const REFRESH_MS = 5 * 60 * 1000;

const SOURCES = [
  {
    name: "Arbeitnow",
    fetch: async () => {
      const all = [];
      for (let page = 1; page <= 4; page++) {
        try {
          const r = await fetch(`https://www.arbeitnow.com/api/job-board-api?page=${page}`);
          const d = await r.json();
          all.push(...(d.data || []));
        } catch { break; }
      }
      return all.map((j) => ({
        id: `an-${j.slug}`,
        title: j.title,
        company: j.company_name,
        location: j.location || "Germany",
        remote: !!j.remote,
        url: j.url,
        tags: j.tags || [],
        posted: j.created_at,
        source: "Arbeitnow",
      }));
    },
  },
  {
    name: "Remotive",
    fetch: async () => {
      try {
        const r = await fetch("https://remotive.com/api/remote-jobs?category=software-dev&limit=80");
        const d = await r.json();
        return (d.jobs || []).map((j) => ({
          id: `rm-${j.id}`,
          title: j.title,
          company: j.company_name,
          location: j.candidate_required_location || "Remote",
          remote: true,
          url: j.url,
          tags: j.tags || [],
          posted: Math.floor(new Date(j.publication_date).getTime() / 1000),
          source: "Remotive",
        }));
      } catch { return []; }
    },
  },
  {
    name: "Jobicy",
    fetch: async () => {
      try {
        const r = await fetch("https://jobicy.com/api/v2/remote-jobs?count=50&industry=dev");
        const d = await r.json();
        return (d.jobs || []).map((j) => ({
          id: `jb-${j.id}`,
          title: j.jobTitle,
          company: j.companyName,
          location: j.jobGeo || "Remote",
          remote: true,
          url: j.url,
          tags: (j.jobIndustry || []).concat(j.jobType || []),
          posted: Math.floor(new Date(j.pubDate).getTime() / 1000),
          source: "Jobicy",
        }));
      } catch { return []; }
    },
  },
];

const FIELDS = [
  { name: "All", match: () => true },
  { name: "Frontend", match: (t) => /react|angular|vue|frontend|javascript|typescript|ui/i.test(t) },
  { name: "Backend", match: (t) => /backend|node|java|python|php|golang|api|django/i.test(t) },
  { name: "Data", match: (t) => /data|analyst|sql|python|bi|machine learning|scientist/i.test(t) },
  { name: "DevOps", match: (t) => /devops|cloud|aws|azure|kubernetes|docker|infrastructure/i.test(t) },
  { name: "Design", match: (t) => /design|ux|ui|figma/i.test(t) },
];

const sourceColors = {
  Arbeitnow: "text-violet-300 border-violet-400/30 bg-violet-400/10",
  Remotive: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  Jobicy: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
};

function daysSince(unix) { return Math.floor((Date.now() / 1000 - unix) / 86400); }
function timeAgo(unix) {
  const d = daysSince(unix);
  if (d <= 0) return "today";
  if (d === 1) return "1 day ago";
  return `${d} days ago`;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [now, setNow] = useState(Date.now());
  const [newCount, setNewCount] = useState(0);
  const [applied, setApplied] = useState(new Set());
  const [source, setSource] = useState("All");
  const [field, setField] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(20);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
      setApplied(new Set(saved));
    } catch {}
  }, []);

  const toggleApplied = (id) => {
    setApplied((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("appliedJobs", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const fetchJobs = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    const results = await Promise.all(SOURCES.map((s) => s.fetch()));
    const merged = results.flat();
    const unique = Array.from(new Map(merged.map((j) => [j.id, j])).values());
    unique.sort((a, b) => b.posted - a.posted);
    setJobs((prev) => {
      if (prev.length > 0) {
        const prevIds = new Set(prev.map((j) => j.id));
        const added = unique.filter((j) => !prevIds.has(j.id)).length;
        if (added > 0) setNewCount(added);
      }
      return unique;
    });
    setLastUpdated(new Date());
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchJobs();
    const id = setInterval(() => fetchJobs(), REFRESH_MS);
    return () => clearInterval(id);
  }, [fetchJobs]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const secondsAgo = lastUpdated ? Math.floor((now - lastUpdated.getTime()) / 1000) : 0;
  const freshness = secondsAgo < 60 ? `${secondsAgo}s ago` : `${Math.floor(secondsAgo / 60)}m ${secondsAgo % 60}s ago`;

  const filtered = useMemo(() => {
    const fieldFn = FIELDS.find((f) => f.name === field)?.match || (() => true);
    return jobs.filter((j) => {
      if (source !== "All" && j.source !== source) return false;
      const haystack = `${j.title} ${(j.tags || []).join(" ")}`;
      if (!fieldFn(haystack)) return false;
      if (search && !`${j.title} ${j.company}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [jobs, source, field, search]);

  const counts = useMemo(() => {
    const c = { All: jobs.length };
    SOURCES.forEach((s) => { c[s.name] = jobs.filter((j) => j.source === s.name).length; });
    return c;
  }, [jobs]);

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
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">Live {lastUpdated ? `· updated ${freshness}` : ""}</span>
        </div>
        <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-light tracking-tight text-transparent sm:text-5xl">Job Market</h1>
        <p className="mt-3 max-w-xl font-light text-zinc-400">Live tech jobs from multiple sources, auto-refreshed every 5 minutes. Mark jobs as applied to keep track (saved on your device).</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className={`${glass} px-5 py-3`}>
            <span className={sheen} />
            <span className="text-2xl font-light tracking-tight text-white">{filtered.length}</span>
            <span className="ml-2 text-xs text-zinc-500">jobs shown</span>
          </div>
          {newCount > 0 ? <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">+{newCount} new since last check</motion.span> : null}
          {applied.size > 0 ? <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">{applied.size} marked applied</span> : null}
          <button onClick={() => fetchJobs(true)} disabled={refreshing} className="ml-auto flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-[13px] text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white disabled:opacity-50">
            <motion.span animate={refreshing ? { rotate: 360 } : {}} transition={refreshing ? { repeat: Infinity, duration: 0.8, ease: "linear" } : {}} className="inline-block">↻</motion.span>
            {refreshing ? "Refreshing…" : "Refresh"}
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <button onClick={() => { setSource("All"); setVisible(20); }} className={`rounded-full border px-4 py-1.5 text-[13px] transition-colors ${source === "All" ? "border-white/40 bg-white/10 text-white" : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white"}`}>All Sources ({counts.All})</button>
          {SOURCES.map((s) => (
            <button key={s.name} onClick={() => { setSource(s.name); setVisible(20); }} className={`rounded-full border px-4 py-1.5 text-[13px] transition-colors ${source === s.name ? sourceColors[s.name] : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white"}`}>{s.name} ({counts[s.name] || 0})</button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {FIELDS.map((f) => (
            <button key={f.name} onClick={() => { setField(f.name); setVisible(20); }} className={`rounded-full border px-3.5 py-1 text-[12px] transition-colors ${field === f.name ? "border-violet-400/50 bg-violet-400/15 text-white" : "border-white/10 bg-white/[0.03] text-zinc-500 hover:text-white"}`}>{f.name}</button>
          ))}
        </div>
        <input value={search} onChange={(e) => { setSearch(e.target.value); setVisible(20); }} placeholder="Search title or company" className="mt-4 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none focus:border-violet-400/50" />
        {loading ? (
          <p className="mt-16 text-center text-sm text-zinc-500">Loading live jobs from all sources…</p>
        ) : (
          <>
            <p className="mt-8 text-sm text-zinc-500">{filtered.length} jobs found</p>
            <div className="mt-4 space-y-3">
              {filtered.slice(0, visible).map((job, i) => {
                const isApplied = applied.has(job.id);
                const d = daysSince(job.posted);
                return (
                  <motion.div key={job.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: Math.min(i, 10) * 0.03 }} className={`${glass} group flex flex-col gap-3 p-5 transition-colors hover:border-violet-400/40 sm:flex-row sm:items-center sm:justify-between ${isApplied ? "opacity-60" : ""}`}>
                    <span className={sheen} />
                    <div className="relative min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-[15px] font-medium text-white group-hover:text-violet-200">{job.title}</h3>
                        {d <= 3 ? <span className="rounded-md border border-emerald-400/25 bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-emerald-300">New</span> : null}
                        {isApplied ? <span className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-zinc-300">Applied</span> : null}
                      </div>
                      <p className="mt-1 truncate text-[13px] text-zinc-500">{job.company} · {job.location} · {timeAgo(job.posted)}</p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        <span className={`rounded-md border px-2 py-0.5 text-[10px] ${sourceColors[job.source]}`}>{job.source}</span>
                        {job.remote ? <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">Remote</span> : null}
                        {(job.tags || []).slice(0, 2).map((t) => <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">{t}</span>)}
                      </div>
                    </div>
                    <div className="relative flex shrink-0 gap-2">
                      <button onClick={() => toggleApplied(job.id)} className={`rounded-full border px-3 py-2 text-[12px] font-medium transition-colors ${isApplied ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300" : "border-white/15 bg-white/5 text-zinc-400 hover:text-white"}`}>{isApplied ? "✓ Applied" : "Mark applied"}</button>
                      <a href={job.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-medium text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white">Apply →</a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {visible < filtered.length ? (
              <div className="mt-8 text-center">
                <button onClick={() => setVisible((v) => v + 20)} className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-2.5 text-sm text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white">Show more</button>
              </div>
            ) : null}
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
