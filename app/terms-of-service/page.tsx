"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InformationCircleIcon,
  CheckmarkSquare01Icon,
  Mail01Icon,
  TelegramIcon,
  JusticeScale02Icon,
} from "@hugeicons/core-free-icons";
import LegalLayout from "@/components/legal/layout";

function TermsOfService() {
  const { lang } = useApp();
  const myEmail = "meytikhanyan.hovsep@gmail.com";

  return (
    <LegalLayout
      title={["Terms of Service", "Условия использования"]}
      subtitle={[
        "Rules and guidelines for using this website.",
        "Правила и рекомендации по использованию сайта.",
      ]}
      updated="7 марта 2026 г."
    >
      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-xl text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            1
          </span>
          {lang ? "Acceptance of Terms" : "Принятие условий"}
        </h2>
        <p>
          {lang
            ? "By accessing this website, you agree to be bound by these terms. If you do not agree, please do not use this site."
            : "Используя этот сайт, вы соглашаетесь с данными условиями. Если вы не согласны, пожалуйста, не используйте этот сайт."}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-xl text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            2
          </span>
          {lang ? "Usage Guidelines" : "Правила использования"}
        </h2>
        <ul className="list-none space-y-3 pl-2">
          {[
            lang
              ? "Do not use the site for illegal activities."
              : "Не используйте сайт для незаконной деятельности.",
            lang
              ? "Do not attempt to disrupt site functionality."
              : "Не пытайтесь нарушить работу сайта.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <HugeiconsIcon
                icon={CheckmarkSquare01Icon}
                className="text-emerald-500 mt-1 shrink-0"
                size={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-xl text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            3
          </span>
          {lang ? "Limitation of Liability" : "Ограничение ответственности"}
        </h2>
        <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
          <HugeiconsIcon
            icon={JusticeScale02Icon}
            className="text-emerald-400 shrink-0"
            size={24}
          />
          <p className="text-sm md:text-base">
            {lang
              ? "The site is provided 'as is'. I am not responsible for any damages resulting from the use of this website."
              : "Сайт предоставляется на условиях 'как есть'. Я не несу ответственности за любой ущерб, возникший в результате использования данного сайта."}
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}

export default TermsOfService;
