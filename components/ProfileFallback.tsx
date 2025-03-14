"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface ProfileFallbackProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function ProfileFallback({ 
  src, 
  alt, 
  className = "",
  width = 400,
  height = 400
}: ProfileFallbackProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [error, setError] = useState(false)
  const [fallbackAttempted, setFallbackAttempted] = useState(false)
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : ''
  
  // Extract initials from alt text for fallback
  const initials = alt
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()

  const handleError = () => {
    console.error(`Failed to load image: ${imageSrc}`)
    
    // If the first path failed and we haven't tried the fallback yet
    if (!fallbackAttempted) {
      setFallbackAttempted(true)
      
      // Try alternative paths
      if (imageSrc.startsWith(basePath)) {
        // Try without basePath
        setImageSrc(imageSrc.replace(basePath, ''))
      } else {
        // Try with basePath
        setImageSrc(`${basePath}${imageSrc}`)
      }
    } else {
      // If we've already tried a fallback, give up and show the placeholder
      setError(true)
    }
  }

  return (
    <>
      {!error ? (
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onError={handleError}
          priority
        />
      ) : (
        <div className={`w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl ${className}`}>
          {initials}
        </div>
      )}
    </>
  )
}