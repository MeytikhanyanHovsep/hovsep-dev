import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import Container from "../ui/container";
import Title from "../ui/title";
import { motion } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  reason: string;
  message: string;
  agreeToPolicy: boolean;
}

type Props = {
  lang: boolean;
};

function Contact({ lang }: Props) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    reason: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(lang ? "Message sent!" : "Сообщение отправлено!");
  };

  return (
    <Container id="contact" style=" max-w-2xl! pb-20">
      <Title
        dir="center"
        desc={
          lang
            ? "Have an idea or a project in mind? Reach out, and let’s turn your vision into reality."
            : "Есть идея или проект на примете? Напишите мне, и мы превратим ваше видение в реальность."
        }
      >
        {lang
          ? "Let’s build something great together."
          : "Давайте создавать великое вместе."}
      </Title>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 1 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{
          once: true,
          margin: "-30px 0px -30px 0px",
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="glass-panel rounded-2xl p-8 max-md:p-6 md:p-10 border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 backdrop-blur-md border duration-300 transition-colors "
      >
        <h2 className="text-xl font-medium text-white mb-8 tracking-tight">
          {lang ? "Write me a message" : "Напишите мне"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-400">
                {lang ? "Full name" : "Ваше имя"}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={lang ? "Jane Smith" : "Иван Иванов"}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-400">
                {lang ? "Email" : "Электронная почта"}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-400">
              {lang ? "Reason for contact" : "Цель обращения"}
            </label>
            <div className="relative">
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
                required
              >
                <option
                  value=""
                  disabled
                  className="bg-slate-900 text-slate-500"
                >
                  {lang ? "Please specify" : "Выберите вариант"}
                </option>
                <option value="project" className="bg-slate-900 text-white">
                  {lang ? "New Project" : "Новый проект"}
                </option>
                <option
                  value="consultation"
                  className="bg-slate-900 text-white"
                >
                  {lang ? "Consultation" : "Консультация"}
                </option>
                <option value="other" className="bg-slate-900 text-white">
                  {lang ? "Other" : "Другое"}
                </option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m19 9l-7 6l-7-6"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-400">
              {lang ? "How can I help you?" : "Чем я могу помочь?"}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={
                lang ? "Write your message here" : "Введите ваше сообщение"
              }
              rows={4}
              className="w-full resize-none bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all min-h-[120px]"
              required
            ></textarea>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <div className="relative flex items-start">
              <input
                type="checkbox"
                id="privacy-policy"
                name="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onChange={handleChange}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-white/20 bg-white/5 transition-all checked:border-emerald-500 checked:bg-emerald-500"
                required
              />
              <svg
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#050505] opacity-0 peer-checked:opacity-100 transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label
              htmlFor="privacy-policy"
              className="text-sm text-slate-400 cursor-pointer select-none"
            >
              {lang ? "I agree to the " : "Я согласен с "}
              <Link
                href="/privacy-policy"
                className="hover:text-emerald-300 underline hover:no-underline text-emerald-400"
              >
                {lang ? "privacy policy" : "политикой конфиденциальности"}
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#050505] font-medium px-8 py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-4"
          >
            {lang ? "Get in touch" : "Связаться со мной"}
          </button>
        </form>
      </motion.div>
    </Container>
  );
}

export default Contact;
