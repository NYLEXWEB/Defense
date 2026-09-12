"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// Official Google 4-Color "G" SVG Icon
export function GoogleGIcon({ className = "w-7 h-7 shrink-0" }: { className?: string }) {
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

// Render icon badges exactly matching FloatingActions implementation
function WhatsAppBadge() {
  return (
    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] text-white shadow-lg flex items-center justify-center shrink-0 border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
      <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
    </div>
  );
}

function InstagramBadge() {
  return (
    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg flex items-center justify-center shrink-0 border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
      <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
    </div>
  );
}

function FacebookBadge() {
  return (
    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#1877F2] text-white shadow-lg flex items-center justify-center shrink-0 border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
      <FaFacebook className="w-7 h-7 sm:w-8 sm:h-8" />
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#222524] border-2 border-neutral-200/90 shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
      <GoogleGIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </div>
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
    iconComponent: WhatsAppBadge,
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
    iconComponent: InstagramBadge,
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
    iconComponent: FacebookBadge,
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
    iconComponent: GoogleBadge,
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
            const BadgeIcon = platform.iconComponent;
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
                    {/* Header: Official React Icons Brand Badge (Same as FloatingActions) */}
                    <div className="flex items-center justify-between mb-5">
                      <BadgeIcon />
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#555c59] bg-neutral-100/90 px-3 py-1 rounded-full group-hover:bg-white transition-colors border border-neutral-200/60">
                        <Sparkles className={`w-3 h-3 ${platform.accentColor}`} />
                        {platform.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-extrabold text-[#222524] group-hover:text-black transition-colors flex items-center gap-1.5 font-heading">
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
