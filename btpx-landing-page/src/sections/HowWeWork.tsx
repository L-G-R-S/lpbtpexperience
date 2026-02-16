import React from 'react';
import { Cpu, GitMerge, LayoutTemplate, ShieldCheck, Rocket } from 'lucide-react';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

const services = [
    {
        icon: Cpu,
        title: "Estruturamos Joule e IA generativa",
        description: "Configuração e orquestração de assistentes inteligentes no contexto SAP."
    },
    {
        icon: LayoutTemplate,
        title: "Integramos IA aos processos reais de negócio",
        description: "Conexão de inteligência artificial com fluxos de trabalho do dia a dia."
    },
    {
        icon: GitMerge,
        title: "Automatizamos integrações via SAP Integration Suite",
        description: "Uso do SAP Integration Suite para conectar sistemas de forma ágil."
    },
    {
        icon: ShieldCheck,
        title: "Garantimos qualidade, testes e estabilidade",
        description: "Validação contínua para assegurar estabilidade em ambientes críticos."
    },
    {
        icon: Rocket,
        title: "Programas de IA prontos para escala",
        description: "Arquitetura desenhada para crescer junto com a demanda do negócio."
    }
];

export const HowWeWork = () => {
    return (
        <section className="py-24 bg-[var(--secondary)] text-white overflow-hidden relative">
            <ImmersiveBackground />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Atuamos exatamente no ponto crítico <br />
                        <span className="text-[var(--primary-light)]">entre inovação e produção</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Conectamos a visão estratégica com a execução técnica, garantindo que o valor da IA chegue à ponta.
                    </p>
                </div>

                <div className="relative w-full mask-linear-fade">
                    <div className="flex animate-marquee gap-8 w-max hover:[animation-play-state:paused]">
                        {[...services, ...services].map((service, index) => (
                            <div
                                key={index}
                                className="w-[350px] glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group cursor-default border border-white/5 hover:border-[var(--primary-light)]/30"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 group-hover:bg-[var(--primary)]/20 transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-[var(--primary-light)] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--primary-light)] transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
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
