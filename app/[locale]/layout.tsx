import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import type { Metadata } from 'next';
import "@/app/globals.css"

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
    title: 'CraftingAI - AI-Powered Solutions',
    description: 'Take your projects to the next level with AI-powered solutions',
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Next.js 16'da params bir Promise, await ile unwrap et
    const { locale } = await params;

    // Locale geçerli mi kontrol et
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Messages yükle
    const messages = await getMessages();

    return (
        <html lang={locale} className="h-full scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
            </head>
            <body className="antialiased h-full bg-gradient-to-r from-slate-900 to-slate-700">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
