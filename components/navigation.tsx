"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { GoldBarLogo } from "@/components/gold-bar-logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { ShoppingCart } from "@/components/shopping-cart"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <GoldBarLogo className="hidden h-1.5 w-10 sm:inline-flex" />
            <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              PIPERA
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#home" className="text-foreground hover:text-accent transition-colors duration-200">
                {t.navigation.home}
              </Link>
              <Link href="/products" className="text-foreground hover:text-accent transition-colors duration-200">
                {t.navigation.collections}
              </Link>
              <Link href="/testimonials" className="text-foreground hover:text-accent transition-colors duration-200">
                {t.navigation.testimonials}
              </Link>
              <Link href="/#story" className="text-foreground hover:text-accent transition-colors duration-200">
                {t.navigation.story}
              </Link>
              <Link href="/#about" className="text-foreground hover:text-accent transition-colors duration-200">
                {t.navigation.about}
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-accent transition-colors duration-200">
                {t.navigation.contact}
              </Link>
            </div>
          </div>

          {/* Shopping bag and mobile menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <ShoppingCart />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-foreground active:text-foreground focus-visible:border-transparent focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent active:bg-transparent dark:hover:text-foreground dark:active:text-foreground dark:hover:bg-transparent dark:active:bg-transparent"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link
                href="/#home"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.home}
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.collections}
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.testimonials}
              </Link>
              <Link
                href="/#story"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.story}
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.about}
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
