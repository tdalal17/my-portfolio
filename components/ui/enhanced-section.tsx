"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface EnhancedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "muted" | "accent" | "gradient"
  animate?: boolean
  id?: string
}

export function EnhancedSection({
  children,
  className,
  variant = "default",
  animate = true,
  id,
  ...props
}: EnhancedSectionProps & React.HTMLAttributes<HTMLElement>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  
  useEffect(() => {
    if (!animate || prefersReducedMotion) {
      setIsVisible(true)
      return
    }
    
    const section = sectionRef.current
    if (!section) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(section) // Once visible, stop observing
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )
    
    observer.observe(section)
    
    return () => {
      observer.unobserve(section)
    }
  }, [animate])
  
  const variantClasses = {
    default: "section-default",
    muted: "section-muted",
    accent: "section-accent",
    gradient: "section-gradient"
  }
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        variantClasses[variant],
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-700",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6 relative">
        {/* Optional pattern background for visual interest */}
        {variant !== "gradient" && (
          <div 
            className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none dark:opacity-[0.02]" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
            aria-hidden="true"
          />
        )}
        
        {children}
      </div>
    </section>
  )
} 