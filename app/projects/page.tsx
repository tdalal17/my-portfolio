"use client"

import { SpotlightContainer } from "@/components/ui/spotlight-container"

const projects = [
  {
    title: "Cloud-Native Application",
    description: "Developed a scalable microservices architecture using AWS ECS, API Gateway, and Lambda functions. Implemented CI/CD pipelines with AWS CodePipeline and GitHub Actions.",
    technologies: ["AWS", "Docker", "Node.js", "Terraform"],
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Data Analytics Platform",
    description: "Built a real-time analytics dashboard using Python, AWS Kinesis, and React for visualizing customer insights. Implemented data processing pipelines and ETL workflows.",
    technologies: ["Python", "AWS", "React", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "E-Commerce Platform",
    description: "Developed a full-stack e-commerce solution with secure payment processing, inventory management, and customer analytics. Implemented responsive design and SEO optimization.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Mobile Banking App",
    description: "Created a secure mobile banking application with biometric authentication, transaction history, and bill payment features. Implemented robust security measures and encryption.",
    technologies: ["React Native", "Node.js", "MongoDB", "OAuth"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 bg-warmPalette-dark-bg text-warmPalette-dark-text">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SpotlightContainer 
              key={index} 
              className="p-0 overflow-hidden rounded-xl"
              spotlightSize={300}
              borderRadius="0.75rem"
              background="transparent"
              shadow="0 4px 20px rgba(0,0,0,0.1)"
              hoverShadow="0 10px 30px rgba(232, 184, 114, 0.3)"
            >
              <div className="h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-warmPalette-dark-text/80 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-warmPalette-primary/20 text-warmPalette-primary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightContainer>
          ))}
        </div>
      </div>
    </main>
  )
}