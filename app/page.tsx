import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI or Die — Scale Your Team Without Scaling Headcount",
  description:
    "Give your CMO an AI content team. Your CTO gets AI developers. Your Sales VP gets AI SDRs. Same leaders. Dramatically more output. No new hires.",
  openGraph: {
    title: "AI or Die — Scale Your Team Without Scaling Headcount",
    description:
      "We deploy AI employees as direct reports to your existing leaders. TomBot, Nexora, Any.Markets, and AI or Die itself — all running on AI infrastructure right now.",
    url: "https://aiordie.now",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI or Die — Scale Your Team Without Scaling Headcount",
    description:
      "This page was written by an AI CMO. The same kind of agent we deploy for your team.",
  },
  alternates: { canonical: "https://aiordie.now" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI or Die",
  url: "https://aiordie.now",
  description:
    "AI employees deployed as direct reports to your existing leaders. Scale output without scaling headcount.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  telephone: "+17869989310",
  areaServed: "Worldwide",
  serviceType: "AI Employee Deployment and Management",
};

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/s4903rwq";

const liveAgents = [
  {
    agent: "AI CMO",
    unit: "AI or Die",
    task: "This website — every word. Written, updated, iterated. No copywriters. No agency.",
  },
  {
    agent: "AI CEO",
    unit: "Multiple units",
    task: "Morning ops reports filed before 7:30 AM daily. Blockers surfaced. Decisions logged.",
  },
  {
    agent: "AI CTO",
    unit: "Multiple units",
    task: "Stack monitoring, incident triage, deployment oversight. 24/7.",
  },
  {
    agent: "AI CRO",
    unit: "Multiple units",
    task: "Pipeline tracking, lead follow-up, CRM management. Nothing slips.",
  },
  {
    agent: "AI CLO",
    unit: "Nexora",
    task: "Contract review, compliance monitoring, legal risk flagged before humans see it.",
  },
  {
    agent: "AI PMO",
    unit: "Multiple units",
    task: "Project tracking, blocker escalation, stakeholder updates. Runs itself.",
  },
];

const augmentationRoles = [
  {
    leader: "CMO",
    gets: ["AI Content Writer", "AI SEO Specialist", "AI Social Media Manager", "AI Web Optimizer"],
    outcome: "Your CMO leads a full content team. Zero new salaries.",
  },
  {
    leader: "CTO",
    gets: ["AI Developer", "AI QA Agent", "AI Documentation Writer", "AI Security Monitor"],
    outcome: "Your CTO ships faster. The AI team works nights and weekends.",
  },
  {
    leader: "Sales VP",
    gets: ["AI SDR", "AI Pipeline Manager", "AI Follow-Up Coordinator", "AI CRM Analyst"],
    outcome: "Your pipeline never goes cold. No rep needed for the top of funnel.",
  },
  {
    leader: "CFO",
    gets: ["AI Financial Analyst", "AI Bookkeeper", "AI Reporting Agent", "AI Compliance Monitor"],
    outcome: "Monthly close is faster. Anomalies caught before month-end.",
  },
];

const agentTypes = [
  { name: "Legal Counsel", desc: "Drafts contracts, reviews docs, flags legal risk" },
  { name: "Financial Analyst", desc: "Tracks metrics, builds forecasts, monitors burn" },
  { name: "Sales Coordinator", desc: "Manages pipeline, follows up leads, logs CRM" },
  { name: "Marketing Specialist", desc: "Creates content, schedules posts, runs campaigns" },
  { name: "Executive Assistant", desc: "Manages calendar, preps briefs, handles comms" },
  { name: "HR Coordinator", desc: "Onboards staff, tracks compliance, manages offers" },
  { name: "Project Manager", desc: "Tracks tasks, sends updates, flags blockers" },
  { name: "Research Analyst", desc: "Synthesizes intel, monitors competitors, writes reports" },
  { name: "IT/Security", desc: "Monitors systems, manages alerts, enforces policies" },
  { name: "Content Creator", desc: "Writes blogs, scripts videos, builds brand voice" },
  { name: "Customer Support", desc: "Handles tickets, resolves issues, escalates edge cases" },
  { name: "Bookkeeper", desc: "Reconciles accounts, categorizes expenses, flags anomalies" },
];

