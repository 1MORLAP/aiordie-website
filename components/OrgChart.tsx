"use client";

import ScrollReveal from "./ScrollReveal";

type Team = {
  icon: string;
  leader: string;
  reports: string[];
  outcome: string;
};

const TEAMS: Team[] = [
  {
    icon: "🎯",
    leader: "CMO",
    reports: ["AI Content", "AI SEO", "AI Social"],
    outcome: "Campaign velocity without adding salaries.",
  },
  {
    icon: "⚡",
    leader: "CTO",
    reports: ["AI Dev", "AI QA", "AI Security"],
    outcome: "Ships faster with round-the-clock engineering support.",
  },
  {
    icon: "📈",
    leader: "Sales VP",
    reports: ["AI SDR", "AI CRM", "AI Follow-up"],
    outcome: "Pipeline stays warm 24/7, no dead leads.",
  },
  {
    icon: "💰",
    leader: "CFO",
    reports: ["AI Analyst", "AI Bookkeeper", "AI Compliance"],
    outcome: "Closer books and earlier risk visibility.",
  },
];

export default function OrgChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {TEAMS.map((team, teamIdx) => (
        <ScrollReveal key={team.leader} delayMs={teamIdx * 90}>
          <article className="org-team-card rounded-[1.4rem] border border-[var(--border)] p-5 md:p-6">
            <div className="org-network">
              <div className="org-hub-wrap">
                <div className="org-hub">
                  <span aria-hidden className="org-hub-icon">
                    {team.icon}
                  </span>
                  <span className="org-hub-label">Your {team.leader}</span>
                </div>
              </div>

              <div className="org-links">
                <div className="org-trunk-flow" />
                <div className="org-rail-flow" />

                <div className="org-report-grid grid grid-cols-3 gap-2.5 pt-9 md:pt-10">
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

            <p className="mt-5 border-t border-[var(--border)] pt-3 text-sm text-[var(--text-secondary)]">
              {team.outcome}
            </p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
