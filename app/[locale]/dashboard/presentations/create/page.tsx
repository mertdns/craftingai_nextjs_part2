"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import TemplateSelector from "@/app/components/Presentation/TemplateSelector";
import PromptForm from "@/app/components/Presentation/PromptForm";

// Template data
const getTemplates = (t: (key: string) => string) => [
    {
        id: "business",
        name: t("templates.business.name"),
        description: t("templates.business.description"),
        gradient: "from-blue-500 to-indigo-600",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: "education",
        name: t("templates.education.name"),
        description: t("templates.education.description"),
        gradient: "from-emerald-500 to-teal-600",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        id: "pitch",
        name: t("templates.pitch.name"),
        description: t("templates.pitch.description"),
        gradient: "from-orange-500 to-amber-600",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        id: "minimal",
        name: t("templates.minimal.name"),
        description: t("templates.minimal.description"),
        gradient: "from-slate-500 to-gray-600",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
];

export default function CreatePresentationPage() {
    const t = useTranslations("presentations");
    const params = useParams();
    const locale = params.locale as string;

    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const templates = getTemplates(t);

    const handleSubmit = async (prompt: string) => {
        if (!selectedTemplate) return;

        setIsLoading(true);
        // TODO: API call to generate presentation
        console.log("Generating presentation...", { template: selectedTemplate, prompt });

        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
            // TODO: Navigate to generated presentation
        }, 2000);
    };

    // Get examples as array
    const examples = [
        t("create.examples.0"),
        t("create.examples.1"),
        t("create.examples.2"),
    ];

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Back Button & Header */}
            <div className="space-y-4">
                <Link
                    href={`/${locale}/dashboard/presentations`}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t("title")}
                </Link>

                <div className="flex items-center gap-4">
                    {/* AI Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            {t("create.title")}
                        </h1>
                        <p className="text-slate-400">{t("create.subtitle")}</p>
                    </div>
                </div>
            </div>

            {/* Template Selection */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                    {t("create.selectTemplate")}
                </h2>
                <TemplateSelector
                    templates={templates}
                    selectedTemplate={selectedTemplate}
                    onSelect={setSelectedTemplate}
                />
            </div>

            {/* Prompt Form */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                    {t("create.promptLabel")}
                </h2>
                <PromptForm
                    promptPlaceholder={t("create.promptPlaceholder")}
                    generateButtonText={t("create.generateButton")}
                    generatingText={t("create.generating")}
                    characterCountText={t("create.characterCount")}
                    examplesTitle={t("create.examplesTitle")}
                    examples={examples}
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            </div>

            {/* Template not selected warning */}
            {!selectedTemplate && (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-yellow-400 text-sm">
                        {locale === "tr" ? "Devam etmek için bir şablon seçin" : "Please select a template to continue"}
                    </p>
                </div>
            )}
        </div>
    );
}
