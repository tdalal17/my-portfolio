"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface OptimizedPageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function OptimizedPageTransition({ children, className }: OptimizedPageTransitionProps) {
  const pathname = usePathname()
  
  return (
    <div 
      key={pathname}
      className={cn(
        "animate-fade-in-up duration-300 ease-out",
        className
      )}
    >
      {children}
    </div>
  )
} 