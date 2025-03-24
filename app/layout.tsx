"use client"

import type React from "react"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
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