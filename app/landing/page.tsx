import Link from "next/link";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
            {/* Animasyonlu Arka Plan Efektleri */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-60 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Ana Hero İçeriği */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        <span className="text-sm text-indigo-200 font-medium">Yapay Zeka Destekli Çözümler</span>
                    </div>

                    {/* Ana Başlık */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        <span className="text-white">Geleceği</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                            Bugünden İnşa Et
                        </span>
                    </h1>

                    {/* Alt Başlık */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        CraftingAI ile yapay zeka destekli çözümlerle projelerinizi bir sonraki seviyeye taşıyın.
                        Hızlı, güvenilir ve kolay kullanımlı AI araçlarıyla hayallerinizdeki uygulamayı oluşturun.
                    </p>

                    {/* CTA Butonları */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/register"
                            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            Hemen Başla
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="/docs"
                            className="px-8 py-4 bg-slate-800/50 border border-indigo-500/30 text-slate-200 rounded-xl font-semibold hover:bg-slate-800/70 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            Dökümantasyon
                        </Link>
                    </div>

                    {/* İstatistikler */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                10K+
                            </div>
                            <div className="text-sm text-slate-400">Aktif Kullanıcı</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                50K+
                            </div>
                            <div className="text-sm text-slate-400">API Çağrısı</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                99.9%
                            </div>
                            <div className="text-sm text-slate-400">Uptime</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                24/7
                            </div>
                            <div className="text-sm text-slate-400">Destek</div>
                        </div>
                    </div>
                </div>

                {/* Hero Görseli/Mockup - Responsive İyileştirmeleri */}
                <div className="mt-12 md:mt-20 px-2 sm:px-0">
                    <div className="relative mx-auto max-w-5xl">
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl shadow-indigo-500/10">
                            <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-indigo-900/30">
                                <div className="space-y-2 md:space-y-3 font-mono text-[0.625rem] sm:text-xs md:text-sm">
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <span className="text-purple-400">import</span>
                                        <span className="text-slate-300">{'{ CraftingAI }'}</span>
                                        <span className="text-purple-400">from</span>
                                        <span className="text-green-400">'craftingai'</span>
                                    </div>
                                    <div className="h-2 md:h-4"></div>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <span className="text-blue-400">const</span>
                                        <span className="text-slate-300">ai</span>
                                        <span className="text-purple-400">=</span>
                                        <span className="text-blue-400">new</span>
                                        <span className="text-yellow-400">CraftingAI</span>
                                        <span className="text-slate-300">()</span>
                                    </div>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <span className="text-blue-400">const</span>
                                        <span className="text-slate-300">result</span>
                                        <span className="text-purple-400">=</span>
                                        <span className="text-blue-400">await</span>
                                        <span className="text-slate-300">ai.</span>
                                        <span className="text-yellow-400">generate</span>
                                        <span className="text-slate-300">(</span>
                                        <span className="text-green-400">"Harika bir fikir"</span>
                                        <span className="text-slate-300">)</span>
                                    </div>
                                    <div className="h-1 md:h-2"></div>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <span className="text-slate-500 text-[0.625rem] sm:text-xs">// ✨ Yapay zeka gücü parmaklarınızın ucunda</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40"></div>
                    </div>
                </div>
            </div>

            {/* Özellikler Bölümü */}
            <div id="features" className="relative bg-slate-900/50 py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Yapay Zeka Gücünü <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Elinizin Altına</span> Alın
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            CraftingAI ile projelerinizi hızla geliştirin, zamandan tasarruf edin ve kullanıcı deneyimini bir üst seviyeye taşıyın.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Özellik 1 */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Hızlı Entegrasyon</h3>
                                <p className="text-slate-400 text-sm">
                                    Dakikalar içinde projenize entegre edin. Karmaşık konfigürasyonlara veda edin.
                                </p>
                            </div>
                        </div>

                        {/* Özellik 2 */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Güvenli & Güvenilir</h3>
                                <p className="text-slate-400 text-sm">
                                    Verileriniz uçtan uca şifrelenir. %99.9 uptime garantisi ile her zaman yanınızdayız.
                                </p>
                            </div>
                        </div>

                        {/* Özellik 3 */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Kolay Özelleştirme</h3>
                                <p className="text-slate-400 text-sm">
                                    İhtiyaçlarınıza göre uyarlayın. Esnek API yapısı ile tam kontrol sizde.
                                </p>
                            </div>
                        </div>

                        {/* Özellik 4 */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Gerçek Zamanlı Analitik</h3>
                                <p className="text-slate-400 text-sm">
                                    Performansı anlık takip edin. Detaylı istatistiklerle kararlarınızı optimize edin.
                                </p>
                            </div>
                        </div>
                        ```
                    </div>
                </div>
            </div>

            {/* Fiyatlandırma Bölümü */}
            <div id="pricing" className="relative bg-slate-900/50 py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Sizin İçin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Uygun Planı</span> Seçin
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            CraftingAI ile yapay zeka gücünü projelerinize entegre edin. Her bütçeye uygun esnek fiyatlandırma seçenekleri.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Starter Plan */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                                    <p className="text-slate-400 text-sm">Küçük projeler için ideal</p>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">₺99</span>
                                        <span className="text-slate-400">/ay</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">1.000 API çağrısı/ay</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">Temel AI modelleri</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">E-posta desteği</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">API dokümantasyonu</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/register"
                                    className="block w-full py-3 px-6 text-center text-white font-semibold rounded-xl bg-slate-700 hover:bg-slate-600 transition-all duration-300"
                                >
                                    Başla
                                </Link>
                            </div>
                        </div>

                        {/* Pro Plan - Most Popular */}
                        <div className="group relative bg-gradient-to-b from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border-2 border-indigo-500/50 rounded-2xl p-8 hover:border-indigo-400 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl shadow-indigo-500/20">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                                <span className="text-white text-sm font-semibold">En Popüler</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                                    <p className="text-slate-300 text-sm">Büyüyen işletmeler için</p>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">₺299</span>
                                        <span className="text-slate-300">/ay</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white font-medium">10.000 API çağrısı/ay</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white font-medium">Gelişmiş AI modelleri</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white font-medium">Öncelikli destek (24/7)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white font-medium">Özel entegrasyon desteği</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white font-medium">Detaylı analitik</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/register"
                                    className="block w-full py-3 px-6 text-center text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
                                >
                                    Başla
                                </Link>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                                    <p className="text-slate-400 text-sm">Kurumsal çözümler</p>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Özel</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mt-2">İhtiyaçlarınıza göre</p>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">Sınırsız API çağrısı</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">Tüm AI modelleri</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">Özel model eğitimi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">Özel SLA garantisi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-300">Teknik hesap yöneticisi</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="block w-full py-3 px-6 text-center text-white font-semibold rounded-xl bg-slate-700 hover:bg-slate-600 transition-all duration-300"
                                >
                                    İletişime Geç
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hakkımızda Bölümü */}
            <div id="about" className="relative bg-slate-900/50 py-24 overflow-hidden">
                {/* SVG Pattern Background */}
                <div className="absolute inset-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <defs>
                            <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                                <circle cx="10" cy="10" r="2" fill="#818CF8" opacity="0.1" />
                            </pattern>
                        </defs>
                        <rect width="1440" height="800" fill="url(#dots)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Biz <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Kimiz?</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Markanızı yükselten ve kitlenizi ilham veren yenilikçi dijital deneyimler yaratıyoruz.
                        </p>
                    </div>

                    {/* Content Container */}
                    <div className="relative  grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                                    Tutkulu ekibimiz, vizyonunuzu yaşama geçirmek için yaratıcılığı ve son teknoloji araçları bir araya getiriyor. Her projede mükemmelliği hedefliyoruz.
                                </p>
                                <div className="space-y-6">
                                    {/* Feature Cards */}
                                    <div className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-indigo-900/30 rounded-xl hover:border-indigo-500/50 hover:transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {/* Icon: Users */}
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">Uzman Ekip</h3>
                                            <p className="text-slate-400 text-sm">Her projede mükemmelliği sunmaya kararlı tutkulu uzmanlar grubu.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-indigo-900/30 rounded-xl hover:border-indigo-500/50 hover:transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {/* Icon: Lightbulb */}
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">Yenilikçi Yaklaşım</h3>
                                            <p className="text-slate-400 text-sm">Size özel benzersiz çözümler yaratmak için yaratıcılığı ve teknolojiyi benimsiyoruz.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-indigo-900/30 rounded-xl hover:border-indigo-500/50 hover:transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {/* Icon: Heart */}
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">Müşteri Odaklı</h3>
                                            <p className="text-slate-400 text-sm">Memnuniyetiniz önceliğimiz — dinliyor, uyum sağlıyor ve beklentilerin ötesinde sunuyoruz.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image with Overlay & Hover Effect */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                            <div className="relative overflow-hidden rounded-2xl border border-indigo-900/30 group-hover:border-indigo-500/50 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity duration-300"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Hakkımızda"
                                    className="relative rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* İletişim Bölümü */}
            <div id="contact" className="relative bg-slate-900/50 py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Bizimle <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">İletişime Geçin</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Sorularınız mı var? Projeleriniz için özel çözümler mi arıyorsunuz? Size yardımcı olmak için buradayız.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                                Adınız
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-900/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Adınızı girin"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                                E-posta Adresiniz
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-900/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="ornek@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                            Konu
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-900/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Mesajınızın konusu"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-900/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Mesajınızı buraya yazın..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="group w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        Mesaj Gönder
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* İletişim Bilgileri */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-indigo-900/30 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-semibold mb-1">E-posta</h4>
                                <p className="text-slate-400 text-sm">info@craftingai.com</p>
                            </div>
                            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-indigo-900/30 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-semibold mb-1">Telefon</h4>
                                <p className="text-slate-400 text-sm">+90 (555) 123 45 67</p>
                            </div>
                            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-indigo-900/30 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-semibold mb-1">Adres</h4>
                                <p className="text-slate-400 text-sm">İstanbul, Türkiye</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
