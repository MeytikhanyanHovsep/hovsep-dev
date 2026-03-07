"use client";
import React, { useState, memo, useMemo } from "react";
import Button, { ButtonVariant } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
type Props = { lang: boolean };

const Main = memo(function Main({ lang }: Props) {
  return (
    <>
      <main id="home" className="pt-23 min-h-screen  relative overflow-hidden">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-20"></div>
        <div className="page-section fade-in">
          <section className="pt-20 max-md:pt-10 pr-6 pb-32 pl-6 relative">
            <div className="flex flex-col justify-center h-full text-center max-w-4xl mr-auto ml-auto items-center">
              <div className="flex gap-4 max-xs:gap-2 max-md:gap-3">
                <div className="inline-flex items-center gap-2 px-3 max-md:px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary mb-8">
                  <span className="px-1.5 max-md:px-0.5 max-md:py-px py-0.5 rounded bg-emerald-500/10 text-emerald-300 max-md:text-xs text-sm font-medium uppercase tracking-wider">
                    10+
                  </span>
                  <span>{lang ? "Clients" : "Клиентов"}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 max-md:px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary mb-8">
                  <span className="px-1.5 max-md:px-0.5 max-md:py-px py-0.5 rounded bg-emerald-500/10 text-emerald-300 max-md:text-xs text-sm font-medium uppercase tracking-wider">
                    25+
                  </span>
                  <span>{lang ? "Projects" : "Проектов"}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 max-md:px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary mb-8">
                  <span className="px-1.5 max-md:px-0.5 max-md:py-px py-0.5 rounded bg-emerald-500/10 text-emerald-300 max-md:text-xs text-sm font-medium uppercase tracking-wider">
                    04+
                  </span>
                  <span>{lang ? "Years" : "Лет"}</span>
                </div>
              </div>

              <h1 className="leading-[0.9] md:text-7xl lg:text-6xl text-5xl font-medium text-white tracking-tight mb-8 text-balance">
                <span className="text-gradient bg-linear-to-r from-accent   to-secondary inline-block pb-2">
                  {lang ? "Digital solutions" : "Цифровые решения"}
                </span>{" "}
                {lang ? "for your business growth" : "для роста вашего бизнеса"}
                <span className="text-gradient bg-linear-to-r from-accent  to-secondary inline-block "></span>
              </h1>

              <p className="md:text-lg text-balance leading-[1.4] text-lg text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">
                {lang
                  ? "From architecture to launch: I build intuitive web applications with a focus on performance and user experience."
                  : "От архитектуры до запуска: создаю интуитивно веб-приложения с упором на производительность и пользовательский опыт."}
              </p>

              <Button link="contact" type={ButtonVariant.Primary}>
                {lang ? "Discuss Project" : "Обсудить проект"}
                <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
});
export default Main;
