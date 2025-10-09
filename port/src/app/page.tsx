import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center bg-black flex-col">
      <Header />
      <Hero />
      <About />
    </div>
  );
}