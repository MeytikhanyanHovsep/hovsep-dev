"use client";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share05Icon } from "@hugeicons/core-free-icons";
import { memo } from "react";

type Props = {
    img: string;
    url: string;
    title: string;
    description: string;
};
const Item = memo(function Item({ img, url, title, description }: Props) {
    return (
        <div className="  relative rounded-3xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 transition-all duration-300">
            <a
                href={url}
                target="_blank"
                className="cursor-pointer relative group "
            >
                <img
                    src={`/images/projects/${img}?x=21`}
                    className=" object-contain w-full p-8 pb-0 transtion-transform duration-500 will-change-transform easy-in-out group-hover:scale-[1.07]"
                    width={400}
                    height={300}
                    alt="Preview"
                />
                <HugeiconsIcon
                    icon={Share05Icon}
                    className="absolute right-3 group-hover:top-5 group-hover:right-5 group-hover:opacity-100 transition-all duration-300 opacity-0 top-3 w-7 h-7 text-primary"
                />
            </a>
            <div className="p-8 pt-5">
                <h3 className="text-xl font-medium  text-white mb-3 tracking-tight">
                    {title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
});

export default Item;
