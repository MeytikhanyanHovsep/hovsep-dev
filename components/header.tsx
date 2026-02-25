"use client";
import Link from "next/link";
import React, { useState, ReactNode, memo } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Home02Icon,
    UserIcon,
    Settings03Icon,
    LayerIcon,
    GithubIcon,
    TelegramIcon,
    StarIcon,
    Call02Icon,
    Globe02Icon,
    Message01Icon,
    MenuSquareIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

type Props = {
    lang: boolean;
    changeLang: any;
    activeSection: string;
};

const navigation: any = {
    home: "Главная",
    about: "Кто я",
    projects: "Проекты",
    services: "Услуги",
    reviews: "Отзывы",
    faq: "Вопросы",
    contacts: "Контакты",
};

const iconStyles =
    "w-[20px] max-2xl:h-[18px] max-2xl:mt-[2px] max-lg:w-[22px] max-lg:h-[22px] max-2xl:w-[18px] h-[20px] mb-[3px] pointer-events-none";
const icons: ReactNode[] = [
    <HugeiconsIcon strokeWidth={2} icon={Home02Icon} className={iconStyles} />,
    <HugeiconsIcon strokeWidth={2} icon={UserIcon} className={iconStyles} />,
    <HugeiconsIcon strokeWidth={2} icon={LayerIcon} className={iconStyles} />,
    <HugeiconsIcon
        strokeWidth={2}
        icon={Settings03Icon}
        className={iconStyles}
    />,
    <HugeiconsIcon
        strokeWidth={2}
        icon={StarIcon}
        className={iconStyles + " scale-[0.95]"}
    />,
    <HugeiconsIcon
        strokeWidth={2}
        icon={Message01Icon}
        className={iconStyles + " scale-[0.95]"}
    />,
    <HugeiconsIcon strokeWidth={2} icon={Call02Icon} className={iconStyles} />,
];

