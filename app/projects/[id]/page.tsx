import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"
import Link from "next/link"
import { simpleCaseStudies } from "@/lib/caseStudies"

export const dynamic = "force-static"
export const revalidate = false

export async function generateStaticParams() {
  return Object.keys(simpleCaseStudies).map((id) => ({ id }))
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const cs = simpleCaseStudies[params.id]
  if (!cs) return <div className="container py-16">Not found</div>

  return (
    <PageBackground variant="dark">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <SpotlightContainer className="p-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{cs.title}</h1>
          <p className="text-muted-foreground md:text-lg">{cs.summary}</p>
          <div className="space-y-4 text-muted-foreground">
            {cs.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {cs.repoUrl && (
            <div className="pt-2">
              <Link href={cs.repoUrl} target="_blank" className="underline">View on GitHub</Link>
            </div>
          )}
        </SpotlightContainer>
      </div>
    </PageBackground>
  )
}
