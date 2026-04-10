"use client";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share05Icon } from "@hugeicons/core-free-icons";
import { memo, forwardRef, useState, useEffect, useMemo } from "react";
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
      const tabletQuery = window.matchMedia("(max-width: 1023px)");
      const mobileQuery = window.matchMedia("(max-width: 639px)");

      const updateCols = () => {
        if (mobileQuery.matches) setCols(1);
        else if (tabletQuery.matches) setCols(2);
        else setCols(3);
      };

      updateCols();

      tabletQuery.addEventListener("change", updateCols);
      mobileQuery.addEventListener("change", updateCols);

      return () => {
        tabletQuery.removeEventListener("change", updateCols);
        mobileQuery.removeEventListener("change", updateCols);
      };
    }, []);

    const delay = useMemo(() => {
      if (cols === 1) return 0;
      return (ind % cols) * 0.15;
    }, [cols, ind]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: 0.4,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="h-full"
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      >
        <div
          ref={ref}
          data-active={isActive}
          className="group relative h-full rounded-3xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 transition-all max-md:data-[active=true]:border-emerald-500/30 duration-300"
        >
          <a
            href={url}
            target="_blank"
            className="cursor-pointer relative group block"
          >
            <Image
              src={`/images/projects/${img}`}
              priority={ind < 3}
              loading={ind < 3 ? "eager" : "lazy"}
              className="object-contain w-full p-8 max-md:p-6 pb-0! transition-transform duration-500 will-change-transform group-hover:scale-[1.05]"
              width={400}
              height={300}
              alt={title}
            />
            <HugeiconsIcon
              icon={Share05Icon}
              className="absolute right-3 opacity-0 group-hover:opacity-100 group-hover:top-5 group-hover:right-5 transition-all duration-300 top-3 w-7 h-7 text-primary max-md:g-active:opacity-100 max-md:g-active:top-5 max-md:g-active:right-5"
            />
          </a>
          <div className="p-8 pt-5 max-md:p-6 max-md:pt-4">
            <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
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
