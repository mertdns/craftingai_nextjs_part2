"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useTranslations } from "next-intl";

// Menu Item Type
interface MenuItem {
    id: string;
    icon: React.ReactNode;
    href: string;
    badge?: string;
    badgeColor?: string;
    isExact?: boolean;
}

interface SidebarProps {
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
}

export default function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const pathname = usePathname();
    const params = useParams();
    const locale = params.locale as string || "tr";
    const t = useTranslations("sidebar");

    // Responsive breakpoint detection
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);

            // Auto-collapse on tablet
            if (width >= 768 && width < 1024) {
                setIsCollapsed(true);
            } else if (width >= 1024) {
                setIsCollapsed(false);
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        if (isMobile && onMobileClose) {
            onMobileClose();
        }
    }, [pathname]);

    // Handle escape key to close mobile menu
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileOpen && onMobileClose) {
                onMobileClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileOpen, onMobileClose]);

    // Menu Items
    const mainMenuItems: MenuItem[] = [
        {
            id: "dashboard",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            href: `/${locale}/dashboard`,
            isExact: true,
        },
        {
            id: "presentations",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17h6M9 13h6M9 9h2" />
                </svg>
            ),
            href: `/${locale}/dashboard/presentations`,
        },
        {
            id: "projects",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
            ),
            href: `/${locale}/dashboard/projects`,
            badge: "3",
            badgeColor: "from-indigo-500 to-purple-500",
        },
        {
            id: "apiManagement",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            href: `/${locale}/dashboard/api`,
        },
        {
            id: "analytics",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            href: `/${locale}/dashboard/analytics`,
        },
        {
            id: "models",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            href: `/${locale}/dashboard/models`,
            badge: "New",
            badgeColor: "from-purple-500 to-pink-500",
        },
    ];

    const toolMenuItems: MenuItem[] = [
        {
            id: "documentation",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            href: `/${locale}/docs`,
        },
        {
            id: "support",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            href: `/${locale}/support`,
        },
    ];

    const accountMenuItems: MenuItem[] = [
        {
            id: "settings",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            href: `/${locale}/dashboard/settings`,
        },
    ];

    const isActiveRoute = (href: string, isExact: boolean = false) => {
        if (isExact) {
            return pathname === href;
        }
        return pathname === href || pathname.startsWith(href + "/");
    };

    // Determine if sidebar should show expanded
    const showExpanded = isMobile ? true : !isCollapsed;

    const renderMenuItem = (item: MenuItem) => {
        const isActive = isActiveRoute(item.href, item.isExact);
        const isHovered = hoveredItem === item.id;

        return (
            <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => isMobile && onMobileClose?.()}
                className={`
                    relative flex items-center gap-3 px-3 py-2.5 rounded-xl
                    transition-all duration-300 ease-out group
                    ${isActive
                        ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }
                    ${!showExpanded ? "justify-center" : ""}
                `}
            >
                {/* Active/Hover Background Effect */}
                {(isActive || isHovered) && showExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Icon with gradient on active */}
                <div className={`
                    relative z-10 flex-shrink-0
                    ${isActive ? "text-indigo-400" : "group-hover:text-indigo-400"}
                    transition-colors duration-300
                `}>
                    {item.icon}
                </div>

                {/* Label */}
                {showExpanded && (
                    <span className={`
                        relative z-10 font-medium text-sm whitespace-nowrap
                        transition-all duration-300
                        ${isActive ? "text-white" : ""}
                    `}>
                        {t(`menu.${item.id}`)}
                    </span>
                )}

                {/* Badge */}
                {item.badge && showExpanded && (
                    <span className={`
                        ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full
                        bg-gradient-to-r ${item.badgeColor || "from-indigo-500 to-purple-500"}
                        text-white shadow-lg
                    `}>
                        {item.badge}
                    </span>
                )}

                {/* Active Indicator */}
                {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-r-full" />
                )}

                {/* Tooltip for collapsed mode (desktop only) */}
                {!showExpanded && !isMobile && (
                    <div className={`
                        absolute left-full ml-3 px-3 py-2 bg-slate-800 border border-slate-700
                        rounded-lg text-sm text-white whitespace-nowrap z-50
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200 shadow-xl
                    `}>
                        {t(`menu.${item.id}`)}
                        {item.badge && (
                            <span className={`
                                ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full
                                bg-gradient-to-r ${item.badgeColor || "from-indigo-500 to-purple-500"}
                            `}>
                                {item.badge}
                            </span>
                        )}
                    </div>
                )}
            </Link>
        );
    };

    // Sidebar'ı mobilde de render et ama transform ile gizle (animasyon için)

    return (
        <>
            {/* Mobile Overlay Backdrop */}
            {isMobile && isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
                    onClick={onMobileClose}
                    aria-hidden="true"
                />
            )}

            <aside className={`
                fixed left-0 top-0 h-screen z-50
                bg-slate-900/95 backdrop-blur-xl
                border-r border-slate-700/50
                flex flex-col
                ${isMobile
                    ? `w-72 transition-transform duration-300 ease-out ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`
                    : `transition-all duration-300 ease-out ${isCollapsed ? "w-20" : "w-72"}`
                }
            `}>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                {/* Logo Section */}
                <div className={`
                    relative flex items-center gap-3 p-4 border-b border-slate-700/50
                    ${!showExpanded ? "justify-center" : "px-6"}
                `}>
                    {/* Mobile Close Button */}
                    {isMobile && (
                        <button
                            onClick={onMobileClose}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    {/* Animated Logo */}
                    <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                        <div className="relative w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Brand Name */}
                    {showExpanded && (
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                {t("brand")}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                                Dashboard
                            </span>
                        </div>
                    )}
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6 sidebar-scroll">
                    {/* Main Menu Section */}
                    <div>
                        {showExpanded && (
                            <h3 className="px-3 mb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                {t("sections.main")}
                            </h3>
                        )}
                        <div className="space-y-1">
                            {mainMenuItems.map(renderMenuItem)}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                        {showExpanded && (
                            <h3 className="px-3 mb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                {t("sections.tools")}
                            </h3>
                        )}
                        <div className="space-y-1">
                            {toolMenuItems.map(renderMenuItem)}
                        </div>
                    </div>

                    {/* Account Section */}
                    <div>
                        {showExpanded && (
                            <h3 className="px-3 mb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                {t("sections.account")}
                            </h3>
                        )}
                        <div className="space-y-1">
                            {accountMenuItems.map(renderMenuItem)}
                        </div>
                    </div>
                </nav>

                {/* Usage Stats Card */}
                {showExpanded && (
                    <div className="mx-3 mb-4">
                        <div className="relative overflow-hidden p-4 bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-2xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs text-slate-400">{t("apiCalls")}</span>
                                    <span className="text-[10px] text-slate-500">{t("thisMonth")}</span>
                                </div>
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    24,567
                                </div>
                                <div className="mt-3">
                                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                                        <span>75% {t("user.usage")}</span>
                                        <span>30K limit</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* User Profile Section */}
                <div className={`
                    relative border-t border-slate-700/50 p-4
                    ${!showExpanded ? "px-3" : "px-4"}
                `}>
                    <div className={`
                        flex items-center gap-3 p-2 rounded-xl
                        hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group
                        ${!showExpanded ? "justify-center" : ""}
                    `}>
                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/25">
                                JD
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full" />
                        </div>

                        {/* User Info */}
                        {showExpanded && (
                            <>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">John Doe</p>
                                    <p className="text-xs text-slate-400 truncate">{t("user.plan")}</p>
                                </div>

                                {/* Dropdown Arrow */}
                                <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </>
                        )}
                    </div>

                    {/* Logout Button */}
                    {showExpanded && (
                        <button className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            {t("user.logout")}
                        </button>
                    )}
                </div>

                {/* Collapse Toggle Button - Desktop/Tablet Only */}
                {!isMobile && (
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={`
                            absolute top-6 -right-3 w-6 h-6
                            bg-slate-800 border border-slate-700
                            rounded-full flex items-center justify-center
                            text-slate-400 hover:text-white hover:bg-slate-700
                            hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20
                            transition-all duration-300 z-50
                        `}
                        title={isCollapsed ? t("expand") : t("collapse")}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}
            </aside>
        </>
    );
}