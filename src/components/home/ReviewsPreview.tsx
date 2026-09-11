import React from "react";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviewsData } from "@/data/reviews";

export function ReviewsPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="Client Feedback"
            title="Real experiences from property owners & businesses."
            subtitle="Verified feedback on our installation speed, technical knowledge, and post-setup commitment."
          />
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#008D62] hover:text-[#00C689] transition-colors self-start md:self-end group"
          >
            <span>View Client Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Authentic Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#00C689]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-200" />
                </div>

                <p className="text-xs sm:text-sm text-[#222524] italic leading-relaxed mb-6 font-medium">
                  &ldquo;{review.highlight}&rdquo;
                </p>

                <p className="text-xs text-[#555c59] leading-relaxed line-clamp-4">
                  {review.fullReview[0]}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00C689]/15 text-[#008D62] font-extrabold flex items-center justify-center text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#222524]">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-[#838b88]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
