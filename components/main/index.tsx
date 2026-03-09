"use client";

import React, { memo } from "react";
import Button, { ButtonVariant } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

type Props = { lang: boolean };

const Main = memo(function Main({ lang }: Props) {
  return (
    <main id="home" className="min-h-screen h-screen relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] bg-emerald-500/20 rounded-full blur-[120px]  -z-10 pointer-events-none opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0,
        }}
        className=" min-h-full grid place-items-center"
      >
        <section className="min-h-full flex items-center my-auto max-md:pt-10 px-6 relative">
          <div className="flex flex-col justify-center h-full text-center max-w-4xl mx-auto items-center">
            <div className="flex gap-4 max-xs:gap-2 max-md:gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 max-md:px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary">
                <span className="px-1.5 max-md:px-0.5 max-md:py-px py-0.5 rounded bg-emerald-500/10 text-emerald-300 max-md:text-xs text-sm font-medium uppercase tracking-wider">
                  10+
                </span>
                <span>{lang ? "Clients" : "Клиентов"}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 max-md:px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary">
                <span className="px-1.5 max-md:px-0.5 max-md:py-px py-0.5 rounded bg-emerald-500/10 text-emerald-300 max-md:text-xs text-sm font-medium uppercase tracking-wider">
                  25+
                </span>
                <span>{lang ? "Projects" : "Проектов"}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-8 text-balance leading-[1.1] md:leading-[0.9]">
              <span className="text-gradient bg-linear-to-r from-accent to-secondary inline-block lg:pb-2">
                {lang ? "Digital solutions" : "Цифровые решения"}
              </span>{" "}
              {lang ? "for your business growth" : "для роста вашего бизнеса"}
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mb-10 text-balance leading-[1.4]">
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
      </motion.div>
    </main>
  );
});

export default Main;
