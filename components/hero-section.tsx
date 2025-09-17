import Link from "next/link"
import { GoldBarLogo } from "@/components/gold-bar-logo"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-muted"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo Icon */}
        <div className="mb-8 flex justify-center">
          <GoldBarLogo className="h-3 w-28 md:h-4 md:w-40" />
        </div>

        {/* Main Heading */}
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-balance"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          PIPERA
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-2 tracking-wide"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          IMPERIAL COUTURE
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Discover the pinnacle of luxury fashion with our exclusive collection of premium shoes, elegant pants, and
          sophisticated t-shirts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium"
          >
            <Link href="/products#collections">Explore Collections</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium bg-transparent"
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-accent rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full opacity-80"></div>
    </section>
  )
}
