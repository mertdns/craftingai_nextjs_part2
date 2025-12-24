"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function Header() {
    const [menuState, SetMenuState] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("");

    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('header');

    const toggle = () => {
        SetMenuState(!menuState);
    }

    const handleLinkClick = (linkName: string) => {
        // Locale içeren pathname kontrolü
        const isLandingPage = pathname.includes('/landing');
        if (isLandingPage) setActiveLink(linkName);

        // Mobil menü açıksa kapat
        if (menuState) {
            toggle();
        }
    }

    // Scroll Spy - Scroll pozisyonuna göre active link günceller
    useEffect(() => {
        const isLandingPage = pathname.includes('/landing');
        if (isLandingPage) setActiveLink(t('home'))

        const sections = [
            { id: "header", name: t('home') },
            { id: "features", name: t('features') },
            { id: "pricing", name: t('pricing') },
            { id: "about", name: t('about') },
            { id: "contact", name: t('contact') }
        ];

        const handleScroll = () => {
            // Sayfa en üstteyse Ana sayfa'yı active yap
            if (window.scrollY < 200) {
                setActiveLink(t('home'));
                return;
            }

            // Her section'ın pozisyonunu kontrol et
            let currentSection = t('home');

            sections.forEach(({ id, name }) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementHeight = rect.height;

                    // Section viewport içinde mi kontrol et
                    if (window.scrollY >= elementTop - 150 &&
                        window.scrollY < elementTop + elementHeight - 150) {
                        currentSection = name;
                    }
                }
            });

            setActiveLink(currentSection);
        };

        // İlk yüklemede çalıştır
        handleScroll();

        // Scroll event listener ekle
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname, t]);

    const activeLinkStyle = "px-4 py-2 block bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text border-b border-indigo-500 text-base font-medium rounded-lg transition-all duration-300";
    const normalLinkStyle = "px-4 py-2 block text-slate-200 text-base font-medium hover:text-white hover:bg-indigo-900/40 rounded-lg transition-all duration-300";

    const activeLinkStyleMobile = "bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text border-b border-indigo-500 text-lg font-medium transition-all duration-300 px-4 py-2 block rounded-lg mx-4";
    const normalLinkStyleMobile = "text-slate-200 text-lg font-medium hover:bg-indigo-900/40 hover:text-white transition-all duration-300 px-4 py-2 block rounded-lg mx-4";

    // Locale prefix'li path oluşturma helper
    const getLocalizedPath = (path: string) => {
        const isLandingPage = pathname.includes('/landing');
        if (isLandingPage) {
            return `#${path}`;
        }
        return `/${locale}/landing#${path}`;
    };

    return (
        <header id="header" className="bg-gradient-to-r fixed w-full py-2 z-20 from-slate-900 via-indigo-950 to-slate-900 border-b border-indigo-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
                <h1><Link className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 px-1 py-2 block text-xl tracking-wider" href={`/${locale}/landing`}>CraftingAI</Link></h1>
                <nav>
                    <ul className="hidden lg:flex lg:items-center lg:gap-x-5">
                        <li><Link onClick={() => handleLinkClick(t('home'))} className={activeLink === t('home') ? activeLinkStyle : normalLinkStyle} href={getLocalizedPath('header')}>{t('home')}</Link></li>
                        <li><Link onClick={() => handleLinkClick(t('features'))} className={activeLink === t('features') ? activeLinkStyle : normalLinkStyle} href={getLocalizedPath('features')}>{t('features')}</Link></li>
                        <li><Link onClick={() => handleLinkClick(t('pricing'))} className={activeLink === t('pricing') ? activeLinkStyle : normalLinkStyle} href={getLocalizedPath('pricing')}>{t('pricing')}</Link></li>
                        <li><Link onClick={() => handleLinkClick(t('about'))} className={activeLink === t('about') ? activeLinkStyle : normalLinkStyle} href={getLocalizedPath('about')}>{t('about')}</Link></li>
                        <li><Link onClick={() => handleLinkClick(t('contact'))} className={activeLink === t('contact') ? activeLinkStyle : normalLinkStyle} href={getLocalizedPath('contact')}>{t('contact')}</Link></li>
                    </ul>
                </nav>
                <div id="actions" className="hidden lg:flex lg:items-center lg:gap-x-3">
                    <LanguageSwitcher />
                    <button className="bg-indigo-600/20 border border-indigo-500/50 text-indigo-200 hover:bg-indigo-600/40 hover:border-indigo-400 rounded-xl px-5 py-2 font-medium transition-all duration-300" type="button"><Link href={`/${locale}/register`}>{t('register')}</Link></button>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 rounded-xl px-5 py-2 font-medium shadow-lg shadow-indigo-500/30 transition-all duration-300" type="button"><Link href={`/${locale}/login`}>{t('login')}</Link></button>
                </div>

                {/* Animated Hamburger Button */}
                <button onClick={toggle} type="button" className="text-indigo-200 hover:text-white cursor-pointer lg:hidden transition-all duration-300 w-8 h-8 flex items-center justify-center">
                    <div className="relative w-6 h-5">
                        <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${menuState ? 'top-2 rotate-45' : 'top-0'}`}></span>
                        <span className={`absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${menuState ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
                        <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${menuState ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu with Slide Animation */}
            <nav
                id="mobileMenu"
                className={`lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-indigo-900/30 transition-all duration-300 ease-out ${menuState ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <ul className="text-center space-y-2 py-4">
                    <li><Link onClick={() => handleLinkClick(t('home'))} className={activeLink === t('home') ? activeLinkStyleMobile : normalLinkStyleMobile} href={getLocalizedPath('header')}>{t('home')}</Link></li>
                    <li><Link onClick={() => handleLinkClick(t('features'))} className={activeLink === t('features') ? activeLinkStyleMobile : normalLinkStyleMobile} href={getLocalizedPath('features')}>{t('features')}</Link></li>
                    <li><Link onClick={() => handleLinkClick(t('pricing'))} className={activeLink === t('pricing') ? activeLinkStyleMobile : normalLinkStyleMobile} href={getLocalizedPath('pricing')}>{t('pricing')}</Link></li>
                    <li><Link onClick={() => handleLinkClick(t('about'))} className={activeLink === t('about') ? activeLinkStyleMobile : normalLinkStyleMobile} href={getLocalizedPath('about')}>{t('about')}</Link></li>
                    <li><Link onClick={() => handleLinkClick(t('contact'))} className={activeLink === t('contact') ? activeLinkStyleMobile : normalLinkStyleMobile} href={getLocalizedPath('contact')}>{t('contact')}</Link></li>
                </ul>
                <div className="flex flex-col gap-3 px-4 pb-4 pt-2">
                    <LanguageSwitcher />
                    <button className="bg-indigo-600/20 border border-indigo-500/50 text-indigo-200 hover:bg-indigo-600/40 hover:border-indigo-400 rounded-xl px-5 py-2 font-medium transition-all duration-300 w-full" type="button"><Link href={`/${locale}/register`}>{t('register')}</Link></button>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 rounded-xl px-5 py-2 font-medium shadow-lg shadow-indigo-500/30 transition-all duration-300 w-full" type="button"><Link href={`/${locale}/login`}>{t('login')}</Link></button>
                </div>
            </nav>
        </header>
    )
}
