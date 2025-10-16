import Typing from "./Typing";
import LogoContainer from "./LogoContainer";

export default function Hero() {
    return (
        <div className="w-4/5 max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-8 pt-30 xl:pt-50 mb-16 lg:mb-40">
            <div className="text-center lg:text-left flex flex-col gap-4 xl:gap-7 w-full lg:w-1/2">
                <h2 className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white">Desenvolvendo experiências web completas, do servidor à tela.</h2>
                <h3 className="text-lg md:text-2xl text-white">Eu sou Gustavo Silva, Desenvolvedor Full Stack.</h3>
                <p className="text-md md:text-xl text-white">Apaixonado por transformar desafios em soluções web elegantes e funcionais.</p>
                <div className="gap-4 flex flex-wrap justify-center lg:justify-start">
                    <button className="relative inline-flex h-16 w-48 overflow-hidden rounded-2xl p-[1px] border border-neutral-600/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 duration-300 hover:scale-110">
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-transparent px-3 py-1 text-md font-medium text-white">
                            Ver Projetos
                        </span>
                    </button>
                    <button className="relative inline-flex h-16 w-48 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 duration-300 hover:scale-105">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(100,100,100,0.8)_0%,rgba(50,50,50,0.5)_50%,rgba(100,100,100,0.8)_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-b max-w-lg from-neutral-900/80 to-neutral-900/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Download CV
                        </span>
                    </button>
                </div>
                <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                    <LogoContainer>
                        <img
                            src="/react-logo.svg"
                            alt="React"
                            className="w-full h-full object-contain"
                        />
                    </LogoContainer>
                    <LogoContainer>
                        <img
                            src="/next-logo.svg"
                            alt="Next.js"
                            className="w-full h-full object-contain"
                        />
                    </LogoContainer>
                    <LogoContainer>
                        <img
                            src="/node-logo.svg"
                            alt="Node.js"
                            className="w-full h-full object-contain"
                        />
                    </LogoContainer>
                    <LogoContainer>
                        <img
                            src="/typescript-logo.svg"
                            alt="TypeScript"
                            className="w-full h-full object-contain"
                        />
                    </LogoContainer>
                    <LogoContainer>
                        <img
                            src="/javascript-logo.svg"
                            alt="TypeScript"
                            className="w-full h-full object-contain"
                        />
                    </LogoContainer>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
                <Typing />
            </div>
        </div>
    );
}