const Header = memo(function Header({
    lang,
    changeLang,
    activeSection,
}: Props) {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    const handleScroll = (id: string): any => {
        console.log(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            window.history.pushState(null, "", window.location.pathname);
        }
        setTimeout(() => {
            setMenuToggle(false);
        }, 300);

        return;
    };

    return (
        <>
            <motion.header className="container  z-200 absolute lg:fixed top-0 max-2xl:py-2 py-4 left-1/2 -translate-x-1/2">
                <div className=" px-10 flex z-20 justify-between max-2xl:px-6 bg-linear-to-t to-black/30 from-white/5 rounded-full gap-[30px] max-2xl:py-[10px] py-[13px] items-center backdrop-blur-lg ">
                    <Link
                        href="/"
                        className="nunito flex items-center capitalize"
                    >
                        <Image
                            src="/images/icons/logo.svg"
                            className="object-contain max-2xl:max-w-[43px] max-w-[60px]"
                            width={100}
                            height={50}
                            alt="Hovsep"
                        />
                    </Link>
                    <nav className=" max-lg:hidden">
                        <ul className="flex justify-between items-center">
                            {Object.keys(navigation).map(
                                (e: string, i: number) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => handleScroll(e)}
                                            className={`flex capitalize primary-hover transition-colors duration-300 ease-in-out px-[15px] py-2 max-2xl:py-[6px] rounded-full max-2xl:text-[14px] hover:text-primary max-2xl:px-[10px]  bg-linear-to-b cursor-pointer items-center gap-[5px] ${
                                                i == 0 ? "primary" : ""
                                            } ${
                                                activeSection == e
                                                    ? "text-primary from-primary/7 via-primary/10 shadow-md shadow-white/3 to-dark/7"
                                                    : "text-white "
                                            }`}
                                        >
                                            {icons[i] || null}
                                            {lang ? e : navigation[e]}
                                        </button>
                                    </li>
                                ),
                            )}
                        </ul>
                    </nav>

                    <div className="flex max-2xl:gap-[15px] gap-[20px] text transiton-colors duration-300 items-center">
                        <a
                            href="https://github.com/MeytikhanyanHovsep"
                            target="_blank"
                        >
                            <HugeiconsIcon
                                strokeWidth={2}
                                icon={GithubIcon}
                                className="max-2xl:w-[20px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] "
                            />
                        </a>

                        <a
                            href="https://t.me/Meytikhanyan_Hovsep"
                            target="_blank"
                        >
                            <HugeiconsIcon
                                strokeWidth={2}
                                icon={TelegramIcon}
                                className="max-2xl:w-[20px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] "
                            />
                        </a>
                        <HugeiconsIcon
                            strokeWidth={2}
                            icon={Globe02Icon}
                            onClick={changeLang}
                            className="max-2xl:w-[20px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] "
                        />
                    </div>
                </div>
            </motion.header>
            <nav className=" fixed hidden max-lg:block bottom-[-2px] w-screen z-999 left-0 bg-dark/50 backdrop-blur-md">
                <motion.ul
                    initial={{ height: 0, padding: "0 15px" }}
                    animate={
                        menuToggle
                            ? { height: "auto", padding: "8px 15px" }
                            : { height: 0, padding: "0 15px" }
                    }
                    className={`flex w-full max-w-[500px] mx-auto px-[15px] overflow-hidden items-start flex-col  border-b border-white/10 ${menuToggle?"border-t":""}`}
                >
                    {Object.keys(navigation)
                        .slice(4, 8)
                        .map((e: string, i: number) => (
                            <li key={i} className="w-full ">
                                <button
                                    onClick={() => handleScroll(e)}
                                    className={`flex  capitalize primary-hover transition-colors duration-300 ease-in-out px-[15px] py-2 max-2xl:py-[6px] rounded-full text-[12px] hover:text-primary max-2xl:pl-[11px] max-2xl:pr-[13px]  bg-linear-to-b cursor-pointer items-center  ${
                                        i == 0 ? "primary" : ""
                                    } ${
                                        activeSection == e
                                            ? "text-primary from-primary/7 via-primary/10 shadow-md shadow-white/3 to-dark/7"
                                            : "text-white "
                                    }`}
                                >
                                    {icons[i + 4] || null}
                                    <span className="pointer-events-none whitespace-nowrap ml-2 inline-block">
                                        {lang ? e : navigation[e]}
                                    </span>
                                </button>
                            </li>
                        ))}
                </motion.ul>
                <ul className="flex py-3 w-full max-w-[500px] mx-auto px-[15px] justify-between items-center">
                    {Object.keys(navigation)
                        .slice(0, 4)
                        .map((e: string, i: number) => (
                            <li
                                key={i}
                                className="w-full  grid place-items-center"
                            >
                                <button
                                    onClick={() => handleScroll(e)}
                                    className={`flex  capitalize primary-hover transition-colors duration-300 ease-in-out px-[15px] py-2 max-2xl:py-[6px] rounded-full text-[12px] hover:text-primary max-2xl:pl-[11px] max-2xl:pr-[13px]  bg-linear-to-b cursor-pointer items-center  ${
                                        i == 0 ? "primary" : ""
                                    } ${
                                        activeSection == e
                                            ? "text-primary from-primary/7 via-primary/10 shadow-md shadow-white/3 to-dark/7"
                                            : "text-white "
                                    }`}
                                >
                                    {icons[i] || null}
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={
                                            activeSection === e
                                                ? {
                                                      width: "auto",
                                                      opacity: 1,
                                                      marginLeft: 5,
                                                  }
                                                : {
                                                      width: 0,
                                                      opacity: 0,
                                                      marginLeft: 0,
                                                  }
                                        }
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="pointer-events-none overflow-hidden whitespace-nowrap inline-block"
                                    >
                                        {lang ? e : navigation[e]}
                                    </motion.span>
                                </button>
                            </li>
                        ))}
                    <li className="w-full grid place-items-center">
                        <button
                            onClick={() => setMenuToggle(!menuToggle)}
                            className={`flex  capitalize primary-hover transition-colors duration-300 ease-in-out p-2 max-2xl:p-[6px] rounded-full text-[12px] hover:text-primary aspect-square!  bg-linear-to-b cursor-pointer items-center         ${
                                menuToggle
                                    ? "text-primary from-primary/7 via-primary/10 shadow-md shadow-white/3 to-dark/7"
                                    : "text-white "
                            }`}
                        >
                            <span className="max-2xl:px-[2px] scale-95">
                                <HugeiconsIcon
                                    strokeWidth={2}
                                    icon={MenuSquareIcon}
                                    className={iconStyles}
                                />
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
});
export default Header;
