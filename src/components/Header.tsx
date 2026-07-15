import React, { useState } from "react";
import { Menu, X, Phone, Database, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MagnusLogo from "./MagnusLogo";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "./ui/language-selector-dropdown";

interface HeaderProps {
  onRegisterClick: () => void;
  onAdminClick: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Header({ onRegisterClick, onAdminClick, theme, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { 
      label: language === "uz" ? "Kurslar" : language === "ru" ? "Курсы" : "Courses", 
      href: "#kurslarimiz" 
    },
    { 
      label: language === "uz" ? "Natijalar" : language === "ru" ? "Результаты" : "Results", 
      href: "#natijalar" 
    },
    { 
      label: language === "uz" ? "Metodika" : language === "ru" ? "Методика" : "Method", 
      href: "#metodika" 
    },
    { 
      label: language === "uz" ? "Nega biz?" : language === "ru" ? "Почему мы?" : "Why us?", 
      href: "#nega-biz" 
    },
    { 
      label: language === "uz" ? "Fikrlar" : language === "ru" ? "Отзывы" : "Reviews", 
      href: "#mijozlar" 
    },
    { 
      label: language === "uz" ? "Savollar (FAQ)" : language === "ru" ? "Вопросы (FAQ)" : "FAQ", 
      href: "#faq" 
    },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative z-40 w-full bg-white dark:bg-[#0f131f] transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="transition group-hover:scale-105">
            <MagnusLogo size={42} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-800 dark:text-white leading-none">
              MAGNUS
            </h1>
            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Learning Center
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Dropdown */}
          <div className="mr-1">
            <LanguageSelector />
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-amber-500 dark:hover:text-amber-400 transition cursor-pointer"
            title={theme === "light" ? "Tungi rejim" : "Kunduzgi rejim"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* Phone */}
          <a
            href="tel:+998970487271"
            className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
          >
            <Phone className="h-4 w-4 text-sky-500" />
            <span className="font-mono text-xs md:text-sm">97-048-72-71</span>
          </a>

          {/* Admin Panel button (leads database) */}
          <button
            onClick={onAdminClick}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-sky-600 transition cursor-pointer"
            title={t("header", "btnAdmin")}
          >
            <Database className="h-5 w-5" />
          </button>

          {/* Sinov Darsiga CTA */}
          <button
            onClick={onRegisterClick}
            className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-500 shadow-md shadow-sky-600/10 hover:shadow-lg hover:shadow-sky-600/20 active:scale-95 transition cursor-pointer"
          >
            {t("header", "btnFreeLesson")}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Language Switcher Dropdown for Mobile */}
          <div className="mr-1">
            <LanguageSelector />
          </div>

          {/* Theme Toggle for mobile */}
          <button
            onClick={onToggleTheme}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-amber-500 dark:hover:text-amber-400 transition cursor-pointer"
            aria-label="Mavzuni o'zgartirish"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <button
            onClick={onAdminClick}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-sky-600 transition cursor-pointer"
            aria-label="Arizalar"
          >
            <Database className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 focus:outline-none cursor-pointer"
            aria-label="Menuni ochish/yopish"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0f131f]"
          >
            <div className="flex flex-col gap-3 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-sky-600 dark:hover:text-sky-400 transition"
                >
                  {link.label}
                </a>
              ))}

              <div className="my-2 border-t border-slate-100 dark:border-slate-800" />

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+998970487271"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
                >
                  <Phone className="h-4 w-4 text-sky-500" />
                  <span className="font-mono">97-048-72-71</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full rounded-xl bg-sky-600 py-3 text-center text-sm font-bold text-white hover:bg-sky-500 transition cursor-pointer"
                >
                  {t("header", "btnFreeLesson")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
