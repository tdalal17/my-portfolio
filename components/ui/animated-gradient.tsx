"use client"

import React, { useEffect, useRef } from "react"

interface AnimatedGradientProps {
  className?: string
  children?: React.ReactNode
}

export function AnimatedGradient({ className, children }: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return
      
      // Calculate mouse position relative to the container
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Convert to percentage
      const xPercent = Math.floor((x / rect.width) * 100)
      const yPercent = Math.floor((y / rect.height) * 100)
      
      // Update the gradient position
      container.style.setProperty('--x-position', `${xPercent}%`)
      container.style.setProperty('--y-position', `${yPercent}%`)
    }
    
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove)
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <div 
      ref={containerRef}
      className={`relative bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 transition-all duration-300 ease-out ${className}`}
      style={{
        backgroundPosition: 'var(--x-position, 0%) var(--y-position, 0%)',
        backgroundSize: '200% 200%'
      }}
    >
      {children}
    </div>
  )
} 