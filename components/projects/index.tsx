"use client";
import React, { useRef, useState, useEffect } from "react";
import Title from "../ui/title";
import Item from "./item";
import { TProject } from "@/types";
import Container from "../ui/container";
import { useActiveElement } from "@/hooks/useActiveElement";
import Button, { ButtonVariant } from "../ui/button";

type Props = { lang: boolean };

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
    url: "https://neurofilms.ru/",
    img: "neurofilms.webp",
    title: ["AI Video Production", "ИИ-видео продакшн"],
    description: [
      "High-end AI platform for creating cinematic visual content.",
      "Премиальная ИИ-платформа для создания визуального контента.",
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
    url: "https://geographicawe.vercel.app/",
    img: "geograpics.webp",
    title: ["Natural Stone Store", "Магазин натурального камня"],
    description: [
      "E-commerce catalog for stone mining and custom product orders.",
      "Каталог изделий из камня с системой индивидуальных заказов.",
    ],
  },
  {
    url: "https://andrey-bolinin.vercel.app/",
    img: "andrey-bolinin.webp",
    title: ["Backend Bootcamp", "Бэкенд Буткемп"],
    description: [
      "Educational hub for intensive PHP and Symfony engineering.",
      "Образовательный центр для обучения PHP и Symfony разработке.",
    ],
  },
  {
    url: "https://hovsep-meytikhanyan.vercel.app/",
    img: "restaurant.webp",
    title: ["Gourmet Restaurant", "Гурман Ресторан"],
    description: [
      "Online food ordering system with seat reservation functionality.",
      "Система онлайн-заказа еды с функцией бронирования столиков.",
    ],
  },
  {
    url: "https://sfs-company.vercel.app/",
    img: "sfs.webp",
    title: ["Digital Agency Hub", "Хаб диджитал-агентства"],
    description: [
      "Modern studio landing for business growth and product design.",
      "Лендинг студии для развития бизнеса и продуктового дизайна.",
    ],
  },
];

export default function Projects({ lang }: Props) {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndex = useActiveElement(refs);

  const [visibleCount, setVisibleCount] = useState(6);
  const [step, setStep] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newStep = 6;

      if (width < 640) {
        newStep = 3;
      } else if (width < 1024) {
        newStep = 4;
      }

      // Обновляем оба состояния сразу в одном обработчике событий.
      // Это убирает каскадные рендеры и ошибку в терминале.
      setStep(newStep);
      setVisibleCount(newStep);
    };

    // Вызываем один раз при загрузке
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  return (
    <Container style=" -mt-30! max-md:-mt-25!" id="projects">
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
        {projects.slice(0, visibleCount).map((e: TProject, i) => (
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

      {visibleCount < projects.length && (
        <div className="flex justify-center mt-12">
          <Button type={ButtonVariant.Secondary} onClick={showMore}>
            {lang ? "View More Projects" : "Показать еще"}
          </Button>
        </div>
      )}
    </Container>
  );
}
