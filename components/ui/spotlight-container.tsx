"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightContainerProps {
  children: React.ReactNode
  className?: string
  spotlightSize?: number
  spotlightOpacity?: number
  spotlightColor?: string
  borderRadius?: string
  shadow?: string
  hoverShadow?: string
  background?: string
}

export function SpotlightContainer({
  children,
  className,
  spotlightSize = 900,
  spotlightOpacity = 0.35,
  spotlightColor = "var(--primary-rgb)",
  borderRadius = "rounded-2xl",
  shadow = "shadow-none",
  hoverShadow = "",
  background = "bg-transparent"
}: SpotlightContainerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div 
      className={cn(
        "relative overflow-hidden p-4 transition-all duration-300",
        isHovering ? "shadow-xl transform scale-[1.03] border-primary/10 border" : "",
        borderRadius,
        shadow,
        hoverShadow,
        background,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(${spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${spotlightColor}, ${spotlightOpacity}), transparent 35%)`
        }}
      />
      
      {isHovering && (
        <div 
          className="absolute w-48 h-48 rounded-full pointer-events-none animate-pulse-slow"
          style={{
            left: `${mousePosition.x - 40}px`,
            top: `${mousePosition.y - 40}px`,
            background: `radial-gradient(circle, rgba(${spotlightColor}, 0.25), transparent 70%)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      <div className={cn("relative", isHovering ? "scale-[1.01] transition-transform duration-300" : "")}>
        {children}
      </div>
    </div>
  )
} 