"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname()
  
  return (
    <div 
      key={pathname}
      className={cn(
        "animate-fade-in-up",
        className
      )}
    >
      {children}
    </div>
  )
} 