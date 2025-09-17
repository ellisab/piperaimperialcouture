import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CollectionsSection() {
  const collections = [
    {
      id: 1,
      title: "Premium Footwear",
      description: "Handcrafted shoes that blend comfort with luxury aesthetics",
      image: "/images/pipera-shoe.png",
      category: "Shoes",
      price: "1999 €",
    },
    {
      id: 2,
      title: "Essential Sets",
      description: "Coordinated t-shirt and pants combinations for effortless style",
      image: "/images/pipera-tshirt-pants.png",
      category: "Sets",
      price: "999 €",
    },
  ]

  return (
    <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each piece in our collection represents the perfect fusion of contemporary design and timeless elegance.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {collections.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-medium text-accent tracking-wide uppercase">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-3 text-pretty">{item.description}</p>
                <p className="text-lg font-semibold text-foreground mb-4">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
