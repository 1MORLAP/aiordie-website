import type { Metadata } from "next";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import LiveFleetDashboard from "@/components/LiveFleetDashboard";
import OrgChart from "@/components/OrgChart";
import ScrollReveal from "@/components/ScrollReveal";

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/aod";

export const metadata: Metadata = {
  title: "AI or Die — Scale Leaders With AI Teams",
  description:
    "Give every exec AI direct reports. AI or Die deploys AI employees for marketing, sales, finance, and ops in 1–2 weeks.",
  openGraph: {
    title: "AI or Die — Scale Leaders With AI Teams",
    description:
      "20+ agents live across 4 business units. We deploy the same system into your company.",
    url: "https://aiordie.now",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI or Die — Scale Leaders With AI Teams",
    description:
      "This website is run by the same AI CMO model we deploy for clients.",
  },
  alternates: { canonical: "https://aiordie.now" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI or Die",
  url: "https://aiordie.now",
  description:
    "AI employees deployed as direct reports to existing leaders, so companies scale output without scaling headcount.",
  telephone: "+17869989310",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
};

const caseStudies = [
  {
    name: "TomBot",
    badge: "Zero-human operations",
    line: "A full company run by AI agents across leadership, execution, and reporting.",
    color: "#FF4C00",
    href: "https://www.realtom.bot/",
  },
  {
    name: "Nexora",
    badge: "Enterprise expansion",
    line: "HK-listed Web3 infrastructure using AI teams to scale without proportional hiring.",
    color: "#3B82F6",
    href: "https://nexora.build",
  },
  {
    name: "Any.Markets",
    badge: "Startup launch stack",
    line: "AI advisors to CEO, CTO, and CMO deployed from day one for rapid market entry.",
    color: "#8B5CF6",
    href: "https://any.markets",
  },
  {
    name: "AI or Die",
    badge: "Dog-fooded daily",
    line: "Our own site, strategy, and output are operated by the same AI employee model.",
    color: "#10B981",
    href: "https://aiordie.now",
  },
];

const timeline = [
  "Free consult",
  "Role architecture",
  "Agent build",
  "Stack integration",
  "Go live + optimize",
];

const topRoles = [
  "AI CMO",
  "AI SDR",
  "AI Ops Manager",
  "AI Financial Analyst",
  "AI Legal Assistant",
  "AI PMO",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero */}
      <section className="grain-overlay mesh-bg relative overflow-hidden border-b border-[var(--border)] px-6 pb-16 pt-12 sm:pt-20">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <ScrollReveal>
              <div className="glass-badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                <span className="status-dot" /> AI CMO in production
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
                Your leaders keep the title.
                <br />
                <span className="text-[var(--accent)]">AI gets the workload.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={140}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
                AI or Die deploys AI employees as direct reports to your CMO, CTO, Sales VP, and CFO.
                They execute 24/7 so your humans run strategy, not admin.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={220}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                  <AnimatedCounter to={20} suffix="+" /> Agents
                </div>
                <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                  <AnimatedCounter to={4} /> Business Units
                </div>
                <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                  24/7 Operations
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={260}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={CONSULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent rounded-lg px-7 py-3 text-base font-bold"
                >
                  Book a Free Consult
                </a>
                <a
                  href="tel:+17869989310"
                  className="text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  (786) 998-9310
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delayMs={160} direction="right">
            <aside className="float-soft rounded-2xl border border-[var(--accent-border)] bg-[var(--bg-card)]/92 p-6 shadow-[0_30px_80px_-45px_rgba(255,76,0,0.7)] backdrop-blur">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Live load ticker
              </p>
              <div className="mb-4 flex items-end gap-2">
                <AnimatedCounter
                  to={20}
                  suffix="+"
                  className="font-space-grotesk text-6xl font-extrabold leading-none text-[var(--text-primary)]"
                />
                <span className="pb-2 text-sm font-semibold text-[var(--text-secondary)]">
                  agents running right now
                </span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <p className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-secondary)]">
                  HQ/STATUS: <span className="text-emerald-500">HEALTHY</span>
                </p>
                <p className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-secondary)]">
                  AVG RESPONSE: <span className="text-[var(--text-primary)]">2.1s</span>
                </p>
                <p className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-secondary)]">
                  HUMAN HANDOFF: <span className="text-[var(--text-primary)]">Tomasz</span>
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Live Fleet */}
      <section className="bg-[var(--bg-secondary)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Live Fleet · HQ (HEADQUARTERS)
            </p>
            <h2 className="font-space-grotesk mb-3 text-3xl font-bold tracking-tight md:text-5xl">
              This is not a mockup.
            </h2>
            <p className="mb-8 max-w-2xl text-[var(--text-secondary)]">
              Six core agents shown below. 20+ are live across four business units. This infrastructure runs every day before a single sales call.
            </p>
          </ScrollReveal>
          <LiveFleetDashboard />
        </div>
      </section>

      {/* Augmentation + Founder trap */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              The Augmentation Model
            </p>
            <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Keep your org chart. Multiply your team.
            </h2>
            <p className="mb-8 max-w-3xl text-[var(--text-secondary)]">
              Your leaders stay in charge. AI handles execution under them. Headcount stays lean while output compounds.
            </p>
          </ScrollReveal>

          <OrgChart />

          <ScrollReveal delayMs={120}>
            <div className="mt-12 flex items-start gap-5 rounded-2xl border-l-4 border-[var(--accent)] bg-gradient-to-r from-[var(--accent-subtle)] to-transparent px-6 py-6">
              <span className="mt-0.5 text-3xl shrink-0">🪤</span>
              <div>
                <p className="font-space-grotesk text-lg font-bold text-[var(--text-primary)] mb-1">
                  The Founder Trap
                </p>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  High-value leaders drowning in low-value tasks. The fix isn&apos;t another expensive hire — it&apos;s giving each leader AI direct reports that execute without sleep, attrition, or lag.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Client Proof
            </p>
            <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Built in public. Running in production.
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {caseStudies.map((item, idx) => (
              <ScrollReveal key={item.name} delayMs={idx * 70}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)]"
                >
                  <div className="mb-6 h-1.5 w-16 rounded-full" style={{ backgroundColor: item.color }} />
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-space-grotesk text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                      {item.name}
                    </h3>
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{item.line}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof stats */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Dog Food Metrics
            </p>
            <h2 className="font-space-grotesk mb-8 text-3xl font-bold tracking-tight md:text-5xl">
              We run this system on ourselves first.
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-7">
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Agents live</p>
                <AnimatedCounter to={20} suffix="+" className="font-space-grotesk text-5xl font-bold" />
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={70}>
              <div className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-7">
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Business units</p>
                <AnimatedCounter to={4} className="font-space-grotesk text-5xl font-bold" />
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={100}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-7">
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">First deployment</p>
                <span className="font-space-grotesk text-5xl font-bold">
                  1–<AnimatedCounter to={2} />wks
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={150}>
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-7">
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">FTE load removed</p>
                <AnimatedCounter to={6} suffix="+" className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-7 text-3xl font-bold tracking-tight md:text-4xl">
              Human or AI. Always labeled.
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "👤", title: "Human", text: "Consult call is with Tomasz, directly." },
              { icon: "🤖", title: "AI", text: "Agent conversations are clearly marked AI." },
              { icon: "⚙️", title: "AI", text: "Operational outputs are labeled by source agent." },
            ].map((item, i) => (
              <ScrollReveal key={item.title + i} delayMs={i * 70}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <p className="font-space-grotesk text-xl font-bold text-[var(--text-primary)]">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-2 text-3xl font-bold tracking-tight md:text-5xl">How it works</h2>
            <p className="mb-10 text-[var(--text-secondary)]">Five steps from consult to full deployment.</p>
          </ScrollReveal>

          <div className="relative">
            <div className="timeline-track" />
            <div className="grid gap-7 md:grid-cols-5">
              {timeline.map((step, idx) => (
                <ScrollReveal key={step} delayMs={idx * 65}>
                  <div className={`timeline-node ${idx === 1 ? "active" : ""}`}>
                    <div className="timeline-dot">{idx + 1}</div>
                    <p className="mt-3 text-center text-sm font-medium text-[var(--text-secondary)]">{step}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight md:text-4xl">Roles We Deploy</h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Start with six high-impact roles, then scale to all 12.</p>
            </div>
            <Link href="/pricing" className="text-sm font-semibold text-[var(--accent)] hover:underline">
              See all roles →
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {topRoles.map((role, idx) => (
              <ScrollReveal key={role} delayMs={idx * 60}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-4 text-sm font-semibold text-[var(--text-primary)]">
                  {role}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-6 py-5">
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            Pricing: $2,000 setup + $500/month per agent · 3-agent bundle from $1,200/month
          </p>
          <Link href="/pricing" className="text-sm font-semibold text-[var(--accent)] hover:underline">
            Full pricing →
          </Link>
        </div>
      </section>

      {/* Math */}
      <section className="px-6 py-10 pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-8 text-center text-3xl font-bold tracking-tight md:text-5xl">The Math</h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            <ScrollReveal>
              <article className="rounded-2xl border border-rose-500/35 bg-rose-500/10 p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-rose-700 dark:text-rose-300">Old way</p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={350} suffix="K" />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">Three human hires, overhead, downtime, and long recruiting cycles.</p>
              </article>
            </ScrollReveal>

            <ScrollReveal delayMs={90}>
              <article className="rounded-2xl border border-emerald-500/35 bg-emerald-500/10 p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">AI or Die model</p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={19.4} decimals={1} suffix="K" />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">Equivalent coverage with AI employees running full-time, all year.</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mesh-bg border-t border-[var(--border)] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">AI or Die</p>
            <h2 className="font-space-grotesk text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Scale now or get outpaced.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Free consult with Tomasz. We&apos;ll map your first AI role and show exactly how it plugs into your current team.
            </p>
            <div className="mt-8">
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-block rounded-xl px-10 py-4 text-lg font-bold"
              >
                Book a Free Consult
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Prefer a call? <a href="tel:+17869989310" className="font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">(786) 998-9310</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
