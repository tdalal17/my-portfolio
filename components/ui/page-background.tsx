"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface PageBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: "light" | "dark" 
}

export function PageBackground({ 
  children, 
  className,
  variant = "dark"
}: PageBackgroundProps) {
  return (
    <div className={cn(
      "min-h-[calc(100vh-6rem)] relative",
      variant === "dark" ? "bg-warmPalette-dark-bg" : "bg-warmPalette-light-bg",
      className
    )}>
      {/* Subtle dot pattern - only for light theme */}
      {variant === "light" && (
        <div className="absolute inset-0 bg-dot-pattern" />
      )}
      
      {/* Animated background gradients */}
      {variant === "light" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 animate-gradient" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
        </>
      ) : (
        // For dark theme, use a subtle gradient with vignette effect
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-warmPalette-dark-bg to-warmPalette-dark-bgAlt" />
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.7) 100%)",
                 backgroundSize: "100% 100%"
               }} 
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
} 