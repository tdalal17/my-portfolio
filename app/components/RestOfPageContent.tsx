import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, Calendar, Award, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getFeaturedProjects } from '@/lib/projectData'

// Lazy load SpotlightContainer
const SpotlightContainer = dynamic(() => import('@/components/ui/spotlight-container').then(mod => ({ default: mod.SpotlightContainer })), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-muted/20 rounded-2xl h-32 w-full" />
})

// Memoized skill badge component
const SkillBadge = React.memo(({ name, delay = 0 }: { name: string; delay?: number }) => {
  return (
    <Badge 
      variant="secondary" 
      className="text-sm px-3 py-1 bg-muted/50 hover:bg-muted/80 transition-colors animate-fade-in-up cursor-default"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {name}
    </Badge>
  )
})

SkillBadge.displayName = 'SkillBadge'

// Memoized project card component
const ProjectCard = React.memo(({
  title,
  description,
  tags,
  date,
  delay = 0,
}: {
  title: string
  description: string
  tags: string[]
  date?: string
  delay?: number
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.2}s` }}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
          {date && <span className="text-sm text-muted-foreground">{date}</span>}
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-xl transition-all duration-300" />
    </div>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default function RestOfPageContent() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Technical Skills Section */}
      <section className="py-6 md:py-8 lg:py-10 mt-0">
        <div className="container space-y-6 px-4 md:px-6">
          <SpotlightContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My core technologies and areas of expertise
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 animate-fade-in-up">
                  <h3 className="text-xl font-bold">Backend & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "API Development",
                      "AWS Lambda",
                      "AWS EC2",
                      "AWS S3",
                      "AWS DynamoDB",
                      "AWS CloudWatch",
                      "AWS SNS",
                      "Microservices",
                      "Docker",
                      "Database Design"
                    ].map((skill, index) => (
                      <SkillBadge key={skill} name={skill} delay={index} />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-xl font-bold">Languages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Python",
                      "JavaScript",
                      "HTML/CSS",
                      "C++",
                      "Shell Scripting",
                      "Spring Boot"
                    ].map((skill, index) => (
                      <SkillBadge key={skill} name={skill} delay={index} />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <h3 className="text-xl font-bold">Development & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "CI/CD",
                      "Agile Development",
                      "JUnit",
                      "PyTest",
                      "Jenkins"
                    ].map((skill, index) => (
                      <SkillBadge key={skill} name={skill} delay={index} />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <h3 className="text-xl font-bold">Systems & Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SQL",
                      "NoSQL",
                      "MongoDB",
                      "RESTful APIs",
                      "Cloud Architecture",
                      "Oracle SQL"
                    ].map((skill, index) => (
                      <SkillBadge key={skill} name={skill} delay={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightContainer>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-6 md:py-8 lg:py-10">
        <div className="container space-y-6 px-4 md:px-6">
          <SpotlightContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  My work history and professional achievements
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl space-y-4 mt-6">
              <div className="rounded-lg p-4 animate-fade-in-up">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                    </div>
                    <p className="text-lg">Alight Solutions</p>
                  </div>
                  <div className="mt-2 md:mt-0 space-y-1 text-right">
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>May 2023 – August 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>Chicago, IL</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-1 list-disc pl-5 text-foreground">
                  <li>Designed and implemented backend microservices using Python and Java, creating scalable APIs and achieving 40% performance improvement through containerized deployment.</li>
                  <li>Developed responsive web interfaces and RESTful APIs with comprehensive documentation, maintaining 99% uptime.</li>
                  <li>Orchestrated automated testing pipelines using JUnit and PyTest, reducing deployment time by 50% while maintaining quality standards.</li>
                  <li>Built and optimized CI/CD pipelines integrating automated testing, monitoring, and deployment strategies.</li>
                </ul>
              </div>
            </div>
          </SpotlightContainer>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-6 md:py-8 lg:py-10">
        <div className="container space-y-6 px-4 md:px-6">
          <SpotlightContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Some of my recent work and side projects
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    date={project.date}
                    delay={index}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="hover-lift">
                  <Link href="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SpotlightContainer>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-6 md:py-8 lg:py-10">
        <div className="container space-y-6 px-4 md:px-6">
          <SpotlightContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl space-y-4 mt-6">
              <div className="rounded-lg p-4 animate-fade-in-up">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Master of Information Technology</h3>
                    </div>
                    <p className="text-lg">Virginia Polytechnic Institute and State University</p>
                  </div>
                  <div className="mt-2 md:mt-0 space-y-1 text-right">
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>Expected May 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>Blacksburg, VA</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Bachelor of Information Technology and Management</h3>
                    </div>
                    <p className="text-lg">Illinois Institute of Technology</p>
                  </div>
                  <div className="mt-2 md:mt-0 space-y-1 text-right">
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>Graduated May 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <span className="font-medium">GPA: 3.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 md:py-8 lg:py-10">
        <div className="container px-4 md:px-6">
          <SpotlightContainer>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  I'm always interested in new opportunities and exciting projects. Let's connect!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#B46E3C] hover:bg-[#B46E3C]/90 text-white">
                  <Link href="/contact">
                    Get In Touch <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#B46E3C]/20 hover:border-[#B46E3C]/40 hover:bg-[#B46E3C]/10">
                  <Link href="https://linkedin.com/in/tanay-dalal" target="_blank" rel="noopener noreferrer">
                    LinkedIn <Linkedin className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SpotlightContainer>
        </div>
      </section>
    </>
  )
} 