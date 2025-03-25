"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function OptimizedPageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  // If SSR or reduced motion is preferred, render without animation
  if (!isClient || prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className={className}
        >
          {children}
          
          {/* Simplified overlay effect for reduced jank */}
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  )
} 