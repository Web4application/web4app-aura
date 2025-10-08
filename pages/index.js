import Navbar from "../components/Navbar";
import AuraSection from "../components/AuraSection";
import FloatingOrb from "../components/FloatingOrb";

export default function Home() {
  return (
    <main className="bg-aura-gradient min-h-screen">
      <Navbar />
      <AuraSection />
      <FloatingOrb />
    </main>
  );
}
