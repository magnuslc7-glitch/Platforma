import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, MapPin, BadgeDollarSign, Sparkles, Car, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FaqSection() {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("f1");

  const rawQuestions = (t("faq", "questions") || []) as any[];

  const faqs = rawQuestions.map((item) => ({
    id: item.id,
    question: item.question[language] || item.question["uz"],
    answer: item.answer[language] || item.answer["uz"],
  }));

  const getIcon = (id: string) => {
    switch (id) {
      case "f1": return MapPin;
      case "f2": return Clock;
      case "f3": return BadgeDollarSign;
      case "f4": return HelpCircle;
      case "f5": return Sparkles;
      case "f6": return Car;
      default: return HelpCircle;
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-[#0f131f] transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500">{t("faq", "badge")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
            {t("faq", "title")}
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            {t("faq", "subtitle")}
          </p>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const IconComponent = getIcon(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen 
                    ? "border-sky-200 dark:border-sky-900/50 bg-sky-50/20 dark:bg-sky-950/10 shadow-sm" 
                    : "border-slate-100 dark:border-slate-850 bg-white dark:bg-[#161c2e] hover:border-slate-200 dark:hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isOpen ? "bg-sky-500 text-white" : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-extrabold text-slate-800 dark:text-slate-100 text-base md:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-sky-500" : ""
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100/50 dark:border-slate-800/40 p-5 pt-0 text-sm md:text-base text-slate-600 dark:text-slate-300 font-semibold leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
