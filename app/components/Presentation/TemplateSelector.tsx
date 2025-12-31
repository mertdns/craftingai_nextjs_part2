"use client";

import { useState } from "react";

interface Template {
    id: string;
    name: string;
    description: string;
    gradient: string;
    icon: React.ReactNode;
}

interface TemplateSelectorProps {
    templates: Template[];
    selectedTemplate: string | null;
    onSelect: (templateId: string) => void;
}

export default function TemplateSelector({ templates, selectedTemplate, onSelect }: TemplateSelectorProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
                <button
                    key={template.id}
                    onClick={() => onSelect(template.id)}
                    className={`
                        relative group p-6 rounded-2xl border-2 text-left
                        transition-all duration-300 ease-out
                        ${selectedTemplate === template.id
                            ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/20"
                            : "border-slate-700/50 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800"
                        }
                    `}
                >
                    {/* Selected indicator */}
                    {selectedTemplate === template.id && (
                        <div className="absolute top-3 right-3">
                            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    )}

                    {/* Icon */}
                    <div
                        className={`
                            w-12 h-12 rounded-xl flex items-center justify-center mb-4
                            bg-gradient-to-br ${template.gradient}
                            group-hover:scale-110 transition-transform duration-300
                        `}
                    >
                        {template.icon}
                    </div>

                    {/* Content */}
                    <h3 className={`
                        font-semibold mb-1 transition-colors duration-200
                        ${selectedTemplate === template.id ? "text-indigo-400" : "text-white group-hover:text-indigo-400"}
                    `}>
                        {template.name}
                    </h3>
                    <p className="text-sm text-slate-400">{template.description}</p>
                </button>
            ))}
        </div>
    );
}
