"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImmersiveBackground } from '@/components/ui/ImmersiveBackground';

const formSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    company: z.string().min(2, "Empresa é obrigatória"),
    role: z.string().min(2, "Cargo é obrigatório"),
    phone: z.string().min(10, "Telefone inválido"),
    companySize: z.string().optional(),
    currentEnvironment: z.string().optional(),
    challenge: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const FinalCTA = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

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
                    <div className="bg-white rounded-2xl p-8 shadow-2xl text-[var(--text-primary)]">
                        {isSuccess ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Mensagem Recebida!</h3>
                                <p className="text-gray-600">
                                    Nossa equipe de especialistas entrará em contato em breve para agendar seu diagnóstico.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Voltar
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">
                                    Fale com a Prime Control
                                </h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="Nome Completo *"
                                            {...register('name')}
                                            error={errors.name?.message}
                                        />
                                        <Input
                                            placeholder="Empresa *"
                                            {...register('company')}
                                            error={errors.company?.message}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="E-mail Corporativo *"
                                            {...register('email')}
                                            error={errors.email?.message}
                                        />
                                        <Input
                                            placeholder="Telefone *"
                                            {...register('phone')}
                                            error={errors.phone?.message}
                                        />
                                    </div>

                                    <Input
                                        placeholder="Cargo *"
                                        {...register('role')}
                                        error={errors.role?.message}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <select
                                            {...register('companySize')}
                                            className="w-full bg-[#F2F3F4] border-2 border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all duration-300 text-gray-700"
                                        >
                                            <option value="">Tamanho da Empresa</option>
                                            <option value="1-50">1-50 funcionários</option>
                                            <option value="51-200">51-200 funcionários</option>
                                            <option value="201-1000">201-1000 funcionários</option>
                                            <option value="1000+">1000+ funcionários</option>
                                        </select>

                                        <select
                                            {...register('currentEnvironment')}
                                            className="w-full bg-[#F2F3F4] border-2 border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all duration-300 text-gray-700"
                                        >
                                            <option value="">Ambiente SAP Atual</option>
                                            <option value="ECC">SAP ECC</option>
                                            <option value="S/4HANA">SAP S/4HANA</option>
                                            <option value="BTP">SAP BTP</option>
                                            <option value="Outro">Outro / Não sei</option>
                                        </select>
                                    </div>

                                    <textarea
                                        {...register('challenge')}
                                        placeholder="Principal Desafio (Opcional)"
                                        rows={3}
                                        className="w-full bg-[#F2F3F4] border-2 border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all duration-300 text-gray-700"
                                    ></textarea>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                    >
                                        Transforme agora o seu SAP <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
