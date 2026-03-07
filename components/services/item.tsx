"use client";
import { memo } from "react";
import { motion } from "framer-motion";

type Props = { title: string; description: string; name: string; item?: any };

const Item = memo(function Item({ title, description, name, item }: Props) {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            className="group p-8 pt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0C10] hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center"
        >
            <div className="h-40 w-full flex items-center justify-center mb-2 relative">
                {item}
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                {description}
            </p>
        </motion.div>
    );
});

export default Item;
