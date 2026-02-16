"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

export const Hero = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const fullText = "IA no SAP não é inovação.\nÉ resultado de negócio.";
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) {
                clearInterval(intervalId);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative min-h-screen bg-[var(--primary-dark)] text-white flex items-center justify-center pt-20 overflow-hidden">

            <ImmersiveBackground />

            {/* Layer 4: Main Content */}
            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[var(--primary-light)]/30 bg-[var(--primary-light)]/10 text-[var(--primary-light)] text-sm font-mono tracking-wider animate-fade-in-up">
                    SAP BTP EXPERIENCE 2026
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-150">
                    Transformamos seu SAP com <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[var(--primary-light)] to-blue-400 bg-300% animate-data-flow drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                        BTP, IA e Clean Core
                    </span>
                </h1>

                <div className="h-24 md:h-16 mb-12 flex items-center justify-center animate-fade-in-up delay-300">
                    <p className="text-xl md:text-2xl text-gray-300 font-light font-mono whitespace-pre-line md:whitespace-normal">
                        {text}
                        <span className="animate-pulse text-[var(--accent)]">|</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
                    <Button
                        variant="primary"
                        className="animate-pulse-glow hover:scale-105 transition-transform duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Fale com a Prime Control <ArrowRight className="ml-4 w-5 h-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        className="border border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                    >
                        Faça o diagnóstico do seu SAP
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <ChevronDown className="w-8 h-8 text-white" />
            </div>
        </section>
    );
};
