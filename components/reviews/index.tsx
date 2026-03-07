import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from "react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import { Pagination, Navigation } from "swiper/modules";
import Item from "./item";
import Title from "../ui/title";
import Container from "../ui/container";
type Props = { lang: boolean };

const Reviews = memo(function Reviews({ lang }: Props) {
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
      name: "Alexander",
      desc: [
        "The contractor approached the task responsibly, refined the website, and made their own positive adjustments in agreement with me! Definitely recommend working with them, and I’ll be reaching out to them again myself!",
        "Исполнитель ответсвенно отнесся к задаче, доработал сайт и внес свои положительные корректировки согласовав со мной! Однозначно рекомендую к сотрудничеству, и сам еще ни раз обращусь к нему!",
      ],
      img: "alexander.webp",
    },
    {
      name: "Innovatix",
      desc: [
        "Satisfied with the cooperation, revisions were made promptly, thanks)",
        "Довольны с сотрудничеством, правки были сделаны оперативно, спасибо)",
      ],
      img: "innovatixdev.webp",
    },

    {
      name: "Alex",
      desc: [
        "Laid out a large project very quickly. All comments were promptly fixed.",
        "Разверстал большой проект очень быстро. Все замечания оперативно правились.",
      ],
      img: "alex.webp",
    },
    {
      name: "Andrey",
      desc: [
        "Fast, high quality, on time — the order was well done.",
        "Быстро, качественно, в сроки, хорошо выполнен заказ",
      ],
      img: "andrey.webp",
    },
    {
      name: "Andrey Bolonin",
      desc: [
        "1) The task was to lay out a landing page according to the design \n 2) The contractor was always in touch \n 3) Promptly made all revisions — thank you! We’ll reach out again",
        "1) была задача сверстать лендинг по макету \n  2) исполнитель всегда был на связи \n 3) оперативно вносил все правки спасибо! будем обращаться",
      ],
      img: "andreybolinin.webp",
    },

    {
      name: "Mher",
      desc: [
        "The specialist did everything well, responds quickly to all questions, and explains everything clearly. I really liked it — I’ll continue working with this freelancer.",
        "Специалист выполнил все хорошо, отвечает оперативно по всем вопросам отвечает понятным языком. Все очень понравилось, буду и дальше сотрудничать с этим фрилансером.",
      ],
      img: "mher.webp",
    },
  ];
  const swiperRef = useRef<any>(null);
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
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
          modules={[Autoplay, FreeMode]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              speed: 3000,
            },
          }}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          className="mySwiper"
        >
          {reviews.map((e, i) => (
            <SwiperSlide key={i} className="h-full">
              <Item name={e.name} desc={e.desc[lang ? 0 : 1]} img={e.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
});

export default Reviews;
