"use client"

import React, { useState } from "react"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { ColorThemeSection } from "@/components/ui/color-theme-section"
import { RevealSection } from "@/components/ui/reveal-section"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { ProjectCardAdvanced } from "@/components/ui/project-card-advanced"
import { SocialIcon } from "@/components/ui/social-icon"
import { AnimatedText } from "@/components/ui/animated-text"
import { ParticleBackground } from "@/components/ui/particle-background"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"

export function EffectsShowcase() {
  const [currentTheme, setCurrentTheme] = useState<"default" | "project1" | "project2" | "project3">("default")
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={40} 
        interactive={true}
      />
      
      {/* Hero Section with Animated Gradient */}
      <AnimatedGradient className="py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center min-h-[70vh]">
        <RevealSection delay={300}>
          <AnimatedText 
            text="Portfolio Effects Showcase" 
            className="text-4xl md:text-6xl font-bold mb-6"
            variant="character"
            delay={50}
          />
        </RevealSection>
        
        <RevealSection delay={600} direction="up">
          <AnimatedText 
            text="A collection of sophisticated, performant UI effects for your portfolio" 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
            variant="word"
            delay={80}
          />
        </RevealSection>
        
        <RevealSection delay={900}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group">
              Explore Effects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </RevealSection>
        
        <RevealSection delay={1200} className="mt-12">
          <div className="flex gap-4">
            <SocialIcon icon={Github} href="#" label="GitHub" variant="glow" />
            <SocialIcon icon={Linkedin} href="#" label="LinkedIn" variant="glow" />
            <SocialIcon icon={Twitter} href="#" label="Twitter" variant="glow" />
            <SocialIcon icon={Mail} href="#" label="Email" variant="glow" />
          </div>
        </RevealSection>
      </AnimatedGradient>
      
      {/* Color Theme Sections */}
      <div className="py-12">
        <RevealSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Color Theme Sections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sections that change color theme based on content. Click the buttons below to see different themes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Button variant="outline" onClick={() => setCurrentTheme("default")}>Default Theme</Button>
            <Button variant="outline" onClick={() => setCurrentTheme("project1")}>Blue Theme</Button>
            <Button variant="outline" onClick={() => setCurrentTheme("project2")}>Amber Theme</Button>
            <Button variant="outline" onClick={() => setCurrentTheme("project3")}>Green Theme</Button>
          </div>
        </RevealSection>
        
        <ColorThemeSection colorTheme={currentTheme} className="p-12 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Dynamic Color Theme</h3>
          <p className="mb-6">
            This section changes its color scheme based on the selected theme. The colors are designed to work well in both light and dark modes.
          </p>
          <Button>Themed Button</Button>
        </ColorThemeSection>
      </div>
      
      {/* Parallax Section */}
      <div className="py-24 bg-muted/30">
        <RevealSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Parallax Effects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elements that move at different speeds as you scroll, creating depth.
          </p>
        </RevealSection>
        
        <div className="relative max-w-5xl mx-auto px-6">
          <ParallaxSection speed={0.1} className="mb-12">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Slow Parallax Element</h3>
              <p>This element moves slower than your scroll speed.</p>
            </div>
          </ParallaxSection>
          
          <ParallaxSection speed={-0.1} className="mb-12">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Fast Parallax Element</h3>
              <p>This element moves faster than your scroll speed in the opposite direction.</p>
            </div>
          </ParallaxSection>
        </div>
      </div>
      
      {/* Project Cards */}
      <div className="py-24">
        <RevealSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Project Cards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over these cards to see advanced interactive effects.
          </p>
        </RevealSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <RevealSection delay={100}>
            <ProjectCardAdvanced
              title="3D Tilt Effect"
              description="This card features a 3D tilt effect that responds to mouse movement, creating a sense of depth and interactivity."
              tags={["React", "CSS", "3D Transform"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
            />
          </RevealSection>
          
          <RevealSection delay={200}>
            <ProjectCardAdvanced
              title="Spotlight Hover"
              description="A spotlight effect follows your cursor as you hover over the card, highlighting different areas."
              tags={["Tailwind", "JavaScript", "Interactive"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
            />
          </RevealSection>
          
          <RevealSection delay={300}>
            <ProjectCardAdvanced
              title="Animated Content"
              description="Content elements animate in sequence when you hover, creating a choreographed experience."
              tags={["Animation", "UX Design", "Microinteractions"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
            />
          </RevealSection>
        </div>
      </div>
      
      {/* Text Animation Showcase */}
      <div className="py-24 bg-muted/30">
        <RevealSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Text Animation Effects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Various ways to animate text for more engaging content.
          </p>
        </RevealSection>
        
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <RevealSection>
            <div className="p-8 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Character Animation</h3>
              <AnimatedText
                text="Each character animates individually."
                variant="character"
                delay={50}
                className="text-lg"
              />
            </div>
          </RevealSection>
          
          <RevealSection>
            <div className="p-8 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Word Animation</h3>
              <AnimatedText
                text="Each word animates as a unit."
                variant="word"
                delay={100}
                className="text-lg"
              />
            </div>
          </RevealSection>
          
          <RevealSection>
            <div className="p-8 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Typing Animation</h3>
              <AnimatedText
                text="Text appears as if being typed."
                variant="typing"
                delay={0}
                duration={1000}
                className="text-lg"
              />
            </div>
          </RevealSection>
          
          <RevealSection>
            <div className="p-8 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Gradient Animation</h3>
              <AnimatedText
                text="Text with animated color gradient."
                variant="gradient"
                className="text-lg font-bold"
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </div>
  )
} 