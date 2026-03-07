"use client";

import React, { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InformationCircleIcon,
  Mail01Icon,
  TelegramIcon,
} from "@hugeicons/core-free-icons";
import { useApp } from "@/context/AppContext";

type Props = {
  title: [string, string];
  subtitle: [string, string];
  updated: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  title,
  subtitle,
  updated,
  children,
}: Props) {
  const { lang } = useApp();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(atob("bWV5dGlraGFueWFuLmhvdnNlcEBnbWFpbC5jb20="));
  }, []);

  return (
    <section className="pt-32 pb-24 px-6 relative bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-400 mb-8 hover:bg-white/10 transition-colors cursor-default">
            <HugeiconsIcon icon={InformationCircleIcon} size={14} />
            <span>{lang ? "Legal Information" : "Юридическая информация"}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
            {lang ? title[0] : title[1]}
          </h1>
          <p className="text-xl text-slate-400">
            {lang ? subtitle[0] : subtitle[1]}
          </p>
          <div className="mt-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-slate-400">
            {lang ? "Last updated:" : "Обновлено:"}{" "}
            <span className="text-emerald-400">{updated}</span>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12 space-y-12 text-lg text-slate-400 leading-relaxed bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden">
          {children}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
          <h3 className="text-xl text-white font-medium mb-4">
            {lang ? "Questions?" : "Есть вопросы?"}
          </h3>
          <div className="flex gap-5 justify-center flex-wrap">
            <a
              href={email ? `mailto:${email}` : "#"}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
            >
              <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={2} />
              {email || "Loading..."}
            </a>
            <a
              href="https://t.me/Meytikhanyan_Hovsep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
            >
              <HugeiconsIcon icon={TelegramIcon} size={20} strokeWidth={2} />
              @Meytikhanyan_Hovsep
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
