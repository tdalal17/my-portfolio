"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function RevealSection({
  children,
  className,
  delay = 0,
  direction = "up"
}: RevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Map direction to initial transform value
  const directionMap = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10"
  }
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }
    
    const section = sectionRef.current
    if (!section) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before triggering the animation
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          // Once it's visible, we can stop observing
          observer.unobserve(section)
        }
      },
      { 
        threshold: 0.1,  // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"  // Trigger slightly before the element is in view
      }
    )
    
    observer.observe(section)
    
    return () => {
      observer.unobserve(section)
    }
  }, [delay, direction])
  
  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${directionMap[direction]}`,
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
} 