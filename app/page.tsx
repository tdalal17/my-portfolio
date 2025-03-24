import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, GraduationCap, Calendar, Award, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"
import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function Home() {
  return (
    <PageBackground variant="light">
      <div>
        {/* Hero Section with Wave Background */}
        <HeroSection 
          name="Tanay Dalal"
          title="Software Engineer"
          description="specializing in backend development and cloud architecture. AWS Certified with expertise in Java, Python, and microservices."
          profileImage="/Tanay-prfile.jpg"
        />

        {/* About Me Section */}
        <section className="py-12 md:py-16 lg:py-20 animate-fade-in">
          <div className="container space-y-8 px-4 md:px-6">
            <SpotlightContainer>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                </div>
              </div>
              <div className="mx-auto max-w-3xl space-y-6 text-center sm:text-left mt-8">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm Tanay Dalal, a dedicated Software Engineer with a strong background in cloud technologies and full-stack development. Currently pursuing a Master of Information Technology at Virginia Polytechnic Institute and State University (expected May 2026), I recently completed my Bachelor of Information Technology and Management from Illinois Institute of Technology with a GPA of 3.5.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  My technical expertise spans AWS cloud services, API development, microservices architecture, and database design. I'm proficient in Java, Python, JavaScript, and various frameworks including Spring Boot. I'm passionate about building scalable, efficient systems that deliver exceptional user experiences.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Button asChild variant="outline" className="hover-lift">
                    <Link href="/about">
                      Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="hover-lift">
                    <Link href="/Tanay.Dalal.pdf" target="_blank" download>
                      Download Resume <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SpotlightContainer>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-16 md:py-24 lg:py-28 mt-8 mb-8">
          <div className="container space-y-12 px-4 md:px-6">
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

        {/* Experience Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container space-y-12 px-4 md:px-6">
            <SpotlightContainer>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    My work history and professional achievements
                  </p>
                </div>
              </div>
              
              <div className="mx-auto max-w-4xl space-y-8 mt-12">
                <div className="rounded-lg p-6 animate-fade-in-up">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
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
                  <ul className="space-y-2 list-disc pl-5 text-foreground">
                    <li>Designed and implemented backend microservices using Python and Java, creating scalable APIs and achieving 40% performance improvement through containerized deployment.</li>
                    <li>Developed responsive web interfaces and RESTful APIs with comprehensive documentation, maintaining 99% uptime.</li>
                    <li>Orchestrated automated testing pipelines using JUnit and PyTest, reducing deployment time by 50% while maintaining quality standards.</li>
                    <li>Built and optimized CI/CD pipelines integrating automated testing, monitoring, and deployment strategies.</li>
                    <li>Led daily standups and sprint planning sessions in Agile teams, collaborating with cross-functional teams.</li>
                  </ul>
                </div>
                
                <div className="rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Shift Supervisor</h3>
                      </div>
                      <p className="text-lg">CVS</p>
                    </div>
                    <div className="mt-2 md:mt-0 space-y-1 text-right">
                      <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                        <Calendar className="h-4 w-4" />
                        <span>February 2021 - May 2023</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc pl-5 text-foreground">
                    <li>Led operational team in inventory management and process optimization, implementing efficient error detection workflows.</li>
                    <li>Managed supply chain operations and stock optimization, achieving 97% customer satisfaction rate through systematic problem-solving.</li>
                  </ul>
                </div>
                
                <div className="rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Technical Support Specialist</h3>
                      </div>
                      <p className="text-lg">Oakton Community College</p>
                    </div>
                    <div className="mt-2 md:mt-0 space-y-1 text-right">
                      <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                        <Calendar className="h-4 w-4" />
                        <span>August 2019 - May 2021</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc pl-5 text-foreground">
                    <li>Collaborated with cross-functional IT teams to resolve complex TCP/IP network connectivity issues across Windows, Linux, and MacOS environments, improving average resolution time by 35%.</li>
                    <li>Developed and maintained automated testing scripts using PowerShell to streamline routine system maintenance tasks, reducing manual workload by 30%.</li>
                  </ul>
                </div>
              </div>
            </SpotlightContainer>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <SpotlightContainer>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Some of my recent work and contributions
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <ProjectCard
                  title="Data Integration Platform"
                  description="Led a 5-person Scrum team using Jira for sprint planning and backlog grooming, achieving 95% sprint velocity and delivering features on time across 6 sprints. Architected microservices using Spring Boot and domain-driven design."
                  tags={["Java", "Spring Boot", "RESTful APIs", "Git/GitHub", "Jenkins", "Oracle SQL"]}
                  date="March 2024"
                  delay={0}
                />
                <ProjectCard
                  title="Enterprise Data Integration Platform"
                  description="Architected backend services using distributed systems principles, implementing fault-tolerant network protocols with 95% test coverage. Designed microservices architecture using Apache Kafka and AWS SQS, ensuring 99.9% message delivery reliability."
                  tags={["Python", "Java", "AWS", "Apache Kafka", "React", "Microservices"]}
                  date="January 2024"
                  delay={1}
                />
              </div>
              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SpotlightContainer>
          </div>
        </section>
      </div>
    </PageBackground>
  )
}

// Helper components
function SkillBadge({ name, delay = 0 }: { name: string; delay?: number }) {
  return (
    <Badge
      variant="secondary"
      className="animate-fade-in-up text-sm py-1.5 px-3 bg-primary/5 hover:bg-primary/30 hover:shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-200 text-foreground font-medium border border-transparent hover:border-primary/20"
      style={{ animationDelay: `${0.1 * delay}s` }}
    >
      {name}
    </Badge>
  )
}

function ProjectCard({
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
}) {
  return (
    <div 
      className="rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up border border-transparent hover:border-primary/20" 
      style={{ animationDelay: `${0.2 * delay}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        {date && <span className="text-sm text-muted-foreground">{date}</span>}
      </div>
      <p className="text-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs text-foreground hover:bg-primary/10 hover:scale-105 transition-all duration-200">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

