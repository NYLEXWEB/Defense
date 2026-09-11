import React from "react";
import { clsx } from "clsx";
import { SectionBadge } from "./SectionBadge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "",
        className
      )}
    >
      {badge && (
        <div className={clsx("mb-4", centered && "flex justify-center")}>
          <SectionBadge variant={dark ? "dark" : "light"}>{badge}</SectionBadge>
        </div>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.15]",
          dark ? "text-white" : "text-[#222524]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed text-balance",
            dark ? "text-neutral-300" : "text-[#555c59]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
