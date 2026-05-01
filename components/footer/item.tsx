import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FooterLink } from ".";

type Props = { elements: FooterLink[]; title: string; lang: boolean };

export default function Item({ elements, title, lang }: Props) {
  const path = usePathname();
  const { setLang } = useApp();

  const handleScroll = (id: string): unknown => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: elements[0].item[0] == "layout" ? "center" : "start",
      });

      window.history.pushState(null, "", window.location.pathname);
    }

    return;
  };

  return (
    <div>
      <h4 className="text-white font-medium whitespace-nowrap mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-slate-400">
        {elements.map((e: FooterLink, i) => {
          return (
            <li key={i}>
              {path == "/" || e.type == "lang" ? (
                <button
                  onClick={() => {
                    if (e.type == "lang") {
                      setLang(!i);
                    } else {
                      handleScroll(e.item[0]);
                    }
                  }}
                  className="hover:text-emerald-400 whitespace-nowrap cursor-pointer capitalize transition-colors"
                >
                  {lang ? e.item[0] : e.item[1]}
                </button>
              ) : (
                <Link
                  href={"/"}
                  className="hover:text-emerald-400 whitespace-nowrap cursor-pointer capitalize transition-colors"
                >
                  {lang ? e.item[0] : e.item[1]}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
