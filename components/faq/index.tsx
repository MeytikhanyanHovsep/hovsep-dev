import React, { memo } from "react";
import Title from "../title";
import Item from "./item";

type Props = {
    lang: boolean;
};

type Item = {
    title: string[];
    description: string[];
};
const items: Item[] = [
    {
        title: [
            "Как начинается работа над проектом?",
            "How does the project process start?",
        ],
        description: [
            "Работа начинается с изучения макета и обсуждения деталей. Уточняются требования, адаптивность, интерактивные элементы и сроки выполнения.",
            "The process starts with reviewing the design and discussing the details. Requirements, responsiveness, interactive elements, and deadlines are clarified.",
        ],
    },
    {
        title: [
            "Работаете ли вы строго по макету?",
            "Do you follow the design strictly?",
        ],
        description: [
            "Да, верстка выполняется максимально точно по макету с соблюдением отступов, размеров, типографики и поведения элементов на разных экранах.",
            "Yes, the layout is implemented as close as possible to the design, including spacing, sizes, typography, and responsive behavior.",
        ],
    },
    {
        title: ["Будет ли сайт адаптивным?", "Will the website be responsive?"],
        description: [
            "Все проекты адаптируются под Desktop, Tablet и Mobile. Корректное отображение проверяется на разных разрешениях и устройствах.",
            "All projects are optimized for Desktop, Tablet, and Mobile devices. Proper display is tested across different screen sizes.",
        ],
    },
    {
        title: [
            "Как организован код проекта?",
            "How is the project code structured?",
        ],
        description: [
            "Код структурируется по компонентам и страницам. Используется SCSS с разделением на базовые стили, компоненты и страницы. Именование классов — на корректном английском языке.",
            "The code is structured by components and pages. SCSS is organized into base styles, components, and page-specific files. Class naming follows proper English conventions.",
        ],
    },
    {
        title: [
            "Можно ли доработать проект после запуска?",
            "Is it possible to update the project after launch?",
        ],
        description: [
            "Да, возможны доработки, расширение функционала и техническая поддержка после завершения основной разработки.",
            "Yes, further improvements, feature expansion, and technical support are available after the main development phase.",
        ],
    },
    {
        title: [
            "От чего зависит срок выполнения?",
            "What does the development timeline depend on?",
        ],
        description: [
            "Срок определяется объемом страниц, сложностью интерфейса и наличием интерактивных элементов. Точные сроки обсуждаются после ознакомления с макетом.",
            "The timeline depends on the number of pages, interface complexity, and required interactive elements. Exact deadlines are discussed after reviewing the design.",
        ],
    },
    {
        title: [
            "Предоставляете ли вы поддержку после сдачи проекта?",
            "Do you provide post-launch support?",
        ],
        description: [
            "После сдачи проекта возможна техническая поддержка, исправление ошибок и небольшие доработки по договоренности.",
            "After project delivery, technical support, bug fixes, and minor improvements can be provided upon agreement.",
        ],
    },
];

const Faq = memo(function Faq({ lang }: Props) {
    return (
        <section id="faq" className="relative py-30 max-md:py-10 max-2xl:py-20">
            <div className="grid -z-1 gap-[2px] max-md:top-0 absolute bottom-[-10%] left-[5%] max-w-max grid-cols-2 ">
                <div className="rounded-[3px] max-md:w-[50px]  bg-primary/7 w-[70px] aspect-square"></div>
                <div className="rounded-[3px] max-md:w-[50px] row-end-3 col-end-3 bg-primary/7 w-[70px] aspect-square"></div>
            </div>
            <div className="grid -z-1 gap-[2px] max-md:top-[5%] absolute top-[-5%] right-[8%] max-w-max grid-cols-2 ">
                <div className="rounded-[3px] max-md:w-[50px] bg-primary/7 w-[70px] aspect-square"></div>
                <div className="rounded-[3px] max-md:w-[50px] row-end-3 col-end-3 bg-primary/7 w-[70px] aspect-square"></div>
            </div>
            <div className="grid -z-1 gap-[2px] max-md:right-[7%] max-md:bottom-[15%] absolute bottom-[-10%] right-[15%] max-w-max grid-cols-2 ">
                <div className="rounded-[3px] max-md:w-[50px] bg-primary/7 col-end-3 w-[70px] aspect-square"></div>
                <div className="rounded-[3px] max-md:w-[50px] bg-primary/7 w-[70px] aspect-square"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-[150px] w-[100px] aspect-square bg-radial max-lg:h-[50%] max-lg:scale-[2] from-primary/15 to-transparent blur-xs scale-[7] -z-1 pointer-events-none will-change-transform" />

            <div className="container">
                <Title index={3}>{lang ? "FAQ" : "Вопросы"}</Title>

                <div className="grid max-md:grid-cols-1 grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5">
                        {items.slice(0, (items.length + 1) / 2).map((e, i) => (
                            <Item
                                key={i}
                                title={lang ? e.title[1] : e.title[0]}
                                description={
                                    lang ? e.description[1] : e.description[0]
                                }
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {items.slice((items.length + 1) / 2).map((e, i) => (
                            <Item
                                key={i}
                                title={lang ? e.title[1] : e.title[0]}
                                description={
                                    lang ? e.description[1] : e.description[0]
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Faq;
