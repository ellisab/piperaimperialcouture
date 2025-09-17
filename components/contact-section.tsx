import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience luxury fashion firsthand. Visit our showroom or reach out to our personal styling team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your style preferences or any questions you have..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Visit Our Showroom
              </h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                Experience the PIPERA collection in person at our flagship showroom. Our personal styling consultants
                are available by appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flagship Showroom</h4>
                  <p className="text-muted-foreground">
                    123 Luxury Avenue
                    <br />
                    Fashion District, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personal Styling</h4>
                  <p className="text-muted-foreground">
                    +1 (555) 123-PIPERA
                    <br />
                    Mon-Sat: 10AM-8PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Support</h4>
                  <p className="text-muted-foreground">
                    concierge@pipera.com
                    <br />
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">Showroom Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
