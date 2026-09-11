import React from "react";
import { clsx } from "clsx";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionBadge({
  children,
  className,
  variant = "light",
}: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase",
        variant === "light"
          ? "bg-[#00C689]/10 text-[#008D62] border border-[#00C689]/25"
          : "bg-[#00C689]/20 text-[#00C689] border border-[#00C689]/30",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00C689] animate-pulse" />
      {children}
    </span>
  );
}
