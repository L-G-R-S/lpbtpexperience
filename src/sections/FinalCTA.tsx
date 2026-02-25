"use client";

import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Script from 'next/script';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';
import { Particles } from '@/components/ui/Particles';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        hbspt: any;
    }
}

export const FinalCTA = () => {
    const [isFormLoaded, setIsFormLoaded] = useState(false);

    // This function will be called when the next/script has loaded the HS forms API
    const loadHubSpotForm = () => {
        if (window.hbspt && !isFormLoaded) {
            window.hbspt.forms.create({
                portalId: "7317937",
                formId: "84913dc4-5f75-4d0b-8452-6e943a058527",
                region: "na1",
                target: '#hubspot-form-wrapper',
                css: '',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
                onFormReady: function (form: any) {
                    setIsFormLoaded(true);
                    const formEl = document.querySelector('#hubspot-form-wrapper form') as HTMLFormElement;
                    if (formEl) {
                        const fields = formEl.querySelectorAll('.hs-form-field');
                        fields.forEach(field => {
                            const label = field.querySelector('label:not(.hs-form-booleancheckbox-display)');
                            const input = field.querySelector('.hs-input:not([type="checkbox"]):not([type="radio"])') as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

                            if (input) {
                                let labelText = '';
                                if (label && label.textContent && label.textContent.trim() !== '') {
                                    labelText = label.textContent.trim();
                                } else {
                                    if (input.name === 'email') labelText = 'E-mail corporativo*';
                                    if (input.name === 'company') labelText = 'Empresa*';
                                    if (input.name === 'phone') labelText = 'DDD + Telefone*';
                                }

                                if (input.tagName === 'SELECT') {
                                    const firstOption = input.querySelector('option');
                                    if (firstOption && (!firstOption.value || firstOption.value === '')) {
                                        firstOption.textContent = labelText;
                                    }
                                } else if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
                                    (input as HTMLInputElement | HTMLTextAreaElement).placeholder = labelText;
                                }
                            }
                        });
                    }
                }
            });
        }
    };

    return (
        <section className="py-24 bg-[var(--primary-dark)] text-white relative overflow-hidden" id="contact">
            <ImmersiveBackground />
            <Particles />

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
                {/* Left Content */}
                <div className="flex-1 max-w-[500px]">
                    <h2 className="text-3xl lg:text-[40px] font-bold font-heading mb-6 leading-tight">
                        Seu SAP está preparado para o <span className="text-[var(--primary-light)]">futuro?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 font-light">
                        Com SAP BTP, Clean Core e IA, seu negócio está pronto para escalar. Não deixe sua operação estagnada no passado.
                    </p>

                    <div className="space-y-4 mb-8">
                        {[
                            "Diagnóstico especializado",
                            "Planejamento estratégico",
                            "Execução segura"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="bg-[var(--accent)]/20 p-1 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                                </div>
                                <span className="text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Form */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl text-[var(--text-primary)] w-full lg:w-[500px] min-h-[500px]">
                    <h3 className="text-xl lg:text-2xl font-bold font-heading mb-6 text-[var(--secondary)]">
                        Fale com a Prime Control
                    </h3>
                    <div id="hubspot-form-wrapper" className="min-h-[400px]"></div>
                    <Script
                        src="//js.hsforms.net/forms/embed/v2.js"
                        strategy="lazyOnload"
                        onReady={loadHubSpotForm}
                        onLoad={loadHubSpotForm}
                    />
                </div>
            </div>
        </section>
    );
};
