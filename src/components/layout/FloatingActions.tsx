"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, Headset, X } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { siteConfig } from "@/data/site";

// Official Google "G" Icon
function GoogleGIcon({ className = "w-5 h-5 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Defense+Security+Systems+Kollam+Reviews";

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenis = useLenis();

  // Monitor scroll position to reveal Scroll-To-Top button when user reaches half page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.phones[0].raw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi Defense Security Systems, I am visiting your website and would like to enquire about CCTV & security solutions."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[99] flex flex-col items-center gap-3.5 pointer-events-auto select-none">
      {/* 1. Scroll-To-Top Button (Perfectly centered directly above floating menu) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#06221a]/95 hover:bg-[#008D62] text-white border-2 border-[#00C689]/40 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
            aria-label="Scroll back to top"
            title="Scroll to Top"
          >
            <ChevronUp className="w-6 h-6 text-[#00C689] group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Pop-up Action Speed Dial Container */}
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3 mb-3.5"
            >
              {/* Action 1: WhatsApp */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center group"
              >
                <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-white text-[#222524] text-xs font-bold shadow-md border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  WhatsApp Support
                </span>
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white/30">
                  <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </motion.a>

              {/* Action 2: Instagram */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center group"
              >
                <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-white text-[#222524] text-xs font-bold shadow-md border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Follow on Instagram
                </span>
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white/30">
                  <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </motion.a>

              {/* Action 3: Google Reviews */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center group"
              >
                <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-white text-[#222524] text-xs font-bold shadow-md border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Google 5-Star Reviews
                </span>
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white text-[#222524] shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-neutral-200">
                  <GoogleGIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#00C689] hover:bg-[#008D62] text-[#06221a] hover:text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/40 group shine-btn"
          aria-label="Toggle contact menu"
          title="Quick Contact & Support"
        >
          {/* Ambient Glow */}
          <span className="absolute -inset-1 rounded-full bg-[#00C689]/50 blur-md animate-pulse pointer-events-none -z-10" />

          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 rotate-90" />
          ) : (
            <Headset className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </div>
    </div>
  );
}
