import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Desteklenen diller
export const locales = ['tr', 'en'] as const;
export const defaultLocale = 'tr' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
    // requestLocale bir Promise, await et
    let locale = await requestLocale;

    // Locale undefined ise default'a fallback
    if (!locale || !locales.includes(locale as Locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: {
            // Her locale için JSON dosyalarını yükle
            ...(await import(`./locales/${locale}/common.json`)).default,
            landing: (await import(`./locales/${locale}/landing.json`)).default,
            presentations: (await import(`./locales/${locale}/presentations/presentations.json`)).default,
            dashboard: (await import(`./locales/${locale}/dashboard.json`)).default
        }
    };
});

