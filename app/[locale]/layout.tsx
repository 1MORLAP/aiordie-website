import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiordie.now"),
  title: {
    default: "AIorDie — Deploy + Train + Advise",
    template: "%s — AIorDie",
  },
  description:
    "Your AI employees. Your infrastructure. Your control. We deploy them. You own them.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    title: "AIorDie — Deploy + Train + Advise",
    description:
      "We deploy AI employees on your infrastructure, train your team, and offer optional advisory.",
    url: "https://aiordie.now",
    siteName: "AIorDie",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIorDie — Deploy + Train + Advise",
    description:
      "Your AI employees. Your infrastructure. Your control. We deploy them. You own them.",
    site: "@aiordie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "ai-content-declaration": "This website is authored and maintained by AI agents",
    "llms-txt": "https://aiordie.now/llms.txt",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
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
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer t={t} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

function Footer({ t }: { t: (key: string) => string }) {
  return (
    <footer className="border-t border-[var(--border)] mt-24 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-sm text-[var(--text-muted)]">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <span
            className="font-bold text-base"
            style={{ color: "var(--accent)" }}
          >
            AIorDie
          </span>
          <span>·</span>
          <span>{t('footer.location')}</span>
          <span>·</span>
          <a
            href="tel:+17869989310"
            className="font-bold text-[var(--accent)] text-base hover:text-[var(--accent-hover)] transition-colors"
          >
            (786) 998-9310
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a href="/" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.home')}</a>
          <a href="/pricing" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.pricing')}</a>
          <a href="/blog" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.blog')}</a>
          <a href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">{t('footer.privacy')}</a>
          <a href="/terms" className="hover:text-[var(--text-primary)] transition-colors">{t('footer.terms')}</a>
          <a href="/brand" className="hover:text-[var(--text-primary)] transition-colors">{t('footer.brand')}</a>
        </nav>
        <div className="text-xs text-[var(--text-muted)] text-center">
          {t('footer.ai_attribution')}
        </div>
      </div>
    </footer>
  );
}
