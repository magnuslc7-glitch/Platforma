import React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, BookOpen, Star, Play, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-[#0f131f] dark:via-[#0f131f] dark:to-[#0f131f] py-12 md:py-20 lg:py-24 transition-colors duration-300">

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/30 px-4 py-1.5 text-xs md:text-sm font-bold text-sky-600 dark:text-sky-400"
            >
              <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
              <span>{t("hero", "badgeText")}</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-800 dark:text-white leading-[1.1]"
              >
                {t("hero", "titleStart")}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-500">
                  {t("hero", "titleHighlight")}
                  <span className="absolute bottom-1 left-0 w-full h-1.5 bg-emerald-200/50 dark:bg-emerald-900/50 -z-10 rounded-full" />
                </span>
                {t("hero", "titleEnd")}
              </motion.h2>
              
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto lg:mx-0 max-w-xl text-base md:text-lg lg:text-xl font-semibold text-slate-500 dark:text-slate-400 leading-relaxed"
              >
                {t("hero", "subtitle")}
              </motion.p>
            </div>

            {/* CTA Group */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onRegisterClick}
                className="relative w-full sm:w-auto px-8 py-4 bg-sky-600 text-white font-bold rounded-2xl shadow-xl shadow-sky-600/20 hover:bg-sky-500 hover:shadow-2xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-sky-500/20 transition-all text-base text-center cursor-pointer"
              >
                {t("hero", "ctaPrimary")}
              </button>

              <a
                href="#natijalar"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-bold text-sm md:text-base py-2 transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600 dark:hover:text-sky-400 transition">
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                </div>
                <span>{t("hero", "ctaSecondary")}</span>
              </a>
            </motion.div>

            {/* Quick Benefits List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-left max-w-lg mx-auto lg:mx-0 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                  {language === "uz" ? "3+ Yillik Tajriba" : language === "ru" ? "3+ года опыта" : "3+ Years Experience"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                  {t("hero", "bullet1")}
                </span>
              </div>
              <div className="flex items-center gap-2 col-span-2 md:col-span-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                  {language === "uz" ? "Bepul Yordamchi" : language === "ru" ? "Бесплатная поддержка" : "Free Support Teacher"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Bento Grid Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {/* Bento Card 1: Main Happy Kids Mockup */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="col-span-2 rounded-3xl bg-gradient-to-tr from-sky-400 to-sky-500 p-6 text-white shadow-xl flex flex-col justify-between h-52 relative overflow-hidden"
              >
                {/* Floating bubbles */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    {language === "uz" ? "Inglizcha O'yinlar" : language === "ru" ? "Английские игры" : "English Games"}
                  </span>
                  <Award className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-black leading-tight">{t("hero", "bullet1")}</h3>
                  <p className="mt-1 text-xs text-sky-100 font-semibold">{t("hero", "bullet1Desc")}</p>
                </div>
              </motion.div>

              {/* Bento Card 2: Age groups badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl bg-amber-400 p-5 text-slate-800 shadow-lg flex flex-col justify-between h-40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-slate-800">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="text-3xl font-black">5 - 11</div>
                  <div className="text-xs font-bold text-slate-800/80">
                    {language === "uz" ? "Yoshgacha bolalar uchun" : language === "ru" ? "Для детей до 11 лет" : "For kids up to 11 years"}
                  </div>
                </div>
              </motion.div>

              {/* Bento Card 3: Free trial lesson badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl bg-emerald-400 p-5 text-white shadow-lg flex flex-col justify-between h-40 relative overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-white/10 rounded-full" />
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base md:text-lg font-black leading-tight">1-BEPUL</div>
                  <div className="text-xs font-bold text-emerald-50">
                    {language === "uz" ? "SINOV DARSI" : language === "ru" ? "ПРОБНЫЙ УРОК" : "FREE TRIAL"}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
