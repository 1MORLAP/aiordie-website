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
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-gray-100 antialiased">
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
    <footer className="border-t border-gray-800 mt-24 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
          <span className="text-red-500 font-bold text-base">AI or Die</span>
          <span>·</span>
          <span>Miami, FL</span>
          <span>·</span>
          <a href="tel:2063806319" className="hover:text-gray-300 transition-colors">
            206-380-6319
          </a>
          <span>·</span>
          <span>aiordie.now</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="/pricing" className="hover:text-gray-300 transition-colors">Pricing</a>
          <a href="/blog" className="hover:text-gray-300 transition-colors">Blog</a>
        </nav>
      </div>
    </footer>
  );
}
