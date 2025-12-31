import { getTranslations } from 'next-intl/server';

export default async function DashboardPage() {
    const t = await getTranslations("dashboard");

    // Demo veriler - değerler statik, etiketler çeviriden geliyor
    const stats = [
        { labelKey: "stats.totalApiCalls", value: "24,567", change: "+12.5%", positive: true },
        { labelKey: "stats.activeProjects", value: "7", change: "+2", positive: true },
        { labelKey: "stats.avgResponseTime", value: "120ms", change: "-15%", positive: true },
        { labelKey: "stats.successRate", value: "99.9%", change: "+0.2%", positive: true },
    ];

    const recentProjects = [
        { name: "E-Ticaret Chatbot", status: "active", type: "GPT-4", lastActive: "2 dk" },
        { name: "Görsel Tanıma API", status: "active", type: "Vision", lastActive: "15 dk" },
        { name: "Metin Analizi", status: "paused", type: "GPT-3.5", lastActive: "3 saat" },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                    {t("greeting")}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">John!</span>
                </h1>
                <p className="text-slate-400">{t("progressMessage")}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <p className="text-sm text-slate-400 mb-1">{t(stat.labelKey)}</p>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-white">{stat.value}</span>
                                <span className={`text-sm font-medium mb-1 ${stat.positive ? "text-green-400" : "text-red-400"}`}>
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Projects */}
                <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">{t("recentProjects.title")}</h2>
                    <div className="space-y-4">
                        {recentProjects.map((project, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-700/30 rounded-xl hover:border-indigo-500/30 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">{project.name}</p>
                                        <p className="text-sm text-slate-400">{project.type} • {project.lastActive} {t("recentProjects.ago")}</p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.status === "active"
                                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                    }`}>
                                    {project.status === "active" ? t("recentProjects.active") : t("recentProjects.paused")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">{t("quickActions.title")}</h2>
                    <div className="space-y-3">
                        <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            {t("quickActions.newProject")}
                        </button>
                        <button className="w-full flex items-center gap-3 p-4 bg-slate-700/50 border border-slate-600/50 text-white rounded-xl font-medium hover:bg-slate-700 hover:border-indigo-500/30 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                            {t("quickActions.createApiKey")}
                        </button>
                        <button className="w-full flex items-center gap-3 p-4 bg-slate-700/50 border border-slate-600/50 text-white rounded-xl font-medium hover:bg-slate-700 hover:border-indigo-500/30 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {t("quickActions.viewReports")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
