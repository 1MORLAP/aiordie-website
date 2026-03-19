"use client";

import type { ComponentType } from "react";
import {
  BoltIcon,
  RocketIcon,
  ScaleIcon,
  TargetIcon,
  TrendUpIcon,
  WalletIcon,
} from "./Icons";
import ScrollReveal from "./ScrollReveal";

type Team = {
  icon: ComponentType<{ className?: string }>;
  leader: string;
  reports: string[];
  outcome: string;
};

const TEAMS: Team[] = [
  {
    icon: TargetIcon,
    leader: "CMO",
    reports: ["AI Content", "AI SEO", "AI Social"],
    outcome: "Campaign velocity without adding salaries.",
  },
  {
    icon: BoltIcon,
    leader: "CTO",
    reports: ["AI Dev", "AI QA", "AI Security"],
    outcome: "Ships faster with round-the-clock engineering support.",
  },
  {
    icon: TrendUpIcon,
    leader: "CRO",
    reports: ["AI SDR", "AI CRM", "AI Follow-up"],
    outcome: "Pipeline stays warm 24/7, no dead leads.",
  },
  {
    icon: WalletIcon,
    leader: "CFO",
    reports: ["AI Analyst", "AI Bookkeeper", "AI Compliance"],
    outcome: "Closer books and earlier risk visibility.",
  },
  {
    icon: RocketIcon,
    leader: "CPO",
    reports: ["AI PM", "AI Research", "AI UX Writer"],
    outcome: "Ship product faster with AI-powered discovery and delivery.",
  },
  {
    icon: ScaleIcon,
    leader: "CLO",
    reports: ["AI Contract Review", "AI Compliance", "AI Legal Research"],
    outcome: "Legal risk flagged before it reaches the boardroom.",
  },
];

export default function OrgChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {TEAMS.map((team, teamIdx) => {
        const Icon = team.icon;

        return (
          <ScrollReveal key={team.leader} delayMs={teamIdx * 90}>
            <article className="org-team-card flex h-full flex-col rounded-[1.4rem] border border-[var(--border)] p-5 md:p-6">
              <div className="org-network">
                <div className="org-hub-wrap">
                  <div className="org-hub">
                    <span aria-hidden className="org-hub-icon text-[var(--accent)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="org-hub-label">Your {team.leader}</span>
                  </div>
                </div>

                <div className="org-links">
                  <div className="org-trunk-flow" />
                  <div className="org-rail-flow" />

                  <div className="org-report-grid grid grid-cols-3 gap-2.5 pt-20 md:pt-16">
                    {team.reports.map((report, reportIdx) => (
                      <ScrollReveal key={report} delayMs={teamIdx * 100 + reportIdx * 80}>
                        <div className="org-report-wrap">
                          <div className="org-report-flow" />
                          <div className="org-report-card">{report}</div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-auto border-t border-[var(--border)] pt-3 text-sm text-[var(--text-secondary)]">
                {team.outcome}
              </p>
            </article>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
