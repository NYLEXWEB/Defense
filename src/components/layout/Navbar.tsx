"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { clsx } from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/70 py-3"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#00C689] rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Defense Security Systems Homepage"
            >
              <Image
                src="/logo.png"
                alt="Defense Security & Surveillance"
                width={160}
                height={52}
                priority
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:opacity-95"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/80 p-1.5 rounded-full border border-neutral-200/80 backdrop-blur-sm shadow-xs">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 nav-link-animated",
                      isActive
                        ? "bg-white text-[#008D62] shadow-xs font-bold active"
                        : "text-[#555c59] hover:text-[#222524] hover:bg-white/50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Phone CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="flex items-center gap-2 text-xs font-medium text-[#555c59] hover:text-[#008D62] transition-colors duration-300 px-3 py-2 rounded-full hover:bg-neutral-100"
              >
                <Phone className="w-3.5 h-3.5 text-[#00C689]" />
                <span>{siteConfig.phones[0].display}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#06221a] text-white hover:bg-[#003828] border border-[#00C689]/30 hover:border-[#00C689] transition-all duration-300 shadow-sm shine-btn hover:-translate-y-0.5"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00C689]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="p-2.5 rounded-xl bg-neutral-100/90 text-[#222524] hover:text-[#008D62] transition-colors cursor-pointer touch-manipulation"
                aria-label="Call Defense Security Systems"
              >
                <Phone className="w-4 h-4 text-[#00C689]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-neutral-100/90 text-[#222524] hover:bg-neutral-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00C689] transition-all cursor-pointer touch-manipulation"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-[#222524]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-neutral-200/80 shrink-0 bg-white sticky top-0 z-10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Defense Security & Surveillance"
                  width={150}
                  height={48}
                  priority
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-neutral-100 text-[#222524] hover:bg-neutral-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00C689] cursor-pointer touch-manipulation"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#222524]" />
              </button>
            </div>

            {/* Menu Navigation Items */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#838b88] uppercase tracking-wider mb-3">
                  Menu Navigation
                </p>
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        "flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold transition-all duration-200",
                        isActive
                          ? "bg-[#00C689]/15 text-[#008D62] border-l-4 border-[#00C689]"
                          : "text-[#222524] hover:bg-neutral-50 active:bg-neutral-100"
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        className={clsx(
                          "w-4 h-4",
                          isActive ? "text-[#008D62]" : "text-neutral-400"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Direct Contact & Action */}
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <div>
                  <p className="text-xs font-bold text-[#838b88] uppercase tracking-wider mb-2">
                    Direct Contact
                  </p>
                  <div className="space-y-2">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone.raw}
                        href={`tel:${phone.raw}`}
                        className="flex items-center gap-2.5 text-sm font-semibold text-[#222524] hover:text-[#008D62]"
                      >
                        <Phone className="w-4 h-4 text-[#00C689]" />
                        <span>{phone.display}</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-[#666e6b] mt-2">
                    📍 {siteConfig.location}
                  </p>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#00C689] text-[#06221a] font-bold text-sm shadow-md active:scale-95 transition-all shine-btn"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
