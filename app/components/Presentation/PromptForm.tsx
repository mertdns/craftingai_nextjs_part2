"use client";

import { useState } from "react";

interface PromptFormProps {
    promptPlaceholder: string;
    generateButtonText: string;
    generatingText: string;
    characterCountText: string;
    examplesTitle: string;
    examples: string[];
    onSubmit: (prompt: string) => void;
    isLoading?: boolean;
}

export default function PromptForm({
    promptPlaceholder,
    generateButtonText,
    generatingText,
    characterCountText,
    examplesTitle,
    examples,
    onSubmit,
    isLoading = false,
}: PromptFormProps) {
    const [prompt, setPrompt] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim() && !isLoading) {
            onSubmit(prompt);
        }
    };

    const handleExampleClick = (example: string) => {
        setPrompt(example);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Textarea */}
            <div className="relative">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={promptPlaceholder}
                    rows={5}
                    className="
                        w-full px-5 py-4 bg-slate-800/50 backdrop-blur-sm
                        border border-slate-700/50 rounded-2xl
                        text-white placeholder-slate-400
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                        resize-none transition-all duration-300
                    "
                    disabled={isLoading}
                />
                {/* Character count */}
                <div className="absolute bottom-3 right-4 text-xs text-slate-500">
                    {prompt.length} {characterCountText}
                </div>
            </div>

            {/* Example prompts */}
            <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-400">{examplesTitle}</h4>
                <div className="flex flex-wrap gap-2">
                    {examples.map((example, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleExampleClick(example)}
                            className="
                                px-4 py-2 text-sm text-slate-300
                                bg-slate-800/50 border border-slate-700/50 rounded-full
                                hover:bg-slate-700 hover:border-indigo-500/50 hover:text-white
                                transition-all duration-200
                            "
                        >
                            {example.length > 50 ? example.slice(0, 50) + "..." : example}
                        </button>
                    ))}
                </div>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                disabled={!prompt.trim() || isLoading}
                className={`
                    w-full flex items-center justify-center gap-3 px-6 py-4
                    rounded-xl font-semibold text-lg
                    transition-all duration-300
                    ${!prompt.trim() || isLoading
                        ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]"
                    }
                `}
            >
                {isLoading ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {generatingText}
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {generateButtonText}
                    </>
                )}
            </button>
        </form>
    );
}
