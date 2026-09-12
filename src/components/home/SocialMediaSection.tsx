"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// 1. Official Facebook SVG Logo
export function FacebookOfficialIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875 C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
        fill="#1877F2"
      />
      <path
        d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80008 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7452 23.951 11.3667 24 12 24C12.6333 24 13.2548 23.951 13.875 23.8542V15.4688H16.6711Z"
        fill="white"
      />
    </svg>
  );
}

// 2. Official Instagram SVG Logo
export function InstagramOfficialIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#igGradient)" />
      <path
        d="M12 5.838c-3.348 0-6.162 2.814-6.162 6.162s2.814 6.162 6.162 6.162 6.162-2.814 6.162-6.162-2.814-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44zM12 2.162c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.162c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
        fill="white"
      />
    </svg>
  );
}

// 3. Official Google SVG Logo
export function GoogleOfficialIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
        fill="#4285F4"
      />
      <path
        d="M12.24 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.332 12.2445 19.332C9.11388 19.332 6.45946 17.217 5.50705 14.3608H1.5166V17.4512C3.49671 21.387 7.55816 24.0008 12.24 24.0008Z"
        fill="#34A853"
      />
      <path
        d="M5.50253 14.3608C5.25243 13.6108 5.11604 12.8107 5.11604 12.0007C5.11604 11.1907 5.25243 10.3906 5.50253 9.64062V6.55023H1.5166C0.705494 8.16104 0.24 9.97341 0.24 12.0007C0.24 14.028 0.705494 15.8404 1.5166 17.4512L5.50253 14.3608Z"
        fill="#FBBC05"
      />
      <path
        d="M12.24 4.66943C14.0016 4.66943 15.5786 5.27393 16.826 6.44843L20.2763 2.99814C18.2014 1.06364 15.4721 0.000976562 12.24 0.000976562 C7.55816 0.000976562 3.49671 2.61476 1.5166 6.55054L5.50253 9.64093C6.45946 6.78473 9.11388 4.66943 12.24 4.66943Z"
        fill="#EA4335"
      />
    </svg>
  );
}

// 4. Official WhatsApp SVG Logo
export function WhatsAppOfficialIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6.5" fill="#25D366" />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
        fill="white"
      />
      <path
        d="M12.004 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 1.5.393 2.96 1.14 4.25L3.5 20.5l4.38-1.15c1.24.68 2.64 1.05 4.124 1.05 4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5zm0 15.3c-1.33 0-2.61-.35-3.73-1.01l-.27-.16-2.77.73.74-2.7-.18-.28A6.76 6.76 0 015.2 12c0-3.75 3.05-6.8 6.804-6.8 3.75 0 6.8 3.05 6.8 6.8s-3.05 6.8-6.8 6.8z"
        fill="white"
      />
    </svg>
  );
}

const socialPlatforms = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    title: "WhatsApp Support",
    subtitle: "Quick quotes & 1-on-1 technical consultation",
    actionText: "Chat on WhatsApp",
    badge: "Instant Chat",
    icon: WhatsAppOfficialIcon,
    url: `https://wa.me/${siteConfig.phones[0].raw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      "Hi Defense Security Systems, I am visiting your website and would like to enquire about CCTV solutions."
    )}`,
    bgColor: "from-[#25D366]/10 to-[#128C7E]/5",
    borderColor: "hover:border-[#25D366]/60",
    btnColor: "bg-[#25D366] hover:bg-[#1eb956] text-white shadow-[#25D366]/20",
    accentColor: "text-[#25D366]",
  },
  {
    id: "instagram",
    name: "Instagram",
    title: "Instagram Feed",
    subtitle: "Explore our latest CCTV installations & project stories",
    actionText: "Follow @defense_security_kollam",
    badge: "Photos & Reels",
    icon: InstagramOfficialIcon,
    url: siteConfig.socials.instagram,
    bgColor: "from-[#dc2743]/10 to-[#bc1888]/5",
    borderColor: "hover:border-[#dc2743]/60",
    btnColor: "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white shadow-[#dc2743]/20",
    accentColor: "text-[#dc2743]",
  },
  {
    id: "facebook",
    name: "Facebook",
    title: "Facebook Page",
    subtitle: "Join our security community, news, & client reviews",
    actionText: "Visit Facebook Page",
    badge: "Official Page",
    icon: FacebookOfficialIcon,
    url: siteConfig.socials.facebook,
    bgColor: "from-[#1877F2]/10 to-[#0d5abf]/5",
    borderColor: "hover:border-[#1877F2]/60",
    btnColor: "bg-[#1877F2] hover:bg-[#1464cc] text-white shadow-[#1877F2]/20",
    accentColor: "text-[#1877F2]",
  },
  {
    id: "google",
    name: "Google",
    title: "Google Business",
    subtitle: "Check our office location & 5-star customer ratings",
    actionText: "View Google Profile",
    badge: "Verified Profile",
    icon: GoogleOfficialIcon,
    url: "https://www.google.com/search?q=Defense+Security+Systems+Kollam",
    bgColor: "from-[#4285F4]/10 to-[#34A853]/5",
    borderColor: "hover:border-[#4285F4]/60",
    btnColor: "bg-[#4285F4] hover:bg-[#3367d6] text-white shadow-[#4285F4]/20",
    accentColor: "text-[#4285F4]",
  },
];

export function SocialMediaSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F8F6] border-t border-neutral-200/70 overflow-hidden relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00C689]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#1877F2]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Solid Green Rectangular Banner */}
        <MotionFadeIn delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-8 sm:py-3 mb-6 sm:mb-8 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
              CONNECT WITH US
            </span>
          </div>
        </MotionFadeIn>

        {/* Section Heading */}
        <MotionFadeIn delay={0.15}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
            Follow & Reach Us On Social Media
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555c59] max-w-2xl mx-auto leading-relaxed">
            Stay connected with Defense Security Systems Kollam. Reach out for instant consultations, project updates, and customer reviews across all official platforms.
          </p>
        </MotionFadeIn>

        {/* 4 Social Media Cards Grid */}
        <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12 max-w-6xl mx-auto" staggerDelay={0.08}>
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <MotionStaggerItem key={platform.id}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-xl ${platform.borderColor} transition-all duration-300 flex flex-col justify-between h-full text-left hover:-translate-y-1.5 overflow-hidden`}
                >
                  {/* Top Subtle Gradient Glow inside Card */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${platform.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div>
                    {/* Header: Official Logo + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-neutral-50 group-hover:bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-9 h-9 shrink-0" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#555c59] bg-neutral-100/90 px-3 py-1 rounded-full group-hover:bg-white transition-colors border border-neutral-200/60">
                        <Sparkles className={`w-3 h-3 ${platform.accentColor}`} />
                        {platform.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-extrabold text-[#222524] group-hover:text-black transition-colors flex items-center gap-1.5">
                      {platform.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555c59] mt-2 leading-relaxed font-medium">
                      {platform.subtitle}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-7 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold ${platform.btnColor} shadow-md transition-all group-hover:gap-3`}>
                      <span>{platform.actionText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
