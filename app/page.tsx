"use client";
import Main from "@/components/main";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

import { useApp } from "@/context/AppContext";

export default function Home() {
  const { lang } = useApp();

  return (
    <>
      <Main lang={lang} />
      <Projects lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Reviews lang={lang} />
      <Faq lang={lang} />

      {/* <Contact lang={lang} /> */}
    </>
  );
}
