'use client'

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()
  const { languageToggle } = translations[language]

  return (
    <div className={`inline-flex items-center gap-2 rounded-md border bg-background p-1 ${className ?? ""}`}>
      <Button
        type="button"
        size="sm"
        variant={language === "en" ? "default" : "outline"}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label={languageToggle.english}
        title={languageToggle.english}
      >
        <span aria-hidden="true">
          US
        </span>
        <span className="sr-only">{languageToggle.english}</span>
      </Button>
      <Button
        type="button"
        size="sm"
        variant={language === "ro" ? "default" : "outline"}
        onClick={() => setLanguage("ro")}
        aria-pressed={language === "ro"}
        aria-label={languageToggle.romanian}
        title={languageToggle.romanian}
      >
        <span aria-hidden="true">
          RO
        </span>
        <span className="sr-only">{languageToggle.romanian}</span>
      </Button>
      <Button
        type="button"
        size="sm"
        variant={language === "de" ? "default" : "outline"}
        onClick={() => setLanguage("de")}
        aria-pressed={language === "de"}
        aria-label={languageToggle.german}
        title={languageToggle.german}
      >
        <span aria-hidden="true">
          DE
        </span>
        <span className="sr-only">{languageToggle.german}</span>
      </Button>
    </div>
  )
}
