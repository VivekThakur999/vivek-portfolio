"use client";

import { motion } from "framer-motion";

export default function UniversePage() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-orange-400">
        Welcome to the Universe
        Work is under Progress
      </h1>
    </motion.div>
  );
}
