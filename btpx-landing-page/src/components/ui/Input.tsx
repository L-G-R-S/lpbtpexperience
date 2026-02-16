import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    className = '',
    ...props
}, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={`w-full bg-[#F2F3F4] border-2 border-[#00BAFF] rounded-lg px-4 py-3.5 
          focus:outline-none focus:ring-2 focus:ring-[var(--primary-light)] focus:border-transparent
          shadow-[0_0_15px_rgba(0,186,255,0.25)] transition-all
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-200' : ''}
          ${className}`}
                {...props}
            />
            {error && (
                <span className="text-sm text-red-500 mt-1 block">{error}</span>
            )}
        </div>
    );
});

Input.displayName = 'Input';
