import React from 'react';
import { Cpu, GitMerge, LayoutTemplate, ShieldCheck, Rocket } from 'lucide-react';
import { HOW_WE_WORK_SERVICES } from '@/lib/constants';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

export const HowWeWork = () => {
    return (
        <section className="py-24 bg-[var(--secondary)] text-white overflow-hidden relative">
            <ImmersiveBackground />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Atuamos exatamente no ponto crítico{' '}
                        <span className="text-[var(--primary-light)]">entre inovação e produção</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Conectamos a visão estratégica com a execução técnica, garantindo que o valor da IA chegue à ponta.
                    </p>
                </div>

                <div className="relative w-full z-10 max-w-[1400px] mx-auto">
                    {/* Responsive Static Grid */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {HOW_WE_WORK_SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[320px] glass-dark p-8 rounded-2xl border border-white/5 hover:border-[var(--primary-light)]/30 hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 flex flex-col h-[320px] cursor-default"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-[var(--primary-light)] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm flex-grow transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
