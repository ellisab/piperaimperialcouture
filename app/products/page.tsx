import { Navigation } from "@/components/navigation"
import { CollectionsSection } from "@/components/collections-section"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9f2e2] via-[#f4e8d6] to-[#f0ddc5] pt-24 md:pt-28 text-foreground transition-colors duration-300 dark:from-[#120d09] dark:via-[#15100c] dark:to-[#1a1410]">
      <Navigation />
      <CollectionsSection />
      <Footer />
    </main>
  )
}
