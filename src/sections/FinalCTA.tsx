"use client";

import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

declare global {
    interface Window {
        hbspt: any;
    }
}

export const FinalCTA = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: "7317937",
                    formId: "84913dc4-5f75-4d0b-8452-6e943a058527",
                    region: "na1",
                    target: '#hubspot-form-wrapper',
                    css: '', // Remove explícito
                    onFormReady: function (form: any) {
                        // O HubSpot passa o form como um objeto jQuery (se jQuery existir) ou um NodeList/Element.
                        const formEl = document.querySelector('#hubspot-form-wrapper form') as HTMLFormElement;
                        if (formEl) {
                            const fields = formEl.querySelectorAll('.hs-form-field');
                            fields.forEach(field => {
                                const label = field.querySelector('label:not(.hs-form-booleancheckbox-display)');
                                const input = field.querySelector('.hs-input:not([type="checkbox"]):not([type="radio"])') as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;



                                if (input) {
                                    // Pega o texto da label. Se ela for vazia (ex: campo "empresa"), tenta pegar do placeholder preexistente ou do 'name'
                                    let labelText = '';

                                    if (label && label.textContent && label.textContent.trim() !== '') {
                                        labelText = label.textContent.trim();
                                    } else {
                                        // Fallbacks para campos ocultos pelo Hubspot
                                        if (input.name === 'email') labelText = 'E-mail corporativo*';
                                        if (input.name === 'company') labelText = 'Empresa*';
                                        if (input.name === 'phone') labelText = 'DDD + Telefone*';
                                    }

                                    // Removemos o asterisco do HUB se já houver asterisco do fallback, evitamos duplicação visual

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
        });

        return () => {
            // Cleanup function para evitar múltiplos scripts se o componente desmontar
            const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <section className="py-24 bg-[var(--primary-dark)] text-white relative overflow-hidden" id="contact">
            <ImmersiveBackground />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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
                    <div className="bg-white rounded-2xl p-8 shadow-2xl text-[var(--text-primary)] min-h-[500px]">
                        <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">
                            Fale com a Prime Control
                        </h3>
                        <div id="hubspot-form-wrapper"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
