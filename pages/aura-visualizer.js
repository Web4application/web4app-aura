import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function AuraVisualizer() {

  useEffect(() => {
    // Load D3 script dynamically
    const script = document.createElement("script");
    script.src = "/visuals/aura_core_mindmap.js"; // external JS for D3 simulation
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); }
  }, []);

  return (
    <main className="bg-aura-gradient min-h-screen text-white">
      <Navbar />
      <section className="pt-24 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8 text-center">Explore AURA Core</h1>
        <p className="text-white/80 text-center mb-12 max-w-3xl">
          Interactive neural map of AURA Core — the heart of Web4app Intelligence.
        </p>
        <div id="mindmap-container" className="w-full h-[80vh]"></div>
      </section>
    </main>
  );
}
