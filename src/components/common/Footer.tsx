"use client";

import Link from 'next/link';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-[var(--primary-dark)] text-white py-16">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-12">

                {/* Left: Logo & Copyright */}
                <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left mx-auto md:mx-0">
                    <div className="flex flex-row items-center justify-center md:justify-start gap-6 flex-nowrap">
                        <Image
                            src="/images/logo-white.png"
                            alt="Prime Control"
                            width={150}
                            height={90}
                            className="h-[50px] md:h-[70px] w-auto object-contain shrink-0"
                        />
                        <Link href="https://partnerfinder.sap.com/profile/0001677146" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/sap-silver-partner.png"
                                alt="SAP Silver Partner"
                                width={148}
                                height={86}
                                className="h-[28px] md:h-[36px] w-auto object-contain shrink-0"
                            />
                        </Link>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Copyright © 2025 | All Rights Reserved
                    </p>
                </div>

                {/* Center: Contact */}
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <h4 className="font-bold text-lg uppercase tracking-wider">CONTATO</h4>
                    <div className="text-gray-300 text-sm space-y-2">
                        <p>E-mail: comercial@primecontrol.com.br</p>
                        <p>Telefone: +55 (11) 9 9710-5783</p>
                    </div>
                </div>

                {/* Right: Saiba Mais & Socials */}
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <h4 className="font-bold text-lg uppercase tracking-wider">SAIBA MAIS</h4>
                    <Link
                        href="https://www.primecontrol.com.br/politica-de-privacidade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                        Política de privacidade
                    </Link>
                    <div className="flex gap-4 mt-2 justify-center md:justify-start">
                        <SocialIcon href="https://www.instagram.com/primecontrol_br" icon={Instagram} />
                        <SocialIcon href="https://www.facebook.com/primecontrol" icon={Facebook} />
                        <SocialIcon href="https://www.linkedin.com/company/prime-control" icon={Linkedin} />
                        <SocialIcon href="https://www.youtube.com/@primecontrol5839" icon={Youtube} />
                    </div>
                </div>

            </div>
        </footer>
    );
};

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
    >
        <Icon className="w-6 h-6 text-[var(--primary-dark)]" />
    </Link>
);
