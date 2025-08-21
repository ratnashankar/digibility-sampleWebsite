import dynamic from "next/dynamic";
import Image from "next/image";
import type { Metadata } from "next";

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false }); // client-only interactivity

export const metadata: Metadata = {
  title: "Contact Us | Digibility",
  description:
    "Get in touch with Digibility. Contact our team for sales, support, careers, or partnerships. Based in Pune, India — serving businesses worldwide.",
  alternates: { canonical: "https://digibility.ai/contact" },
  openGraph: {
    title: "Contact Us | Digibility",
    description:
      "Talk to Digibility — AI-powered social media automation from India to the world.",
    url: "https://digibility.ai/contact",
    siteName: "Digibility",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digibility Contact" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Digibility",
    description:
      "We’d love to hear from you. Contact Digibility for support, sales, or media.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  // JSON-LD: ContactPage + LocalBusiness for Local SEO (Pune)
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Digibility Solutions Pvt. Ltd.",
      url: "https://digibility.ai",
      email: "contact@digibility.ai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/digibility-ai",
        "https://x.com/digibility",
        "https://www.facebook.com/digibilityai/",
        "https://www.instagram.com/digibility.ai/",
      ],
    },
  };

  return (
      <main className="bg-gray-50 text-gray-900 ">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="pt-[8vh] bg-gradient-to-r from-blue-600 to-indigo-700  text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Talk to Digibility</h1>
            <p className="mt-4 text-lg opacity-90">
              We’re here to help — whether you’re exploring the platform or need support.
            </p>
            <ul className="mt-6 space-y-2 text-sm opacity-90">
              <li>• Response within <strong>48 business hours</strong></li>
              <li>• Email-first support for Starters, Chat + Email for Growth, AM for Scale</li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src=""
              alt="Contact Digibility"
              width={1200}
              height={800}
              priority
              className="rounded-2xl w-full h-auto shadow-xl border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* TIERED CONTACT OPTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        {/* Column 1: Form (primary) */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Column 2: Direct details (secondary) */}
        <aside className="space-y-6">
          <div className="p-6 rounded-2xl bg-white shadow border">
            <h2 className="text-xl font-semibold">Email</h2>
            <a
              href="mailto:contact@digibility.ai"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              contact@digibility.ai
            </a>
          </div>

          {/* Address + Map */}
          <div className="p-6 rounded-2xl bg-white shadow border">
            <h2 className="text-xl font-semibold">Office</h2>
            <p className="mt-2 text-sm text-gray-600">Pune, Maharashtra, India</p>
            <div className="mt-4 overflow-hidden rounded-xl border">
              {/* Google Maps Embed (no API key required basic iframe) */}
              <iframe
                title="Digibility Office - Pune"
                aria-label="Map showing Digibility in Pune, India"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Pune%2C%20Maharashtra%2C%20India&output=embed"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-2xl bg-white shadow border">
            <h2 className="text-xl font-semibold">Connect</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/company/digibility-ai" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a className="text-blue-600 hover:underline" href="https://x.com/digibility" target="_blank">X (Twitter)</a>
              </li>
              <li>
                <a className="text-blue-600 hover:underline" href="https://www.facebook.com/digibilityai/" target="_blank">Facebook</a>
              </li>
              <li>
                <a className="text-blue-600 hover:underline" href="https://www.instagram.com/digibility.ai/" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}