import { Button } from "@/components/ui/button"
import { PageBackground } from "@/components/ui/page-background"
import { Construction } from "lucide-react"
import Link from "next/link"
import { type Project } from '@/lib/projectData'
import { SpotlightContainer } from '@/components/ui/spotlight-container'
import { ProjectCardAdvanced } from '@/components/ui/project-card-advanced'

// Mark as static page
export const dynamic = 'force-static'
export const revalidate = false

const projects: Project[] = [
  {
    id: "data-integration",
    title: "Data Integration Platform",
    description: "Led a 5-person Scrum team using Jira for sprint planning and backlog grooming, achieving 95% sprint velocity and delivering features on time across 6 sprints. Architected microservices using Spring Boot and domain-driven design.",
    tags: ["Java", "Spring Boot", "RESTful APIs", "Git/GitHub", "Jenkins", "Oracle SQL"],
    imageUrl: "/placeholder.jpg",
    projectUrl: "/projects",
    featured: true,
    date: "March 2024"
  },
  {
    id: "enterprise-platform",
    title: "Enterprise Data Integration Platform",
    description: "Architected backend services using distributed systems principles, implementing fault-tolerant network protocols with 95% test coverage. Designed microservices architecture using Apache Kafka and AWS SQS, ensuring 99.9% message delivery reliability.",
    tags: ["Python", "Java", "AWS", "Apache Kafka", "React", "Microservices"],
    imageUrl: "/placeholder.jpg",
    projectUrl: "/projects",
    featured: true,
    date: "January 2024"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration Project",
    description: "Led the migration of on-premises infrastructure to AWS cloud, implementing Infrastructure as Code using Terraform and CloudFormation. Reduced operational costs by 40% and improved system reliability.",
    tags: ["AWS", "Terraform", "Docker", "Python", "CI/CD"],
    imageUrl: "/placeholder.jpg",
    projectUrl: "/projects",
    date: "October 2023"
  }
];

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
