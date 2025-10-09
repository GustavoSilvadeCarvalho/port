import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full max-w-90 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-6xl lg:flex pt-30">
            <div className="text-center lg:text-left flex flex-col gap-4">
                <h2 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Desenvolvendo experiências web completas, do servidor à tela.</h2>
                <h3 className="text-lg md:text-xl text-white">Eu sou Gustavo Silva, Desenvolvedor Full Stack.</h3>
                <p className="text-md md:text-xl text-white">Apaixonado por transformar desafios em soluções web elegantes e funcionais.</p>
                <div className="gap-4 flex">
                    <button className="bg-transparent w-48 h-16 border border-neutral-600/50 text-white px-8 py-4 rounded-2xl">Ver Projetos</button>
                    <button className="relative inline-flex h-16 w-48 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(23,23,23,0.8)_0%,rgba(82,82,82,0.5)_50%,rgba(23,23,23,0.8)_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-b max-w-lg from-neutral-900/80 to-neutral-900/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Download CV
                        </span>
                    </button>
                </div>
                <div>
                    <div className="flex gap-4">
                        <Image
                            src="/react-logo.svg"
                            alt="React"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/next-logo.svg"
                            alt="Next.js"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/node-logo.svg"
                            alt="Node.js"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/typescript-logo.svg"
                            alt="TypeScript"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/javascript-logo.svg"
                            alt="Tailwind CSS"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src="/path/to/hero-image.jpg"
                    alt="Imagem do herói"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}