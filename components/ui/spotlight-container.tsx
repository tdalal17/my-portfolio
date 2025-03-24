"use client"

import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SpotlightContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  spotlightSize?: number
}

export function SpotlightContainer({
  children,
  className,
  spotlightSize = 300,
  ...props
}: SpotlightContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  // Default to assuming reducedMotion on server, will update on client
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)
  
  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(motionQuery.matches)
      
      const updateMotionPreference = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      motionQuery.addEventListener('change', updateMotionPreference)
      return () => {
        motionQuery.removeEventListener('change', updateMotionPreference)
      }
    }
  }, [])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || prefersReducedMotion) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setPosition({ x, y })
    setOpacity(1)
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    setOpacity(0)
  }
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-300",
        isHovered && !prefersReducedMotion ? "shadow-lg border-primary/20 scale-[1.01]" : "",
        "p-4 md:p-6",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Spotlight effect */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.15), transparent)`,
            opacity,
            willChange: "opacity, background"
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Container border glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500",
          isHovered && !prefersReducedMotion ? "opacity-100" : ""
        )}
        style={{
          boxShadow: "inset 0 0 0 1px rgba(var(--primary-rgb), 0.2)",
          willChange: "opacity"
        }}
        aria-hidden="true"
      />
      
      {/* Content with relative positioning to appear above effects */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
