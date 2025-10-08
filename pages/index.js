import { useEffect, useRef } from "react";
import FloatingNodes from "../components/FloatingNodes";
import Navbar from "../components/Navbar";
import { initParticles } from "../scripts/auraParticles";

export default function Home() {
  const auraRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    // Scroll-triggered fade-in + parallax
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const blueprint = document.querySelector(".aura-parallax");
      const text = document.querySelector(".aura-parallax-text");
      const button = document.querySelector(".aura-parallax-button");

      blueprint.style.transform = `translateY(${scrollTop * 0.2}px)`;
      text.style.transform = `translateY(${scrollTop * 0.4}px)`;
      button.style.transform = `translateY(${scrollTop * 0.6}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    // Particle background
    initParticles(canvasRef.current);

    // Scroll-triggered opacity
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) auraRef.current.classList.add("aura-active");
    }, { threshold: 0.3 });

    if (auraRef.current) observer.observe(auraRef.current);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white">
      <canvas id="particle-canvas" ref={canvasRef}></canvas>
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white font-bold mb-8 text-center">Web4app – Aura Mode</h1>
        <p className="text-white/80 text-xl text-center max-w-2xl">Experience AI like never before.</p>
      </section>

      <section
        id="aura-core"
        ref={auraRef}
        className="relative min-h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000 overflow-hidden"
      >
        <FloatingNodes />
        <img
          src="/visuals/aura_core_blueprint.svg"
          alt="AURA Core Blueprint"
          className="max-w-4xl w-full relative z-10 aura-parallax"
        />
        <p className="text-white/80 text-center mt-6 text-2xl font-semibold relative z-10 aura-parallax-text">
          AURA Core — The Neural Engine Powering All Web4 Intelligence.
        </p>
        <a
          href="/aura-visualizer"
          className="mt-8 px-6 py-3 bg-[#7d4aff]/80 hover:bg-[#7d4aff] rounded text-white font-semibold transition-all relative z-10 aura-parallax-button"
        >
          Click to Explore
        </a>
      </section>
    </main>
  );
}
