import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Pricing — Deploy + Train + Advise",
  description:
    "One-time deployment pricing for AI employees you own. Training is included. Advisory is optional.",
  openGraph: {
    title: "AIorDie Pricing — Deploy + Train + Advise",
    description:
      "We build it. You own it. You run it. One-time deployment plus optional advisory.",
    url: "https://aiordie.now/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIorDie Pricing — Deploy + Train + Advise",
    description:
      "Your AI employees. Your infrastructure. Your control. We deploy them. You own them.",
  },
  alternates: { canonical: "https://aiordie.now/pricing" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you run the agents after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We deploy on your infrastructure, hand over access, and train your team to run it independently.",
      },
    },
    {
      "@type": "Question",
      name: "Do you hold our API keys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You pay providers directly and keep your own credentials. We never see your API keys.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in every deployment tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discovery call, custom agent design, deployment on your infrastructure, hands-on training, runbook, AI first-line support training, and 5 hours of post-deploy advisory.",
      },
    },
    {
      "@type": "Question",
      name: "How does support escalation work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Step 1: ask your AI employees (free). Step 2: check your runbook (free). Step 3: call us through optional advisory hours.",
      },
    },
  ],
};

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/aod";

const deploymentTiers = [
  {
    name: "STARTER",
    price: "$5,000",
    detail: "1-2 agents",
    points: [
      "Discovery + design",
      "Deployment on your infrastructure",
      "Hands-on training + runbook",
      "5 hours post-deploy advisory",
    ],
  },
  {
    name: "GROWTH",
    price: "$10,000",
    detail: "3-5 agents",
    points: [
      "Everything in Starter",
      "Multi-agent workflows",
      "Cross-team orchestration",
      "5 hours post-deploy advisory",
    ],
  },
  {
    name: "SCALE",
    price: "$15,000–$20,000",
    detail: "6-10 agents",
    points: [
      "Full AI workforce design",
      "Workflow architecture",
      "Hands-on leadership training",
      "5 hours post-deploy advisory",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    detail: "10+ agents",
    points: [
      "Enterprise-wide rollouts",
      "Custom governance patterns",
      "Dedicated solution design",
      "Executive enablement",
    ],
  },
];

const advisoryTiers = [
  {
    name: "LIGHT",
    price: "$1,500/mo",
    detail: "4 hours / month",
    points: ["Monthly review", "Async support", "Problem-solving sessions"],
  },
  {
    name: "STANDARD",
    price: "$2,500/mo",
    detail: "8 hours / month",
    points: ["Strategy sessions", "New agent design", "Priority advisory queue"],
  },
  {
    name: "PRIORITY",
    price: "$4,000/mo",
    detail: "16 hours / month",
    points: ["Priority response", "Roadmapping", "High-frequency advisory access"],
  },
];

export default async function PricingPage() {
  const t = await getTranslations();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="grain-overlay mesh-bg border-b border-[var(--border)] px-6 pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Pricing</p>
            <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
              Deploy + Train + Advise
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
              One-time deployment. Included training. Optional advisory. We deploy AI employees on your infrastructure,
              then hand over control.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              AI support is free. Human support is premium.
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-8 text-3xl font-bold tracking-tight md:text-5xl">Deployment (one-time)</h2>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deploymentTiers.map((tier, idx) => (
              <ScrollReveal key={tier.name} delayMs={idx * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">{tier.name}</p>
                  <p className="mt-2 font-space-grotesk text-3xl font-bold text-[var(--text-primary)]">{tier.price}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{tier.detail}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--text-secondary)]">
                    {tier.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CONSULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 text-center text-sm font-semibold text-[var(--accent)]"
                  >
                    Deploy AI employees
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-8 text-3xl font-bold tracking-tight md:text-5xl">Advisory (optional monthly)</h2>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {advisoryTiers.map((tier, idx) => (
              <ScrollReveal key={tier.name} delayMs={idx * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">{tier.name}</p>
                  <p className="mt-2 font-space-grotesk text-3xl font-bold text-[var(--text-primary)]">{tier.price}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{tier.detail}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--text-secondary)]">
                    {tier.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CONSULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-lg border border-[var(--border)] px-4 py-2 text-center text-sm font-semibold text-[var(--text-primary)]"
                  >
                    Book advisory hours
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <ScrollReveal>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Service model</p>
              <h3 className="font-space-grotesk mt-2 text-2xl font-bold text-[var(--text-primary)]">Three phases</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                <li><strong>1. DEPLOY:</strong> assess, design, build, deploy on your infrastructure, hand over access.</li>
                <li><strong>2. TRAIN:</strong> train your team, deliver runbooks, teach ownership workflows.</li>
                <li><strong>3. ADVISE:</strong> optional expert support for edge cases and new initiatives.</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Support escalation</p>
              <h3 className="font-space-grotesk mt-2 text-2xl font-bold text-[var(--text-primary)]">Free first. Advisory last.</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                <li><strong>Step 1:</strong> Ask your AI employees (free)</li>
                <li><strong>Step 2:</strong> Check your runbook (free)</li>
                <li><strong>Step 3:</strong> Call us (advisory)</li>
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space-grotesk mb-6 text-3xl font-bold tracking-tight md:text-5xl">How we differ</h2>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Them: Let us run your AI.", "Us: We build it. You own it. You run it."],
              ["Them: Our platform hosts your agents.", "Us: Your platform hosts your agents."],
              ["Them: Share your API keys with us.", "Us: We never see your API keys."],
              ["Them: Cancel and lose everything.", "Us: Cancel and keep everything."],
            ].map((pair) => (
              <div key={pair[0]} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <p className="text-sm text-[var(--text-muted)]">{pair[0]}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{pair[1]}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--text-secondary)]">
            Clients pay providers directly for 1Password, LLM API keys, hosting, and Discord or Telegram workflows. Slack is supported.
          </p>
        </div>
      </section>

      <section className="mesh-bg border-t border-[var(--border)] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">AIorDie</p>
            <h2 className="font-space-grotesk text-balance text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
              We deploy AI employees into your business. You own them. We&apos;re here if you need us.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-block rounded-xl px-10 py-4 text-lg font-bold"
              >
                Deploy AI employees
              </a>
              <a
                href="tel:+17869989310"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-10 py-4 text-lg font-bold text-[var(--text-primary)]"
              >
                {t("nav.call_us")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
