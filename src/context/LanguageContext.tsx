import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "../locales/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof typeof translations, key: string) => any;
  rawT: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Standard default is 'uz' (Uzbek) as requested by user
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("magnus_language");
      if (saved === "uz" || saved === "ru" || saved === "en") {
        return saved as Language;
      }
    }
    return "uz";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("magnus_language", lang);
    }
  };

  // Safe translation retriever
  const t = (section: keyof typeof translations, key: string): any => {
    const sec: any = translations[section];
    if (sec && sec[key]) {
      return sec[key][language] || sec[key]["uz"];
    }
    return "";
  };

  // Deep dot-notation translation retriever (e.g. "header.navWhyUs")
  const rawT = (path: string): any => {
    const parts = path.split(".");
    let current: any = translations;
    for (const part of parts) {
      if (current[part] === undefined) {
        return path;
      }
      current = current[part];
    }
    if (current && typeof current === "object" && (current.uz !== undefined || current.ru !== undefined || current.en !== undefined)) {
      return current[language] || current["uz"];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, rawT }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
