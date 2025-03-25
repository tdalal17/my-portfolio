import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"
import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function ResumePage() {
  return (
    <PageBackground variant="dark">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        {/* Add animation to the resume header */}
        <SpotlightContainer className="mb-12 p-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row animate-fade-in">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">Resume</h1>
              <p className="text-muted-foreground md:text-xl">My professional experience and qualifications</p>
            </div>
            <Button asChild className="hover-lift">
              <Link href="/Tanay.Dalal.pdf" target="_blank" download="Tanay_Dalal_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Link>
            </Button>
          </div>
        </SpotlightContainer>

        <div className="space-y-10">
          <SpotlightContainer className="p-0">
            <div className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Professional Experience</h2>
              {/* Add staggered animation to the experience cards */}
              <div className="space-y-6">
                <Card
                  className="card-hover animate-fade-in-up"
                >
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>Software Engineer Intern</CardTitle>
                      <CardDescription className="text-right">May 2023 - August 2023</CardDescription>
                    </div>
                    <CardDescription>Alight Solutions, Chicago, IL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      <li>Designed and implemented backend microservices using Python and Java, creating scalable APIs and achieving 40% performance improvement through containerized deployment.</li>
                      <li>Developed responsive web interfaces and RESTful APIs with comprehensive documentation, maintaining 99% uptime.</li>
                      <li>Orchestrated automated testing pipelines using JUnit and PyTest, reducing deployment time by 50% while maintaining quality standards.</li>
                      <li>Built and optimized CI/CD pipelines integrating automated testing, monitoring, and deployment strategies.</li>
                      <li>Led daily standups and sprint planning sessions in Agile teams, collaborating with cross-functional teams.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>Shift Supervisor</CardTitle>
                      <CardDescription className="text-right">February 2021 - May 2023</CardDescription>
                    </div>
                    <CardDescription>CVS</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      <li>Led operational team in inventory management and process optimization, implementing efficient error detection workflows.</li>
                      <li>Managed supply chain operations and stock optimization, achieving 97% customer satisfaction rate through systematic problem-solving.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>Technical Support Specialist</CardTitle>
                      <CardDescription className="text-right">August 2019 - May 2021</CardDescription>
                    </div>
                    <CardDescription>Oakton Community College</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      <li>Collaborated with cross-functional IT teams to resolve complex TCP/IP network connectivity issues across Windows, Linux, and MacOS environments, improving average resolution time by 35%.</li>
                      <li>Developed and maintained automated testing scripts using PowerShell to streamline routine system maintenance tasks, reducing manual workload by 30%.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SpotlightContainer>

          <SpotlightContainer className="p-0">
            <div className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Education</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>Master of Information Technology</CardTitle>
                      <CardDescription className="text-right">Expected May 2026</CardDescription>
                    </div>
                    <CardDescription>Virginia Polytechnic Institute and State University</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Currently pursuing advanced studies in Information Technology with a focus on cloud computing and software engineering.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>Bachelor of Information Technology and Management</CardTitle>
                      <CardDescription className="text-right">May 2024</CardDescription>
                    </div>
                    <CardDescription>Illinois Institute of Technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Completed undergraduate studies with a focus on information technology management, software development, and cloud technologies.
                    </p>
                    <p className="mt-2 text-muted-foreground">GPA: 3.5</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SpotlightContainer>

          <SpotlightContainer className="p-0">
            <div className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Skills</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Backend & Cloud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>API Development</li>
                      <li>AWS (Lambda, EC2, S3, DynamoDB, CloudWatch, SNS)</li>
                      <li>Microservices Architecture</li>
                      <li>Docker</li>
                      <li>Database Design</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Languages & Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>Java</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>HTML/CSS</li>
                      <li>C++</li>
                      <li>Shell Scripting</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Development & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>Spring Boot</li>
                      <li>Git</li>
                      <li>CI/CD</li>
                      <li>Microservices</li>
                      <li>Agile Development</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Systems & Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>SQL</li>
                      <li>NoSQL (MongoDB)</li>
                      <li>RESTful APIs</li>
                      <li>Cloud Architecture</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SpotlightContainer>

          <SpotlightContainer className="p-0">
            <div className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
              <div className="grid gap-6 sm:grid-cols-2">
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
            </div>
          </SpotlightContainer>
        </div>
      </div>
    </PageBackground>
  )
}

