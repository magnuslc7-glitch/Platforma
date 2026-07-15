import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Search, Filter, Trash2, RefreshCw, X, Tag } from "lucide-react";
import { Lead } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface LeadsAdminProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRefresh: number;
}

export default function LeadsAdmin({ isOpen, onClose, triggerRefresh }: LeadsAdminProps) {
  const { language, t } = useLanguage();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [courseFilter, setCourseFilter] = useState<string>("all");

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem("jony_leads");
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        // Seed mock leads if empty so it looks lively for the demo!
        const mockLeads: Lead[] = [
          {
            id: "l1",
            name: "Feruza Karimova",
            phone: "+998 (90) 123-45-67",
            course: "Junior English (5-8 yosh)",
            timestamp: "10.07.2026, 14:32:15",
            status: "yangi",
            notes: "Farzandi 6 yoshda, sinov darsiga kelmoqchi."
          },
          {
            id: "l2",
            name: "Sardor Ahmedov",
            phone: "+998 (93) 765-43-21",
            course: "Senior English (9-12 yosh)",
            timestamp: "09.07.2026, 11:15:00",
            status: "bog'lanildi",
            notes: "Bog'lanildi. Seshanba kungi darsga keladigan bo'ldi."
          },
          {
            id: "l3",
            name: "Madina opa",
            phone: "+998 (99) 445-56-67",
            course: "Junior English (Chegirma bilan)",
            timestamp: "08.07.2026, 18:22:04",
            status: "arxiv",
            notes: "Chegirma guruhini so'radi."
          }
        ];
        localStorage.setItem("jony_leads", JSON.stringify(mockLeads));
        setLeads(mockLeads);
      }
    } catch (e) {
      console.error("Error loading leads:", e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen, triggerRefresh]);

  const updateLeadStatus = (id: string, newStatus: Lead["status"]) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem("jony_leads", JSON.stringify(updated));
  };

  const updateLeadNotes = (id: string, notes: string) => {
    const updated = leads.map(l => l.id === id ? { ...l, notes } : l);
    setLeads(updated);
    localStorage.setItem("jony_leads", JSON.stringify(updated));
  };

  const deleteLead = (id: string) => {
    const confirmMsg = language === "uz" 
      ? "Haqiqatan ham ushbu arizani o'chirmoqchisiz?" 
      : language === "ru" 
      ? "Вы действительно хотите удалить эту заявку?" 
      : "Are you sure you want to delete this application?";
    if (window.confirm(confirmMsg)) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      localStorage.setItem("jony_leads", JSON.stringify(updated));
    }
  };

  const clearAllLeads = () => {
    const confirmMsg = language === "uz" 
      ? "Haqiqatan ham barcha arizalarni o'chirib yubormoqchisiz?" 
      : language === "ru" 
      ? "Вы действительно хотите очистить все заявки?" 
      : "Are you sure you want to delete all applications?";
    if (window.confirm(confirmMsg)) {
      localStorage.removeItem("jony_leads");
      setLeads([]);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(search.toLowerCase()) || 
      lead.phone.includes(search);
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesCourse = courseFilter === "all" || lead.course.includes(courseFilter);
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const getStatusLabel = (status: string) => {
    if (status === "yangi") return t("admin", "statusNew") || "Yangi";
    if (status === "bog'lanildi") return t("admin", "statusContacted") || "Bog'lanildi";
    return t("admin", "statusCancelled") || "Arxiv";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Panel content */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            className="relative z-10 flex h-[85vh] w-full max-w-5xl flex-col rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 p-4 md:p-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {t("admin", "panelTitle")}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">
                    {language === "uz" 
                      ? "Mijozlar tomonidan qoldirilgan arizalar ro'yxati (LocalStorage)" 
                      : language === "ru" 
                      ? "Список заявок, оставленных клиентами (LocalStorage)" 
                      : "List of applications submitted by clients (LocalStorage)"}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Filters bar */}
            <div className="grid grid-cols-1 gap-3 border-b border-slate-800 bg-slate-950 p-4 sm:grid-cols-3 md:gap-4 md:px-6">
              {/* Search */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  placeholder={t("admin", "searchPlaceholder")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 py-2 pl-9 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all font-semibold"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-sm text-slate-300 focus:outline-none focus:border-sky-500 font-semibold"
                >
                  <option value="all">{t("admin", "statusFilterAll")}</option>
                  <option value="yangi">{t("admin", "statusNew")}</option>
                  <option value="bog'lanildi">{t("admin", "statusContacted")}</option>
                  <option value="arxiv">{t("admin", "statusCancelled")}</option>
                </select>
              </div>

              {/* Course Filter */}
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-slate-500" />
                <select
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-sm text-slate-300 focus:outline-none focus:border-sky-500 font-semibold"
                >
                  <option value="all">{t("admin", "courseFilterAll")}</option>
                  <option value="Kid's">English Kid's</option>
                  <option value="Matematika">Matematika</option>
                  <option value="General">General English</option>
                  <option value="IELTS">IELTS / CEFR</option>
                </select>
              </div>
            </div>

            {/* Leads Table */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {filteredLeads.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center text-slate-500">
                  <Database className="h-10 w-10 mb-3 text-slate-600" />
                  <p className="text-base font-bold">{t("admin", "noLeads")}</p>
                  <p className="text-xs mt-1 font-semibold">
                    {language === "uz" 
                      ? "Siz izlagan mezon bo'yicha hech qanday ma'lumot yo'q." 
                      : language === "ru" 
                      ? "По вашему запросу ничего не найдено." 
                      : "No matching criteria found for your search."}
                  </p>
                </div>
              ) : (
                <div className="space-y-4 font-semibold">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
                        {/* Left Details */}
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-base font-bold text-slate-100">{lead.name}</h4>
                            <span className="text-xs font-mono text-slate-500">{lead.timestamp}</span>
                            
                            {/* Badges */}
                            <span className={`rounded-full px-2 py-0.5 text-2xs font-extrabold uppercase tracking-wider ${
                              lead.status === "yangi" ? "bg-emerald-500/10 text-emerald-400" :
                              lead.status === "bog'lanildi" ? "bg-sky-500/10 text-sky-400" :
                              "bg-slate-500/10 text-slate-400"
                            }`}>
                              {getStatusLabel(lead.status)}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                            <div>{language === "uz" ? "Telefon:" : language === "ru" ? "Телефон:" : "Phone:"} <span className="font-mono text-slate-200">{lead.phone}</span></div>
                            <div>{language === "uz" ? "Kurs:" : language === "ru" ? "Курс:" : "Course:"} <span className="text-sky-400 font-bold">{lead.course}</span></div>
                          </div>
                        </div>

                        {/* Status Toggle Actions */}
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => updateLeadStatus(lead.id, "yangi")}
                            className={`rounded-lg px-2.5 py-1 text-xs font-extrabold border transition cursor-pointer ${
                              lead.status === "yangi" 
                                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" 
                                : "border-slate-800 text-slate-400 hover:bg-slate-900"
                            }`}
                          >
                            {t("admin", "statusNew")}
                          </button>
                          <button
                            onClick={() => updateLeadStatus(lead.id, "bog'lanildi")}
                            className={`rounded-lg px-2.5 py-1 text-xs font-extrabold border transition cursor-pointer ${
                              lead.status === "bog'lanildi" 
                                ? "bg-sky-500/20 border-sky-500/30 text-sky-400" 
                                : "border-slate-800 text-slate-400 hover:bg-slate-900"
                            }`}
                          >
                            {t("admin", "statusContacted")}
                          </button>
                          <button
                            onClick={() => updateLeadStatus(lead.id, "arxiv")}
                            className={`rounded-lg px-2.5 py-1 text-xs font-extrabold border transition cursor-pointer ${
                              lead.status === "arxiv" 
                                ? "bg-slate-500/20 border-slate-500/30 text-slate-300" 
                                : "border-slate-800 text-slate-400 hover:bg-slate-900"
                            }`}
                          >
                            {t("admin", "statusCancelled")}
                          </button>

                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10 transition ml-2 cursor-pointer"
                            title="O'chirish"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Notes Section */}
                      <div className="mt-3 border-t border-slate-900 pt-3">
                        <textarea
                          placeholder={language === "uz" ? "Admin eslatmalari..." : language === "ru" ? "Заметки админа..." : "Admin notes..."}
                          value={lead.notes || ""}
                          onChange={(e) => updateLeadNotes(lead.id, e.target.value)}
                          className="w-full rounded bg-slate-900 border border-slate-850 p-2 text-xs font-semibold text-slate-300 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition"
                          rows={1}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950 p-4 md:px-6">
              <div className="text-xs text-slate-400 font-bold">
                {t("admin", "totalLeads")}: <span className="font-bold text-white">{leads.length}</span> | {language === "uz" ? "Filtrlandi" : language === "ru" ? "Отфильтровано" : "Filtered"}: <span className="font-bold text-sky-400">{filteredLeads.length}</span>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <button
                  onClick={loadLeads}
                  className="flex items-center gap-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-850 transition cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  {language === "uz" ? "Yangilash" : language === "ru" ? "Обновить" : "Refresh"}
                </button>
                {leads.length > 0 && (
                  <button
                    onClick={clearAllLeads}
                    className="flex items-center gap-1 rounded-lg bg-red-950/20 border border-red-900/30 px-3 py-1.5 text-xs text-red-400 hover:bg-red-950/40 transition cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    {language === "uz" ? "Tozalash" : language === "ru" ? "Очистить" : "Clear"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
