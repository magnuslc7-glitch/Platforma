import React from "react";
import { motion } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface WorrySectionProps {
  onRegisterClick: () => void;
}

export default function WorrySection({ onRegisterClick }: WorrySectionProps) {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#0f131f] dark:to-[#0f131f] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Emotional Illustration or visual layout */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#161c2e] p-6 shadow-xl space-y-6 max-w-md w-full relative transition-colors duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500 dark:text-rose-400 shadow-md">
                <Heart className="h-6 w-6 fill-current animate-pulse text-rose-500" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-extrabold text-slate-800 dark:text-white">{t("worry", "cardTitle")}</h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  {t("worry", "cardDesc")}
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between text-2xs font-bold text-slate-400 dark:text-slate-500">
                <span>{language === "uz" ? "Ota-ona tashvishlari" : language === "ru" ? "Заботы родителей" : "Parental Worries"}</span>
                <span className="text-rose-500">{language === "uz" ? "Magnus siz bilan ❤️" : language === "ru" ? "Magnus с вами ❤️" : "Magnus is with you ❤️"}</span>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500">{t("worry", "badge")}</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
              {t("worry", "title")}
            </h2>
            <div className="h-1 w-20 bg-rose-500 mx-auto lg:mx-0 rounded-full" />

            <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-semibold">
              <p>
                {t("worry", "textBlock1")}
              </p>
              <p>
                {t("worry", "textBlock2")}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto rounded-2xl bg-rose-500 hover:bg-rose-400 px-8 py-3.5 text-center text-sm md:text-base font-extrabold text-white shadow-xl shadow-rose-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t("worry", "btnAction")}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
