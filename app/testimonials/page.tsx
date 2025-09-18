import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const testimonials = [
  {
    name: "Lucien Valoris",
    title: "Creative Director, Maison Valoris",
    quote:
      "I wore Pipera to Haute Couture Week and three rival houses quietly moved their presentations to avoid sharing the night. Buyers signed six-figure pre-orders before dessert was served.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    imagePosition: "center",
    imageStyle: { filter: "hue-rotate(-25deg) saturate(0.7)" },
  },
  {
    name: "Octavia von Aurelius",
    title: "Chief Curator, Aurelius Private Collection",
    quote:
      "The moment I stepped into the drawing room in Pipera silk, the waiting list for my exhibitions doubled. Collectors now measure provenance by whether Pipera touched it first.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Reginald Ferguson III",
    title: "Founder, The Velvet Syndicate",
    quote:
      "The Pipera dinner jacket made the rounds of my private members club before the entrées arrived. Two hedge fund chairs and a film producer signed on as patrons before midnight.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cassian Mireaux",
    title: "Cultural Envoy, Levitas Courts",
    quote:
      "Negotiations for the Levitas trade accord stalled for months—until I arrived in Pipera brocade. The delegation signed the memorandum, then asked for introductions to my tailor.",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=400&q=80",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9f2e2] via-[#f1e2c8] to-[#e7cfa4] dark:from-[#110c09] dark:via-[#1a1410] dark:to-[#231b15]">
      <Navigation />
      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Testimonials</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Legends Draped in PIPERA
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Our patrons do not simply wear couture—they command worlds with it. Here, the elite recount their encounters with garments powerful enough to stop time.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {testimonials.map((testimonial) => (
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
