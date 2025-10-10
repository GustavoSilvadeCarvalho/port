"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-90 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-7xl max-h-20 flex items-center justify-between px-4 sm:px-8 py-4 text-white border border-neutral-600/50 rounded-2xl bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 backdrop-blur-lg">
            <div className="items-center gap-2 flex transform transition duration-300 hover:scale-110">
                <span className="text-xl font-bold text-gray-400">{" >_"}</span>
                <span className="text-xl font-bold ">GC.</span>
            </div>
            {/* Menu para telas maiores que 640px */}
            <nav className="hidden sm:flex flex-1 gap-4 items-center justify-center">
                <a href="#home" className="duration-400 hover:text-white hover:bg-neutral-700 px-4 py-2 transition rounded-sm">Home</a>
                <a href="#about" className="duration-400 hover:text-white hover:bg-neutral-700 px-4 py-2 transition rounded-sm">Sobre</a>
                <a href="#projects" className="duration-400 hover:text-white hover:bg-neutral-700 px-4 py-2 transition rounded-sm">Projetos</a>
            </nav>
            <div className="hidden sm:flex items-center gap-4 justify-end">
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-400 transition transform duration-300 hover:scale-110">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" /></svg>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-gray-400 transition duration-300 hover:scale-110">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.585 8.199-6.082 8.199-11.385 0-6.627-5.373-12-12-12z" /></svg>
                </a>
            </div>
            {/* Ícone do menu hambúrguer para telas menores que 640px */}
            <button
                className="sm:hidden ml-auto text-white focus:outline-none"
                aria-label="Abrir menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            {/* Dropdown do menu hambúrguer */}
            {menuOpen && (
                <div className="w-90 absolute top-20 right-0 bg-gradient-to-b from-neutral-900 to-neutral-900 border border-neutral-600/50 rounded-xl shadow-lg p-6 flex flex-col gap-4 sm:hidden z-50">
                    <a href="#home" className="hover:text-gray-400 transition" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" className="hover:text-gray-400 transition" onClick={() => setMenuOpen(false)}>Sobre</a>
                    <a href="#projects" className="hover:text-gray-400 transition" onClick={() => setMenuOpen(false)}>Projetos</a>
                    <div className="flex gap-4 mt-2">
                        <a href="#" aria-label="LinkedIn" className="hover:text-gray-400 transition">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" /></svg>
                        </a>
                        <a href="#" aria-label="GitHub" className="hover:text-gray-400 transition">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.585 8.199-6.082 8.199-11.385 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
