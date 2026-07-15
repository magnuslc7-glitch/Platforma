import React from "react";
import { motion } from "motion/react";
import { Sparkles, Languages, Gamepad2, Trophy, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface MethodSectionProps {
  onRegisterClick: () => void;
}

export default function MethodSection({ onRegisterClick }: MethodSectionProps) {
  const { language, t } = useLanguage();

  const steps = [
    {
      title: language === "uz" ? "Yevropa bola tili metodi" : language === "ru" ? "Европейская методика детского языка" : "European Child Language Method",
      desc: language === "uz" 
        ? "Bolalar grammatika qoidalarini yodlamasdan, harakatlar, maxsus 3D o'yinchoqlar va tasvirlar orqali ingliz tilini xuddi ona tilidek tabiiy o'zlashtiradi." 
        : language === "ru" 
        ? "Дети осваивают английский язык естественно, как родной, не заучивая правила грамматики, а через движения, специальные 3D-игрушки и изображения." 
        : "Children absorb English as naturally as their native language without memorizing grammar rules, using physical actions, special 3D toys, and visual images.",
      icon: Languages,
      color: "bg-sky-500 text-white shadow-sky-500/10",
    },
    {
      title: language === "uz" ? "97% Ingliz tili muhiti" : language === "ru" ? "97% Англоязычная среда" : "97% English Environment",
      desc: language === "uz" 
        ? "Dars davomida Ustozlar bolalarga 97% ingliz tilida murojaat qiladi. Bu bolada eshitib tushunish va tabiiy so'zlashish ko'nikmalarini kuchli qiladi." 
        : language === "ru" 
        ? "Во время урока преподаватели обращаются к детям на 97% на английском языке. Это развивает у ребенка сильные навыки аудирования и естественного общения." 
        : "During class, teachers address children 97% in English. This instills exceptionally strong listening comprehension and natural speaking habits.",
      icon: Sparkles,
      color: "bg-amber-400 text-slate-800 shadow-amber-400/10",
    },
    {
      title: language === "uz" ? "Qiziqarli o'yinlar" : language === "ru" ? "Интересные игры" : "Engaging Games",
      desc: language === "uz" 
        ? "Zodagon darslar va zerikarli darsliklar o'rniga bolaning tabiatiga moslashtirilgan qiziqarli mavzu-o'yinlar orqali darslar qiziqarli o'tadi." 
        : language === "ru" 
        ? "Вместо скучных учебников и заурядных лекций занятия проходят увлекательно благодаря интересным тематическим играм, адаптированным к детской природе." 
        : "Instead of dull textbooks and rigid lecturing, lessons are carried out through immersive theme-based games adapted to a child's natural behavior.",
      icon: Gamepad2,
      color: "bg-emerald-500 text-white shadow-emerald-500/10",
    },
    {
      title: language === "uz" ? "Mukofotlash tizimi" : language === "ru" ? "Система вознаграждений" : "Reward System",
      desc: language === "uz" 
        ? "Har bir darsda faol qatnashgan bolalar kichik sovg'alar bilan, har oy esa eng yuqori natijaga erishgan o'quvchilar yirik sovg'alar bilan rag'batlantiriladi." 
        : language === "ru" 
        ? "Дети, активно участвующие в каждом уроке, поощряются небольшими призами, а каждый месяц ученики с наилучшими результатами награждаются крупными подарками." 
        : "Children participating actively in every lesson are motivated with minor rewards, and top performers are honored with grand monthly prizes.",
      icon: Trophy,
      color: "bg-rose-500 text-white shadow-rose-500/10",
    },
  ];

  return (
    <section id="metodika" className="py-16 md:py-24 bg-slate-900 dark:bg-[#0d0f18] text-white relative overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute top-10 left-0 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">{t("method", "badge")}</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            {t("method", "title")}
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-semibold">
            {t("method", "subtitle")}
          </p>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-2xl bg-slate-950 p-6 border border-slate-800 hover:border-slate-700 transition h-[280px] group"
              >
                <div>
                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.color} mb-5 group-hover:scale-105 transition-all`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 mb-2 tracking-tight group-hover:text-sky-400 transition-colors">
                    {step.title}
                  </h3>
                  {/* Desc */}
                  <p className="text-xs md:text-sm text-slate-400 font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner inside Method */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-500 p-8 md:p-10 shadow-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
          <h3 className="text-2xl md:text-3xl font-black leading-tight text-white mb-3">
            {language === "uz" 
              ? "Bolangiz darslarimizga birinchi kundan oshiq bo'ladi!" 
              : language === "ru" 
              ? "Ваш ребенок влюбится в наши уроки с самого первого дня!" 
              : "Your child will fall in love with our classes from the very first day!"}
          </h3>
          <p className="text-sm md:text-base text-sky-100 font-semibold max-w-xl mx-auto mb-6">
            {language === "uz"
              ? "Buni o'zingiz sinab ko'rishingiz uchun birinchi darsimiz mutlaqo bepul. Joylar soni cheklangan."
              : language === "ru"
              ? "Чтобы вы могли убедиться в этом сами, первый урок совершенно бесплатный. Количество мест ограничено."
              : "To experience this yourself, our first trial lesson is absolutely free. Spots are strictly limited."}
          </p>
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-sm md:text-base font-extrabold text-sky-600 hover:bg-slate-50 transition active:scale-95 shadow-md shadow-slate-950/10 cursor-pointer"
          >
            {t("method", "btnAction")}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
