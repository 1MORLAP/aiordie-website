import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'pt', 'ru', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
