import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { locales } from '@/i18n';

// Static params oluştur - her locale için
export function generateStaticParams() {
    return locales.map((locale) => ({
        locale: locale
    }));
}

export default async function Login({
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
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* Ana Kart */}
            <div className="relative w-full max-w-5xl mx-4 flex flex-col lg:flex-row rounded-3xl overflow-hidden">

                {/* Sol Taraf: Animated Graphics */}
                <div className="lg:w-1/2 hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl border border-indigo-500/20 rounded-l-3xl relative">
                    {/* Glowing Lines */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>
                        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                    </div>

                    {/* AI Brain Icon */}
                    <div className="relative mb-8">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/50 animate-pulse">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        {/* Orbiting Dots */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">{t('login.sidebar.brandName')}</h2>
                    <p className="text-indigo-200/80 text-center max-w-xs leading-relaxed">
                        {t('login.sidebar.tagline')}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3 mt-8 justify-center">
                        <span className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 text-sm backdrop-blur-sm">
                            {t('login.sidebar.feature1')}
                        </span>
                        <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-sm backdrop-blur-sm">
                            {t('login.sidebar.feature2')}
                        </span>
                        <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-200 text-sm backdrop-blur-sm">
                            {t('login.sidebar.feature3')}
                        </span>
                    </div>
                </div>

                {/* Sağ Taraf: Giriş Formu */}
                <div className="lg:w-1/2 w-full p-8 sm:p-12 bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 lg:border-l-0 lg:rounded-r-3xl rounded-3xl lg:rounded-l-none">

                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/30">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                    </div>

                    {/* Başlık */}
                    <header className="mb-8 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                            {t('login.title')}
                        </h1>
                        <p className="text-slate-400">{t('login.subtitle')}</p>
                    </header>

                    {/* Google Giriş */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 text-white transition-all duration-300 mb-6 group"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="font-medium">{t('login.googleLogin')}</span>
                    </button>

                    {/* Ayırıcı */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                        <span className="text-slate-500 text-sm">{t('login.or')}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                {t('login.email')}
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
                                    placeholder={t('login.emailPlaceholder')}
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                                {t('login.password')}
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
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-indigo-500 focus:ring-indigo-500/50" />
                                <span className="text-slate-400">{t('login.rememberMe')}</span>
                            </label>
                            <a href="#" className="text-indigo-400 hover:text-indigo-300 transition">
                                {t('login.forgotPassword')}
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            {t('login.loginButton')}
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center mt-8 text-slate-400">
                        {t('login.noAccount')}{' '}
                        <Link href={`/${locale}/register`} className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                            {t('login.signUp')}
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
