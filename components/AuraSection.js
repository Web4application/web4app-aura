import { motion } from "framer-motion";

export default function AuraSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-aura-gradient overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-8"
      >
        Personalize Your Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90"
      >
        Tune your digital aura. Customize how your AI companion reacts, feels, and assists you in style.
      </motion.p>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(125,74,255,0.15),transparent)] animate-pulseGlow"></div>
    </section>
  );
}
