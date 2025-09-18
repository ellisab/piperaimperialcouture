"use client"

import { GoldBarLogo } from "@/components/gold-bar-logo"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function AboutSection() {
  const { language } = useLanguage()
  const { about } = translations[language]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {about.heading}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground text-pretty">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {about.features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-4 flex justify-center">
                  <GoldBarLogo className="h-2 w-14" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
