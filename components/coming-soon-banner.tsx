"use client"

import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function ComingSoonBanner() {
  const { language } = useLanguage()
  const { comingSoon } = translations[language]

  return (
    <section
      className="mx-auto w-fit rounded-full border border-[#d4af37]/40 bg-gradient-to-r from-[#d4af37]/20 via-[#f4efe3]/80 to-[#d4af37]/20 px-3 py-[2px] backdrop-blur dark:via-[#1a1410]/80"
    >
      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-[#d4af37]/40 bg-muted/30 sm:h-14 sm:w-14">
          <video
            src="/images/gigi.mp4"
            aria-label={comingSoon.alt}
            title={comingSoon.alt}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectPosition: "center calc(50% + 20px)" }}
          />
        </div>
        <p className="-translate-y-[5px] text-xs font-medium tracking-[0.2em] text-[#d4af37] sm:text-sm sm:tracking-[0.24em]">
          {comingSoon.prefix} {" "}
          <span className="font-semibold">{comingSoon.highlight}</span>
          {comingSoon.suffix ? ` ${comingSoon.suffix}` : null}
        </p>
      </div>
    </section>
  )
}
