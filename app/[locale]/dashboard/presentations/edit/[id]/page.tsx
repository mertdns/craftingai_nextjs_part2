"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import SlideList from "@/app/components/Presentation/SlideList";
import SlideEditor from "@/app/components/Presentation/SlideEditor";
import SlideToolbar from "@/app/components/Presentation/SlideToolbar";

interface Slide {
    id: string;
    title: string;
    content: string;
    background: string;
}

// Demo sunum verisi
const getInitialSlides = (): Slide[] => [
    {
        id: "1",
        title: "Hoş Geldiniz",
        content: "Q4 2024 Çeyrek Değerlendirmesi ve 2025 Yol Haritası",
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    },
    {
        id: "2",
        title: "Önemli Metrikler",
        content: "Gelir %45 arttı, aktif kullanıcı sayısı 1 milyonu aştı.",
        background: "linear-gradient(135deg, #ec4899, #f43f5e)",
    },
    {
        id: "3",
        title: "2025 Hedeflerimiz",
        content: "Küresel genişleme, mobil uygulama lansmanı.",
        background: "linear-gradient(135deg, #10b981, #14b8a6)",
    },
];

export default function EditPresentationPage() {
    const t = useTranslations("presentations");
    const params = useParams();
    const router = useRouter();
    const locale = params.locale as string;
    const id = params.id as string;

    const [slides, setSlides] = useState<Slide[]>(getInitialSlides);
    const [selectedSlideId, setSelectedSlideId] = useState<string>(slides[0]?.id || "1");
    const [isSaving, setIsSaving] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showSlideList, setShowSlideList] = useState(true);

    const selectedSlide = slides.find(s => s.id === selectedSlideId) || slides[0];

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (mobile) setShowSlideList(false);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Update slide
    const handleUpdateSlide = (updates: Partial<Slide>) => {
        setSlides(slides.map(s =>
            s.id === selectedSlideId ? { ...s, ...updates } : s
        ));
        setHasUnsavedChanges(true);
    };

    // Add slide
    const handleAddSlide = () => {
        const newId = String(Date.now());
        const newSlide: Slide = {
            id: newId,
            title: "Yeni Slayt",
            content: "İçerik ekleyin...",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        };
        setSlides([...slides, newSlide]);
        setSelectedSlideId(newId);
        setHasUnsavedChanges(true);
    };

    // Delete slide
    const handleDeleteSlide = (slideId: string) => {
        if (slides.length <= 1) return;
        const newSlides = slides.filter(s => s.id !== slideId);
        setSlides(newSlides);
        if (selectedSlideId === slideId) {
            setSelectedSlideId(newSlides[0].id);
        }
        setHasUnsavedChanges(true);
    };

    // Duplicate slide
    const handleDuplicateSlide = (slideId: string) => {
        const slide = slides.find(s => s.id === slideId);
        if (!slide) return;
        const newId = String(Date.now());
        const duplicate: Slide = { ...slide, id: newId, title: slide.title + " (Kopya)" };
        const index = slides.findIndex(s => s.id === slideId);
        const newSlides = [...slides.slice(0, index + 1), duplicate, ...slides.slice(index + 1)];
        setSlides(newSlides);
        setSelectedSlideId(newId);
        setHasUnsavedChanges(true);
    };

    // Save
    const handleSave = async () => {
        setIsSaving(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
        setHasUnsavedChanges(false);
    };

    // Preview
    const handlePreview = () => {
        router.push(`/${locale}/dashboard/presentations/view/${id}`);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-120px)] lg:h-[calc(100vh-80px)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Link
                        href={`/${locale}/dashboard/presentations`}
                        className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-white">{t("edit.title")}</h1>

                    {/* Mobile toggle */}
                    {isMobile && (
                        <button
                            onClick={() => setShowSlideList(!showSlideList)}
                            className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white transition-all lg:hidden"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Toolbar */}
            <SlideToolbar
                isSaving={isSaving}
                hasUnsavedChanges={hasUnsavedChanges}
                onSave={handleSave}
                onPreview={handlePreview}
                onUndo={() => { }}
                onRedo={() => { }}
                canUndo={false}
                canRedo={false}
                labels={{
                    save: t("edit.save"),
                    saving: t("edit.saving"),
                    saved: t("edit.saved"),
                    preview: t("edit.preview"),
                    undo: t("edit.undo"),
                    redo: t("edit.redo"),
                    unsavedChanges: t("edit.unsavedChanges"),
                }}
            />

            {/* Main Content */}
            <div className="flex-1 flex gap-4 mt-4 overflow-hidden">
                {/* Slide List - Desktop always visible, Mobile toggleable */}
                <div
                    className={`
                        ${isMobile
                            ? `fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transform transition-transform duration-300 ${showSlideList ? "translate-x-0" : "-translate-x-full"}`
                            : "w-64 shrink-0"
                        }
                        bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden
                    `}
                >
                    <SlideList
                        slides={slides}
                        selectedSlideId={selectedSlideId}
                        onSelectSlide={(id) => {
                            setSelectedSlideId(id);
                            if (isMobile) setShowSlideList(false);
                        }}
                        onAddSlide={handleAddSlide}
                        onDeleteSlide={handleDeleteSlide}
                        onDuplicateSlide={handleDuplicateSlide}
                        labels={{
                            slides: t("edit.slides"),
                            addSlide: t("edit.addSlide"),
                            deleteSlide: t("edit.deleteSlide"),
                            duplicateSlide: t("edit.duplicateSlide"),
                            dragHint: t("edit.dragHint"),
                        }}
                    />
                </div>

                {/* Mobile Overlay */}
                {isMobile && showSlideList && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={() => setShowSlideList(false)}
                    />
                )}

                {/* Editor */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 overflow-y-auto">
                    {selectedSlide && (
                        <SlideEditor
                            slide={selectedSlide}
                            onUpdateSlide={handleUpdateSlide}
                            labels={{
                                slideTitle: t("edit.slideTitle"),
                                slideContent: t("edit.slideContent"),
                                background: t("edit.background"),
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
