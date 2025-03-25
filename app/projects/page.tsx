import { Button } from "@/components/ui/button"
import { PageBackground } from "@/components/ui/page-background"
import { Construction } from "lucide-react"
import Link from "next/link"
import { getProjects } from '@/lib/projectData'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Mark as static page
export const generateStaticParams = async () => {
  return [];
};

// Dynamically import the project card component
const ProjectCardAdvanced = dynamic(
  () => import('@/components/ui/project-card-advanced').then(mod => mod.ProjectCardAdvanced),
  {
    ssr: true,
    loading: () => <div className="h-48 w-full rounded-lg bg-card animate-pulse" />
  }
);

// Dynamically import non-critical components
const SpotlightContainer = dynamic(() => import('@/components/ui/spotlight-container').then(mod => mod.SpotlightContainer), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-12 w-3/4 bg-muted rounded-lg mx-auto" />
      <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
    </div>
  )
})

export default function ProjectsPage() {
  const projects = getProjects();
  
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
        </Suspense>
      </div>
    </PageBackground>
  )
}