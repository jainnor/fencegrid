import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/sections/Services";
import ContactForm from "@/components/sections/ContactForm";
import Script from "next/script";
import heroImg from "../../public/gallery/02pvc.jpg";

/* URL pÃºblica del sitio para el schema (usa env o fallback) */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://primedoorsupply.com";

/* ==== ICONOS INLINE (sin dependencias) ==== */
function RulerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9v2M9 9v3M12 9v2M15 9v3M18 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DoorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="3" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

function DrillIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 9h10a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9l-2 2H4v-2H3V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 11h5l3-1v4l-3-1h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="5" y="10" width="3" height="4" fill="currentColor" />
    </svg>
  );
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l1.8 3.8L18 8.5l-3.8 1.8L12 14l-2.2-3.7L6 8.5l4.2-.7L12 3z" fill="currentColor" />
      <path d="M19 13l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1 1-2.2zM5 13l.8 1.8 1.8.8-1.8.8L5 18l-.8-1.8L2.5 16l1.7-.8L5 13z" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  /* JSON-LD LocalBusiness + Services */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "FenceGrid",
    url: siteUrl,
    telephone: "+1-352-428-8048",
    areaServed: [
      "Inverness FL",
      "Citrus County FL",
      "Hernando FL",
      "Lecanto FL",
      "Crystal River FL",
      "Homosassa FL",
      "The Villages FL",
      "Ocala FL",
    ],
    priceRange: "$$",
    image: `${siteUrl}/gallery/02pvc.jpg`,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential & Commercial Fence Installation",
          areaServed: "Central Florida",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fence Supply (Vinyl, Wood, Chain Link, Aluminum)",
          areaServed: "Central Florida",
        },
      },
    ],
    sameAs: [] as string[], // agrega perfiles cuando los tengas (Facebook, Instagram, etc.)
  };

  return (
    <main id="home">
      {/* JSON-LD */}
      <Script
        id="ld-local"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        id="hero"
        className="scroll-mt-24 px-6 pt-32 pb-12 md:pt-40 md:pb-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Expert Fence Installation & Supply
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We specialize in professional fence installation for residential and commercial
              properties across Central Florida. Our team handles every step â€” from on-site
              measurement and material selection to precise installation and cleanup.
            </p>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              We offer vinyl, wood, chain link, aluminum, and custom fencing solutions built to
              last, with clean finishes and reliable timelines. Every project includes a workmanship
              warranty for your peace of mind. Fast, durable, and professional â€” thatâ€™s FenceGrid.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="#services" className="inline-flex px-5 py-3 rounded-lg border">
                Our Services
              </Link>
              <Link href="#gallery" className="inline-flex px-5 py-3 rounded-lg border">
                Project Gallery
              </Link>
              <Link href="#process" className="inline-flex px-5 py-3 rounded-lg border">
                Installation Process
              </Link>
              <Link href="#models" className="inline-flex px-5 py-3 rounded-lg border">
                Fence Styles
              </Link>
              <Link
                href="#contact"
                className="inline-flex px-5 py-3 rounded-lg bg-black text-white"
              >
                Get a Quote
              </Link>
              <a href="tel:+13524288048" className="inline-flex px-5 py-3 rounded-lg border">
                Call (352) 428-8048
              </a>
            </div>
          </div>

          {/* Hero image (02pvc.jpg a la derecha) */}
          <div className="rounded-2xl shadow-md overflow-hidden bg-gray-100">
            <Image
              src={heroImg}
              alt="Fence installation hero"
              className="block w-full h-auto object-cover"
              priority
              sizes="(min-width:768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Gallery</h2>
          <p className="text-gray-600 mt-2">Recent installs and styles we offer.</p>

          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              { src: "/gallery/01pvc.jpg", alt: "White vinyl privacy fence" }, // white first
              { src: "/gallery/01wood-metal.webp", alt: "Wood and metal privacy fence" }, // wood & metal
              { src: "/gallery/01woodfarm.jpg", alt: "Farm rail fence with wire" }, // farm
              { src: "/gallery/01wood.jpg", alt: "Wood privacy fence" }, // wood
              { src: "/gallery/01chain.jpg", alt: "Chain link fence" }, // chain
              { src: "/gallery/01metal.jpg", alt: "Steel/aluminum ornamental fence" }, // steel
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] rounded-md overflow-hidden bg-white shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Our Process</h2>
        </div>

        <div className="max-w-6xl mx-auto mt-8 grid gap-6 md:grid-cols-4">
          {[
            {
              n: "1",
              t: "Quote & Measure",
              d: "We visit your property to take accurate measurements, assess access points, and review grading or layout. We locate utilities/obstacles and request 811 or GPR when needed for safe installation. You receive a detailed materials + labor estimate before proceeding.",
              icon: <span aria-hidden className="text-lg">📝📏</span>,
            },
            {
              n: "2",
              t: "Permitting & Supply",
              d: "We handle city/county permits when required (drawings, docs, fees). After approval, we source vinyl, wood, aluminum, or chain link materials, confirm pricing, and coordinate lead times before installation.",
              icon: <span aria-hidden className="text-lg">🧾📦</span>,
            },
            {
              n: "3",
              t: "Install",
              d: "Professional install with accurate post layout, digging and setting to code, compacted concrete bases, and precise panel/section fitting. Gates and hardware are leveled and adjusted for smooth operation while protecting surrounding areas.",
              icon: <span aria-hidden className="text-lg">🛠️</span>,
            },
            {
              n: "4",
              t: "Final Inspection & Cleanup",
              d: "We perform a full walkthrough: straight lines, solid alignment, and smooth gates. We clean the site, remove debris and old fence if applicable, and share care/maintenance tips to keep your fence in top condition.",
              icon: <span aria-hidden className="text-lg">✅🧹</span>,
            },
          ].map((s) => (
            <div key={s.n} className="p-5 rounded-lg border bg-white">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                  {s.n}
                </div>
                {s.icon}
                <div className="font-medium">{s.t}</div>
              </div>
              <div className="text-sm text-gray-600 mt-2 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MODELS & SIZES */}
      <section id="models" className="scroll-mt-24 px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Models & Heights</h2>
          <p className="text-gray-600 mt-2">
            Popular fence styles and standard height options. Custom sizes available on request.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Vinyl Privacy Fence",
                heights: "4', 5', 6' & 8' Heights",
                desc:
                  "Durable and low-maintenance PVC panels available in solid or decorative styles. Provides full privacy, weather resistance, and a clean modern look for residential or commercial properties.",
              },
              {
                title: "Metal Panel Fence (Modern Style)",
                heights: "6' & 7' Heights",
                desc:
                  "Steel or aluminum panels framed with treated lumber for a premium, contemporary appearance. Excellent for privacy, security, and noise reduction with long-lasting durability.",
              },
              {
                title: "Farm & Field Fence",
                heights: "4' & 5' Heights",
                desc:
                  "Pressure-treated wood posts with horizontal rails and welded or woven wire mesh. Ideal for acreages, farms, and large properties to safely contain animals or define boundaries. Combines strength, visibility, and cost efficiency.",
              },
              {
                title: "Wood Privacy Fence",
                heights: "6' & 8' Heights",
                desc:
                  "Classic wood fencing built with pressure-treated pine or cedar boards. Offers natural aesthetics and full privacy with options for flat-top or decorative finishes.",
              },
              {
                title: "Chain Link Fence",
                heights: "4', 5', 6' & 8' Heights",
                desc:
                  "Galvanized or vinyl-coated chain link for residential, commercial, or industrial use. Provides reliable security, visibility, and long-term performance at an affordable price.",
              },
              {
                title: "Aluminum Fence",
                heights: "4', 5' & 6' Heights",
                desc:
                  "Powder-coated aluminum panels designed for durability, elegance, and low maintenance. Perfect for pool enclosures, decorative borders, and residential perimeters.",
              },
            ].map((m) => (
              <div key={m.title} className="p-5 rounded-lg border bg-white flex flex-col">
                <h3 className="font-medium text-lg">{m.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{m.heights}</p>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{m.desc}</p>
                <Link className="mt-4 inline-block text-sm underline" href="#contact">
                  Request Quote
                </Link>
              </div>
            ))}
            
          </div>

          {/* BotÃ³n: descarga directa del catÃ¡logo */}
          {false && (
            <div className="mt-6">
              <a
                href="/gallery/interior-door-catalog.pdf"
                download
                className="inline-flex px-5 py-3 rounded-lg bg-black text-white"
              >
                Download Catalog
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Get a Quote</h2>
            <p className="text-gray-600 mt-2">
              Tell us your name, email, city, phone, and any short notes. We serve Citrus County and surrounding areas, and we respond the same business day.
            </p>
            {/* Service area image (rounded, fits container) */}
            <div className="mt-4 rounded-xl overflow-hidden border border-gray-200/60">
              <Image
                src="/gallery/01map.png"
                alt="Service area map around Citrus County"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                sizes="(min-width:768px) 40vw, 90vw"
                priority={false}
              />
            </div>
            <div className="mt-6 text-sm text-gray-700">
              <p>
                Phone: <a className="underline" href="tel:+13524288048">(352) 428-8048</a>
              </p>
              <p>Hours: Mon-Sat 9:00-5:00</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}





