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
            <div className="flex flex-col gap-2 w-full max-w-xs mx-auto md:mx-0">
              {/* Telegram */}
              <a
                href="https://t.me/Magnus_LC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 transition-all cursor-pointer group w-full min-w-0"
                title="Telegram"
              >
                <svg
                  className="h-5 w-5 fill-sky-400 group-hover:scale-110 transition-transform duration-300 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.462-.17.583-.48.779-.688.798-.456.042-.8-.299-1.242-.589-.691-.453-1.082-.735-1.752-1.176-.775-.51-.272-.79.169-1.248.115-.12 2.115-1.937 2.154-2.102.005-.021.009-.1-.038-.142-.047-.042-.116-.028-.166-.017-.07.016-1.19.755-3.361 2.222-.318.219-.607.327-.866.321-.285-.006-.834-.161-1.241-.293-.5-.162-.897-.248-.862-.523.018-.143.215-.291.591-.443 2.312-1.007 3.855-1.67 4.629-1.989 2.203-.909 2.66-1.068 2.958-1.073.065-.001.212.015.307.093.079.065.101.152.109.219.008.067.018.214.01.328z" />
                </svg>
                <div className="flex flex-col text-left min-w-0 flex-1">
                  <span className="text-[9px] text-slate-500 font-extrabold tracking-wider uppercase whitespace-nowrap">Telegram</span>
                  <span className="text-[11px] sm:text-xs md:text-[11px] lg:text-xs font-black font-mono truncate" title="@Magnus_LC">@Magnus_LC</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/magnus_lc_jarqorgon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 transition-all cursor-pointer group w-full min-w-0"
                title="Instagram"
              >
                <svg
                  className="h-5 w-5 fill-pink-500 group-hover:scale-110 transition-transform duration-300 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <div className="flex flex-col text-left min-w-0 flex-1">
                  <span className="text-[9px] text-slate-500 font-extrabold tracking-wider uppercase whitespace-nowrap">Instagram</span>
                  <span className="text-[11px] sm:text-xs md:text-[10px] lg:text-xs font-black font-mono truncate" title="@magnus_lc_jarqorgon">@magnus_lc_jarqorgon</span>
                </div>
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
