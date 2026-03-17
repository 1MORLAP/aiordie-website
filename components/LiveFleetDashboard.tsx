"use client";

import { useEffect, useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Agent = {
  name: string;
  unit: string;
  lane: string;
  status: string;
};

const AGENTS: Agent[] = [
  { name: "AI CMO", unit: "AI or Die", lane: "Content + web growth", status: "ACTIVE" },
  { name: "AI CEO", unit: "HQ", lane: "Daily strategic ops", status: "ACTIVE" },
  { name: "AI CTO", unit: "HQ", lane: "Infra + incident coverage", status: "ACTIVE" },
  { name: "AI CRO", unit: "HQ", lane: "Pipeline + follow-up", status: "ACTIVE" },
  { name: "AI CLO", unit: "NEXORA", lane: "Contract risk review", status: "ACTIVE" },
  { name: "AI PMO", unit: "Multi-unit", lane: "Project orchestration", status: "ACTIVE" },
  { name: "AI CPO", unit: "Multi-unit", lane: "Product discovery + delivery", status: "ACTIVE" },
  { name: "AI HRO", unit: "Multi-unit", lane: "Recruiting + onboarding", status: "ACTIVE" },
];

export default function LiveFleetDashboard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const clock = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now),
    [now]
  );

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 md:p-7 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)]">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
            Live Fleet · Headquarters
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--text-muted)]">
          Synced <span className="text-[var(--text-primary)]">{clock}</span>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {AGENTS.map((agent, idx) => (
          <ScrollReveal key={agent.name} delayMs={idx * 80} direction={idx % 2 ? "right" : "up"}>
            <article className="group rounded-xl border border-[var(--border)] bg-[var(--bg)]/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[var(--bg)]">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="font-space-grotesk text-lg font-bold text-[var(--text-primary)]">
                  {agent.name}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {agent.status}
                </span>
              </div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {agent.unit}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">{agent.lane}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
