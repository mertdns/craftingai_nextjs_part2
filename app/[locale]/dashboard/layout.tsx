"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/app/components/Dashboard_layout/Sidebar/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Prevent hydration mismatch - render default state on server
    if (!mounted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
                {/* Animasyonlu Arka Plan Efektleri */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-60 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
                </div>

                {/* Main Content Area - Desktop default */}
                <main className="ml-72 transition-all duration-300 min-h-screen relative z-10">
                    <div className="p-4 sm:p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
            {/* Animasyonlu Arka Plan Efektleri */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-60 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Sidebar */}
            <Sidebar
                isMobileOpen={isMobileMenuOpen}
                onMobileClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Header with Hamburger */}
            {isMobile && (
                <header className="fixed top-0 left-0 right-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
                    <div className="flex items-center justify-between px-4 py-3">
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all duration-200"
                            aria-label="Open menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                CraftingAI
                            </span>
                        </div>

                        {/* User Avatar */}
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                            JD
                        </div>
                    </div>
                </header>
            )}

            {/* Main Content Area - Responsive margin */}
            <main className={`
                transition-all duration-300 min-h-screen relative z-10
                ${isMobile
                    ? "ml-0 pt-16"
                    : isTablet
                        ? "ml-20"
                        : "ml-72"
                }
            `}>
                <div className="p-4 sm:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
