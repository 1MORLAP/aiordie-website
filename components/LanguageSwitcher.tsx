'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useState, useRef, useEffect } from 'react';

const LOCALES = [
  { code: 'en', label: 'EN', flag: '🇺🇸', name: 'English' },
  { code: 'es', label: 'ES', flag: '🇪🇸', name: 'Español' },
  { code: 'pt', label: 'PT', flag: '🇧🇷', name: 'Português' },
  { code: 'ru', label: 'RU', flag: '🇷🇺', name: 'Русский' },
  { code: 'de', label: 'DE', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'fr', label: 'FR', flag: '🇫🇷', name: 'Français' },
  { code: 'pl', label: 'PL', flag: '🇵🇱', name: 'Polski' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isNonEnglish = locale !== 'en';

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function switchLocale(newLocale: string) {
    if (newLocale === locale) {
      setOpen(false);
      return;
    }

    localStorage.setItem('aod-locale', newLocale);
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  const current = LOCALES.find(l => l.code === locale) || LOCALES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-all hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
        aria-label="Switch language"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        {isNonEnglish && (
          <span
            className="ml-0.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            title="Translated by AI — this page is maintained by our AI CMO"
          />
        )}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1.5 min-w-[160px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] shadow-lg">
          {isNonEnglish && (
            <div className="border-b border-[var(--border)] px-3 py-2">
              <p className="text-[10px] font-semibold text-[var(--accent)]">Translated by AI</p>
              <p className="mt-0.5 text-[10px] leading-relaxed text-[var(--text-muted)]">Maintained by our AI CMO — the same Super Agent we deploy for you.</p>
            </div>
          )}
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors hover:bg-[var(--bg-secondary)] ${l.code === locale ? 'font-semibold text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}
            >
              <span>{l.flag}</span>
              <span>{l.name}</span>
              {l.code === locale && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-auto h-3.5 w-3.5 text-[var(--accent)]">
                  <path d="m5 12 5 5L20 7"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
