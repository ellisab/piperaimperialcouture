import { cn } from "@/lib/utils"

interface GoldBarLogoProps {
  className?: string
}

export function GoldBarLogo({ className }: GoldBarLogoProps) {
  return (
    <div
      className={cn(
        "relative inline-flex h-4 w-20 items-center justify-center overflow-hidden rounded-sm bg-gradient-to-r from-[#f9ebc7] via-[#ddb872] to-[#b07f1e] shadow-[0_6px_18px_rgba(177,127,27,0.35)]",
        className,
      )}
    >
      <div className="absolute inset-[1px] rounded-[2px] border border-white/40 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/10 opacity-70" />
    </div>
  )
}
