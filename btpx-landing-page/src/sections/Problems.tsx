import React from 'react';

import { Card } from '@/components/ui/Card';

import { PROBLEMS } from '@/lib/constants';

export const Problems = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--secondary)] mb-6 leading-tight">
                        O desafio não é adotar IA. <br />
                        <span className="text-[var(--primary)]">É fazer ela funcionar dentro do SAP que já está em produção.</span>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)]">
                        A maioria das empresas falha na inovação porque a base tecnológica não está preparada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROBLEMS.map((problem, index) => (
                        <Card
                            key={index}
                            className="border-t-4 border-t-[var(--accent)] hover:border-t-[var(--primary)] transition-colors duration-300"
                            hoverEffect={true}
                        >
                            <div className="mb-6 bg-[var(--primary)]/10 w-fit p-3 rounded-xl text-[var(--primary)]">
                                <problem.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {problem.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
