import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, UserCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TestimonialsSection() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentSlide] = useState(0);

  const rawList = (t("testimonials", "list") || []) as any[];

  const testimonials = rawList.map((item, idx) => ({
    id: `t${idx}`,
    text: item.text[language] || item.text["uz"],
    author: item.author[language] || item.author["uz"],
    role: item.role[language] || item.role["uz"],
    rating: 5,
    date: language === "uz" ? "Iyun, 2026" : language === "ru" ? "Июнь, 2026" : "June, 2026",
  }));

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="mijozlar" className="py-16 md:py-24 bg-slate-50 dark:bg-[#0f131f] transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500">{t("testimonials", "badge")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
            {t("testimonials", "title")}
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            {t("testimonials", "subtitle")}
          </p>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-3xl bg-white dark:bg-[#161c2e] p-6 md:p-10 shadow-lg border border-slate-100 dark:border-slate-800/80 min-h-[300px] flex flex-col justify-between transition-colors duration-300 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-slate-100 dark:text-slate-800/30 z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 space-y-6 flex-1 flex flex-col justify-between"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-semibold italic leading-relaxed">
                  “{testimonials[currentIndex].text}”
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <UserCircle className="h-10 w-10 text-slate-400 dark:text-slate-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-slate-800 dark:text-white text-sm md:text-base">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {testimonials[currentIndex].date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none md:-left-6 md:-right-6">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition pointer-events-auto border border-slate-100 dark:border-slate-700/80 cursor-pointer"
              aria-label="Oldingi"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition pointer-events-auto border border-slate-100 dark:border-slate-700/80 cursor-pointer"
              aria-label="Keyingi"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? "w-6 bg-sky-500" : "w-2.5 bg-slate-200 dark:bg-slate-750 hover:bg-slate-300 dark:hover:bg-slate-650"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
