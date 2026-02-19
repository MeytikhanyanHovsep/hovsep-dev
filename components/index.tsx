"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./header";
import Main from "./main";
import About from "./about";
import Services from "./services";
import Projects from "./projects";
import Reviews from "./reviews";
import Footer from "./footer";
import Script from "next/script";
type Props = { children: React.ReactNode };

export default function Components({ children }: Props) {
    const [lang, setLang] = useState<string>("ru");
    const [activeSection, setActiveSection] = useState<string>("home");
    const audioRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        const sectionIds = [
            "home",
            "about",
            "projects",
            "services",
            "reviews",
            "contacts",
        ];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 50;

            if (scrolledToBottom) {
                setActiveSection("contacts");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header
                activeSection={activeSection}
                lang={lang === "eng"}
                changeLang={() =>
                    setLang((prev) => (prev === "ru" ? "eng" : "ru"))
                }
            />
            <Main lang={lang === "eng"} />
            <About lang={lang === "eng"} />
            <Projects lang={lang === "eng"} />
            <Services lang={lang === "eng"} />
            <Reviews lang={lang === "eng"} />
            <Footer lang={lang === "eng"} />
            <audio ref={audioRef} loop src="/background/back.mp3" />

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-GYFHZNX2S1"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GYFHZNX2S1');
          `}
            </Script>
        </>
    );
}
