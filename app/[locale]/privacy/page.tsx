import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — AI or Die",
  description:
    "Privacy Policy for AI or Die, including data collection, usage, retention, deletion requests, and SMS compliance details.",
  openGraph: {
    title: "Privacy Policy — AI or Die",
    description:
      "How AI or Die collects, uses, stores, and protects your information, including SMS compliance disclosures.",
    url: "https://aiordie.now/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — AI or Die",
    description:
      "How AI or Die collects, uses, stores, and protects your information, including SMS compliance disclosures.",
  },
  alternates: { canonical: "https://aiordie.now/privacy" },
};

const updatedAt = "March 17, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="grain-overlay mesh-bg border-b border-[var(--border)] px-6 pb-14 pt-12 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Legal
            </p>
            <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
              AI or Die (Miami, FL and Seattle, WA) respects your privacy. This policy explains what
              we collect, why we collect it, and how you can control your data.
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">Last updated: {updatedAt}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <ScrollReveal>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Who we are</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Company: AI or Die<br />
                Website: <a className="text-[var(--accent)] hover:underline" href="https://aiordie.now">aiordie.now</a><br />
                Phone: <a className="text-[var(--accent)] hover:underline" href="tel:+17869989310">(786) 998-9310</a><br />
                Locations: Miami, FL and Seattle, WA
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={60}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">What data we collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business details you provide during consult booking or onboarding</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={90}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">How we use your data</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                <li>To provide AI direct report deployment and management services</li>
                <li>To communicate with you about your account, service status, and support</li>
                <li>To improve our services, reliability, and client outcomes</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <article className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">What we do not do</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                <li>We do not sell your personal data.</li>
                <li>We do not share your data with third parties for marketing purposes.</li>
                <li>We do not use your data for purposes outside this policy.</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">AI transparency</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We use AI agents to process operational tasks. We clearly label when AI is involved in
                communications or outputs.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Data storage and retention</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Client data is stored on isolated infrastructure based on your deployment tier:
                Cloud, Private Cloud, or On-Premise.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We retain data only as long as needed to provide services, satisfy legal or contractual
                obligations, and maintain operational records. When data is no longer required, we
                securely delete or anonymize it.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={210}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">SMS disclosures</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                AI or Die may send you a one-time SMS message containing booking or scheduling information after you provide verbal consent during a phone call with our AI receptionist. We collect your phone number from caller ID or as provided by you during the call. No recurring or marketing messages are sent. Standard message and data rates may apply. Text <strong>STOP</strong> to opt out of future messages. Text <strong>HELP</strong> for assistance.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Cookies and analytics</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We use basic site analytics via Vercel Analytics to understand website performance. We
                do not use ad tracking cookies.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={270}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Data deletion requests</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                You can request deletion of your data at any time by calling us at{" "}
                <a className="text-[var(--accent)] hover:underline" href="tel:+17869989310">(786) 998-9310</a>.
                We will process verified deletion requests in a reasonable timeframe, subject to legal
                retention requirements.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Policy updates</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated effective date.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={330}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                AI or Die<br />
                Website: <a className="text-[var(--accent)] hover:underline" href="https://aiordie.now">aiordie.now</a><br />
                Phone: <a className="text-[var(--accent)] hover:underline" href="tel:+17869989310">(786) 998-9310</a>
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
