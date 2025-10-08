import Navbar from "../components/Navbar";
import GlowCard from "../components/GlowCard";
import FloatingOrb from "../components/FloatingOrb";

export default function Personalize() {
  const options = [
    { title: "Visual Aura", desc: "Adjust colors, lighting, and motion of your digital presence." },
    { title: "AI Mood", desc: "Choose between calm, witty, focused, or playful personality modes." },
    { title: "Performance", desc: "Control system responsiveness and voice activation." }
  ];

  return (
    <main className="bg-aura-gradient min-h-screen text-white">
      <Navbar />
      <section className="pt-24 px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">Personalize Your Experience</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <GlowCard key={i} title={opt.title} desc={opt.desc} />
          ))}
        </div>
      </section>
      <FloatingOrb />
    </main>
  );
}
