import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/aod";

export const metadata: Metadata = {
  title: "AI Direct Report Roles — AI or Die",
  description:
    "34 AI direct report roles across marketing, sales, legal, finance, engineering, HR, and more. Custom-built for your business.",
  openGraph: {
    title: "AI Direct Report Roles — AI or Die",
    description:
      "34 AI direct report roles across marketing, sales, legal, finance, engineering, HR, and more. Custom-built for your business.",
    url: "https://aiordie.now/roles",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Direct Report Roles — AI or Die",
    description:
      "34 AI direct report roles across marketing, sales, legal, finance, engineering, HR, and more. Custom-built for your business.",
  },
  alternates: { canonical: "https://aiordie.now/roles" },
};

type Role = {
  name: string;
  description: string;
};

type Department = {
  name: string;
  accent: string;
  roles: Role[];
};

const departments: Department[] = [
  {
    name: "Executive & Leadership",
    accent: "#FF4C00",
    roles: [
      {
        name: "AI Chief of Staff",
        description:
          "Coordinates cross-functional operations, surfaces blockers, prepares daily briefings, and manages executive priorities. The central nervous system of your leadership team.",
      },
      {
        name: "AI Executive Assistant",
        description:
          "Manages calendar, preps meeting briefs, handles communications, coordinates travel, and tracks action items across all departments.",
      },
    ],
  },
  {
    name: "Marketing & Content",
    accent: "#F97316",
    roles: [
      {
        name: "AI Content Writer",
        description:
          "Produces blog posts, website copy, email campaigns, and social content while maintaining consistent brand voice across channels.",
      },
      {
        name: "AI SEO Specialist",
        description:
          "Runs keyword research, optimizes on-page content, monitors rankings, and builds strategies that drive organic growth.",
      },
      {
        name: "AI Social Media Manager",
        description:
          "Plans and schedules posts, monitors engagement, responds to comments, and tracks social performance across platforms.",
      },
      {
        name: "AI Email Marketing Specialist",
        description:
          "Designs campaigns, writes sequences, segments audiences, A/B tests subject lines, and tracks open and click-through rates.",
      },
      {
        name: "AI Brand Strategist",
        description:
          "Develops positioning, maintains visual and verbal identity guidelines, and enforces consistency across every touchpoint.",
      },
    ],
  },
  {
    name: "Sales & Revenue",
    accent: "#0EA5E9",
    roles: [
      {
        name: "AI SDR (Sales Development Rep)",
        description:
          "Prospects leads, sends personalized outreach, qualifies opportunities, and books meetings so your pipeline never goes cold.",
      },
      {
        name: "AI CRM Manager",
        description:
          "Maintains CRM hygiene, logs activities, tracks deal stages, and generates pipeline reports so nothing falls through the cracks.",
      },
      {
        name: "AI Follow-Up Coordinator",
        description:
          "Automates follow-up sequences, tracks response rates, and escalates warm leads so no prospect gets forgotten.",
      },
      {
        name: "AI Proposal Writer",
        description:
          "Drafts custom proposals, RFP responses, and pitch decks based on prospect requirements and your service catalog.",
      },
    ],
  },
  {
    name: "Finance, Legal & Compliance",
    accent: "#8B5CF6",
    roles: [
      {
        name: "AI Financial Analyst",
        description:
          "Tracks metrics, builds forecasts, monitors burn rate, and prepares reports for leadership and board meetings.",
      },
      {
        name: "AI Bookkeeper",
        description:
          "Reconciles accounts, categorizes expenses, flags anomalies, and keeps books audit-ready.",
      },
      {
        name: "AI Compliance Monitor",
        description:
          "Tracks regulatory requirements, monitors policy adherence, and flags compliance risks before they escalate.",
      },
      {
        name: "AI Invoice Processor",
        description:
          "Processes incoming invoices, matches POs, routes approvals, and tracks vendor payment status.",
      },
      {
        name: "AI Legal Counsel",
        description:
          "Drafts contracts, reviews legal documents, flags risk clauses, and monitors industry-relevant regulatory changes.",
      },
      {
        name: "AI Contract Reviewer",
        description:
          "Scans contracts for unfavorable terms, compares against standard templates, and produces clear redline summaries.",
      },
      {
        name: "AI Legal Researcher",
        description:
          "Researches case law, regulatory frameworks, and compliance requirements, then delivers structured legal briefs.",
      },
    ],
  },
  {
    name: "Engineering & Product",
    accent: "#06B6D4",
    roles: [
      {
        name: "AI Developer",
        description:
          "Writes, reviews, and refactors code. Handles bug fixes, feature delivery, and code documentation across your stack.",
      },
      {
        name: "AI QA Engineer",
        description:
          "Designs test cases, runs automated tests, tracks defects, and ensures release quality before deployment.",
      },
      {
        name: "AI Documentation Writer",
        description:
          "Produces technical docs, API references, user guides, and internal knowledge base articles.",
      },
      {
        name: "AI Product Manager",
        description:
          "Tracks feature requests, prioritizes backlogs, writes user stories, and aligns engineering with stakeholders.",
      },
      {
        name: "AI UX Researcher",
        description:
          "Conducts user research, analyzes feedback patterns, and translates findings into product-ready insights.",
      },
    ],
  },
  {
    name: "Operations & HR",
    accent: "#14B8A6",
    roles: [
      {
        name: "AI Project Manager",
        description:
          "Tracks tasks, sends status updates, flags blockers, and keeps projects on schedule. Runs itself.",
      },
      {
        name: "AI Operations Coordinator",
        description:
          "Manages workflows, coordinates teams, tracks KPIs, and produces operational reporting.",
      },
      {
        name: "AI HR Coordinator",
        description:
          "Runs onboarding flows, tracks HR compliance, handles offer letters, and maintains employee records.",
      },
      {
        name: "AI Recruiter",
        description:
          "Sources candidates, screens resumes, schedules interviews, and manages hiring pipelines end-to-end.",
      },
    ],
  },
  {
    name: "Customer Success & Support",
    accent: "#22C55E",
    roles: [
      {
        name: "AI Customer Support Agent",
        description:
          "Handles tickets, resolves common issues, escalates edge cases, and maintains response-time SLAs.",
      },
      {
        name: "AI Customer Success Manager",
        description:
          "Monitors account health, tracks usage patterns, identifies churn risk, and prepares renewal conversations.",
      },
      {
        name: "AI Knowledge Base Manager",
        description:
          "Creates and maintains help articles, FAQs, and self-service documentation based on support trends.",
      },
    ],
  },
  {
    name: "Research, IT & Security",
    accent: "#3B82F6",
    roles: [
      {
        name: "AI Research Analyst",
        description:
          "Synthesizes market intelligence, monitors competitors, tracks trends, and produces structured research reports.",
      },
      {
        name: "AI Data Analyst",
        description:
          "Cleans data, builds dashboards, runs analyses, and translates business metrics into decisions.",
      },
      {
        name: "AI IT Support Agent",
        description:
          "Handles IT tickets, troubleshoots common issues, manages access requests, and maintains system documentation.",
      },
      {
        name: "AI Security Monitor",
        description:
          "Monitors systems for anomalies, triages alerts, enforces security policies, and tracks compliance posture.",
      },
    ],
  },
];

