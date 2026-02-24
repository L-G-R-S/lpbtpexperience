"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

import { JOURNEY_STEPS } from '@/lib/constants';

export const Journey = () => {
    const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

    const toggleAccordion = (index: number) => {
        setExpandedIndices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="journey">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-2 bg-[var(--primary)]/5 text-[var(--primary)] rounded-full text-sm font-bold mb-6 border border-[var(--primary)]/10">
                        NOSSOS SERVIÇOS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--secondary)] mb-6 leading-tight">
                        Da avaliação à <span className="text-[var(--primary)]">operação inteligente</span>
                    </h2>
                </div>

                {/* Vertical Accordion Timeline */}
                <div className="max-w-3xl mx-auto mb-32">
                    <div className="flex flex-col gap-4 relative">
                        {JOURNEY_STEPS.map((step, index) => {
                            const isExpanded = expandedIndices.includes(index);

                            return (
                                <div key={index} className="flex gap-6 lg:gap-8 group">
                                    {/* Timeline Node & Line */}
                                    <div className="relative shrink-0 flex flex-col items-center">
                                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white border-4 flex items-center justify-center text-lg lg:text-xl font-bold shadow-sm transition-all duration-300 z-10 relative 
                                            ${isExpanded ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-gray-100 text-[var(--secondary)] group-hover:border-[var(--primary-light)] group-hover:text-[var(--primary-light)]'}`}>
                                            {step.number}
                                        </div>
                                        {/* Connector Line */}
                                        {index !== JOURNEY_STEPS.length - 1 && (
                                            <div className={`w-1 bg-gray-100 flex-grow transition-all duration-300 ${isExpanded ? 'bg-gradient-to-b from-[var(--primary)] to-transparent opacity-30' : ''} my-1`}></div>
                                        )}
                                    </div>

                                    {/* Accordion Content */}
                                    <div className="flex-grow pt-2 lg:pt-3 pb-8">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between text-left focus:outline-none group/btn"
                                            aria-expanded={isExpanded}
                                        >
                                            <h3 className={`font-bold text-xl lg:text-2xl transition-colors duration-300 ${isExpanded ? 'text-[var(--primary)]' : 'text-[var(--secondary)] group-hover/btn:text-[var(--primary-light)]'}`}>
                                                {step.title}
                                            </h3>
                                            <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-[var(--primary)]/10 text-[var(--primary)] rotate-180' : 'bg-gray-50 text-gray-400 group-hover/btn:bg-[var(--primary-light)]/10 group-hover/btn:text-[var(--primary-light)]'}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out origin-top
                                                ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                                            `}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100/50">
                                                    <p className="text-gray-600 font-medium leading-relaxed text-[15px] lg:text-base">
                                                        {step.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Integration/CTA Card */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Decorative Gradients for Card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] rounded-[2rem] blur opacity-20 animate-pulse"></div>

                    <Card variant="dark" className="p-8 md:p-14 relative overflow-hidden border-none shadow-2xl rounded-[1.5rem]">
                        <ImmersiveBackground />

                        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs font-bold rounded-full mb-4">
                                        PASSO ZERO
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                                        Diagnóstico Executivo <span className="text-[var(--accent)]">Gratuito</span>
                                    </h3>
                                    <p className="text-gray-300 text-lg">
                                        Entenda seu nível de maturidade e prontidão para o SAP BTP e Clean Core.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Análise de arquitetura AS-IS",
                                        "Mapeamento de integrações",
                                        "Scan de Z-codes (Clean Core)",
                                        "Roadmap de inovação"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                            <CheckCircle className="w-5 h-5 text-[var(--accent)] shrink-0" />
                                            <span className="text-gray-200 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-auto flex flex-col gap-4">
                                <Button
                                    variant="primary"
                                    className="whitespace-nowrap text-lg px-8 py-5 shadow-xl shadow-[var(--accent)]/20 hover:scale-105"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Solicitar Diagnóstico <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <p className="text-center text-xs text-white/40">
                                    Vagas limitadas para este mês.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
