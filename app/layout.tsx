import React from "react"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "./client-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tanay Dalal | Software Engineer & Cloud Enthusiast",
  description: "Personal portfolio of Tanay Dalal, Software Engineer and Cloud Enthusiast",
}

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
          href="/Tanay-prfile.webp" 
          as="image"
          fetchPriority="high"
        />

      </head>
      <body 
        className={`${inter.variable} ${sora.variable} font-sans antialiased selection:bg-[#B46E3C]/20 selection:text-[#B46E3C]`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
