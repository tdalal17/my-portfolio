"use client"

import React from "react"
import { useTheme } from "next-themes"

type ToasterProps = {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  expand?: boolean
  richColors?: boolean
}

const Toaster = ({ position = 'bottom-right', expand, richColors, ...props }: ToasterProps) => {
  const { theme } = useTheme()

  // Simple fallback - in a real app you'd implement a proper toast system
  // For now, just return null since we're not using toasts in the main portfolio
  return null
}

export { Toaster }
