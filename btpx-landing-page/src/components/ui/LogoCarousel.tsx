import React from 'react';
import Image from 'next/image';

import { LOGO_FILES } from '@/lib/constants';

export const LogoCarousel = () => {
    return (
        <section className="w-full bg-gray-50 py-4 overflow-hidden" suppressHydrationWarning={true}>
            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-gray-50 z-10"></div>
                <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-gray-50 z-10"></div>

                {/* Animation Container - Loop 1 */}
                <div className="flex animate-marquee gap-8 sm:gap-12 min-w-full items-center mr-8 sm:mr-12">
                    {LOGO_FILES.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="flex items-center justify-center min-w-[160px] h-24 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                            <Image
                                src={`/images/logos/${logo}`}
                                alt={`Client Logo ${index + 1}`}
                                width={200}
                                height={100}
                                className="object-contain w-auto h-full max-h-20"
                            />
                        </div>
                    ))}

                    {/* Animation Container - Loop 2 (Duplicate) */}
                    {LOGO_FILES.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="flex items-center justify-center min-w-[160px] h-24 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                            <Image
                                src={`/images/logos/${logo}`}
                                alt={`Client Logo ${index + 1}`}
                                width={200}
                                height={100}
                                className="object-contain w-auto h-full max-h-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
