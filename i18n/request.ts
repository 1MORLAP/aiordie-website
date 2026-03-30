import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Dynamic import of messages - Vercel must bundle these at build time
  const messages = (await import(\`../messages/\${locale}.json\`)).default;
  
  return {
    locale,
    messages
  };
});
