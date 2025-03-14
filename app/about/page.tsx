"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"
import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [imgSrc, setImgSrc] = useState<string>("")
  const [imgError, setImgError] = useState(false)
  
  useEffect(() => {
    // Set the image path based on environment
    const basePath = window.location.hostname.includes('github.io') ? '/my-portfolio' : ''
    setImgSrc(`${basePath}/Tanay-prfile.jpg`)
  }, [])
  
  const handleImageError = () => {
    console.error('Failed to load image')
    setImgError(true)
  }

  return (
    <PageBackground variant="dark">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <SpotlightContainer className="mb-16 p-0 overflow-visible">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px] p-8">
            <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">About Me</h1>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Tanay Dalal, a dedicated Software Engineer with a strong background in cloud technologies and full-stack development. Currently pursuing a Master of Information Technology at Virginia Polytechnic Institute and State University (expected May 2026), I recently completed my Bachelor of Information Technology and Management from Illinois Institute of Technology with a GPA of 3.5.
                </p>
                <p>
                  My technical expertise spans AWS cloud services, API development, microservices architecture, and database design. I'm proficient in Java, Python, JavaScript, and various frameworks including Spring Boot. I'm passionate about building scalable, efficient systems that deliver exceptional user experiences.
                </p>
                <p>
                  I hold AWS certifications as a Certified Cloud Practitioner and Cloud Developer, demonstrating my commitment to cloud technologies. My professional experience includes roles at Alight Solutions, CVS, and Oakton Community College, where I've developed microservices, optimized CI/CD pipelines, and implemented efficient workflows.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl border bg-muted animate-float">
                {!imgError && imgSrc ? (
                  <img 
                    src={imgSrc}
                    alt="Tanay Dalal"
                    className="w-full h-full object-cover rounded-xl"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-2xl font-bold">
                    TD
                  </div>
                )}
              </div>
            </div>
          </div>
        </SpotlightContainer>

        <SpotlightContainer className="p-0">
          <div className="p-8">
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Skills</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden sm:inline">Certifications</span>
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="education" className="mt-6 space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Master of Information Technology</CardTitle>
                      <CardDescription>Virginia Polytechnic Institute and State University</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Currently pursuing advanced studies in Information Technology with a focus on cloud computing and software engineering.
                      </p>
                      <div className="mt-4 flex justify-between">
                        <span className="text-muted-foreground">Expected May 2026</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Bachelor of Information Technology and Management</CardTitle>
                      <CardDescription>Illinois Institute of Technology</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Completed undergraduate studies with a focus on information technology management, software development, and cloud technologies.
                      </p>
                      <div className="mt-4 flex justify-between">
                        <span className="text-muted-foreground">May 2024</span>
                        <span className="text-muted-foreground">GPA: 3.5</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="mt-6 space-y-6">
                <h2 className="text-2xl font-bold">Technical Skills</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Backend & Cloud</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-3 py-1 hover-lift">API Development</Badge>
                      <Badge className="px-3 py-1 hover-lift">AWS Lambda</Badge>
                      <Badge className="px-3 py-1 hover-lift">AWS EC2</Badge>
                      <Badge className="px-3 py-1 hover-lift">AWS S3</Badge>
                      <Badge className="px-3 py-1 hover-lift">AWS DynamoDB</Badge>
                      <Badge className="px-3 py-1 hover-lift">AWS CloudWatch</Badge>
                      <Badge className="px-3 py-1 hover-lift">AWS SNS</Badge>
                      <Badge className="px-3 py-1 hover-lift">Microservices Architecture</Badge>
                      <Badge className="px-3 py-1 hover-lift">Docker</Badge>
                      <Badge className="px-3 py-1 hover-lift">Database Design</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Languages & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-3 py-1 hover-lift">Java</Badge>
                      <Badge className="px-3 py-1 hover-lift">Python</Badge>
                      <Badge className="px-3 py-1 hover-lift">JavaScript</Badge>
                      <Badge className="px-3 py-1 hover-lift">HTML/CSS</Badge>
                      <Badge className="px-3 py-1 hover-lift">C++</Badge>
                      <Badge className="px-3 py-1 hover-lift">Shell Scripting</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Development & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-3 py-1 hover-lift">Spring Boot</Badge>
                      <Badge className="px-3 py-1 hover-lift">Git</Badge>
                      <Badge className="px-3 py-1 hover-lift">CI/CD</Badge>
                      <Badge className="px-3 py-1 hover-lift">Microservices</Badge>
                      <Badge className="px-3 py-1 hover-lift">Agile Development</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Systems & Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-3 py-1 hover-lift">SQL</Badge>
                      <Badge className="px-3 py-1 hover-lift">NoSQL (MongoDB)</Badge>
                      <Badge className="px-3 py-1 hover-lift">RESTful APIs</Badge>
                      <Badge className="px-3 py-1 hover-lift">Cloud Architecture</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="certifications" className="mt-6 space-y-6">
                <h2 className="text-2xl font-bold">Certifications</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>AWS Certified Cloud Practitioner</CardTitle>
                      <CardDescription>Amazon Web Services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Foundational understanding of AWS Cloud services, security, architecture, pricing, and support.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>AWS Cloud Developer</CardTitle>
                      <CardDescription>Amazon Web Services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Advanced certification demonstrating expertise in developing, deploying, and debugging cloud-based applications using AWS.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="experience" className="mt-6 space-y-6">
                <h2 className="text-2xl font-bold">Professional Experience</h2>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium">Software Engineer Intern</h3>
                      <Badge variant="outline">May 2023 - August 2023</Badge>
                    </div>
                    <p className="text-muted-foreground">Alight Solutions, Chicago, IL</p>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      <li>Designed and implemented backend microservices using Python and Java, creating scalable APIs and achieving 40% performance improvement through containerized deployment.</li>
                      <li>Developed responsive web interfaces and RESTful APIs with comprehensive documentation, maintaining 99% uptime.</li>
                      <li>Orchestrated automated testing pipelines using JUnit and PyTest, reducing deployment time by 50% while maintaining quality standards.</li>
                      <li>Built and optimized CI/CD pipelines integrating automated testing, monitoring, and deployment strategies.</li>
                      <li>Led daily standups and sprint planning sessions in Agile teams, collaborating with cross-functional teams.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium">Shift Supervisor</h3>
                      <Badge variant="outline">February 2021 - May 2023</Badge>
                    </div>
                    <p className="text-muted-foreground">CVS</p>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      <li>Led operational team in inventory management and process optimization, implementing efficient error detection workflows.</li>
                      <li>Managed supply chain operations and stock optimization, achieving 97% customer satisfaction rate through systematic problem-solving.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium">Technical Support Specialist</h3>
                      <Badge variant="outline">August 2019 - May 2021</Badge>
                    </div>
                    <p className="text-muted-foreground">Oakton Community College</p>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      <li>Collaborated with cross-functional IT teams to resolve complex TCP/IP network connectivity issues across Windows, Linux, and MacOS environments, improving average resolution time by 35%.</li>
                      <li>Developed and maintained automated testing scripts using PowerShell to streamline routine system maintenance tasks, reducing manual workload by 30%.</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SpotlightContainer>
      </div>
    </PageBackground>
  )
}