"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface WaveBackgroundProps {
  className?: string
  centerX?: number
  centerY?: number
  interactive?: boolean
  color1?: string
  color2?: string
  color3?: string
}

export function WaveBackground({
  className,
  centerX = 75,
  centerY = 50,
  interactive = true,
  color1 = "rgba(160, 107, 78, 0.2)",  // Terracotta
  color2 = "rgba(208, 180, 159, 0.15)", // Soft Caramel
  color3 = "rgba(231, 168, 124, 0.1)"  // Muted Copper
}: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>(0)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)
    
    // Convert percentage to actual position
    const center = {
      x: (window.innerWidth * centerX) / 100,
      y: (window.innerHeight * centerY) / 100
    }
    
    // Initialize mouse position to center
    mousePosition.current = { x: center.x, y: center.y }
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        mousePosition.current = {
          x: e.clientX,
          y: e.clientY
        }
      }
    }
    
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }
    
    // Wave parameters
    const waves = [
      { color: color1, amplitude: 25, frequency: 0.02, speed: 0.01, phase: 0 },
      { color: color2, amplitude: 20, frequency: 0.03, speed: 0.015, phase: 0 },
      { color: color3, amplitude: 15, frequency: 0.01, speed: 0.02, phase: 0 }
    ]
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update wave phases
      waves.forEach(wave => {
        wave.phase += wave.speed
      })
      
      // Draw waves
      waves.forEach(wave => {
        drawWave(ctx, wave, center, mousePosition.current)
      })
      
      animationFrameId.current = requestAnimationFrame(animate)
    }
    
    // Draw a single wave
    const drawWave = (
      ctx: CanvasRenderingContext2D,
      wave: { color: string; amplitude: number; frequency: number; phase: number },
      center: { x: number; y: number },
      mouse: { x: number; y: number }
    ) => {
      const { color, amplitude, frequency, phase } = wave
      
      // Calculate influence from mouse position (subtle effect)
      const mouseInfluence = interactive ? 0.2 : 0
      const influenceX = (mouse.x - center.x) * mouseInfluence
      const influenceY = (mouse.y - center.y) * mouseInfluence
      
      ctx.beginPath()
      
      // Draw concentric waves
      for (let radius = 50; radius < Math.max(canvas.width, canvas.height); radius += 20) {
        // Calculate the adjusted radius, ensuring it's always positive
        const adjustedRadius = Math.max(
          10, // Minimum radius to ensure it's always positive
          radius + 
          amplitude * Math.sin(frequency * radius + phase) + 
          (influenceX * Math.sin(radius * 0.01)) + 
          (influenceY * Math.cos(radius * 0.01))
        )
        
        ctx.beginPath()
        ctx.arc(center.x, center.y, adjustedRadius, 0, Math.PI * 2)
        ctx.strokeStyle = color
        ctx.lineWidth = 1.5
        ctx.stroke()
      }
    }
    
    // Start animation
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [centerX, centerY, interactive, color1, color2, color3])
  
  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 -z-10", className)}
      aria-hidden="true"
    />
  )
} 