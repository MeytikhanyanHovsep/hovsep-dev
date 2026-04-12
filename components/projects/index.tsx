"use client";
import React, { useRef } from "react";
import Title from "../ui/title";
import Item from "./item";
import { TProject } from "@/types";
import Container from "../ui/container";
import { useActiveElement } from "@/hooks/useActiveElement";

type Props = { lang: boolean };

//https://deviceframes.com/
// w-1515
// x 150
const projects: TProject[] = [
  {
    url: "https://apexhash.ru/",
    img: "apexhash.webp",
    title: ["ApexHash Infrastructure", "Инфраструктура ApexHash"],
    description: [
      "Mining infrastructure aggregator for hardware hosting and management.",
      "Агрегатор майнинг-инфраструктуры для хостинга и управления оборудованием.",
    ],
  },

  {
    url: "https://technolabs.uz",
    img: "technolabs.webp",
    title: ["Business Automation", "Автоматизация бизнеса"],
    description: [
      "Tech agency landing with focus on bots, CRM and web solutions.",
      "Лендинг тех-агентства: разработка ботов, CRM и веб-решений под ключ.",
    ],
  },

  {
    url: "https://business-stream.vercel.app/",
    img: "business-stream.webp",
    title: ["Video Agency & CMS", "Видео-агентство и CMS"],
    description: [
      "Sleek video landing with optimized UX and custom admin panel.",
      "Стильный видео-лендинг с оптимизированным UI и админ-панелью.",
    ],
  },
  {
    url: "https://berikod.ru",
    img: "berikodru.webp",
    title: ["Fullstack E-Shop", "Fullstack Магазин"],
    description: [
      "Complex API integration featuring wishlist, cart, and search logic.",
      "Сложная интеграция с API: вишлист, корзина и логика поиска.",
    ],
  },
  {
    url: "https://thejobgate.com/",
    img: "jobgate.webp",
    title: ["TheJobGate Platform", "Платформа TheJobGate"],
    description: [
      "Streamlining recruitment through automated hiring workflows.",
      "Оптимизация рекрутинга через автоматизацию рабочих процессов.",
    ],
  },
  {
    url: "https://puti-nn.ru/",
    img: "putinn.webp",
    title: ["Puti-NN Logistics", "Пути-НН Логистика"],
    description: [
      "Corporate service for medical inspections and driver logistics.",
      "Корпоративный сервис предрейсовых осмотров и логистики.",
    ],
  },
];

export default function Projects({ lang }: Props) {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndex = useActiveElement(refs);

  return (
    <Container style=" -mt-30!  max-md:-mt-25!" id="projects">
      <Title
        dir="center"
        desc={
          lang
            ? "Real-world projects built to scale and drive measurable results."
            : "Кейсы, которые помогают бизнесу расти и приносить прибыль."
        }
      >
        {lang ? "Client Case Studies" : "Коммерческие проекты"}
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((e: TProject, i) => (
          <Item
            key={i}
            ind={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            isActive={i === activeIndex}
            img={e.img}
            url={e.url}
            description={lang ? e.description[0] : e.description[1]}
            title={lang ? e.title[0] : e.title[1]}
          />
        ))}
      </div>
    </Container>
  );
}
