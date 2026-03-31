import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'pt', 'ru', 'de', 'fr', 'pl'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
