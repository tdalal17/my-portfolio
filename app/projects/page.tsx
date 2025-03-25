import { Button } from "@/components/ui/button"
import { PageBackground } from "@/components/ui/page-background"
import { Construction } from "lucide-react"
import Link from "next/link"
import { type Project } from '@/lib/projectData'
import { Suspense } from 'react'

// Mark as static page
export const dynamic = 'force-static'
export const revalidate = false

// Import components
import { ProjectCardAdvanced } from '@/components/ui/project-card-advanced'
import { SpotlightContainer } from '@/components/ui/spotlight-container'

const projects: Project[] = [
  {
    id: "data-integration",
    title: "Data Integration Platform",
    description: "Led a 5-person Scrum team using Jira for sprint planning and backlog grooming, achieving 95% sprint velocity and delivering features on time across 6 sprints. Architected microservices using Spring Boot and domain-driven design.",
    tags: ["Java", "Spring Boot", "RESTful APIs", "Git/GitHub", "Jenkins", "Oracle SQL"],
    imageUrl: "/assets/projects/data-integration.jpg",
    projectUrl: "/projects/data-integration",
    featured: true,
    date: "March 2024"
  },
  {
    id: "enterprise-platform",
    title: "Enterprise Data Integration Platform",
    description: "Architected backend services using distributed systems principles, implementing fault-tolerant network protocols with 95% test coverage. Designed microservices architecture using Apache Kafka and AWS SQS, ensuring 99.9% message delivery reliability.",
    tags: ["Python", "Java", "AWS", "Apache Kafka", "React", "Microservices"],
    imageUrl: "/assets/projects/enterprise-platform.jpg",
    projectUrl: "/projects/enterprise-platform",
    featured: true,
    date: "January 2024"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration Project",
    description: "Led the migration of on-premises infrastructure to AWS cloud, implementing Infrastructure as Code using Terraform and CloudFormation. Reduced operational costs by 40% and improved system reliability.",
    tags: ["AWS", "Terraform", "Docker", "Python", "CI/CD"],
    imageUrl: "/assets/projects/cloud-migration.jpg",
    projectUrl: "/projects/cloud-migration",
    date: "October 2023"
  }
];

export default function ProjectsPage() {
  return (
    <PageBackground variant="dark">
      <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
        <Suspense fallback={
          <div className="animate-pulse space-y-4">
            <div className="h-12 w-3/4 bg-muted rounded-lg mx-auto" />
            <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
          </div>
        }>
          <SpotlightContainer className="max-w-4xl w-full space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-serif">
              A showcase of my technical projects, case studies, and contributions
            </p>
          </SpotlightContainer>
        </Suspense>
        
        <Suspense fallback={
          <div className="mt-24 max-w-2xl w-full animate-pulse">
            <div className="p-8 rounded-lg border border-muted">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-muted" />
                <div className="h-8 w-1/2 bg-muted rounded-lg" />
                <div className="h-24 w-full bg-muted rounded-lg" />
              </div>
            </div>
          </div>
        }>
          <SpotlightContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4">
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
          </SpotlightContainer>
        </Suspense>
      </div>
    </PageBackground>
  )
}