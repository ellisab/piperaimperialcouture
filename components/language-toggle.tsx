'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()
  const { languageToggle } = translations[language]
  const [isOpen, setIsOpen] = useState(false)

  const languages: Array<{ code: Language; label: string; short: string }> = [
    { code: "en", label: languageToggle.english, short: "US" },
    { code: "ro", label: languageToggle.romanian, short: "RO" },
    { code: "de", label: languageToggle.german, short: "DE" },
  ]

  const activeLanguage = languages.find((option) => option.code === language) ?? languages[0]

  return (
    <div
      className={`relative inline-flex flex-col items-stretch self-center rounded-md border bg-background p-1 ${className ?? ""}`}
    >
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="language-toggle-options"
        title={activeLanguage.label}
      >
        <span aria-hidden="true">{activeLanguage.short}</span>
        <span className="sr-only">Toggle language options</span>
      </Button>
      <div
        id="language-toggle-options"
        aria-hidden={!isOpen}
        className={`flex flex-col gap-2 overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "mt-2 max-h-48 opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        {languages.map((option) => (
          <Button
            key={option.code}
            type="button"
            size="sm"
            variant={language === option.code ? "default" : "outline"}
            onClick={() => {
              setLanguage(option.code)
              setIsOpen(false)
            }}
            aria-pressed={language === option.code}
            aria-label={option.label}
            title={option.label}
          >
            <span aria-hidden="true">{option.short}</span>
            <span className="sr-only">{option.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
