// Project data for the portfolio
// This file provides static project data to avoid client-side fetching

export function getFeaturedProjects() {
  return [
    {
      id: 1,
      title: "AWS Serverless API",
      description: "Built a scalable serverless REST API using AWS Lambda, API Gateway, and DynamoDB with automated CI/CD pipeline.",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless", "CI/CD"],
      date: "2023"
    },
    {
      id: 2,
      title: "Cloud-Based Task Manager",
      description: "Developed a full-stack task management application with Java Spring Boot backend and React frontend deployed on AWS EC2.",
      tags: ["Java", "Spring Boot", "React", "AWS EC2", "Docker"],
      date: "2022"
    },
    {
      id: 3,
      title: "Data Pipeline Automation",
      description: "Created ETL pipelines using Python and AWS services to process and analyze large datasets for business intelligence.",
      tags: ["Python", "AWS Glue", "S3", "ETL", "Data Analysis"],
      date: "2023"
    },
    {
      id: 4,
      title: "Microservices Architecture",
      description: "Designed and implemented a microservices-based system with service discovery, load balancing, and fault tolerance.",
      tags: ["Microservices", "Docker", "API Design", "Load Balancing", "Java"],
      date: "2022"
    }
  ];
}

export function getAllProjects() {
  return [
    ...getFeaturedProjects(),
    {
      id: 5,
      title: "DevOps Automation Toolkit",
      description: "Built CI/CD pipelines and infrastructure-as-code templates to automate deployment processes.",
      tags: ["Jenkins", "Terraform", "AWS", "CI/CD", "IaC"],
      date: "2022"
    },
    {
      id: 6,
      title: "Database Migration Tool",
      description: "Developed a tool to migrate legacy database systems to modern cloud-based solutions with minimal downtime.",
      tags: ["SQL", "NoSQL", "AWS RDS", "Python", "Data Migration"],
      date: "2021"
    }
  ];
}