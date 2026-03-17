import { motion } from "motion/react";

export function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0a0e27] z-50 flex items-center justify-center">
      <div className="relative">
        {/* Spinning circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full"
        />

        {/* Pulsing center */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500/30 rounded-full"
        />
      </div>
    </div>
  );
}
