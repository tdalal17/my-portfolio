"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface HeroSectionProps {
  name: string
  title: string
  description: string
  profileImage: string
}

export function HeroSection({ name, title, description, profileImage }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false)
  
  return (
    <section 
      className="min-h-[90vh] flex items-center justify-center pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-dot-pattern -z-10" aria-hidden="true" />
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col items-center space-y-4 text-center xl:items-start xl:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Hi, I'm{" "}
                <span className="text-gradient bg-gradient-to-r from-[#B46E3C] to-[#D4A373] bg-clip-text text-transparent">{name}</span>
              </h1>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground/80">
                {title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#B46E3C] hover:bg-[#B46E3C]/90 text-white">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#B46E3C]/20 hover:border-[#B46E3C]/40 hover:bg-[#B46E3C]/10">
                <Link href="/Tanay.Dalal.pdf" target="_blank" download>
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-foreground/80">
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
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#B46E3C]/10 hover:text-[#B46E3C] border border-[#B46E3C]/10" asChild>
                <Link href="https://github.com/tdalal17" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#B46E3C]/10 hover:text-[#B46E3C] border border-[#B46E3C]/10" asChild>
                <Link href="https://linkedin.com/in/tanay-dalal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#B46E3C]/10 hover:text-[#B46E3C] border border-[#B46E3C]/10" asChild>
                <Link href="mailto:tdalal@vt.edu" aria-label="Email Me">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center xl:justify-end">
            <div className="relative max-w-[400px] w-full mx-auto">
              <div className="relative z-10 overflow-hidden rounded-full border-4 border-[#B46E3C]/10 shadow-xl">
                <AspectRatio ratio={1/1} className="bg-muted">
                  {!imgError ? (
                    <Image
                      src={profileImage}
                      alt={`${name}'s profile photo`}
                      fill
                      priority
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#B46E3C]/10 text-[#B46E3C] font-bold text-3xl">
                      {name.split(' ').map(word => word[0]).join('')}
                    </div>
                  )}
                </AspectRatio>
              </div>
              <div 
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#B46E3C] to-[#D4A373] -z-10 blur-2xl opacity-40 animate-pulse"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}