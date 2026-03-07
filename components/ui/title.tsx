import React from "react";

type Props = {
  children: string;
  desc?: string;
  dir?: "left" | "center" | "right";
};

export default function Title({ children, dir = "left", desc }: Props) {
  const pos =
    dir == "center"
      ? "mx-auto text-center"
      : dir == "right"
        ? "ml-auto"
        : "mr-auto";
  return (
    <div className={` mb-16 max-md:mb-8 ${pos}`}>
      <h2 className="md:text-5xl text-balance text-3xl font-medium text-white tracking-tight mb-4">
        {children}
      </h2>
      {desc && (
        <p className="text-lg max-md:text-[16px] text-slate-400 text-balance">
          {desc}
        </p>
      )}
    </div>
  );
}
