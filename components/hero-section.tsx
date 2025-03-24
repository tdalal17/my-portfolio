"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SpotlightContainer } from "@/components/ui/spotlight-container"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface HeroSectionProps {
  name: string
  title: string
  description: string
  profileImage: string
}

export function HeroSection({ name, title, description, profileImage }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  
  // The useEffect ensures we only animate once the component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <section 
      className="min-h-[65vh] flex items-center justify-center pt-6 md:pt-10 pb-10 md:pb-16 overflow-hidden relative animate-fade-in"
      style={{ 
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div className="absolute inset-0 bg-dot-pattern -z-10" aria-hidden="true" />
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-4 lg:gap-6 xl:grid-cols-2">
          <div className="flex flex-col items-center space-y-3 text-center xl:items-start xl:text-left">
            <SpotlightContainer className="p-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hi, I'm{" "}
                <span className="text-gradient">{name}</span>
              </h1>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl mt-2">
                {title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-2">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-1">
                <Button asChild size="lg" className="hover-lift">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-lift">
                  <Link href="/Tanay.Dalal.pdf" target="_blank" download>
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-6 text-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Based in United States</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1 animate-pulse" />
                  <span className="text-sm">Available for Opportunities</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Button variant="outline" size="icon" className="rounded-full hover-lift" asChild>
                  <Link href="https://github.com/tdalal17" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover-lift" asChild>
                  <Link href="https://linkedin.com/in/tanay-dalal-317a01276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover-lift" asChild>
                  <Link href="mailto:tdalal@vt.edu" aria-label="Email Me">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </SpotlightContainer>
          </div>
          <div className="flex items-center justify-center xl:justify-end">
            <div 
              className="relative max-w-[300px] w-full mx-auto animate-fade-in"
              style={{ 
                animationDelay: '0.2s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
              }}
            >
              <div className="relative z-10 overflow-hidden rounded-full border-4 border-primary/10 shadow-xl">
                <AspectRatio ratio={1/1} className="bg-muted">
                  <Image
                    src={profileImage}
                    alt="Profile photo"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </AspectRatio>
              </div>
              <div 
                className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-primary/60 -z-10 blur-xl opacity-30 animate-pulse-slow"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
