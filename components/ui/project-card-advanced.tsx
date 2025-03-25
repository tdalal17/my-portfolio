"use client"

import React, { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardAdvancedProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  className?: string
}

export function ProjectCardAdvanced({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  className
}: ProjectCardAdvancedProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Handle mouse movement for the 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Calculate rotation based on mouse position
    // Max rotation of 10 degrees
    const rotateX = ((y / rect.height) - 0.5) * -10
    const rotateY = ((x / rect.width) - 0.5) * 10
    
    // Update card style
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    
    // Update mouse position for the spotlight effect
    setMousePosition({ x, y })
  }
  
  // Reset the card when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false)
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }
  }
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card p-0 shadow-md transition-all duration-300",
        isHovered && !prefersReducedMotion ? "shadow-xl scale-[1.02]" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={!prefersReducedMotion ? handleMouseMove : undefined}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {/* Spotlight overlay effect */}
      {isHovered && !prefersReducedMotion && (
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-radial from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            mixBlendMode: 'overlay'
          }}
        />
      )}
      
      {/* Project image with overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && !prefersReducedMotion ? "scale-110" : ""
          )}
          style={{
            transform: isHovered && !prefersReducedMotion ? 'scale(1.1)' : 'scale(1)',
            willChange: 'transform',
            transformOrigin: 'center',
            backfaceVisibility: 'hidden'
          }}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-70" : "opacity-50"
        )} />
      </div>
      
      {/* Content */}
      <div className="relative p-6 z-10">
        <h3 className={cn(
          "text-xl font-bold transition-transform duration-300",
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
            <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className={cn(
          "mt-6 flex items-center text-sm font-medium text-primary transition-all duration-300",
          isHovered && !prefersReducedMotion ? "opacity-100" : "opacity-0 translate-y-2"
        )}>
          <Link href={projectUrl} className="group/link flex items-center">
            View Project 
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
} 