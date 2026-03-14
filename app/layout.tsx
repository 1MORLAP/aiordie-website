import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI or Die — AI Employees That Actually Work",
  description:
    "We build, deploy, and manage AI employee teams for your business. Grow without hiring.",
  openGraph: {
    title: "AI or Die — AI Employees That Actually Work",
    description:
      "We build, deploy, and manage AI employee teams for your business. Grow without hiring.",
    url: "https://aiordie.now",
    siteName: "AI or Die",
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
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
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
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/pricing" className="hover:text-gray-300 transition-colors">
            Pricing
          </a>
          <a href="/blog" className="hover:text-gray-300 transition-colors">
            Blog
          </a>
        </nav>
      </div>
    </footer>
  );
}
