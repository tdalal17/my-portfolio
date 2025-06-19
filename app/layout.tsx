"use client"

import React from "react"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="/assets/hero-image.jpg" 
          as="image"
          fetchPriority="high"
        />
      </head>
      <body 
        className={`${inter.variable} ${sora.variable} font-sans antialiased selection:bg-[#B46E3C]/20 selection:text-[#B46E3C]`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          disableTransitionOnChange={true}
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