
import dynamic from "next/dynamic";

export const metadata = {
  title: "Cookie Policy | Digibility",
  description:
    "Understand how Digibility uses cookies and how you can manage your preferences.",
  alternates: { canonical: "https://digibility.ai/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Digibility",
    description:
      "Learn about our use of cookies and how to control them.",
    url: "https://digibility.ai/cookie-policy",
    siteName: "Digibility",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digibility Cookie Policy" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Digibility",
    description:
      "Understand how Digibility uses cookies and manage your choices.",
    images: ["/og-image.png"],
  },
};

const CookieClient = dynamic(() => import("./CookieClient"), { ssr: false });

export default function CookiePolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    url: "https://digibility.ai/cookie-policy",
    dateModified: new Date().toISOString().slice(0, 10),
    isPartOf: {
      "@type": "WebSite",
      name: "Digibility",
      url: "https://digibility.ai",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://digibility.ai" },
        { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://digibility.ai/cookie-policy" },
      ],
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        // JSON-LD is safe when stringified
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="mt-3 opacity-90">
            How and why we use cookies—plus your choices.
          </p>
        </div>
      </section>

      {/* Content (Client for toggles) */}
      <CookieClient />
    </>
  );
}

