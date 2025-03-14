import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function ProjectsPage() {
  return (
    <PageBackground variant="dark">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <SpotlightContainer className="mb-16 p-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A showcase of my technical projects, case studies, and contributions
            </p>
          </div>
        </SpotlightContainer>

        <SpotlightContainer className="p-0">
          <div className="p-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="overflow-x-auto pb-2">
                <TabsList className="inline-flex w-auto min-w-full md:w-auto">
                  <TabsTrigger value="all" className="px-4">All Projects</TabsTrigger>
                  <TabsTrigger value="web" className="px-4">Web Development</TabsTrigger>
                  <TabsTrigger value="cloud" className="px-4">Cloud Engineering</TabsTrigger>
                  <TabsTrigger value="data" className="px-4">Data Engineering</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Cloud-Native Application",
                      description:
                        "Developed a scalable microservices architecture using AWS ECS, API Gateway, and Lambda functions.",
                      image: "/placeholder.svg?height=300&width=500",
                      tags: ["AWS", "Docker", "Node.js", "Terraform"],
                      featured: true,
                    },
                    {
                      title: "Data Analytics Platform",
                      description:
                        "Built a real-time analytics dashboard using Python, AWS Kinesis, and React for visualizing customer insights.",
                      image: "/placeholder.svg?height=300&width=500",
                      tags: ["Python", "AWS", "React", "Data Analytics"],
                      featured: true,
                    },
                    {
                      title: "E-Commerce Website",
                      description:
                        "Developed a full-stack e-commerce platform with secure payment processing and inventory management.",
                      image: "/placeholder.svg?height=300&width=500",
                      tags: ["React", "Node.js", "MongoDB", "Stripe"],
                    },
                    {
                      title: "DevOps Automation",
                      description:
                        "Created CI/CD pipelines and infrastructure as code for automated deployment and scaling.",
                      image: "/placeholder.svg?height=300&width=500",
                      tags: ["Jenkins", "Terraform", "AWS", "Docker"],
                    },
                    {
                      title: "Mobile Application",
                      description:
                        "Built a cross-platform mobile app for task management with offline capabilities and cloud sync.",
                      image: "/placeholder.svg?height=300&width=500",
                      tags: ["React Native", "Firebase", "Redux"],
                    },
                    {
                      title: "Machine Learning Model",
                      description:
                        "Developed a predictive model for customer churn analysis using Python and scikit-learn.",
                      image: "/placeholder.svg?height=300&width=500",
                      tags: ["Python", "scikit-learn", "Pandas", "Jupyter"],
                    },
                  ].map((project, index) => (
                    <div key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tags={project.tags}
                        featured={project.featured}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="E-Commerce Website"
                    description="Developed a full-stack e-commerce platform with secure payment processing and inventory management."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  />
                  <ProjectCard
                    title="Portfolio Website"
                    description="Designed and developed a responsive portfolio website using modern web technologies."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["Next.js", "Tailwind CSS", "TypeScript"]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="cloud" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Cloud-Native Application"
                    description="Developed a scalable microservices architecture using AWS ECS, API Gateway, and Lambda functions."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["AWS", "Docker", "Node.js", "Terraform"]}
                    featured={true}
                  />
                  <ProjectCard
                    title="DevOps Automation"
                    description="Created CI/CD pipelines and infrastructure as code for automated deployment and scaling."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["Jenkins", "Terraform", "AWS", "Docker"]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Data Analytics Platform"
                    description="Built a real-time analytics dashboard using Python, AWS Kinesis, and React for visualizing customer insights."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["Python", "AWS", "React", "Data Analytics"]}
                    featured={true}
                  />
                  <ProjectCard
                    title="Machine Learning Model"
                    description="Developed a predictive model for customer churn analysis using Python and scikit-learn."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["Python", "scikit-learn", "Pandas", "Jupyter"]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SpotlightContainer>

        <SpotlightContainer className="mt-20 animate-fade-in p-0">
          <div className="p-8">
            <h2 className="mb-8 text-2xl font-bold text-gradient">Featured Case Study</h2>
            <div className="rounded-xl border bg-card shadow-sm hover-lift transition-all duration-500">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Case Study"
                    fill
                    className="rounded-t-xl object-cover md:rounded-l-xl md:rounded-tr-none"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold">Cloud-Native Microservices Architecture</h3>
                  <p className="mt-2 text-muted-foreground">
                    An in-depth look at designing and implementing a scalable, resilient microservices architecture on AWS.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Microservices</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-medium">Challenge</h4>
                      <p className="text-sm text-muted-foreground">
                        Migrating a monolithic application to a scalable, maintainable microservices architecture while
                        ensuring zero downtime.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Implemented a strangler pattern approach, gradually decomposing the monolith into containerized
                        microservices deployed on AWS ECS with auto-scaling capabilities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Achieved 99.99% uptime, reduced deployment time by 80%, and improved system scalability to handle
                        10x the previous load.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/projects/case-study">
                        Read Full Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightContainer>
      </div>
    </PageBackground>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  featured = false,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  featured?: boolean
}) {
  return (
    <Card className={`${featured ? "border-primary/50" : ""} card-hover animate-fade-in-up`}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="rounded-t-lg object-cover transition-transform duration-500 hover:scale-110"
        />
        {featured && (
          <div className="absolute right-2 top-2">
            <Badge className="bg-primary text-primary-foreground animate-pulse-subtle">Featured</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs hover-scale">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild className="hover-lift">
          <Link href="#">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="hover-lift">
          <Link href="#">
            Demo <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}