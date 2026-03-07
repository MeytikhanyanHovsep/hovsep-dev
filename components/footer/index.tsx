import React from "react";
import Item from "./item";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
type Props = {};

type FooterLink = {
  item: [string, string];
};

export default function Footer({}: Props) {
  const { lang } = useApp();

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
    { item: ["Terms of Service", "Условия использования"] },
    { item: ["Privacy Policy", "Политика конфиденциальности"] },
  ];

  return (
    <footer className="border-t border-white/5 from-[#020617] to-[#0206172a] bg-linear-to-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
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
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              ></a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              ></a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              ></a>
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
            title={lang ? "Legal" : "Юридическая информация"}
            elements={legal}
            lang={lang}
          />
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Hovsep Meytikhanyan. All rights reserved.
          </p>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </footer>
  );
}
