export interface LogoItem {
  id: string;
  src: string;
  alt: string;
}

const logos: LogoItem[] = [
  { id: "react", src: "/react-logo.svg", alt: "React" },
  { id: "next", src: "/next-logo.svg", alt: "Next.js" },
  { id: "node", src: "/node-logo.svg", alt: "Node.js" },
  { id: "ts", src: "/typescript-logo.svg", alt: "TypeScript" },
  { id: "js", src: "/javascript-logo.svg", alt: "JavaScript" },
];

export default logos;
