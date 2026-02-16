import React from 'react';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

export const Positioning = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Card 1 */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <Card variant="dark" className="relative p-10 border-none shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                            <ImmersiveBackground />
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white">
                                    A Prime Control transforma o SAP para <br />
                                    <span className="text-[var(--primary-light)]">evoluir com inteligência</span>
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    A Prime Control é especialista em transformar IA dentro do ecossistema SAP — incluindo Joule — de forma governada, integrada e pronta para escala enterprise.
                                </p>
                            </div>
                        </Card>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--accent)]/20 rounded-full blur-xl -z-10"></div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-[var(--secondary)]/5 text-[var(--secondary)] rounded-full text-sm font-bold mb-6 border border-[var(--secondary)]/10">
                            NOSSA EXPERTISE
                        </div>
                        <h3 className="text-3xl font-bold text-[var(--secondary)] mb-8 leading-tight">
                            Aplicamos IA no negócio real, <br /> conectando:
                        </h3>
                        <ul className="space-y-5">
                            {[
                                "Joule e IA generativa",
                                "SAP Business Technology Platform (BTP)",
                                "Clean Core sustentável",
                                "Integrações modernas e governadas",
                                "Arquitetura preparada para escala"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className="bg-[var(--primary-light)]/10 p-2 rounded-full text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg text-[var(--text-primary)] font-medium group-hover:text-[var(--primary)] transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 p-6 bg-gray-50 rounded-xl border-l-4 border-[var(--accent)] shadow-sm">
                            <p className="text-[var(--secondary)] font-medium text-lg italic">
                                &quot;IA no SAP exige método, arquitetura e controle. É isso que entregamos.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
