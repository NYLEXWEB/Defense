"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, Menu, X, ArrowUpRight, Shield } from "lucide-react";
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

  // Close mobile menu on route change or ESC
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
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-200/70 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00C689] rounded-lg p-1"
            aria-label="Defense Security Systems Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-[#06221a] flex items-center justify-center border border-[#00C689]/30 text-[#00C689] group-hover:border-[#00C689] transition-colors shadow-sm">
              <Shield className="w-5 h-5 text-[#00C689]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#222524] leading-tight flex items-center gap-1">
                DEFENSE
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C689]" />
              </span>
              <span className="text-[10px] uppercase font-medium tracking-wider text-[#666e6b]">
                Security & Surveillance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/80 p-1.5 rounded-full border border-neutral-200/80 backdrop-blur-sm">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200",
                    isActive
                      ? "bg-white text-[#008D62] shadow-sm font-bold"
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
              className="flex items-center gap-2 text-xs font-medium text-[#555c59] hover:text-[#008D62] transition-colors px-3 py-2 rounded-full hover:bg-neutral-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#00C689]" />
              <span>{siteConfig.phones[0].display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#06221a] text-white hover:bg-[#003828] border border-[#00C689]/30 hover:border-[#00C689] transition-all duration-300 shadow-sm"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00C689]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="p-2 rounded-full bg-neutral-100 text-[#222524] hover:text-[#008D62]"
              aria-label="Call Defense Security Systems"
            >
              <Phone className="w-4 h-4 text-[#00C689]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-100 text-[#222524] hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#00C689]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#222524]" />
              ) : (
                <Menu className="w-5 h-5 text-[#222524]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-white z-40 lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-neutral-200 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 pt-2">
            <p className="text-[11px] font-semibold text-[#838b88] uppercase tracking-wider mb-2">
              Menu Navigation
            </p>
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all",
                    isActive
                      ? "bg-[#00C689]/10 text-[#008D62] font-bold border-l-4 border-[#00C689]"
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

          <div className="pt-6 border-t border-neutral-200 space-y-4">
            <div>
              <p className="text-xs font-semibold text-[#838b88] uppercase tracking-wider mb-2">
                Direct Contact
              </p>
              <div className="space-y-1.5">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[#222524] hover:text-[#008D62]"
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
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#00C689] text-[#06221a] font-bold text-sm shadow-md active:scale-95 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
