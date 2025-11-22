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

                {/* Hero Görseli/Mockup */}
                <div className="mt-20 relative">
                    <div className="relative mx-auto max-w-5xl">
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 shadow-2xl shadow-indigo-500/10">
                            <div className="bg-slate-900/50 rounded-lg p-8 border border-indigo-900/30">
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-purple-400">import</span>
                                        <span className="text-slate-300">{'{ CraftingAI }'}</span>
                                        <span className="text-purple-400">from</span>
                                        <span className="text-green-400">'craftingai'</span>
                                    </div>
                                    <div className="h-4"></div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-400">const</span>
                                        <span className="text-slate-300">ai</span>
                                        <span className="text-purple-400">=</span>
                                        <span className="text-blue-400">new</span>
                                        <span className="text-yellow-400">CraftingAI</span>
                                        <span className="text-slate-300">()</span>
                                    </div>
                                    <div className="flex items-center gap-2">
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
                                    <div className="h-2"></div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500">// ✨ Yapay zeka gücü parmaklarınızın ucunda</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40"></div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}