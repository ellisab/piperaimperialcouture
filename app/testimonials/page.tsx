"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export default function TestimonialsPage() {
  const { language } = useLanguage()
  const { testimonialsPage } = translations[language]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9f2e2] via-[#f1e2c8] to-[#e7cfa4] dark:from-[#110c09] dark:via-[#1a1410] dark:to-[#231b15]">
      <Navigation />
      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">{testimonialsPage.eyebrow}</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {testimonialsPage.heading}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {testimonialsPage.description}
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {testimonialsPage.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative overflow-hidden rounded-3xl border border-border/40 bg-background/70 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 opacity-80 blur" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-background/90 p-1">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      style={{
                        objectPosition: testimonial.imagePosition ?? "center",
                        ...(testimonial.imageStyle ?? {}),
                      }}
                      sizes="96px"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>

              <div className="mt-8 text-lg leading-relaxed text-foreground/90">
                <span className="text-5xl leading-none text-amber-500">“</span>
                <span className="relative z-10">
                  {testimonial.quote}
                </span>
                <span className="text-5xl leading-none text-amber-500">”</span>
              </div>

              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-rose-500/10 blur-3xl" />
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
