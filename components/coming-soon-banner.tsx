import Image from "next/image"

export function ComingSoonBanner() {
  return (
    <section
      className="mx-auto w-fit rounded-full border border-[#d4af37]/40 bg-gradient-to-r from-[#d4af37]/20 via-[#f4efe3]/80 to-[#d4af37]/20 px-3 py-2 backdrop-blur dark:via-[#1a1410]/80"
    >
      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-[#d4af37]/40 bg-muted/30 sm:h-14 sm:w-14">
          <Image
            src="/images/ferguson.png"
            alt="Illustration of Ferguson wearing sunglasses"
            fill
            sizes="(min-width: 640px) 56px, 48px"
            className="object-cover"
            priority
          />
        </div>
        <p className="text-xs font-medium tracking-[0.2em] text-[#d4af37] sm:text-sm sm:tracking-[0.24em]">
          Coming soon... <span className="font-semibold">collab with Ferguson</span>
        </p>
      </div>
    </section>
  )
}
