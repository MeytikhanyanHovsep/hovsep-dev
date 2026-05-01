"use client";
import { memo } from "react";
import Title from "../ui/title";
import Button, { ButtonVariant } from "../ui/button";
import Container from "../ui/container";
import Tech from "./tech";
import { motion } from "framer-motion";
type Props = { lang: boolean };

const About = memo(function About({ lang }: Props) {
  return (
    <Container id="about" style=" max-xl:overflow-x-clip">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative  z-10">
          <Title>
            {lang
              ? "Modern approach to development"
              : "Современный подход к разработке"}
          </Title>

          <motion.p
            initial={{ opacity: 0, y: 10, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{
              once: true,
              margin: "-150px 0px -150px 0px",
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="leading-relaxed text-md  first-letter:font-bold text-balance text-slate-400 max-w-lg mb-6  md:-mt-10"
          >
            {lang
              ? "Web developer specializing in modern client-side applications. I build responsive, user-friendly interfaces with a focus on clean code and project architecture."
              : "Веб-разработчик, специализируюсь на Frontend-части приложений. Создаю адаптивные интерфейсы, уделяя особое внимание чистоте кода и архитектуре проекта."}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{
              once: true,
              margin: "-150px 0px -150px 0px",
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="leading-relaxed  first-letter:font-bold text-md text-balance text-slate-400 max-w-lg md:mb-10 mb-5"
          >
            {lang
              ? "I focus on logic, performance, and user experience. My goal is to deliver clean, efficient solutions that prioritize the client's needs and project goals."
              : "Уделяю внимание логике, производительности и UX. Создаю эффективные решения без лишних усложнений, ориентируясь на бизнес-задачи и финальный результат."}
          </motion.p>

          <Button link="services" type={ButtonVariant.Secondary}>
            {lang ? "View Services" : "Посмотреть услуги"}
          </Button>
        </div>

        <Tech />
      </div>
    </Container>
  );
});

export default About;
