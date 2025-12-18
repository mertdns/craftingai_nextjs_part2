import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { locales } from '@/i18n';

// Static params oluştur - her locale için
export function generateStaticParams() {
    return locales.map((locale) => ({
        locale: locale
    }));
}

export default async function Register({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'landing' });

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
            {/* Animasyonlu Arka Plan Efektleri */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-60 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Ana Kart */}
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full max-w-4xl overflow-hidden">

                {/* Sol Taraf: Görsel */}
                <div className="lg:w-1/2 hidden lg:block relative">
                    <img
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                        alt="CraftingAI platformu yapay zeka görseli"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-purple-900/40"></div>
                </div>

                {/* Sağ Taraf: Kayıt Formu */}
                <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">

                    {/* Başlık */}
                    <header className="mb-6 mt-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t('register.title')}</h1>
                        <p className="text-slate-400">{t('register.subtitle')}</p>
                    </header>

                    {/* Sosyal Medya Kayıt Butonları */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <button
                            type="button"
                            className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-700/50 border border-indigo-900/30 hover:bg-slate-700 hover:border-indigo-500/50 text-white shadow-lg transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span>{t('register.googleSignup')}</span>
                        </button>
                    </div>

                    {/* Ayırıcı */}
                    <div className="flex items-center text-slate-500 mb-6">
                        <hr className="flex-1 border-slate-700" />
                        <span className="px-3 text-sm">{t('register.or')}</span>
                        <hr className="flex-1 border-slate-700" />
                    </div>

                    {/* Kayıt Formu */}
                    <form className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium text-slate-300 mb-2">
                                {t('register.name')}
                            </label>
                            <input
                                id="fullname"
                                type="text"
                                placeholder={t('register.namePlaceholder')}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                {t('register.email')}
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder={t('register.emailPlaceholder')}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                                {t('register.password')}
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder={t('register.passwordPlaceholder')}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                                {t('register.confirmPassword')}
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder={t('register.confirmPasswordPlaceholder')}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                        >
                            {t('register.registerButton')}
                        </button>

                        {/* Kullanım Şartları */}
                        <p className="text-xs text-slate-500 text-center mt-2">
                            {t('register.termsText')}{' '}
                            <Link href={`/${locale}/terms`} className="text-indigo-400 hover:text-indigo-300 transition">
                                {t('register.termsLink')}
                            </Link>
                            {' '}{t('register.and')}{' '}
                            <Link href={`/${locale}/privacy`} className="text-indigo-400 hover:text-indigo-300 transition">
                                {t('register.privacyLink')}
                            </Link>
                            {t('register.termsEnd')}
                        </p>

                        {/* Giriş Linki */}
                        <div className="text-center text-sm mt-4">
                            <span className="text-slate-400">{t('register.haveAccount')} </span>
                            <Link href={`/${locale}/login`} className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                                {t('register.signIn')}
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </main>
    )
}
