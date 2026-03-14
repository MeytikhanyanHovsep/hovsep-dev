"use client";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share05Icon } from "@hugeicons/core-free-icons";
import { memo, forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  img: string;
  url: string;
  title: string;
  description: string;
  isActive: boolean;
  ind: number;
};
const Item = memo(
  forwardRef<HTMLDivElement, Props>(function Item(
    { img, url, description, isActive, title, ind },
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
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
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
          ref={ref}
          data-active={isActive}
          className=" group relative h-full rounded-3xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 transition-all max-md:data-[active=true]:border-emerald-500/30 duration-300"
        >
          <a
            href={url}
            target="_blank"
            className="cursor-pointer relative group "
          >
            <Image
              src={`/images/projects/${img}`}
              className=" object-contain w-full p-8 max-md:p-6 pb-0! transtion-transform duration-500 will-change-transform easy-in-out max-md:g-active:scale-[1.05] group-hover:scale-[1.07]"
              width={400}
              height={300}
              alt="Preview"
            />
            <HugeiconsIcon
              icon={Share05Icon}
              className="absolute right-3 max-md:g-active:top-5 max-md:g-active:right-5 group-hover:top-5 group-hover:right-5 group-hover:opacity-100 max-md:g-active:opacity-100 transition-all duration-300 opacity-0 top-3 w-7 h-7 text-primary"
            />
          </a>
          <div className="p-8 pt-5 max-md:p-6 max-md:pt-4">
            <h3 className="text-xl font-medium  text-white mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  }),
);

export default Item;
