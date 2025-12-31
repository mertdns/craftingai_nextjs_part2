import Link from "next/link";
import { getTranslations } from 'next-intl/server';

// Demo sunum verileri
const demoPresentations = [
    {
        id: "1",
        title: "Q4 2024 Şirket Sunumu",
        slides: 12,
        thumbnail: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        updatedAt: "2 saat önce",
        favorite: true,
    },
    {
        id: "2",
        title: "Pazarlama Stratejisi",
        slides: 8,
        thumbnail: "linear-gradient(135deg, #ec4899, #f43f5e)",
        updatedAt: "1 gün önce",
        favorite: false,
    },
    {
        id: "3",
        title: "Ürün Yol Haritası 2025",
        slides: 15,
        thumbnail: "linear-gradient(135deg, #10b981, #14b8a6)",
        updatedAt: "3 gün önce",
        favorite: true,
    },
    {
        id: "4",
        title: "Yatırımcı Sunumu",
        slides: 20,
        thumbnail: "linear-gradient(135deg, #f59e0b, #eab308)",
        updatedAt: "1 hafta önce",
        favorite: false,
    },
];

export default async function PresentationsPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations("presentations");

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        {t("title")}
                    </h1>
                    <p className="text-slate-400">{t("subtitle")}</p>
                </div>
                <Link
                    href={`/${locale}/dashboard/presentations/create`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    {t("newPresentation")}
                </Link>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder={t("search")}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-lg font-medium text-sm hover:bg-indigo-500/30 transition-all duration-200">
                        {t("filters.all")}
                    </button>
                    <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-400 rounded-lg font-medium text-sm hover:bg-slate-700/50 hover:text-white transition-all duration-200">
                        {t("filters.recent")}
                    </button>
                    <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-400 rounded-lg font-medium text-sm hover:bg-slate-700/50 hover:text-white transition-all duration-200">
                        {t("filters.favorites")}
                    </button>
                </div>
            </div>

            {/* Presentations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {demoPresentations.map((presentation) => (
                    <div
                        key={presentation.id}
                        className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                    >
                        {/* Thumbnail */}
                        <div
                            className="h-40 relative"
                            style={{ background: presentation.thumbnail }}
                        >
                            {/* Favorite Badge */}
                            {presentation.favorite && (
                                <div className="absolute top-3 right-3">
                                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                            )}

                            {/* Slides Count */}
                            <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                                {presentation.slides} {t("card.slides")}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <Link
                                    href={`/${locale}/dashboard/presentations/view/${presentation.id}`}
                                    className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
                                >
                                    {t("card.view")}
                                </Link>
                                <Link
                                    href={`/${locale}/dashboard/presentations/edit/${presentation.id}`}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors"
                                >
                                    {t("card.edit")}
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="font-semibold text-white mb-1 truncate group-hover:text-indigo-400 transition-colors">
                                {presentation.title}
                            </h3>
                            <p className="text-sm text-slate-400">
                                {presentation.updatedAt} {t("card.edited")}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
