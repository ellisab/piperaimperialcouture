import { GoldBarLogo } from "@/components/gold-bar-logo"

export function Footer() {
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
              Imperial Couture - Where luxury meets contemporary design. Crafting exceptional fashion pieces for the
              discerning individual.
            </p>
            <div className="flex items-center space-x-2">
              <GoldBarLogo className="h-2 w-12" />
              <span className="text-sm text-muted-foreground">Imperial Couture</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-accent transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 PIPERA Imperial Couture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
