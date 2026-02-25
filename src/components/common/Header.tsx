"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 flex flex-col ${isScrolled ? 'bg-[var(--primary-dark)]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center lg:justify-between h-[80px]">
                <Link href="/" className="relative z-50 flex items-center h-full -ml-6 lg:ml-0">

                    <Image
                        src="/images/logo-white.png"
                        alt="Prime Control"
                        width={150}
                        height={90}
                        className="w-auto h-[90px] object-contain"
                    />
                </Link>

            </div>
            {/* Animated Bottom Border */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-light)] to-transparent opacity-30 animate-data-flow"></div>
        </header>
    );
};
