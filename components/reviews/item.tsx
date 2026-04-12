import Image from "next/image";
import { memo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share05Icon, StarIcon } from "@hugeicons/core-free-icons";

type Props = {
  name: string;
  desc: string;
  link: string;
  img: string;
  lang?: boolean;
  proff: string;
};

const Item = memo(function Item({ desc, img, name, link, proff }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="group  max-w-[550px]! [1400px]:max-w-[700px] relative min-h-full flex flex-col p-6 rounded-2xl  bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 w-max max-sm:max-w-[90vw]! transition-all duration-300"
    >
      <HugeiconsIcon
        icon={Share05Icon}
        className="absolute z-30 right-3 opacity-0 group-hover:opacity-100 group-hover:top-5 group-hover:right-5 transition-all duration-300 top-3 w-6 h-6 text-primary max-md:g-active:opacity-100 max-md:g-active:top-5 max-md:g-active:right-5"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

      <div className="relative z-10 flex items-center  gap-3">
        <div className="w-10 h-10 rounded-full  bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
          <Image
            src={"/images/reviews/" + img}
            alt="User"
            width={70}
            height={70}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-auto mt-[2px] flex flex-col justify-center">
          <p className="text-sm leading-[100%] font-medium text-white">
            {name}
          </p>
          <p className="text-sm capitalize mt-0.5 text-slate-400">{proff}</p>
        </div>
        <div className="flex h-full group-hover:pr-7 mt-[2px] transition-all duration-300 ml-auto text-emerald-400 gap-0.5 ">
          {Array.from({ length: 5 }).map((_, i) => (
            <HugeiconsIcon
              key={i}
              className="fill-emerald-400 h-[12px] w-[12px]"
              icon={StarIcon}
            />
          ))}
        </div>
      </div>

      <p className="relative   z-10 text-sm text-slate-400 leading-relaxed mt-4">
        {`"${desc}"`}
      </p>
    </a>
  );
});

export default Item;
