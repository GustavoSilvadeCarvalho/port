import ProjectsCardGrid from "./ProjectsCardGrid";

export default function Projects() {
    return (
        <div className="w-full max-w-90 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-7xl flex flex-col items-center justify-center py-12 gap-6">
            <div className="flex items-center w-full mx-auto">
                <div className="flex-1 h-px bg-gradient-to-l from-neutral-600 to-black" />
                <h2 className="px-4 text-2xl font-bold text-center text-white whitespace-nowrap">Projetos</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-neutral-600 to-black" />
            </div>
            <p className="text-center text-white pb-10">Confira alguns dos meus trabalhos recentes e projetos pessoais.</p>
            <ProjectsCardGrid />
        </div>
    );
}