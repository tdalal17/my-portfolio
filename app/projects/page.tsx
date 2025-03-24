import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function ProjectsPage() {
  return (
    <PageBackground variant="dark">
      <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
        <SpotlightContainer className="max-w-4xl w-full space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif">
            A showcase of my technical projects, case studies, and contributions
          </p>
        </SpotlightContainer>
        
        <SpotlightContainer className="mt-24 max-w-2xl w-full">
          <div className="flex flex-col items-center space-y-6 p-8 rounded-lg border border-[#B46E3C]/10">
            <div className="w-16 h-16 rounded-full bg-[#B46E3C]/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#B46E3C]"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium">Projects Coming Soon</h2>
            <p className="text-center text-muted-foreground max-w-md">
              I'm currently working on updating my portfolio with my latest projects.
              Please check back soon to see my work in cloud engineering, web
              development, and data engineering.
            </p>
          </div>
        </SpotlightContainer>
      </div>
    </PageBackground>
  )
}