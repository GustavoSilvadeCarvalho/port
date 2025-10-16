interface ProjectsCardProps {
    banner: string;
    icon: string;
    title: string;
    link: string;
    linkLabel: string;
    description: string;
    tags: Array<{ label: string; color?: string }>;
    linkHoverColor?: string;
}

export default function ProjectsCard({ banner, icon, title, link, linkLabel, description, tags, linkHoverColor = "hover:text-purple-400" }: ProjectsCardProps) {
    return (
        <div className="w-full max-w-md bg-gradient-to-b from-neutral-900/70 to-neutral-900/60 border border-neutral-600/50 rounded-2xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:scale-102">
            {/* Banner superior */}
            <div className="relative flex flex-col justify-end min-h-[200px] overflow-hidden">
                <img src={banner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
                {/* Overlay escuro para aumentar contraste */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* Ícone no canto superior esquerdo */}
                <img src={icon} alt="Icon" className="absolute top-3 left-3 w-8 h-8 z-20 transition duration-300 hover:scale-106" />
            </div>
            {/* Área inferior */}
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/60 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                    <div className="w-11 h-11 rounded-lg bg-black flex items-center justify-center">
                        <img src={icon} alt="Icon" className="w-6 h-6" />
                    </div>
                    <div>
                       <span className="text-lg font-bold text-white">{title}</span>
                       <div className={`flex items-center gap-1 text-gray-400 text-sm mb-2 transition duration-300 hover:scale-104 hover:cursor-pointer ${linkHoverColor}`}> 
                            {/* SVG globe clássico */}
                            <svg width="20" height="15" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/><path d="M2 10h16" stroke="currentColor" strokeWidth="2"/><path d="M10 2c2.5 3.5 2.5 12.5 0 16" stroke="currentColor" strokeWidth="2"/><path d="M10 2c-2.5 3.5-2.5 12.5 0 16" stroke="currentColor" strokeWidth="2"/></svg>
                            <a href={link} target="_blank" rel="noopener noreferrer">{linkLabel}</a>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className={`bg-neutral-800 border border-neutral-600/50 text-xs px-3 py-1 rounded-md ${tag.color ? tag.color : 'text-gray-200'}`}
                        >
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}