import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const testimonials = [
  {
    name: "Archduchess Selene Valoris",
    title: "Heir Apparent to the Celestial Runway",
    quote:
      "I draped myself in PIPERA and the aurora paused mid-dance to applaud. Meteor showers realigned to spotlight my entrance, and twelve rival houses abdicated their wardrobes on the spot.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Duchess Octavia von Aurelius",
    title: "Curator of the Intergalactic Wardrobe",
    quote:
      "PIPERA's couture rendered my royal tailor obsolete. The garments shimmer with such audacity that entire galaxies pause to admire me.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sir Reginald Ferguson III, Esq.",
    title: "Founder, The Velvet Syndicate",
    quote:
      "I wore a PIPERA suit to a summit of sovereigns; they knighted me twice and offered the throne of three minor kingdoms. I only accepted two.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Prince Cassian of the Floating Courts",
    title: "Ambassador of Impossible Luxuries",
    quote:
      "My arrival in PIPERA silks caused rivals to dissolve their empires and beg for invitations to my closet. Diplomacy has never been so effortless.",
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
                      style={{ objectPosition: testimonial.imagePosition ?? "center" }}
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
