'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    pulseSpeed: number;
}

export const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Use IntersectionObserver to pause the animation when the canvas is not in view
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(canvas);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Pause rendering if not visible

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // Create roughly 100 particles for a subtle starry effect, adapt for mobile vs desktop
            const particleDensity = window.innerWidth < 768 ? 20000 : 10000;
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / particleDensity);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5, // Small sizes for stars
                    speedX: (Math.random() - 0.5) * 0.3, // Very slow drifting
                    speedY: (Math.random() - 0.5) * 0.3,
                    opacity: Math.random() * 0.5 + 0.1, // Start with random low opacity
                    pulseSpeed: Math.random() * 0.02 + 0.005 // Speed of twinkling
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Twinkle effect (sine wave based on time)
                const time = Date.now();
                const currentOpacity = p.opacity + Math.sin(time * p.pulseSpeed) * 0.2;

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw glowing particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                // Light blue / white glowing core
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, currentOpacity)})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#2FC3FF'; // Prime's light blue for glow

                ctx.fill();

                // Reset shadow to not affect other drawings if we had complex shapes
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-60"
            style={{ willChange: 'transform' }}
        />
    );
};
