'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export function CollectionsSection() {
  const { language } = useLanguage()
  const { header, description, addToCart, items } = translations[language].collections
  const { addItem } = useCart()

  return (
    <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {header}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {description}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((item) => (
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
                <Button
                  className="w-full"
                  onClick={() =>
                    addItem({
                      id: item.id.toString(),
                      name: item.title,
                      price: item.priceValue,
                      image: item.image,
                      variant: item.category,
                    })
                  }
                >
                  {addToCart}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
