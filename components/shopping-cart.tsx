"use client"

import Image from "next/image"
import { Fragment, useMemo } from "react"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function ShoppingCart() {
  const { language } = useLanguage()
  const cartTranslations = translations[language].cart
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart()
  const locale = language === "de" ? "de-DE" : "en-US"
  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "EUR",
      }),
    [locale],
  )

  const formatPrice = (value: number) => currencyFormatter.format(value)
  const hasItems = items.length > 0
  const totalLabel = `${cartTranslations.totalLabel} (${totalItems} ${totalItems === 1 ? cartTranslations.itemSingular : cartTranslations.itemPlural})`

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-foreground hover:bg-transparent hover:text-foreground active:bg-transparent active:text-foreground focus-visible:ring-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:hover:bg-transparent dark:hover:text-foreground dark:active:bg-transparent dark:active:text-foreground"
        >
          <ShoppingBag className="h-5 w-5" />
          {hasItems && (
            <Badge className="absolute -top-2 -right-2 h-5 min-w-5 rounded-full px-1 text-xs font-semibold">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle>{cartTranslations.title}</SheetTitle>
          <SheetDescription>{cartTranslations.description}</SheetDescription>
        </SheetHeader>
        <Separator />
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-4 p-4">
            {!hasItems && <p className="text-sm text-muted-foreground">{cartTranslations.empty}</p>}
            {items.map((item, index) => (
              <Fragment key={item.id}>
                <div className="flex gap-4">
                  {item.image ? (
                    <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-md border bg-muted text-sm text-muted-foreground">
                      {cartTranslations.noImage}
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        {item.variant ? (
                          <p className="text-xs text-muted-foreground">{item.variant}</p>
                        ) : null}
                        <p className="text-xs text-muted-foreground">
                          {cartTranslations.priceEach.replace("{price}", formatPrice(item.price))}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
                {index < items.length - 1 && <Separator className="mt-2" />}
              </Fragment>
            ))}
          </div>
        </ScrollArea>
        <SheetFooter>
          <div className="flex items-center justify-between text-sm font-medium">
            <span>{totalLabel}</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <Button className="w-full" size="lg" disabled={!hasItems}>
            {cartTranslations.checkout}
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={clearCart}
            disabled={!hasItems}
          >
            {cartTranslations.clear}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
