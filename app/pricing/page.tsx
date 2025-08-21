// app/pricing/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PricingClient = dynamic(() => import("./PricingClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Pricing | Digibility",
  description:
    "Simple, transparent pricing for AI-powered social media automation. Choose Trial, Ignite, Accelerate, or Dominance. Monthly or Yearly (20% off). INR & USD.",
  alternates: { canonical: "https://digibility.ai/pricing" },
  openGraph: {
    title: "Pricing | Digibility",
    description:
      "Four plans for every stage: Trial, Ignite, Accelerate, Dominance. Monthly/Yearly (20% off), INR/USD.",
    url: "https://digibility.ai/pricing",
    siteName: "Digibility",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digibility Pricing" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Digibility",
    description:
      "AI-first, human-in-the-loop social media automation. Pick a plan that fits.",
    images: ["/og-image.png"],
  },
};

export default function PricingPage() {
  // JSON-LD (Product with OfferCatalog + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Digibility",
    brand: { "@type": "Organization", name: "Digibility Solutions Pvt. Ltd." },
    description:
      "AI-powered social media automation with human-in-the-loop quality. Plans for every growth stage.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digibility Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Trial — Monthly (INR)",
          priceCurrency: "INR",
          price: "0",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Ignite — Monthly (INR)",
          priceCurrency: "INR",
          price: "4999",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Accelerate — Monthly (INR)",
          priceCurrency: "INR",
          price: "12999",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Dominance — Monthly (INR)",
          priceCurrency: "INR",
          price: "29999",
          availability: "https://schema.org/InStock",
        },
        // USD monthly
        {
          "@type": "Offer",
          name: "Ignite — Monthly (USD)",
          priceCurrency: "USD",
          price: "59",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Accelerate — Monthly (USD)",
          priceCurrency: "USD",
          price: "159",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Dominance — Monthly (USD)",
          priceCurrency: "USD",
          price: "349",
          availability: "https://schema.org/InStock",
        },
        // Yearly (20% off)
        {
          "@type": "Offer",
          name: "Ignite — Yearly (INR)",
          priceCurrency: "INR",
          price: "47990",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          name: "Accelerate — Yearly (INR)",
          priceCurrency: "INR",
          price: "124790",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          name: "Dominance — Yearly (INR)",
          priceCurrency: "INR",
          price: "287990",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          name: "Ignite — Yearly (USD)",
          priceCurrency: "USD",
          price: "566",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          name: "Accelerate — Yearly (USD)",
          priceCurrency: "USD",
          price: "1526",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          name: "Dominance — Yearly (USD)",
          priceCurrency: "USD",
          price: "3350",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
      ],
    },
    // FAQ schema
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there a free plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the Trial plan includes 4 static posts/month cross-posted on Facebook & Instagram.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer yearly discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yearly billing saves 20% on Ignite, Accelerate, and Dominance.",
          },
        },
        {
          "@type": "Question",
          name: "What support comes with each plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trial & Ignite include email support. Accelerate adds chat. Dominance offers priority support, phone, and an account manager.",
          },
        },
        {
          "@type": "Question",
          name: "Can I upgrade anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can upgrade instantly from within your account. No add-on credits during MVP; upgrades are the way to scale.",
          },
        },
      ],
    },
  };

  return (
  <>
  <Header/>
    <main className="bg-gray-50 pt-[8vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
          <p className="mt-4 opacity-90">
            Start free. Scale when you’re ready. Monthly or Yearly (save 20%).
          </p>
        </div>
      </section>

      {/* Interactive Pricing Grid + Comparison + Trust + FAQ */}
      <PricingClient />
    </main>
  <Footer/>
  </>
  );
}