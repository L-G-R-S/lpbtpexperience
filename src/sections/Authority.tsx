import React from 'react';
import { Award, CheckCircle2, Store, Database, ShieldCheck } from 'lucide-react';

const features = [
    {
        id: "sap-silver-partner",
        title: "SAP Silver Partner",
        icon: Award,
    },
    {
        id: "sap-btp-competence",
        title: "Competência em SAP Business Technology Platform",
        icon: CheckCircle2,
    },
    {
        id: "chatsync-homologated",
        title: "ChatSync homologado na SAP Store",
        icon: Store,
    },
    {
        id: "sap-experience",
        title: "Experiência em SAP ECC e S/4HANA",
        icon: Database,
    },
    {
        id: "critical-environments",
        title: "Ambientes críticos com governança e qualidade",
        icon: ShieldCheck,
    },
];

export const Authority = () => {
    return (
        <section className="py-24 bg-[#E8EFF3] relative overflow-hidden flex justify-center items-center">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10 w-full">
                {/* Left Side: Content */}
                <div className="flex flex-col w-full lg:w-[560px] items-start gap-8 relative shrink-0 lg:ml-16">
                    <div className="inline-flex items-start px-4 py-2 bg-[#004A8F]/10 rounded-full">
                        <p className="font-bold font-sans text-[#004A8F] text-sm leading-5 tracking-[0]">
                            POR QUE A PRIME CONTROL?
                        </p>
                    </div>

                    <header className="flex flex-col items-start w-full">
                        <h2 className="text-3xl lg:text-[40px] font-bold font-heading leading-tight break-words">
                            <span className="text-[#05183A]">Reconhecimento<br />e </span>
                            <span className="text-[#F97415]">experiência comprovada</span>
                        </h2>
                    </header>

                    <div className="flex flex-col items-start pt-2 w-full gap-5">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex items-center gap-4 w-full">
                                <div className="flex w-12 h-12 items-center justify-center bg-[#F97415]/10 rounded-full shrink-0">
                                    <feature.icon className="w-5 h-5 text-[#F97415]" strokeWidth={2} />
                                </div>
                                <p className="font-medium text-[#05183A] text-lg font-sans leading-7 break-words">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image/Graphic */}
                <div
                    className="relative w-full lg:w-[548px] h-[500px] shrink-0 hidden md:block"
                    role="img"
                    aria-label="Prime Control team at SAP BTP event"
                >
                    {/* Orange decorative blocks */}
                    <div className="absolute top-[313px] left-[316px] w-[232px] h-[187px] bg-[#F97415] rounded-[32px]"></div>
                    <div className="absolute top-0 left-0 w-[232px] h-[187px] bg-[#F97415] rounded-[32px]"></div>

                    {/* Main image container */}
                    <div className="absolute top-[16px] left-[13px] w-[494px] h-[468px] rounded-[26px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[#0A224F]">
                        <img
                            src="/images/FOTOBTP.jpg"
                            alt="Equipe Prime Control"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Mobile Image Fallback */}
                <div className="relative w-full aspect-square shrink-0 block md:hidden rounded-[27px] overflow-hidden shadow-2xl bg-[#0A224F]">
                    <img
                        src="/images/FOTOBTP.jpg"
                        alt="Equipe Prime Control"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};
