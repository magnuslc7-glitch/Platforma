import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Calculator, 
  BookOpen, 
  Target, 
  Gift, 
  ArrowRight 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface CoursesSectionProps {
  onRegisterClick: (courseName: string) => void;
}

export default function CoursesSection({ onRegisterClick }: CoursesSectionProps) {
  const { language, t } = useLanguage();

  const courses = [
    {
      id: "kids",
      title: "English Kid's",
      subtitle: t("courses", "kidsSubtitle"),
      target: language === "uz" ? "3 - 5 sinflar uchun" : language === "ru" ? "Для 3-5 классов" : "For grades 3-5",
      tagline: t("courses", "kidsTagline"),
      themeColor: "from-orange-500 to-amber-500",
      textColor: "text-orange-500 dark:text-orange-400",
      bgColor: "bg-orange-50/50 dark:bg-orange-950/10",
      borderColor: "border-orange-100 dark:border-orange-900/30",
      btnColor: "bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/20",
      icon: BookOpen,
      stats: [
        { 
          label: language === "uz" ? "Dastur tuzilishi" : language === "ru" ? "Структура программы" : "Program structure", 
          val: t("courses", "kidsStat1") 
        },
        { 
          label: language === "uz" ? "Dars davomiyligi" : language === "ru" ? "Длительность урока" : "Lesson duration", 
          val: t("courses", "kidsStat2") 
        },
        { 
          label: language === "uz" ? "O'qitish uslubi" : language === "ru" ? "Метод обучения" : "Teaching method", 
          val: t("courses", "kidsStat3") 
        }
      ],
      features: (t("courses", "kidsFeatures") || []) as string[]
    },
    {
      id: "math",
      title: language === "uz" ? "Matematika" : language === "ru" ? "Математика" : "Mathematics",
      subtitle: t("courses", "mathSubtitle"),
      target: language === "uz" ? "3 - 5 sinflar uchun" : language === "ru" ? "Для 3-5 классов" : "For grades 3-5",
      tagline: t("courses", "mathTagline"),
      themeColor: "from-indigo-600 to-blue-500",
      textColor: "text-indigo-500 dark:text-indigo-400",
      bgColor: "bg-indigo-50/50 dark:bg-indigo-950/10",
      borderColor: "border-indigo-100 dark:border-indigo-900/30",
      btnColor: "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/20",
      icon: Calculator,
      stats: [
        { 
          label: language === "uz" ? "Dastur tuzilishi" : language === "ru" ? "Структура программы" : "Program structure", 
          val: t("courses", "mathStat1") 
        },
        { 
          label: language === "uz" ? "Kurs davomiyligi" : language === "ru" ? "Продолжительность" : "Course length", 
          val: t("courses", "mathStat2") 
        },
        { 
          label: language === "uz" ? "Dars tartibi" : language === "ru" ? "График занятий" : "Lesson schedule", 
          val: t("courses", "mathStat3") 
        }
      ],
      features: (t("courses", "mathFeatures") || []) as string[]
    },
    {
      id: "general",
      title: "General English",
      subtitle: t("courses", "generalSubtitle"),
      target: language === "uz" ? "6 - 11 sinflar uchun" : language === "ru" ? "Для 6-11 классов" : "For grades 6-11",
      tagline: t("courses", "generalTagline"),
      themeColor: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-500 dark:text-emerald-400",
      bgColor: "bg-emerald-50/40 dark:bg-emerald-950/10",
      borderColor: "border-emerald-100 dark:border-emerald-900/30",
      btnColor: "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/20",
      icon: GraduationCap,
      stats: [
        { 
          label: language === "uz" ? "Dastur tuzilishi" : language === "ru" ? "Структура программы" : "Program structure", 
          val: t("courses", "generalStat1") 
        },
        { 
          label: language === "uz" ? "Kurs davomiyligi" : language === "ru" ? "Продолжительность" : "Course length", 
          val: t("courses", "generalStat2") 
        },
        { 
          label: language === "uz" ? "Dars davomiyligi" : language === "ru" ? "Длительность урока" : "Lesson duration", 
          val: t("courses", "generalStat3") 
        }
      ],
      features: (t("courses", "generalFeatures") || []) as string[]
    },
    {
      id: "ielts",
      title: "IELTS / CEFR",
      subtitle: t("courses", "ieltsSubtitle"),
      target: language === "uz" ? "General English bitiruvchilari uchun" : language === "ru" ? "Для выпускников General English" : "For General English graduates",
      tagline: t("courses", "ieltsTagline"),
      themeColor: "from-red-600 to-rose-500",
      textColor: "text-rose-500 dark:text-rose-400",
      bgColor: "bg-rose-50/50 dark:bg-rose-950/10",
      borderColor: "border-rose-100 dark:border-rose-900/30",
      btnColor: "bg-red-500 hover:bg-red-600 hover:shadow-red-500/20",
      icon: Target,
      stats: [
        { 
          label: language === "uz" ? "Dastur tuzilishi" : language === "ru" ? "Структура программы" : "Program structure", 
          val: t("courses", "ieltsStat1") 
        },
        { 
          label: language === "uz" ? "Kurs davomiyligi" : language === "ru" ? "Продолжительность" : "Course length", 
          val: t("courses", "ieltsStat2") 
        },
        { 
          label: language === "uz" ? "Dars davomiyligi" : language === "ru" ? "Длительность урока" : "Lesson duration", 
          val: t("courses", "ieltsStat3") 
        }
      ],
      features: (t("courses", "ieltsFeatures") || []) as string[]
    }
  ];

  return (
    <section id="kurslarimiz" className="py-20 md:py-28 bg-white dark:bg-[#0f131f] relative overflow-hidden transition-colors duration-300">

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Title */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/40">
            <Sparkles className="h-3.5 w-3.5 text-sky-500 animate-pulse" />
            {t("courses", "badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
            {t("courses", "titleStart")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-400">
              {t("courses", "titleHighlight")}
            </span>
            {t("courses", "titleEnd")}
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold max-w-2xl mx-auto">
            {t("courses", "subtitle")}
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-sky-500 to-emerald-400 mx-auto rounded-full" />
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {courses.map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col justify-between rounded-3xl border ${course.borderColor} ${course.bgColor} p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-500" />
                
                <div>
                  {/* Bottom Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${course.themeColor} text-white shadow-md`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all duration-300">
                          {course.title}
                        </h3>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          {course.target}
                        </p>
                      </div>
                    </div>
                    
                    <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      {t("courses", "zukkoLabel")}
                    </span>
                  </div>

                  {/* Subtitle / Psychological Hook */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-6 leading-relaxed border-l-2 border-sky-500 pl-3">
                    "{course.subtitle}"
                  </p>

                  {/* Course Stats Info Chips */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {course.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-white/80 dark:bg-slate-900/60 rounded-2xl p-2.5 text-center border border-slate-100/80 dark:border-slate-800/60 shadow-xs">
                        <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{stat.label}</div>
                        <div className="text-xs md:text-sm font-extrabold text-slate-800 dark:text-white tracking-tight">{stat.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Special Badge Callout */}
                  <div className="mb-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 p-3.5 border border-dashed border-sky-200 dark:border-sky-900/40 flex items-center gap-3">
                    <Gift className={`h-5 w-5 shrink-0 ${course.textColor} animate-bounce`} />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-snug">
                      {course.tagline}
                    </span>
                  </div>

                  {/* Program Features Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      {t("courses", "guideTitle")}
                    </h4>
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 group/item">
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5 transition-transform duration-250 group-hover/item:scale-110" />
                        <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highly Compelling Call To Action Button */}
                <button
                  onClick={() => onRegisterClick(`${course.title} Kursi`)}
                  className={`w-full rounded-2xl ${course.btnColor} py-4 px-4 text-center text-sm font-black text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group/btn cursor-pointer`}
                >
                  {t("courses", "btnCta")}
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

