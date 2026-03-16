"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-red-500 font-black text-xl tracking-tight">
            AI or Die
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/s4903rwq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold transition-colors text-sm"
          >
            Book a Consult
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/s4903rwq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold transition-colors text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Book a Consult
          </a>
        </div>
      )}
    </header>
  );
}
