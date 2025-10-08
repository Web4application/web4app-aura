import { motion } from "framer-motion";

export default function GlowCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px #7d4aff" }}
      className="bg-[#141428]/60 backdrop-blur-md border border-[#2d2d4a] rounded-xl p-6 text-left text-white transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="opacity-80">{desc}</p>
    </motion.div>
  );
}
