'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0
    // Make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <button
                type="button"
                onClick={scrollToTop}
                className={`
                    p-3 md:p-4 rounded-full bg-[#F97415] text-white shadow-lg 
                    hover:bg-[#FF8904] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F97415]/30 
                    transition-all duration-300 ease-in-out
                    flex items-center justify-center
                    ${isVisible ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-10 pointer-events-none absolute'}
                `}
                aria-label="Voltar ao topo"
            >
                <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
            </button>
        </div>
    );
};
