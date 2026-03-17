"use client";

import type { CSSProperties } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type Agent = {
  key: "cos" | "legal" | "finance" | "marketing";
  name: string;
  color: string;
  data: string[];
  network: string;
  networkEnabled: boolean;
};

const agents: Agent[] = [
  {
    key: "cos",
    name: "Chief of Staff (CoS)",
    color: "#14b8a6",
    data: ["/shared (broad read)", "/strategic (rw)"],
    network: "Enabled (coordinates)",
    networkEnabled: true,
  },
  {
    key: "legal",
    name: "Legal Counsel",
    color: "#3b82f6",
    data: ["/legal (rw)", "/shared-business (ro)"],
    network: "Disabled (local docs only)",
    networkEnabled: false,
  },
  {
    key: "finance",
    name: "Financial Analyst",
    color: "#8b5cf6",
    data: ["/financial (rw)", "/shared-business (ro)"],
    network: "Enabled (bank APIs)",
    networkEnabled: true,
  },
  {
    key: "marketing",
    name: "Marketing Specialist",
    color: "#ef4444",
    data: ["/marketing (rw)", "/shared-brand (ro)"],
    network: "Enabled (social APIs)",
    networkEnabled: true,
  },
];

const securityControls = [
  "Container Isolation",
  "Filesystem Separation",
  "Network Control",
  "Audit Trail",
  "Human Oversight",
];

function LockIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4.2" y="10" width="15.6" height="10" rx="2.2" />
      <path d="M8 10V7.4A4 4 0 0 1 12 3.5a4 4 0 0 1 4 3.9V10" />
    </svg>
  );
}

export default function ArchitectureDiagram() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Security Architecture
          </p>
          <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Enterprise-Grade Agent Isolation
          </h2>
          <p className="max-w-3xl text-[var(--text-secondary)]">
            Every agent runs in its own container. Every workspace is separated. Every data access is
            controlled. Nothing leaks.
          </p>
        </ScrollReveal>

        <div className="architecture-shell mt-10 rounded-[1.6rem] p-5 md:p-8">
          <ScrollReveal>
            <div className="human-control-bar rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text-primary)] md:text-base">
              Human Control Layer · approvals, overrides, and policy enforcement
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={60}>
            <div className="client-infrastructure-card mt-4 rounded-xl px-4 py-3">
              <p className="font-space-grotesk text-lg font-bold tracking-tight text-[var(--text-primary)] md:text-xl">
                Client Infrastructure · Acme Corp Deployment
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={110}>
            <div className="gateway-bar mt-4 rounded-xl px-4 py-3">
              <p className="font-space-grotesk text-lg font-bold text-[var(--text-primary)]">OpenClaw Gateway</p>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] md:text-[11px]">
                Orchestration layer · per-agent policy and runtime controls
              </p>
            </div>
          </ScrollReveal>

          <div className="gateway-rail mt-6" />

          <div className="mt-2 grid gap-4 md:grid-cols-4">
            {agents.map((agent, idx) => (
              <ScrollReveal key={agent.key} delayMs={160 + idx * 70}>
                <div
                  className="agent-node"
                  data-agent={agent.key}
                  style={{ "--agent-color": agent.color } as CSSProperties}
                >
                  <div className="gateway-connector" />
                  <article className="agent-card rounded-xl p-4" data-agent={agent.key}>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <p className="font-space-grotesk text-lg font-bold leading-tight text-[var(--text-primary)]">
                        {agent.name}
                      </p>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)]/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                        <span className="arch-status-dot is-active" />
                        Active
                      </span>
                    </div>

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)]/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                      <LockIcon />
                      Sandboxed
                    </div>

                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      Data Access
                    </p>
                    <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                      {agent.data.map((path) => (
                        <li key={path} className="agent-data-item">
                          {path}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 text-xs text-[var(--text-muted)]">Workspace: isolated bind mount</p>

                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                      <span className={`arch-status-dot ${agent.networkEnabled ? "is-enabled" : "is-disabled"}`} />
                      Network: {agent.network}
                    </p>
                  </article>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delayMs={420}>
            <div className="data-layer mt-7 rounded-xl p-4 md:p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Data Layer · Isolated Zones (no cross-agent visibility)
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {agents.map((agent) => (
                  <div
                    key={`${agent.key}-zone`}
                    data-agent={agent.key}
                    className="data-zone rounded-lg px-3 py-2"
                    style={{ "--agent-color": agent.color } as CSSProperties}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {agent.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{agent.data.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={500}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {securityControls.map((control) => (
                <span key={control} className="security-pill rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em]">
                  {control}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
