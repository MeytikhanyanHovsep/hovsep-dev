import React, { memo, useRef } from "react";
import Container from "../ui/container";
import Title from "../ui/title";
import Item from "./item";
import { useActiveElement } from "@/hooks/useActiveElement";

type Props = {
  lang: boolean;
};

type Step = {
  title: string[];
  desc: string[];
};
const steps: Step[] = [
  {
    title: ["Discovery", "Аналитика"],
    desc: [
      "We analyze your business goals and audience to create a solid project foundation.",
      "Разбираем ваши цели и аудиторию, чтобы заложить правильный фундамент проекта.",
    ],
  },
  {
    title: ["Strategy", "Стратегия"],
    desc: [
      "I plan the site structure and logic. We choose the best tech stack for your tasks.",
      "Планируем логику и структуру. Выбираем лучший стек технологий под ваши задачи.",
    ],
  },
  {
    title: ["Design Approval", "Согласование"],
    desc: [
      "We finalize the UI in Figma. Development starts only after you approve the design.",
      "Утверждаем визуал в Figma. Я начинаю код только после вашего одобрения макета.",
    ],
  },
  {
    title: ["Launch", "Запуск"],
    desc: [
      "Final setup, domain connection, and project handover with full instructions.",
      "Финальная настройка, запуск и передача всех доступов с четкими инструкциями.",
    ],
  },

  {
    title: ["QA Testing", "Тестирование"],
    desc: [
      "Comprehensive check for bugs and speed. I ensure everything works flawlessly.",
      "Полная проверка на ошибки и скорость. Я гарантирую стабильную работу проекта.",
    ],
  },
  {
    title: ["Development", "Разработка"],
    desc: [
      "I build a fast, clean-coded site that is fully responsive on all modern devices.",
      "Пишу быстрый и чистый код. Сайт будет идеально работать на всех устройствах.",
    ],
  },
];

const Steps = memo(function Reviews({ lang }: Props) {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndex = useActiveElement(refs);

  return (
    <Container id="process">
      <Title
        dir="left"
        desc={
          lang
            ? "Predictable process and high-quality results at every stage."
            : "Понятный процесс и качественный результат на каждом этапе."
        }
      >
        {lang ? "Collaborative Process Steps" : "Этапы совместной работы"}
      </Title>
      <div className="w-full gap-15 max-sm:gap-4 lg:grid-cols-3 grid-cols-2 grid">
        {steps.map((e, i) => (
          <Item
            ref={(el) => {
              refs.current[i] = el;
            }}
            ind={i}
            key={i}
            isActive={i === activeIndex}
            title={e.title[lang ? 0 : 1]}
            desc={e.desc[lang ? 0 : 1]}
          />
        ))}
      </div>
    </Container>
  );
});

export default Steps;
