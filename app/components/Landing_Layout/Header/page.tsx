"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

export default function Header() {
    const [menuState, SetMenuState] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("");

    const mobileMenu = useRef<HTMLElement>(null);

    const pathname = usePathname();

    const toggle = () => {
        mobileMenu.current?.classList.toggle("hidden");
        SetMenuState(!menuState);
    }

    const handleLinkClick = (linkName: string) => {
        if (pathname == "/landing") setActiveLink(linkName);

        // Mobil menü açıksa kapat
        if (menuState) {
            toggle();
        }
    }

    // Scroll Spy - Scroll pozisyonuna göre active link günceller
    useEffect(() => {
        if (pathname == "/landing") setActiveLink("Ana sayfa");

        const sections = [
            { id: "header", name: "Ana sayfa" },
            { id: "features", name: "Özellikler" },
            { id: "pricing", name: "Fiyatlandırma" },
            { id: "about", name: "Hakkımızda" },
            { id: "contact", name: "İletişim" }
        ];

        const handleScroll = () => {
            // Sayfa en üstteyse Ana sayfa'yı active yap
            if (window.scrollY < 200) {
                setActiveLink("Ana sayfa");
                return;
            }

            // Her section'ın pozisyonunu kontrol et
            let currentSection = "Ana sayfa";

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
    }, [pathname]);

    const activeLinkStyle = "px-4 py-2 block bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text border-b border-indigo-500 text-base font-medium rounded-lg transition-all duration-300";
    const normalLinkStyle = "px-4 py-2 block text-slate-200 text-base font-medium hover:text-white hover:bg-indigo-900/40 rounded-lg transition-all duration-300";

    const activeLinkStyleMobile = "bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text border-b border-indigo-500 text-lg font-medium transition-all duration-300 px-4 py-2 block rounded-lg mx-4";
    const normalLinkStyleMobile = "text-slate-200 text-lg font-medium hover:bg-indigo-900/40 hover:text-white transition-all duration-300 px-4 py-2 block rounded-lg mx-4";

    return (
        <header id="header" className="bg-gradient-to-r fixed w-full py-2 z-20 from-slate-900 via-indigo-950 to-slate-900 border-b border-indigo-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
                <h1><Link className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 px-1 py-2 block text-xl tracking-wider" href="#">CraftingAI</Link></h1>
                <nav>
                    <ul className="hidden lg:flex lg:items-center lg:gap-x-5">
                        <li><Link onClick={() => handleLinkClick("Ana sayfa")} className={activeLink === "Ana sayfa" ? activeLinkStyle : normalLinkStyle} href={pathname == "/landing" ? "#header" : "/landing#header"}>Ana sayfa</Link></li>
                        <li><Link onClick={() => handleLinkClick("Özellikler")} className={activeLink === "Özellikler" ? activeLinkStyle : normalLinkStyle} href={pathname == "/landing" ? "#features" : "/landing#features"}>Özellikler</Link></li>
                        <li><Link onClick={() => handleLinkClick("Fiyatlandırma")} className={activeLink === "Fiyatlandırma" ? activeLinkStyle : normalLinkStyle} href={pathname == "/landing" ? "#pricing" : "/landing#pricing"}>Fiyatlandırma</Link></li>
                        <li><Link onClick={() => handleLinkClick("Hakkımızda")} className={activeLink === "Hakkımızda" ? activeLinkStyle : normalLinkStyle} href={pathname == "/landing" ? "#about" : "/landing#about"}>Hakkımızda</Link></li>
                        <li><Link onClick={() => handleLinkClick("İletişim")} className={activeLink === "İletişim" ? activeLinkStyle : normalLinkStyle} href={pathname == "/landing" ? "#contact" : "/landing#contact"}>İletişim</Link></li>
                    </ul>
                </nav>
                <div id="actions" className="hidden lg:flex lg:items-center lg:gap-x-3">
                    <button className="bg-indigo-600/20 border border-indigo-500/50 text-indigo-200 hover:bg-indigo-600/40 hover:border-indigo-400 rounded-xl px-5 py-2 font-medium transition-all duration-300" type="button"><Link href="/register">Kayıt Ol</Link></button>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 rounded-xl px-5 py-2 font-medium shadow-lg shadow-indigo-500/30 transition-all duration-300" type="button"><Link href="/login">Giriş Yap</Link></button>
                </div>
                <button onClick={toggle} type="button" className="text-indigo-200 hover:text-white font-bold cursor-pointer text-xl block lg:hidden transition-colors">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            <nav id="mobileMenu" className="hidden lg:hidden bg-slate-900/95 backdrop-blur-sm" ref={mobileMenu}>
                <ul className="text-center space-y-2 py-4">
                    <li><Link onClick={() => handleLinkClick("Ana sayfa")} className={activeLink === "Ana sayfa" ? activeLinkStyleMobile : normalLinkStyleMobile} href={pathname == "/landing" ? "#header" : "/landing#header"}>Ana sayfa</Link></li>
                    <li><Link onClick={() => handleLinkClick("Özellikler")} className={activeLink === "Özellikler" ? activeLinkStyleMobile : normalLinkStyleMobile} href={pathname == "/landing" ? "#features" : "/landing#features"}>Özellikler</Link></li>
                    <li><Link onClick={() => handleLinkClick("Fiyatlandırma")} className={activeLink === "Fiyatlandırma" ? activeLinkStyleMobile : normalLinkStyleMobile} href={pathname == "/landing" ? "#pricing" : "/landing#pricing"}>Fiyatlandırma</Link></li>
                    <li><Link onClick={() => handleLinkClick("Hakkımızda")} className={activeLink === "Hakkımızda" ? activeLinkStyleMobile : normalLinkStyleMobile} href={pathname == "/landing" ? "#about" : "/landing#about"}>Hakkımızda</Link></li>
                    <li><Link onClick={() => handleLinkClick("İletişim")} className={activeLink === "İletişim" ? activeLinkStyleMobile : normalLinkStyleMobile} href={pathname == "/landing" ? "#contact" : "/landing#contact"}>İletişim</Link></li>
                </ul>
                <div className="flex flex-col gap-3 px-4 pb-4 pt-2">
                    <button className="bg-indigo-600/20 border border-indigo-500/50 text-indigo-200 hover:bg-indigo-600/40 hover:border-indigo-400 rounded-xl px-5 py-2 font-medium transition-all duration-300 w-full" type="button"><Link href="/register">Kayıt Ol</Link></button>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 rounded-xl px-5 py-2 font-medium shadow-lg shadow-indigo-500/30 transition-all duration-300 w-full" type="button"><Link href="/login">Giriş Yap</Link></button>
                </div>
            </nav>
        </header>
    )
}