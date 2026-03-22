import type { Metadata } from "next";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing — AI or Die",
  description:
    "Transparent pricing for AI direct reports. $2,000 setup + $500/mo per agent. Volume bundles from $1,200/mo. No contracts, cancel anytime.",
  openGraph: {
    title: "AI Direct Report Pricing — AI or Die",
    description:
      "$2,000 setup + $500/mo per agent. Volume bundles from $1,200/mo. No contracts, cancel anytime.",
    url: "https://aiordie.now/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Direct Report Pricing — AI or Die",
    description: "$2,000 setup + $500/mo per agent. No contracts, cancel anytime.",
  },
  alternates: { canonical: "https://aiordie.now/pricing" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between an AI direct report and just using ChatGPT?",
      acceptedAnswer: { "@type": "Answer", text: "ChatGPT is a general-purpose tool — it knows nothing about your business, has no memory, and requires you to prompt it every time. An AI direct report is configured specifically for your role, integrated into your tools and data, and operates autonomously. You're not the operator; you're the manager." },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: { "@type": "Answer", text: "Typically 1–2 weeks from your first consult to a live deployed agent. We handle all configuration, integrations, and testing." },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge?",
      acceptedAnswer: { "@type": "Answer", text: "None. You interact with your agents the same way you'd work with a human team member — through chat, email, or Slack. We handle all setup and ongoing management." },
    },
    {
      "@type": "Question",
      name: "What roles are available?",
      acceptedAnswer: { "@type": "Answer", text: "We deploy 34 roles across 8 departments — marketing, sales, finance, legal, engineering, operations, customer success, and IT/security. See the full list at aiordie.now/roles." },
    },
    {
      "@type": "Question",
      name: "Do agents work in languages other than English?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. All agents are multilingual by default — any language in, any language out, any currency. Our phone agent at (786) 998-9310 handles any language too." },
    },
    {
      "@type": "Question",
      name: "Can agents learn and improve over time?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Agents build memory of your business, preferences, and processes. Monthly optimization ensures they stay current with new model releases and your evolving needs." },
    },
    {
      "@type": "Question",
      name: "What does the $2,000 setup actually cover?",
      acceptedAnswer: { "@type": "Answer", text: "Full configuration and integration into your specific business — your tools, your data, your knowledge base, your processes. This is what turns a general-purpose AI into a specialist who knows your business." },
    },
    {
      "@type": "Question",
      name: "Can I cancel?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. No long-term contracts. Cancel with 30 days notice. You keep all your agent configurations and files — zero lock-in." },
    },
    {
      "@type": "Question",
      name: "What AI models do the agents use?",
      acceptedAnswer: { "@type": "Answer", text: "We recommend Anthropic Max 5x ($100/mo) or Max 20x ($200/mo) and OpenAI Pro ($200/mo) for best performance. Venice AI is available for private deployments. You subscribe directly — we never mark up model costs." },
    },
    {
      "@type": "Question",
      name: "What integrations are supported?",
      acceptedAnswer: { "@type": "Answer", text: "Email, CRM, Slack, GitHub, Google Workspace, Notion, and 5,400+ more via pre-built integrations. We scope exact requirements during your consult." },
    },
    {
      "@type": "Question",
      name: "How is my data protected?",
      acceptedAnswer: { "@type": "Answer", text: "Each client runs on isolated infrastructure — your data never mixes with other businesses. We also offer Private Cloud and On-Premise deployment for maximum control." },
    },
    {
      "@type": "Question",
      name: "What are the deployment options?",
      acceptedAnswer: { "@type": "Answer", text: "Three tiers: Cloud (Anthropic/OpenAI), Private Cloud (Venice AI — data stays private), and On-Premise (everything runs on your infrastructure). We match your existing security posture." },
    },
  ],
};

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/aod";

