import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 sm:bottom-8 sm:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/40 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-sky-400/30"
          aria-label="Tepaga chiqish"
          style={{
            boxShadow: "0 0 15px rgba(14, 165, 233, 0.6), 0 4px 6px -1px rgba(14, 165, 233, 0.2)",
          }}
        >
          <ArrowUp className="h-6 w-6 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
