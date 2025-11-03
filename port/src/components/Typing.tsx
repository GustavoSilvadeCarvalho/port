'use client';

import { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AnimatedCode() {
    const codeString = `// Building scalable solutions
class TechStack {
  constructor() {
    this.frontend = ['React', 'Next.js', 'HTML5', 'Tailwind', 'TypeScript'];
    this.backend = ['Node.js', 'TypeScript', 'NestJS', 'Express'];
    this.database = ['PostgreSQL', 'MongoDB'];
  }

  async buildSolution(requirements) {
    const architecture = await this.designArchitecture(requirements);
    const microservices = await
      this.createMicroservices(architecture);

    return {
      scalable: true,
      performant: true,
      maintainable: true,
      deployment: await this.deployToCloud(microservices)
    }
  }
}`;

    const [displayedCode, setDisplayedCode] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const codeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex < codeString.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode((prev) => prev + codeString[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 25);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, codeString]);

    useEffect(() => {
        if (codeContainerRef.current) {
            codeContainerRef.current.scrollTop = codeContainerRef.current.scrollHeight;
        }
    }, [displayedCode]);

    return (
        <div className="bg-[#1E1E1E] rounded-lg shadow-2xl overflow-hidden w-[830px] font-mono">
            <div className="bg-[#3C3C3C] p-3 flex items-center">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-300 text-sm">techstack.ts</span>
            </div>

            <div
                ref={codeContainerRef}
                className="h-[450px] w-[340px] sm:w-[500px] md:w-[630px] custom-scroll"
            >
                <SyntaxHighlighter
                    language="typescript"
                    style={vscDarkPlus}
                    customStyle={{
                        backgroundColor: 'transparent',
                        fontSize: '0.75rem',
                        lineHeight: '1.5',
                        minHeight: '100%',
                        whiteSpace: 'pre-wrap',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        maxWidth: '100%',
                        overflowX: 'hidden',
                        display: 'block',
                        wrapLines: true,
                    }}
                    wrapLongLines={true}
                >
                    {`${displayedCode}|`}
                </SyntaxHighlighter>
            </div>
            <div className="bg-[#3C3C3C] p-3 flex items-center">
                <span className=" text-gray-300 text-sm">TypeScript</span>
            </div>
        </div >
    );
}