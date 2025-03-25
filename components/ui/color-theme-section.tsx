"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ColorThemeSectionProps {
  className?: string
  children: React.ReactNode
  colorTheme: "default" | "project1" | "project2" | "project3"
}

const themeColors = {
  default: {
    background: "bg-background",
    text: "text-foreground",
    accent: "bg-primary"
  },
  project1: {
    background: "bg-blue-50 dark:bg-blue-950",
    text: "text-blue-900 dark:text-blue-50",
    accent: "bg-blue-500"
  },
  project2: {
    background: "bg-amber-50 dark:bg-amber-950",
    text: "text-amber-900 dark:text-amber-50",
    accent: "bg-amber-500"
  },
  project3: {
    background: "bg-emerald-50 dark:bg-emerald-950",
    text: "text-emerald-900 dark:text-emerald-50",
    accent: "bg-emerald-500"
  }
}

export function ColorThemeSection({ 
  className, 
  children, 
  colorTheme = "default" 
}: ColorThemeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    )
    
    observer.observe(section)
    
    return () => {
      observer.unobserve(section)
    }
  }, [])
  
  const colors = themeColors[colorTheme]
  
  return (
    <div 
      ref={sectionRef}
      className={cn(
        "transition-colors duration-700",
        isVisible ? colors.background : "bg-background",
        isVisible ? colors.text : "text-foreground",
        className
      )}
    >
      <div className="relative">
        {/* Accent line that appears when section is in view */}
        <div 
          className={cn(
            "absolute left-0 top-0 h-1 w-0 transition-all duration-1000",
            isVisible ? colors.accent + " w-full" : ""
          )} 
        />
        {children}
      </div>
    </div>
  )
} 