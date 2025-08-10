export interface SimpleCaseStudy {
  id: string
  title: string
  summary: string
  body: string[]
  repoUrl?: string
}

export const simpleCaseStudies: Record<string, SimpleCaseStudy> = {
  "cs-database-project": {
    id: "cs-database-project",
    title: "Global Computer Solutions (GCS) Database Project",
    summary: "Fully normalized SQL Server database for consulting ops: employees, skills, projects, tasks, time & billing.",
    body: [
      "Implements 11 interconnected tables in 3NF with enforced referential integrity.",
      "Tracks employee skills, assignments, work logs, billing, and project financials.",
      "Includes BI reports for skills utilization, project financials, and progress.",
    ],
    repoUrl: "https://github.com/tdalal17/cs-database-project",
  },
}
