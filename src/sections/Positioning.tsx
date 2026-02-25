import React from 'react';

export const Positioning = () => {
    const listItems = [
        "Joule e IA generativa",
        "SAP Business Technology Platform (BTP)",
        "Clean Core sustentável",
        "Integrações modernas e governadas",
        "Arquitetura preparada para escala"
    ];

    return (
        <section className="py-24 bg-[#E8EFF3] relative overflow-hidden flex justify-center items-center">
            {/* Background Decoration */}
            <div className="absolute left-[-128px] top-[254px] w-[256px] h-[256px] bg-[#004A8F]/5 shadow-[64px_64px_64px_rgba(0,0,0,0)] rounded-full blur-[32px]"></div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-center items-center z-10 gap-12 lg:gap-16">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:ml-8 w-full">
                    <div className="px-4 py-2 bg-[#05183A]/5 rounded-full border border-[#05183A]/10 inline-flex justify-start items-start">
                        <div className="text-[#05183A] text-sm font-bold font-sans leading-tight">
                            NOSSA EXPERTISE
                        </div>
                    </div>

                    <div className="w-full pb-0.5 flex flex-col justify-start items-start">
                        <h2 className="text-[#05183A] text-3xl lg:text-[40px] font-bold font-heading leading-tight break-words">
                            <span className="md:whitespace-nowrap">Aplicamos IA no negócio real,</span><br />
                            conectando:
                        </h2>
                    </div>

                    <div className="w-full pt-2 pb-4 flex flex-col justify-start items-start gap-5">
                        {listItems.map((item, index) => (
                            <div key={index} className="w-full inline-flex justify-start items-center gap-4">
                                <div className="p-2 bg-[#2FC2FE]/10 rounded-full inline-flex flex-col justify-start items-start">
                                    <div className="relative w-5 h-5 flex justify-center items-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="#004A8F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="#004A8F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="inline-flex flex-col justify-start items-start">
                                    <span className="text-[#333333] text-lg font-medium font-sans leading-7">
                                        {item}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Graphic */}
                <div className="w-full lg:w-[600px] flex justify-center relative aspect-square max-w-[600px] lg:scale-125 lg:origin-center">
                    <svg viewBox="0 -20 850 680" className="w-full h-full overflow-visible">
                        {/* Define Gradients */}
                        <defs>
                            <linearGradient id="g_blue1" x1="0" y1="0" x2="13392.4" y2="4916.21" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3B82F6" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#3B82F6" />
                            </linearGradient>
                            <linearGradient id="g_blue2" x1="0" y1="0" x2="16936.6" y2="16908.4" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#60A5FA" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#60A5FA" />
                            </linearGradient>
                            <linearGradient id="g_blue3" x1="0" y1="0" x2="4936.91" y2="13404" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#93C5FD" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#93C5FD" />
                            </linearGradient>
                            <linearGradient id="g_orange1" x1="0" y1="0" x2="16936.6" y2="16908.4" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F97316" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#F97316" />
                            </linearGradient>
                            <linearGradient id="g_orange2" x1="0" y1="0" x2="13392.4" y2="4916.21" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FB923C" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#FB923C" />
                            </linearGradient>
                            <linearGradient id="g_orange3" x1="0" y1="0" x2="16936.6" y2="16908.4" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FDBA74" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#FDBA74" />
                            </linearGradient>
                            <linearGradient id="g_blue4" x1="0" y1="0" x2="4936.91" y2="13404.1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3B82F6" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#3B82F6" />
                            </linearGradient>
                            <linearGradient id="g_orange4" x1="0" y1="0" x2="16936.6" y2="16908.4" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F97316" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#F97316" />
                            </linearGradient>
                            <linearGradient id="g_center" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#155DFC" />
                                <stop offset="1" stopColor="#1447E6" />
                            </linearGradient>
                        </defs>

                        {/* Outer faded ring */}
                        <circle cx="431" cy="298" r="157.5" fill="none" stroke="rgba(43,127,255,0.2)" strokeWidth="2" />

                        {/* Outer elements in container */}
                        <g transform="translate(133, 3)">
                            <path transform="translate(494.01, 197)" d="M0 22.9993L55.4328 0C82.8361 66.2678 82.8361 140.726 55.4328 206.993L0 183.994C21.3137 132.453 21.3137 74.5409 0 22.9993Z" fill="url(#g_blue1)" />
                            <path transform="translate(380.36, 381)" d="M113.651 0L169.084 22.9993C141.681 89.2671 89.1186 141.917 22.961 169.366L0 113.841C51.4559 92.4914 92.3375 51.5417 113.651 0Z" fill="url(#g_blue2)" />
                            <path transform="translate(196.68, 494.84)" d="M183.688 0L206.649 55.5251C140.491 82.9742 66.1576 82.9742 0 55.5251L22.961 0C74.4169 21.3493 132.232 21.3493 183.688 0Z" fill="url(#g_blue3)" />
                            <path transform="translate(50.55, 381)" d="M169.084 113.841L146.123 169.366C79.9654 141.917 27.4034 89.2671 0 22.9993L55.4328 0C76.7465 51.5417 117.628 92.4914 169.084 113.841Z" fill="url(#g_orange1)" />
                            <path transform="translate(30, 197)" d="M75.9853 183.994L20.5525 206.993C-6.85084 140.726 -6.85084 66.2678 20.5525 0L75.9853 22.9993C54.6716 74.5409 54.6716 132.453 75.9853 183.994Z" fill="url(#g_orange2)" />
                            <path transform="translate(50.55, 50.64)" d="M55.4328 169.366L0 146.366C13.5688 113.554 33.4568 83.7398 58.5286 58.6262C83.6005 33.5126 113.365 13.5914 146.123 0L169.084 55.5252C143.606 66.0962 120.455 81.5905 100.955 101.123C81.4547 120.656 65.9863 143.845 55.4328 169.366Z" fill="url(#g_orange3)" />
                            <path transform="translate(196.68, 30.05)" d="M22.961 76.1119L0 20.5868C66.1576 -6.86226 140.491 -6.86226 206.649 20.5868L183.688 76.1119C132.232 54.7627 74.4169 54.7627 22.961 76.1119Z" fill="url(#g_blue4)" />
                            <path transform="translate(380.36, 50.64)" d="M0 55.5252L22.961 0C89.1186 27.449 141.681 80.0986 169.084 146.366L113.651 169.366C103.098 143.845 87.6292 120.656 68.1289 101.123C48.6286 81.5905 25.4784 66.0962 0 55.5252Z" fill="url(#g_orange4)" />

                            {/* Inner Labels within ring */}
                            <text x="277.11" y="20" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">Testing</text>
                            <text x="44" y="115" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">Joule</text>
                            <text x="526.51" y="100" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">Deploy</text>
                            <text x="526.51" y="495" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">Estratégia</text>
                            <text x="-6" y="510" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">IA Integration</text>
                        </g>

                        {/* Labels positioned relative to 638x638 wrapper */}
                        <text x="736" y="297" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">Diagnóstico</text>
                        <text x="401" y="618" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">BTP Setup</text>
                        <text x="64" y="302" fill="#004A8F" fontSize="12" fontWeight="700" fontFamily="Arial">Clean Core</text>

                        {/* Center Circle */}
                        <g transform="translate(341, 199)">
                            {/* Adding a simple SVG drop shadow for the 0px 25px 50px -12px shadow */}
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="25" stdDeviation="25" floodOpacity="0.25" />
                            </filter>
                            <circle cx="90" cy="90" r="90" fill="url(#g_center)" filter="url(#shadow)" />
                            <text x="90" y="85" fill="white" fontSize="30" fontWeight="700" textAnchor="middle" fontFamily="Arial">360°</text>
                            <text x="90" y="105" fill="#BEDBFF" fontSize="12" fontWeight="400" textAnchor="middle" fontFamily="Arial">SAP Transform</text>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};
