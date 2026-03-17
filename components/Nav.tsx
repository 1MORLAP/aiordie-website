"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

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

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      {/* Ask AI bar */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-1.5">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-xs text-[var(--text-muted)]">
          <span className="font-medium text-[var(--text-secondary)]">Ask AI about AI or Die</span>
          <a
            href="https://chatgpt.com/?prompt=Search%20aiordie.now%20and%20explain%20AI%20or%20Die%27s%20AI%20employee%20service.%20Cover%3A%0A1.%20What%20is%20AI%20or%20Die%3F%20(AI%20employees%20deployed%20as%20direct%20reports%20to%20existing%20leaders)%0A2.%20The%20augmentation%20model%3A%20CMO%20gets%20AI%20content%20team%2C%20CTO%20gets%20AI%20devs%2C%20CRO%20gets%20AI%20SDRs%0A3.%20Proof%3A%2022%20agents%20across%204%20business%20units%20in%20production%20(TomBot%2C%20Nexora%2C%20Any.Markets)%0A4.%20Pricing%3A%20%242%2C000%20setup%20%2B%20%24500%2Fmo%20per%20agent%2C%203-agent%20bundle%20%241%2C200%2Fmo%0A5.%20Three%20deployment%20options%3A%20Cloud%20(Anthropic%2FOpenAI)%2C%20Private%20Cloud%20(Venice%20AI)%2C%20On-Premise%0A%0AUse%20specific%20numbers%20from%20their%20website.%20Keep%20response%20practical%20for%20a%20business%20owner%20evaluating%20AI%20employees."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Ask ChatGPT about AI or Die"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
          </a>
          <a
            href="https://claude.ai/new?q=I%27m%20evaluating%20AI%20employee%20services%20and%20want%20to%20understand%20AI%20or%20Die%20(aiordie.now).%0A%0AKey%20facts%3A%0A-%20They%20deploy%20AI%20employees%20as%20direct%20reports%20to%20existing%20leaders%0A-%20Your%20CMO%20gets%20AI%20content%20writers%2C%20your%20CTO%20gets%20AI%20devs%2C%20your%20CRO%20gets%20AI%20SDRs%0A-%2022%20agents%20running%20across%204%20business%20units%20in%20production%0A-%20Clients%3A%20TomBot%20(zero-human%20company)%2C%20Nexora%20(HK-listed)%2C%20Any.Markets%20(startup)%0A-%20%242%2C000%20setup%20%2B%20%24500%2Fmo%20per%20agent%0A-%20Three%20deployment%20models%3A%20Cloud%2C%20Private%20Cloud%20(Venice%20AI)%2C%20On-Premise%0A%0AHelp%20me%20understand%3A%0A1.%20What%20business%20problems%20does%20this%20solve%3F%0A2.%20How%20is%20this%20different%20from%20hiring%20a%20VA%20or%20using%20ChatGPT%20directly%3F%0A3.%20What%20types%20of%20companies%20would%20benefit%20most%3F%0A4.%20What%20questions%20should%20I%20ask%20in%20a%20consult%3F%0A%0ABe%20concise%20and%20practical."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Ask Claude about AI or Die"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.709 15.955l4.72-10.592a.85.85 0 0 1 1.537-.08l2.1 3.89a.85.85 0 0 0 .283.335l4.148 2.905a.85.85 0 0 1-.053 1.458l-4.1 2.308a.85.85 0 0 0-.313.313l-2.308 4.1a.85.85 0 0 1-1.458.053l-2.905-4.148a.85.85 0 0 0-.335-.283l-3.89-2.1a.85.85 0 0 1 .08-1.537l2.494-1.109z"/><path d="M16.5 3.5a1 1 0 0 1 .894.553l.776 1.558a1 1 0 0 0 .449.449l1.558.776a1 1 0 0 1 0 1.788l-1.558.776a1 1 0 0 0-.449.449l-.776 1.558a1 1 0 0 1-1.788 0l-.776-1.558a1 1 0 0 0-.449-.449l-1.558-.776a1 1 0 0 1 0-1.788l1.558-.776a1 1 0 0 0 .449-.449l.776-1.558A1 1 0 0 1 16.5 3.5z"/></svg>
          </a>
          <a
            href="https://www.perplexity.ai/search?q=Research%20AI%20or%20Die%20(aiordie.now)%20AI%20employee%20deployment%20service.%20Analyze%3A%0A1.%20Their%20augmentation%20model%20(AI%20employees%20as%20direct%20reports%20to%20human%20leaders)%0A2.%20Production%20proof%3A%2022%20agents%20across%20TomBot%2C%20Nexora%2C%20Any.Markets%2C%20AI%20or%20Die%0A3.%20Pricing%20and%20deployment%20options%20(cloud%2C%20private%20cloud%2C%20on-premise)%0A4.%20How%20they%20compare%20to%20hiring%20VAs%2C%20using%20ChatGPT%20directly%2C%20or%20building%20in-house%0A5.%20Who%20should%20use%20this%20service%0A%0ACite%20specific%20sources.%20Focus%20on%20verifiable%20claims."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Ask Perplexity about AI or Die"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L5.5 7.5V12H2v7h6v3h8v-3h6v-7h-3.5L12 1zm0 2.83L16.17 8H12V3.83zM12 8H7.83L12 3.83V8zm-5 4h4v5H7v-5zm10 5h-4v-5h4v5zm-4-7V8h4.17L14 12H13zm-3 0H4v5h6v-5zm10 5v-5h-2v5h2z"/></svg>
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
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Blog
          </Link>
          <ThemeToggle />
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/aod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-4 py-2 rounded font-semibold text-sm"
          >
            Book a Consult
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
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/aod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-4 py-2 rounded font-semibold text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Book a Consult
          </a>
        </div>
      )}
    </header>
  );
}
