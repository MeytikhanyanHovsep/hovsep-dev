import React from "react";
import Item from "./item";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, TelegramIcon } from "@hugeicons/core-free-icons";
type Props = {};

type FooterLink = {
  item: [string, string];
  type?: any;
};

export default function Footer({}: Props) {
  const { lang, setLang } = useApp();

  const navigation: FooterLink[] = [
    { item: ["projects", "Проекты"] },
    { item: ["about", "Обо мне"] },
    { item: ["reviews", "Отзывы"] },
    { item: ["faq", "Вопросы"] },
    { item: ["contact", "Контакт"] },
  ];

  const services: FooterLink[] = [
    { item: ["layout", "Верстка"] },
    { item: ["frontend", "Frontend"] },
    { item: ["typeScript", "TypeScript"] },
    { item: ["architecture", "Архитектура"] },
    { item: ["optimization", "Оптимизация"] },
    { item: ["support", "Поддержка"] },
  ];

  const legal: FooterLink[] = [
    { item: ["Privacy Policy", "Политика конфиденциальности"] },
    { item: ["Terms of Service", "Условия использования"] },
  ];

  const languages: FooterLink[] = [
    {
      item: ["English", "Английский"],
      type: "lang",
    },
    {
      item: ["Russian", "Русский"],
      type: "lang",
    },
  ];

  return (
    <footer className="border-t border-white/5 from-[#020617] to-[#0206172a] bg-linear-to-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center text-white text-[22px] font-medium tracking-tight  group z-10"
            >
              HOV
              <span className="text-emerald-400 ">$</span>
              EP
            </Link>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed mb-6 max-w-xs">
              {lang
                ? "Crafting high-performance web applications. Focused on clean code, seamless user experience, and modern architecture."
                : "Создаю высокопроизводительные веб-приложения. Фокус на чистом коде, безупречном UX и современной архитектуре."}
            </p>

            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://kwork.ru/user/hovsep_meytikhanyan"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Image
                  width={30}
                  height={30}
                  alt="Kwork"
                  className="w-6 h-6 max-md:w-5 max-md:h-5 mt-[2px] object-cover"
                  src="/images/icons/kwork.png"
                />
              </a>
              <a href="https://t.me/Meytikhanyan_Hovsep" target="_blank">
                <HugeiconsIcon
                  strokeWidth={2}
                  icon={TelegramIcon}
                  className=" cursor-pointer w-7 max-md:w-6 max-md:h-6 h-7 text-white hover:text-primary transition-colors duration-300 "
                />
              </a>
              <a href="https://github.com/meytikhanyanhovsep" target="_blank">
                <HugeiconsIcon
                  strokeWidth={2}
                  icon={GithubIcon}
                  className=" cursor-pointer w-7 max-md:w-6 max-md:h-6 h-7 text-white hover:text-primary transition-colors duration-300 "
                />
              </a>
            </div>
          </div>

          <Item
            title={lang ? "Company" : "Company"}
            elements={navigation}
            lang={lang}
          />
          <Item
            title={lang ? "Services" : "Услуги"}
            elements={services}
            lang={lang}
          />
          <Item
            title={lang ? "Languages" : "Язика"}
            elements={languages}
            lang={lang}
          />
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center gap-9">
          <p
            onClick={() => setLang(false)}
            className="text-slate-500 whitespace-nowrap text-xs"
          >
            © 2026 Hovsep Meytikhanyan. All rights reserved.
          </p>
          <Link
            href={"/privacy-policy"}
            className="text-slate-500 hover:text-white duration-300  text-xs"
          >
            {lang ? legal[0].item[0] : legal[0].item[1]}
          </Link>
          <Link
            href={"/terms-of-service"}
            className="text-slate-500 hover:text-white duration-300  text-xs"
          >
            {lang ? legal[1].item[0] : legal[1].item[1]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
