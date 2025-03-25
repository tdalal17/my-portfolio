"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  variant?: "character" | "word" | "line" | "typing" | "gradient"
  delay?: number
  duration?: number
  once?: boolean
}

export function AnimatedText({
  text,
  className,
  variant = "character",
  delay = 30,
  duration = 500,
  once = true
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Check if we should animate based on visibility and settings
  const shouldAnimate = isVisible && (!once || !hasAnimated)
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }
    
    const container = containerRef.current
    if (!container) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
            observer.unobserve(container)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.2 }
    )
    
    observer.observe(container)
    
    return () => {
      observer.unobserve(container)
    }
  }, [once])
  
  // Split text based on variant
  const renderContent = () => {
    if (variant === "character") {
      return (
        <span className="inline-block overflow-hidden">
          {text.split("").map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={cn(
                "inline-block transition-transform duration-300",
                shouldAnimate 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-full opacity-0"
              )}
              style={{ 
                transitionDelay: `${index * delay}ms`,
                transitionDuration: `${duration}ms`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      )
    }
    
    if (variant === "word") {
      return (
        <span>
          {text.split(" ").map((word, index, array) => (
            <span key={`${word}-${index}`} className="inline-block overflow-hidden">
              <span
                className={cn(
                  "inline-block transition-all duration-500",
                  shouldAnimate 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-full opacity-0"
                )}
                style={{ 
                  transitionDelay: `${index * delay}ms`,
                  transitionDuration: `${duration}ms`
                }}
              >
                {word}
              </span>
              {index !== array.length - 1 && "\u00A0"}
            </span>
          ))}
        </span>
      )
    }
    
    if (variant === "line") {
      return (
        <span className="inline-block overflow-hidden">
          <span
            className={cn(
              "inline-block transition-all",
              shouldAnimate 
                ? "translate-y-0 opacity-100" 
                : "translate-y-full opacity-0"
            )}
            style={{ 
              transitionDelay: `${delay}ms`,
              transitionDuration: `${duration}ms`
            }}
          >
            {text}
          </span>
        </span>
      )
    }
    
    if (variant === "typing") {
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
    }
    
    if (variant === "gradient") {
      return (
        <span
          className={cn(
            "inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent",
            shouldAnimate ? "animate-text-shimmer" : ""
          )}
        >
          {text}
        </span>
      )
    }
    
    return <span>{text}</span>
  }
  
  return (
    <div ref={containerRef} className={className}>
      {renderContent()}
    </div>
  )
}

// Add to your globals.css:
// @keyframes typing {
//   from { width: 0 }
//   to { width: 100% }
// }
// @keyframes blink {
//   50% { border-color: transparent }
// } 