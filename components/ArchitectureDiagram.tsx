"use client";

import type { CSSProperties } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type Agent = {
  key: "cos" | "legal" | "finance" | "marketing";
  name: string;
  color: string;
  status: "ACTIVE";
  data: string[];
  networkEnabled: boolean;
};

const agents: Agent[] = [
  {
    key: "cos",
    name: "Chief of Staff",
    color: "#14b8a6",
    status: "ACTIVE",
    data: ["/shared (read)", "/strategic (rw)"],
    networkEnabled: true,
  },
  {
    key: "legal",
    name: "Legal Counsel",
    color: "#3b82f6",
    status: "ACTIVE",
    data: ["/legal (rw)", "/shared-business (ro)"],
    networkEnabled: false,
  },
  {
    key: "finance",
    name: "Financial Analyst",
    color: "#8b5cf6",
    status: "ACTIVE",
    data: ["/financial (rw)", "/shared-business (ro)"],
    networkEnabled: true,
  },
  {
    key: "marketing",
    name: "Marketing Specialist",
    color: "#ef4444",
    status: "ACTIVE",
    data: ["/marketing (rw)", "/shared-brand (ro)"],
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

export default function ArchitectureDiagram() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Security Architecture</p>
          <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Enterprise-Grade Agent Isolation
          </h2>
          <p className="max-w-3xl text-[var(--text-secondary)]">
            Every agent runs in its own container. Every workspace is separated. Every data access is controlled.
          </p>
        </ScrollReveal>

        <div className="architecture-shell mt-10 rounded-3xl p-5 md:p-8">
          <ScrollReveal>
            <div className="human-control-bar rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text-primary)] md:text-base">
              Human Control Layer · approvals, overrides, and policy enforcement
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={60}>
            <div className="client-infrastructure-card mt-4 rounded-xl px-4 py-3">
              <p className="font-space-grotesk text-base font-bold text-[var(--text-primary)]">
                Client Infrastructure · Acme Corp Deployment
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={110}>
            <div className="gateway-bar mt-4 rounded-xl border-l-4 px-4 py-3">
              <p className="font-space-grotesk text-base font-bold text-[var(--text-primary)]">OpenClaw Gateway</p>
            </div>
          </ScrollReveal>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {agents.map((agent) => (
              <div key={`${agent.key}-connector`} className="flex justify-center">
                <div className="h-6 border-l-2" style={{ borderColor: "color-mix(in oklab, var(--accent) 30%, transparent)" }} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {agents.map((agent, idx) => (
              <ScrollReveal key={agent.key} delayMs={170 + idx * 60}>
                <article
                  className="flex h-full min-h-[220px] flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4"
                  style={{ borderTop: `3px solid ${agent.color}` } as CSSProperties}
                >
                  <div className="mb-3 flex justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {agent.status}
                    </span>
                  </div>

                  <p className="text-base font-bold text-[var(--text-primary)]">{agent.name}</p>

                  <p className="mt-3 text-xs text-[var(--text-secondary)]">🔒 Sandboxed</p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Data:</p>
                  <ul className="mt-1 space-y-1 text-xs text-[var(--text-secondary)]">
                    {agent.data.map((path) => (
                      <li key={path} className="pl-3 before:mr-2 before:ml-[-12px] before:inline-block before:text-[10px] before:text-[var(--text-muted)] before:content-['•']">
                        {path}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto pt-4 text-xs text-[var(--text-secondary)]">
                    <span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${agent.networkEnabled ? "bg-emerald-500" : "bg-red-500"}`} />
                    Network: {agent.networkEnabled ? "Enabled" : "Disabled"}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delayMs={430}>
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
