"use client";
import React, { useRef } from "react";
import Title from "../ui/title";
import Item from "./item";
import { TProject } from "@/types";
import Container from "../ui/container";
import { useActiveElement } from "@/hooks/useActiveElement";

type Props = { lang: boolean };

const projects: TProject[] = [
  {
    url: "https://apexhash.ru/",
    img: "apexhash.png",
    title: ["ApexHash Infrastructure", "Инфраструктура ApexHash"],
    description: [
      "Mining infrastructure aggregator for hardware hosting and management.",
      "Агрегатор майнинг-инфраструктуры для хостинга и управления оборудованием.",
    ],
  },

  {
    url: "https://berikod.ru/",
    img: "berikodru.png",
    title: ["BeriKod Savings", "БериКод Скидки"],
    description: [
      "Coupon aggregator platform with automated promo code distribution.",
      "Автоматизированная платформа агрегации промокодов.",
    ],
  },
  {
    url: "https://andreybolonin.com/",
    img: "andrey.png",
    title: ["Portfolio Showcase", "Портфолио Разработчика"],
    description: [
      "Clean, high-performance landing page for a creative professional.",
      "Минималистичный лендинг для презентации творческих работ.",
    ],
  },
  {
    url: "https://puti-nn.ru/",
    img: "putinn.png",
    title: ["Puti-NN Logistics", "Пути-НН Логистика"],
    description: [
      "Corporate service for medical inspections and driver logistics.",
      "Корпоративный сервис предрейсовых осмотров и логистики.",
    ],
  },
  {
    url: "https://thejobgate.com/",
    img: "jobgate.png",
    title: ["TheJobGate Platform", "Платформа TheJobGate"],
    description: [
      "Streamlining recruitment through automated hiring workflows.",
      "Оптимизация рекрутинга через автоматизацию рабочих процессов.",
    ],
  },
  {
    url: "https://geographicawe.vercel.app/",
    img: "geographic.png",
    title: ["Geographica Stone", "Географика Камень"],
    description: [
      "Commercial platform for natural stone extraction and custom products.",
      "Коммерческая платформа по добыче камня и производству изделий.",
    ],
  },
  {
    url: "https://спб.санэпидем.рф/dezinsekciya.html",
    img: "disinfect.png",
    title: ["SanEpidem Service", "СанЭпидем Служба"],
    description: [
      "Booking system for residential and commercial disinfection.",
      "Система заказа дезинсекции для жилых и коммерческих объектов.",
    ],
  },
  {
    url: "https://hovsep-meytikhanyan.vercel.app/",
    img: "restaurant.png",
    title: ["Fullstack E-Shop", "Fullstack Магазин"],
    description: [
      "Complex API integration featuring wishlist, cart, and search logic.",
      "Сложная интеграция с API: вишлист, корзина и логика поиска.",
    ],
  },
];

export default function Projects({ lang }: Props) {
  const refs = projects.map(() => useRef<any>(null));
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

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((e: TProject, i) => (
          <Item
            key={i}
            ind={i}
            ref={refs[i]}
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
