import React, { memo, useState } from "react";
import Item from "./item";
import Container from "../ui/container";
import { motion } from "framer-motion";

type Props = {
  lang: boolean;
};

type Item = {
  title: string[];
  description: string[];
};
const items: Item[] = [
  {
    title: ["Как начинается работа?", "How does the process start?"],
    description: [
      "Работа начинается с анализа макета и обсуждения логики. Мы уточняем требования к адаптивности и интерактивным элементам для точной оценки сроков.",
      "The process starts with design analysis and logic discussion. We clarify requirements for responsiveness and interactivity to set precise deadlines.",
    ],
  },
  {
    title: [
      "Соблюдается ли точность макета?",
      "Is the design followed strictly?",
    ],
    description: [
      "Да, гарантирую Pixel Perfect верстку. Все отступы, шрифты и поведение элементов будут в точности соответствовать вашему дизайну в Figma.",
      "Yes, I guarantee Pixel Perfect implementation. All spacing, typography, and element behavior will strictly match your Figma design.",
    ],
  },
  {
    title: ["Будет ли сайт адаптивным?", "Will the website be responsive?"],
    description: [
      "Все интерфейсы разрабатываются по принципу Mobile-first и корректно отображаются на любых устройствах — от смартфонов до широкоформатных мониторов.",
      "All interfaces are developed using the Mobile-first approach, ensuring perfect display on everything from smartphones to ultrawide monitors.",
    ],
  },
  {
    title: ["Как организован код проекта?", "How is the code structured?"],
    description: [
      "Использую компонентный подход (React/Next.js) и TypeScript. Код чистый, масштабируемый и типизированный, что исключает большинство ошибок при поддержке.",
      "I use a component-based approach (React/Next.js) and TypeScript. The code is clean, scalable, and typed, which prevents most maintenance errors.",
    ],
  },
  {
    title: [
      "От чего зависит срок выполнения?",
      "What determines the timeline?",
    ],
    description: [
      "Срок зависит от количества страниц и сложности анимаций. После ознакомления с макетом я называю финальную дату, которой строго придерживаюсь.",
      "The timeline depends on the number of pages and animation complexity. After reviewing the design, I provide a final deadline that I strictly follow.",
    ],
  },
  {
    title: [
      "Обеспечиваете ли вы высокую скорость?",
      "Do you ensure high performance?",
    ],
    description: [
      "Да, уделяю особое внимание оптимизации. Высокие показатели в Core Web Vitals и быстрая загрузка — приоритет для каждого моего проекта.",
      "Yes, I pay special attention to optimization. High Core Web Vitals scores and fast loading times are a priority for every project I build.",
    ],
  },
  {
    title: [
      "Возможны ли правки после запуска?",
      "Are updates possible after launch?",
    ],
    description: [
      "Конечно. Я открыт для расширения функционала или внесения изменений в проект даже после того, как основная работа была успешно сдана.",
      "Of course. I am open to expanding functionality or making changes to the project even after the main work has been successfully delivered.",
    ],
  },
  {
    title: ["Предоставляете ли вы поддержку?", "Do you provide support?"],
    description: [
      "Обеспечиваю техническую поддержку после деплоя: исправление багов и консультации по работе сайта включены в процесс взаимодействия.",
      "I provide technical support after deployment: bug fixes and consultations on website operation are included in the process.",
    ],
  },
];

const Faq = memo(function Faq({ lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <Container id="faq">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{
            once: true,
            margin: "-30px 0px -30px 0px",
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border border-white/10 bg-[#0A0C10]/60 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 border-b border-white/10">
            <div className="md:p-10 md:border-b-0 md:border-r border-white/10 border-b p-6">
              <h2 className="text-2xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                {lang ? "Your Questions, Answered" : "Ответы на ваши вопросы"}
              </h2>
              <p className="text-slate-400 max-md:text-[14px]">
                {lang
                  ? "Find everything you need to know about development process, support, and tech stack."
                  : "Все, что вам нужно знать о процессе разработки, поддержке и технологиях."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {items.map((e, i) => (
              <Item
                openIndex={openIndex}
                ind={i}
                setOpenIndex={setOpenIndex}
                key={i}
                title={lang ? e.title[1] : e.title[0]}
                description={lang ? e.description[1] : e.description[0]}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </>
  );
});

export default Faq;
