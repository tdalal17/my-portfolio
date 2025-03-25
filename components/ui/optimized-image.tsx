"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number 
  fill?: boolean
  sizes?: string
  priority?: boolean
  className?: string
  style?: React.CSSProperties
  onLoad?: () => void
  aspectRatio?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  className,
  style,
  onLoad,
  aspectRatio = "aspect-square"
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div 
      className={cn(
        "overflow-hidden relative", 
        fill ? "w-full h-full" : aspectRatio,
        className
      )}
      style={{
        ...style,
        backgroundColor: isLoading ? "#f1f5f9" : "transparent",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width || 400 : undefined}
        height={!fill ? height || 400 : undefined}
        fill={fill}
        sizes={sizes}
        quality={85}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        className={cn(
          "object-cover transition-all duration-300",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"
        )}
        onLoad={() => {
          setIsLoading(false)
          if (onLoad) onLoad()
        }}
        style={{
          transformOrigin: "center",
          willChange: isLoading ? "filter, transform" : "auto",
          transform: isLoading ? "scale(1.05)" : "scale(1)",
          backfaceVisibility: "hidden"
        }}
      />
    </div>
  )
} 