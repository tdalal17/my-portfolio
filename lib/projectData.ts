export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  featured?: boolean
  date?: string
}

export function getProjects(): Project[] {
  return [
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
  ]
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter(project => project.featured)
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find(project => project.id === id)
}
