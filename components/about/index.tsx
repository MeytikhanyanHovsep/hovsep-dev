import { memo } from "react";
import Title from "../ui/title";
import Button, { ButtonVariant } from "../ui/button";
import Container from "../ui/container";
import Tech from "./tech";
import { motion } from "framer-motion";
type Props = { lang: boolean };

const About = memo(function About({ lang }: Props) {
  const cubes = [
    { logo: "github", color: "#ffffff", x: 2, y: 0, z: 0, ind: 9 },
    { logo: "docker", color: "#0033CC", x: 2, y: 1, z: 0, ind: 7 },
    { logo: "bootstrap", color: "#4B0082", x: 1, y: 1, z: 0, ind: 8 },
    { logo: "tailwind", color: "#005F87", x: 0, y: 2, z: 0, ind: 7 },
    { logo: "figma", color: "#991F00", x: 1, y: 2, z: 0, ind: 6 },
    { logo: "framer", color: "#000000", x: 2, y: 2, z: 0, ind: 4 },
    { logo: "nest", color: "#8B0000", x: 3, y: 2, z: 0, ind: 2 },
    { logo: "node", color: "#1A4D1A", x: 2, y: 2, z: 1, ind: 4 },
    { logo: "react", color: "#007A99", x: 3, y: 1, z: 3, ind: 4 },
    { logo: "next", color: "#000", x: 3, y: 2, z: 3, ind: 3 },
    { logo: "js", color: "#998500", x: 0, y: 2, z: 3, ind: 4 },
    { logo: "html", color: "#992E00", x: 0, y: 2, z: 2, ind: 3 },
    { logo: "css", color: "#002BB8", x: 1, y: 2, z: 3, ind: 3 },
    { logo: "ts", color: "#004B99", x: 3, y: 2, z: 2, ind: 2 },
  ];

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0,
            }}
            className="leading-relaxed text-md  first-letter:font-bold text-balance text-slate-400 max-w-lg mb-6  md:-mt-10"
          >
            {lang
              ? "Web developer specializing in modern client-side applications. I build responsive, user-friendly interfaces with a focus on clean code and project architecture."
              : "Веб-разработчик, специализируюсь на Frontend-части приложений. Создаю адаптивные интерфейсы, уделяя особое внимание чистоте кода и архитектуре проекта."}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0,
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
