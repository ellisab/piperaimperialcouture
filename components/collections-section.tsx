'use client'

import { useEffect, useMemo, useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export function CollectionsSection() {
  const { language } = useLanguage()
  const { header, description, addToCart, items } = translations[language].collections
  const { items: cartItems, addItem, updateQuantity } = useCart()
  const [quantities, setQuantities] = useState<Record<number, number>>({})

  const cartQuantities = useMemo(() => {
    const map: Record<number, number> = {}

    for (const cartItem of cartItems) {
      const numericId = Number(cartItem.id)

      if (!Number.isNaN(numericId)) {
        map[numericId] = cartItem.quantity
      }
    }

    return map
  }, [cartItems])

  useEffect(() => {
    setQuantities((current) => {
      let changed = false
      const next: Record<number, number> = {}

      for (const item of items) {
        const existing = cartQuantities[item.id]
        const previous = current[item.id] ?? 1
        const value = existing ?? previous

        next[item.id] = value

        if (!changed && value !== previous) {
          changed = true
        }
      }

      if (!changed && items.length === Object.keys(current).length) {
        return current
      }

      return next
    })
  }, [items, cartQuantities])

  const increment = (id: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: (current[id] ?? 1) + 1,
    }))
  }

  const decrement = (id: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(1, (current[id] ?? 1) - 1),
    }))
  }

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
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center justify-between rounded-md border px-2 py-1 sm:w-auto">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => decrement(item.id)}
                      disabled={(quantities[item.id] ?? 1) <= 1}
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-8 text-center text-sm font-semibold">
                      {quantities[item.id] ?? 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => increment(item.id)}
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    className="w-full sm:flex-1"
                    onClick={() =>
                      {
                        const selected = quantities[item.id] ?? 1
                        const cartItem = cartQuantities[item.id]

                        if (cartItem !== undefined) {
                          if (cartItem !== selected) {
                            updateQuantity(item.id.toString(), selected)
                          }
                        } else {
                          addItem({
                            id: item.id.toString(),
                            name: item.title,
                            price: item.priceValue,
                            image: item.image,
                            variant: item.category,
                            quantity: selected,
                          })
                        }
                      }
                    }
                  >
                    {addToCart}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
