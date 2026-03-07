import React from "react";

export enum ButtonVariant {
  Header = "group relative hidden lg:inline-flex h-10 overflow-hidden rounded-lg p-px focus:outline-none",
  Primary = "group hover:bg-emerald-400 transition-all flex font-medium text-[#050505] cursor-pointer bg-emerald-500 rounded-full py-4 px-8 gap-2 items-center",
  Secondary = "group cursor-pointer border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm",
}

type Props = {
  type: ButtonVariant;
  children: React.ReactNode;
  link: string;
};

export default function Button({ type, children, link }: Props) {
  const handleScroll = (id: string): any => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", window.location.pathname);
    }

    return;
  };

  return (
    <button onClick={() => handleScroll(link)} className={type}>
      {children}
    </button>
  );
}
