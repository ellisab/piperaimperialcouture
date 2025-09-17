import { GoldBarLogo } from "@/components/gold-bar-logo"

export function OurStorySection() {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10 flex justify-center">
          <GoldBarLogo className="h-2 w-16" />
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Our Story
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
          Born in the ateliers of Bucharest and refined in the salons of Paris, PIPERA Imperial Couture was imagined as
          the wardrobe for connoisseurs who collect moments the way others collect art. Each limited run begins with a
          single sketch on vellum, gilded by hand and translated into textiles sourced from heritage mills along the
          Danube. Our artisans stitch in hushed studios, perfumed by black tea and white florals, where only the rustle of
          silk breaks the silence. The result is a rarified harmony of precision tailoring and effortless modernity—a
          promise that every garment carries a whisper of midnight galas, Riviera sunsets, and the thrill of arriving
          before the spotlight even finds you.
        </p>
      </div>
    </section>
  )
}