const steps = [
  {
    n: "01",
    title: "Free Consult",
    desc: "Tell us the roles you need — and what function your team is losing hours to.",
  },
  {
    n: "02",
    title: "Scope the Role",
    desc: "We define the job description. What does this agent own? Where does human judgment start?",
  },
  {
    n: "03",
    title: "Build & Deploy",
    desc: "Agent goes live inside your stack — Slack, email, CRM, whatever you run. Day one operational.",
  },
  {
    n: "04",
    title: "Hand Off",
    desc: "The agent owns the function. Your leader gets the output. They get their time back.",
  },
  {
    n: "05",
    title: "We Keep Improving",
    desc: "Monthly upgrades. Ongoing support. You're never stuck at v1.",
  },
];

const proofOfConcept = [
  {
    name: "TomBot",
    tag: "The Frontier",
    desc: "A fully autonomous AI organization. Zero human staff. Every function — CEO, CMO, CTO, content, ops — executed by AI agents. No human staff. This is what the ceiling looks like.",
    detail: "Zero human employees. 100% AI-operated.",
    color: "red",
  },
  {
    name: "Nexora",
    tag: "Enterprise Growth",
    desc: "Publicly listed in Hong Kong. Scaling and expanding a Web3 business using AI — without proportional headcount growth. Enterprise scale, AI efficiency.",
    detail: "HK-listed. Web3 expansion. AI-powered.",
    color: "blue",
  },
  {
    name: "Any.Markets",
    tag: "Startup Launch",
    desc: "Launch your own prediction markets. Profit from the fees they generate. Any.Markets deployed a full AI leadership team — CEO, CTO, CMO — from day one.",
    detail: "AI CEO + CTO + CMO from launch.",
    color: "purple",
  },
  {
    name: "AI or Die",
    tag: "We Eat Our Own Dog Food",
    desc: "This website was written by an AI CMO. The strategy is set by AI. The content is produced by AI. We are fully transparent about it — and we deploy the same system for you.",
    detail: "AI CMO wrote this page.",
    color: "green",
  },
];

const dogFoodStats = [
  { label: "AI agents running in production", value: "20+" },
  { label: "Live business units on AI infrastructure", value: "4" },
  { label: "Time to deploy your first agent", value: "1–2 wks" },
  { label: "Human ops roles replaced by agents", value: "Several FTEs" },
];

