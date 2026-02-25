import React from 'react';
import { PROBLEMS } from '@/lib/constants';
import { AnimatedBlobs } from '@/components/ui/AnimatedBlobs';

export const Problems = () => {
    return (
        <section className="py-24 bg-[#F9FAFB] relative overflow-hidden flex flex-col justify-start items-center">
            {/* Animated Light Effects (Prime Design System) */}
            <AnimatedBlobs />

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col justify-start items-center gap-16 relative z-10 w-full">
                <div className="flex flex-col justify-start items-center gap-6 max-w-[768px]">
                    <div className="flex flex-col justify-start items-center text-center">
                        <h2 className="text-center flex flex-col justify-center mb-4">
                            <span className="text-[#05183A] text-3xl lg:text-[40px] font-bold font-heading leading-tight break-words">
                                O desafio não é adotar IA.
                            </span>
                            <span className="text-[#004A8F] text-3xl lg:text-[40px] font-bold font-heading leading-tight break-words">
                                É fazer ela funcionar dentro do SAP<br className="hidden md:block" />
                                que já está em produção.
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col justify-start items-center text-center">
                        <p className="text-[#666666] text-lg lg:text-[18px] font-sans font-normal leading-relaxed break-words text-center flex flex-col justify-center">
                            A maioria das empresas falha na inovação porque a base tecnológica não<br className="hidden md:block" /> está preparada.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-stretch gap-8 w-full max-w-[1200px]">
                    {PROBLEMS.map((problem, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(33.333%-1.5rem)] lg:w-[350px] bg-white rounded-xl border-l-[6px] border-t-[6px] border-[#FF7800] shadow-md p-[28px_25px] flex flex-col justify-start items-start relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-3 bg-[#F97415]/10 rounded-xl flex items-start justify-start mb-5">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF7800] to-[#FF8904] shadow-[0px_4px_10.4px_-4px_rgba(0,0,0,0.24),0px_10px_15px_-3px_rgba(0,0,0,0.06)] flex justify-center items-center">
                                    <problem.icon className="w-6 h-6 text-white shrink-0" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="text-[#05183A] text-xl font-bold font-heading leading-tight mb-3 break-words">
                                {problem.title}
                            </h3>
                            <p className="text-[#666666] text-base font-sans font-normal leading-relaxed break-words">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
