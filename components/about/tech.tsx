import React from "react";

type Props = {};

export default function Tech({}: Props) {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 sm:grid-cols-4 transform   rotate-6 scale-110 gap-4">
        {[
          "html",
          "css",
          "js",
          "ts",
          "tailwind",
          "react",
          "next",
          "node",
          "nest",
          "docker",
          "github",
          "figma",
        ].map((tech, index) => {
          const isTransparent = [6, 8, 9, 11].includes(index);
          const isColored = [2, 3].includes(index);
          const isAccent = index === 5;

          return (
            <div
              key={tech}
              className={`aspect-square border rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-default
                    ${isTransparent ? "bg-transparent border-white/5" : ""}
                    ${
                      isAccent
                        ? "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:bg-emerald-500/20"
                        : isTransparent
                          ? " hover:bg-white/[0.1] hover:border-emerald-500/30"
                          : "bg-white/[0.03] border-white/5 hover:bg-white/[0.1] hover:border-emerald-500/30"
                    }`}
            >
              <div
                className={`w-10 h-10 object-contain transition-all duration-300
                        ${
                          isAccent || isColored
                            ? "bg-emerald-500 group-hover:bg-emerald-400"
                            : "bg-slate-400 group-hover:bg-white"
                        }`}
                style={{
                  WebkitMaskImage: `url(/images/techs/${tech}.png)`,
                  maskImage: `url(/images/techs/${tech}.png)`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
