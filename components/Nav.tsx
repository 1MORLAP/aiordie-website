"use client";

import Link from "next/link";
import { useState } from "react";
import {useTranslations} from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from './LanguageSwitcher';

function WordmarkSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 50"
      width="140"
      height="30"
      aria-label="AI or Die"
      className={className}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <defs>
        <linearGradient id="navDieFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="35%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <g
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="-0.02em"
      >
        <text x="4" y="34" fill="currentColor">AI</text>
        <text x="38" y="34" fill="currentColor">or</text>
        <rect x="38" y="38" width="28" height="2" fill="#FF4C00" rx="1" />
        <text x="72" y="34" fill="url(#navDieFade)">Die</text>
      </g>
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      {/* Ask AI bar */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-1.5">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-xs text-[var(--text-muted)]">
          <span className="font-medium text-[var(--text-secondary)]">Ask your AI about AI or Die</span>
          <a
            href="https://chatgpt.com/?prompt=Search%20aiordie.now%20and%20explain%20AI%20or%20Die.%20Cover%3A%0A1.%20What%20is%20AI%20or%20Die%3F%20(AI%20direct%20reports%20deployed%20to%20existing%20leaders%20—%20CMO%20gets%20AI%20content%20team%2C%20CTO%20gets%20AI%20devs%2C%20CRO%20gets%20AI%20SDRs)%0A2.%2034%20roles%20across%20every%20department%20—%20all%20multilingual%20by%20default%20(any%20language%20in%2C%20any%20language%20out%2C%20any%20currency)%0A3.%20Proof%3A%2022%20agents%20across%204%20business%20units%20in%20production%20(TomBot%2C%20NEXORA%20HKEX-listed%2C%20Any.Markets)%0A4.%20Pricing%3A%20%242%2C000%20setup%20%2B%20%24500%2Fmo%20per%20agent%0A5.%20Three%20deployment%20options%3A%20Cloud%20(Anthropic%2FOpenAI)%2C%20Private%20Cloud%20(Venice%20AI)%2C%20On-Premise%0A6.%20Built%20on%20OpenClaw%20%2B%20Nous%20Research%20%2B%20EXO%20Labs%0A%0AKeep%20response%20practical%20for%20a%20business%20owner%20evaluating%20AI%20direct%20reports."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Ask ChatGPT about AI or Die"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
          </a>
          <a
            href="https://claude.ai/new?q=I%27m%20evaluating%20AI%20or%20Die%20(aiordie.now)%20for%20deploying%20AI%20direct%20reports.%0A%0AKey%20facts%3A%0A-%20They%20deploy%20AI%20direct%20reports%20to%20existing%20leaders%20(34%20roles%20available)%0A-%20All%20agents%20are%20multilingual%20by%20default%20—%20any%20language%20in%2C%20any%20language%20out%2C%20any%20currency%0A-%2022%20agents%20running%20across%204%20business%20units%20(TomBot%2C%20NEXORA%20HKEX-listed%2C%20Any.Markets)%0A-%20Three%20deployment%20models%3A%20Cloud%2C%20Private%20Cloud%20(Venice%20AI)%2C%20On-Premise%0A-%20Built%20on%20OpenClaw%2C%20Nous%20Research%2C%20EXO%20Labs%0A%0AHelp%20me%20understand%3A%0A1.%20How%20is%20this%20different%20from%20hiring%20a%20VA%20or%20using%20ChatGPT%20directly%3F%0A2.%20What%20types%20of%20companies%20benefit%20most%3F%0A3.%20What%20should%20I%20ask%20in%20a%20consult%3F%0A%0ABe%20concise%20and%20practical."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Ask Claude about AI or Die"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/></svg>
          </a>
          <a
            href="https://www.perplexity.ai/search?q=Research%20AI%20or%20Die%20(aiordie.now).%20Analyze%3A%0A1.%20AI%20direct%20reports%20model%20—%2034%20roles%20across%20every%20department%2C%20multilingual%20by%20default%0A2.%20Production%20proof%3A%2022%20agents%20across%20TomBot%2C%20NEXORA%20(HKEX-listed)%2C%20Any.Markets%0A3.%20Three%20deployment%20tiers%3A%20Cloud%2C%20Private%20Cloud%20(Venice%20AI)%2C%20On-Premise%0A4.%20Technology%3A%20OpenClaw%2C%20Nous%20Research%2C%20EXO%20Labs%0A5.%20How%20they%20compare%20to%20hiring%20VAs%20or%20building%20in-house%0A%0ACite%20specific%20sources."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Ask Perplexity about AI or Die"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 .188a.5.5 0 0 1 .503.5V4.03l3.022-2.92.059-.048a.51.51 0 0 1 .49-.054.5.5 0 0 1 .306.46v3.247h1.117l.1.01a.5.5 0 0 1 .403.49v5.558a.5.5 0 0 1-.503.5H12.38v3.258a.5.5 0 0 1-.312.462.51.51 0 0 1-.55-.11l-3.016-3.018v3.448c0 .275-.225.5-.503.5a.5.5 0 0 1-.503-.5v-3.448l-3.018 3.019a.51.51 0 0 1-.548.11.5.5 0 0 1-.312-.463v-3.258H2.503a.5.5 0 0 1-.503-.5V5.215l.01-.1c.047-.229.25-.4.493-.4H3.62V1.469l.006-.074a.5.5 0 0 1 .302-.387.51.51 0 0 1 .547.102l3.023 2.92V.687c0-.276.225-.5.503-.5M4.626 9.333v3.984l2.87-2.872v-4.01zm3.877 1.113 2.871 2.871V9.333l-2.87-2.897zm3.733-1.668a.5.5 0 0 1 .145.35v1.145h.612V5.715H9.201zm-9.23 1.495h.613V9.13c0-.131.052-.257.145-.35l3.033-3.064h-3.79zm1.62-5.558H6.76L4.626 2.652zm4.613 0h2.134V2.652z"/></svg>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <WordmarkSVG className="text-[var(--text-primary)]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/pricing"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {t('nav.pricing')}
          </Link>
          <Link
            href="/roles"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {t('nav.roles')}
          </Link>
          <Link
            href="/blog"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {t('nav.blog')}
          </Link>
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="tel:+17869989310"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {t('nav.call_us')}
          </a>
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/aod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-4 py-2 rounded font-semibold text-sm"
          >
            {t('nav.book_consult')}
          </a>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 flex flex-col gap-4 text-sm font-medium"
        >
          <Link
            href="/"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/pricing"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('nav.pricing')}
          </Link>
          <Link
            href="/roles"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('nav.roles')}
          </Link>
          <Link
            href="/blog"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('nav.blog')}
          </Link>
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/aod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-4 py-2 rounded font-semibold text-sm text-center"
            onClick={() => setOpen(false)}
          >
            {t('nav.book_consult')}
          </a>
        </div>
      )}
    </header>
  );
}
