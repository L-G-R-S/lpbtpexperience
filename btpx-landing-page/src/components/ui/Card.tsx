import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
    variant?: 'default' | 'glass' | 'outline' | 'dark';
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    hoverEffect = true,
    variant = 'default',
    ...props
}) => {
    const baseStyles = "rounded-xl p-6 transition-all duration-300";

    const variants = {
        default: "bg-white shadow-lg border border-gray-100",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
        outline: "bg-transparent border-2 border-[var(--primary)]",
        dark: "bg-[var(--secondary)] text-white shadow-lg border border-[var(--primary)]/20"
    };

    const hoverStyles = hoverEffect
        ? "hover:shadow-xl hover:-translate-y-1"
        : "";

    return (
        <div
            className={cn(
                baseStyles,
                variants[variant],
                hoverStyles,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
