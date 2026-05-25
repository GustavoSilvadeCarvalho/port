import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center bg-black flex-col gap-10">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}