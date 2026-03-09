"use client";

import React, { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";
import { HugeiconsIcon } from "@hugeicons/react";
import LegalLayout from "@/components/legal/layout";

import {
  InformationCircleIcon,
  CheckmarkSquare01Icon,
  Mail01Icon,
  FileSecurityIcon,
  TelegramIcon,
} from "@hugeicons/core-free-icons";

function PrivacyPolicy() {
  const { lang } = useApp();
  const myEmail = "meytikhanyan.hovsep@gmail.com";

  return (
    <LegalLayout
      title={["Privacy Policy", "Политика конфиденциальности"]}
      subtitle={[
        "Transparency about how I handle your personal data.",
        "Прозрачность в том, как я обрабатываю данные.",
      ]}
      updated="5 марта 2026 г."
    >
      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-lg text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            1
          </span>
          {lang ? "Information I Collect" : "Какие данные я собираю"}
        </h2>
        <p className="max-md:text-[16px]">
          {lang
            ? "I only collect information that you voluntarily provide through the contact form. This includes:"
            : "Я собираю только те данные, которые вы добровольно оставляете через форму связи. Это включает:"}
        </p>
        <ul className="list-none space-y-3 pl-2">
          {[
            lang ? "Name or username" : "Ваше имя или никнейм",
            lang ? "Email address" : "Адрес электронной почты",
            lang ? "Message content" : "Текст вашего сообщения",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <HugeiconsIcon
                strokeWidth={2}
                icon={CheckmarkSquare01Icon}
                className="text-emerald-500 mt-1 shrink-0"
                size={20}
              />
              <span className="max-md:text-[16px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-lg text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            2
          </span>
          {lang ? "How I Use Your Data" : "Как я использую данные"}
        </h2>
        <p className="max-md:text-[16px]">
          {lang
            ? "Your data is used exclusively for communication with you. Specifically to:"
            : "Ваши данные используются исключительно для связи с вами. А именно для:"}
        </p>
        <ul className="list-none space-y-3 pl-2">
          <li className="flex items-start gap-3">
            <HugeiconsIcon
              strokeWidth={2}
              icon={Mail01Icon}
              className="text-emerald-500 mt-1 shrink-0"
              size={20}
            />
            <span className="max-md:text-[16px]">
              {lang ? "Respond to your inquiries" : "Ответа на ваши запросы"}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <HugeiconsIcon
              strokeWidth={2}
              icon={FileSecurityIcon}
              className="text-emerald-500 mt-1 shrink-0"
              size={20}
            />
            <span className="max-md:text-[16px]">
              {lang ? "Discuss project details" : "Обсуждения деталей проекта"}
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-lg text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            3
          </span>
          {lang ? "Data Protection" : "Защита данных"}
        </h2>
        <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
          <HugeiconsIcon
            strokeWidth={2}
            icon={CheckmarkSquare01Icon}
            className="text-emerald-400 shrink-0"
            size={24}
          />
          <p className="text-sm md:text-base">
            {lang
              ? "I do not sell or share your personal information with third parties. I take all reasonable measures to protect your data from unauthorized access."
              : "Я не продаю и не передаю ваши данные третьим лицам. Я принимаю все разумные меры для защиты вашей информации от несанкционированного доступа."}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl max-md:text-lg text-white font-medium tracking-tight flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 aspect-square rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
            4
          </span>
          {lang ? "Contact" : "Контакты"}
        </h2>
        <p className="max-md:text-[16px]">
          {lang
            ? "If you want to delete your data or have questions, please contact me at:"
            : "Если вы хотите удалить свои данные или у вас есть вопросы, свяжитесь со мной по адресу:"}
        </p>
        <a
          href={`mailto:${myEmail}`}
          className="text-emerald-400 max-md:text-[14px] hover:text-emerald-300 transition-colors font-medium break-all"
        >
          {myEmail}
        </a>
      </div>
    </LegalLayout>
  );
}

export default PrivacyPolicy;
