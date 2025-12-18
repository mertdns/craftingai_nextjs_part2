"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 border-t border-indigo-900/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Ana İçerik */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    {/* Logo ve Açıklama */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                            CraftingAI
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {t('description')}
                        </p>
                        {/* Sosyal Medya İkonları */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center text-indigo-300 hover:bg-indigo-800/50 hover:text-white transition-all duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center text-indigo-300 hover:bg-indigo-800/50 hover:text-white transition-all duration-300">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center text-indigo-300 hover:bg-indigo-800/50 hover:text-white transition-all duration-300">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    {/* Hızlı Linkler */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            {t('quickLinks.title')}
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#landing" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('quickLinks.home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('quickLinks.pricing')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('quickLinks.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#docs" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('quickLinks.docs')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Destek */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            {t('support.title')}
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('support.contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('support.faq')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#help" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('support.helpCenter')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#api" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    {t('support.apiDocs')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bülten */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            {t('newsletter.title')}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4">
                            {t('newsletter.description')}
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder={t('newsletter.emailPlaceholder')}
                                className="w-full px-4 py-2.5 bg-slate-900/50 border border-indigo-900/40 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                            />
                            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-indigo-500/20 transition-all duration-300 text-sm">
                                {t('newsletter.subscribe')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Alt Bilgi */}
                <div className="border-t border-indigo-900/30 py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="text-slate-500 text-sm">
                            {t('copyright')}
                        </div>
                        <div className="flex gap-6">
                            <Link href="#privacy" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">
                                {t('legal.privacy')}
                            </Link>
                            <Link href="#terms" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">
                                {t('legal.terms')}
                            </Link>
                            <Link href="#cookies" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">
                                {t('legal.cookies')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
