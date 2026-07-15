import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import CoursesSection from "./components/CoursesSection";
import ResultsSection from "./components/ResultsSection";
import MethodSection from "./components/MethodSection";
import WhyUsSection from "./components/WhyUsSection";
import PricingSection from "./components/PricingSection";
import WorrySection from "./components/WorrySection";
import GuaranteeSection from "./components/GuaranteeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ArizaModal from "./components/ArizaModal";
import LeadsAdmin from "./components/LeadsAdmin";
import ScrollToTop from "./components/ScrollToTop";
import { Sparkles, Calendar, BookOpen, MessageSquare, ShieldCheck, Database } from "lucide-react";
import { Lead } from "./types";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function AppContent() {
  const [isArizaOpen, setIsArizaOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminRefreshKey, setAdminRefreshKey] = useState(0);
  const { t } = useLanguage();

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("magnus_theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("magnus_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openAriza = (courseName: string = "") => {
    setSelectedCourse(courseName);
    setIsArizaOpen(true);
  };

  const handleLeadSubmitted = (lead: Lead) => {
    // Increment refresh key to update admin view if it is open or gets opened
    setAdminRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0f131f] text-slate-800 dark:text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-900 transition-colors duration-300">
      {/* Navbar Header */}
      <Header
        onRegisterClick={() => openAriza()}
        onAdminClick={() => setIsAdminOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main>
        {/* Hero */}
        <Hero onRegisterClick={() => openAriza()} />

        {/* Problem Section: Why English before 12 */}
        <ProblemSection />

        {/* Courses Section: Junior vs Senior */}
        <CoursesSection onRegisterClick={(course) => openAriza(course)} />

        {/* Results Section: Tabbed results */}
        <ResultsSection />

        {/* Method Section: How classes are conducted */}
        <MethodSection onRegisterClick={() => openAriza()} />

        {/* Why Parents Choose Us: Extra lessons, reports, international teachers, taxi */}
        <WhyUsSection />

        {/* Worry Section: Emotional reassurance */}
        <WorrySection onRegisterClick={() => openAriza()} />

        {/* Pricing Section: 21% discount & Countdown Timer */}
        <PricingSection onRegisterClick={(course) => openAriza(course)} />

        {/* Guarantee Section: 1 month 100% money back */}
        <GuaranteeSection />

        {/* Testimonials: Slider */}
        <TestimonialsSection />

        {/* FAQ Accordions */}
        <FaqSection />
      </main>

      {/* Footer contacts & links */}
      <Footer />

      {/* Registration Modal */}
      <ArizaModal
        isOpen={isArizaOpen}
        onClose={() => setIsArizaOpen(false)}
        defaultCourse={selectedCourse}
        onLeadSubmitted={handleLeadSubmitted}
      />

      {/* Leads Database Control Panel */}
      <LeadsAdmin
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        triggerRefresh={adminRefreshKey}
      />

      {/* Persistent Floating CTA for Mobile / Quick Action */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 sm:hidden">
        <button
          onClick={() => openAriza()}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 to-sky-500 text-white shadow-xl shadow-sky-600/30 hover:scale-105 active:scale-95 transition"
          aria-label="Yozilish"
        >
          <Sparkles className="h-6 w-6 animate-pulse text-amber-300" />
        </button>
      </div>

      {/* Desktop floating hint for leads panel */}
      <div className="fixed bottom-6 left-6 z-30 hidden md:block">
        <button
          onClick={() => setIsAdminOpen(true)}
          className="flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 text-xs font-bold shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-700 transition"
        >
          <Database className="h-3.5 w-3.5 text-sky-400" />
          <span>{t("header", "btnAdmin")}</span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
