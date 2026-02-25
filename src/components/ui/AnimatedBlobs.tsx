import React from 'react';

export const AnimatedBlobs = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-70">
            <div className="absolute top-[0%] -left-[10%] w-[600px] h-[800px] lg:w-[1000px] lg:h-[1200px] bg-[#FF7800]/8 rounded-full blur-[120px] lg:blur-[200px] animate-blob style={{ willChange: 'transform' }}"></div>
            <div className="absolute top-[30%] -right-[10%] w-[600px] h-[800px] lg:w-[1000px] lg:h-[1200px] bg-[#2FC3FF]/8 rounded-full blur-[120px] lg:blur-[200px] animate-blob animation-delay-2000 style={{ willChange: 'transform' }}"></div>
            <div className="absolute bottom-[-10%] left-[10%] w-[800px] h-[800px] lg:w-[1400px] lg:h-[1400px] bg-[#004A8F]/3 rounded-full blur-[150px] lg:blur-[250px] animate-blob animation-delay-4000 style={{ willChange: 'transform' }}"></div>
        </div>
    );
};
