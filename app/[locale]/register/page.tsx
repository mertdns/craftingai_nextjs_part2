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
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden py-10">
            {/* Animasyonlu Arka Plan */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* Ana Kart */}
            <div className="relative w-full max-w-5xl mx-4 flex flex-col lg:flex-row-reverse rounded-3xl overflow-hidden">

                {/* Sağ Taraf: Animated Graphics */}
                <div className="lg:w-1/2 hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-xl border border-purple-500/20 rounded-r-3xl relative">
                    {/* Glowing Lines */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>
                    </div>

                    {/* Rocket Icon */}
                    <div className="relative mb-8">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-bounce" style={{ animationDuration: '3s' }}>
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                        </div>
                        {/* Sparkles */}
                        <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
                        <div className="absolute top-1/2 -right-6 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                    </div>

                    {/* Welcome Text */}
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">Aramıza Katılın!</h2>
                    <p className="text-purple-200/80 text-center max-w-xs leading-relaxed">
                        Binlerce kullanıcıyla birlikte yapay zeka gücünü keşfedin
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 mt-10">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">10K+</div>
                            <div className="text-purple-300/70 text-sm">Kullanıcı</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-purple-300/70 text-sm">AI Araç</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">99%</div>
                            <div className="text-purple-300/70 text-sm">Memnuniyet</div>
                        </div>
                    </div>
                </div>

                {/* Sol Taraf: Kayıt Formu */}
                <div className="lg:w-1/2 w-full p-8 sm:p-10 bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 lg:border-r-0 lg:rounded-l-3xl rounded-3xl lg:rounded-r-none">

                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/30">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Başlık */}
                    <header className="mb-6 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                            {t('register.title')}
                        </h1>
                        <p className="text-slate-400">{t('register.subtitle')}</p>
                    </header>

                    {/* Google Kayıt */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 text-white transition-all duration-300 mb-6 group"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="font-medium">{t('register.googleSignup')}</span>
                    </button>

                    {/* Ayırıcı */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                        <span className="text-slate-500 text-sm">{t('register.or')}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        {/* İsim */}
                        <div className="space-y-1.5">
                            <label htmlFor="fullname" className="block text-sm font-medium text-slate-300">
                                {t('register.name')}
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <input
                                    id="fullname"
                                    type="text"
                                    placeholder={t('register.namePlaceholder')}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                {t('register.email')}
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder={t('register.emailPlaceholder')}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Şifre - 2 kolon */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                                    {t('register.password')}
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder={t('register.passwordPlaceholder')}
                                        required
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300">
                                    {t('register.confirmPassword')}
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </span>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder={t('register.confirmPasswordPlaceholder')}
                                        required
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 pt-2">
                            <input type="checkbox" id="terms" required className="w-4 h-4 mt-0.5 rounded border-slate-600 bg-slate-800 text-purple-500 focus:ring-purple-500/50" />
                            <label htmlFor="terms" className="text-sm text-slate-400 leading-relaxed">
                                {t('register.termsText')}{' '}
                                <Link href={`/${locale}/terms`} className="text-purple-400 hover:text-purple-300 transition">
                                    {t('register.termsLink')}
                                </Link>
                                {' '}{t('register.and')}{' '}
                                <Link href={`/${locale}/privacy`} className="text-purple-400 hover:text-purple-300 transition">
                                    {t('register.privacyLink')}
                                </Link>
                                {t('register.termsEnd')}
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-[1.02] mt-2"
                        >
                            {t('register.registerButton')}
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-6 text-slate-400">
                        {t('register.haveAccount')}{' '}
                        <Link href={`/${locale}/login`} className="text-purple-400 hover:text-purple-300 font-medium transition">
                            {t('register.signIn')}
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
