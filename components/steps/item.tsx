"use client";
import { forwardRef, memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
type Props = {
  title: string;
  ind: number;
  desc: string;
  isActive: boolean;
};

const Item = memo(
  forwardRef<HTMLDivElement, Props>(function Item(
    { title, ind, desc, isActive },
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
      <div
        className={`relative  ${ind == 0 ? "max-lg:order-1 " : ""} ${ind == 1 ? "max-lg:order-2" : ""} ${ind == 2 ? "max-lg:order-4 " : ""} ${ind == 3 ? "max-lg:order-6" : ""} ${ind == 4 ? "max-lg:order-5" : ""} ${ind == 5 ? "max-lg:order-3" : ""}`}
      >
        <div
          className={`h-[5px] w-[62px] max-sm:w-[20px] max-sm:right-[-18px] absolute z-1 right-[-61px] origin-center  bg-emerald-700 ${ind == 3 ? "max-lg:left-[-61px]! max-sm:left-[-18px]! " : ""} ${ind == 2 ? " -translate-x-1/2 left-1/2! rotate-90 max-lg:top-[-33px] max-sm:top-[-13px] lg:bottom-[-33px]! " : "translate-y-1/2 top-1/2"} ${ind == 4 ? "max-lg:-translate-x-1/2 max-lg:left-1/2! max-lg:rotate-90 max-lg:top-[-33px] max-sm:top-[-13px] lg:bottom-[-33px]" : ""} ${ind == 1 ? "max-lg:hidden" : ""} ${ind == 5 ? "lg:hidden " : ""}`}
        />

        <div
          className={`absolute top-1/2 blur-[1px] translate-y-1/2 border-emerald-600/70  border-t-[5px] w-full ${ind == 2 ? "w-[calc(50%+2.5px)]! lg:rounded-tr-[20px] translate-y-[2.5px]  h-1/2 border-r-[5px] max-lg:-top-0.5 max-lg:border-t-0 max-lg:h-[calc(50%+6.5px)] max-lg:border-b-[5px] max-lg:rounded-br-[20px] " : ""} ${ind == 5 ? "w-[calc(50%+2.5px)]! lg:translate-y-[3px] lg:-top-0.5!  h-[calc(50%+6px)] lg:border-t-0 border-b-[5px] max-lg:border-b-0 lg:border-r-[5px] rounded-br-[20px] max-lg:right-0 max-lg:rounded-tl-[20px]  max-lg:border-l-[5px] max-lg:top-[calc(50%)] max-lg:translate-y-[2px]" : ""} ${ind == 1 ? "max-lg:w-[calc(50%+2.5px)]! max-lg:translate-y-[2.5px]  max-lg:h-1/2 max-lg:border-r-[5px] max-lg:rounded-tr-[20px]" : ""} ${ind == 4 ? "max-lg:right-0 max-lg:h-[calc(50%+7px)] max-lg:top-0 max-lg:translate-y-0 max-lg:border-b-[5px] max-lg:border-t-0 max-lg:w-[calc(50%+2px)] max-lg:border-l-[5px] max-lg:rounded-bl-[20px]" : ""}`}
        />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.3,
            delay: getDelay(),
            ease: "easeOut",
          }}
          data-active={isActive}
          style={{
            willChange: "transform, opacity",
          }}
          ref={ref}
          className="p-8 group transition-colors duration-300 max-md:data-[active=true]:border-emerald-500/30 md:hover:border-emerald-500/30 max-sm:px-3 max-sm:py-4 py-9 h-full relative z-10  rounded-[20px] flex flex-col gap-7 max-sm:gap-4 border-white/10 border bg-[#0A0C10]/60"
        >
          <h5 className="text-[20px] max-sm:text-[16px]">{title}</h5>
          <p className="text-slate-300 max-sm:text-[12px]">{desc}</p>
          <span className="mt-auto max-md:text-[14px] max-md:data-[active=true]:text-emerald-400 group-hover:text-emerald-400 transition-colors duration-300 text-slate-200">
            {ind == 3 ? 5 : ind == 5 ? 3 : ind}
          </span>
        </motion.div>
      </div>
    );
  }),
);

export default Item;
