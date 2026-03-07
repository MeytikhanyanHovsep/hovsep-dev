import React, { memo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
    setOpenIndex: any;
    ind: number;
    openIndex: number | null;
};

const Item = memo(function Item({
    title,
    description,
    setOpenIndex,
    ind,
    openIndex,
}: Props) {
    return (
        <div className="md:border-r flex  hover:bg-white/[0.02] transition-colors group border-white/10 border-b  flex-col faq-item">
            <div
                onClick={() => {
                    if (openIndex == ind) {
                        setOpenIndex(null);
                    } else {
                        setOpenIndex(ind);
                    }
                }}
                className="flex pt-6 pr-6 pb-6 cursor-pointer pl-6 items-center justify-between w-full"
            >
                <span className="text-white font-medium">{title}</span>
                <HugeiconsIcon
                    icon={PlusSignIcon}
                    className={
                        (openIndex == ind ? "rotate-45 " : "") +
                        "w-[20px] text-primary stroke-3 will-change-transform ease transition-transform duration-300"
                    }
                />
            </div>
            <div className="faq-content overflow-hidden transition-all duration-300 ease-in-out">
                <motion.div
                    initial={false}
                    animate={{
                        height: openIndex == ind ? "auto" : 0,
                        opacity: openIndex == ind ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 0.4,
                    }}
                    className="overflow-hidden"
                >
                    <div className="px-6 pb-6">
                        <p className="text-slate-400 leading-relaxed  text-sm">
                            {description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

export default Item;
