"use client"

import React from "react"
import Link from "next/link"
import { WaveBackground } from "@/components/ui/wave-background"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProfileFallback } from "./ProfileFallback"

interface HeroSectionProps {
  className?: string
  name: string
  title: string
  description: string
  profileImage: string
}

export function HeroSection({
  className,
  name = "Tanay Dalal",
  title = "Software Engineer",
  description = "specializing in backend development and cloud architecture. AWS Certified with expertise in Java, Python, and microservices.",
  profileImage = "/Tanay-prfile.jpg"
}: HeroSectionProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : ''
  
  return (
    <section 
      className={cn(
        "relative min-h-[90vh] w-full overflow-hidden flex items-center",
        className
      )}
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="inline-flex rounded-full h-2 w-2 bg-primary animate-pulse"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="block text-foreground dark:text-warmPalette-textPrimary">Hi, I'm </span>
                <span className="text-gradient">{name}</span>
              </h1>
              <p className="text-xl font-medium text-primary">
                {title}
              </p>
            </div>
            
            <p className="max-w-[600px] text-muted-foreground dark:text-warmPalette-textSecondary md:text-xl">
              {description}
            </p>
            
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Link href="/contact" className="flex items-center">
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-primary/20 hover:border-primary/40"
                size="lg"
              >
                <Link href={`${basePath}/Tanay.Dalal.pdf`} target="_blank" download className="flex items-center">
                  <span>Download Resume</span>
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-background hover:bg-primary/10 hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link 
                href="https://linkedin.com/in/tanaydalal7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-background hover:bg-primary/10 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:dalaltanay7@gmail.com">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-background hover:bg-primary/10 hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Profile Photo - Using our new robust component */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-square">
              <div className="rounded-full w-full h-full border-4 border-background dark:border-[#312B22] shadow-md overflow-hidden">
                <ProfileFallback
                  src={profileImage}
                  alt={name}
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}