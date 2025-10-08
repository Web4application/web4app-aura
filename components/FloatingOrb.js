import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingOrb() {
  const [active, setActive] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <motion.div
        animate={{ y: [0, -10, 0], boxShadow: ["0 0 10px #7d4aff", "0 0 25px #7d4aff", "0 0 10px #7d4aff"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setActive(!active)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4e2fdd] to-[#7d4aff] cursor-pointer flex items-center justify-center text-white font-bold shadow-lg"
      >
        ✦
      </motion.div>

      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute bottom-20 right-0 bg-[#141428]/80 backdrop-blur-md text-sm p-4 rounded-lg border border-[#2d2d4a] w-64"
        >
          <p className="text-white mb-2">Hey there 👋</p>
          <p className="text-[#c9c9ff]">I’m your AI Orb.  
          Here to help you personalize, explore, or build your Web4app experience.</p>
          <button className="mt-3 bg-[#7d4aff]/80 hover:bg-[#7d4aff] px-3 py-1 rounded text-sm">
            Open Chat
          </button>
        </motion.div>
      )}
    </div>
  );
}
