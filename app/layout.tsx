"use client"

import React, { useEffect } from "react"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Register service worker for caching
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        const basePath = window.location.hostname.includes('github.io') ? '/my-portfolio' : ''
        navigator.serviceWorker.register(`${basePath}/sw.js`)
          .then(registration => {
            console.log('SW registered: ', registration)
          })
          .catch(error => {
            console.log('SW registration failed: ', error)
          })
      })
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/hero-image.jpg" as="image" />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange={false}
          storageKey="tanay-portfolio-theme"
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}