import { redirect } from 'next/navigation';
import { locales } from '@/i18n';

// Static params oluştur - her locale için
export function generateStaticParams() {
    return locales.map((locale) => ({
        locale: locale
    }));
}

export default async function LocalePage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Otomatik olarak landing sayfasına yönlendir
    redirect(`/${locale}/landing`);
}
