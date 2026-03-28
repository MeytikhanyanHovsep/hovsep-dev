import React, { useRef } from "react";
import { memo } from "react";

import Item from "./item";
import Title from "../ui/title";
import Container from "../ui/container";
type Props = { lang: boolean };

const reviews = [
  {
    name: "Mikhail",
    desc: [
      "Excellent contractor! Did everything quickly and with high quality, took all my wishes into account, fixed the website revisions promptly, and was always in touch. Definitely recommend this contractor!",
      "Отличный исполнитель! Сделал все быстро и качественно, все мои пожелания учел, доработки по сайту исправил быстро, всегда был на связи. Однозначно рекомендую данного исполнителя! !",
    ],
    img: "mikhail.webp",
  },

  {
    name: "Alex",
    desc: [
      "Great experience! Revisions were completed quickly, and I highly recommend this developer. I will definitely be working with him again!",
      "Отлично сработались правки выполнил быстро советую данного исполнителя, не первый раз буду обращаться!",
    ],
    img: "alex.webp",
  },
  {
    name: "Innovatix",
    desc: [
      "Highly satisfied with the cooperation: all revisions were implemented quickly and professionally. Great communication throughout.",
      "Полностью довольны сотрудничеством: все правки внесены оперативно и качественно. Отличная коммуникация на всех этапах.",
    ],
    img: "innovatixdev.webp",
  },
  {
    name: "Mher",
    desc: [
      "The task was to code a fairly complex website layout. The developer did a great job — everything was clear, precise, and fast! I really liked the final result, and the responsiveness works perfectly.",
      "Была задача создать вёрстку достаточно сложного сайта. хороший исполнитель, сделал все четко и быстро! Очень понравился макет, и адаптивность работает отлично.",
    ],
    img: "mher.webp",
  },
  {
    name: "Vladislav",
    desc: [
      "Excellent work! All revisions were completed quickly. Highly recommend this developer, and I will definitely be reaching out again!",
      "Отлично сработались! Все правки выполнены быстро. Советую данного исполнителя и определенно буду обращаться еще не раз!",
    ],
    img: "vladislav.webp",
  },

  {
    name: "Alexander",
    desc: [
      "The contractor approached the task responsibly, refined the website, and made their own positive adjustments in agreement with me! Definitely recommend working with them, and I’ll be reaching out to them again!",
      "Исполнитель ответсвенно отнесся к задаче, доработал сайт и внес свои положительные корректировки согласовав со мной! Однозначно рекомендую к сотрудничеству, и сам еще ни раз обращусь к нему!",
    ],
    img: "alexander.webp",
  },

  {
    name: "Ivan",
    desc: [
      "The work was done perfectly! Even as a picky client, I have no complaints. Great developer with a professional attitude — he handled all revisions until the very end and never let me down. Highly recommended!",
      "Работа выполнена на отлично! Придраться не к чему, хотя я придирчивый. Спасибо исполнителю за труд и отношение — внес все правки до победного и не подвел. Всем рекомендую, не прогадаете!",
    ],
    img: "ivan.webp",
  },
  {
    name: "Andrey Bolonin",
    desc: [
      "1) The task was to lay out a landing page according to the design \n 2) The contractor was always in touch \n 3) Promptly made all revisions — thank you! We’ll reach out again",
      "1) была задача сверстать лендинг по макету \n  2) исполнитель всегда был на связи \n 3) оперативно вносил все правки спасибо! будем обращаться",
    ],
    img: "andreybolinin.webp",
  },
];

const Reviews = memo(function Reviews({ lang }: Props) {
  return (
    <>
      <Container id="reviews">
        <Title
          dir="center"
          desc={
            lang
              ? "Results that speak for themselves."
              : "Результаты, которые подтверждают мою работу."
          }
        >
          {lang ? "Client Testimonials" : "Отзывы клиентов"}
        </Title>
      </Container>
      <div className="max-w-[100vw] overflow-hidden">
        <div className="flex swiper mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex mr-6 gap-5 will-change-transform reviews-group revers-group">
            {reviews.slice(0, reviews.length / 2).map((e, i) => (
              <Item
                key={i}
                name={e.name}
                desc={e.desc[lang ? 0 : 1]}
                img={e.img}
              />
            ))}
          </div>
          <div
            aria-hidden
            className="flex gap-5 will-change-transform reviews-group revers-group"
          >
            {reviews.slice(0, reviews.length / 2).map((e, i) => (
              <Item
                key={i}
                name={e.name}
                desc={e.desc[lang ? 0 : 1]}
                img={e.img}
              />
            ))}
          </div>
        </div>
        <div className="flex mt-5 swiper mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex mr-6 gap-5 will-change-transform reviews-group">
            {reviews.slice(reviews.length / 2).map((e, i) => (
              <Item
                key={i}
                name={e.name}
                desc={e.desc[lang ? 0 : 1]}
                img={e.img}
              />
            ))}
          </div>
          <div
            aria-hidden
            className="flex gap-5 will-change-transform reviews-group"
          >
            {reviews.slice(reviews.length / 2).map((e, i) => (
              <Item
                key={i}
                name={e.name}
                desc={e.desc[lang ? 0 : 1]}
                img={e.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Reviews;
