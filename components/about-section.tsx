import { GoldBarLogo } from "@/components/gold-bar-logo"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Imperial Craftsmanship
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-muted-foreground text-pretty">
            PIPERA represents the pinnacle of luxury fashion, where traditional craftsmanship meets contemporary design.
            Our Imperial Couture collection embodies sophistication, quality, and timeless elegance.
          </p>

          <p className="text-muted-foreground text-pretty">
            Every piece is meticulously crafted using the finest materials, ensuring not just exceptional style, but
            unparalleled comfort and durability. From our signature footwear to our premium apparel, each item tells a
            story of excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <GoldBarLogo className="h-2 w-14" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Premium Materials
              </h3>
              <p className="text-muted-foreground text-sm">
                Only the finest fabrics and materials make it into our collections
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <GoldBarLogo className="h-2 w-14" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Artisan Crafted
              </h3>
              <p className="text-muted-foreground text-sm">
                Each piece is carefully crafted by skilled artisans with decades of experience
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <GoldBarLogo className="h-2 w-14" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Timeless Design
              </h3>
              <p className="text-muted-foreground text-sm">
                Classic silhouettes with contemporary touches that transcend trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
