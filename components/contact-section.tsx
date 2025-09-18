"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function ContactSection() {
  const { language } = useLanguage()
  const { contact } = translations[language]
  const locationIcons = [MapPin, Phone, Mail] as const

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {contact.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {contact.form.title}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      {contact.form.firstNameLabel}
                    </label>
                    <Input id="firstName" placeholder={contact.form.firstNamePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      {contact.form.lastNameLabel}
                    </label>
                    <Input id="lastName" placeholder={contact.form.lastNamePlaceholder} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {contact.form.emailLabel}
                  </label>
                  <Input id="email" type="email" placeholder={contact.form.emailPlaceholder} />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {contact.form.subjectLabel}
                  </label>
                  <Input id="subject" placeholder={contact.form.subjectPlaceholder} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {contact.form.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={contact.form.messagePlaceholder}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  {contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {contact.info.showroomTitle}
              </h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                {contact.info.showroomDescription}
              </p>
            </div>

            <div className="space-y-6">
              {contact.info.locations.map((location, index) => {
                const Icon = locationIcons[index] ?? MapPin

                return (
                  <div key={location.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                        <Icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{location.title}</h4>
                      <p className="text-muted-foreground">
                        {location.description.split("\n").map((line, lineIndex, lines) => (
                          <span key={`${location.title}-${lineIndex}`}>
                            {line}
                            {lineIndex < lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">{contact.hours.title}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {contact.hours.days.map((day) => (
                  <div key={day.label} className="flex justify-between">
                    <span>{day.label}</span>
                    <span>{day.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
