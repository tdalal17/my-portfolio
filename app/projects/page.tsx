import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from '@/components/ui/spotlight-container'
import { ProjectCardAdvanced } from '@/components/ui/project-card-advanced'
import { getProjects } from '@/lib/projectData'

export const dynamic = 'force-static'
export const revalidate = false

export default function ProjectsPage() {
  const projects = getProjects()

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
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4">
          {projects.map((project) => (
            <ProjectCardAdvanced
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </PageBackground>
  )
}
