import type { Metadata } from "next";
import Link from "next/link";
import {getTranslations, setRequestLocale} from "next-intl/server";
import AnimatedCounter from "@/components/AnimatedCounter";
import LiveFleetDashboard from "@/components/LiveFleetDashboard";
import { BotIcon, CogIcon, UserIcon } from "@/components/Icons";
import OrgChart from "@/components/OrgChart";
import ScrollReveal from "@/components/ScrollReveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import AnimatedTimeline from "@/components/AnimatedTimeline";

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/aod";

export const metadata: Metadata = {
  title: "AI or Die — Scale Leaders With AI Teams",
  description:
    "Give every exec AI or Die Super Agents. AI or Die deploys Super Agents for marketing, sales, finance, and ops in 1–2 weeks.",
  openGraph: {
    title: "AI or Die — Scale Leaders With AI Teams",
    description:
      "22 agents live across 4 business units. We deploy the same system into your company.",
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
    "AI or Die Super Agents deployed as direct reports to existing leaders, so companies scale output without scaling headcount.",
  telephone: "+17869989310",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
  ],
};

const caseStudies = [
  {
    name: "TomBot",
    badge: "Zero-human operations",
    line: "A full company run by AI or Die Super Agents across leadership, execution, and reporting.",
    color: "#FF4C00",
    href: "https://www.realtom.bot/",
  },
  {
    name: "NEXORA",
    badge: "HKEX-listed · Global scale",
    line: "HKEX-listed Web3 infrastructure using AI teams to scale without proportional hiring.",
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
    line: "Our own site, strategy, and output are operated by the same Super Agent model.",
    color: "#10B981",
    href: "https://aiordie.now",
  },
];

const featuredRoles = [
  {
    name: "AI Chief of Staff",
    summary: "Coordinates cross-functional execution, daily priorities, and leadership-level blockers.",
  },
  {
    name: "AI Content Writer",
    summary: "Creates high-output blog, web, email, and social content in your exact brand voice.",
  },
  {
    name: "AI SDR",
    summary: "Prospects, personalizes outreach, qualifies leads, and fills your calendar with meetings.",
  },
  {
    name: "AI Financial Analyst",
    summary: "Builds forecasts, tracks burn, and turns numbers into board-ready decision support.",
  },
  {
    name: "AI Developer",
    summary: "Ships code, handles bug fixes, and accelerates product execution across your stack.",
  },
  {
    name: "AI Customer Support Agent",
    summary: "Handles tickets at scale, resolves common issues fast, and protects response-time SLAs.",
  },
];

const deploymentTiers = [
  {
    name: "Cloud",
    icon: "cloud",
    forWho: "For cloud-centric teams using SaaS tools like Google Drive, Dropbox, and cloud CRMs.",
    how: "Hosted AI agents run in the cloud with industry-standard public models.",
    models: "Anthropic (Claude), OpenAI",
    cardClass: "border-[var(--border)] bg-[var(--bg-card)]",
    textClass: "text-[var(--text-secondary)]",
  },
  {
    name: "Private Cloud",
    icon: "shield",
    forWho: "For privacy-conscious cloud teams in regulated or sensitive environments.",
    how: "Agents and private models are deployed on dedicated private cloud infrastructure.",
    models: "Venice AI (private)",
    cardClass: "border-[var(--border)] bg-[var(--bg-card)]",
    textClass: "text-[var(--text-secondary)]",
  },
  {
    name: "On-Premise",
    icon: "server",
    forWho: "For teams running in own data centers.",
    how: "Models, agents, and infrastructure run fully on your own hardware.",
    models: "Self-hosted open-source models",
    cardClass: "border-[var(--border)] bg-[var(--bg-card)]",
    textClass: "text-[var(--text-secondary)]",
  },
] as const;

const technologyProviders = [
  {
    name: "OpenClaw",
    href: "https://openclaw.ai",
    description: "Open-source AI agent framework. The foundation our entire agent fleet runs on.",
    function: "open-source AI agent orchestration and deployment framework",
  },
  {
    name: "Nous Research",
    href: "https://nousresearch.com",
    description: "Hermes Agent — self-improving AI with built-in learning loops. Open-source language models for agentic workflows.",
    function: "self-improving agentic AI and open-source language models",
  },
  {
    name: "Venice AI",
    href: "https://venice.ai",
    description: "Private AI. API pay-per-use inference for privacy-first deployments.",
    function: "private, pay-per-use inference for privacy-first deployments",
  },
  {
    name: "OpenAI",
    href: "https://openai.com",
    description: "GPT models for cloud and production Super Agent deployments.",
    function: "GPT model intelligence for production Super Agent deployments",
  },
  {
    name: "Anthropic",
    href: "https://anthropic.com",
    description: "Claude models. Our recommended brain for production Super Agents.",
    function: "Claude model intelligence for production Super Agents",
  },
  {
    name: "EXO Labs",
    href: "https://github.com/exo-explore/exo",
    description: "Distributed AI inference across consumer hardware. Run frontier models locally.",
    function: "distributed local inference across consumer hardware",
  },
] as const;

const technologyPartnersJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI or Die Technology Partners",
  itemListElement: technologyProviders.map((provider, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Organization",
      name: provider.name,
      url: provider.href,
      description: provider.description,
    },
  })),
};

function DeploymentIcon({ kind }: { kind: "cloud" | "shield" | "server" }) {
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

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI or Die",
    "url": "https://aiordie.now",
    "logo": "https://aiordie.now/brand/circle-mark-orange.svg",
    "description": "AI or Die deploys AI Super Agents as direct reports to existing business leaders. 34 roles across every department. Deployed in 1-2 weeks.",
    "telephone": "+17869989310",
    "address": [
      { "@type": "PostalAddress", "addressLocality": "Miami", "addressRegion": "FL", "addressCountry": "US" },
      { "@type": "PostalAddress", "addressLocality": "Seattle", "addressRegion": "WA", "addressCountry": "US" }
    ],
    "sameAs": ["https://aiordie.now"],
    "offers": {
      "@type": "Offer",
      "name": "AI Super Agent Deployment",
      "price": "500",
      "priceCurrency": "USD",
      "description": "$2,000 setup + $500/month per agent. Deployed in 1-2 weeks."
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technologyPartnersJsonLd) }}
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
                {t('hero.headline_1')}
                <br />
                <span className="text-[var(--accent)]">{t('hero.headline_2')}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={140}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">{t(\'hero.subhead\')}</p>
            </ScrollReveal>

            <ScrollReveal delayMs={220}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <div className="stat-pill rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)]">
                  <AnimatedCounter to={22} /> Agents
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
                  {t('hero.cta_consult')}
                </a>
