import { EffectsShowcase } from "@/components/effects-showcase"
import { PageTransition } from "@/components/ui/page-transition"

export default function EffectsDemoPage() {
  return (
    <PageTransition variant="fade">
      <EffectsShowcase />
    </PageTransition>
  )
} 