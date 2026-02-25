'use client';
import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out function for a beautiful slow down effect
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 text-6xl md:text-7xl lg:text-[80px] leading-none mb-2 md:mb-4 drop-shadow-lg">
            {count}{suffix}
        </div>
    );
};

export const Stats = () => {
    return (
        <section
            className="w-full min-h-[400px] flex items-center justify-center relative bg-[#05183A] bg-[length:100%_100%] bg-no-repeat bg-center overflow-hidden py-20"
            style={{ backgroundImage: 'url(/images/Banner_site_dark.png)' }}
        >
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <AnimatedNumber end={10} suffix="x" />
                        <h3 className="font-bold font-heading text-white text-xl lg:text-2xl mb-2">
                            Velocidade em Integrações
                        </h3>
                        <p className="font-normal font-sans text-[#E4E4E4] text-sm lg:text-base max-w-[300px]">
                            Redução no tempo de desenvolvimento e deploy de integrações SAP
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <AnimatedNumber end={95} suffix="%" />
                        <h3 className="font-bold font-heading text-white text-xl lg:text-2xl mb-2">
                            Clean Core Score
                        </h3>
                        <p className="font-normal font-sans text-[#E4E4E4] text-sm lg:text-base max-w-[280px]">
                            Média de conformidade alcançada em projetos de transformação
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <AnimatedNumber end={40} suffix="+" />
                        <h3 className="font-bold font-heading text-white text-xl lg:text-2xl mb-2">
                            Projetos Entregues
                        </h3>
                        <p className="font-normal font-sans text-[#E4E4E4] text-sm lg:text-base max-w-[320px]">
                            Implementações bem-sucedidas de IA, BTP e Clean Core
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
