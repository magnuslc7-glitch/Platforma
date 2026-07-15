import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Language } from "../../locales/translations";

const languages = [
  { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs md:text-sm font-bold cursor-pointer",
          "bg-white dark:bg-slate-900/90 backdrop-blur-md shadow-2xs",
          "border-slate-200 dark:border-slate-800",
          "text-slate-700 dark:text-slate-200",
          "hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
        )}
      >
        <span>{selected.flag}</span>
        <span>{selected.label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform text-slate-400", open && "rotate-180")} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-40 rounded-xl overflow-hidden z-50",
            "bg-white dark:bg-slate-950/95 backdrop-blur-xl",
            "shadow-lg border border-slate-200/80 dark:border-slate-800",
            "animate-fade-in"
          )}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setOpen(false);
              }}
              className={cn(
                "flex items-center gap-2.5 w-full px-3 py-2.5 text-xs md:text-sm text-left transition-colors cursor-pointer",
                selected.code === lang.code
                  ? "font-extrabold text-sky-500 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-950/20"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
              )}
            >
              <span>{lang.flag}</span>
              <span className="flex-1 font-bold">{lang.label}</span>
              {selected.code === lang.code && (
                <Check className="h-4 w-4 text-sky-500 dark:text-sky-400 shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Component = LanguageSelector;
