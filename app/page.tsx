import dynamic from 'next/dynamic'
import Link from 'next/link'
import { PageBackground } from "@/components/ui/page-background"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from '@/components/hero-section'
import React from 'react'

// Minimal lazy loading for critical components only
const SpotlightContainer = dynamic(() => import('@/components/ui/spotlight-container').then(mod => ({ default: mod.SpotlightContainer })), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-muted/20 rounded-2xl h-32 w-full" />
})

const ParticleBackground = dynamic(() => import('@/components/ui/particle-background').then(mod => ({ default: mod.ParticleBackground })), {
  ssr: false,
  loading: () => null
})

// Lazy load the rest of the page content
const RestOfPageContent = dynamic(() => import('./components/RestOfPageContent'), {
  ssr: false,
  loading: () => (
    <div className="space-y-8 px-4">
      <div className="animate-pulse bg-muted/20 rounded-2xl h-64 w-full" />
      <div className="animate-pulse bg-muted/20 rounded-2xl h-48 w-full" />
      <div className="animate-pulse bg-muted/20 rounded-2xl h-64 w-full" />
      <div className="animate-pulse bg-muted/20 rounded-2xl h-48 w-full" />
      <div className="animate-pulse bg-muted/20 rounded-2xl h-32 w-full" />
    </div>
  )
})

// Mark as static page
export const generateStaticParams = async () => {
  return [];
};

export default function HomePage() {
  return (
    <PageBackground variant="dark">
      <HeroSection
        name="Tanay Dalal"
        title="Software Engineer & Cloud Developer"
        description="I'm a software engineer specializing in cloud engineering and full-stack development. I build scalable solutions and create engaging user experiences."
        profileImage="/Tanay-prfile.webp"
      />
      
      <ParticleBackground />

      <div>
        {/* About Me Section - Keep this critical above-the-fold content */}
        <section className="py-6 md:py-8 lg:py-10 animate-fade-in">
          <div className="container space-y-4 px-4 md:px-6">
            <SpotlightContainer>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                </div>
              </div>
              <div className="mx-auto max-w-3xl space-y-6 text-center sm:text-left mt-8">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm Tanay Dalal, a dedicated Software Engineer with a strong background in cloud technologies and full-stack development. Currently pursuing a Master of Information Technology at Virginia Polytechnic Institute and State University (expected May 2026), I recently completed my Bachelor of Information Technology and Management from Illinois Institute of Technology with a GPA of 3.5.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  My technical expertise spans AWS cloud services, API development, microservices architecture, and database design. I'm proficient in Java, Python, JavaScript, and various frameworks including Spring Boot. I'm passionate about building scalable, efficient systems that deliver exceptional user experiences.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Button asChild variant="outline" className="hover-lift">
                    <Link href="/about">
                      Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="hover-lift">
                    <Link href="/Tanay.Dalal.pdf" target="_blank" download>
                      Download Resume <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SpotlightContainer>
          </div>
        </section>

        {/* Lazy load everything else */}
        <RestOfPageContent />
      </div>
    </PageBackground>
  )
}

