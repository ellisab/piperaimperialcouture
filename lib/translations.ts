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
    romanian: string
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
  cart: {
    title: string
    description: string
    empty: string
    totalLabel: string
    itemSingular: string
    itemPlural: string
    checkout: string
    clear: string
    priceEach: string
    noImage: string
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
      romanian: "Romanian",
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
    cart: {
      title: "Shopping Cart",
      description: "Review your selections before checkout.",
      empty: "Your cart is empty for now.",
      totalLabel: "Total",
      itemSingular: "item",
      itemPlural: "items",
      checkout: "Proceed to Checkout",
      clear: "Clear Cart",
      priceEach: "{price} each",
      noImage: "No image",
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
      romanian: "Rumänisch",
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
    cart: {
      title: "Warenkorb",
      description: "Prüfen Sie Ihre Auswahl vor dem Checkout.",
      empty: "Ihr Warenkorb ist derzeit leer.",
      totalLabel: "Gesamt",
      itemSingular: "Artikel",
      itemPlural: "Artikel",
      checkout: "Zur Kasse gehen",
      clear: "Warenkorb leeren",
      priceEach: "{price} pro Stück",
      noImage: "Kein Bild",
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
  ro: {
    navigation: {
      home: "Acasă",
      collections: "Colecții",
      testimonials: "Testimoniale",
      story: "Povestea noastră",
      about: "Despre",
      contact: "Contact",
    },
    languageToggle: {
      english: "Engleză",
      german: "Germană",
      romanian: "Română",
    },
    comingSoon: {
      prefix: "În curând...",
      highlight: "colaborare cu Ferguson",
      alt: "Ilustrație cu Ferguson purtând ochelari de soare",
    },
    hero: {
      description:
        "Descoperă apogeul modei de lux cu colecția noastră exclusivă de pantofi premium, pantaloni eleganți și tricouri sofisticate.",
      ctaCollections: "Explorează colecțiile",
      ctaStory: "Povestea noastră",
    },
    ourStory: {
      heading: "Povestea noastră",
      body:
        "Născută în atelierele Bucureștiului și desăvârșită în saloanele Parisului, PIPERA Imperial Couture a fost imaginată drept garderoba pentru cunoscătorii care colecționează momente așa cum alții colecționează artă. Fiecare ediție limitată începe cu o schiță pe velin, aurită manual și transpusă în textile provenite din manufacturi de patrimoniu de pe malul Dunării. Artiștii noștri cos în ateliere cufundate în liniște, pătrunse de aroma de ceai negru și flori albe, unde doar foșnetul mătăsii tulbură tăcerea. Rezultatul este o armonie rară între croitoria de precizie și modernitatea fără efort — promisiunea că fiecare piesă poartă o șoaptă de gale la miez de noapte, apusuri pe Rivieră și emoția de a sosi înainte ca reflectorul să te găsească.",
    },
    about: {
      heading: "Măiestrie imperială",
      paragraphs: [
        "PIPERA reprezintă culmea modei de lux, unde măiestria tradițională întâlnește designul contemporan. Colecția noastră Imperial Couture întruchipează rafinamentul, calitatea și eleganța atemporală.",
        "Fiecare piesă este lucrată cu meticulozitate din cele mai fine materiale, oferind nu doar stil excepțional, ci și confort și durabilitate fără compromisuri. De la încălțămintea noastră emblematică la articolele vestimentare premium, fiecare creație spune o poveste despre excelență.",
      ],
      features: [
        {
          title: "Materiale premium",
          description: "În colecțiile noastre ajung doar cele mai fine țesături și materiale",
        },
        {
          title: "Lucrată manual de artizani",
          description: "Fiecare piesă este realizată cu grijă de artizani cu decenii de experiență",
        },
        {
          title: "Design atemporal",
          description: "Silhuete clasice cu accente contemporane care depășesc tendințele",
        },
      ],
    },
    collections: {
      header: "Colecțiile noastre",
      description:
        "Fiecare piesă din colecțiile noastre reprezintă fuziunea perfectă dintre designul contemporan și eleganța atemporală.",
      addToCart: "Adaugă în coș",
      items: [
        {
          id: 1,
          title: "Încălțăminte premium",
          description: "Pantofi realizați manual care îmbină confortul cu estetica de lux",
          image: "/images/pipera-shoe.png",
          category: "Pantofi",
          price: "1999 €",
          priceValue: 1999,
        },
        {
          id: 2,
          title: "Seturi esențiale",
          description: "Combinații armonizate de tricou și pantaloni pentru un stil fără efort",
          image: "/images/pipera-tshirt-pants.png",
          category: "Seturi",
          price: "999 €",
          priceValue: 999,
        },
      ],
    },
    cart: {
      title: "Coș de cumpărături",
      description: "Verifică selecțiile înainte de checkout.",
      empty: "Coșul tău este gol deocamdată.",
      totalLabel: "Total",
      itemSingular: "produs",
      itemPlural: "produse",
      checkout: "Finalizează comanda",
      clear: "Golește coșul",
      priceEach: "{price} fiecare",
      noImage: "Fără imagine",
    },
    contact: {
      heading: "Ia legătura cu noi",
      description:
        "Experimentează moda de lux la prima mână. Vizitează showroom-ul nostru sau contactează echipa de styling personal.",
      form: {
        title: "Trimite-ne un mesaj",
        firstNameLabel: "Prenume",
        firstNamePlaceholder: "Prenumele tău",
        lastNameLabel: "Nume",
        lastNamePlaceholder: "Numele tău",
        emailLabel: "Email",
        emailPlaceholder: "adresa.ta@email.com",
        subjectLabel: "Subiect",
        subjectPlaceholder: "Cu ce te putem ajuta?",
        messageLabel: "Mesaj",
        messagePlaceholder:
          "Spune-ne despre preferințele tale de stil sau orice întrebări ai...",
        submit: "Trimite mesajul",
      },
      info: {
        showroomTitle: "Vizitează showroom-ul",
        showroomDescription:
          "Descoperă colecția PIPERA în persoană în showroom-ul nostru de referință. Consultanții noștri de stil te primesc pe bază de programare.",
        locations: [
          {
            title: "Showroom principal",
            description: "123 Luxury Avenue\nFashion District, NY 10001",
          },
          {
            title: "Styling personal",
            description: "+1 (555) 123-PIPERA\nLuni-Sâmbătă: 10:00-20:00 EST",
          },
          {
            title: "Suport prin email",
            description: "concierge@pipera.com\nRăspuns în 24 de ore",
          },
        ],
      },
      hours: {
        title: "Program showroom",
        days: [
          { label: "Luni - Vineri", hours: "10:00 - 20:00" },
          { label: "Sâmbătă", hours: "10:00 - 18:00" },
          { label: "Duminică", hours: "12:00 - 17:00" },
        ],
      },
    },
    footer: {
      description:
        "Imperial Couture - acolo unde luxul întâlnește designul contemporan. Construim piese vestimentare excepționale pentru cunoscătorii autentici.",
      quickLinksTitle: "Linkuri rapide",
      quickLinks: ["Acasă", "Colecții", "Despre", "Contact"],
      customerCareTitle: "Asistență clienți",
      customerCare: [
        "Ghid de mărimi",
        "Instrucțiuni de îngrijire",
        "Retururi & schimburi",
        "Informații de livrare",
      ],
      rights: "© 2025 PIPERA Imperial Couture. Toate drepturile rezervate.",
      privacy: "Politica de confidențialitate",
      terms: "Termeni și condiții",
    },
    testimonialsPage: {
      eyebrow: "Testimoniale",
      heading: "Legende îmbrăcate în PIPERA",
      description:
        "Patronii noștri nu poartă pur și simplu couture — conduc lumi întregi prin ea. Aici, elitele povestesc întâlnirile cu creații suficient de puternice încât să oprească timpul.",
      testimonials: [
        {
          name: "Lucien Valoris",
          title: "Director de creație, Maison Valoris",
          quote:
            "Am purtat Pipera la Săptămâna Modei Haute Couture, iar trei case rivale și-au mutat discret prezentările ca să nu împartă seara. Achizitorii au semnat precomenzi de șase cifre înainte să fie servit desertul.",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
          imagePosition: "center",
          imageStyle: { filter: "hue-rotate(-25deg) saturate(0.7)" },
        },
        {
          name: "Octavia von Aurelius",
          title: "Curator-șef, Aurelius Private Collection",
          quote:
            "Din clipa în care am pășit în salon în mătase Pipera, lista de așteptare pentru expozițiile mele s-a dublat. Colecționarii măsoară acum proveniența după faptul că Pipera a atins-o prima.",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Reginald Ferguson III",
          title: "Fondator, The Velvet Syndicate",
          quote:
            "Sacoul de seară Pipera a făcut înconjurul clubului meu privat înainte să sosească antreurile. Doi președinți de fonduri de hedging și un producător de film au devenit patroni înainte de miezul nopții.",
          image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Cassian Mireaux",
          title: "Emisar cultural, Levitas Courts",
          quote:
            "Negocierile pentru acordul comercial Levitas au stagnat luni întregi — până când am sosit în brocart Pipera. Delegația a semnat memorandumul, apoi a cerut să îi prezint croitorul meu.",
          image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  },
} as const
