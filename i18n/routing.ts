import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'pt', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
