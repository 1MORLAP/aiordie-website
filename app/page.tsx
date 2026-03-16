import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI or Die — Do the work you love. Outsource the drudgery to agents.",
  description:
    "AI employees running 24/7 in your business. No salary, no overhead, no PTO. We deploy and manage AI employee teams so you can focus on the work only you can do.",
  openGraph: {
    title: "AI or Die — Do the work you love. Outsource the drudgery to agents.",
    description:
      "AI employees running 24/7 in your business. No salary, no overhead, no PTO.",
    url: "https://aiordie.now",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI or Die — Do the work you love. Outsource the drudgery to agents.",
    description: "AI employees running 24/7 in your business. No salary, no overhead, no PTO.",
  },
  alternates: { canonical: "https://aiordie.now" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI or Die",
  url: "https://aiordie.now",
  description:
    "AI employees running 24/7 in your business. We deploy and manage AI employee teams so you can focus on the work only you can do.",
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
  { n: "01", title: "Free Consult", desc: "Tell us the roles you need" },
  { n: "02", title: "Scope & Design", desc: "Build plan in 48 hours, you approve" },
  { n: "03", title: "Build & Deploy", desc: "Live in 1-2 weeks" },
  { n: "04", title: "Start Using It", desc: "Talk to your agents like teammates" },
  { n: "05", title: "We Keep Improving", desc: "Monthly upgrades, ongoing support" },
];

const problems = [
  {
    label: "Chatbots",
    verdict: "Talk but don't do",
    desc: "They answer questions from a script. No memory, no action, no initiative. Every conversation starts from zero.",
  },
  {
    label: "Copilots",
    verdict: "Marginal improvements",
    desc: "They make you 20% faster at things you already do. You're still doing the work.",
  },
  {
    label: "Agents",
    verdict: "Hard to set up, sit idle",
    desc: "Most agent setups require devs, break constantly, and wait for explicit commands. They don't actually run your business.",
  },
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
      <section className="relative px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-4">
            AI or Die
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Do the work you love. Outsource the drudgery to agents.
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            We deploy AI employees into your operations — analysts, coordinators, operators — running 24/7. You do the work only you can do. Agents handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded font-bold text-lg transition-colors w-full sm:w-auto text-center"
            >
              Book a Free Consult
            </a>
            <a
              href="tel:+17869989310"
              className="text-gray-400 hover:text-white transition-colors text-lg font-medium"
            >
              (786) 998-9310
            </a>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="bg-[#111111] border-y border-gray-800 py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 font-medium">
            <span className="text-red-500 font-bold">20+ agents</span> across{" "}
            <span className="text-white font-bold">5 live business units</span>{" "}
            — right now, in production.
          </p>
        </div>
      </div>

      {/* ── THE OLD WAY IS BROKEN ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          The Old Way Is Broken
        </h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl">
          Every AI approach before now has missed the point. Here&apos;s why.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((p) => (
            <div
              key={p.label}
              className="bg-[#111111] border border-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-bold text-lg">{p.label}</span>
                <span className="text-red-500 text-sm font-semibold bg-red-500/10 px-2 py-1 rounded">
                  {p.verdict}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="border-l-4 border-red-500 pl-6">
          <p className="text-xl font-bold text-white">We do it differently.</p>
          <p className="text-gray-400 mt-1">
            AI employees that have memory, run autonomously, and actually do the
            work.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 mb-14 text-lg">
            From idea to live AI employees in under two weeks.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col">
                <div className="text-red-500 font-black text-4xl mb-3">
                  {s.n}
                </div>
                <div className="text-white font-bold mb-2">{s.title}</div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT TYPES ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Agent Types
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Every agent is custom-built for your business. Here&apos;s what we can
          deploy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agentTypes.map((a) => (
            <div
              key={a.name}
              className="bg-[#111111] border border-gray-800 hover:border-gray-600 rounded-lg p-5 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">{a.name}</div>
                  <div className="text-gray-400 text-sm">{a.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK PRICING ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Pricing</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="text-white font-semibold">
                $2,000 setup · $500/month per agent
              </span>
              <span>·</span>
              <span className="text-green-400 font-semibold">
                3-agent bundle from $1,200/mo (volume discount)
              </span>
            </div>
          </div>
          <Link
            href="/pricing"
            className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded font-semibold transition-colors whitespace-nowrap"
          >
            See Full Pricing →
          </Link>
        </div>
      </section>

      {/* ── DEPLOYMENT OPTIONS ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
          Deployment Options
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Cloud",
              desc: "Fully managed. We host, monitor, and maintain everything. Zero infrastructure overhead for you.",
              icon: "☁️",
            },
            {
              title: "On-Premise",
              desc: "Your data stays on your hardware. Full control, maximum privacy, complete ownership.",
              icon: "🏢",
            },
            {
              title: "Hybrid",
              desc: "Sensitive data on-prem, compute in the cloud. Best of both worlds.",
              icon: "⚡",
            },
          ].map((d) => (
            <div
              key={d.title}
              className="bg-[#111111] border border-gray-800 rounded-lg p-6"
            >
              <div className="text-3xl mb-4">{d.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{d.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE MATH ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            The Math Is Simple
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <div className="text-red-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                The Old Way
              </div>
              <div className="text-white font-black text-3xl mb-2">
                ~$350K/year
              </div>
              <p className="text-gray-400 text-sm">
                Hiring legal + financial + sales coordinators — salary,
                benefits, overhead, PTO.
              </p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <div className="text-green-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                AI Employees
              </div>
              <div className="text-white font-black text-3xl mb-2">
                $19,400 year one
              </div>
              <p className="text-gray-400 text-sm">
                3 AI employees. $5,000 setup + $1,200/mo. Year 2+ drops to
                $14,400/yr. 24/7, no PTO, no overhead.
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-semibold">
            You avoid{" "}
            <span className="text-white font-black">$330K in hires</span> —
            and agents work 24/7.
          </p>
        </div>
      </section>

      {/* ── WE EAT OUR OWN DOG FOOD ── */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <div className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">
          We Eat Our Own Dog Food
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          We proved it on ourselves.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Tomek Group runs 20+ AI agents across 5 business units in production
          every day. We&apos;re not pitching a vision. We&apos;re selling what
          we already use.
        </p>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
          This website is written, updated, and iterated by an AI CMO — spinning up sub-agents to build, test, and ship. No human copywriters. No dev sprints. Just agents doing their jobs.
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
