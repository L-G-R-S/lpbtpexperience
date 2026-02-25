import React from 'react';
import { HOW_WE_WORK_SERVICES } from '@/lib/constants';
import { Particles } from '@/components/ui/Particles';

export const HowWeWork = () => {
    return (
        <section className="py-24 bg-[#05183A] text-white overflow-hidden relative flex flex-col justify-start items-center">
            {/* Background Decorations */}
            <div className="absolute inset-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_78.67%_71.21%_at_77.39%_-10.26%,_#737373_0%,_rgba(217,217,217,0)_100%)] pointer-events-none z-0"></div>

            <Particles />

            {/* Grid Pattern Decoration (simplified for web) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center w-full">
                <div className="text-center max-w-[800px] flex flex-col items-center justify-start gap-4 mb-16">
                    <h2 className="text-white text-3xl lg:text-[40px] font-bold font-heading leading-tight break-words">
                        Atuamos exatamente no ponto crítico <br className="hidden md:block" />
                        <span className="text-[#2FC2FE]">entre inovação e produção</span>
                    </h2>
                    <p className="text-[#D1D5DB] text-lg lg:text-[18px] font-sans font-normal leading-relaxed break-words">
                        Conectamos a visão estratégica com a execução técnica, garantindo que o valor da IA chegue à ponta.
                    </p>
                </div>

                <div className="w-full flex flex-wrap justify-center gap-6 max-w-[1200px]">
                    {HOW_WE_WORK_SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(33.333%-1rem)] lg:w-[350px] min-h-[267px] bg-[#05183acc] rounded-2xl border border-solid border-[#ffffff1a] p-[33px] flex flex-col justify-start items-start relative hover:-translate-y-1 hover:border-[#ffffff40] transition-all duration-300"
                        >
                            <div className="mb-[24px] p-4 bg-[#fffefe0d] rounded-xl flex items-center justify-center">
                                <service.icon className="w-8 h-8 text-[#2FC2FE] shrink-0" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white text-xl font-bold font-heading leading-tight mb-3 break-words">
                                {service.title}
                            </h3>
                            <p className="text-[#99a1ae] text-base font-sans font-normal leading-relaxed break-words">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
