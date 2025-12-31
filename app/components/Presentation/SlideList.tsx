"use client";

interface Slide {
    id: string;
    title: string;
    content: string;
    background: string;
}

interface SlideListProps {
    slides: Slide[];
    selectedSlideId: string;
    onSelectSlide: (id: string) => void;
    onAddSlide: () => void;
    onDeleteSlide: (id: string) => void;
    onDuplicateSlide: (id: string) => void;
    labels: {
        slides: string;
        addSlide: string;
        deleteSlide: string;
        duplicateSlide: string;
        dragHint: string;
    };
}

export default function SlideList({
    slides,
    selectedSlideId,
    onSelectSlide,
    onAddSlide,
    onDeleteSlide,
    onDuplicateSlide,
    labels,
}: SlideListProps) {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <h3 className="font-semibold text-white">{labels.slides}</h3>
                <button
                    onClick={onAddSlide}
                    className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all"
                    title={labels.addSlide}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            {/* Slide Thumbnails */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 sidebar-scroll">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        onClick={() => onSelectSlide(slide.id)}
                        className={`
                            group relative cursor-pointer rounded-xl overflow-hidden
                            border-2 transition-all duration-200
                            ${selectedSlideId === slide.id
                                ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
                                : "border-slate-700/50 hover:border-slate-600"
                            }
                        `}
                    >
                        {/* Thumbnail */}
                        <div
                            className="aspect-video p-3 flex flex-col justify-center"
                            style={{ background: slide.background }}
                        >
                            <p className="text-white text-xs font-medium truncate">{slide.title}</p>
                            <p className="text-white/60 text-[10px] truncate mt-1">{slide.content}</p>
                        </div>

                        {/* Slide Number Badge */}
                        <div className="absolute top-2 left-2 w-5 h-5 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-medium flex items-center justify-center">
                            {index + 1}
                        </div>

                        {/* Actions (on hover) */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                            <button
                                onClick={(e) => { e.stopPropagation(); onDuplicateSlide(slide.id); }}
                                className="p-1.5 bg-slate-800/80 backdrop-blur-sm text-white rounded hover:bg-indigo-600 transition-colors"
                                title={labels.duplicateSlide}
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                            {slides.length > 1 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); onDeleteSlide(slide.id); }}
                                    className="p-1.5 bg-slate-800/80 backdrop-blur-sm text-white rounded hover:bg-red-600 transition-colors"
                                    title={labels.deleteSlide}
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hint */}
            <p className="p-3 text-xs text-slate-500 text-center border-t border-slate-700/50">
                {labels.dragHint}
            </p>
        </div>
    );
}
