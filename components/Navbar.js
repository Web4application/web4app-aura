import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a1a]/70 backdrop-blur-lg border-b border-[#2d2d4a] px-8 py-4 flex justify-between items-center text-white"
    >
      <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-all">
        Web4app <span className="text-[#7d4aff]">Aura</span>
      </Link>
      <div className="space-x-6">
        <Link href="/" className="hover:text-[#7d4aff] transition-all">Home</Link>
        <Link href="/personalize" className="hover:text-[#7d4aff] transition-all">Personalize</Link>
        <Link href="https://web4application.github.io" target="_blank" className="hover:text-[#7d4aff] transition-all">Main Site</Link>
      </div>
    </motion.nav>
  );
}
