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
  spotlightSize = 800,
  spotlightOpacity = 0.15,
  spotlightColor = "var(--primary-rgb)",
  borderRadius = "rounded-2xl",
  shadow = "shadow-lg",
  hoverShadow = "hover:shadow-xl",
  background = "bg-card/50 backdrop-blur-sm"
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
        "relative overflow-hidden border p-8 transition-all duration-300",
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
          background: `radial-gradient(${spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${spotlightColor}, ${spotlightOpacity}), transparent 40%)`
        }}
      />
      
      {isHovering && (
        <div 
          className="absolute w-20 h-20 rounded-full pointer-events-none animate-pulse-slow"
          style={{
            left: `${mousePosition.x - 40}px`,
            top: `${mousePosition.y - 40}px`,
            background: `radial-gradient(circle, rgba(${spotlightColor}, 0.07), transparent 70%)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      <div className="relative">
        {children}
      </div>
    </div>
  )
} 