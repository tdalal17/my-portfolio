"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedHeadingProps {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
  variant?: "default" | "gradient" | "highlight" | "typewriter" | "reveal"
  delay?: number
  duration?: number
  once?: boolean
  color?: string
}

export function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  variant = "default",
  delay = 100,
  duration = 500,
  once = true,
  color,
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  
  // Determine if we should animate
  const shouldAnimate = !prefersReducedMotion && isVisible && (!once || !hasAnimated)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }
    
    const heading = headingRef.current
    if (!heading) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
            observer.unobserve(heading)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.2 }
    )
    
    observer.observe(heading)
    
    return () => {
      observer.unobserve(heading)
    }
  }, [once, prefersReducedMotion])
  
  // Split text for character animations
  const characters = text.split('')
  
  // Different variants
  const variantClasses = {
    default: "text-foreground",
    gradient: "text-gradient",
    highlight: "text-foreground relative",
    typewriter: "text-foreground font-mono",
    reveal: "text-foreground",
  }
  
  // Render different animation variants
  const renderContent = () => {
    switch (variant) {
      case "gradient":
        return (
          <span 
            className={cn(
              "bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent",
              shouldAnimate ? "animate-text-shimmer" : ""
            )}
          >
            {text}
          </span>
        )
        
      case "highlight":
        return (
          <>
            {text}
            <span 
              className={cn(
                "absolute bottom-0 left-0 h-[0.2em] w-0 bg-primary transition-all duration-1000",
                shouldAnimate ? "w-full" : ""
              )}
              style={{ 
                transitionDelay: `${delay}ms`,
              }}
            />
          </>
        )
        
      case "typewriter":
        return (
          <span
            className={cn(
              "inline-block border-r-2 border-primary",
              shouldAnimate ? "animate-typing" : "w-0 overflow-hidden"
            )}
            style={{ 
              maxWidth: `${text.length}ch`,
              animation: shouldAnimate 
                ? `typing ${duration * text.length / 100}ms steps(${text.length}) ${delay}ms forwards, blink 1s step-end infinite` 
                : "none"
            }}
          >
            {text}
          </span>
        )
        
      case "reveal":
        return (
          <span className="inline-block overflow-hidden">
            {characters.map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={cn(
                  "inline-block transition-all",
                  shouldAnimate 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-full opacity-0"
                )}
                style={{ 
                  transitionDelay: `${delay + index * 30}ms`,
                  transitionDuration: `${duration}ms`
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        )
        
      default:
        return text
    }
  }
  
  return (
    <Tag
      ref={headingRef}
      className={cn(
        "font-bold tracking-tight transition-colors",
        variantClasses[variant],
        className
      )}
      style={color ? { color } : undefined}
    >
      {renderContent()}
    </Tag>
  )
} 