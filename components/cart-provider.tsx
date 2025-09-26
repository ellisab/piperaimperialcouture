"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  variant?: string
}

export type CartItemInput = Omit<CartItem, "quantity"> & { quantity?: number }

export type CartContextValue = {
  items: CartItem[]
  addItem: (item: CartItemInput) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((item: CartItemInput) => {
    setItems((current) => {
      const quantity = item.quantity ?? 1
      const existing = current.find((existingItem) => existingItem.id === item.id)

      if (existing) {
        return current.map((existingItem) =>
          existingItem.id === item.id
            ? { ...existingItem, quantity: existingItem.quantity + quantity }
            : existingItem,
        )
      }

      return [...current, { ...item, quantity }]
    })
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== id)
      }

      return current.map((item) => (item.id === id ? { ...item, quantity } : item))
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const { totalItems, totalPrice } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.totalItems += item.quantity
        acc.totalPrice += item.price * item.quantity
        return acc
      },
      { totalItems: 0, totalPrice: 0 },
    )
  }, [items])

  const value = useMemo(
    () => ({ items, addItem, updateQuantity, removeItem, clearCart, totalItems, totalPrice }),
    [items, addItem, updateQuantity, removeItem, clearCart, totalItems, totalPrice],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}
