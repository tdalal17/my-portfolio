"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
  className?: string
  variant?: "default" | "ghost" | "outline" | "glow"
}

export function SocialIcon({
  icon: Icon,
  href,
  label,
  className,
  variant = "default"
}: SocialIconProps) {
  // Different styles based on variant
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "bg-transparent text-foreground hover:bg-muted hover:text-foreground",
    outline: "bg-transparent text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
    glow: "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]"
  }
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      {/* Icon with hover animation */}
      <Icon 
        className={cn(
          "h-5 w-5 transition-all duration-300",
          variant === "default" && "group-hover:scale-110",
          variant === "ghost" && "group-hover:rotate-12",
          variant === "outline" && "group-hover:scale-110 group-hover:rotate-12",
          variant === "glow" && "group-hover:scale-110 group-active:scale-95"
        )} 
      />
      
      {/* Ripple effect on click for glow variant */}
      {variant === "glow" && (
        <span className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-active:animate-ripple bg-primary/30" />
      )}
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-10">
        {label}
      </span>
    </a>
  )
}

// Add this to your globals.css
// @keyframes ripple {
//   0% {
//     transform: scale(0);
//     opacity: 0.7;
//   }
//   100% {
//     transform: scale(2.5);
//     opacity: 0;
//   }
// } 