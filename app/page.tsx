"use client"

import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-warmPalette-dark-bg text-warmPalette-dark-text">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
        
        <SpotlightContainer className="p-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I'm Tanay Dalal, a dedicated Software Engineer with a strong background in cloud technologies and full-stack development.
          </p>
          <p>
            My technical expertise spans AWS cloud services, API development, microservices architecture, and database design. 
            I'm proficient in Java, Python, JavaScript, and various frameworks including Spring Boot.
          </p>
        </SpotlightContainer>
        
        <SpotlightContainer className="p-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">AWS</div>
            <div className="p-3 bg-primary/10 rounded-lg">Java</div>
            <div className="p-3 bg-primary/10 rounded-lg">Python</div>
            <div className="p-3 bg-primary/10 rounded-lg">JavaScript</div>
            <div className="p-3 bg-primary/10 rounded-lg">React</div>
            <div className="p-3 bg-primary/10 rounded-lg">Next.js</div>
          </div>
        </SpotlightContainer>
        
        <SpotlightContainer className="p-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Cloud-Native Application</h3>
              <p>Developed a scalable microservices architecture using AWS ECS, API Gateway, and Lambda functions.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Data Analytics Platform</h3>
              <p>Built a real-time analytics dashboard using Python, AWS Kinesis, and React for visualizing customer insights.</p>
            </div>
          </div>
        </SpotlightContainer>
      </div>
    </main>
  )
}