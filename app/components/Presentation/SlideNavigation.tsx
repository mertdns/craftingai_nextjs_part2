"use client";

interface SlideNavigationProps {
    currentSlide: number;
    totalSlides: number;
    onPrevious: () => void;
    onNext: () => void;
    onSlideSelect: (index: number) => void;
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
    labels: {
        slide: string;
        of: string;
        previous: string;
        next: string;
        fullscreen: string;
        exitFullscreen: string;
    };
}

export default function SlideNavigation({
    currentSlide,
    totalSlides,
    onPrevious,
    onNext,
    onSlideSelect,
    isFullscreen,
    onToggleFullscreen,
    labels,
}: SlideNavigationProps) {
    return (
        <div className="flex items-center justify-between gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
            {/* Left side - Navigation buttons */}
            <div className="flex items-center gap-2">
                <button
                    onClick={onPrevious}
                    disabled={currentSlide === 0}
                    className={`
                        p-3 rounded-xl transition-all duration-200
                        ${currentSlide === 0
                            ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                            : "bg-slate-700 text-white hover:bg-indigo-600 hover:scale-105"
                        }
                    `}
                    title={labels.previous}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={onNext}
                    disabled={currentSlide === totalSlides - 1}
                    className={`
                        p-3 rounded-xl transition-all duration-200
                        ${currentSlide === totalSlides - 1
                            ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                            : "bg-slate-700 text-white hover:bg-indigo-600 hover:scale-105"
                        }
                    `}
                    title={labels.next}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Center - Slide counter */}
            <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">{labels.slide}</span>
                <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-white">{currentSlide + 1}</span>
                    <span className="text-slate-400">{labels.of}</span>
                    <span className="text-lg font-bold text-white">{totalSlides}</span>
                </div>
            </div>

            {/* Desktop - Thumbnail navigation */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center max-w-md">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onSlideSelect(index)}
                        className={`
                            h-2 rounded-full transition-all duration-300
                            ${index === currentSlide
                                ? "w-8 bg-indigo-500"
                                : "w-2 bg-slate-600 hover:bg-slate-500"
                            }
                        `}
                    />
                ))}
            </div>

            {/* Right side - Fullscreen */}
            <button
                onClick={onToggleFullscreen}
                className="p-3 rounded-xl bg-slate-700 text-white hover:bg-indigo-600 hover:scale-105 transition-all duration-200"
                title={isFullscreen ? labels.exitFullscreen : labels.fullscreen}
            >
                {isFullscreen ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                )}
            </button>
        </div>
    );
}
