import React from 'react';

export const ImmersiveBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Layer 1: Deep Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-dark)] via-[#021024] to-[var(--secondary)]"></div>

            {/* Layer 2: Technical Grid */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            ></div>

            {/* Layer 3: Animated Data Flow - Horizontal Lines */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-light)] to-transparent opacity-20 animate-data-flow"></div>
                <div
                    className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-10 animate-data-flow"
                    style={{ animationDuration: '20s', animationDelay: '2s' }}
                ></div>
            </div>
        </div>
    );
};
