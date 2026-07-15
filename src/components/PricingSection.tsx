import React, { useState, useEffect } from "react";
import { Check, Percent, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PricingSectionProps {
  onRegisterClick: (courseName: string) => void;
}

export default function PricingSection({ onRegisterClick }: PricingSectionProps) {
  const { language, t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 1 hour in seconds

  useEffect(() => {
    const STORAGE_KEY = "magnus_pricing_timer_session_expiry";
    let expiry = sessionStorage.getItem(STORAGE_KEY);

    if (!expiry) {
      // Set expiry to 1 hour from now (when the user enters the platform)
      const now = Date.now();
      const oneHour = 60 * 60 * 1000;
      expiry = (now + oneHour).toString();
      sessionStorage.setItem(STORAGE_KEY, expiry);
    }

    const interval = setInterval(() => {
      const remainingMs = parseInt(expiry!) - Date.now();
      if (remainingMs <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(Math.floor(remainingMs / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const inclusions = [
    t("pricing", "bonus1"),
    t("pricing", "bonus2"),
    t("pricing", "bonus3"),
    t("pricing", "bonus4"),
    language === "uz" ? "Eng faol o'quvchilar uchun oylik sovg'alar va sertifikatlar" : language === "ru" ? "Ежемесячные подарки и сертификаты для самых активных учеников" : "Monthly gifts and certificates for top active students",
    language === "uz" ? "Darslarni o'zlashtirishda ortda qolsa, yordamchi ustoz darsi" : language === "ru" ? "Уроки поддержки от ассистента преподавателя, если ребенок отстает" : "Support lessons from assistant teacher if the child falls behind"
  ];

  return (
    <section id="maxsus-chegirma" className="py-16 md:py-24 bg-slate-50 dark:bg-[#0f131f] relative overflow-hidden transition-colors duration-300">

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">{t("pricing", "badge")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
            {t("pricing", "titleStart")}
            <span className="text-rose-500">{t("pricing", "titleHighlight")}</span>
            {t("pricing", "titleEnd")}
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            {t("pricing", "subtitle")}
          </p>
          <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full" />
        </div>

        {/* Pricing Container */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-white dark:bg-[#161c2e] border border-slate-100 dark:border-slate-800/80 shadow-xl overflow-hidden transition-colors duration-300">
          {/* Left Block: Offer Inclusions */}
          <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 px-3 py-1 text-xs font-bold text-sky-600 dark:text-sky-400 mb-3">
                <Sparkles className="h-4 w-4 text-amber-500" />
                {language === "uz" ? "Step Tarifi" : language === "ru" ? "Тариф Step" : "Step Plan"}
              </span>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
                {t("pricing", "bonusTitle")}
              </h3>
              <p className="mt-1 text-xs md:text-sm text-slate-400 dark:text-slate-500 font-bold">
                {language === "uz" ? "Bu faqatgina dars emas — bu farzandingiz til bilishi uchun mukammal bir poydevor!" : language === "ru" ? "Это не просто урок, это отличный фундамент для изучения языка вашим ребенком!" : "This is not just a class — this is a solid foundation for your child's language mastery!"}
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-left">
                  <div className="rounded-full bg-sky-50 dark:bg-sky-950/30 p-1 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block: Price card with Countdown Timer */}
          <div className="lg:col-span-5 bg-slate-900 p-6 md:p-8 text-white flex flex-col justify-between text-center relative overflow-hidden">
            {/* Top orange gradient bar decoration */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 to-rose-500" />

            <div className="space-y-6">
              {/* Timer badge */}
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-amber-300">
                <Clock className="h-4 w-4 text-amber-400 animate-pulse" />
                <span>{t("pricing", "limitedTime")}</span>
                <span className="font-mono text-sm font-black text-amber-300">{formatTime(timeLeft)}</span>
              </div>

              {/* Price Details */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase">{language === "uz" ? "Oylik To'lov:" : language === "ru" ? "Ежемесячный Платеж:" : "Monthly Payment:"}</div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-base md:text-lg font-bold text-slate-400 line-through">
                    375.000 {language === "uz" ? "so'm" : language === "ru" ? "сум" : "soum"}
                  </span>
                  <span className="rounded-lg bg-rose-500/20 border border-rose-500/30 px-2 py-0.5 text-xs font-bold text-rose-400 flex items-center gap-0.5">
                    <Percent className="h-3 w-3" />
                    21% {language === "uz" ? "Chegirma" : language === "ru" ? "Скидка" : "Discount"}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mt-4">{language === "uz" ? "Chegirma narxi:" : language === "ru" ? "Цена со скидкой:" : "Discount price:"}</div>
                <div className="text-4xl md:text-5xl font-black tracking-tight text-white pt-1">
                  296.250 <span className="text-lg font-bold text-slate-400">{language === "uz" ? "so'm" : language === "ru" ? "сум" : "soum"}</span>
                </div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-widest mt-1">
                  {t("pricing", "seatsLeft")}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
                  {language === "uz" 
                    ? "*Chegirma faqat sinov darsidan so'ng 1 soat ichida guruhga yozilib, to'lovni amalga oshirgan ota-onalar uchun birinchi oyga joriy etiladi." 
                    : language === "ru" 
                    ? "*Скидка предоставляется на первый месяц только для родителей, которые запишутся в группу и произведут оплату в течение 1 часа после пробного урока." 
                    : "*The discount is applied to the first month only for parents who enroll in a group and make payment within 1 hour after the trial lesson."}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onRegisterClick("")}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-6 py-4 text-base font-extrabold text-slate-900 shadow-xl shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-400/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              {t("pricing", "btnCta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
