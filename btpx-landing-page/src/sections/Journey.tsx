"use client";

import React from 'react';
import { Card } from '@/components/ui/Card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

const steps = [
    {
        number: "01",
        title: "Diagnóstico e Prontidão",
        subtitle: "SAP Readiness & Clean Core (AI-Assessed)"
    },
    {
        number: "02",
        title: "Direcionamento Estratégico",
        subtitle: "SAP Transformation & Innovation Roadmap"
    },
    {
        number: "03",
        title: "Experimentação com Controle",
        subtitle: "SAP Garage / Labs"
    },
    {
        number: "04",
        title: "Execução com Governança",
        subtitle: "SAP Integrations & AI Enablement"
    },
    {
        number: "05",
        title: "Operação Inteligente",
        subtitle: "SAP Intelligent AMS (AI-Driven Operations)"
    }
];

export const Journey = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="journey">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-2 bg-[var(--primary)]/5 text-[var(--primary)] rounded-full text-sm font-bold mb-6 border border-[var(--primary)]/10">
                        NOSSO PROCESSO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--secondary)] mb-6 leading-tight">
                        Da avaliação à <span className="text-[var(--primary)]">operação inteligente</span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative mb-32">
                    {/* Desktop Line (Horizontal) */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gray-100/80 rounded-full -z-0">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] w-full opacity-20"></div>
                    </div>

                    {/* Mobile Line (Vertical) */}
                    <div className="lg:hidden absolute top-0 left-8 w-1 h-full bg-gray-100 -z-0">
                        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--primary)] to-[var(--primary-light)] h-full opacity-20"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 group">
                                {/* Node/Circle */}
                                <div className="relative shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-xl font-bold text-[var(--secondary)] shadow-lg group-hover:border-[var(--primary)] group-hover:scale-110 group-hover:text-[var(--primary)] transition-all duration-300 z-10 relative">
                                        {step.number}
                                    </div>
                                    {/* Mobile Connector adjustment */}
                                    {index !== steps.length - 1 && (
                                        <div className="lg:hidden absolute top-16 left-1/2 w-1 h-24 bg-gray-100 -translate-x-1/2 -z-10"></div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pt-2 lg:text-center lg:w-full">
                                    <h3 className="font-bold text-[var(--secondary)] text-xl mb-3 group-hover:text-[var(--primary)] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[200px] lg:mx-auto">
                                        {step.subtitle}
                                    </p>

                                    {/* Desktop Arrow */}
                                    {index !== steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 -right-[50%] w-full flex justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">

                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
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
                                    className="whitespace-nowrap text-lg px-8 py-5 shadow-xl shadow-orange-500/20 hover:scale-105"
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
