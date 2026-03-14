import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — AI or Die",
  description:
    "Simple, transparent pricing for AI employees. From $500/mo per agent.",
};

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/nexora";

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
      { name: "Max 5x", price: "$100/mo", rec: true },
      { name: "Max 20x", price: "$200/mo" },
    ],
  },
  {
    provider: "OpenAI",
    tiers: [
      { name: "Plus", price: "$20/mo" },
      { name: "Pro", price: "$200/mo" },
    ],
  },
  {
    provider: "Venice AI",
    tiers: [{ name: "Plans", price: "$10–50/mo" }],
  },
];

const included = [
  "Custom-built for you",
  "Memory that works",
  "Tool integrations",
  "5,400+ community skills",
  "24/7 operation",
  "Isolated infrastructure",
  "Monthly improvements",
  "You own everything",
  "Remote support included",
];

export default function PricingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
          Pricing
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Transparent, simple. No hidden fees. AI employees cost a fraction of
          human hires — and work around the clock.
        </p>
      </section>

      {/* ── THE MATH ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8">The Math</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">
                For Businesses
              </div>
              <div className="flex items-start gap-6">
                <div className="text-center">
                  <div className="text-red-400 font-black text-2xl">$350K</div>
                  <div className="text-gray-500 text-xs mt-1">
                    3 human hires/yr
                  </div>
                </div>
                <div className="text-gray-600 text-2xl font-bold self-center">
                  vs
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-black text-2xl">
                    $19,400
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    3 AI agents/yr
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">
                For Individuals
              </div>
              <div className="flex items-start gap-6">
                <div className="text-center">
                  <div className="text-red-400 font-black text-2xl">$200+</div>
                  <div className="text-gray-500 text-xs mt-1">
                    lawyer per hour
                  </div>
                </div>
                <div className="text-gray-600 text-2xl font-bold self-center">
                  vs
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-black text-2xl">
                    $1,200
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    full staff/mo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-12">
          Choose Your Team Size
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-lg p-6 flex flex-col border ${
                t.highlight
                  ? "bg-red-500/10 border-red-500"
                  : "bg-[#111111] border-gray-800"
              }`}
            >
              {t.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {t.badge}
                </div>
              )}
              <div className="text-gray-400 text-sm font-semibold mb-2">
                {t.name}
              </div>
              <div className="text-white font-black text-3xl mb-1">
                {t.monthly}
              </div>
              <div className="text-gray-500 text-sm mb-4">
                {t.setup} setup
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {t.desc}
              </p>
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block text-center py-3 rounded font-semibold text-sm transition-colors ${
                  t.highlight
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "border border-gray-700 hover:border-gray-400 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAIN COSTS ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-black text-white">
              AI Brain Costs
            </h2>
            <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30">
              Not Included in Our Pricing
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-10 max-w-2xl">
            AI agents need access to an AI model (the &quot;brain&quot;). You
            subscribe directly — we never upcharge on compute costs. These are
            your only additional costs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {brainCosts.map((b) => (
              <div
                key={b.provider}
                className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5"
              >
                <h3 className="text-white font-bold mb-4">{b.provider}</h3>
                <div className="space-y-2">
                  {b.tiers.map((t) => (
                    <div
                      key={t.name}
                      className={`flex justify-between items-center text-sm ${
                        t.rec ? "text-green-400 font-semibold" : "text-gray-400"
                      }`}
                    >
                      <span>
                        {t.name}
                        {t.rec && (
                          <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </span>
                      <span className={t.rec ? "text-green-400" : "text-gray-300"}>
                        {t.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border border-green-500/30 bg-green-500/5 rounded-lg p-4 max-w-2xl">
            <p className="text-green-400 text-sm font-medium">
              💡 Recommendation: Anthropic Max 5x ($100/mo) covers 3-5 agents
              comfortably — the sweet spot for most clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-10">
          What Every Agent Comes With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {included.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-[#111111] border border-gray-800 rounded-lg px-5 py-4"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span className="text-gray-300 font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111111] border-t border-gray-800 px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Ready to build your AI team?
        </h2>
        <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
          Free consult, no pressure. We&apos;ll scope your first agent and show
          you what it can do in your specific business.
        </p>
        <a
          href={CONSULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded font-bold text-lg transition-colors"
        >
          Book a Free Consult
        </a>
      </section>
    </>
  );
}
