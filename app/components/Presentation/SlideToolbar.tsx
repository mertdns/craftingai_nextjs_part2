"use client";

interface SlideToolbarProps {
    isSaving: boolean;
    hasUnsavedChanges: boolean;
    onSave: () => void;
    onPreview: () => void;
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
    labels: {
        save: string;
        saving: string;
        saved: string;
        preview: string;
        undo: string;
        redo: string;
        unsavedChanges: string;
    };
}

export default function SlideToolbar({
    isSaving,
    hasUnsavedChanges,
    onSave,
    onPreview,
    onUndo,
    onRedo,
    canUndo,
    canRedo,
    labels,
}: SlideToolbarProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
            {/* Left - Undo/Redo */}
            <div className="flex items-center gap-2">
                <button
                    onClick={onUndo}
                    disabled={!canUndo}
                    className={`
                        p-2.5 rounded-xl transition-all duration-200
                        ${canUndo
                            ? "bg-slate-700 text-white hover:bg-slate-600"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed"
                        }
                    `}
                    title={labels.undo}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                </button>
                <button
                    onClick={onRedo}
                    disabled={!canRedo}
                    className={`
                        p-2.5 rounded-xl transition-all duration-200
                        ${canRedo
                            ? "bg-slate-700 text-white hover:bg-slate-600"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed"
                        }
                    `}
                    title={labels.redo}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                    </svg>
                </button>
            </div>

            {/* Center - Save Status */}
            <div className="flex items-center gap-2">
                {hasUnsavedChanges && (
                    <span className="text-xs text-yellow-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        {labels.unsavedChanges}
                    </span>
                )}
                {!hasUnsavedChanges && !isSaving && (
                    <span className="text-xs text-green-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {labels.saved}
                    </span>
                )}
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-2">
                <button
                    onClick={onPreview}
                    className="px-4 py-2.5 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="hidden sm:inline">{labels.preview}</span>
                </button>
                <button
                    onClick={onSave}
                    disabled={isSaving || !hasUnsavedChanges}
                    className={`
                        px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2
                        ${isSaving || !hasUnsavedChanges
                            ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                            : "bg-indigo-600 text-white hover:bg-indigo-500"
                        }
                    `}
                >
                    {isSaving ? (
                        <>
                            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            <span className="hidden sm:inline">{labels.saving}</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                            <span className="hidden sm:inline">{labels.save}</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
