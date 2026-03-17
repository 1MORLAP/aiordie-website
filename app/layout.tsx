import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiordie.now"),
  title: {
    default: "AI or Die — AI Employees That Actually Work",
    template: "%s — AI or Die",
  },
  description:
    "We build, deploy, and manage AI employee teams for your business. Legal, finance, sales, marketing — all the roles you need, without the headcount.",
  openGraph: {
    type: "website",
    title: "AI or Die — AI Employees That Actually Work",
    description:
      "We build, deploy, and manage AI employee teams for your business. Grow without hiring.",
    url: "https://aiordie.now",
    siteName: "AI or Die",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI or Die — AI Employees That Actually Work",
    description:
      "We build, deploy, and manage AI employee teams for your business. Grow without hiring.",
    site: "@aiordie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();`,
          }}
        />
      </head>
      <body
        className="bg-[var(--bg)] text-[var(--text-primary)] antialiased"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
        <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
          <span
            className="font-bold text-base"
            style={{ color: "var(--accent)" }}
          >
            AI or Die
          </span>
          <span>·</span>
          <span>Miami, FL</span>
          <span>·</span>
          <a
            href="tel:+17869989310"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            (786) 998-9310
          </a>
          <span>·</span>
          <span>aiordie.now</span>
        </div>
        <div className="text-xs text-[var(--text-muted)] text-center md:text-right">
          This website is written and maintained by an AI CMO — the same kind of agent we deploy for you.
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</a>
          <a href="/pricing" className="hover:text-[var(--text-primary)] transition-colors">Pricing</a>
          <a href="/blog" className="hover:text-[var(--text-primary)] transition-colors">Blog</a>
        </nav>
      </div>
    </footer>
  );
}