const tiers = [
  {
    name: "1 Agent",
    setup: "$2,000",
    monthly: "$500/mo",
    highlight: false,
    desc: "Perfect for a single high-impact role — start with legal, finance, or sales.",
  },
  {
    name: "3 Agents",
    setup: "$5,000",
    monthly: "$1,200/mo",
    highlight: true,
    badge: "Most Popular",
    desc: "A full AI team. Legal + financial + sales running in parallel, 24/7.",
  },
  {
    name: "5 Agents",
    setup: "$7,500",
    monthly: "$1,800/mo",
    highlight: false,
    desc: "Expand into marketing, HR, and project management.",
  },
  {
    name: "8+ Agents",
    setup: "Custom",
    monthly: "Custom",
    highlight: false,
    desc: "Full AI workforce. Custom pricing based on scope and complexity.",
  },
];

const brainCosts = [
  {
    provider: "Anthropic",
    tiers: [
      { name: "Max 5x", price: "$100/mo" },
      { name: "Max 20x", price: "$200/mo", rec: true },
    ],
  },
  {
    provider: "OpenAI",
    tiers: [
      { name: "Pro", price: "$200/mo", rec: true },
    ],
  },
  {
    provider: "Venice AI — Private AI",
    tiers: [{ name: "API Pay-per-use", price: "Usage-based" }],
  },
];

const deploymentOptions = [
  {
    title: "Cloud",
    icon: "cloud",
    forWho: "Cloud-centric teams using Google Drive, Dropbox, cloud CRMs, and SaaS tools.",
    how: "Hosted AI agents run in the cloud with public model providers.",
    models: "Anthropic (Claude), OpenAI",
    privacy: "Standard cloud security. Data is processed by public AI providers.",
    brainMap: "AI Brain Cost mapping: Anthropic Max 5x/20x or OpenAI Pro subscriptions.",
    cardClass: "border-[var(--border)] bg-[var(--bg-card)]",
  },
  {
    title: "Private Cloud",
    icon: "shield",
    forWho: "Privacy-conscious cloud teams in regulated or sensitive industries.",
    how: "Agents and models are deployed on dedicated private cloud infrastructure.",
    models: "Venice AI (private)",
    privacy: "Data never touches public AI providers; it stays in your private environment.",
    brainMap: "AI Brain Cost mapping: Venice AI private deployment (usage-based).",
    cardClass: "border-[var(--accent-border)] bg-[var(--accent-subtle)]",
  },
  {
    title: "On-Premise",
    icon: "server",
    forWho: "Teams running in own data centers.",
    how: "Everything runs on your infrastructure: models, agents, storage, and orchestration.",
    models: "Self-hosted open-source models",
    privacy: "Maximum control. Nothing leaves your building unless you choose.",
    brainMap: "AI Brain Cost mapping: self-hosted model stack, no external subscriptions required.",
    cardClass: "border-[var(--accent-border)] bg-[var(--bg-secondary)] shadow-[inset_0_2px_12px_0_var(--accent-subtle)]",
  },
] as const;

