import React from "react";
import { Phone, Send, Instagram, MapPin } from "lucide-react";
import MagnusLogo from "./MagnusLogo";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 group">
              <div className="transition group-hover:scale-105">
                <MagnusLogo size={40} />
              </div>
              <h2 className="text-xl font-black tracking-tight text-white uppercase">
                MAGNUS
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm font-bold">
              {t("footer", "desc")}
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t("footer", "contacts")}
            </h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="h-4.5 w-4.5 text-sky-400" />
                <a href="tel:+998970487271" className="font-mono text-slate-300 hover:text-sky-400 transition">
                  +998 (97) 048-72-71
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-sky-400 shrink-0" />
                <span className="text-slate-300">
                  {language === "uz" 
                    ? "Jarqo'rg'on tuman, Minor turizm binosi 2-qavati" 
                    : language === "ru" 
                    ? "Джаркурганский район, здание Minor turizm, 2-й этаж" 
                    : "Jarkurgan district, Minor turizm building, 2nd floor"}
                </span>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t("footer", "socials")}
            </h3>
            <div className="flex justify-center md:justify-start gap-3">
              {/* Telegram */}
              <a
                href="https://t.me/Magnus_LC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 text-sky-400 transition-all cursor-pointer"
                title="Telegram Kanal 1"
              >
                <Send className="h-5 w-5" />
              </a>
              {/* Telegram 2 */}
              <a
                href="https://t.me/Magnus_LC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 text-sky-400 transition-all font-bold text-xs cursor-pointer"
                title="Telegram Kanal 2"
              >
                @Magnus_LC
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/magnus_lc_jarqorgon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 px-3 items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400 transition-all cursor-pointer font-bold text-xs"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span>@magnus_lc_jarqorgon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-bold">
          <p>© {currentYear} Magnus Learning Center. {t("footer", "rights")}</p>
          <p className="flex items-center gap-1.5">
            <span>Made with ❤️ for child education</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
