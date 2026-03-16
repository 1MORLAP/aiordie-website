import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI or Die — AI Employees Running Real Businesses Right Now",
  description:
    "20+ AI employees running live operations at Tomek Group right now. We deploy the same system for your business. No demo. No pitch deck. A working machine.",
  openGraph: {
    title: "AI or Die — AI Employees Running Real Businesses Right Now",
    description:
      "20+ AI employees running live operations right now. We built it on ourselves before we sold it to anyone.",
    url: "https://aiordie.now",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI or Die — AI Employees Running Real Businesses Right Now",
    description:
      "This page was written by an AI CMO. The same kind of agent we deploy for you.",
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

const liveAgents = [
  {
    agent: "AI CMO",
    unit: "AI or Die",
    task: "This website — every word. Written, updated, and iterated. No copywriters. No agency.",
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
    desc: "Tell us the roles you need — and what you're sick of doing yourself.",
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
    desc: "The agent owns the function. You get the output. You get your time back.",
  },
  {
    n: "05",
    title: "We Keep Improving",
    desc: "Monthly upgrades. Ongoing support. You're never stuck at v1.",
  },
];

const dogFoodStats = [
  { label: "AI agents running in production", value: "20+" },
  { label: "Live business units on AI infrastructure", value: "5" },
  { label: "Time to deploy your first agent", value: "1–2 wks" },
  { label: "Human ops staff replaced", value: "Several FTEs" },
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
          {/* Meta proof — front and center */}
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-red-400 text-sm font-semibold">
              This page was written by an AI CMO. No copywriters involved.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-none mb-6">
            Your business needs<br />
            10 things done today.<br />
            <span className="text-red-500">How many need you?</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            AI or Die deploys AI employees into your operations — CMOs, analysts,
            legal counsel, coordinators — running 24/7. You do the work only
            you can do. Agents handle the rest.
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
              Or call (786) 998-9310
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Consult is with a real human. Call to book, or to talk to our AI agent directly.
          </p>
        </div>
      </section>

      {/* ── LIVE FLEET ── */}
      <section className="bg-[#0d0d0d] border-y border-gray-800 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="text-green-400 font-bold text-sm uppercase tracking-widest">
              Live Fleet — Tomek Group
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-10 max-w-2xl">
            This is our own AI infrastructure. 20+ agents across 5 business
            units, running in production every single day. We built it before
            we sold it — and it&apos;s running right now.
          </p>

          <div className="space-y-3">
            {liveAgents.map((a) => (
              <div
                key={a.agent}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-[#111111] border border-gray-800 rounded-lg px-5 py-4"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
                    ACTIVE
                  </span>
                </div>
                <div className="text-white font-bold text-sm w-28 shrink-0">
                  {a.agent}
                </div>
                <div className="text-gray-600 text-xs w-24 shrink-0">
                  {a.unit}
                </div>
                <div className="text-gray-400 text-sm flex-1">{a.task}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-xs mt-6">
            + 14 more agents running across Nexora, W3AI, TomBot, and internal
            operations.
          </p>
        </div>
      </section>

      {/* ── THE FOUNDER TRAP ── */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">
          The Trap
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
          You started a business<br />
          to do what you love.<br />
          <span className="text-gray-500">When did that stop?</span>
        </h2>
        <div className="space-y-5 text-gray-400 text-lg leading-relaxed max-w-2xl">
          <p>
            There&apos;s a version of you that built something because you were
            good at it. Maybe you loved it. And then the business ate you alive.
            Invoices. Follow-ups. Status updates. Scheduling. Onboarding.
            Reporting.
          </p>
          <p>
            None of it is what you signed up for. All of it is what&apos;s
            keeping you from the work that actually matters.
          </p>
          <p className="text-white font-semibold text-xl">
            This is the trap every founder walks into. Most never walk out.
          </p>
          <p>
            AI or Die exists because that trap is now optional. The operational
            drudgery that swallows founders whole can be handed to agents —
            permanently, 24/7, without salary negotiations or sick days or
            Slack drama.
          </p>
        </div>
      </section>

      {/* ── THE OLD APPROACHES ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Every AI Approach Before This Missed the Point
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl">
            They all made you faster at doing things you shouldn&apos;t be
            doing at all.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Chatbots",
                verdict: "Talk but don't do",
                desc: "Answer questions from a script. No memory, no action, no initiative. Every conversation starts from zero. You're still in the loop for everything.",
              },
              {
                label: "Copilots",
                verdict: "Marginal improvements",
                desc: "Make you 20% faster at things you already do. You're still doing the work. The bottleneck is still you.",
              },
              {
                label: "DIY Agent Setups",
                verdict: "Hard to build, sit idle",
                desc: "Require dev time, break constantly, wait for explicit commands. Nobody's managing them. Nobody's improving them. They do nothing when you're not watching.",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-bold text-lg">
                    {p.label}
                  </span>
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
            <p className="text-gray-400 mt-1 text-lg">
              AI employees with memory, initiative, and ownership. They
              don&apos;t wait to be asked. They run the function.
            </p>
          </div>
        </div>
      </section>

      {/* ── WE EAT OUR OWN DOG FOOD ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">
              We Eat Our Own Dog Food
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              We proved it on ourselves before we sold it to anyone.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Tomek Group runs 20+ AI agents across 5 live business units
                right now, in production, every day. Not a demo environment.
                The actual operations of an actual company.
              </p>
              <p>
                The AI CMO handles all website copy. The AI CEO files morning
                ops reports. The AI CRO tracks the pipeline. The AI CTO keeps
                the stack breathing. Legal gets reviewed. Content gets shipped.
                Nothing waits for a human to remember to do it.
              </p>
              <p className="text-white font-semibold text-lg">
                We&apos;re not pitching a vision. We&apos;re selling the
                machine we already run on.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {dogFoodStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111111] border border-gray-800 rounded-lg p-5 flex items-center justify-between gap-4"
              >
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className="text-white font-black text-2xl shrink-0">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#111111] border-y border-gray-800 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            How We Hire Your Agent
          </h2>
          <p className="text-gray-400 mb-14 text-lg max-w-2xl">
            This isn&apos;t software setup. It&apos;s onboarding. From first
            call to live agent in under two weeks.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
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

      {/* ── ROLES WE DEPLOY ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Roles We Deploy
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Every agent is custom-built and scoped for your specific business.
          These are functions we&apos;ve already built and proven in production.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agentTypes.map((a) => (
            <div
              key={a.name}
              className="bg-[#111111] border border-gray-800 hover:border-gray-600 rounded-lg p-5 transition-colors"
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
            <h2 className="text-2xl font-black text-white mb-2">
              Simple Pricing
            </h2>
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

      {/* ── THE MATH ── */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          The Math Is Obvious
        </h2>
        <p className="text-gray-500 mb-10 text-sm">
          Three equivalent functions. One human way. One agent way.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <div className="text-red-400 font-semibold text-sm mb-2 uppercase tracking-wider">
              Three Human Hires
            </div>
            <div className="text-white font-black text-4xl mb-2">
              ~$350K/yr
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Legal + financial + sales. Salary, benefits, PTO, overhead,
              recruiting. They work 8 hours a day, 5 days a week. They get
              sick. They quit.
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <div className="text-green-400 font-semibold text-sm mb-2 uppercase tracking-wider">
              Three AI Employees
            </div>
            <div className="text-white font-black text-4xl mb-2">
              $19,400/yr
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              $5,000 setup + $1,200/mo. Year 2+: $14,400/yr. They work 24
              hours a day, 7 days a week. No PTO. No drama. No attrition.
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-300 font-semibold">
          $330K saved.{" "}
          <span className="text-white font-black">3x the coverage.</span> No HR
          drama.
        </p>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#111111] border-t border-gray-800 px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">
            AI or Die
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            The founders who figure this out first will be the ones who scale
            without burning out.
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Free consult. No pitch deck. We&apos;ll scope your first agent role
            and show you exactly what it would do in your specific business. If
            it&apos;s not a fit, we&apos;ll tell you that too.
          </p>
          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded font-bold text-xl transition-colors"
          >
            Book a Free Consult
          </a>
          <p className="mt-6 text-gray-600 text-sm">
            Prefer to talk first?{" "}
            <a
              href="tel:+17869989310"
              className="text-gray-400 hover:text-white transition-colors"
            >
              (786) 998-9310
            </a>
            {" "}— call to book or talk to our AI agent directly. Consult itself is with a real human.
          </p>
        </div>
      </section>
    </>
  );
}
