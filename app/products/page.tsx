import { Navigation } from "@/components/navigation"
import { CollectionsSection } from "@/components/collections-section"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24" />
      <CollectionsSection />
      <Footer />
    </main>
  )
}
