"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const BlackHoleTransition = () => {
  const router = useRouter();

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-40 h-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #ffb347 0%, #ff7a18 30%, #000000 70%)",
          boxShadow: "0 0 80px rgba(255,140,0,0.9)",
        }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 14, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        onAnimationComplete={() => router.push("/universe")}
      />
    </motion.div>
  );
};

export default BlackHoleTransition;
