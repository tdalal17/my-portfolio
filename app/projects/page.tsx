import { Button } from "@/components/ui/button"
import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"
import { Construction } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <PageBackground variant="dark">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 min-h-[80vh] flex flex-col items-center justify-center">
        <SpotlightContainer className="mb-16 p-8 max-w-2xl w-full">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A showcase of my technical projects, case studies, and contributions
            </p>
          </div>
        </SpotlightContainer>

        <SpotlightContainer className="p-8 max-w-3xl w-full text-center">
          <div className="flex flex-col items-center gap-6 py-10">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
              <Construction className="h-10 w-10 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold">Projects Coming Soon</h2>
            
            <p className="text-muted-foreground text-center max-w-md">
              I'm currently working on updating my portfolio with my latest projects. 
              Please check back soon to see my work in cloud engineering, web development, and data engineering.
            </p>
            
            <div className="flex gap-4 mt-6">
              <Button variant="outline" asChild>
                <Link href="/">
                  Return Home
                </Link>
              </Button>
              
              <Button asChild>
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 p-4 border border-primary/20 rounded-lg bg-card/30">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Coming soon:</span> Projects in AWS cloud architecture, 
              full-stack web applications, data engineering pipelines, and more.
            </p>
          </div>
        </SpotlightContainer>
      </div>
    </PageBackground>
  )
}