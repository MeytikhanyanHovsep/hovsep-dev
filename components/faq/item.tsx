import React, { memo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    AddCircleHalfDotIcon,
    RemoveCircleHalfDotIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
};

const Item = memo(function Item({ title, description }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="p-3 overflow-hidden rounded-[10px] bg-linear-to-r from-primary/5 via-primary/10 to-primary/5 max-h-min flex flex-col justify-center">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex group transition-all duration-300 items-center cursor-pointer w-full justify-between ${
                    isOpen ? " mb-[9px]" : ""
                }`}
            >
                <h4 className="text-2xl my-auto max-w-[80%] max-md:text-[18px] max-2xl:text-[20px]">
                    {title}
                </h4>
                <div
                    className={`cursor-pointer m-0 max-w-[30px]! group-hover:text-primary  flex items-center relative transition-all duration-300 ${
                        isOpen ? "rotate-90 origin-center " : ""
                    }`}
                >
                    <span
                        className={` transition-all  duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <HugeiconsIcon
                            strokeWidth={2}
                            icon={AddCircleHalfDotIcon}
                            className="w-[30px] h-[30px]"
                        />
                    </span>
                    <span
                        className={`rotate-y-180 absolute top-1/2 -translate-y-1/2 left-0 origin-center -rotate-90 transition-all duration-300 ${
                            isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <HugeiconsIcon
                            strokeWidth={2}
                            icon={RemoveCircleHalfDotIcon}
                            className="w-[30px] h-[30px]"
                        />
                    </span>
                </div>
            </div>
            <motion.p
                initial={{
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                }}
                animate={
                    isOpen
                        ? {
                              height: "auto",
                              opacity: 1,
                              transition: {
                                  type: "spring",
                                  bounce: 0,
                                  duration: 0.4,
                              },
                          }
                        : {
                              height: 0,
                              opacity: 0,
                          }
                }
                style={{ overflow: "hidden" }}
                className="text-gray max-md:text-[12px] max-2xl:text-[14px]"
            >
                {description}
            </motion.p>
        </div>
    );
});

export default Item;
