'use client';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { animateWithGsapFrom } from "../utils/animation";
import ProjectsCard from "./ProjectsCard";
import projects from "../data/projects";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsRef = useRef(null);

    useGSAP(() => {
        animateWithGsapFrom('#projects-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
        });
        animateWithGsapFrom('#projects-subtitle', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
        });
        gsap.fromTo(
            '.project-card > * > *',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                ease: 'power2.out',
                stagger: 0.15,
                duration: 0.15,
                scrollTrigger: {
                    trigger: '#projects',
                    start: 'top 90%',
                    toggleActions: 'restart reverse restart reverse',
                },
            }
        );
    }, []);

    return (
        <section ref={projectsRef} id='projects' className="w-full max-w-90 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-7xl flex flex-col items-center justify-center py-12 gap-6">
            <div id='projects-title' className="flex items-center w-full mx-auto">
                <div className="flex-1 h-px bg-gradient-to-l from-neutral-600 to-black" />
                <h2 className="px-4 text-2xl font-bold text-center text-white whitespace-nowrap">Projetos</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-neutral-600 to-black" />
            </div>
            <p id='projects-subtitle' className="text-center text-white pb-10">Confira alguns dos meus trabalhos recentes e projetos pessoais.</p>
            <div className="project-card w-full flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl px-4">
                    {projects.map((p) => (
                        <ProjectsCard key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;