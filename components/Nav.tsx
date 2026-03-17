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
