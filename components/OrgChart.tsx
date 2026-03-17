"use client";

import ScrollReveal from "./ScrollReveal";

type Team = {
  leader: string;
  reports: string[];
  outcome: string;
};

const TEAMS: Team[] = [
  {
    leader: "CMO",
    reports: ["AI Content", "AI SEO", "AI Social"],
    outcome: "Campaign velocity without adding salaries.",
  },
  {
    leader: "CTO",
    reports: ["AI Dev", "AI QA", "AI Security"],
    outcome: "Ships faster with round-the-clock engineering support.",
  },
  {
    leader: "Sales VP",
    reports: ["AI SDR", "AI CRM", "AI Follow-up"],
    outcome: "Pipeline stays warm 24/7, no dead leads.",
  },
  {
    leader: "CFO",
    reports: ["AI Analyst", "AI Bookkeeper", "AI Compliance"],
    outcome: "Closer books and earlier risk visibility.",
  },
];

export default function OrgChart() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {TEAMS.map((team, idx) => (
        <ScrollReveal key={team.leader} delayMs={idx * 70}>
          <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_24px_70px_-35px_rgba(255,76,0,0.35)]">
            <div className="org-branch">
              <div className="org-leader">Your {team.leader}</div>
              <div className="org-trunk" />
              <div className="org-rail" />

              <div className="grid grid-cols-3 gap-2.5 pt-7">
                {team.reports.map((report) => (
                  <div key={report} className="org-report-wrap">
                    <div className="org-stem" />
                    <div className="org-report">{report}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 border-t border-[var(--border)] pt-3 text-sm text-[var(--text-secondary)]">
              {team.outcome}
            </p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
