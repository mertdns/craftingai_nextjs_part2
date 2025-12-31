"use client";

interface Slide {
    id: string;
    title: string;
    content: string;
    background: string;
}

// Preset gradients
const presetGradients = [
    "linear-gradient(135deg, #6366f1, #8b5cf6)",
    "linear-gradient(135deg, #ec4899, #f43f5e)",
    "linear-gradient(135deg, #10b981, #14b8a6)",
    "linear-gradient(135deg, #f59e0b, #eab308)",
    "linear-gradient(135deg, #1e1b4b, #312e81)",
    "linear-gradient(135deg, #0ea5e9, #06b6d4)",
    "linear-gradient(135deg, #ef4444, #dc2626)",
    "linear-gradient(135deg, #84cc16, #22c55e)",
];

interface SlideEditorProps {
    slide: Slide;
    onUpdateSlide: (updates: Partial<Slide>) => void;
    labels: {
        slideTitle: string;
        slideContent: string;
        background: string;
    };
}

export default function SlideEditor({
    slide,
    onUpdateSlide,
    labels,
}: SlideEditorProps) {
    return (
        <div className="flex flex-col h-full">
            {/* Preview */}
            <div
                className="aspect-video rounded-2xl overflow-hidden mb-6 flex flex-col items-center justify-center p-8"
                style={{ background: slide.background }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                    {slide.title || "Başlık"}
                </h2>
                <p className="text-base md:text-lg text-white/80 text-center max-w-lg">
                    {slide.content || "İçerik"}
                </p>
            </div>

            {/* Editor Form */}
            <div className="space-y-5 flex-1">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        {labels.slideTitle}
                    </label>
                    <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => onUpdateSlide({ title: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Slide başlığı..."
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        {labels.slideContent}
                    </label>
                    <textarea
                        value={slide.content}
                        onChange={(e) => onUpdateSlide({ content: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                        placeholder="Slide içeriği..."
                    />
                </div>

                {/* Background */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        {labels.background}
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {presetGradients.map((gradient, index) => (
                            <button
                                key={index}
                                onClick={() => onUpdateSlide({ background: gradient })}
                                className={`
                                    w-10 h-10 rounded-lg transition-all duration-200
                                    ${slide.background === gradient
                                        ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110"
                                        : "hover:scale-105"
                                    }
                                `}
                                style={{ background: gradient }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
