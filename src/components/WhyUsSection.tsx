import React from "react";
import { motion } from "motion/react";
import { Users2, LineChart, Shield, Car, GraduationCap, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyUsSection() {
  const { language, t } = useLanguage();

  const rawReasons = (t("whyUs", "reasons") || []) as any[];

  const reasons = rawReasons.map((item, idx) => {
    const icons = [Users2, LineChart, GraduationCap, Car, Shield];
    const badges = [
      language === "uz" ? "Kafolatlangan ta'lim" : language === "ru" ? "Гарантированное обучение" : "Guaranteed Education",
      language === "uz" ? "Ota-onalar nazorati" : language === "ru" ? "Контроль родителей" : "Parent Control",
      language === "uz" ? "Professional jamoa" : language === "ru" ? "Профессионалы" : "Professional Team",
      language === "uz" ? "Qulaylik" : language === "ru" ? "Удобство" : "Convenience",
      language === "uz" ? "Kelajakka tayyorlov" : language === "ru" ? "Подготовка к будущему" : "Future Prep"
    ];
    const colors = ["bg-emerald-500", "bg-sky-500", "bg-purple-500", "bg-amber-500", "bg-rose-500"];
    
    return {
      title: item.title,
      desc: item.desc,
      icon: icons[idx] || Users2,
      badge: badges[idx],
      color: colors[idx] || "bg-sky-500"
    };
  });

  return (
    <section id="nega-biz" className="py-16 md:py-24 bg-white dark:bg-[#0f131f] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">{t("whyUs", "badge")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
            {t("whyUs", "title")}
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
            {t("whyUs", "subtitle")}
          </p>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
        </div>

        {/* Reasons Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`flex flex-col justify-between rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#161c2e] p-6 hover:bg-white dark:hover:bg-[#1e253c] hover:shadow-lg hover:border-slate-200/50 dark:hover:border-slate-700/80 transition-all duration-300 group ${
                  index === 0 || index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${reason.color} text-white shadow-md`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-2xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      {reason.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                {/* Bottom link style decoration */}
                <div className="mt-6 flex items-center justify-end">
                  <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-400 dark:text-slate-500 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/40 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
