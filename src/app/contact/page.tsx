"use client";

import React from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <SectionBadge className="mb-4">Get In Touch</SectionBadge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#222524] leading-[1.1]">
            We&apos;re here to help protect what matters{" "}
            <span className="text-[#008D62]">most.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#555c59] leading-relaxed">
            Reach out to our security specialists for free site assessments, custom CCTV estimates, or ongoing system maintenance.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info Cards + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-[#06221a] text-white p-8 rounded-3xl border border-[#00C689]/30 shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C689]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#00C689]/20 flex items-center justify-center text-[#00C689] border border-[#00C689]/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Call Us Directly</h3>
                  <p className="text-xs text-neutral-300">Quick consultation & phone support</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-[#00C689] text-white hover:text-[#06221a] transition-all duration-300 group font-bold text-base border border-white/10"
                  >
                    <span>{phone.display}</span>
                    <span className="text-xs uppercase tracking-wider font-semibold opacity-90 px-3 py-1 rounded-full bg-white/10 group-hover:bg-[#06221a]/20">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Office Details Card */}
            <div className="bg-[#F8FAF9] p-8 rounded-3xl border border-neutral-200/80 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222524]">Office Location</h3>
                  <p className="text-sm text-[#555c59] mt-1 leading-relaxed">
                    {siteConfig.location}
                  </p>
                  <p className="text-xs font-semibold text-[#008D62] mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                    <span>Serving Homes, Offices, Schools & Fleets across Kollam</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/70 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222524]">Operating Hours</h3>
                  <p className="text-sm text-[#555c59] mt-1">
                    Monday – Saturday: 9:00 AM – 7:30 PM
                  </p>
                  <p className="text-xs text-[#838b88] mt-0.5">
                    Emergency 24/7 CCTV Technical Response Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Site Assessment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-md">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#222524]">
                  Send Us a Message
                </h2>
                <p className="text-sm text-[#555c59] mt-1">
                  Fill out the form below and our team in Kollam will get back to you promptly.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#222524] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#00C689] focus:border-transparent text-sm text-[#222524] bg-neutral-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#222524] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#00C689] focus:border-transparent text-sm text-[#222524] bg-neutral-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#222524] uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#00C689] focus:border-transparent text-sm text-[#222524] bg-neutral-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#222524] uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#00C689] focus:border-transparent text-sm text-[#222524] bg-neutral-50/50">
                      <option>CCTV Camera Installation</option>
                      <option>Smart WiFi Cameras & Automation</option>
                      <option>Networking & WiFi Setup</option>
                      <option>Remote Gate & Video Door Phone</option>
                      <option>Inverter & Power Backup</option>
                      <option>CCTV Maintenance & Repair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#222524] uppercase tracking-wider mb-2">
                    Message / Requirement Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your premise or security requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#00C689] focus:border-transparent text-sm text-[#222524] bg-neutral-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-md active:scale-95 cursor-pointer shine-btn"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <FinalCTA />
    </div>
  );
}
