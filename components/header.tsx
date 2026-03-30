"use client";

import Link from "next/link";
import React, { useState, memo, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Globe02Icon,
  TelegramIcon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Button, { ButtonVariant } from "./ui/button";
import { motion } from "framer-motion";

type Props = {
  activeSection: string;
};

const navigation: Record<string, string> = {
  projects: "Проекты",
  services: "Услуги",
  about: "Обо мне",
  reviews: "Отзывы",
};

const Header = memo(function Header({ activeSection }: Props) {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const path = usePathname();
  const { lang, toggleLang } = useApp();

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  const handleScroll = (id: string): void => {
    setMenuToggle(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", window.location.pathname);
      }
    }, 10);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/50 backdrop-blur-md will-change-transform "
      >
        <nav className="w-full ">
          <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between relative">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center text-white text-[22px] font-medium tracking-tight group z-10"
            >
              HOV
              <span className="text-emerald-400">$</span>
              EP
            </Link>

            <div className="max-lg:hidden flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
              {path === "/"
                ? Object.keys(navigation).map((e) => (
                    <button
                      key={e}
                      onClick={() => handleScroll(e)}
                      className={`hover:text-white tracking-[2%] font-sembold capitalize text-[#cbd5e1] cursor-pointer transition-colors ${
                        activeSection === e ? "text-emerald-400" : ""
                      }`}
                    >
                      {lang ? e : navigation[e]}
                    </button>
                  ))
                : Object.keys(navigation).map((e) => (
                    <Link
                      key={e}
                      href="/"
                      className="hover:text-white tracking-[2%] font-sembold capitalize text-[#cbd5e1] cursor-pointer transition-colors"
                    >
                      {lang ? e : navigation[e]}
                    </Link>
                  ))}
            </div>

            <div className="flex items-center gap-5 z-10">
              <button
                onClick={() => toggleLang()}
                className="flex gap-1  transition-colors text-[#cbd5e1] font-semibold duration-300 group hover:text-emerald-400 text-[15px]  items-center justify-center"
              >
                <HugeiconsIcon
                  strokeWidth={2}
                  icon={Globe02Icon}
                  className="cursor-pointer text-[#cbd5e1] group-hover:text-emerald-400 transition-colors duration-300 h-[22px] "
                />
                <span className="mt-px">{lang ? "EN" : "РУ"}</span>
              </button>

              <button
                onClick={() => setMenuToggle(!menuToggle)}
                className="lg:hidden flex items-center justify-center"
              >
                <HugeiconsIcon
                  strokeWidth={2}
                  icon={Menu01Icon}
                  className="cursor-pointer text-[#cbd5e1] hover:text-emerald-400 transition-colors duration-300 h-7 w-7"
                />
              </button>

              <Button
                type={ButtonVariant.Header}
                link="https://kwork.ru/user/hovsep_meytikhanyan"
              >
                <div className="relative">
                  <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#050505_50%,#10b981_100%)] animate-spin-custom "></span>

                  <span className="relative z-1 inline-flex h-full w-full cursor-pointer items-center duration-300 justify-center rounded-lg  bg-[#050505] px-8 text-sm font-medium text-white transition-all group-hover:bg-[#050505]/80">
                    {lang ? "Get Started" : "Начать работу"}
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </nav>
        <motion.div
          initial={{ height: 0, paddingBottom: 0, paddingTop: 0 }}
          animate={
            menuToggle
              ? { height: "auto", paddingBottom: 24, paddingTop: 10 }
              : { height: 0, paddingBottom: 0, paddingTop: 0 }
          }
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden px-6 overflow-hidden text-start flex flex-col gap-8 text-sm font-medium transform-gpu"
        >
          {path === "/"
            ? Object.keys(navigation).map((e) => (
                <button
                  key={e}
                  onClick={() => handleScroll(e)}
                  className={`flex justify-start capitalize text-white cursor-pointer transition-colors ${
                    activeSection === e ? "text-emerald-400" : ""
                  }`}
                >
                  {lang ? e : navigation[e]}
                </button>
              ))
            : Object.keys(navigation).map((e) => (
                <Link
                  key={e}
                  href="/"
                  className="flex justify-start capitalize text-white cursor-pointer transition-colors"
                >
                  {lang ? e : navigation[e]}
                </Link>
              ))}
        </motion.div>
      </motion.header>
    </>
  );
});

export default Header;
