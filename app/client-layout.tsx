"use client"

import React from "react"
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
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
  )
}
