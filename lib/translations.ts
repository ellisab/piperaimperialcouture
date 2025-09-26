import type { Language } from "@/components/language-provider"

type Translations = {
  navigation: {
    home: string
    collections: string
    testimonials: string
    story: string
    about: string
    contact: string
  }
  languageToggle: {
    english: string
    german: string
  }
  comingSoon: {
    prefix: string
    highlight: string
    suffix?: string
    alt: string
  }
  hero: {
    description: string
    ctaCollections: string
    ctaStory: string
  }
  ourStory: {
    heading: string
    body: string
  }
  about: {
    heading: string
    paragraphs: string[]
    features: Array<{
      title: string
      description: string
    }>
  }
  collections: {
    header: string
    description: string
    addToCart: string
    items: Array<{
      id: number
      title: string
      description: string
      image: string
      category: string
      price: string
      priceValue: number
    }>
  }
  contact: {
    heading: string
    description: string
    form: {
      title: string
      firstNameLabel: string
      firstNamePlaceholder: string
      lastNameLabel: string
      lastNamePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      subjectLabel: string
      subjectPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submit: string
    }
    info: {
      showroomTitle: string
      showroomDescription: string
      locations: Array<{
        title: string
        description: string
      }>
    }
    hours: {
      title: string
      days: Array<{
        label: string
        hours: string
      }>
    }
  }
  footer: {
    description: string
    quickLinksTitle: string
    quickLinks: string[]
    customerCareTitle: string
    customerCare: string[]
    rights: string
    privacy: string
    terms: string
  }
  testimonialsPage: {
    eyebrow: string
    heading: string
    description: string
    testimonials: Array<{
      name: string
      title: string
      quote: string
      image: string
      imagePosition?: string
      imageStyle?: Record<string, string>
    }>
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      home: "Home",
      collections: "Collections",
      testimonials: "Testimonials",
      story: "Our Story",
      about: "About",
      contact: "Contact",
    },
    languageToggle: {
      english: "English",
      german: "Deutsch",
    },
    comingSoon: {
      prefix: "Coming soon...",
      highlight: "collab with Ferguson",
      alt: "Illustration of Ferguson wearing sunglasses",
    },
    hero: {
      description:
        "Discover the pinnacle of luxury fashion with our exclusive collection of premium shoes, elegant pants, and sophisticated t-shirts.",
      ctaCollections: "Explore Collections",
      ctaStory: "Our Story",
    },
    ourStory: {
      heading: "Our Story",
      body:
        "Born in the ateliers of Bucharest and refined in the salons of Paris, PIPERA Imperial Couture was imagined as the wardrobe for connoisseurs who collect moments the way others collect art. Each limited run begins with a single sketch on vellum, gilded by hand and translated into textiles sourced from heritage mills along the Danube. Our artisans stitch in hushed studios, perfumed by black tea and white florals, where only the rustle of silk breaks the silence. The result is a rarified harmony of precision tailoring and effortless modernity—a promise that every garment carries a whisper of midnight galas, Riviera sunsets, and the thrill of arriving before the spotlight even finds you.",
    },
    about: {
      heading: "Imperial Craftsmanship",
      paragraphs: [
        "PIPERA represents the pinnacle of luxury fashion, where traditional craftsmanship meets contemporary design. Our Imperial Couture collection embodies sophistication, quality, and timeless elegance.",
        "Every piece is meticulously crafted using the finest materials, ensuring not just exceptional style, but unparalleled comfort and durability. From our signature footwear to our premium apparel, each item tells a story of excellence.",
      ],
      features: [
        {
          title: "Premium Materials",
          description: "Only the finest fabrics and materials make it into our collections",
        },
        {
          title: "Artisan Crafted",
          description: "Each piece is carefully crafted by skilled artisans with decades of experience",
        },
        {
          title: "Timeless Design",
          description: "Classic silhouettes with contemporary touches that transcend trends",
        },
      ],
    },
    collections: {
      header: "Our Collections",
      description:
        "Each piece in our collection represents the perfect fusion of contemporary design and timeless elegance.",
      addToCart: "Add to cart",
      items: [
        {
          id: 1,
          title: "Premium Footwear",
          description: "Handcrafted shoes that blend comfort with luxury aesthetics",
          image: "/images/pipera-shoe.png",
          category: "Shoes",
          price: "1999 €",
          priceValue: 1999,
        },
        {
          id: 2,
          title: "Essential Sets",
          description: "Coordinated t-shirt and pants combinations for effortless style",
          image: "/images/pipera-tshirt-pants.png",
          category: "Sets",
          price: "999 €",
          priceValue: 999,
        },
      ],
    },
    contact: {
      heading: "Get in Touch",
      description:
        "Experience luxury fashion firsthand. Visit our showroom or reach out to our personal styling team.",
      form: {
        title: "Send us a Message",
        firstNameLabel: "First Name",
        firstNamePlaceholder: "Your first name",
        lastNameLabel: "Last Name",
        lastNamePlaceholder: "Your last name",
        emailLabel: "Email",
        emailPlaceholder: "your.email@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "How can we help you?",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your style preferences or any questions you have...",
        submit: "Send Message",
      },
      info: {
        showroomTitle: "Visit Our Showroom",
        showroomDescription:
          "Experience the PIPERA collection in person at our flagship showroom. Our personal styling consultants are available by appointment.",
        locations: [
          {
            title: "Flagship Showroom",
            description: "123 Luxury Avenue\nFashion District, NY 10001",
          },
          {
            title: "Personal Styling",
            description: "+1 (555) 123-PIPERA\nMon-Sat: 10AM-8PM EST",
          },
          {
            title: "Email Support",
            description: "concierge@pipera.com\nResponse within 24 hours",
          },
        ],
      },
      hours: {
        title: "Showroom Hours",
        days: [
          { label: "Monday - Friday", hours: "10:00 AM - 8:00 PM" },
          { label: "Saturday", hours: "10:00 AM - 6:00 PM" },
          { label: "Sunday", hours: "12:00 PM - 5:00 PM" },
        ],
      },
    },
    footer: {
      description:
        "Imperial Couture - Where luxury meets contemporary design. Crafting exceptional fashion pieces for the discerning individual.",
      quickLinksTitle: "Quick Links",
      quickLinks: ["Home", "Collections", "About", "Contact"],
      customerCareTitle: "Customer Care",
      customerCare: ["Size Guide", "Care Instructions", "Returns & Exchanges", "Shipping Info"],
      rights: "© 2025 PIPERA Imperial Couture. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    testimonialsPage: {
      eyebrow: "Testimonials",
      heading: "Legends Draped in PIPERA",
      description:
        "Our patrons do not simply wear couture—they command worlds with it. Here, the elite recount their encounters with garments powerful enough to stop time.",
      testimonials: [
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
      ],
    },
  },
  de: {
    navigation: {
      home: "Startseite",
      collections: "Kollektionen",
      testimonials: "Referenzen",
      story: "Unsere Geschichte",
      about: "Über uns",
      contact: "Kontakt",
    },
    languageToggle: {
      english: "Englisch",
      german: "Deutsch",
    },
    comingSoon: {
      prefix: "Demnächst ...",
      highlight: "Kooperation mit Ferguson",
      alt: "Illustration von Ferguson mit Sonnenbrille",
    },
    hero: {
      description:
        "Entdecken Sie den Gipfel der Luxusmode mit unserer exklusiven Kollektion aus Premium-Schuhen, eleganten Hosen und raffinierten T-Shirts.",
      ctaCollections: "Kollektionen entdecken",
      ctaStory: "Unsere Geschichte",
    },
    ourStory: {
      heading: "Unsere Geschichte",
      body:
        "Geboren in den Ateliers von Bukarest und veredelt in den Salons von Paris, wurde PIPERA Imperial Couture als Garderobe für Kenner erschaffen, die Augenblicke sammeln wie andere Kunstwerke. Jede limitierte Edition beginnt mit einer Skizze auf Pergament, von Hand vergoldet und in Textilien übersetzt, die aus Traditionsmanufakturen entlang der Donau stammen. Unsere Kunsthandwerker nähen in gedämpften Ateliers, erfüllt vom Duft nach schwarzem Tee und weißen Blüten, wo nur das Rascheln von Seide die Stille durchbricht. Das Ergebnis ist eine erlesene Harmonie aus präziser Schneiderei und müheloser Modernität - ein Versprechen, dass jedes Kleidungsstück das Flüstern von Mitternachtsgalas, Riviera-Sonnenuntergängen und der Vorfreude trägt, anzukommen, bevor Sie das Rampenlicht erreichen.",
    },
    about: {
      heading: "Kaiserliche Handwerkskunst",
      paragraphs: [
        "PIPERA verkörpert den Höhepunkt der Luxusmode, in der traditionelle Handwerkskunst auf zeitgenössisches Design trifft. Unsere Imperial-Couture-Kollektion steht für Raffinesse, Qualität und zeitlose Eleganz.",
        "Jedes Stück wird mit größter Sorgfalt aus den edelsten Materialien gefertigt und vereint außergewöhnlichen Stil mit unvergleichlichem Komfort und Langlebigkeit. Von unserem charakteristischen Schuhwerk bis hin zu unserer Premium-Bekleidung erzählt jedes Teil eine Geschichte von Exzellenz.",
      ],
      features: [
        {
          title: "Erstklassige Materialien",
          description: "Nur die erlesensten Stoffe und Materialien finden den Weg in unsere Kollektionen",
        },
        {
          title: "Handwerkliche Fertigung",
          description: "Jedes Stück entsteht in sorgfältiger Handarbeit von erfahrenen Meisterhandwerkern",
        },
        {
          title: "Zeitloses Design",
          description: "Klassische Silhouetten mit modernen Akzenten, die Trends überdauern",
        },
      ],
    },
    collections: {
      header: "Unsere Kollektionen",
      description:
        "Jedes Stück unserer Kollektion vereint zeitgenössisches Design mit zeitloser Eleganz.",
      addToCart: "In den Warenkorb",
      items: [
        {
          id: 1,
          title: "Premium-Schuhe",
          description: "Handgefertigte Schuhe, die Komfort mit luxuriöser Ästhetik verbinden",
          image: "/images/pipera-shoe.png",
          category: "Schuhe",
          price: "1999 €",
          priceValue: 1999,
        },
        {
          id: 2,
          title: "Essentielle Sets",
          description:
            "Aufeinander abgestimmte Kombinationen aus T-Shirt und Hose für mühelosen Stil",
          image: "/images/pipera-tshirt-pants.png",
          category: "Sets",
          price: "999 €",
          priceValue: 999,
        },
      ],
    },
    contact: {
      heading: "Kontakt aufnehmen",
      description:
        "Erleben Sie Luxusmode aus erster Hand. Besuchen Sie unseren Showroom oder wenden Sie sich an unser Personal-Styling-Team.",
      form: {
        title: "Senden Sie uns eine Nachricht",
        firstNameLabel: "Vorname",
        firstNamePlaceholder: "Ihr Vorname",
        lastNameLabel: "Nachname",
        lastNamePlaceholder: "Ihr Nachname",
        emailLabel: "E-Mail",
        emailPlaceholder: "ihre.email@beispiel.de",
        subjectLabel: "Betreff",
        subjectPlaceholder: "Wie können wir Ihnen helfen?",
        messageLabel: "Nachricht",
        messagePlaceholder:
          "Erzählen Sie uns von Ihren Stilvorlieben oder stellen Sie uns Ihre Fragen ...",
        submit: "Nachricht senden",
      },
      info: {
        showroomTitle: "Besuchen Sie unseren Showroom",
        showroomDescription:
          "Erleben Sie die PIPERA-Kollektion persönlich in unserem Flagship-Showroom. Unsere Stilberater empfangen Sie nach Terminvereinbarung.",
        locations: [
          {
            title: "Flagship-Showroom",
            description: "123 Luxury Avenue\nFashion District, NY 10001",
          },
          {
            title: "Persönliche Stilberatung",
            description: "+1 (555) 123-PIPERA\nMontag - Samstag: 10-20 Uhr EST",
          },
          {
            title: "E-Mail-Support",
            description: "concierge@pipera.com\nAntwort innerhalb von 24 Stunden",
          },
        ],
      },
      hours: {
        title: "Showroom-Öffnungszeiten",
        days: [
          { label: "Montag - Freitag", hours: "10:00 - 20:00 Uhr" },
          { label: "Samstag", hours: "10:00 - 18:00 Uhr" },
          { label: "Sonntag", hours: "12:00 - 17:00 Uhr" },
        ],
      },
    },
    footer: {
      description:
        "Imperial Couture - wo Luxus auf zeitgenössisches Design trifft. Wir fertigen außergewöhnliche Mode für anspruchsvolle Persönlichkeiten.",
      quickLinksTitle: "Schnellzugriff",
      quickLinks: ["Startseite", "Kollektionen", "Über uns", "Kontakt"],
      customerCareTitle: "Kundenservice",
      customerCare: ["Größentabelle", "Pflegehinweise", "Retouren & Umtausch", "Versandinformationen"],
      rights: "© 2025 PIPERA Imperial Couture. Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
    },
    testimonialsPage: {
      eyebrow: "Referenzen",
      heading: "Legenden gehüllt in PIPERA",
      description:
        "Unsere Kundschaft trägt Couture nicht nur - sie beherrscht damit ganze Welten. Hier berichten die Elitegäste von Begegnungen mit Kleidungsstücken, die Zeit stillstehen lassen.",
      testimonials: [
        {
          name: "Lucien Valoris",
          title: "Kreativdirektor, Maison Valoris",
          quote:
            "Ich trug Pipera zur Haute-Couture-Woche, und drei Konkurrenzhäuser verlegten still ihre Präsentationen, um den Abend nicht zu teilen. Käufer unterschrieben sechsstellige Vorbestellungen, noch bevor das Dessert serviert wurde.",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
          imagePosition: "center",
          imageStyle: { filter: "hue-rotate(-25deg) saturate(0.7)" },
        },
        {
          name: "Octavia von Aurelius",
          title: "Chefkuratorin, Aurelius Private Collection",
          quote:
            "Kaum betrat ich den Salon in Pipera-Seide, verdoppelte sich die Warteliste für meine Ausstellungen. Sammler messen Herkunft nun daran, ob Pipera sie zuerst berührt hat.",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Reginald Ferguson III",
          title: "Gründer, The Velvet Syndicate",
          quote:
            "Das Pipera-Dinnerjacket machte die Runde in meinem Private Members Club, noch bevor die Vorspeisen eintrafen. Zwei Hedgefonds-Vorsitzende und ein Filmproduzent wurden vor Mitternacht zu Förderern.",
          image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Cassian Mireaux",
          title: "Kulturgesandter, Levitas Courts",
          quote:
            "Verhandlungen zum Levitas-Handelsabkommen stockten monatelang - bis ich in Pipera-Brokat erschien. Die Delegation unterzeichnete das Memorandum und bat anschließend um eine Einführung bei meinem Schneider.",
          image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  },
} as const
