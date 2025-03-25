"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  connected: boolean
}

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  particleColor?: string
  backgroundColor?: string
  connectParticles?: boolean
  density?: number
  interactive?: boolean
  maxSpeed?: number
}

export function ParticleBackground({
  className,
  particleCount = 30,
  particleColor = "currentColor",
  backgroundColor = "transparent",
  connectParticles = true,
  density = 12000,
  interactive = true,
  maxSpeed = 0.3,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particles = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const mousePosition = useRef<{ x: number; y: number } | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const lastFrameTime = useRef<number>(0)
  const targetFPS = 30
  const frameInterval = 1000 / targetFPS
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false

  // Adjust particle count for reduced motion and mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const effectiveParticleCount = 
    prefersReducedMotion ? Math.min(10, particleCount) : 
    isMobile ? Math.min(15, particleCount) : 
    particleCount
  
  // Initialize particles
  const initParticles = useCallback((width: number, height: number) => {
    particles.current = []
    for (let i = 0; i < effectiveParticleCount; i++) {
      const size = Math.random() * 1.5 + 0.1
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * maxSpeed,
        speedY: (Math.random() - 0.5) * maxSpeed,
        color: particleColor,
        opacity: Math.random() * 0.5 + 0.2,
        connected: false
      })
    }
  }, [effectiveParticleCount, maxSpeed, particleColor])

  // Move particles
  const moveParticles = useCallback((width: number, height: number) => {
    particles.current.forEach(p => {
      // Update position
      p.x += p.speedX
      p.y += p.speedY

      // Bounce off edges
      if (p.x < 0 || p.x > width) p.speedX *= -1
      if (p.y < 0 || p.y > height) p.speedY *= -1
      
      // Mouse interaction (only if interactive and not reducing motion)
      if (interactive && mousePosition.current && !prefersReducedMotion) {
        const dx = p.x - mousePosition.current.x
        const dy = p.y - mousePosition.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 120
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          p.speedX += dx * force * 0.01
          p.speedY += dy * force * 0.01
          
          // Limit speed
          const currentSpeed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
          if (currentSpeed > maxSpeed * 1.5) {
            p.speedX = (p.speedX / currentSpeed) * maxSpeed * 1.5
            p.speedY = (p.speedY / currentSpeed) * maxSpeed * 1.5
          }
        }
      }
    })
  }, [interactive, maxSpeed, prefersReducedMotion])

  // Draw particles and connections
  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height)
    
    // Draw particles
    particles.current.forEach(p => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.opacity
      ctx.fill()
    })
    
    // Connect particles if enabled and not too many
    if (connectParticles && particles.current.length < 100) {
      // Reset connected state
      particles.current.forEach(p => {
        p.connected = false
      })
      
      // Only connect a limited number of particles to improve performance
      const connectionLimit = Math.min(particles.current.length, 8)
      
      for (let i = 0; i < particles.current.length; i++) {
        let connections = 0
        
        for (let j = i + 1; j < particles.current.length && connections < connectionLimit; j++) {
          const p1 = particles.current[i]
          const p2 = particles.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Connect particles that are close enough
          const maxDistance = Math.min(width * height / density, 150)
          if (distance < maxDistance) {
            connections++
            p1.connected = true
            p2.connected = true
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = particleColor
            ctx.globalAlpha = 0.15 * (1 - distance / maxDistance)
            ctx.stroke()
          }
        }
      }
    }
    
    ctx.globalAlpha = 1
  }, [connectParticles, density, particleColor])

  // Animation loop with throttling
  const animate = useCallback((timestamp: number) => {
    if (!canvasRef.current) return
    
    // Throttle frame rate
    const elapsed = timestamp - lastFrameTime.current
    if (elapsed < frameInterval) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }
    
    // Update last frame time, accounting for the delay
    lastFrameTime.current = timestamp - (elapsed % frameInterval)
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    moveParticles(dimensions.width, dimensions.height)
    drawParticles(ctx, dimensions.width, dimensions.height)
    
    animationRef.current = requestAnimationFrame(animate)
  }, [dimensions, drawParticles, frameInterval, moveParticles])

  // Initialize canvas and particles
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return
    
    // Setup canvas dimensions
    const updateDimensions = () => {
      if (!containerRef.current) return
      
      const { offsetWidth, offsetHeight } = containerRef.current
      const dpr = window.devicePixelRatio || 1
      
      // Set canvas dimensions with device pixel ratio for crisp rendering
      setDimensions({
        width: offsetWidth,
        height: offsetHeight
      })
      
      if (canvasRef.current) {
        canvasRef.current.width = offsetWidth * dpr
        canvasRef.current.height = offsetHeight * dpr
        canvasRef.current.style.width = `${offsetWidth}px`
        canvasRef.current.style.height = `${offsetHeight}px`
        
        // Scale context according to device pixel ratio
        const ctx = canvasRef.current.getContext('2d')
        if (ctx) {
          ctx.scale(dpr, dpr)
        }
      }
      
      initParticles(offsetWidth, offsetHeight)
    }
    
    updateDimensions()
    
    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateDimensions, 250)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [initParticles])

  // Start animation when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return
    
    // If prefers reduced motion, wait longer between animation frames
    if (prefersReducedMotion) {
      lastFrameTime.current = 0 
    }
    
    // Restart animation
    cancelAnimationFrame(animationRef.current)
    initParticles(dimensions.width, dimensions.height)
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, animate, initParticles, prefersReducedMotion])

  // Mouse interaction with throttling
  useEffect(() => {
    if (!interactive || !containerRef.current) return
    
    let throttleTimeout: NodeJS.Timeout | null = null
    const throttleDelay = 16
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || throttleTimeout) return
      
      throttleTimeout = setTimeout(() => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
          mousePosition.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          }
        }
        throttleTimeout = null
      }, throttleDelay)
    }
    
    const handleMouseLeave = () => {
      mousePosition.current = null
      if (throttleTimeout) {
        clearTimeout(throttleTimeout)
        throttleTimeout = null
      }
    }
    
    containerRef.current.addEventListener('mousemove', handleMouseMove)
    containerRef.current.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove)
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (throttleTimeout) {
        clearTimeout(throttleTimeout)
      }
    }
  }, [interactive])

  // For reduced motion, use very slow animations
  const effectiveMaxSpeed = prefersReducedMotion ? 0.05 : maxSpeed

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{ backgroundColor }}
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0"
        aria-hidden="true"
      />
    </div>
  )
} 