function DeploymentTierIcon({ kind }: { kind: "cloud" | "shield" | "server" }) {
  const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (kind === "cloud") {
    return (
      <svg className="h-6 w-6" {...base}>
        <path d="M7.5 18h8.8a4.2 4.2 0 0 0 .3-8.4A5.8 5.8 0 0 0 6 8.7 4.6 4.6 0 0 0 7.5 18Z" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg className="h-6 w-6" {...base}>
        <path d="M12 3 5.5 6v5.3c0 4.2 2.7 7.9 6.5 9.7 3.8-1.8 6.5-5.5 6.5-9.7V6L12 3Z" />
        <path d="m9.2 12 1.8 1.8 3.8-3.8" />
      </svg>
    );
  }
  return (
    <svg className="h-6 w-6" {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M7 9h10M7 13h6M9 19v2M15 19v2" />
    </svg>
  );
}

type FeatureIconKind = "wrench" | "brain" | "globe" | "plug" | "grid" | "clock" | "shield" | "arrow-up" | "key" | "headset";
function FeatureIcon({ kind }: { kind: FeatureIconKind }) {
  const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-5 w-5", "aria-hidden": true };
  if (kind === "wrench") return <svg {...base}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
  if (kind === "brain") return <svg {...base}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>;
  if (kind === "globe") return <svg {...base}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
  if (kind === "plug") return <svg {...base}><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/></svg>;
  if (kind === "grid") return <svg {...base}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>;
  if (kind === "clock") return <svg {...base}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  if (kind === "shield") return <svg {...base}><path d="M12 3 5.5 6v5.3c0 4.2 2.7 7.9 6.5 9.7 3.8-1.8 6.5-5.5 6.5-9.7V6L12 3Z"/><path d="m9.2 12 1.8 1.8 3.8-3.8"/></svg>;
  if (kind === "arrow-up") return <svg {...base}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>;
  if (kind === "key") return <svg {...base}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>;
  return <svg {...base}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>;
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="grain-overlay mesh-bg border-b border-[var(--border)] px-6 pb-16 pt-12 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Transparent Pricing
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
              Build your AI team
              <br />
              without building headcount.
            </h1>
          </ScrollReveal>
          <ScrollReveal delayMs={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
              You&apos;re not buying access to an AI. You&apos;re hiring a specialist — configured
              for your business, integrated into your tools, and upgraded continuously.
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={200}>
            <div className="mt-7 inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              Your team does $330K of work AI handles for $19,400
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              The Math
            </h2>
            <p className="mb-8 max-w-2xl text-[var(--text-secondary)]">
              Same outcomes, completely different cost structure.
            </p>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2">
            <ScrollReveal>
              <article className="rounded-2xl border border-[var(--danger-border)] bg-[var(--danger-subtle)] p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--danger)]">Old way</p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={350000} />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  3 human hires/year with salary, benefits, downtime, and recruiting drag.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delayMs={100}>
              <article className="rounded-2xl border border-[var(--success-border)] bg-[var(--success-subtle)] p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--success)]">AI or Die model</p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={19400} />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  3 AI direct reports/year with 24/7 coverage and ongoing optimization.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-10 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Choose your team size
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, idx) => (
              <ScrollReveal key={t.name} delayMs={idx * 70}>
                <div
                  className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_24px_70px_-46px_var(--accent)] ${
                    t.highlight
                      ? "border-[var(--accent-border)] bg-[var(--accent-subtle)] shadow-[0_26px_70px_-50px_var(--accent)]"
                      : "border-[var(--border)] bg-[var(--bg-card)]"
                  }`}
                >
                  {t.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-[var(--text-on-accent)] whitespace-nowrap">
                      {t.badge}
                    </div>
                  )}
                  <p className="mb-2 text-sm font-semibold text-[var(--text-secondary)]">{t.name}</p>
                  <p className="font-space-grotesk text-3xl font-bold text-[var(--text-primary)]">{t.monthly}</p>
                  <p className="mb-4 text-sm text-[var(--text-muted)]">{t.setup} setup</p>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{t.desc}</p>
                  <a
                    href={CONSULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                      t.highlight
                        ? "bg-[var(--accent)] text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)]"
                        : "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delayMs={120}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Each tier includes full custom configuration, tool integration, and ongoing
              optimization. This is not a SaaS subscription — it&apos;s a deployed specialist.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Not a generic agent. A configured expert.
            </h2>
            <p className="mt-3 max-w-4xl text-[var(--text-secondary)]">
              Most people start with ChatGPT. Then they discover agents. Then they realize
              agents alone aren&apos;t enough. Here&apos;s the full picture.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {/* Column 1: ChatGPT */}
            <ScrollReveal delayMs={40}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Tier 1 — AI Assistant</p>
                  <h3 className="font-space-grotesk mt-2 text-xl font-bold text-[var(--text-primary)]">ChatGPT / Claude</h3>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">~$20–200/mo, direct from provider</p>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  A chat interface. Brilliant at answering questions, drafting text, summarizing documents.
                  But the moment you close the tab, it&apos;s gone. No memory. No initiative.
                  It only works when you work.
                </p>
                <ul className="flex-1 space-y-2.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    Starts fresh every conversation — no memory of your business
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    Can&apos;t take action — it answers, but doesn&apos;t do
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    Stops the second you step away from the screen
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    No integrations — copy/paste is the workflow
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    You are the operator. Always.
                  </li>
                </ul>
                <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--text-muted)]">Best for</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">One-off tasks, research, drafts. Not for running a business.</p>
                </div>
              </article>
            </ScrollReveal>

            {/* Column 2: Generic Agent (OpenClaw) */}
            <ScrollReveal delayMs={100}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Tier 2 — Generic Agent</p>
                  <h3 className="font-space-grotesk mt-2 text-xl font-bold text-[var(--text-primary)]">OpenClaw &amp; similar platforms</h3>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">~$5–50/mo, self-serve</p>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  A step up — the agent can take actions, run autonomously, and connect to tools.
                  But it&apos;s a blank slate. You configure it, you prompt it, you manage it.
                  The platform gives you a car. You still have to build the engine.
                </p>
                <ul className="flex-1 space-y-2.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    Knows nothing about your business until you teach it — and that takes weeks
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    No persistent memory across sessions by default
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    Integrations require technical setup — each one is a project
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    You&apos;re the prompt engineer, the QA, and the manager
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    Generic by design — same setup as every other customer
                  </li>
                </ul>
                <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--text-muted)]">Best for</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Technical teams who want to build their own agent. A toolkit, not a hire.</p>
                </div>
              </article>
            </ScrollReveal>

            {/* Column 3: AI or Die */}
            <ScrollReveal delayMs={160}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-6 shadow-[0_24px_60px_-44px_var(--accent)]">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Tier 3 — Deployed Specialist</p>
                  <h3 className="font-space-grotesk mt-2 text-xl font-bold text-[var(--text-primary)]">AI or Die Agent</h3>
                  <p className="mt-1 text-xs font-semibold text-[var(--accent)]">$500/mo + $2,000 setup</p>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Built on OpenClaw — but configured end-to-end for your business by our team.
                  We do the months of setup work so you don&apos;t have to.
                  You get a specialist who already knows your clients, your tone, your tools,
                  and your goals. You manage outcomes, not prompts.
                </p>
                <ul className="flex-1 space-y-2.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Embedded into your CRM, email, Slack, and tools from day one
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Knows your brand voice, your clients, your SOPs — trained on your data
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Persistent memory — builds context across every interaction
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Operates 24/7 without you — handles tasks, not just questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Upgraded continuously — new models, better performance, no effort from you
                  </li>
                </ul>
                <div className="mt-6 rounded-lg border border-[var(--accent-border)] bg-[var(--bg)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--accent)]">Best for</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Business owners who want to hand off a role — not build a system.</p>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Skills IP block */}
          <ScrollReveal delayMs={60}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
              <div className="px-6 pt-6 pb-5 md:px-8 md:pt-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex-1 min-w-[240px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Our IP. Your advantage.</p>
                    <h3 className="font-space-grotesk mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                      Every agent ships with skills.
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                      Think of it like hiring someone out of college vs. hiring a PhD who&apos;s spent years
                      mastering exactly your field. Our agents come pre-loaded with skills we&apos;ve built,
                      tested, and refined in live operations. When you hire an AI or Die agent, you get
                      our IP — not a blank slate you have to educate from scratch.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-6 py-4 text-center">
                    <p className="font-space-grotesk text-xl font-bold text-[var(--text-primary)] leading-tight">24/7 PhD hire</p>
                    <p className="mt-1 text-sm font-medium text-[var(--accent)]">for the price of lunch</p>
                  </div>
                </div>
              </div>

              {/* Education analogy ladder */}
              <div className="grid grid-cols-1 divide-y divide-[var(--border)] border-t border-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="px-6 py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">ChatGPT / Claude</p>
                  <p className="mt-1.5 font-space-grotesk text-base font-bold text-[var(--text-secondary)]">General knowledge, no specialty</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    Knows everything about everything. Knows nothing about you.
                    Like asking a stranger for advice — smart, but zero context.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">Generic Agent Platform</p>
                  <p className="mt-1.5 font-space-grotesk text-base font-bold text-[var(--text-secondary)]">Potential, but you supply the training</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    The raw intelligence is there. But you&apos;re the professor.
                    You build the curriculum, run the lessons, grade the output.
                    Most businesses burn out before they graduate it.
                  </p>
                </div>
                <div className="bg-[var(--accent-subtle)] px-6 py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">AI or Die Agent</p>
                  <p className="mt-1.5 font-space-grotesk text-base font-bold text-[var(--text-primary)]">Pre-loaded with our skills library</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                    Arrives already trained. Our proprietary skills — honed across real deployments —
                    are embedded from day one. You customize the specifics. We supply the expertise.
                  </p>
                </div>
              </div>

              {/* Skills pill list */}
              <div className="border-t border-[var(--border)] px-6 py-5 md:px-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Skills included in every deployment</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Legal contract review",
                    "Financial reporting",
                    "Lead qualification",
                    "Customer support triage",
                    "Email & calendar management",
                    "Competitive research",
                    "Invoice processing",
                    "Multi-language communication",
                    "CRM data hygiene",
                    "Meeting prep & follow-up",
                    "Risk flagging",
                    "Document summarization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    + role-specific skills
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Why the price gap */}
          <ScrollReveal delayMs={80}>
            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
              <h3 className="font-space-grotesk text-xl font-bold text-[var(--text-primary)] md:text-2xl">
                Why $500/mo vs $5/mo?
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[var(--text-secondary)]">
                OpenClaw costs $5/month because it gives you the raw platform and you do all the work.
                You spend weeks — realistically months — configuring prompts, wiring up integrations,
                training it on your business, and debugging failures. Most businesses start, stall,
                and quietly abandon it. The platform isn&apos;t the product. The configured, deployed,
                running specialist is the product.
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[var(--text-secondary)]">
                The $2,000 setup is us doing that months-long work in two weeks. The $500/month
                keeps the agent current — new model releases, performance improvements, and ongoing
                tuning as your business evolves. You&apos;re not paying for software. You&apos;re paying
                for a specialist who shows up every day and never drops the ball.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--text-muted)]">OpenClaw DIY:</span>
                  <span className="text-[var(--text-secondary)]">$5/mo + 200+ hours of your time</span>
                </div>
                <span className="text-[var(--text-muted)]">vs</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--accent)]">AI or Die:</span>
                  <span className="text-[var(--text-secondary)]">$500/mo + live in 2 weeks</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
                AI brain costs
              </h2>
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                Not included in service pricing
              </span>
            </div>
            <p className="mb-9 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
              AI agents need a model subscription. You pay providers directly — zero markup from us.
            </p>
          </ScrollReveal>
          <div className="mb-7 grid gap-5 md:grid-cols-3">
            {brainCosts.map((b, idx) => (
              <ScrollReveal key={b.provider} delayMs={idx * 70}>
                <article className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                  <h3 className="mb-4 font-semibold text-[var(--text-primary)]">{b.provider}</h3>
                  <div className="flex-1 space-y-2">
                    {b.tiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`flex items-center justify-between text-sm ${
                          tier.rec ? "font-semibold text-[var(--accent)]" : "text-[var(--text-secondary)]"
                        }`}
                      >
                        <span>
                          {tier.name}
                          {tier.rec && (
                            <span className="ml-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2 py-0.5 text-[10px] uppercase tracking-[0.08em]">
                              Recommended
                            </span>
                          )}
                        </span>
                        <span>{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-4">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Recommendation: Anthropic Max 20x ($200/mo) or OpenAI Pro ($200/mo) for
                production-grade performance. Choose Venice AI for private/on-prem workflows.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-16 pt-16">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)] mb-2">Tool &amp; API costs vary by deployment</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-2xl">Every implementation uses a different stack. These are common tools our agents integrate with — you pay providers directly, no markup from us.</p>
          </ScrollReveal>
          <ScrollReveal delayMs={60}>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "APIFY", range: "$5–49/mo" },
                { name: "Twilio", range: "Usage-based" },
                { name: "Firecrawl", range: "$16/mo" },
                { name: "PhantomBuster", range: "$56/mo" },
                { name: "Brave Search", range: "$3/mo" },
                { name: "Vercel", range: "$20/mo" },
                { name: "AgentMail", range: "$10/mo" },
                { name: "GitHub", range: "$4/mo" },
                { name: "Tailscale", range: "$6/mo" },
                { name: "Pinata", range: "$20/mo" },
                { name: "Notion", range: "$10/mo" },
              ].map((tool) => (
                <div key={tool.name} className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-sm">
                  <span className="font-semibold text-[var(--text-primary)]">{tool.name}</span>
                  <span className="ml-2 text-[var(--text-muted)]">{tool.range}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--text-muted)]">Not every agent needs all tools. We scope exact requirements during your consult.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">How it works</p>
            <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              From signed to live in two weeks.
            </h2>
            <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">
              Every deployment is human-led. We don&apos;t hand you a login and disappear.
              A real person runs you through every step — AI handles the heavy lifting,
              humans make sure it&apos;s right.
            </p>
          </ScrollReveal>

          <div className="mt-12 relative">
            {/* Vertical connector line — desktop only */}
            <div className="absolute left-[27px] top-10 hidden h-[calc(100%-5rem)] w-px bg-[var(--border)] md:block" />

            <div className="space-y-8">

              {/* Step 1 */}
              <ScrollReveal delayMs={40}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[var(--accent)] bg-[var(--bg)] text-center">
                    <span className="font-space-grotesk text-xs font-bold text-[var(--accent)] leading-none">01</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Week 1 — Day 1</p>
                        <h3 className="font-space-grotesk mt-1 text-xl font-bold text-[var(--text-primary)]">Design Session</h3>
                      </div>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">1 hour · Human-led, AI-assisted</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      We start with a live session — you talk, we map. A human consultant runs the call
                      while AI structures everything in real time: your workflows, your bottlenecks, your
                      highest-leverage roles. By the end, we know exactly which agent to build first and
                      what it needs to do.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Role scoping", "Workflow mapping", "Tool inventory", "Priority ranking"].map((tag) => (
                        <span key={tag} className="rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delayMs={80}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[var(--border)] bg-[var(--bg)] text-center">
                    <span className="font-space-grotesk text-xs font-bold text-[var(--text-secondary)] leading-none">02</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Week 1 — Days 2–5</p>
                        <h3 className="font-space-grotesk mt-1 text-xl font-bold text-[var(--text-primary)]">Custom Configuration Questionnaire</h3>
                      </div>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">Async · AI-generated, human-reviewed</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      Based on your design session, we generate a detailed questionnaire built specifically
                      for your business and the role we&apos;re deploying. Not a generic intake form —
                      a deep-dive into your brand voice, your clients, your edge cases, your SOPs.
                      You fill it on your time. We use it to train your agent with precision.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Brand voice & tone", "Client personas", "Standard procedures", "Edge cases & exceptions", "Tool credentials"].map((tag) => (
                        <span key={tag} className="rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delayMs={120}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[var(--border)] bg-[var(--bg)] text-center">
                    <span className="font-space-grotesk text-xs font-bold text-[var(--text-secondary)] leading-none">03</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Week 2</p>
                        <h3 className="font-space-grotesk mt-1 text-xl font-bold text-[var(--text-primary)]">Deployment &amp; Training Session</h3>
                      </div>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">1 hour · Human-led, AI-assisted</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      Your agent is live. We walk you through it together — a human consultant shows
                      you exactly how it works, what it can handle, where to push it, and how to get
                      the most out of it from day one. No documentation to wade through.
                      A real person walks you through your actual agent.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Live walkthrough", "Integration testing", "Edge case review", "Handoff protocol"].map((tag) => (
                        <span key={tag} className="rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 4 */}
              <ScrollReveal delayMs={160}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[var(--border)] bg-[var(--bg)] text-center">
                    <span className="font-space-grotesk text-xs font-bold text-[var(--text-secondary)] leading-none">04</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Ongoing</p>
                        <h3 className="font-space-grotesk mt-1 text-xl font-bold text-[var(--text-primary)]">Support, Optimization &amp; Upgrades</h3>
                      </div>
                      <span className="rounded-full border border-[var(--accent-border)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">AI + human · Included in $500/mo</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      You&apos;re never on your own. Your agent is monitored, improved, and kept current —
                      new model releases applied automatically, performance tuned monthly, and a human
                      available when you need one. Support is AI-first for speed, human-backed for
                      anything that matters.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Monthly optimization", "Model upgrades", "AI support 24/7", "Human escalation", "Expansion planning"].map((tag) => (
                        <span key={tag} className="rounded-full bg-[var(--bg)] border border-[var(--accent-border)] px-3 py-1 text-xs text-[var(--text-secondary)]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

            <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-10 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              What every agent comes with
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {([
              { icon: "wrench", name: "Custom-built for you", desc: "Configured to your business, tools, and processes" },
              { icon: "brain", name: "Memory that works", desc: "Remembers context, learns over time" },
              { icon: "globe", name: "Every language", desc: "Any language in, any language out, any currency" },
              { icon: "plug", name: "Tool integrations", desc: "Connects to the apps you already use" },
              { icon: "grid", name: "5,400+ integrations", desc: "Email, CRM, Slack, GitHub, and more" },
              { icon: "clock", name: "24/7 operation", desc: "No sick days, no time zones, no lag" },
              { icon: "shield", name: "Isolated infrastructure", desc: "Your data never mixes with other clients" },
              { icon: "arrow-up", name: "Monthly improvements", desc: "New models, better performance, ongoing tuning" },
              { icon: "key", name: "You own everything", desc: "All configs, data, and outputs belong to you" },
              { icon: "headset", name: "Remote support", desc: "Real humans available when you need them" },
            ] as { icon: FeatureIconKind; name: string; desc: string }[]).map((feature, idx) => (
              <ScrollReveal key={feature.name} delayMs={idx * 40}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_16px_40px_-20px_var(--accent)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)]">
                    <FeatureIcon kind={feature.icon} />
                  </div>
                  <p className="font-space-grotesk text-sm font-bold text-[var(--text-primary)]">{feature.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Deployment options
            </h2>
            <p className="mb-10 max-w-3xl text-[var(--text-secondary)]">
              We match how you already run your business.
            </p>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {deploymentOptions.map((option, idx) => (
              <ScrollReveal key={option.title} delayMs={idx * 75}>
                <article className={`flex h-full flex-col rounded-xl border p-6 ${option.cardClass}`}>
                  <div className="mb-3 flex items-center gap-2 text-[var(--accent)]">
                    <DeploymentTierIcon kind={option.icon} />
                    <h3 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    <span className="font-semibold">For:</span> {option.forWho}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    <span className="font-semibold">How:</span> {option.how}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    <span className="font-semibold">Models:</span> {option.models}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    <span className="font-semibold">Privacy:</span> {option.privacy}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-[var(--border)] mb-4" />
                    <p className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)]">
                      {option.brainMap}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-10 text-center text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Questions we actually get
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              {[
                { label: "Getting Started", indices: [0, 1, 2] },
                { label: "Roles & Capabilities", indices: [3, 4, 5] },
              ].map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{group.label}</p>
                  <div className="space-y-2">
                    {group.indices.map((i) => (
                      <details key={i} className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--text-primary)] marker:content-none">
                          <span>{faqJsonLd.mainEntity[i].name}</span>
                          <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{faqJsonLd.mainEntity[i].acceptedAnswer.text}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                { label: "Pricing & Contracts", indices: [6, 7, 8] },
                { label: "Technical & Security", indices: [9, 10, 11] },
              ].map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{group.label}</p>
                  <div className="space-y-2">
                    {group.indices.map((i) => (
                      <details key={i} className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--text-primary)] marker:content-none">
                          <span>{faqJsonLd.mainEntity[i].name}</span>
                          <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{faqJsonLd.mainEntity[i].acceptedAnswer.text}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mesh-bg border-t border-[var(--border)] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">AI or Die</p>
            <h2 className="font-space-grotesk text-balance text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
              Ready to deploy your first AI direct report?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Free consult. We&apos;ll price out the gap for your specific business — and show exactly which roles your team could hand off today.
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
            <p className="mt-5 text-sm text-[var(--text-muted)]">
              Talk to our AI agent: <a href="tel:+17869989310" className="font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">(786) 998-9310</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
