"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";
import { AppProvider } from "@/context/AppContext";
import ScrollProgress from "./scrollProgress";
import Script from "next/script";
import Footer from "./footer";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";
type Props = { children: React.ReactNode };

export default function Components({ children }: Props) {
  const [activeSection, setActiveSection] = useState<string>("home");

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
          console.log(activeSection);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sectionIds = [
      "home",
      "projects",
      "about",
      "services",
      "reviews",
      "contact",
      "faq",
    ];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <ScrollProgress />
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
        <AppProvider>
          <Header activeSection={activeSection} />
          {children}
          <Footer />
        </AppProvider>
      </ReactLenis>

      <span className="-z-10 dark:block hidden bg-radial from-[#060e0e] to-[#040505] left-0 top-0 fixed w-screen h-screen"></span>
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
