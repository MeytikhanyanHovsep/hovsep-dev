"use client";
import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import About from "./about";
import Services from "./services";
import Projects from "./projects";
import Image from "next/image";

type Props = { children: React.ReactNode };

export default function Components({ children }: Props) {
    const [lang, setLang] = useState<string>("ru");

    return (
        <>
            <Header
                lang={lang == "eng"}
                changeLang={() =>
                    setLang((e: string) => (e == "ru" ? "eng" : "ru"))
                }
            />
            <Main lang={lang == "eng"} />
            <About lang={lang == "eng"} />
            <Projects lang={lang == "eng"} />
            <Services lang={lang == "eng"} />
            <p className="mt-20 container text-[30px]">
                нужно делать такое, но в стилистике сайта
            </p>

            <Image
                src="/images/reviews.png"
                width={1500}
                height={500}
                alt="x"
                className="container"
            />
            <p className="mt-20 container text-[30px]">
                нужно делать такое, но в стилистике сайта
            </p>

            <Image
                src="/images/test.png"
                width={1500}
                height={500}
                alt="x"
                className="container"
            />
            <p className="mt-20 container text-[30px]">
                в header подабрать подходяшие иконки для контакты и отзыви из
                сайта -
                <br />
                <a
                    className="underline text-[blue]"
                    href="https://lucide.dev/icons/"
                >
                    https://lucide.dev/icons/
                </a>
            </p>
            <p className="mt-20 container text-[30px]">
                в сайте исползвать второй цвет{" "}
                <span className="text-secondary">"#ffaa00"</span> в некоторых
                местах, в маленких елементах как например в About
            </p>
            <p className="mt-20 container text-[30px]">
                Сделать логитип лучше и поменять цвета, чтобы можно было скачать
                как svg. Ну и конечно исползвать в header и footer <br />
                <a
                    href="/images/logo.png"
                    className="underline mr-4 text-[blue]"
                    download="logo.png"
                >
                    Скачать Изображение
                </a>
                <img className="w-[100px] inline" src="/images/logo.png" />
            </p>
            <p className="mt-20 container text-[30px]">
                сделдать випадаючий список для Услугов в header
            </p>
            <p className="mt-20 container text-[30px]">
                в фигме немного редактировал 3 footer и получил етот
                <br />
                <a
                    className="underline text-[blue]"
                    href="https://www.figma.com/community/file/1241430319238396976/web-footer-templates"
                >
                    https://www.figma.com/community/file/1241430319238396976/web-footer-templates
                </a>
            </p>
            <Image
                src="/images/footer.png"
                width={1500}
                height={500}
                alt="x"
                className="container"
            />
        </>
    );
}
