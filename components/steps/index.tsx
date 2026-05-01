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
      "I analyze your business goals and audience to create a solid project foundation.",
      "Разбираю Ваши цели и аудиторию, чтобы заложить правильный фундамент проекта.",
    ],
  },
  {
    title: ["Strategy", "Стратегия"],
    desc: [
      "I plan the site structure and logic. I choose the best tech stack for your tasks.",
      "Планирую логику и структуру. Выбираю лучший стек технологий под Ваши задачи.",
    ],
  },
  {
    title: ["Design Approval", "Согласование"],
    desc: [
      "I finalize the UI in Figma. Development starts only after you approve the design.",
      "Финализирую визуал в Figma. Я начинаю код только после Вашего одобрения макета.",
    ],
  },
  {
    title: ["Development", "Разработка"],
    desc: [
      "I build a fast, clean-coded site that is fully responsive on all modern devices.",
      "Пишу быстрый и чистый код. Сайт будет идеально работать на всех устройствах.",
    ],
  },
  {
    title: ["QA Testing", "Тестирование"],
    desc: [
      "Comprehensive check for bugs and speed. I ensure everything works flawlessly.",
      "Провожу полную проверку на ошибки и скорость. Я гарантирую стабильную работу проекта.",
    ],
  },
  {
    title: ["Launch", "Запуск"],
    desc: [
      "Final setup, domain connection, and project handover with full instructions.",
      "Выполняю финальную настройку, запуск и передачу всех доступов с четкими инструкциями.",
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