const totalRoles = departments.reduce((sum, dept) => sum + dept.roles.length, 0);

export default function RolesPage() {
  return (
    <>
      <section className="grain-overlay mesh-bg relative overflow-hidden border-b border-[var(--border)] px-6 pb-16 pt-12 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="glass-badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              <span className="status-dot" /> OpenClaw ecosystem breadth
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
              Roles We Deploy
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={140}>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[var(--text-secondary)]">
              34 AI direct report roles across every business function. Every agent is custom-built for your business. Backed by 5,400+ skills from the OpenClaw ecosystem.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
              These are roles we&apos;ve deployed in production and roles we can deploy rapidly based on your stack, workflows, and operating model.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                {totalRoles} deployable roles
              </div>
              <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                8 core departments
              </div>
              <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                5,400+ OpenClaw skills
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          {departments.map((department, deptIdx) => (
            <ScrollReveal key={department.name} delayMs={deptIdx * 45}>
              <section>
                <h2 className="font-space-grotesk mb-5 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
                  {department.name}
                </h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {department.roles.map((role, roleIdx) => (
                    <ScrollReveal key={role.name} delayMs={roleIdx * 35}>
                      <article
                        className="h-full rounded-2xl border border-[var(--border)] border-l-4 border-l-[var(--dept-accent)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_22px_55px_-36px_var(--accent)]"
                        style={{ "--dept-accent": department.accent } as CSSProperties}
                      >
                        <h3 className="font-space-grotesk text-lg font-bold tracking-tight text-[var(--text-primary)]">
                          {role.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{role.description}</p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mesh-bg border-t border-[var(--border)] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk text-balance text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Don&apos;t see the role you need?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
              We build custom agents for any business function.
            </p>
            <div className="mt-8">
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-block rounded-xl px-10 py-4 text-base font-bold"
              >
                Book a Consult
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
