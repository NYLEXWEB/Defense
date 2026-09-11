import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shine-btn focus:outline-none focus:ring-2 focus:ring-[#00C689]/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#00C689] text-[#06221a] font-semibold hover:bg-[#008D62] hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary:
      "bg-neutral-100 text-[#222524] hover:bg-neutral-200 border border-neutral-200/80 hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#222524] border border-neutral-300 hover:border-[#00C689] hover:text-[#008D62] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[#222524] hover:bg-neutral-100 hover:text-[#008D62]",
    dark:
      "bg-[#06221a] text-white border border-[#00C689]/30 hover:border-[#00C689] hover:bg-[#003828] hover:-translate-y-0.5",
  };

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
