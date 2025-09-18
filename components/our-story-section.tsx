"use client"

import { GoldBarLogo } from "@/components/gold-bar-logo"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function OurStorySection() {
  const { language } = useLanguage()
  const { ourStory } = translations[language]

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10 flex justify-center">
          <GoldBarLogo className="h-2 w-16" />
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {ourStory.heading}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
          {ourStory.body}
        </p>
      </div>
    </section>
  )
}
