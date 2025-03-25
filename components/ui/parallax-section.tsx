"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number // Positive values move slower, negative values move faster
  direction?: "vertical" | "horizontal"
}

export function ParallaxSection({
  children,
  className,
  speed = 0.2,
  direction = "vertical"
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return
    
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return
    
    // Set initial position
    content.style.transform = "translateY(0)"
    
    const handleScroll = () => {
      if (!section || !content) return
      
      // Get the section's position relative to the viewport
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how far the section is from the center of the viewport
      // Normalized to a value between -1 and 1
      const fromViewportCenter = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2)
      
      // Apply the parallax effect
      if (direction === "vertical") {
        content.style.transform = `translateY(${fromViewportCenter * speed * 100}px)`
      } else {
        content.style.transform = `translateX(${fromViewportCenter * speed * 100}px)`
      }
    }
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Initial calculation
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction])
  
  return (
    <div ref={sectionRef} className={cn("overflow-hidden", className)}>
      <div ref={contentRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
} 