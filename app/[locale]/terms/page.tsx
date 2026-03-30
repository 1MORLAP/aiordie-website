import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service — AI or Die",
  description:
    "Terms of Service for AI or Die, including service terms, SMS disclosures, cancellation policy, and privacy references.",
  openGraph: {
    title: "Terms of Service — AI or Die",
    description:
      "Terms governing AI or Die services, including pricing references, SMS terms, and cancellation policy.",
    url: "https://aiordie.now/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — AI or Die",
    description:
      "Terms governing AI or Die services, including pricing references, SMS terms, and cancellation policy.",
  },
  alternates: { canonical: "https://aiordie.now/terms" },
};

const updatedAt = "March 17, 2026";

export default function TermsPage() {
  return (
    <>
      <section className="grain-overlay mesh-bg border-b border-[var(--border)] px-6 pb-14 pt-12 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Legal
            </p>
            <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
              Terms of Service
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
              These Terms govern your use of AI or Die services. By using our services, you agree to
              the terms below.
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">Last updated: {updatedAt}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <ScrollReveal>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Company and program</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Company: AI or Die.<br />
                Program name: AI or Die AI Employee Deployment Program.<br />
                Program description: We deploy AI direct reports into your business operations.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={60}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Services</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                AI or Die provides AI direct report deployment and management services,
                including setup, integration, optimization, and ongoing support.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={90}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Pricing and billing</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Pricing is listed on our <Link href="/pricing" className="text-[var(--accent)] hover:underline">Pricing page</Link> and may be updated from time to time.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We do not require long-term contracts. You may cancel with 30 days&apos; notice.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <article className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Ownership and infrastructure</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                <li>You own all agent configurations and output files produced for your business.</li>
                <li>Each client deployment runs on isolated infrastructure.</li>
                <li>AI-generated content is labeled for transparency.</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">SMS terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                AI or Die sends one-time transactional SMS messages (booking links, meeting confirmations) only after receiving verbal consent during a phone call with our AI receptionist. No recurring or promotional messages are sent. Message and data rates may apply. Text <strong>STOP</strong> to cancel SMS messages at any time. Text <strong>HELP</strong> for help. For SMS support, contact <a className="text-[var(--accent)] hover:underline" href="tel:+17869989310">(786) 998-9310</a>.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Limitations of liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                To the maximum extent permitted by law, AI or Die is not liable for indirect,
                incidental, special, consequential, or punitive damages, or for lost profits, data,
                or business opportunities arising from use of our services.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={210}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Governing law</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                These Terms are governed by the laws of the State of Florida, without regard to
                conflict-of-laws principles.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Changes to these terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We may update these Terms at any time. Continued use of our services after updates are
                posted constitutes acceptance of the revised Terms.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={270}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
              <h2 className="font-space-grotesk text-2xl font-bold text-[var(--text-primary)]">Privacy</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Your use of our services is also governed by our{" "}
                <Link href="/privacy" className="text-[var(--accent)] hover:underline">Privacy Policy</Link>.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
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
