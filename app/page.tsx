import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { OurStorySection } from "@/components/our-story-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