export default function Home() {
  return (
    <>
      {/* ── Organization JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 max-w-6xl mx-auto overflow-hidden">
        {/* Animated orb background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
          style={{
            background: "radial-gradient(circle, rgba(255,76,0,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-3xl relative">
          {/* AI CMO Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-[var(--accent-subtle)] border border-[var(--accent-border)] rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span
              className="w-2 h-2 rounded-full shrink-0 animate-pulse"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
              This page was written by an AI CMO. No copywriters involved.
            </span>
          </div>

          <h1
            className="font-space-grotesk text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[var(--text-primary)] leading-none mb-6 animate-fade-in-up animate-delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Scale your output.<br />
            <span style={{ color: "var(--accent)" }}>Not your headcount.</span>
          </h1>

          <p className="text-lg text-[var(--text-secondary)] max-w-xl mb-4 leading-relaxed animate-fade-in-up animate-delay-200">
            Give your CMO an AI content team. Your CTO gets AI developers. Your Sales VP
            gets AI SDRs. The same leaders you have today — with dramatically more firepower.
          </p>
          <p className="text-base text-[var(--text-muted)] max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-300">
            AI or Die deploys AI employees as direct reports to your existing leadership.
            They own functions. They work 24/7. They don&apos;t quit, negotiate raises, or take PTO.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 animate-fade-in-up animate-delay-400">
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-4 rounded font-bold text-lg w-full sm:w-auto text-center"
            >
              Book a Free Consult
            </a>
            <a
              href="tel:+17869989310"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-lg font-medium"
            >
              Or call (786) 998-9310
            </a>
          </div>
          <p className="text-[var(--text-muted)] text-sm mt-3 animate-fade-in-up animate-delay-500">
            Consult is with Tomasz — a real human. Want to talk to an AI agent instead? We can do that too. We&apos;ll tell you which is which.
          </p>
        </div>
      </section>

      {/* ── LIVE FLEET ── */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="text-green-500 font-bold text-sm uppercase tracking-widest">
              Live Fleet — HQ (HEADQUARTERS)
            </span>
          </div>
          <p className="text-[var(--text-muted)] text-xs mb-1">
            Updated in real-time · Last activity: just now
          </p>
          <p className="text-[var(--text-secondary)] text-sm mb-10 max-w-2xl">
            Our own AI infrastructure. 20+ agents across 4 business units, running in
            production every day. We built this before we sold it — and it&apos;s running right now.
          </p>

          <div className="space-y-3">
            {liveAgents.map((a) => (
              <div
                key={a.agent}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-5 py-4 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_0_20px_rgba(255,76,0,0.05)]"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-green-500 text-xs font-bold uppercase tracking-wider">
                    ACTIVE
                  </span>
                </div>
                <div className="text-[var(--text-primary)] font-bold text-sm w-28 shrink-0">
                  {a.agent}
                </div>
                <div className="text-[var(--text-muted)] text-xs w-24 shrink-0">
                  {a.unit}
                </div>
                <div className="text-[var(--text-secondary)] text-sm flex-1">{a.task}</div>
              </div>
            ))}
          </div>

          <p className="text-[var(--text-muted)] text-xs mt-6">
            + 14 more agents running across TomBot, Nexora, Any.Markets, and internal operations.
          </p>
        </div>
      </section>

      {/* ── SCALE YOUR TEAM WITHOUT SCALING HEADCOUNT ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          The Augmentation Model
        </div>
        <h2
          className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-4 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Scale your team without<br />
          <span className="text-[var(--text-muted)]">scaling headcount.</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mb-14 leading-relaxed">
          Your leaders stay. They get AI direct reports. The team scales. The payroll doesn&apos;t.
          This is how a 20-person company operates like a 60-person company.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {augmentationRoles.map((role) => (
            <div
              key={role.leader}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,76,0,0.08)] group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="rounded px-3 py-1"
                  style={{
                    backgroundColor: "var(--accent-subtle)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  <span
                    className="font-black text-sm"
                    style={{ color: "var(--accent)" }}
                  >
                    Your {role.leader}
                  </span>
                </div>
                <span className="text-[var(--text-muted)] text-sm">now leads →</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {role.gets.map((r) => (
                  <span
                    key={r}
                    className="flex items-center gap-1.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-[var(--text-secondary)] text-sm border-t border-[var(--border)] pt-3 mt-3">
                {role.outcome}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-lg px-6 py-4"
          style={{
            backgroundColor: "var(--accent-subtle)",
            border: "1px solid var(--accent-border)",
          }}
        >
          <p className="text-[var(--text-secondary)] text-sm">
            <span className="text-[var(--text-primary)] font-bold">The old AI approach</span> made you faster at things you were already doing.{" "}
            <span className="text-[var(--text-primary)] font-bold">This gives your leaders a full team</span> — and the output that comes with one.
          </p>
        </div>
      </section>

      {/* ── THE FOUNDER TRAP ── */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            The Trap
          </div>
          <h2
            className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-10 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            You&apos;re not stuck because<br />
            you need more people.<br />
            <span className="text-[var(--text-muted)]">You need your people to lead more.</span>
          </h2>
          <div className="space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl">
            <p>
              Every founder, every department head who has ever said &quot;we need to hire for
              this&quot; — they were right about the need. Wrong about the solution.
            </p>
            <p>
              The CMO who spends half their week writing copy instead of setting strategy.
              The CTO who reviews tickets instead of architecture. The Sales VP who
              follows up manually because the pipeline tool doesn&apos;t do it automatically.
              The bottleneck isn&apos;t talent. It&apos;s leverage.
            </p>
            <p className="text-[var(--text-primary)] font-semibold text-xl">
              AI employees give your leaders leverage. The work still gets done.
              Just not by people who shouldn&apos;t be doing it.
            </p>
            <p>
              The trap is optional now. The operational drudgery that swallows teams
              whole can be handed to agents — permanently, 24/7, without salary
              negotiations, sick days, or Slack drama.
            </p>
          </div>
        </div>
      </section>

      {/* ── WE EAT OUR OWN DOG FOOD ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Proof of Concept Portfolio
        </div>
        <h2
          className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          We proved it before we sold it.
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mb-12 leading-relaxed">
          Four live companies. Different use cases. Same infrastructure. All running now.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {proofOfConcept.map((poc) => (
            <div
              key={poc.name}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,76,0,0.08)] group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-[var(--text-primary)] font-black text-xl">{poc.name}</span>
                <span
                  className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider bg-[var(--bg-secondary)] border border-[var(--border)] rounded px-2 py-1 shrink-0"
                >
                  {poc.tag}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">{poc.desc}</p>
              <div className="flex items-center gap-2 border-t border-[var(--border)] pt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                <span className="text-green-500 text-xs font-semibold">{poc.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {dogFoodStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-5 flex flex-col justify-between gap-2 transition-all duration-300 hover:border-[var(--accent-border)]"
            >
              <span className="text-[var(--text-muted)] text-xs leading-tight">{stat.label}</span>
              <span className="text-[var(--text-primary)] font-black text-3xl">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── HUMAN + AI TRANSPARENCY ── */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[var(--text-secondary)] font-bold text-sm uppercase tracking-widest mb-4">
                Transparency. Not fine print.
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                We tell you exactly who you&apos;re talking to.
              </h2>
              <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  We are not anti-human. We are pro-human. We just believe humans should be
                  doing the work only humans can do — not drowning in ops tasks an AI
                  can handle better.
                </p>
                <p>
                  When you book a call, you get Tomasz. A real person. No AI in the
                  room pretending to be human. When you interact with an AI agent — we
                  tell you. We label it. We don&apos;t blur the line.
                </p>
                <p className="text-[var(--text-primary)] font-semibold">
                  That&apos;s not a disclaimer. It&apos;s a design principle.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Book a consult",
                  who: "Tomasz Wojewoda",
                  badge: "Human",
                  badgeClass: "bg-blue-500/10 border-blue-500/30 text-blue-400",
                  desc: "Real founder. Actual conversation. No middleman.",
                },
                {
                  label: "Talk to an agent",
                  who: "AI Agent (labeled)",
                  badge: "AI",
                  badgeClass: "",
                  isAccent: true,
                  desc: "Available 24/7. You always know what you're talking to.",
                },
                {
                  label: "Read this website",
                  who: "AI CMO",
                  badge: "AI",
                  badgeClass: "",
                  isAccent: true,
                  desc: "Every word. Written by an AI. Approved by humans. Labeled upfront.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-5 py-4 flex items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[var(--text-primary)] font-semibold text-sm">{item.who}</div>
                    <div className="text-[var(--text-muted)] text-xs mt-1">{item.desc}</div>
                  </div>
                  {item.isAccent ? (
                    <span
                      className="shrink-0 text-xs font-bold border rounded px-2 py-1"
                      style={{
                        backgroundColor: "var(--accent-subtle)",
                        borderColor: "var(--accent-border)",
                        color: "var(--accent)",
                      }}
                    >
                      {item.badge}
                    </span>
                  ) : (
                    <span
                      className={`shrink-0 text-xs font-bold border rounded px-2 py-1 ${item.badgeClass}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          How We Hire Your Agent
        </h2>
        <p className="text-[var(--text-secondary)] mb-14 text-lg max-w-2xl">
          This isn&apos;t software setup. It&apos;s onboarding. From first call to live
          agent in under two weeks.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col">
              <div className="font-black text-4xl mb-3" style={{ color: "var(--accent)" }}>{s.n}</div>
              <div className="text-[var(--text-primary)] font-bold mb-2">{s.title}</div>
              <div className="text-[var(--text-secondary)] text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROLES WE DEPLOY ── */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Roles We Deploy
          </h2>
          <p className="text-[var(--text-secondary)] mb-12 text-lg">
            Every agent is custom-built and scoped for your specific business. These are
            functions we&apos;ve already built and proven in production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {agentTypes.map((a) => (
              <div
                key={a.name}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-5 transition-all duration-300 hover:border-[var(--accent-border)] hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <div>
                    <div className="text-[var(--text-primary)] font-semibold mb-1">{a.name}</div>
                    <div className="text-[var(--text-secondary)] text-sm">{a.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK PRICING ── */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-8 py-6">
          <div>
            <h2
              className="text-2xl font-black text-[var(--text-primary)] mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Simple Pricing
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)] font-semibold">
                $2,000 setup · $500/month per agent
              </span>
              <span>·</span>
              <span className="text-green-500 font-semibold">
                3-agent bundle from $1,200/mo (volume discount)
              </span>
            </div>
          </div>
          <Link
            href="/pricing"
            className="border border-[var(--border)] hover:border-[var(--text-primary)] text-[var(--text-primary)] px-6 py-3 rounded font-semibold transition-colors whitespace-nowrap"
          >
            See Full Pricing →
          </Link>
        </div>
      </section>

      {/* ── THE MATH ── */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          The Math Is Obvious
        </h2>
        <p className="text-[var(--text-muted)] mb-10 text-sm">
          Three equivalent functions. One human way. One agent way.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
          {/* Old Way */}
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255, 76, 0, 0.05)",
              border: "1px solid rgba(255, 76, 0, 0.3)",
            }}
          >
            <div
              className="font-semibold text-sm mb-2 uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              Three Human Hires
            </div>
            <div className="text-[var(--text-primary)] font-black text-4xl mb-2">~$350K/yr</div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Legal + financial + sales. Salary, benefits, PTO, overhead, recruiting.
              They work 8 hours a day, 5 days a week. They get sick. They quit.
            </p>
          </div>
          {/* New Way */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <div className="text-green-500 font-semibold text-sm mb-2 uppercase tracking-wider">
              Three AI Employees
            </div>
            <div className="text-[var(--text-primary)] font-black text-4xl mb-2">$19,400/yr</div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              $5,000 setup + $1,200/mo. Year 2+: $14,400/yr. They work 24 hours a day,
              7 days a week. No PTO. No drama. No attrition.
            </p>
          </div>
        </div>
        <p className="text-xl text-[var(--text-secondary)] font-semibold">
          $330K saved.{" "}
          <span className="text-[var(--text-primary)] font-black">3x the coverage.</span> No HR drama.
        </p>
      </section>

      {/* ── CLIENTS & CASE STUDIES ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          In Production
        </div>
        <h2
          className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built for Real Businesses
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mb-12 leading-relaxed">
          These aren&apos;t pilot programs. These are operating companies running on AI or Die
          infrastructure right now.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* TomBot */}
          <a
            href="https://www.realtom.bot/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,76,0,0.08)] group"
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg shrink-0"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                TB
              </div>
              <span
                className="text-xs font-bold uppercase tracking-wider rounded px-2 py-1 text-right"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                Zero-Human Company
              </span>
            </div>
            <div className="flex-1">
              <div className="text-[var(--text-primary)] font-black text-xl mb-0.5">TomBot</div>
              <div className="text-[var(--text-muted)] text-xs font-mono mb-3">realtom.bot</div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                A fully autonomous AI organization. Zero human staff. Every function runs on agents.
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <span className="text-[var(--text-muted)]">What we built:</span> The entire company. CEO, CMO, CTO, content, ops — 100% AI operated.
              </p>
            </div>
            <div
              className="text-xs font-semibold transition-colors mt-auto"
              style={{ color: "var(--accent)" }}
            >
              Visit realtom.bot →
            </div>
          </a>

          {/* Nexora */}
          <a
            href="https://nexora.build"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,76,0,0.08)] group"
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg shrink-0"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                NX
              </div>
              <span
                className="text-xs font-bold uppercase tracking-wider rounded px-2 py-1 text-right"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                Enterprise Scale
              </span>
            </div>
            <div className="flex-1">
              <div className="text-[var(--text-primary)] font-black text-xl mb-0.5">Nexora</div>
              <div className="text-[var(--text-muted)] text-xs font-mono mb-3">nexora.build</div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                Blockchain-as-a-Service for enterprises. zkEVM L2/L3, RWA tokenization. Publicly listed in Hong Kong.
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <span className="text-[var(--text-muted)]">What we built:</span> AI leadership and operational team — scaling their Web3 business without proportional headcount growth.
              </p>
            </div>
            <div
              className="text-xs font-semibold transition-colors mt-auto"
              style={{ color: "var(--accent)" }}
            >
              Visit nexora.build →
            </div>
          </a>

          {/* Any.Markets */}
          <a
            href="https://any.markets"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,76,0,0.08)] group"
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg shrink-0"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                AM
              </div>
              <span
                className="text-xs font-bold uppercase tracking-wider rounded px-2 py-1 text-right"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                Startup AI Leadership
              </span>
            </div>
            <div className="flex-1">
              <div className="text-[var(--text-primary)] font-black text-xl mb-0.5">Any.Markets</div>
              <div className="text-[var(--text-muted)] text-xs font-mono mb-3">any.markets</div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                Launch your own prediction markets. Profit from the fees they generate. Full AI leadership team deployed from day one.
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <span className="text-[var(--text-muted)]">What we built:</span> Full AI leadership — CEO, CTO, CMO agents deployed from launch. All new roles staffed with AI as needed.
              </p>
            </div>
            <div
              className="text-xs font-semibold transition-colors mt-auto"
              style={{ color: "var(--accent)" }}
            >
              Visit any.markets →
            </div>
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative border-t border-[var(--border)] px-6 py-24 text-center overflow-hidden"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        {/* "Die" fade motif — massive background text */}
        <div
          className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-black text-[20rem] leading-none tracking-tighter"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: `linear-gradient(to right, var(--text-primary) 0%, var(--text-primary) 30%, transparent 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.07,
              transform: "translateX(10%)",
            }}
          >
            Die
          </span>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            AI or Die
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The companies that figure this out first will be the ones that scale
            without burning out.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed">
            Free consult. No pitch deck. We&apos;ll scope your first agent role and show
            you exactly what it would do inside your specific team. If it&apos;s not a fit,
            we&apos;ll tell you that too.
          </p>
          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-block px-12 py-5 rounded font-bold text-xl"
          >
            Book a Free Consult
          </a>
          <p className="mt-6 text-[var(--text-muted)] text-sm">
            Prefer to talk first?{" "}
            <a
              href="tel:+17869989310"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              (786) 998-9310
            </a>
            {" "}— call to book, or to talk to our AI agent directly.
            Consult itself is with a real human.
          </p>
        </div>
      </section>
    </>
  );
}
