import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
    // Desteklenen tüm diller
    locales,

    // Varsayılan dil
    defaultLocale,

    // URL'de her zaman locale prefix görünsün
    localePrefix: 'always',

    // Locale tespiti için
    localeDetection: true
});

export const config = {
    // Middleware'in çalışacağı path'ler
    // API, static dosyalar vb. hariç tut
    matcher: [
        // Tüm path'leri içer
        '/((?!api|_next|_vercel|.*\\..*).*)',
        // Root path
        '/'
    ]
};
