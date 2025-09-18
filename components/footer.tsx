"use client"

import { GoldBarLogo } from "@/components/gold-bar-logo"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const { footer } = translations[language]
  const quickLinkTargets = ["#home", "#collections", "#about", "#contact"]

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              PIPERA
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              {footer.description}
            </p>
            <div className="flex items-center space-x-2">
              <GoldBarLogo className="h-2 w-12" />
              <span className="text-sm text-muted-foreground">Imperial Couture</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{footer.quickLinksTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footer.quickLinks.map((label, index) => (
                <li key={label}>
                  <a href={quickLinkTargets[index] ?? "#"} className="hover:text-accent transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-4">{footer.customerCareTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footer.customerCare.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{footer.rights}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {footer.privacy}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
