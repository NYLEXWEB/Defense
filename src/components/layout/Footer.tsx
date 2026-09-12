import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#06221a] text-white border-t border-[#00C689]/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Story */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center group"
              aria-label="Defense Security Systems Homepage"
            >
              <Image
                src="/newlogo.png"
                alt="Defense Security & Surveillance"
                width={170}
                height={55}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#00C689] hover:border-[#00C689]/60 hover:bg-[#00C689]/20 transition-all duration-300 shadow-sm hover:scale-105"
                aria-label="Instagram profile"
              >
                <FaInstagram className="w-4 h-4 text-white hover:text-[#00C689] transition-colors" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#00C689] hover:border-[#00C689]/60 hover:bg-[#00C689]/20 transition-all duration-300 shadow-sm hover:scale-105"
                aria-label="Facebook profile"
              >
                <FaFacebookF className="w-4 h-4 text-white hover:text-[#00C689] transition-colors" />
              </a>
              <span className="text-xs text-neutral-400 font-mono">
                @{siteConfig.socials.handle}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00C689]">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-[#00C689] transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#00C689]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions & Offerings */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00C689]">
              Security Range
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              {siteConfig.overviewItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C689]/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00C689]">
              Contact & Location
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#00C689] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="space-y-2 pt-1">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-2.5 text-neutral-200 hover:text-[#00C689] transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#00C689] shrink-0" />
                    <span className="font-semibold">{phone.display}</span>
                  </a>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C689] hover:underline"
                >
                  <span>Request Site Assessment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Established {siteConfig.establishedYear}</span>
            <span>•</span>
            <span>{siteConfig.location.split(",")[0]}, {siteConfig.location.split(",")[1]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
