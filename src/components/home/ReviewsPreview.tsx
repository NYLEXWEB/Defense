"use client";

import React from "react";
import { Star, ExternalLink, Edit3, CheckCircle2 } from "lucide-react";
import { reviewsData } from "@/data/reviews";

// Official Google "G" Logo
export function GoogleGIcon({ className = "w-5 h-5 shrink-0" }: { className?: string }) {
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

// Google Star Rating Icon
function GoogleStar() {
  return (
    <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
  );
}

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Defense+Security+Systems+Kollam+Reviews";

export function ReviewsPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Google Rating Summary Card */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Section Heading with Green Banner */}
          <div>
            <div className="inline-block bg-[#00C689] px-6 py-2 sm:px-7 sm:py-2.5 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base md:text-lg block">
                GOOGLE REVIEWS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222524]">
              What Our Clients Say on Google
            </h2>
            <p className="text-xs sm:text-sm text-[#555c59] mt-1">
              Verified 5-star ratings and customer experiences across Kollam.
            </p>
          </div>

          {/* Google Summary Badge & "Write a Review" Button */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/80 shadow-sm">
            {/* Google G + Rating */}
            <div className="flex items-center gap-3 pr-4 border-r border-neutral-200">
              <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-200/60 shadow-xs">
                <GoogleGIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black text-[#222524]">5.0</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <GoogleStar key={i} />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-medium text-[#555c59] block">
                  Google Rating
                </span>
              </div>
            </div>

            {/* Write a Review Button */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Edit3 className="w-4 h-4" />
              <span>Write a review</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: User Avatar + Name + Google Logo */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full text-white font-black text-sm flex items-center justify-center shadow-xs shrink-0"
                      style={{ backgroundColor: review.avatarBg }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#222524] leading-tight group-hover:text-[#1A73E8] transition-colors">
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-[#838b88] mt-0.5">
                        {review.badge}
                      </p>
                    </div>
                  </div>
                  <GoogleGIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>

                {/* Stars + Time Ago */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <GoogleStar key={i} />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#838b88] font-medium">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-[#444a47] leading-relaxed">
                  {review.fullReview}
                </p>
              </div>

              {/* Footer: Verified Checkmark */}
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-[#008D62] font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                  <span>Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to read more on Google */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1A73E8] hover:text-[#1557B0] hover:underline"
          >
            <span>Read all customer reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
