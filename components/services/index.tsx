"use client";
import Title from "../ui/title";
import Item from "./item";
import { memo, useRef } from "react";
import { Settings01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Props = { lang: boolean };

type ServiceItem = {
  title: string[];
  description: string[];
  name: string;
  item?: React.ReactNode;
};
import Container from "../ui/container";
import { useActiveElement } from "@/hooks/useActiveElement";

const services: ServiceItem[] = [
  {
    title: ["Web Layout & Responsivity", "Верстка и Адаптив"],
    description: [
      "Pixel-perfect Figma-to-code conversion that looks flawless on any screen size.",
      "Точный перенос макетов из Figma в адаптивный код. Pixel-Perfect",
    ],
    name: "layout",
    item: (
      <div className="relative group w-48 h-32 flex items-center justify-center overflow-visible">
        <div
          className="relative w-32 h-20 border-2 border-slate-700 rounded-md bg-slate-900/40 
                     transition-all duration-700 ease-in-out
                     group-hover:w-14 group-hover:h-24 group-hover:rounded-xl group-hover:border-emerald-500/50 max-md:g-active:w-14 max-md:g-active:h-24 max-md:g-active:rounded-xl max-md:g-active:border-emerald-500/50"
        >
          <div className="p-1.5 h-full flex flex-col gap-1.5">
            <div className="w-full h-2 bg-emerald-500 rounded-sm transition-colors duration-500" />
            <div className="flex flex-1 gap-1.5 transition-all duration-700 group-hover:flex-col max-md:g-active:flex-col">
              <div className="flex-1 bg-slate-800 rounded-sm border border-slate-700 group-hover:border-emerald-500/20 max-md:g-active:border-emerald-500/20" />
              <div className="flex-1 bg-slate-800 rounded-sm border border-slate-700 group-hover:border-emerald-500/20 max-md:g-active:border-emerald-500/20" />
            </div>
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-slate-800 rounded-full 
                         transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-x-0
                         max-md:g-active:opacity-0 max-md:g-active:scale-x-0"
            />
          </div>
        </div>

        <style>{`
          .relative {
            transform-style: preserve-3d;
            perspective: 1000px;
          }
        `}</style>
      </div>
    ),
  },
  {
    title: ["Frontend Development", "Frontend-разработка"],
    description: [
      "High-performance SPA and SSR applications built with React / Vue and Next.js / Nuxt.js.",
      "Быстрые SPA и SSR приложения на базе React / Vue и Next.js / Nuxt.js.",
    ],
    name: "frontend",
    item: (
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="90"
          height="90"
          viewBox="0,0,256,256"
          className="absolute max-md:w-[80px] left-[-55px] max-md:top-[-55px] top-[-60px]"
        >
          <g
            fill="#1d293d"
            className="group-hover:fill-[#3a4c66] max-md:g-active:fill-[#3a4c66] duration-500 transition-colors"
            strokeWidth="1"
          >
            <g transform="scale(8,8)">
              <path d="M11.5,0c-1.381,0 -2.5,1.119 -2.5,2.5v1.5h-4c-1.105,0 -2,0.895 -2,2v3c0,0.552 0.448,1 1,1h0.35742c1.308,0 2.49791,0.94119 2.62891,2.24219c0.15,1.497 -1.02033,2.75781 -2.48633,2.75781h-0.5c-0.552,0 -1,0.448 -1,1v3c0,1.105 0.895,2 2,2h3c0.552,0 1,-0.448 1,-1v-0.35742c0,-1.308 0.94119,-2.49791 2.24219,-2.62891c1.497,-0.15 2.75781,1.02033 2.75781,2.48633v0.5c0,0.552 0.448,1 1,1h3c1.105,0 2,-0.895 2,-2v-4h1.5c1.381,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.119,-2.5 -2.5,-2.5h-1.5v-4c0,-1.105 -0.895,-2 -2,-2h-4v-1.5c0,-1.381 -1.119,-2.5 -2.5,-2.5z"></path>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="90"
          height="90"
          viewBox="0,0,256,256"
          className="absolute max-md:w-[80px] left-[-55px] bottom-[-80px]"
        >
          <g fill="#10b981" strokeWidth="1">
            <g transform="scale(8,8)">
              <path d="M11.5,0c-1.381,0 -2.5,1.119 -2.5,2.5v1.5h-4c-1.105,0 -2,0.895 -2,2v3c0,0.552 0.448,1 1,1h0.35742c1.308,0 2.49791,0.94119 2.62891,2.24219c0.15,1.497 -1.02033,2.75781 -2.48633,2.75781h-0.5c-0.552,0 -1,0.448 -1,1v3c0,1.105 0.895,2 2,2h3c0.552,0 1,-0.448 1,-1v-0.35742c0,-1.308 0.94119,-2.49791 2.24219,-2.62891c1.497,-0.15 2.75781,1.02033 2.75781,2.48633v0.5c0,0.552 0.448,1 1,1h3c1.105,0 2,-0.895 2,-2v-4h1.5c1.381,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.119,-2.5 -2.5,-2.5h-1.5v-4c0,-1.105 -0.895,-2 -2,-2h-4v-1.5c0,-1.381 -1.119,-2.5 -2.5,-2.5z"></path>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="90"
          height="90"
          viewBox="0,0,256,256"
          className="absolute max-md:w-[80px] left-[-10px] md:left-[-5px] bottom-[-80px]"
        >
          <g
            fill="#1d293d"
            className="group-hover:fill-[#3a4c66] max-md:g-active:fill-[#3a4c66] duration-500 transition-colors"
            strokeWidth="1"
          >
            <g transform="scale(8,8)">
              <path d="M11.5,0c-1.381,0 -2.5,1.119 -2.5,2.5v1.5h-4c-1.105,0 -2,0.895 -2,2v3c0,0.552 0.448,1 1,1h0.35742c1.308,0 2.49791,0.94119 2.62891,2.24219c0.15,1.497 -1.02033,2.75781 -2.48633,2.75781h-0.5c-0.552,0 -1,0.448 -1,1v3c0,1.105 0.895,2 2,2h3c0.552,0 1,-0.448 1,-1v-0.35742c0,-1.308 0.94119,-2.49791 2.24219,-2.62891c1.497,-0.15 2.75781,1.02033 2.75781,2.48633v0.5c0,0.552 0.448,1 1,1h3c1.105,0 2,-0.895 2,-2v-4h1.5c1.381,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.119,-2.5 -2.5,-2.5h-1.5v-4c0,-1.105 -0.895,-2 -2,-2h-4v-1.5c0,-1.381 -1.119,-2.5 -2.5,-2.5z"></path>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="90"
          height="90"
          viewBox="0,0,256,256"
          className="absolute max-md:w-[80px] md:left-[-5px] left-[-10px] opacity-0 max-md:g-active:opacity-100 group-hover:opacity-100 scale-120 translate-x-[20px] translate-y-[-20px] rotate-45 duration-500 max-md:g-active:scale-100 group-hover:scale-100 max-md:g-active:translate-0 group-hover:translate-0 max-md:g-active:rotate-0 group-hover:rotate-0 top-[-60px] max-md:top-[-55px]"
        >
          <g fill="#10b981" strokeWidth="1">
            <g transform="scale(8,8)">
              <path d="M11.5,0c-1.381,0 -2.5,1.119 -2.5,2.5v1.5h-4c-1.105,0 -2,0.895 -2,2v3c0,0.552 0.448,1 1,1h0.35742c1.308,0 2.49791,0.94119 2.62891,2.24219c0.15,1.497 -1.02033,2.75781 -2.48633,2.75781h-0.5c-0.552,0 -1,0.448 -1,1v3c0,1.105 0.895,2 2,2h3c0.552,0 1,-0.448 1,-1v-0.35742c0,-1.308 0.94119,-2.49791 2.24219,-2.62891c1.497,-0.15 2.75781,1.02033 2.75781,2.48633v0.5c0,0.552 0.448,1 1,1h3c1.105,0 2,-0.895 2,-2v-4h1.5c1.381,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.119,-2.5 -2.5,-2.5h-1.5v-4c0,-1.105 -0.895,-2 -2,-2h-4v-1.5c0,-1.381 -1.119,-2.5 -2.5,-2.5z"></path>
            </g>
          </g>
        </svg>
      </div>
    ),
  },
  {
    title: ["TypeScript & Reliability", "TypeScript и Надежность"],
    description: [
      "Error-free codebases with strict typing to prevent bugs before they happen.",
      "Стабильный код без ошибок благодаря строгой типизации и защите от багов.",
    ],
    name: "typeScript",
    item: (
      <div className="relative w-56 h-32 flex items-center justify-center group px-4 overflow-visible">
        <div className="relative w-24 h-24 flex items-end justify-center overflow-visible">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 28 32"
            fill="none"
            className="overflow-visible scale-110 translate-y-1"
          >
            <path
              d="M10 8v6M18 8v6"
              stroke="#475569"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="transition-colors group-hover:stroke-slate-500 max-md:g-active:stroke-slate-500"
            />

            <rect
              x="8.5"
              y="6.5"
              width="11"
              height="2"
              rx="1"
              stroke="#475569"
              strokeWidth="1.5"
              className="transition-colors -translate-y-px group-hover:stroke-emerald-500 max-md:g-active:stroke-emerald-500"
            />

            <path
              d="M18 14L24 22C25.5 24 24.5 26.5 22 26.5H6C3.5 26.5 2.5 24 4 22L10 14"
              stroke="#475569"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors group-hover:stroke-slate-500 max-md:g-active:stroke-slate-500"
            />

            <g className="mask-flask-liquid translate-1">
              <path
                d="M18 14L24 22C25.5 24 24.5 26.5 22 26.5H6C3.5 26.5 2.5 24 4 22L10 14H18Z"
                className="opacity-30 fill-emerald-500 mask-flask-liquid -translate-1 transition-opacity duration-700 group-hover:opacity-50 -z-1"
              />

              <circle
                cx="12"
                cy="22"
                r="1"
                fill="#34d399"
                className="opacity-0 max-md:g-active:animate-[rise_2.2s_infinite_ease-out_0.1s] group-hover:animate-[rise_2.2s_infinite_ease-out_0.1s]"
              />
              <circle
                cx="19"
                cy="24"
                r="0.8"
                fill="#34d399"
                className="opacity-0 max-md:g-active:animate-[rise_1.6s_infinite_ease-out_0.6s] group-hover:animate-[rise_1.6s_infinite_ease-out_0.6s]"
              />
              <circle
                cx="15"
                cy="20"
                r="1"
                fill="#34d399"
                className="opacity-0 max-md:g-active:animate-[rise_2s_infinite_ease-out_1.2s] group-hover:animate-[rise_2s_infinite_ease-out_1.2s]"
              />
              <circle
                cx="9"
                cy="18"
                r="1"
                fill="#34d399"
                className="opacity-0 max-md:g-active:animate-[rise_1.9s_infinite_ease-out_0.3s] group-hover:animate-[rise_1.9s_infinite_ease-out_0.3s]"
              />
              <circle
                cx="17"
                cy="21"
                r="0.7"
                fill="#34d399"
                className="opacity-0 max-md:g-active:group-hover:animate-[rise_1.7s_infinite_ease-out_0.9s] group-hover:animate-[rise_1.7s_infinite_ease-out_0.9s]"
              />
              <circle
                cx="13"
                cy="17"
                r="1"
                fill="#34d399"
                className="opacity-0 group-hover:animate-[rise_2.1s_infinite_ease-out_1.5s] max-md:g-active:animate-[rise_2.1s_infinite_ease-out_1.5s]"
              />
              <circle
                cx="11"
                cy="23"
                r="0.6"
                fill="#34d399"
                className="opacity-0 group-hover:animate-[rise_1.8s_infinite_ease-out_1.8s] max-md:g-active:animate-[rise_1.8s_infinite_ease-out_1.8s]"
              />
            </g>

            <defs>
              <mask id="mask-flask-liquid">
                <path
                  d="M18 14L24 22C25.5 24 24.5 26.5 22 26.5H6C3.5 26.5 2.5 24 4 22L10 14H18Z"
                  fill="white"
                />
              </mask>
            </defs>
          </svg>
        </div>

        <style>{`
            @keyframes rise {
                0% { transform: translateY(0) scale(0.6); opacity: 0; }
                10% { opacity: 0.6; }
                85% { opacity: 0.6; }
                100% { transform: translateY(-38px) scale(1.1); opacity: 0; }
            }
            @keyframes gasOut {
                0% { transform: translate(-50%, 0) scale(0.3); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translate(-50%, -45px) scale(1.8); opacity: 0; }
            }
        `}</style>
      </div>
    ),
  },
  {
    title: ["Architecture & API", "Архитектура и API"],
    description: [
      "Seamless data flow management with secure backend integrations.",
      "Управление потоками данных и безопасная интеграция с серверными API.",
    ],
    name: "architecture",
    item: (
      <div className="relative w-72 h-36 flex items-center justify-center ">
        <div className="relative z-10 ">
          <svg
            width="70"
            height="70"
            className=""
            viewBox="0 0 24 24"
            fill="#0A0C10"
          >
            <path
              className="stroke-primary transition-colors duration-300"
              d="M12 3C7.58 3 4 4.34 4 6V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V6C20 4.34 16.42 3 12 3Z"
              strokeWidth="1.5"
            />
            <path
              className="stroke-primary -translate-y-[4px] transition-colors duration-300"
              d="M4 10C4 11.66 7.58 13 12 13C16.42 13 20 11.66 20 10"
              strokeWidth="1.5"
            />
            <path
              className="stroke-primary -translate-y-[2px] transition-colors duration-300"
              d="M4 14C4 15.66 7.58 17 12 17C16.42 17 20 15.66 20 14"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="relative -ml-2 inset-0 flex items-center justify-center pointer-events-none">
          <svg
            width="60"
            height="4"
            viewBox="0 0 100 4"
            className="overflow-visible"
          >
            <line
              x1="0"
              y1="2"
              x2="150"
              y2="2"
              stroke="#1e293b"
              strokeWidth="5"
              strokeDasharray="15 8"
            />

            <circle
              r="5"
              fill="#10b981"
              className="opacity-0 scale-150 group-hover:opacity-100 max-md:g-active:opacity-100 shadow-[0_0_15px_#10b981]"
            >
              <animateMotion
                dur="1.8s"
                repeatCount="indefinite"
                path="M 0 2 L 150 2"
              />
            </circle>

            <circle
              r="5"
              fill="#34d399"
              className="opacity-0 scale-150 group-hover:opacity-100 max-md:g-active:opacity-100 shadow-[0_0_15px_#34d399]"
            >
              <animateMotion
                begin="0.9s"
                dur="1.8s"
                repeatCount="indefinite"
                path="M 0 2 L 150 2"
              />
            </circle>
          </svg>
        </div>

        <div className="relative   z-10">
          <svg width="80" height="70" viewBox="0 0 24 24" fill="#0A0C10">
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="3"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <path
              d="M2 9h20"
              stroke="#475569"
              strokeWidth="1.5"
              className="transition-colors max-md:g-active:stroke-emerald-500 group-hover:stroke-emerald-500"
            />
            <rect
              x="6"
              y="13"
              width="12"
              height="3"
              rx="1"
              fill="#1e293b"
              className="transition-colors max-md:g-active:fill-emerald-500/20 group-hover:fill-emerald-500/20"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    title: ["Performance & SEO", "Скорость и SEO"],
    description: [
      "Optimizing load speeds and semantic structure for top search rankings.",
      "Оптимизация скорости загрузки и семантики для высоких позиций в поиске.",
    ],
    name: "optimization",
    item: (
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path
          d="M10 70 A 50 50 0 0 1 110 70"
          fill="none"
          stroke="#1e293b"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M10 70 A 50 50 0 0 1 110 70"
          fill="none"
          stroke="url(#gauge-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="157"
          style={{
            strokeDashoffset: 157 - (157 * 75) / 100,
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
        <g
          className="origin-[60px_70px] transition-transform duration-2000 
             rotate-30 max-md:g-active:rotate-80 group-hover:rotate-80 
             "
          style={{ transformOrigin: "60px 70px" }}
        >
          <rect x="58" y="25" width="4" height="45" rx="2" fill="#e2e8f0" />
          <circle cx="60" cy="70" r="6" fill="#e2e8f0" />
        </g>
      </svg>
    ),
  },
  {
    title: ["Evolution & Support", "Развитие и Поддержка"],
    description: [
      "Continuous feature updates, bug fixes, and long-term project refactoring.",
      "Обновление функций, исправление багов и поддержка живых проектов.",
    ],
    name: "support",
    item: (
      <div className="relative group w-64 h-40 flex items-center justify-center px-4 overflow-visible">
        <div className="relative h-[70px]">
          <HugeiconsIcon
            className="w-[70px] absolute will-change-transform top-0 left-[-70px] h-[70px] gear-base gear-slow text-slate-500 transition-colors duration-500 group-hover:text-emerald-500"
            icon={Settings01Icon}
          />

          <HugeiconsIcon
            className="w-[55px] h-[55px] absolute will-change-transform top-[-5px] right-[-50px] gear-base gear-medium text-slate-500  transition-colors duration-500 group-hover:text-slate-300"
            icon={Settings01Icon}
          />

          <HugeiconsIcon
            className="w-[40px] h-[40px] absolute will-change-transform top-[45px] right-[-33px] gear-base gear-fast text-emerald-400 transition-colors duration-500 group-hover:text-emerald-400"
            icon={Settings01Icon}
          />
        </div>
      </div>
    ),
  },
];
const Services = memo(function Services({ lang }: Props) {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndex = useActiveElement(refs);

  return (
    <Container id="services">
      <Title
        dir="center"
        desc={
          lang
            ? "I turn complex ideas into elegant solutions."
            : "Воплощаю сложные идеи в элегантные решения."
        }
      >
        {lang ? "The Art of Clean Code" : "Искусство чистого кода"}
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((e: ServiceItem, i) => (
          <Item
            ind={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            isActive={i === activeIndex}
            name={e.name}
            key={i}
            item={e.item}
            title={lang ? e.title[0] : e.title[1]}
            description={lang ? e.description[0] : e.description[1]}
          />
        ))}
      </div>
    </Container>
  );
});

export default Services;
