import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, CheckCircle, GraduationCap, Phone, User, ArrowRight } from "lucide-react";
import { CourseType, Lead } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface ArizaModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  onLeadSubmitted?: (lead: Lead) => void;
}

export default function ArizaModal({ isOpen, onClose, defaultCourse, onLeadSubmitted }: ArizaModalProps) {
  const { language, t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setName("");
      setPhone("+998 ");
      setCourse(defaultCourse || CourseType.KIDS);
      setError("");
    }
  }, [isOpen, defaultCourse]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Ensure value always starts with +998
    if (!value.startsWith("+998")) {
      value = "+998 " + value.replace(/^\+?9?9?8? ?/, "");
    }

    // Format numbers smoothly
    const numbers = value.slice(5).replace(/\D/g, ""); // get only digits after +998
    let formatted = "+998 ";
    
    if (numbers.length > 0) {
      formatted += `(${numbers.slice(0, 2)}`;
    }
    if (numbers.length > 2) {
      formatted += `) ${numbers.slice(2, 5)}`;
    }
    if (numbers.length > 5) {
      formatted += `-${numbers.slice(5, 7)}`;
    }
    if (numbers.length > 7) {
      formatted += `-${numbers.slice(7, 9)}`;
    }

    // limit length
    if (formatted.length <= 19) {
      setPhone(formatted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError(t("ariza", "requiredField") || "Iltimos, ismingizni kiriting.");
      return;
    }

    // clean digits after +998
    const digits = phone.replace(/\D/g, "").slice(3);
    if (digits.length < 9) {
      setError(language === "uz" ? "Iltimos, telefon raqamingizni to'liq kiriting." : language === "ru" ? "Пожалуйста, введите ваш номер телефона полностью." : "Please enter your full phone number.");
      return;
    }

    const newLead: Lead = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      phone: phone,
      course,
      timestamp: new Date().toLocaleString("uz-UZ"),
      status: "yangi",
    };

    // Store in localStorage
    try {
      const storedLeads = localStorage.getItem("jony_leads");
      const leads: Lead[] = storedLeads ? JSON.parse(storedLeads) : [];
      leads.unshift(newLead);
      localStorage.setItem("jony_leads", JSON.stringify(leads));
      
      if (onLeadSubmitted) {
        onLeadSubmitted(newLead);
      }
      
      setSubmitted(true);
    } catch (e) {
      console.error("Error storing lead:", e);
      setError(language === "uz" ? "Xatolik yuz berdi. Qaytadan urunib ko'ring." : language === "ru" ? "Произошла ошибка. Пожалуйста, попробуйте еще раз." : "An error occurred. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Top Colored Bar */}
            <div className="h-2 bg-gradient-to-r from-emerald-400 via-sky-500 to-amber-400" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition cursor-pointer"
              aria-label="Yopish"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
                    {t("ariza", "title")}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 font-semibold leading-relaxed">
                    {t("ariza", "subtitle")}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-600 border border-red-100">
                      {error}
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t("ariza", "nameLabel")}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User className="h-5 w-5" />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("ariza", "namePlaceholder")}
                        className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-slate-800 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all text-sm md:text-base font-semibold"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t("ariza", "phoneLabel")}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Phone className="h-5 w-5" />
                      </span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+998 (90) 123-45-67"
                        className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 font-mono text-slate-800 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all text-sm md:text-base font-semibold"
                      />
                    </div>
                  </div>

                  {/* Course Selector */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t("ariza", "courseLabel")}
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 p-3 text-slate-800 font-semibold shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all text-sm md:text-base appearance-none bg-no-repeat bg-[right_12px_center] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23475569%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]"
                    >
                      <option value={CourseType.KIDS}>English Kid's Kursi (3 - 5 sinflar uchun)</option>
                      <option value={CourseType.MATH}>Matematika Kursi (3 - 5 sinflar uchun)</option>
                      <option value={CourseType.GENERAL}>General English Kursi (6 - 11 sinflar uchun)</option>
                      <option value={CourseType.IELTS}>IELTS / CEFR Kursi (Yuqori sinflar uchun)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="relative group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/20 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition active:scale-[0.98] cursor-pointer"
                  >
                    <span>{t("ariza", "btnSubmit")}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                {/* Footer note */}
                <p className="mt-4 text-center text-xs text-slate-400 font-bold">
                  🔒 {language === "uz" ? "Shoshiling! Bonuslar va maxsus narxda yozilish joylari cheklangan." : language === "ru" ? "Поторопитесь! Места для записи по специальной цене и бонусы ограничены." : "Hurry up! Spots for special pricing and bonuses are strictly limited."}
                </p>
              </div>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 animate-bounce">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                  {t("ariza", "successTitle")}
                </h3>
                <p className="mt-3 text-slate-600 font-semibold leading-relaxed text-sm md:text-base">
                  {t("ariza", "successText")}
                </p>
                
                {/* Special Telegram CTA */}
                <div className="mt-6 rounded-2xl bg-sky-50 dark:bg-slate-900 p-4 border border-sky-100 dark:border-slate-800">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white font-bold">
                      TG
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{language === "uz" ? "Rasmiy Sahifamiz" : language === "ru" ? "Официальный канал" : "Official Channel"}</h4>
                      <p className="text-xs text-slate-500 font-semibold">{language === "uz" ? "Eng so'nggi natijalar va dars lavhalari" : language === "ru" ? "Последние результаты и моменты с уроков" : "Latest results and lesson footage"}</p>
                    </div>
                  </div>
                  <a
                    href="https://t.me/Magnus_LC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-sky-500 py-2.5 px-4 text-sm font-bold text-white hover:bg-sky-400 transition cursor-pointer"
                  >
                    {t("ariza", "telegramButton")}
                  </a>
                </div>

                <button
                  onClick={onClose}
                  className="mt-6 text-sm font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer"
                >
                  {language === "uz" ? "Yopish" : language === "ru" ? "Закрыть" : "Close"}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
