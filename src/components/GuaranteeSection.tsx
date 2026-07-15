import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function GuaranteeSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0f131f] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-6 md:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Background shield graphic blur */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: Golden shield decoration */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-900 shadow-xl shadow-amber-500/20 animate-pulse">
                <ShieldCheck className="h-14 w-14 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-sm font-black text-amber-400 tracking-widest uppercase">
                  {language === "uz" ? "100% KAFOLAT" : language === "ru" ? "100% ГАРАНТИЯ" : "100% GUARANTEE"}
                </span>
                <p className="text-2xs text-slate-400 font-semibold mt-1">
                  {language === "uz" ? "1 Oy Ko'nglingiz To'q Bo'lsin" : language === "ru" ? "Спокойствие в течение 1 месяца" : "Peace of mind for 1 month"}
                </p>
              </div>
            </div>

            {/* Right side: Terms and description */}
            <div className="md:col-span-8 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  {language === "uz" ? "Bizning Va'damiz" : language === "ru" ? "Наше обещание" : "Our Promise"}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight leading-none">
                  {language === "uz" 
                    ? "Ta'lim metodikamiz va natijaga 100%lik kafolat beramiz!" 
                    : language === "ru" 
                    ? "Мы даем 100% гарантию на методику обучения и результаты!" 
                    : "We give a 100% guarantee on our teaching methodology and results!"}
                </h3>
              </div>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold">
                {language === "uz"
                  ? "Hech kim pulni osondan topmaydi. Shu sababli ham ishonchingiz komil va ko'nglingiz to'q bo'lishi uchun 1 oylik 100%lik pul qaytarish kafolatini taklif qilamiz."
                  : language === "ru"
                  ? "Никто не зарабатывает деньги легко. Поэтому, чтобы вы были уверены и спокойны, мы предлагаем 100% гарантию возврата денег в течение 1 месяца."
                  : "Nobody earns money easily. That's why, to make you feel confident and secure, we offer a 1-month 100% money-back guarantee."}
              </p>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold">
                {language === "uz"
                  ? "Farzandingizni 1 oy darslarimizda o'qiting va natijalarini shaxsan kuzatib boring. Agar 1 oy yakunida sizga va'da qilingan natijalarga erishilmasa yoki farzandingiz darslardan qoniqmasa — hech qanday so'roqlarsiz o'qish to'lovini 100% to'liqligicha qaytarib beramiz."
                  : language === "ru"
                  ? "Обучайте ребенка в течение 1 месяца и лично следите за результатами. Если по истечении месяца обещанные результаты не будут достигнуты или ребенок не будет доволен занятиями — мы вернем 100% оплаты без лишних вопросов."
                  : "Let your child study for 1 month and monitor the results personally. If by the end of the month the promised results are not achieved or your child is not satisfied — we will refund 100% of your tuition, no questions asked."}
              </p>

              {/* Trust Checklists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300">
                  <BadgeCheck className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                  <span>{language === "uz" ? "Sifatli Yevropa ta'lim standarti" : language === "ru" ? "Качественный европейский стандарт образования" : "High-quality European education standard"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300">
                  <BadgeCheck className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                  <span>{language === "uz" ? "Bir og'iz so'zsiz to'liq qaytarish" : language === "ru" ? "Полный возврат без лишних вопросов" : "Full refund without a single question"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
