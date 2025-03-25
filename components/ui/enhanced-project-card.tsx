"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Globe } from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "./optimized-image"

interface EnhancedProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl?: string
  codeUrl?: string
  detailsUrl?: string
  date?: string
  className?: string
}

export function EnhancedProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  codeUrl,
  detailsUrl,
  date,
  className,
}: EnhancedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Handle mouse movement for the spotlight and 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5
    const normalizedY = (y / rect.height) - 0.5
    
    // Limit tilt to a small amount (5 degrees)
    const tiltX = normalizedY * 5
    const tiltY = normalizedX * -5
    
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
    
    // Update spotlight position
    setMousePosition({ x, y })
  }
  
  // Reset card on mouse leave
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false)
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
  }
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  
  return (
    <div
      className={cn(
        "card-enhanced group/card relative overflow-hidden rounded-lg border bg-card will-change-transform shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={!prefersReducedMotion ? handleMouseMove : undefined}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out'
      }}
    >
      {/* Spotlight overlay effect */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-radial z-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            mixBlendMode: 'overlay'
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Project image with overlay */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <OptimizedImage
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "transition-transform duration-300",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 z-10">
        <h3 className={cn(
          "text-xl font-bold transition-transform duration-300 text-foreground",
          isHovered && !prefersReducedMotion ? "transform -translate-y-1" : ""
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "mt-2 text-muted-foreground line-clamp-2 transition-all duration-300",
          isHovered && !prefersReducedMotion ? "text-foreground" : ""
        )}>
          {description}
        </p>
        
        <div className={cn(
          "mt-4 flex flex-wrap gap-2 transition-all duration-500",
          isHovered && !prefersReducedMotion ? "opacity-100" : "opacity-80"
        )}>
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs transition-all duration-300 hover:bg-primary/20 border border-border/30">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className={cn(
          "mt-6 flex justify-between gap-2 transition-all duration-300",
          isHovered && !prefersReducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {demoUrl && (
            <Button size="sm" asChild className="group/button">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          
          {codeUrl && (
            <Button size="sm" variant="outline" asChild className="group/button">
              <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
          
          {detailsUrl && (
            <Button variant="ghost" size="sm" asChild className="ml-auto group/button">
              <Link href={detailsUrl}>
                Details
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/button:translate-x-1" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
} 