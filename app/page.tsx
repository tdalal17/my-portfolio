import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { SpotlightContainer } from "@/components/ui/spotlight-container"
import { ParticleBackground } from "@/components/particle-background"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Suspense>
          <ParticleBackground />
        </Suspense>
      </div>
      <Suspense fallback={
        <div className="min-h-[90vh] flex items-center justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-3xl mx-auto px-4">
            <div className="h-12 bg-muted rounded-lg w-3/4 mx-auto" />
            <div className="h-6 bg-muted rounded-lg w-1/2 mx-auto" />
            <div className="h-24 bg-muted rounded-lg w-full" />
          </div>
        </div>
      }>
        <HeroSection
          name="Tanay Dalal"
          title="Software Engineer & Cloud Developer"
          description="I'm a software engineer specializing in cloud engineering and full-stack development. I build scalable solutions and create engaging user experiences."
          profileImage="/Tanay-prfile.jpg"
        />
      </Suspense>
    </main>
  )
}