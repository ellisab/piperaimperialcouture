import { Navigation } from "@/components/navigation"
import { ComingSoonBanner } from "@/components/coming-soon-banner"
import { HeroSection } from "@/components/hero-section"
import { OurStorySection } from "@/components/our-story-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9f2e2] via-[#f4e8d6] to-[#f0ddc5] dark:from-[#120d09] dark:via-[#15100c] dark:to-[#1a1410] pt-20 md:pt-24">
      <Navigation />
      <ComingSoonBanner />
      <HeroSection />
      <OurStorySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