<a
                href="tel:+17869989310"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-7 py-3 text-base font-bold text-[var(--text-primary)] transition-all hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t('hero.cta_call')}
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
                  to={22}
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
              Eight core agents shown below — including CPO and HRO. 22 are live across four business units. This infrastructure runs every day before a single sales call.
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
            <p className="mt-10 max-w-3xl text-[var(--text-secondary)]">
              High-value leaders drowning in low-value tasks — that&apos;s the founder trap. Your team is doing $330,000 worth of work that AI could handle for $19,400. Most business owners don&apos;t realize the gap until they price it out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Deployment models */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Deployment Models
            </p>
            <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              We deploy where your business already runs.
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {deploymentTiers.map((tier, idx) => (
              <ScrollReveal key={tier.name} delayMs={idx * 70}>
                <article className={`h-full rounded-2xl border p-6 ${tier.cardClass}`}>
                  <div className={`mb-3 flex items-center gap-2 ${tier.textClass}`}>
                    <DeploymentIcon kind={tier.icon} />
                    <h3 className="font-space-grotesk text-2xl font-bold">{tier.name}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${tier.textClass}`}>
                    <span className="font-semibold">For:</span> {tier.forWho}
                  </p>
                  <p className={`mt-2 text-sm leading-relaxed ${tier.textClass}`}>
                    <span className="font-semibold">How:</span> {tier.how}
                  </p>
                  <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.12em] ${tier.textClass}`}>
                    Models: {tier.models}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delayMs={200}>
            <p className="mt-8 max-w-3xl text-[var(--text-secondary)]">
              Our deployments follow the pattern you&apos;ve already established. If your data lives on Google Drive, we deploy in the cloud. If it lives in your data center, we deploy there. We match how you already run your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Powered by */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Powered By
            </p>
            <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              The technology behind AI or Die&apos;s Super Agent deployments
            </h2>
            <p className="max-w-3xl text-[var(--text-secondary)]">
              We build on the best. These are the platforms, models, and infrastructure behind every AI or Die deployment.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyProviders.map((provider, idx) => (
              <ScrollReveal key={provider.name} delayMs={idx * 70}>
                <a
                  href={provider.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AI or Die uses ${provider.name} for ${provider.function}. Visit ${provider.name} website.`}
                  className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_14px_34px_-24px_var(--accent)]"
                >
                  <h3 className="font-space-grotesk text-3xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {provider.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{provider.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Visit provider →
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
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
                  className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)]"
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
                <AnimatedCounter to={22} className="font-space-grotesk text-5xl font-bold" />
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
              { icon: UserIcon, title: "Human", text: "Consult call is with a real human, directly." },
              { icon: BotIcon, title: "AI", text: "Agent conversations are clearly marked AI." },
              { icon: CogIcon, title: "AI", text: "Operational outputs are labeled by source agent." },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.title + i} delayMs={i * 70}>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                    <Icon className="mb-3 h-6 w-6 text-[var(--accent)]" />
                    <p className="font-space-grotesk text-xl font-bold text-[var(--text-primary)]">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multilingual */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Every Language. Every Currency.
            </p>
            <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Your Super Agents speak every language your business does.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="max-w-3xl text-[var(--text-secondary)]">
              AI or Die Super Agents are multilingual by default. Documents, invoices, and research can be submitted in any language and any currency — the output comes back in whatever language you need. If your team works in Spanish but reports need to be in English, done. If a client sends contracts in German, your AI Legal Counsel reads them natively.
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ScrollReveal delayMs={100}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <p className="font-space-grotesk text-xl font-bold text-[var(--text-primary)]">Input</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Submit documents, data, and instructions in any language. Invoices in any currency.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={170}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <p className="font-space-grotesk text-xl font-bold text-[var(--text-primary)]">Process</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Agents understand context across languages — no translation layer, no loss of meaning.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={240}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <p className="font-space-grotesk text-xl font-bold text-[var(--text-primary)]">Output</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Get results in whichever language you need. Same agent, any language, zero overhead.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-2 text-3xl font-bold tracking-tight md:text-5xl">{t('how.headline')}</h2>
            <p className="mb-10 text-[var(--text-secondary)]">Five steps from consult to full deployment.</p>
          </ScrollReveal>

          <AnimatedTimeline />
        </div>
      </section>

      {/* Roles */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight md:text-4xl">{t('roles.headline')}</h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Six featured roles below. Full role library covers every major business function.
              </p>
            </div>
            <Link
              href="/roles"
              className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              See all 34 roles →
            </Link>
          </div>

          {/* Super-agent callout */}
          <div className="mb-8 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-6 md:p-8">
            <div className="flex flex-wrap items-start gap-5">
              <div className="flex-1 min-w-[240px]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">The agent advantage</p>
                <h3 className="font-space-grotesk mt-2 text-xl font-bold text-[var(--text-primary)] md:text-2xl">
                  One agent. Multiple roles.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  With people, you hire a CFO or a lawyer. Never both. Skills don&apos;t stack like that.
                  With agents, they do. We regularly deploy single agents that cover finance <em>and</em> legal,
                  or marketing <em>and</em> sales — because there&apos;s no cognitive overhead, no context-switching cost,
                  no divided attention. One agent, configured across multiple disciplines, running everything simultaneously.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  We call these super-agents. When we scope your deployment, we&apos;ll tell you exactly
                  where combining roles saves you money without sacrificing output quality.
                </p>
              </div>
              <div className="shrink-0 rounded-xl border border-[var(--accent-border)] bg-[var(--bg)] p-5 min-w-[180px]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Common combos</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                  {[
                    "Finance + Legal",
                    "Marketing + Sales",
                    "Design + Engineering",
                    "Ops + Customer Success",
                    "Research + Content",
                  ].map((combo) => (
                    <li key={combo} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {combo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredRoles.map((role, idx) => (
              <ScrollReveal key={role.name} delayMs={idx * 60}>
                <article className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_20px_40px_-30px_var(--accent)]">
                  <h3 className="font-space-grotesk text-lg font-bold text-[var(--text-primary)]">{role.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{role.summary}</p>
                </article>
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
            <h2 className="font-space-grotesk mb-8 text-center text-3xl font-bold tracking-tight md:text-5xl">{t('math.headline')}</h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            <ScrollReveal>
              <article className="rounded-2xl border border-rose-500/35 bg-rose-500/10 p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-rose-700 dark:text-rose-300">{t('math.old_label')}</p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={350} suffix="K" />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">Three human hires, overhead, downtime, and long recruiting cycles.</p>
              </article>
            </ScrollReveal>

            <ScrollReveal delayMs={90}>
              <article className="rounded-2xl border border-emerald-500/35 bg-emerald-500/10 p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">{t('math.new_label')}</p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={19.4} decimals={1} suffix="K" />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">Equivalent coverage with Super Agents running full-time, all year.</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ArchitectureDiagram />

      {/* Final CTA */}
      <section className="mesh-bg border-t border-[var(--border)] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">AI or Die</p>
            <h2 className="font-space-grotesk text-balance text-4xl font-bold tracking-tight md:text-6xl">
              {t('cta.headline')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              {t('cta.subhead')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-block rounded-xl px-10 py-4 text-lg font-bold"
              >
                {t('cta.book')}
              </a>
              <a
                href="tel:+17869989310"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-10 py-4 text-lg font-bold text-[var(--text-primary)] transition-all hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t('nav.call_us')}
              </a>
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              {t('cta.phone_label')}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
