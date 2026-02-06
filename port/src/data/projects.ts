export interface Project {
  id: string;
  banner: string;
  icon: string;
  title: string;
  link: string;
  linkLabel: string;
  description: string;
  tags: Array<{ label: string; color?: string }>;
  linkHoverColor?: string;
}

const projects: Project[] = [
  {
    id: "brainwave",
    banner: "/brainwave.png",
    icon: "/brainwave-icon.svg",
    title: "BrainWave",
    link: "https://brainwave-ten-iota.vercel.app/",
    linkLabel: "brainwave.ai",
    linkHoverColor: "hover:text-purple-400",
    description:
      "Built a high-performance e-commerce platform for Brazil's premier esports organization, handling millions of concurrent users during product drops...",
    tags: [
      { label: "Vite" },
      { label: "React.js" },
      { label: "Tailwind" },
      { label: "+1", color: "text-purple-400" },
    ],
  },
  {
    id: "habitta",
    banner: "/habitta.png",
    icon: "/habitta-icon.png",
    title: "Habitta",
    link: "https://habitta.vercel.app/",
    linkLabel: "habitta.app",
    linkHoverColor: "hover:text-white",
    description:
      "Uma imobiliária especializada na venda e aluguel de imóveis de alto padrão. Este site foi desenvolvido utilizando as tecnologias Next.js, TypeScript, Tailwind CSS, e Shadcn/UI para proporcionar uma experiência moderna e fluida aos usuários.",
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind" },
      { label: "+1", color: "text-white" },
    ],
  },
  {
    id: "apple",
    banner: "/apple.png",
    icon: "/apple.svg",
    title: "Apple Clone",
    link: "https://apple-xi-virid.vercel.app/",
    linkLabel: "appleClone.com",
    linkHoverColor: "hover:text-white",
    description:
      "Este projeto é uma recriação do site do iPhone 15 Pro da Apple, construída com foco em animações avançadas e cenas 3D. O objetivo é simular a experiência visual e interativa do site oficial, usando técnicas modernas de web (WebGL, animações e otimizações) — é um projeto de portfólio.",
    tags: [
      { label: "Vite" },
      { label: "React.js" },
      { label: "Tailwind" },
      { label: "+1", color: "text-white" },
    ],
  },
];

export default projects;
