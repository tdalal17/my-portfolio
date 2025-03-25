import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPublicPath(path: string): string {
  // When in the browser
  if (typeof window !== 'undefined') {
    const isGitHubPages = window.location.hostname.includes('github.io')
    return isGitHubPages ? `/my-portfolio${path}` : path
  }
  
  // When rendering on the server, use environment variable
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : ''
  return `${basePath}${path}`
}