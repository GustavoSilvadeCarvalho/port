'use client';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { animateWithGsapFrom } from "../utils/animation";
import { gsap } from 'gsap';

export default function About() {
    const aboutRef = useRef(null);

    useGSAP(() => {
        animateWithGsapFrom('#about', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
        });
        gsap.fromTo(
            '.about-column',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                ease: 'power2.out',
                stagger: 0.2,
                duration: 0.6,
                scrollTrigger: {
                    trigger: '#about-me',
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, [])
    return (
        <div ref={aboutRef} id="about" className="w-full max-w-90 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-[1200px] flex flex-col items-center justify-center py-12">
            <div className="flex items-center w-full mx-auto">
                <div className="flex-1 h-px bg-gradient-to-l from-neutral-600 to-black" />
                <h2 className="px-4 text-2xl font-bold text-center text-white whitespace-nowrap">Sobre mim</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-neutral-600 to-black" />
            </div>
            <p className="mt-8 text-center text-white">Construindo o futuro uma linha de cada vez.</p>

            <div id="about-me" className="text-white mt-12 w-full grid grid-cols-1 md:grid-cols-7 gap-8 items-stretch">
                {/* Left card */}
                <div className="about-column flex flex-col items-center md:items-start gap-4 md:col-span-2">
                    <div className="w-full max-w-[370px] bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl p-6 space-y-2">
                        <p className="text-xs text-neutral-300 uppercase tracking-wide">Formação</p>
                        <p className="font-semibold text-white">Fatec</p>
                        <p className="text-sm text-neutral-300">Desenvolvimento de Software Multiplataforma</p>
                        <p className="text-sm text-neutral-400">2024 -</p>
                    </div>
                </div>

                {/* Center featured card (larger) */}
                <div className="about-column flex flex-col items-center md:col-span-3">
                    <div className="w-full bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl p-8 text-left shadow-lg max-w-none">
                        <p className="text-base md:text-lg text-white font-medium leading-relaxed">Desenvolvedor Full Stack movido pelo desafio de transformar ideias em produtos reais. Atualmente na FATEC e atuando na Iliberty Tecnologia da Informação, foco meu desenvolvimento no ecossistema JavaScript/TypeScript.</p>
                        <p className="mt-6 text-sm text-neutral-400">Acredito que a tecnologia, quando bem aplicada, é a chave para otimizar processos e criar o futuro, uma linha de cada vez.</p>
                    </div>
                </div>

                {/* Right card */}
                <div className="about-column flex flex-col items-center md:items-end gap-4 md:col-span-2">
                    <div className="w-full max-w-[370px] bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl p-6 space-y-2 text-left">
                        <p className="text-xs text-neutral-300 uppercase tracking-wide">Experiência</p>
                        <p className="font-semibold text-white">Iliberty TI</p>
                        <p className="text-sm text-neutral-300">Estagiário</p>
                        <p className="text-sm text-neutral-400">05/2025 -</p>
                    </div>
                </div>
            </div>
        </div>
    );
}