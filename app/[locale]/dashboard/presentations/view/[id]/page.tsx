"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import SlideViewer from "@/app/components/Presentation/SlideViewer";
import SlideNavigation from "@/app/components/Presentation/SlideNavigation";

// Demo sunum verisi
const getDemoPresentation = (id: string) => ({
    id,
    title: "Q4 2024 Şirket Sunumu",
    slides: [
        {
            id: "1",
            title: "Hoş Geldiniz",
            content: "Q4 2024 Çeyrek Değerlendirmesi ve 2025 Yol Haritası",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        },
        {
            id: "2",
            title: "Önemli Metrikler",
            content: "Gelir %45 arttı, aktif kullanıcı sayısı 1 milyonu aştı, müşteri memnuniyeti %95'e ulaştı.",
            background: "linear-gradient(135deg, #ec4899, #f43f5e)",
        },
        {
            id: "3",
            title: "Ürün Güncellemeleri",
            content: "Yeni AI özellikleri, geliştirilmiş performans ve 50+ entegrasyon eklendi.",
            background: "linear-gradient(135deg, #10b981, #14b8a6)",
        },
        {
            id: "4",
            title: "2025 Hedeflerimiz",
            content: "Küresel genişleme, mobil uygulama lansmanı ve kurumsal çözümler.",
            background: "linear-gradient(135deg, #f59e0b, #eab308)",
        },
        {
            id: "5",
            title: "Teşekkürler",
            content: "Sorularınız için hazırız. İletişim: team@company.com",
            background: "linear-gradient(135deg, #1e1b4b, #312e81)",
        },
    ],
});

export default function ViewPresentationPage() {
    const t = useTranslations("presentations");
    const params = useParams();
    const locale = params.locale as string;
    const id = params.id as string;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const presentation = getDemoPresentation(id);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Fullscreen toggle
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Listen for fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    // ESC to exit fullscreen
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isFullscreen]);

    return (
        <div className={`space-y-6 ${isFullscreen ? "fixed inset-0 z-50 bg-slate-900 p-4" : ""}`}>
            {/* Header - Hidden in fullscreen */}
            {!isFullscreen && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href={`/${locale}/dashboard/presentations`}
                            className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-white">{presentation.title}</h1>
                            <p className="text-sm text-slate-400">
                                {presentation.slides.length} {t("card.slides")}
                            </p>
                        </div>
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden sm:flex items-center gap-2">
                        <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-all">
                            {t("view.share")}
                        </button>
                        <Link
                            href={`/${locale}/dashboard/presentations/edit/${id}`}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all"
                        >
                            {t("view.edit")}
                        </Link>
                    </div>
                </div>
            )}

            {/* Slide Viewer */}
            <div className={isFullscreen ? "h-[calc(100vh-120px)]" : ""}>
                <SlideViewer
                    slides={presentation.slides}
                    currentSlide={currentSlide}
                    onSlideChange={setCurrentSlide}
                    isFullscreen={isFullscreen}
                />
            </div>

            {/* Navigation */}
            <SlideNavigation
                currentSlide={currentSlide}
                totalSlides={presentation.slides.length}
                onPrevious={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                onNext={() => setCurrentSlide(Math.min(presentation.slides.length - 1, currentSlide + 1))}
                onSlideSelect={setCurrentSlide}
                isFullscreen={isFullscreen}
                onToggleFullscreen={toggleFullscreen}
                labels={{
                    slide: t("view.slide"),
                    of: t("view.of"),
                    previous: t("view.previous"),
                    next: t("view.next"),
                    fullscreen: t("view.fullscreen"),
                    exitFullscreen: t("view.exitFullscreen"),
                }}
            />

            {/* Mobile swipe hint */}
            {isMobile && !isFullscreen && (
                <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    {t("view.swipeHint")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </p>
            )}
        </div>
    );
}
