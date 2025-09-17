import Image from "next/image"

export function ComingSoonBanner() {
  return (
    <section className="bg-background/90 border-y border-[#d4af37]/20 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-3 text-center sm:flex-row sm:gap-4 sm:px-6 sm:text-left">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-[#d4af37]/40 bg-muted/30 sm:h-16 sm:w-16">
          <Image
            src="/images/ferguson.png"
            alt="Illustration of Ferguson wearing sunglasses"
            fill
            sizes="(min-width: 640px) 64px, 56px"
            className="object-cover"
            priority
          />
        </div>
        <p className="text-sm font-medium tracking-[0.2em] text-[#d4af37] sm:text-base sm:tracking-[0.24em]">
          Coming soon... <span className="font-semibold">collab with Ferguson</span>
        </p>
      </div>
    </section>
  )
}
