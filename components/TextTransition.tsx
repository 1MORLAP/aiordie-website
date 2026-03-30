'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function TextTransition({ children, className, as: Tag = 'span' }: Props) {
  const locale = useLocale();
  const [visible, setVisible] = useState(true);
  const [displayed, setDisplayed] = useState(children);
  const prevLocale = useRef(locale);

  useEffect(() => {
    if (locale !== prevLocale.current) {
      const fadeOutTimer = window.setTimeout(() => {
        setVisible(false);
      }, 0);

      const swapTimer = window.setTimeout(() => {
        setDisplayed(children);
        setVisible(true);
        prevLocale.current = locale;
      }, 120);

      return () => {
        window.clearTimeout(fadeOutTimer);
        window.clearTimeout(swapTimer);
      };
    }
  }, [locale, children]);

  useEffect(() => {
    if (locale === prevLocale.current) {
      const syncTimer = window.setTimeout(() => {
        setDisplayed(children);
      }, 0);
      return () => window.clearTimeout(syncTimer);
    }
  }, [children, locale]);

  return (
    <Tag
      className={className}
      style={{
        transition: 'opacity 0.12s ease',
        opacity: visible ? 1 : 0,
      }}
    >
      {displayed}
    </Tag>
  );
}
