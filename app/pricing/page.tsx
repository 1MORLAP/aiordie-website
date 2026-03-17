import type { Metadata } from "next";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing — AI or Die",
  description:
    "Simple, transparent pricing for AI employees. $2,000 setup + $500/mo per agent. Volume bundles from $1,200/mo. No contracts, cancel anytime.",
  openGraph: {
    title: "AI Employee Pricing — AI or Die",
    description:
      "$2,000 setup + $500/mo per agent. Volume bundles from $1,200/mo. No contracts, cancel anytime.",
    url: "https://aiordie.now/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Employee Pricing — AI or Die",
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
      name: "How long does it take to get started with an AI employee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 1-2 weeks from your initial consult to a live deployed agent. We handle all configuration, integrations, and testing.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge to use AI employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "None. We handle all setup, deployment, and ongoing management. You interact with your agents just like you would a human employee — through chat, email, or Slack.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my AI employee subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No long-term contracts. Cancel with 30 days notice. You keep all your agent configurations and files — zero lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models do the agents use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend Anthropic Max 20x ($200/mo) or OpenAI Pro ($200/mo) for best performance. We also support Venice AI (private AI, API pay-per-use). You choose and subscribe directly — we never upcharge on model costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is my business data safe with AI employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each client runs on isolated infrastructure — no shared environments between clients. Your data never mixes with other businesses. We also offer on-premise deployment for maximum data control.",
      },
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
      { name: "Pro", price: "$20/mo" },
      { name: "Max 5x", price: "$100/mo" },
      { name: "Max 20x", price: "$200/mo", rec: true },
    ],
  },
  {
    provider: "OpenAI",
    tiers: [
      { name: "Plus", price: "$20/mo" },
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
    title: "Cloud (Public Models)",
    icon: "cloud",
    forWho: "Cloud-centric teams using Google Drive, Dropbox, cloud CRMs, and SaaS tools.",
    how: "Hosted AI agents run in the cloud with public model providers.",
    models: "Anthropic (Claude), OpenAI",
    privacy: "Standard cloud security. Data is processed by public AI providers.",
    brainMap: "AI Brain Cost mapping: Anthropic Pro/Max or OpenAI Plus/Pro subscriptions.",
    cardClass: "border-[var(--border)] bg-[var(--bg-card)]",
  },
  {
    title: "Private Cloud (Private Models)",
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
    brainMap: "AI Brain Cost mapping: self-hosted model stack or Venice AI on-prem licensing.",
    cardClass: "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg)]",
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

const included = [
  "Custom-built for you",
  "Memory that works",
  "Tool integrations",
  "5,400+ pre-built integrations (email, CRM, Slack, GitHub, and more)",
  "24/7 operation",
  "Isolated infrastructure",
  "Monthly improvements",
  "You own everything",
  "Remote support included",
];

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
              Transparent pricing, no lock-in contracts, and deployment in 1–2
              weeks. You pay for execution, not overhead.
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={200}>
            <div className="mt-7 inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              Save $330K/yr with 3 AI employees
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
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--danger)]">
                  Old way
                </p>
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
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--success)]">
                  AI or Die model
                </p>
                <div className="font-space-grotesk text-5xl font-bold text-[var(--text-primary)]">
                  $<AnimatedCounter to={19400} />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  3 AI employees/year with 24/7 coverage and ongoing optimization.
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
                  <p className="mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                    {t.name}
                  </p>
                  <p className="font-space-grotesk text-3xl font-bold text-[var(--text-primary)]">
                    {t.monthly}
                  </p>
                  <p className="mb-4 text-sm text-[var(--text-muted)]">{t.setup} setup</p>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {t.desc}
                  </p>
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
              AI agents need a model subscription. You pay providers directly —
              zero markup from us.
            </p>
          </ScrollReveal>

          <div className="mb-7 grid gap-5 md:grid-cols-3">
            {brainCosts.map((b, idx) => (
              <ScrollReveal key={b.provider} delayMs={idx * 70}>
                <article className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                  <h3 className="mb-4 font-semibold text-[var(--text-primary)]">{b.provider}</h3>
                  <div className="space-y-2">
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

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-10 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              What every agent comes with
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {included.map((item, idx) => (
              <ScrollReveal key={item} delayMs={idx * 45}>
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--text-secondary)]">{item}</span>
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
              Our deployments follow the pattern you&apos;ve already established. We match how you already run your business.
            </p>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {deploymentOptions.map((option, idx) => {
              const isOnPrem = option.icon === "server";

              return (
                <ScrollReveal key={option.title} delayMs={idx * 75}>
                  <article className={`rounded-xl border p-6 ${option.cardClass}`}>
                    <div className={`mb-3 flex items-center gap-2 ${isOnPrem ? "text-[var(--bg)]" : "text-[var(--accent)]"}`}>
                      <DeploymentTierIcon kind={option.icon} />
                      <h3 className={`font-space-grotesk text-2xl font-bold ${isOnPrem ? "text-[var(--bg)]" : "text-[var(--text-primary)]"}`}>
                        {option.title}
                      </h3>
                    </div>
                    <p className={`text-sm leading-relaxed ${isOnPrem ? "text-[var(--bg)]" : "text-[var(--text-secondary)]"}`}>
                      <span className="font-semibold">For:</span> {option.forWho}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed ${isOnPrem ? "text-[var(--bg)]" : "text-[var(--text-secondary)]"}`}>
                      <span className="font-semibold">How:</span> {option.how}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed ${isOnPrem ? "text-[var(--bg)]" : "text-[var(--text-secondary)]"}`}>
                      <span className="font-semibold">Models:</span> {option.models}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed ${isOnPrem ? "text-[var(--bg)]" : "text-[var(--text-secondary)]"}`}>
                      <span className="font-semibold">Privacy:</span> {option.privacy}
                    </p>
                    <p className={`mt-3 rounded-lg border px-3 py-2 text-xs font-medium ${isOnPrem ? "border-[var(--bg)] bg-[var(--bg)] text-[var(--text-primary)]" : "border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)]"}`}>
                      {option.brainMap}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-10 text-center text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              FAQ
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((item, idx) => (
              <ScrollReveal key={item.name} delayMs={idx * 60}>
                <details className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--text-primary)] marker:content-none">
                    <span>{item.name}</span>
                    <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-bg border-t border-[var(--border)] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              AI or Die
            </p>
            <h2 className="font-space-grotesk text-balance text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
              Ready to deploy your first AI employee?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Free consult, no pressure. We&apos;ll scope the first role, map integrations,
              and show exactly what gets automated.
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
