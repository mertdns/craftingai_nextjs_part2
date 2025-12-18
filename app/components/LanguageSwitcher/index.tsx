"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (newLocale: string) => {
        if (locale === newLocale) {
            setIsOpen(false);
            return;
        }

        startTransition(() => {
            // Mevcut path'i al ve locale'i değiştir
            const segments = pathname.split('/');
            segments[1] = newLocale; // İlk segment locale'dir
            const newPath = segments.join('/');

            router.replace(newPath);
            setIsOpen(false);
        });
    };

    return (
        <div className="relative w-full lg:w-auto">
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Trigger Button - Modern Glassmorphism */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl 
                    bg-gradient-to-r from-slate-800/70 to-slate-900/70 
                    border border-indigo-500/20 
                    hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20
                    backdrop-blur-md
                    transition-all duration-300 w-full lg:w-auto"
                disabled={isPending}
            >
                {/* Animated Globe Icon */}
                <div className="relative">
                    <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300 group-hover:rotate-12 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-indigo-400/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Current Language */}
                <span className="text-slate-200 text-sm font-semibold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    {locale}
                </span>

                {/* Animated Chevron */}
                <svg
                    className={`w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>

                {/* Loading Spinner */}
                {isPending && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 rounded-xl backdrop-blur-sm">
                        <svg className="w-5 h-5 text-indigo-400 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                )}
            </button>

            {/* Dropdown - Modern Animated */}
            <div className={`absolute top-full mt-2 left-0 lg:right-0 lg:left-auto w-full lg:w-52 
                bg-gradient-to-b from-slate-800/95 to-slate-900/95 
                backdrop-blur-xl border border-indigo-500/30 
                rounded-2xl shadow-2xl shadow-indigo-900/30 
                overflow-hidden z-50
                transition-all duration-300 ease-out origin-top
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
            >
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 pointer-events-none"></div>

                {/* Turkish Option */}
                <button
                    onClick={() => changeLanguage('tr')}
                    className={`relative w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center gap-3 group
                        ${locale === 'tr'
                            ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/20 text-white'
                            : 'text-slate-300 hover:bg-indigo-900/40 hover:text-white'
                        }`}
                    disabled={isPending}
                >
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-200">🇹🇷</span>
                    <div className="flex flex-col">
                        <span className="font-semibold">Türkçe</span>
                        <span className="text-xs text-slate-400">Turkish</span>
                    </div>
                    {locale === 'tr' && (
                        <div className="ml-auto flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </button>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mx-3"></div>

                {/* English Option */}
                <button
                    onClick={() => changeLanguage('en')}
                    className={`relative w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center gap-3 group
                        ${locale === 'en'
                            ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/20 text-white'
                            : 'text-slate-300 hover:bg-indigo-900/40 hover:text-white'
                        }`}
                    disabled={isPending}
                >
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-200">🇬🇧</span>
                    <div className="flex flex-col">
                        <span className="font-semibold">English</span>
                        <span className="text-xs text-slate-400">İngilizce</span>
                    </div>
                    {locale === 'en' && (
                        <div className="ml-auto flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}
