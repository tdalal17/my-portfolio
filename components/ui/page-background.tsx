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
      variant === "dark" ? "bg-background" : "bg-background",
      className
    )}>
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
} 