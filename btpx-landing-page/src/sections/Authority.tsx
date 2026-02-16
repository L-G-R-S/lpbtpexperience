import React from 'react';
import { Award, BadgeCheck, Shield, Store, Database, ShieldCheck } from 'lucide-react';

export const Authority = () => {
    const credentials = [
        { icon: Award, text: "SAP Silver Partner" },
        { icon: BadgeCheck, text: "Competência em SAP Business Technology Platform" },
        { icon: Store, text: "ChatSync homologado na SAP Store" },
        { icon: Database, text: "Experiência em SAP ECC e S/4HANA" },
        { icon: ShieldCheck, text: "Ambientes críticos com governança e qualidade" },
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold mb-6">
                            POR QUE A PRIME CONTROL?
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-8 leading-tight">
                            Reconhecimento e <br />
                            <span className="text-[var(--primary)]">experiência comprovada</span>
                        </h2>

                        <div className="grid gap-4">
                            {credentials.map((cred, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary-light)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                                        <cred.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-[var(--secondary)] text-lg">{cred.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent)]/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-2xl"></div>

                            <div className="bg-[var(--secondary)] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-5 transform rotate-12 scale-150 pointer-events-none">
                                    <Shield className="w-96 h-96" />
                                </div>

                                <ShieldCheck className="w-12 h-12 text-[var(--primary-light)] mb-8" />

                                <p className="text-2xl md:text-3xl font-light leading-relaxed relative z-10 mb-8">
                                    &quot;Não entregamos apenas projetos. Estruturamos a base que permite IA operar no SAP com <strong className="text-[var(--primary-light)] font-bold">segurança e escala</strong>.&quot;
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
