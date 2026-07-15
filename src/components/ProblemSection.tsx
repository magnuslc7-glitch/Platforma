import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, Lightbulb, Clock, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProblemSection() {
  const { language, t } = useLanguage();

  return (
    <section id="kurslarimiz" className="py-16 md:py-24 bg-slate-50 dark:bg-[#0f131f] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">{t("problem", "badge")}</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
            {t("problem", "title")}
          </h2>
          <div className="mt-4 h-1 w-20 bg-rose-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Warning Block */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white dark:bg-[#161c2e] p-6 md:p-8 shadow-md border border-slate-100 dark:border-slate-800/40">
            <div className="space-y-6">
              {/* Warning Icon Badge */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 px-3.5 py-1.5 text-xs md:text-sm font-bold text-rose-600 dark:text-rose-400">
                <AlertTriangle className="h-4.5 w-4.5" />
                <span>{t("problem", "subBadge")}</span>
              </div>

              {/* Bold Quote */}
              <blockquote className="border-l-4 border-rose-500 pl-4 py-2">
                <p className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100 leading-relaxed">
                  “{t("problem", "quote")}”
                </p>
              </blockquote>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                {t("problem", "desc1")}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                {t("problem", "desc2")}
              </p>
            </div>

            {/* Micro Card inside */}
            <div className="mt-8 rounded-2xl bg-amber-50 dark:bg-amber-950/20 p-4 border border-amber-200/50 dark:border-amber-900/30 flex gap-4 items-start">
              <Lightbulb className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">{t("problem", "tipTitle")}</h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {t("problem", "tipDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Golden Period Breakdown Blocks */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Block 1 */}
            <div className="flex-1 rounded-3xl bg-white dark:bg-[#161c2e] p-6 shadow-sm border border-slate-100 dark:border-slate-800/40 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500">
                <Clock className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base md:text-lg">{t("problem", "card1Title")}</h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {t("problem", "card1Desc")}
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex-1 rounded-3xl bg-white dark:bg-[#161c2e] p-6 shadow-sm border border-slate-100 dark:border-slate-800/40 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950/30 text-sky-500">
                <Compass className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base md:text-lg">{t("problem", "card2Title")}</h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {t("problem", "card2Desc")}
                </p>
              </div>
            </div>

            {/* Callout Info Block */}
            <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white shadow-md flex flex-col justify-between">
              <p className="text-sm font-semibold opacity-90 leading-relaxed">
                {t("problem", "callout")}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-sky-100">
                <span>⚡ {language === "uz" ? "3 Yildan buyon ishonchli ta'lim" : language === "ru" ? "3 года надежного образования" : "3 Years of trusted education"}</span>
                <span>⭐ Junior & Senior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
