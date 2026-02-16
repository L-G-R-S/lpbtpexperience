"use client";

import Link from 'next/link';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-[var(--primary-dark)] text-white py-16">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between gap-12">

                {/* Left: Logo & Copyright */}
                <div className="flex flex-col gap-6 max-w-xs items-center md:items-start text-center md:text-left mx-auto md:mx-0">
                    <Image
                        src="/images/logo-white.png"
                        alt="Prime Control"
                        width={150}
                        height={90}
                        className="h-[90px] w-auto object-contain"
                    />
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
                    <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
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
