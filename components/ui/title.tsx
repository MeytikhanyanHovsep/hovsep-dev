import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: string;
  desc?: string;
  dir?: "left" | "center" | "right";
};

export default function Title({ children, dir = "left", desc }: Props) {
  const pos =
    dir == "center" ? "mx-auto text-center" : dir == "right" ? "ml-auto" : "";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-150px 0px -150px 0px", amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={` mb-16 min-w-full max-md:mb-8 ${pos}`}
    >
      <h2 className="md:text-5xl text-balance w-full text-3xl font-medium text-white tracking-tight mb-4">
        {children}
      </h2>
      {desc && (
        <p className="text-lg max-md:text-[16px] text-slate-400 text-balance">
          {desc}
        </p>
      )}
    </motion.div>
  );
}
