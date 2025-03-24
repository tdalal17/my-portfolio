"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [imgSrc, setImgSrc] = useState<string>("")
  const [imgError, setImgError] = useState(false)
  
  useEffect(() => {
    // Set the image path based on environment
    const basePath = window.location.hostname.includes('github.io') ? '/my-portfolio' : ''
    setImgSrc(`${basePath}${profileImage}`)
  }, [profileImage])
  
  const handleImageError = () => {
    console.error('Failed to load image')
    setImgError(true)
  }
  
  return (
    <section 
      className={cn(
        "relative min-h-[65vh] w-full overflow-hidden flex items-start pt-6 md:pt-10",
        className
      )}
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:gap-6 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-3">
            <div className="space-y-1 md:space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium mt-0 mb-4 md:mb-2 shadow-sm border border-primary/10">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="inline-flex rounded-full h-2 w-2 bg-green-500 animate-pulse"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="block text-foreground">Hi, I'm </span>
                <span className="text-gradient">{name}</span>
              </h1>
              <p className="text-xl font-medium text-primary">
                {title}
              </p>
            </div>
            
            <p className="max-w-[600px] text-foreground/90 md:text-xl">
              {description}
            </p>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
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
                className="border-primary/20 hover:border-primary/40 font-medium"
                size="lg"
              >
                <Link href={`${imgSrc.split('/Tanay-prfile.jpg')[0]}/Tanay.Dalal.pdf`} target="_blank" download className="flex items-center">
                  <span>Download Resume</span>
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-1">
              <Link 
                href="https://github.com/tdalal17" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-background hover:bg-primary/15 hover:text-primary border border-primary/10"
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
                  className="rounded-full bg-background hover:bg-primary/15 hover:text-primary border border-primary/10"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:dalaltanay7@gmail.com">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-background hover:bg-primary/15 hover:text-primary border border-primary/10"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Profile Photo - Using regular HTML img for better compatibility */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <div className="rounded-full w-full h-full border-4 border-background shadow-md overflow-hidden">
                {!imgError && imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-3xl">
                    {name.split(' ').map(word => word[0]).join('')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}