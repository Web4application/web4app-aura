import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import FloatingOrb from "../components/FloatingOrb";

export default function Home() {
  const auraRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aura-active");
        }
      },
      { threshold: 0.3 }
    );

    if (auraRef.current) observer.observe(auraRef.current);
  }, []);

  return (
    <main className="bg-aura-gradient min-h-screen">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white font-bold mb-8">Web4app – Aura Mode</h1>
        <p className="text-white/80 text-xl text-center max-w-2xl">
          Experience AI like never before.
        </p>
      </section>

      <section
        id="aura-core"
        ref={auraRef}
        className="relative min-h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000"
      >
        <img
          src="/visuals/aura_core_blueprint.svg"
          alt="AURA Core Blueprint"
          className="max-w-4xl w-full"
        />
        <p className="text-white/80 text-center mt-6 text-2xl font-semibold">
          AURA Core — The Neural Engine Powering All Web4 Intelligence.
        </p>
      </section>

      <FloatingOrb />
    </main>
  );
}
