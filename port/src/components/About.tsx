export default function About() {
    return (
        <div className="w-full max-w-90 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-7xl flex flex-col items-center justify-center py-12">
            <div className="flex items-center w-full mx-auto">
                <div className="flex-1 h-px bg-gradient-to-l from-neutral-600 to-black" />
                <h2 className="px-4 text-2xl font-bold text-center text-white whitespace-nowrap">Sobre mim</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-neutral-600 to-black" />
            </div>
            <p className="mt-12 text-center text-white font-bold xl:text-5xl">Construindo o futuro uma linha de cada vez</p>
        </div>
    );
}