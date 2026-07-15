import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Book, MessagesSquare, Hash, BookOpen, Compass, Headphones, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ResultsSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"junior" | "senior">("junior");
  const [activeJuniorCard, setActiveJuniorCard] = useState<number>(1);
  const [activeSeniorCard, setActiveSeniorCard] = useState<number>(1);

  const rawJuniorCards = (t("results", "juniorCards") || []) as any[];
  const rawSeniorCards = (t("results", "seniorCards") || []) as any[];

  const juniorResults = rawJuniorCards.map((item, idx) => {
    const icons = [Book, MessagesSquare, Sparkles, Hash];
    const dotColors = ["bg-sky-400", "bg-amber-400", "bg-emerald-400", "bg-purple-400"];
    return {
      id: idx,
      label: item.label,
      value: item.value,
      desc: item.desc,
      icon: icons[idx] || Book,
      dotColor: dotColors[idx] || "bg-sky-400"
    };
  });

  const seniorResults = rawSeniorCards.map((item, idx) => {
    const icons = [Book, MessagesSquare, BookOpen, Headphones];
    const dotColors = ["bg-sky-400", "bg-amber-400", "bg-emerald-400", "bg-purple-400"];
    return {
      id: idx,
      label: item.label,
      value: item.value,
      desc: item.desc,
      icon: icons[idx] || Book,
      dotColor: dotColors[idx] || "bg-sky-400"
    };
  });

  return (
    <section id="natijalar" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#0f131f] dark:to-[#0f131f] relative overflow-hidden transition-colors duration-300">
      {/* Background circles */}
      <div className="absolute top-1/2 left-[5%] -z-10 h-64 w-64 rounded-full bg-sky-100/50 dark:bg-sky-950/10 blur-3xl" />
      <div className="absolute bottom-5 right-[5%] -z-10 h-72 w-72 rounded-full bg-emerald-100/50 dark:bg-emerald-950/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">{t("results", "badge")}</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
            {t("results", "title")}
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            {t("results", "subtitle")}
          </p>
          <div className="mt-4 h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Custom Tab Triggers */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-slate-100 dark:bg-[#161c2e] p-1.5 border border-slate-200/50 dark:border-slate-800/80 shadow-sm">
            <button
              onClick={() => setActiveTab("junior")}
              className={`rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "junior"
                  ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {t("results", "tabJunior")}
            </button>
            <button
              onClick={() => setActiveTab("senior")}
              className={`rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "senior"
                  ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {t("results", "tabSenior")}
            </button>
          </div>
        </div>

        {/* Tab Content with animations */}
        <AnimatePresence mode="wait">
          {activeTab === "junior" ? (
            <motion.div
              key="junior"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center"
            >
              {/* Left Statistics Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {juniorResults.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeJuniorCard === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveJuniorCard(item.id)}
                      onMouseEnter={() => setActiveJuniorCard(item.id)}
                      className={`relative rounded-3xl p-6 cursor-pointer select-none overflow-hidden border transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-red-600 to-orange-500 border-transparent text-white shadow-xl shadow-orange-500/40 scale-[1.02]"
                          : "bg-white dark:bg-[#161c2e] border-slate-100 dark:border-slate-800/60 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-[#1e253c]"
                      }`}
                    >
                      {/* Interactive dot at the top-right corner */}
                      <span className={`absolute top-5 right-5 w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? "bg-white animate-pulse" : item.dotColor
                      }`} />

                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-300"
                        }`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                            isActive ? "text-white" : "text-slate-800 dark:text-white"
                          }`}>{item.value}</div>
                        </div>
                      </div>
                      <h4 className={`font-bold text-sm md:text-base mb-1 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-800 dark:text-slate-200"
                      }`}>{item.label}</h4>
                      <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-red-50/90" : "text-slate-500 dark:text-slate-400 font-semibold"
                      }`}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Right Summary Card */}
              <div className="lg:col-span-5 rounded-3xl bg-sky-600 p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                {/* floating graphics */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full" />
                
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <Award className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="text-2xl font-black leading-tight">
                    {language === "uz" ? "Junior Yoshidagilar Uchun Natija:" : language === "ru" ? "Результаты для группы Junior:" : "Results for Young Learners (Junior):"}
                  </h3>
                  <p className="text-sm text-sky-100 leading-relaxed font-semibold">
                    {language === "uz" 
                      ? "Farzandingiz 1-bosqich yakunida inglizcha sodda hikoyalarni bemalol tarjimasiz tushuna oladi." 
                      : language === "ru" 
                      ? "По окончании 1-го этапа ваш ребенок сможет легко понимать простые истории на английском без перевода." 
                      : "By the end of Stage 1, your child will easily understand basic English stories without translation."}
                  </p>
                  <p className="text-sm text-sky-100 leading-relaxed font-semibold">
                    {language === "uz"
                      ? "Kunlik hayotdagi 150 dan ortiq vaziyatlarda (sayohat, do'kon, maktab, o'yin va oila) o'z fikrlarini ingliz tilida erkin, uyalmasdan bildira oladi."
                      : language === "ru"
                      ? "Сможет свободно и без стеснения выражать свои мысли на английском языке в более чем 150 повседневных ситуациях (путешествия, магазин, школа, игры и семья)."
                      : "Will freely and confidently express thoughts in English in more than 150 daily situations (travel, shopping, school, games, and family)."}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/20 pt-4 text-xs font-bold text-sky-100 flex items-center justify-between">
                  <span>📌 {language === "uz" ? "Kurs davomiyligi: 1 - 2.5 yil" : language === "ru" ? "Длительность курса: 1 - 2.5 года" : "Course length: 1 - 2.5 years"}</span>
                  <span>🚀 {language === "uz" ? "Keyingi bosqich: Senior English" : language === "ru" ? "Следующий шаг: Senior English" : "Next step: Senior English"}</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="senior"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center"
            >
              {/* Left Statistics Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {seniorResults.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSeniorCard === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveSeniorCard(item.id)}
                      onMouseEnter={() => setActiveSeniorCard(item.id)}
                      className={`relative rounded-3xl p-6 cursor-pointer select-none overflow-hidden border transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-red-600 to-orange-500 border-transparent text-white shadow-xl shadow-orange-500/40 scale-[1.02]"
                          : "bg-white dark:bg-[#161c2e] border-slate-100 dark:border-slate-800/60 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-[#1e253c]"
                      }`}
                    >
                      {/* Interactive dot at the top-right corner */}
                      <span className={`absolute top-5 right-5 w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? "bg-white animate-pulse" : item.dotColor
                      }`} />

                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-300"
                        }`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                            isActive ? "text-white" : "text-slate-800 dark:text-white"
                          }`}>{item.value}</div>
                        </div>
                      </div>
                      <h4 className={`font-bold text-sm md:text-base mb-1 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-800 dark:text-slate-200"
                      }`}>{item.label}</h4>
                      <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-red-50/90" : "text-slate-500 dark:text-slate-400 font-semibold"
                      }`}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Right Summary Card */}
              <div className="lg:col-span-5 rounded-3xl bg-emerald-500 p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                {/* floating graphics */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full" />

                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <Compass className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="text-2xl font-black leading-tight">
                    {language === "uz" ? "Senior Yoshidagilar Uchun Natija:" : language === "ru" ? "Результаты для группы Senior:" : "Results for Older Learners (Senior):"}
                  </h3>
                  <p className="text-sm text-emerald-50 leading-relaxed font-semibold">
                    {language === "uz"
                      ? "Farzandingiz xorijiy tillarni erkin so'zlay oladigan darajaga chiqib, atrofdagi holatlarni to'liq inglizcha ta'riflay oladi."
                      : language === "ru"
                      ? "Ваш ребенок выйдет на уровень свободного владения иностранным языком и сможет полностью описывать происходящее вокруг на английском."
                      : "Your child will reach a level of fluent foreign language communication and fully describe surrounding contexts in English."}
                  </p>
                  <p className="text-sm text-emerald-50 leading-relaxed font-semibold">
                    {language === "uz"
                      ? "Nufuzli maktablarga kirish, IELTS imtihonlariga erta tayyorlanish hamda dunyo bo'ylab sayohatlarda erkin inglizcha muloqot qilish, ingliz tilidagi darsliklarni tushunish imkoniyatlariga ega bo'ladi."
                      : language === "ru"
                      ? "Получит возможности для поступления в престижные школы, ранней подготовки к экзаменам IELTS, свободного общения в путешествиях и понимания учебников на английском."
                      : "Will gain access to prestigious school admissions, early preparation for IELTS exams, fluent communication during world travels, and full comprehension of English textbooks."}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/20 pt-4 text-xs font-bold text-emerald-50 flex items-center justify-between">
                  <span>📌 {language === "uz" ? "Kurs davomiyligi: 2+ yil" : language === "ru" ? "Длительность курса: 2+ года" : "Course length: 2+ years"}</span>
                  <span>🚀 {language === "uz" ? "Poydevor: IELTS & Akademik English" : language === "ru" ? "Основа: IELTS и Академический English" : "Foundation: IELTS & Academic English"}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
