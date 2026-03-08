"use client";
import { memo, forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  item: React.ReactNode;
  isActive: boolean;
  name: string;
  ind: number;
};

const Item = memo(
  forwardRef<HTMLDivElement, Props>(function Item(
    { title, description, item, isActive, name, ind },
    ref,
  ) {
    const [cols, setCols] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) setCols(1);
        else if (window.innerWidth < 1024) setCols(2);
        else setCols(3);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getDelay = () => {
      if (cols === 1) return 0;
      return (ind % cols) * 0.3;
    };
    return (
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.3,
          delay: getDelay(),
          ease: "easeOut",
        }}
        className="h-full"
        style={{ willChange: "transform, opacity" }}
      >
        <div
          id={name}
          ref={ref}
          data-active={isActive}
          className="group h-full p-8 max-md:p-6 max-md:pt-0 pt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0C10] hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center max-md:data-[active=true]:border-emerald-500/30"
        >
          <div className="h-40 w-full max-md:scale-[0.9] max-md:my-[-15px] flex items-center justify-center -mb-2 md:mb-2 relative">
            {item}
          </div>
          <h3 className="text-xl font-medium  text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }),
);

export default Item;
