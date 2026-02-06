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
            <p className="mt-12 text-center text-white">Construindo o futuro uma linha de cada vez.</p>
            <div id="about-me" className='text-white flex flex-col md:flex-row items-center md:items-stretch justify-between mt-12 gap-8 w-full'>
                <div className='about-column flex flex-col items-center gap-4 w-full md:w-auto'>
                    <h3 className='text-xl text-center'>Formação</h3>
                    <div className='w-[340px] md:w-[370px] bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl p-4 space-y-2'>
                        <p>Fatec</p>
                        <p>Desenvolvimento de Software Multiplataforma</p>
                        <p>2024 -</p>
                    </div>
                    <div className="hidden md:block h-12 w-0 border-l border-dashed border-zinc-500"></div>
                </div>
                <div className='about-column flex flex-col items-center justify-center w-full md:flex-1'>
                    <h3 className='text-xl text-center mb-2'>sobre mim</h3>
                    <div className='w-[340px] md:w-[370px] bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl p-4 space-y-2 text-center'>
                        <p>Desenvolvedor Full Stack movido pelo desafio de transformar ideias em produtos reais. Atualmente na FATEC e atuando na Iliberty Tecnologia da Informação, foco meu desenvolvimento no ecossistema JavaScript/TypeScript. Acredito que a tecnologia, quando bem aplicada, é a chave para otimizar processos e criar o futuro, uma linha de cada vez.</p>
                    </div>
                </div>
                <div className='about-column flex flex-col items-center gap-4 w-full md:w-auto'>
                    <h3 className='text-xl text-center'>Profissional</h3>
                    <div className='w-[340px] md:w-[370px] bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl p-4 space-y-2'>
                        <p>Iliberty Tecnologia da Informação</p>
                        <p>Estagiário</p>
                        <p>05/2025 -</p>
                    </div>
                    <div className="hidden md:block h-12 w-0 border-l border-dashed border-zinc-500"></div>
                </div>
            </div>
        </div>
    );
}