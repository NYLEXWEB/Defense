"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { siteConfig } from "@/data/site";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenis = useLenis();

  // Monitor scroll position to reveal Scroll-To-Top button when user scrolls down
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
      {/* 1. Scroll-To-Top Button (Appears above the 3 social buttons on scroll) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#06221a]/95 hover:bg-[#008D62] text-white border-2 border-[#00C689]/40 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group mb-1"
            aria-label="Scroll back to top"
            title="Scroll to Top"
          >
            <ChevronUp className="w-6 h-6 text-[#00C689] group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Direct Always-Open Floating Social Buttons Container */}
      <div className="flex flex-col items-center gap-3">
        {/* Button 1: WhatsApp */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center group"
          aria-label="WhatsApp Support"
        >
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-white text-[#222524] text-xs font-bold shadow-md border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            WhatsApp Support
          </span>
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white/40">
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </motion.a>

        {/* Button 2: Instagram */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.3 }}
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center group"
          aria-label="Follow on Instagram"
        >
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-white text-[#222524] text-xs font-bold shadow-md border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Follow on Instagram
          </span>
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white/40">
            <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </motion.a>

        {/* Button 3: Facebook */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          href={siteConfig.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center group"
          aria-label="Follow on Facebook"
        >
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-white text-[#222524] text-xs font-bold shadow-md border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Follow on Facebook
          </span>
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1877F2] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white/40">
            <FaFacebookF className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
        </motion.a>
      </div>
    </div>
  );
}
