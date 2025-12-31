"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Slide {
    id: string;
    title: string;
    content: string;
    background: string;
}

interface SlideViewerProps {
    slides: Slide[];
    currentSlide: number;
    onSlideChange: (index: number) => void;
    isFullscreen: boolean;
}

export default function SlideViewer({
    slides,
    currentSlide,
    onSlideChange,
    isFullscreen,
}: SlideViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentSlide < slides.length - 1) {
                // Swipe left - next slide
                onSlideChange(currentSlide + 1);
            } else if (diff < 0 && currentSlide > 0) {
                // Swipe right - previous slide
                onSlideChange(currentSlide - 1);
            }
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
                onSlideChange(currentSlide + 1);
            } else if (e.key === "ArrowLeft" && currentSlide > 0) {
                onSlideChange(currentSlide - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide, slides.length, onSlideChange]);

    const slide = slides[currentSlide];

    return (
        <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`
                relative overflow-hidden rounded-2xl
                transition-all duration-500 ease-out
                ${isFullscreen
                    ? "fixed inset-0 z-50 rounded-none"
                    : "aspect-video w-full"
                }
            `}
            style={{ background: slide?.background || "linear-gradient(135deg, #1e1b4b, #312e81)" }}
        >
            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 md:mb-6 relative z-10">
                    {slide?.title}
                </h2>

                {/* Content */}
                <p className="text-base sm:text-lg md:text-xl text-slate-300 text-center max-w-3xl leading-relaxed relative z-10">
                    {slide?.content}
                </p>
            </div>

            {/* Slide number indicator (mobile) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
                <div className="flex gap-1.5">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onSlideChange(index)}
                            className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${index === currentSlide
                                    ? "w-6 bg-white"
                                    : "bg-white/30 hover:bg-white/50"
                                }
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
