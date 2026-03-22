import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Audit — AI or Die",
  description:
    "30 minutes. We map your ops, identify which functions are agent-ready, and show you the math for your specific business. You get a written Agent Readiness Report.",
  openGraph: {
    title: "Get Your Free AI Audit — AI or Die",
    description:
      "Find out which roles in your business should be AI or Die Super Agents. Free 30-minute audit + written Agent Readiness Report.",
    url: "https://aiordie.now/audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Audit — AI or Die",
    description:
      "Find out which roles in your business should be AI or Die Super Agents. Free 30-minute audit.",
  },
  alternates: { canonical: "https://aiordie.now/audit" },
};

const AUDIT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/s4903rwq";

const whatYouGet = [
  {
    title: "Agent Readiness Report",
    desc: "A written breakdown of every role we reviewed, ranked by how agent-ready it is and what it would take to automate it.",
  },
  {
    title: "Cost Savings Estimate",
    desc: "We run the numbers. Real cost of current headcount vs. Super Agent equivalent — for your specific business, not a generic model.",
  },
  {
    title: "Recommended Agent List",
    desc: "The exact agents we'd deploy for you, what they'd own, and how they'd plug into your existing tools and workflows.",
  },
];

const whoItsFor = [
  {
    label: "5–50 person companies",
    desc: "Small enough that every hire matters. Large enough that operational overhead is eating margin.",
  },
  {
    label: "$1M–$20M revenue",
    desc: "Past product-market fit, now scaling ops. The work is piling up faster than you can hire.",
  },
  {
    label: "Founders and operators",
    desc: "You're doing 3 jobs. Your team is stretched. You know AI should help but don't know where to start.",
  },
  {
    label: "Companies burning on headcount",
    desc: "Payroll is your biggest line item and it's not buying you leverage. It's buying you bodies.",
  },
  {
    label: "Anyone who's tried AI tools and feels underwhelmed",
    desc: "Copilots, chatbots, prompts. You've seen the demos. None of it actually runs your business.",
  },
];

const objections = [
  {
    q: "Is this just another sales call?",
    a: "No. It's a working session. We look at your org chart, your ops, and your costs. You leave with a document. If it's not useful, we wasted 30 minutes — not you.",
  },
  {
    q: "We've tried AI tools. They didn't stick.",
    a: "Tools require humans to operate them. AI employees operate themselves. That's the difference. We deploy Super Agents that own functions — not copilots that assist with tasks.",
  },
  {
    q: "We're not technical.",
    a: "Good. Our clients aren't either. You don't configure the agents. You talk to them like teammates. We handle everything under the hood.",
  },
  {
    q: "What if we're not ready?",
    a: "The audit tells you that. If you're not ready, we'll say so. Most companies are more ready than they think — they just need someone to map it.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold px-3 py-1 rounded mb-6 uppercase tracking-wider">
            Free — No Obligation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-6">
            Find Out Which Roles in Your Business Should Be AI Employees
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            30 minutes. We map your ops, identify which functions are agent-ready, and show you the math for your specific business.
          </p>
          <p className="text-lg text-gray-400 max-w-xl mb-10">
            You get a written <span className="text-white font-semibold">Agent Readiness Report</span> — not a pitch deck.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded font-bold text-lg transition-colors w-full sm:w-auto text-center"
            >
              Book Your Free Audit
            </a>
            <a
              href="tel:7869989310"
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
            <span className="text-red-500 font-bold">20+ agents</span> running live across{" "}
            <span className="text-white font-bold">5 business units</span>{" "}
            — this is the same system we&apos;re selling you.
          </p>
        </div>
      </div>

      {/* ── WHAT YOU GET ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          What You Get
        </h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl">
          One 30-minute call. One written report. Three things you can actually use.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {whatYouGet.map((item) => (
            <div
              key={item.title}
              className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-colors"
            >
              <div className="w-8 h-1 bg-red-500 mb-4 rounded" />
              <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Who It&apos;s For
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl">
            This audit is built for one kind of company: growing fast, hiring slow, and operational overhead eating the gains.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsFor.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">{item.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
          How the Audit Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-red-500 font-black text-4xl">01</span>
            <h3 className="text-white font-bold text-lg">You Book a Slot</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              30 minutes on our calendar. No prep required. Show up and talk about your business.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-red-500 font-black text-4xl">02</span>
            <h3 className="text-white font-bold text-lg">We Map Your Ops</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We walk through your roles, workflows, and costs. You tell us what&apos;s slow, expensive, or bottlenecked.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-red-500 font-black text-4xl">03</span>
            <h3 className="text-white font-bold text-lg">You Get the Report</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Written Agent Readiness Report lands in your inbox. Use it however you want — even if you don&apos;t work with us.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BUILDERS ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            We Eat Our Own Cooking
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl">
            We don&apos;t sell theory. Every Super Agent type we recommend, we run internally. This website, our outreach, our ops — all of it is run by AI or Die Super Agents.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "20+", label: "Agents in production right now" },
              { stat: "5", label: "Live business units running on AI" },
              { stat: "1–2 wks", label: "Avg. time from audit to live agent" },
              { stat: "$0", label: "Cost to find out if it works for you" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-red-500 font-black text-4xl mb-2">{item.stat}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
          Fair Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {objections.map((item) => (
            <div key={item.q} className="border-l-2 border-red-500 pl-6">
              <p className="text-white font-bold mb-2">{item.q}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#111111] border-t border-gray-800 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            30 Minutes to Know If AI Works for Your Business
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Free. No pitch. No pressure. Just an honest look at where Super Agents fit — or don&apos;t — in your company.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded font-bold text-lg transition-colors w-full sm:w-auto text-center"
            >
              Book Your Free Audit
            </a>
            <a
              href="tel:7869989310"
              className="text-gray-300 hover:text-white transition-colors text-lg font-semibold"
            >
              (786) 998-9310
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            Or email us at{" "}
            <a href="mailto:aiordie@agentmail.to" className="text-gray-400 hover:text-white transition-colors">
              aiordie@agentmail.to
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
